import { cache } from 'react';
import { supabase } from "@/lib/supabaseClient";
import CategoryNewsClient from "@/components/News/CategoryNewsClient";
import NewsContent from "@/components/News/NewsContent";
import { getCategoryNews } from "@/app/actions/getCategoryNews";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
import { extractFAQFromMarkdown, buildFAQSchema } from '@/lib/extractFAQFromMarkdown';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/News`;

export const revalidate = 3600;

const getCoverImageUrl = (path) => {
  if (!path) return null;
  const cleanPath = path.trim();
  if (cleanPath.startsWith("http")) return cleanPath;
  return `${BUCKET_URL}/${cleanPath}`;
};

const timeAgo = (dateString) => {
  if (!dateString) return "";
  const now = new Date();
  const past = new Date(dateString);
  const diff = Math.floor((now - past) / 1000);
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
  return past.toLocaleDateString("en-GB");
};

function buildArticleSchema(article, imageUrl, siteUrl) {
  if (!article) return null;
  
  const publishedDate = article.published_at 
    ? new Date(article.published_at).toISOString()
    : new Date().toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "image": imageUrl ? [imageUrl] : [],
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Radhya Education Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Radhya Education Academy",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/radhyaLogo.png`
      }
    }
  };
}

const getNewsRouteData = cache(async (slug) => {
  const { data: category } = await supabase
    .from("news_categories")
    .select("category_id, category_name, slug, metaTitle, metaDescription, categoryTitle, content")
    .eq("slug", slug)
    .single();

  if (category) {
    const { categories, news, categoryName } = await getCategoryNews(slug);
    return {
      type: 'category',
      category,
      categories,
      news,
      categoryName: categoryName || category.category_name,
      categoryTitle: category.categoryTitle,
      categoryContent: category.content || null,
    };
  }

  const { data: article } = await supabase
    .from("news")
    .select("news_id, slug, title, content, image_url, published_at, primary_category_id, excerpt")
    .eq("slug", slug)
    .single();

  if (!article) {
    return { type: 'not_found' };
  }

  const { data: categoryMap } = await supabase
    .from("news_category_map")
    .select("category_id, is_primary")
    .eq("news_id", article.news_id);

  let categoryData = null;
  
  if (categoryMap && categoryMap.length > 0) {
    const primaryMap = categoryMap.find(m => m.is_primary) || categoryMap[0];
    const { data: catData } = await supabase
      .from("news_categories")
      .select("slug, category_name")
      .eq("category_id", primaryMap.category_id)
      .single();
    categoryData = catData;
  } else if (article.primary_category_id) {
    const { data: fallbackCat } = await supabase
      .from("news_categories")
      .select("slug, category_name")
      .eq("category_id", article.primary_category_id)
      .single();
    categoryData = fallbackCat;
  }

  const { data: relatedMap } = await supabase
    .from("news_category_map")
    .select("category_id, is_primary")
    .eq("news_id", article.news_id);

  const primaryCategoryId = relatedMap?.find(m => m.is_primary)?.category_id 
    || relatedMap?.[0]?.category_id 
    || article.primary_category_id;

  let relatedNews = [];
  
  if (primaryCategoryId) {
    const { data: relatedViaMap } = await supabase
      .from("news_category_map")
      .select(`
        news_id,
        news_categories (category_name, slug)
      `)
      .eq("category_id", primaryCategoryId)
      .neq("news_id", article.news_id);
    
    const relatedIds = (relatedViaMap || []).map(r => r.news_id);
    
    if (relatedIds.length > 0) {
      const { data: relatedData } = await supabase
        .from("news")
        .select("news_id, title, slug, published_at, primary_category_id")
        .in("news_id", relatedIds)
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(6);
      
      const { data: primaryCatData } = await supabase
        .from("news_categories")
        .select("category_name, slug")
        .eq("category_id", primaryCategoryId)
        .single();
      
      const relatedWithCat = (relatedData || []).map(item => ({
        ...item,
        categorySlug: primaryCatData?.slug || '',
        categoryName: primaryCatData?.category_name || '',
        formattedDate: timeAgo(item.published_at)
      }));
      
      relatedNews = relatedWithCat;
    }
  }

  const imageUrl = getCoverImageUrl(article.image_url);
  const articleFormattedDate = timeAgo(article.published_at);
  const articleSchema = buildArticleSchema(article, imageUrl, siteUrl);
  const faqs = extractFAQFromMarkdown(article.content);
  const faqSchema = buildFAQSchema(faqs);

  return {
    type: 'article',
    article,
    categoryData,
    relatedNews,
    imageUrl,
    articleFormattedDate,
    articleSchema,
    faqSchema,
  };
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getNewsRouteData(slug);

  if (data.type === 'category') {
    return {
      title: data.category.metaTitle || `${data.category.category_name} News | Radhya Education Academy`,
      description: data.category.metaDescription || `Latest ${data.category.category_name} news and updates from Radhya Education Academy`,
      alternates: {
        canonical: `${siteUrl}/news/${slug}/`,
      },
    };
  }

  if (data.type === 'article') {
    const { article, imageUrl } = data;
    const articleSchema = buildArticleSchema(article, imageUrl, siteUrl);

    return {
      title: article.title,
      description: article.excerpt || "Read the latest news and articles from Radhya Education Academy",
      alternates: {
        canonical: `${siteUrl}/news/${slug}/`,
      },
      openGraph: {
        title: article.title,
        description: article.excerpt,
        url: `${siteUrl}/news/${slug}/`,
        siteName: "Radhya Education Academy",
        type: "article",
        images: imageUrl ? [{ url: imageUrl }] : [],
      },
      other: {
        "schema-article": JSON.stringify(articleSchema),
      },
    };
  }

  return {
    title: "Not Found | Radhya Education Academy",
    robots: { index: false, follow: false },
  };
}

export default async function NewsPage({ params }) {
  const { slug } = await params;
  const data = await getNewsRouteData(slug);

  if (data.type === 'category') {
    return (
      <>
        <BreadcrumbSchema
          items={[
            { name: "Home", item: siteUrl },
            { name: "News", item: `${siteUrl}/news/` },
            { name: data.categoryName, item: `${siteUrl}/news/${slug}/` },
          ]}
        />
        <CategoryNewsClient
          categories={data.categories}
          news={data.news}
          categoryName={data.categoryName}
          categoryTitle={data.categoryTitle}
          slug={slug}
          categoryContent={data.categoryContent}
        />
      </>
    );
  }

  if (data.type === 'not_found' || !data.article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#270652] mb-4">Not Found</h1>
          <p className="text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "News", item: `${siteUrl}/news/` },
          { name: data.article.title, item: `${siteUrl}/news/${slug}/` },
        ]}
      />
      <NewsContent 
        article={data.article}
        articleFormattedDate={data.articleFormattedDate}
        categoryData={data.categoryData}
        related={data.relatedNews}
        imageUrl={data.imageUrl}
        articleSchema={data.articleSchema}
        faqSchema={data.faqSchema}
      />
    </>
  );
}

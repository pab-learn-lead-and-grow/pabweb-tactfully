import { supabase } from "@/lib/supabaseClient";
import BlogContent from "@/components/Blogs/BlogContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const revalidate = 3600;

function buildArticleSchema(article, imageUrl, siteUrl) {
  if (!article) return null;
  
  const publishedDate = article.published_at 
    ? new Date(article.published_at).toISOString().split('T')[0]
    : null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    ...(publishedDate && { "datePublished": publishedDate }),
    ...(imageUrl && { "image": imageUrl }),
    "description": article.excerpt,
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

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data: article } = await supabase
    .from("blogs")
    .select("title, excerpt, image_url, published_at, \"metaTitle\", \"metaDescription\"")
    .eq("slug", slug)
    .single();

  if (article) {
    const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Blogs`;
    const imageUrl = article.image_url?.startsWith("http") 
      ? article.image_url 
      : `${BUCKET_URL}/${article.image_url}`;

    const articleSchema = buildArticleSchema(article, imageUrl, siteUrl);

    return {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt || "Read the latest blogs and articles from Radhya Education Academy",
      alternates: {
        canonical: `${siteUrl}/blogs/${slug}/`,
      },
      openGraph: {
        title: article.metaTitle || article.title,
        description: article.metaDescription || article.excerpt,
        url: `${siteUrl}/blogs/${slug}/`,
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
    alternates: {
      canonical: `${siteUrl}/blogs/${slug}/`,
    },
  };
}

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

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const { data: article } = await supabase
    .from("blogs")
    .select("blogs_id, slug, title, content, image_url, published_at, primary_category_id, excerpt, \"metaTitle\", \"metaDescription\"")
    .eq("slug", slug)
    .single();

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#270652] mb-4">Not Found</h1>
          <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const { data: categoryMap } = await supabase
    .from("blogs_category_map")
    .select("category_id, is_primary")
    .eq("blogs_id", article.blogs_id);

  let categoryData = null;
  
  if (categoryMap && categoryMap.length > 0) {
    const primaryMap = categoryMap.find(m => m.is_primary) || categoryMap[0];
    const { data: catData } = await supabase
      .from("blogs_categories")
      .select("category_name")
      .eq("category_id", primaryMap.category_id)
      .single();
    categoryData = catData;
  } else if (article.primary_category_id) {
    const { data: fallbackCat } = await supabase
      .from("blogs_categories")
      .select("category_name")
      .eq("category_id", article.primary_category_id)
      .single();
    categoryData = fallbackCat;
  }

  const { data: relatedMap } = await supabase
    .from("blogs_category_map")
    .select("category_id, is_primary")
    .eq("blogs_id", article.blogs_id);

  const primaryCategoryId = relatedMap?.find(m => m.is_primary)?.category_id 
    || relatedMap?.[0]?.category_id 
    || article.primary_category_id;

  let relatedBlogs = [];
  
  if (primaryCategoryId) {
      const { data: relatedViaMap } = await supabase
        .from("blogs_category_map")
        .select(`
          blogs_id,
          blogs_categories (category_name)
        `)
        .eq("category_id", primaryCategoryId)
        .neq("blogs_id", article.blogs_id);
    
    const relatedIds = (relatedViaMap || []).map(r => r.blogs_id);
    
    if (relatedIds.length > 0) {
      const { data: relatedData } = await supabase
        .from("blogs")
        .select("blogs_id, title, slug, published_at, primary_category_id, image_url")
        .in("blogs_id", relatedIds)
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(6);
      
      const { data: primaryCatData } = await supabase
        .from("blogs_categories")
        .select("category_name")
        .eq("category_id", primaryCategoryId)
        .single();
      
      const relatedWithCat = (relatedData || []).map(item => ({
        ...item,
        categoryName: primaryCatData?.category_name || '',
        formattedDate: timeAgo(item.published_at)
      }));
      
      relatedBlogs = relatedWithCat;
    }
  }

  const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Blogs`;

  const getCoverImageUrl = (path) => {
    if (!path) return null;
    const cleanPath = path.trim();
    if (cleanPath.startsWith("http")) return cleanPath;
    return `${BUCKET_URL}/${cleanPath}`;
  };

  const imageUrl = getCoverImageUrl(article.image_url);
  const articleFormattedDate = timeAgo(article.published_at);
  const articleSchema = buildArticleSchema(article, imageUrl, siteUrl);

  return (
    <BlogContent 
      article={article}
      articleFormattedDate={articleFormattedDate}
      categoryData={categoryData}
      related={relatedBlogs}
      imageUrl={imageUrl}
      articleSchema={articleSchema}
    />
  );
}

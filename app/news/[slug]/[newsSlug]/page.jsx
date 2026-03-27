// app/news/[categorySlug]/[slug]/page.jsx

import Image from "next/image";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug, newsSlug } = await params;
  const articleSlug = newsSlug;
  
  const { data: article } = await supabase
    .from("news")
    .select("title, excerpt, image_url")
    .eq("slug", articleSlug)
    .single();
    
  if (!article) {
    return {
      title: "News Article | Radhya Education Academy",
       alternates: {
        canonical: `${siteUrl}/news/${slug}/${newsSlug}/`,
      },
    };
  }
  
  const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/News`;
  const imageUrl = article.image_url?.startsWith("http") 
    ? article.image_url 
    : `${BUCKET_URL}/${article.image_url}`;
  
  return {
    title: `${article.title}`,
    description: article.excerpt || "Read the latest news and articles from Radhya Education Academy",
     alternates: {
      canonical: `${siteUrl}/news/${slug}/${newsSlug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/news/${slug}/${newsSlug}/`,
      siteName: "Radhya Education Academy",
      type: "article",
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}
export default async function ArticlePage({ params }) {
  const { slug, newsSlug } = await params;

  const categorySlug = slug;
  const articleSlug = newsSlug;

  const { data: article, error: articleError } = await supabase
    .from("news")
    .select("*")
    .eq("slug", articleSlug)
    .single();

  if (!article) {
    return <div className="p-20">Article not found - no data</div>;
  }

  const { data: categoryData } = await supabase
    .from("news_categories")
    .select("slug, category_name")
    .eq("category_id", article.primary_category_id)
    .single();

  if (!categoryData || categoryData.slug !== categorySlug) {
    return <div className="p-20">Article not found - category mismatch: {categoryData?.slug} !== {categorySlug}</div>;
  }

  const articleWithCategory = {
    ...article,
    category: categoryData,
  };

  /* ================= FETCH RELATED (SAME CATEGORY) ================= */

  const { data: relatedNews, error: relatedError } = await supabase
    .from("news")
    .select(`
      news_id,
      title,
      slug,
      published_at,
      is_published,
      primary_category_id,
      news_categories (
        category_id,
        category_name,
        slug
      )
    `)
    .eq("primary_category_id", article.primary_category_id)
    .eq("is_published", true)
    .neq("news_id", article.news_id)
    .order("published_at", { ascending: false })
    .limit(6);

  const related = (relatedNews || []).map(n => ({
    ...n,
    categorySlug: n.news_categories?.slug || categorySlug,
    categoryName: n.news_categories?.category_name || categoryData.category_name,
  }));

  /* ================= IMAGE URL ================= */

 const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/News`;

  const getCoverImageUrl = (path) => {
    if (!path) return null;
    const cleanPath = path.trim();
    if (cleanPath.startsWith("http")) return cleanPath;
    return `${BUCKET_URL}/${cleanPath}`;
  };

  const imageUrl = getCoverImageUrl(articleWithCategory.image_url);

  /* ================= TIME AGO ================= */

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

    return past.toLocaleDateString();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10  py-12 lg:py-24">

      {/* ================= TITLE ================= */}
      <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
        {articleWithCategory.title}
      </h1>

      {/* ================= META ================= */}
      <div className="flex items-center text-sm text-gray-500 gap-4 mb-8">
        <Link
          href={`/news/${articleWithCategory.category.slug}`}
          className="text-gray-500 hover:text-[#3C087E] font-medium"
        >
          {articleWithCategory.category.category_name}
        </Link>
        <span>•</span>
        <span>{timeAgo(articleWithCategory.published_at)}</span>
      </div>

      {/* ================= HERO IMAGE ================= */}
      {imageUrl && (
  <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-xl overflow-hidden mb-10">
    <Image
      src={imageUrl}
      alt={articleWithCategory.title}
      fill
      className="object-cover"
      sizes="100vw"
      priority
    />
  </div>
)}

      {/* ================= MARKDOWN CONTENT ================= */}
      <div className="prose prose-lg max-w-none text-gray-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {articleWithCategory.content}
        </ReactMarkdown>
      </div>

      {/* ================= RELATED SECTION ================= */}

      <div className="mt-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#3C087E] mb-8 border-l-4 border-[#FFB901] pl-4">
          In Case You Missed It
        </h2>

        {related.length === 0 ? (
          <p className="text-gray-500">No related articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((item) => (
              <Link
                key={item.news_id}
                href={`/news/${item.categorySlug}/${item.slug}`}
                className="hover:underline"
              >
                <div>
                  <h3 className="font-semibold text-lg text-black">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-xs text-gray-500 gap-3 mt-1">
                    <span>{item.categoryName}</span>
                    <span>•</span>
                    <span>{timeAgo(item.published_at)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
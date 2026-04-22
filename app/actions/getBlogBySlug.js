'use server';

import { cache } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseServer = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

function getImageUrl(path) {
  if (!path) return "/help.png";
  const cleanPath = String(path).trim();
  if (cleanPath.startsWith("http")) return cleanPath;
  if (cleanPath.includes("supabase.co")) return cleanPath;
  if (!supabaseServer) return "/help.png";
  const { data } = supabaseServer.storage.from("Blogs").getPublicUrl(cleanPath);
  return data?.publicUrl || "/help.png";
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

function buildBlogSchema(article, imageUrl) {
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

const getBlogBySlug = cache(async (slug) => {
  const cleanSlug = slug.trim();
  
  if (!supabaseServer) {
    return null;
  }
  
  try {
    const { data: article } = await supabaseServer
      .from("blogs")
      .select("blogs_id, slug, title, content, excerpt, image_url, published_at, primary_category_id, \"metaTitle\", \"metaDescription\"")
      .eq("slug", cleanSlug)
      .single();

    if (!article) {
      return null;
    }

    article.slug = article.slug?.trim() || cleanSlug;
    article.title = article.title?.trim() || "";
    article.excerpt = article.excerpt?.trim() || "";
    article.content = article.content?.trim() || "";
    article.image_url = article.image_url?.trim() || "";

    const { data: categoryMap } = await supabaseServer
      .from("blogs_category_map")
      .select("category_id, is_primary")
      .eq("blogs_id", article.blogs_id);

    let categoryData = null;
    
    if (categoryMap && categoryMap.length > 0) {
      const primaryMap = categoryMap.find(m => m.is_primary) || categoryMap[0];
      const { data: catData } = await supabaseServer
        .from("blogs_categories")
        .select("category_name")
        .eq("category_id", primaryMap.category_id)
        .single();
      categoryData = catData;
    } else if (article.primary_category_id) {
      const { data: fallbackCat } = await supabaseServer
        .from("blogs_categories")
        .select("category_name")
        .eq("category_id", article.primary_category_id)
        .single();
      categoryData = fallbackCat;
    }

    const primaryCategoryId = categoryMap?.find(m => m.is_primary)?.category_id 
      || categoryMap?.[0]?.category_id 
      || article.primary_category_id;

    let relatedBlogs = [];
    
    if (primaryCategoryId) {
      const { data: relatedViaMap } = await supabaseServer
        .from("blogs_category_map")
        .select(`
          blogs_id,
          blogs_categories (category_name)
        `)
        .eq("category_id", primaryCategoryId)
        .neq("blogs_id", article.blogs_id);
      
      const relatedIds = (relatedViaMap || []).map(r => r.blogs_id);
      
      if (relatedIds.length > 0) {
        const { data: relatedData } = await supabaseServer
          .from("blogs")
          .select("blogs_id, title, slug, published_at, primary_category_id, image_url")
          .in("blogs_id", relatedIds)
          .eq("is_published", true)
          .order("published_at", { ascending: false })
          .limit(6);
        
        const { data: primaryCatData } = await supabaseServer
          .from("blogs_categories")
          .select("category_name")
          .eq("category_id", primaryCategoryId)
          .single();
        
        const relatedWithCat = (relatedData || []).map(item => ({
          ...item,
          slug: item.slug?.trim() || "",
          title: item.title?.trim() || "",
          image_url: getImageUrl(item.image_url),
          categoryName: primaryCatData?.category_name || '',
          formattedDate: timeAgo(item.published_at)
        }));
        
        relatedBlogs = relatedWithCat;
      }
    }

    const imageUrl = getImageUrl(article.image_url);
    const articleSchema = buildBlogSchema(article, imageUrl);

    return {
      article,
      categoryData,
      related: relatedBlogs,
      imageUrl,
      articleSchema,
      articleFormattedDate: timeAgo(article.published_at)
    };
  } catch (err) {
    console.error("getBlogBySlug error:", err);
    return null;
  }
});

export { getBlogBySlug };

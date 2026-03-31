'use server';

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

let newsCache = null;
let newsCacheTimestamp = 0;
const NEWS_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getImageUrl(path) {
  if (!path) return "/help.png";
  
  const cleanPath = String(path).trim();
  
  if (cleanPath.startsWith("http")) {
    return cleanPath;
  }
  
  if (cleanPath.includes("supabase.co")) {
    return cleanPath;
  }
  
  if (!supabaseServer) return "/help.png";
  
  const { data } = supabaseServer.storage.from("News").getPublicUrl(cleanPath);
  return data?.publicUrl || "/help.png";
}

export async function getLatestNews() {
  const now = Date.now();
  
  if (newsCache && (now - newsCacheTimestamp) < NEWS_CACHE_DURATION) {
    return newsCache;
  }
  
  if (!supabaseServer) {
    return newsCache || [];
  }
  
  try {
    const { data, error } = await supabaseServer
      .from("news")
      .select(`
        news_id,
        title,
        slug,
        image_url,
        published_at,
        primary_category_id,
        news_categories (
          category_id,
          category_name,
          slug
        )
      `)
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(30);

    if (error) {
      console.error("Supabase fetch error:", error);
      return newsCache || [];
    }

    const newsWithImages = (data || []).map((item) => ({
      ...item,
      image_url: getImageUrl(item.image_url),
      categorySlug: item.news_categories?.slug || '',
      categoryName: item.news_categories?.category_name || '',
    }));

    newsCache = newsWithImages;
    newsCacheTimestamp = now;
    return newsCache;
  } catch (err) {
    console.error("getLatestNews error:", err);
    return newsCache || [];
  }
}

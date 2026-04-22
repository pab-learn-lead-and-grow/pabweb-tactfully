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
const NEWS_CACHE_DURATION = 1 * 60 * 1000; // 1 minute

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
    const [newsRes, mapRes] = await Promise.all([
      supabaseServer
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
        .limit(50),
      supabaseServer
        .from("news_category_map")
        .select(`
          news_id,
          category_id,
          is_primary
        `),
    ]);

    const newsData = newsRes.data || [];
    const mapData = mapRes.data || [];

    const newsPrimaryMap = {};
    mapData.forEach((m) => {
      if (m.is_primary === true) {
        newsPrimaryMap[m.news_id] = m.category_id;
      }
    });

    const newsWithImages = (newsData || []).map((item) => {
      const primaryCatId = newsPrimaryMap[item.news_id] || item.primary_category_id;
      const primaryCat = primaryCatId ? { 
        slug: item.news_categories?.slug, 
        category_name: item.news_categories?.category_name 
      } : null;
      
      return {
        ...item,
        image_url: getImageUrl(item.image_url),
        categorySlug: primaryCat?.slug || item.news_categories?.slug || '',
        categoryName: primaryCat?.category_name || item.news_categories?.category_name || '',
      };
    });

    newsCache = newsWithImages;
    newsCacheTimestamp = now;
    return newsCache;
  } catch (err) {
    console.error("getLatestNews error:", err);
    return newsCache || [];
  }
}
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

let newsDataCache = null;
let newsDataCacheTimestamp = 0;
const NEWS_DATA_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getNewsData() {
  const now = Date.now();
  
  if (newsDataCache && (now - newsDataCacheTimestamp) < NEWS_DATA_CACHE_DURATION) {
    return newsDataCache;
  }
  
  if (!supabaseServer) {
    return newsDataCache || { trending: [], latest: [], categories: [] };
  }
  
  try {
    const [newsRes, catRes] = await Promise.all([
      supabaseServer
        .from("news")
        .select(`
          news_id,
          title,
          slug,
          image_url,
          published_at,
          is_published,
          trending,
          primary_category_id,
          news_categories (
            category_id,
            category_name,
            slug
          )
        `)
        .eq("is_published", true),
      supabaseServer.from("news_categories").select("*"),
    ]);

    const newsData = newsRes.data || [];
    const catData = catRes.data || [];
    const catMap = {};
    catData.forEach((c) => (catMap[c.category_id] = c));

    const merged = newsData.map((item) => {
      let imageUrl = item.image_url;
      if (imageUrl && !imageUrl.startsWith("http") && supabaseServer) {
        const { data } = supabaseServer.storage.from("News").getPublicUrl(imageUrl);
        imageUrl = data?.publicUrl;
      }
      
      return {
        ...item,
        image_url: imageUrl,
        categorySlug: catMap[item.primary_category_id]?.slug || '',
        categoryName: catMap[item.primary_category_id]?.category_name || '',
        news_categories: catMap[item.primary_category_id] || null,
      };
    });

    const trending = merged
      .filter((item) => item.trending === true)
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      .slice(0, 6);

    const latest = merged
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    const categories = catData.sort((a, b) => a.category_name.localeCompare(b.category_name));

    newsDataCache = { trending, latest, categories };
    newsDataCacheTimestamp = now;
    return newsDataCache;
  } catch (err) {
    console.error("getNewsData error:", err);
    return newsDataCache || { trending: [], latest: [], categories: [] };
  }
}

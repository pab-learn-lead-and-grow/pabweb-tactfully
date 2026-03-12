'use server';

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export async function getNewsData() {
  try {
    const [mapRes, newsRes, catRes] = await Promise.all([
      supabaseServer.from("news_category_map").select("*").eq("is_primary", true),
      supabaseServer.from("news").select("*"),
      supabaseServer.from("news_categories").select("*"),
    ]);

    const mapData = mapRes.data || [];
    const newsData = newsRes.data || [];
    const catData = catRes.data || [];

    const newsMap = {};
    newsData.forEach((n) => (newsMap[n.news_id] = n));
    const catMap = {};
    catData.forEach((c) => (catMap[c.category_id] = c));

    const merged = mapData
      .map((m) => {
        const newsItem = newsMap[m.news_id];
        if (!newsItem) return null;
        
        let imageUrl = newsItem.image_url;
        if (imageUrl && !imageUrl.startsWith("http")) {
          const { data } = supabaseServer.storage.from("News").getPublicUrl(imageUrl);
          imageUrl = data?.publicUrl;
        }
        
        return {
          ...newsItem,
          image_url: imageUrl,
          categorySlug: catMap[m.category_id]?.slug,
          news_categories: catMap[m.category_id],
        };
      })
      .filter(Boolean);

    const trending = merged
      .filter((item) => item.trending === true && item.is_published === true)
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      .slice(0, 6);

    const latest = merged
      .filter((item) => item.is_published === true)
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    const categories = catData.sort((a, b) => a.category_name.localeCompare(b.category_name));

    return { trending, latest, categories };
  } catch (err) {
    console.error("getNewsData error:", err);
    return { trending: [], latest: [], categories: [] };
  }
}

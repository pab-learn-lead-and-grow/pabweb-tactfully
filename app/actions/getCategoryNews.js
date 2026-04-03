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

export async function getCategoryNews(slug) {
  if (!supabaseServer) {
    return { categories: [], news: [], categoryName: "" };
  }
  
  try {
    const { data: categoryData } = await supabaseServer
      .from("news_categories")
      .select("category_id, category_name, slug")
      .order("category_name");

    const { data: currentCategory } = await supabaseServer
      .from("news_categories")
      .select("category_id, category_name, slug")
      .eq("slug", slug)
      .single();

    if (!currentCategory) {
      return { categories: categoryData || [], news: [], categoryName: "" };
    }

    const { data: newsInCategory } = await supabaseServer
      .from("news_category_map")
      .select("news_id")
      .eq("category_id", currentCategory.category_id);

    const newsIds = (newsInCategory || []).map(n => n.news_id);

    const { data: newsData } = await supabaseServer
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
      .in("news_id", newsIds.length > 0 ? newsIds : [0])
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    const formattedNews = (newsData || []).map((item) => ({
      ...item,
      categorySlug: currentCategory.slug,
      categoryName: currentCategory.category_name,
    }));

    const attachImages = formattedNews.map((item) => {
      if (!item.image_url) return item;
      if (item.image_url.startsWith("http")) return item;
      if (!supabaseServer) return item;
      const { data } = supabaseServer.storage.from("News").getPublicUrl(item.image_url);
      return { ...item, image_url: data?.publicUrl };
    });

    return {
      categories: categoryData || [],
      news: attachImages,
      categoryName: currentCategory.category_name,
    };
  } catch (err) {
    console.error("getCategoryNews error:", err);
    return { categories: [], news: [], categoryName: "" };
  }
}
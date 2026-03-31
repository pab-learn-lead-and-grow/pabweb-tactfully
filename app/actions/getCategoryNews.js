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
      .eq("primary_category_id", currentCategory.category_id)
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    const formattedNews = (newsData || []).map((item) => ({
      ...item,
      categorySlug: item.news_categories?.slug || '',
      categoryName: item.news_categories?.category_name || '',
    }));

    const attachImages = formattedNews.map((item) => {
      if (!item.image_url) return item;
      if (item.image_url.startsWith("http")) return item;
      if (item.image_url.includes("/") === false) {
        const parts = item.image_url.split(".");
        const name = parts[0];
        const ext = parts[1];
        const fixedName = name.charAt(0).toUpperCase() + name.slice(1);
        return { ...item, image_url: `/${fixedName}.${ext}` };
      }
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

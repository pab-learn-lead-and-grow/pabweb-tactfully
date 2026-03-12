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

export async function getCategoryNews(slug) {
  try {
    const { data: categoryData } = await supabaseServer
      .from("news_categories")
      .select("category_id, category_name, slug")
      .order("category_name");

    const { data: currentCategory } = await supabaseServer
      .from("news_categories")
      .select("category_id, category_name")
      .eq("slug", slug)
      .single();

    if (!currentCategory) {
      return { categories: categoryData || [], news: [], categoryName: "" };
    }

    const { data: newsData } = await supabaseServer
      .from("news_category_map")
      .select(`
        news:news_id (
          news_id,
          title,
          slug,
          image_url,
          published_at
        )
      `)
      .eq("category_id", currentCategory.category_id);

    const formattedNews = newsData?.map((item) => item.news).filter(Boolean) || [];

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

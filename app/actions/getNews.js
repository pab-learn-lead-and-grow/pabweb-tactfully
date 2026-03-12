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

function getImageUrl(path) {
  if (!path) return "/help.png";
  
  const cleanPath = String(path).trim();
  
  if (cleanPath.startsWith("http")) {
    return cleanPath;
  }
  
  if (cleanPath.includes("supabase.co")) {
    return cleanPath;
  }
  
  const { data } = supabaseServer.storage.from("News").getPublicUrl(cleanPath);
  return data?.publicUrl || "/help.png";
}

export async function getLatestNews() {
  try {
    const { data, error } = await supabaseServer
      .from("news")
      .select(`
        news_id,
        title,
        slug,
        image_url,
        published_at,
        news_categories (
          category_name
        )
      `)
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(30);

    if (error) {
      console.error("Supabase fetch error:", error);
      return [];
    }

    const newsWithImages = (data || []).map((item) => ({
      ...item,
      image_url: getImageUrl(item.image_url),
    }));

    return newsWithImages;
  } catch (err) {
    console.error("getLatestNews error:", err);
    return [];
  }
}

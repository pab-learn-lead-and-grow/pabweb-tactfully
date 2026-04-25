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

export async function getFooterPages() {
  if (!supabaseServer) {
    return { pages: [] };
  }

  try {
    const { data: pagesData, error } = await supabaseServer
      .from("pages")
      .select("page_id, title, slug, keyword, image_url")
      .not("keyword", "is", null)
      .not("keyword", "eq", "")
      .eq("is_published", true)
      .order("title");

    if (error) {
      console.error("getFooterPages error:", error);
      return { pages: [] };
    }

    return { pages: pagesData || [] };
  } catch (err) {
    console.error("getFooterPages error:", err);
    return { pages: [] };
  }
}

export async function getNewsCategories() {
  if (!supabaseServer) {
    return { categories: [] };
  }

  try {
    const { data: categoriesData, error } = await supabaseServer
      .from("news_categories")
      .select("category_id, category_name, slug, categoryTitle")
      .order("category_name");

    if (error) {
      console.error("getNewsCategories error:", error);
      return { categories: [] };
    }

    return { categories: categoriesData || [] };
  } catch (err) {
    console.error("getNewsCategories error:", err);
    return { categories: [] };
  }
}
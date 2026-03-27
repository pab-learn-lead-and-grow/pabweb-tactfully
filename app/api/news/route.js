import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
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
      return NextResponse.json(
        { success: false, error: "Failed to fetch news" },
        { status: 500 }
      );
    }

    const newsWithCategory = (data || []).map((item) => ({
      ...item,
      categorySlug: item.news_categories?.slug || '',
      categoryName: item.news_categories?.category_name || '',
    }));

    return NextResponse.json({ success: true, data: newsWithCategory });
  } catch (err) {
    console.error("News API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

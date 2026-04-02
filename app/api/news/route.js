import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [newsRes, mapRes] = await Promise.all([
      supabase
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
      supabase
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

    const newsWithCategory = (newsData || []).map((item) => {
      const primaryCatId = newsPrimaryMap[item.news_id] || item.primary_category_id;
      const primaryCat = primaryCatId ? { 
        slug: item.news_categories?.slug, 
        category_name: item.news_categories?.category_name 
      } : null;
      
      return {
        ...item,
        categorySlug: primaryCat?.slug || item.news_categories?.slug || '',
        categoryName: primaryCat?.category_name || item.news_categories?.category_name || '',
      };
    });

    return NextResponse.json(
      { success: true, data: newsWithCategory },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    console.error("News API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
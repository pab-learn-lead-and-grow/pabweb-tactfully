import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [newsRes, blogsRes] = await Promise.all([
      supabase
        .from("news")
        .select(`
          news_id as id,
          title,
          slug,
          excerpt,
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
        .gte("published_at", new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString())
        .order("published_at", { ascending: false })
        .limit(20),
      supabase
        .from("blogs")
        .select(`
          blogs_id as id,
          title,
          slug,
          excerpt,
          image_url,
          published_at,
          primary_category_id,
          blogs_categories (
            category_id,
            category_name,
            slug
          )
        `)
        .eq("is_published", true)
        .gte("published_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())
        .order("published_at", { ascending: false })
        .limit(20),
    ]);

    const newsData = (newsRes.data || []).map((item) => ({
      ...item,
      type: "news",
      categorySlug: item.news_categories?.slug || "",
      categoryName: item.news_categories?.category_name || "",
      url: `/news/${item.slug}`,
    }));

    const blogsData = (blogsRes.data || []).map((item) => ({
      ...item,
      type: "blog",
      categorySlug: item.blogs_categories?.slug || "",
      categoryName: item.blogs_categories?.category_name || "",
      url: `/blogs/${item.slug}`,
    }));

    const allItems = [...newsData, ...blogsData].sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    return NextResponse.json(
      { success: true, data: allItems },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    console.error("RSS API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

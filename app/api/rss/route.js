import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [newsRes, blogsRes] = await Promise.all([
      supabase
        .from("news")
        .select("news_id, title, slug, excerpt, image_url, published_at")
        .eq("is_published", true)
        .limit(50),
      supabase
        .from("blogs")
        .select("blogs_id, title, slug, excerpt, image_url, published_at")
        .eq("is_published", true)
        .limit(50),
    ]);

    if (newsRes.error) console.error("News query error:", newsRes.error);
    if (blogsRes.error) console.error("Blogs query error:", blogsRes.error);

    const newsData = (newsRes.data || []).map((item) => ({
      ...item,
      type: "news",
      categorySlug: "",
      categoryName: "",
      url: `/news/${item.slug}`,
    }));

    const blogsData = (blogsRes.data || []).map((item) => ({
      ...item,
      type: "blog",
      categorySlug: "",
      categoryName: "",
      url: `/blogs/${item.slug}`,
    }));

    const allItems = [...newsData, ...blogsData].sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    console.log("RSS - News:", newsRes.data?.length, "Blogs:", blogsRes.data?.length);

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
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
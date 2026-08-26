import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [newsRes, blogsRes] = await Promise.all([
      supabase
        .from("news")
        .select("news_id, title, slug, excerpt, image_url, published_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(1000),
      supabase
        .from("blogs")
        .select("blogs_id, title, slug, excerpt, image_url, published_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(1000),
    ]);

    if (newsRes.error) console.error("News query error:", newsRes.error);
    if (blogsRes.error) console.error("Blogs query error:", blogsRes.error);

    const newsData = (newsRes.data || []).map((item) => ({
      ...item,
      type: "news",
      categorySlug: "",
      categoryName: "",
      slug: item.slug?.trim() || "",
      url: `/news/${item.slug?.trim() || ''}`,
    }));

    const blogsData = (blogsRes.data || []).map((item) => ({
      ...item,
      type: "blog",
      categorySlug: "",
      categoryName: "",
      slug: item.slug?.trim() || "",
      url: `/blogs/${item.slug?.trim() || ''}`,
    }));

    const allItems = [...newsData, ...blogsData].sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    return NextResponse.json(
      { success: true, data: allItems },
      {
        headers: {
          "Cache-Control": "no-store",
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
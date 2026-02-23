"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function CategoryPage() {
  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // ⏳ Time Ago Function
  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diff = Math.floor((now - past) / 1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

    return past.toLocaleDateString();
  };

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      // 1️⃣ Get All Categories
      const { data: categoryData } = await supabase
        .from("news_categories")
        .select("category_id, category_name, slug")
        .order("category_name");

      setCategories(categoryData || []);

      // 2️⃣ Get Selected Category
      const { data: currentCategory } = await supabase
        .from("news_categories")
        .select("category_id, category_name")
        .eq("slug", slug)
        .single();

      if (!currentCategory) return;

      setCategoryName(currentCategory.category_name);

      // 3️⃣ Fetch News For This Category (Mapping Table)
      const { data: newsData } = await supabase
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

      const formattedNews =
        newsData?.map((item) => item.news).filter(Boolean) || [];

      // Attach Public URLs
      const attachImages = formattedNews.map((item) => {
        if (!item.image_url) return item;

        if (item.image_url.startsWith("http")) return item;

        if (item.image_url.includes("/") === false) {
          const parts = item.image_url.split(".");
          const name = parts[0];
          const ext = parts[1];
          const fixedName = name.charAt(0).toUpperCase() + name.slice(1);
          return {
            ...item,
            image_url: `/${fixedName}.${ext}`,
          };
        }

        const { data } = supabase.storage
          .from("News")
          .getPublicUrl(item.image_url);

        return {
          ...item,
          image_url: data?.publicUrl,
        };
      });

      setNews(attachImages);
    };

    fetchData();
  }, [slug]);

  return (
    <div className="mt-10 py-12 lg:py-24 min-h-screen p-5 lg:p-[60px]">
      <div className="max-w-6xl mx-auto">

        {/* ================= CATEGORY HEADING ================= */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#270652] mb-10">
          {categoryName}
        </h1>

        {/* ================= ALL CATEGORIES ================= */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-5 border-l-4 border-l-[#FFB901] text-[#3C087E] pl-4">
            Tags Category
          </h3>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.category_id}
                href={`/news/${cat.slug}`}
                className={`text-sm px-3 py-1 rounded-md transition ${
                  slug === cat.slug
                    ? "bg-[#3C087E] text-white"
                    : "bg-[#3C087E]/10 text-[#3C087E] hover:bg-purple-200"
                }`}
              >
                {cat.category_name}
              </Link>
            ))}
          </div>
        </div>

        {/* ================= NEWS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {news.slice(0, visibleCount).map((item) => (
            <Link key={item.news_id} href={`/news/${slug}/${item.slug}`}>
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">

                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width:768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black line-clamp-2 mb-2">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-xs text-gray-500 gap-3">
                    <span>{categoryName}</span>
                    <span>•</span>
                    <span>{timeAgo(item.published_at)}</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* VIEW MORE */}
        {visibleCount < news.length && (
          <div className="flex justify-end mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-[#3C087E] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
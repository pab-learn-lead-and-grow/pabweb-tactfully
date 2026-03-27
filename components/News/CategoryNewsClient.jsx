'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryNewsClient({ categories, news, categoryName, slug }) {
  const [visibleCount, setVisibleCount] = useState(6);

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

  return (
    <div className="mt-10 py-12 lg:py-24 min-h-screen p-5 lg:p-[60px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#270652] mb-10">
          {categoryName}
        </h1>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(0, visibleCount).map((item) => (
            <Link key={item.news_id} href={`/news/${item.categorySlug}/${item.slug}`}>
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

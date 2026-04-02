'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryNewsClient({ categories, news, categoryName, categoryTitle, slug, categoryContent }) {
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
    return past.toLocaleDateString("en-GB");
  };

  const renderContent = (content) => {
    if (!content) return null;
    
    let items = content;
    if (Array.isArray(content) && content.length > 0) {
      if (Array.isArray(content[0])) {
        items = content[0];
      } else {
        items = content;
      }
    }
    
    if (!Array.isArray(items)) return null;

    return items.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl mb-2">
            {item}
          </p>
        );
      }
      if (item.type === "paragraph") {
        return (
          <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed text-justify max-w-5xl mb-2">
            {item.text}
          </p>
        );
      }
      if (item.type === "heading") {
        return (
          <p key={index} className="text-[#270652] text-lg md:text-xl font-bold leading-relaxed mb-2">
            {item.text}
          </p>
        );
      }
      if (item.type === "list") {
        return (
          <ul key={index} className="list-disc list-inside text-gray-600 text-sm md:text-base leading-tight max-w-5xl mb-4 space-y-1">
            {item.items?.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        );
      }
      return null;
    });
  };

  return (
    <div className="mt-10 py-12  min-h-screen p-5 lg:p-15">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#270652] mb-4">
          {categoryTitle}
        </h1>

        {renderContent(categoryContent)}

        <div className="mb-16 mt-10">
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
            <Link key={item.news_id} href={`/news/${item.slug}`}>
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                <div className="relative aspect-video overflow-hidden">
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
                  <h2 className="text-base font-semibold text-black  mb-2">
                    {item.title}
                  </h2>
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

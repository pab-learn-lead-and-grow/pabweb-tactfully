'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock } from "lucide-react";

export default function KnowledgeSection({ latestNews = [], latestBlogs = [] }) {
  const [isPaused, setIsPaused] = useState(false);

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

  const blogs = latestBlogs.map((blog) => ({
    id: blog.blogs_id,
    title: blog.title,
    image: blog.image_url,
    path: `/blogs/${blog.slug}`,
    categoryName: blog.categoryName || "",
    published_at: blog.published_at,
  }));

  const visibleBlogs = blogs.slice(0, 4);

  return (
    <section id="blogs" className="bg-white p-5 lg:p-[60px] mb-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10 max-w-7xl mx-auto">
        
        {/* BLOGS */}
        <div className="lg:col-span-2">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#270652]">
              Knowledge Corner
            </h2>
            <p className="text-black text-sm md:text-base mt-4 max-w-2xl">
              Stay updated with the latest industry insights and trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleBlogs.map((blog) => (
              <Link key={blog.id} href={blog.path}>
                <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-300"
                      unoptimized
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-black line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 gap-3">
                      <span>{blog.categoryName}</span>
                      <span>•</span>
                      <span>{timeAgo(blog.published_at)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/blogs"
              className="bg-[#3D077E] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View More Blogs
            </Link>
          </div>
        </div>

        {/* NEWS */}
        <div
          className=" rounded-xl shadow-md p-5 h-190 lg:sticky lg:top-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-2xl lg:text-4xl font-bold text-[#270652]">
              Latest News
            </h3>
            <Link href="/news" className="text-sm sm:text-base text-[#270652] font-medium">
              View all
            </Link>
          </div>

          <div className="overflow-hidden h-[880px]">
            <div className={isPaused ? '' : 'animate-marquee-slow'}>
              <div className="flex flex-col gap-3">
                {[...latestNews, ...latestNews].map((item, idx) => (
                  <Link
                    key={`${item.news_id}-${idx}`}
                    href={`/news/${item.slug}`}
                  >
                    <div className="flex gap-3 items-start hover:bg-white p-2 rounded-lg transition cursor-pointer">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="object-cover rounded-lg shrink-0"
                        unoptimized
                      />

                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-500 mb-0.5">
                          {item.categoryName}
                        </p>

                        <p className="text-sm font-medium text-gray-900 line-clamp-2">
                          {item.title}
                        </p>

                        <div className="flex items-center gap-1 mt-0.5 text-[10px] text-gray-500">
                          <Clock size={10} />
                          <span>{timeAgo(item.published_at)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock } from "lucide-react";

export default function KnowledgeSection({ latestNews = [] }) {
  const [isPaused, setIsPaused] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

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

  const blogs = [
    {
      id: 1,
      topic: "Advancement",
      date: "16 Jan 2026",
      title:
        "Online MBA For Career Growth: How An Online MBA Helps You Raise From Employee To Leader",
      image: "/Blog2/background.png",
      path: "/blogs/online-mba-for-career-growth",
    },
    {
      id: 2,
      topic: "NMIMS",
      date: "16 Jan 2026",
      title: "Why NMIMS Is The Top Choice For Working Professionals In India",
      image: "/Blog3/background.png",
      path: "/blogs/nmims-for-working-professionals",
    },
    {
      id: 3,
      topic: "Clarity",
      date: "16 Jan 2026",
      title:
        "Online MBA vs Regular MBA: Which One Is Right for Working Professionals?",
      image: "/Blog1/background.png",
      path: "/blogs/online-vs-regular-mba",
    },
    {
      id: 4,
      topic: "Evolution",
      date: "16 Jan 2026",
      title:
        "How Online MBA's Are Reshaping Global Careers With Data, Trends And Inspiring Success Stories",
      image: "/Blog4/background.png",
      path: "/blogs/the-digital-revolution",
    },
    {
      id: 5,
      topic: "ROI",
      date: "16 Jan 2026",
      title:
        "Top 10 Reasons A Modern Online MBA Dramatically Boosts Your Salary And Acc Career Mobility",
      image: "/Blog5/background.png",
      path: "/blogs/the-financial-catalyst",
    },
    {
      id: 6,
      topic: "Leadership",
      date: "16 Jan 2026",
      title:
        "How Online BBA Builds Entrepreneurs And How Online MBA Shapes Future CEOs",
      image: "/Blog6/background.png",
      path: "/blogs/how-online-bba-builds-entrepreneurs",
    },
  ];

  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 4);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
            {visibleBlogs.map((blog) => (
              <div key={blog.id} className="bg-white">
                <div className="relative h-[220px] bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={220}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="py-3 lg:py-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-black bg-[#FED56F] rounded-xl px-5 py-1 font-semibold text-sm">
                      {blog.topic}
                    </span>
                    <span className="text-[#222222] text-xs">
                      {blog.date}
                    </span>
                  </div>

                  <Link href={blog.path} className="hover:underline">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowAllBlogs((prev) => !prev)}
              className="bg-[#3D077E] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              {showAllBlogs ? "Show Less" : "View All"}
            </button>
          </div>
        </div>

        {/* NEWS */}
        <div
          className=" rounded-xl shadow-md p-5 h-[900px] lg:sticky lg:top-10 overflow-hidden"
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
                    href={`/news/${item.categorySlug}/${item.slug}`}
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
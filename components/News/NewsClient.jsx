"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectToday from "../NmimsSection/ConnectToday";
import UniversityCards from "../NmimsSection/Logocards";
import MotionWrapper from "../Radhya/MotionWrapper";

export default function NewsClient({ trending, latest, categories }) {
  const [activeTrending, setActiveTrending] = useState(0);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (!trending.length) return;
    const interval = setInterval(() => {
      setActiveTrending((prev) =>
        prev === trending.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [trending]);

  const currentTrending = trending[activeTrending];

  const filteredLatest = latest.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

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

   const universities = [
    {
      src: "/nmims.png",
      alt: "NMIMS",
      name: "NMIMS Mumbai",
      href: "/nmims/",
    },
    {
      src: "/manipal.png",
      alt: "Manipal",
      name: "Manipal Jaipur",
      href: "/muj/",
    },
    {
      src: "/amity.png",
      alt: "Amity",
      name: "Amity University",
      href: "/amity/",
    },
    {
      src: "/jain.png",
      alt: "Jain",
      name: "Jain University",
      href: "/jain/",
    },
    { src: "/bennett.png", href: "/bennett/", alt: "Bennett University", name: "Bennett University" },
    { src: "/shoolini.png", href: "/shoolini/", alt: "Shoolini University", name: "Shoolini University" },
    { src: "/smu.png", href: "/smu/", alt: "Sikkim Manipal University", name: "Sikkim Manipal University" },
  ];

  return (
   <>
    <div className="mt-10 py-12 p-5 lg:p-15">
      <div className="max-w-6xl mx-auto">
        <h1 className="lg:col-span-3 text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight mb-4  text-[#270625]">
          Latest Education News, Trends & Updates in India
        </h1>

        <div className="mb-10 flex gap-4 bg-[#3C087E]/10 items-center px-3 py-4 rounded-lg ">
          <svg
            className="h-4 w-4 text-[#3C087E]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-[#3C087E]"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            {currentTrending?.image_url && (
              <Link href={`/news/${currentTrending.slug}`}>
                <div className="w-full">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={currentTrending.image_url}
                      alt={currentTrending.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority
                    />
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-5 border-l-4 border-l-[#FFB901] text-[#3C087E] pl-4">
              Tags Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.category_id}
                  href={`/news/${cat.slug}`}
                  className="bg-[#3C087E]/10 text-sm text-[#3C087E] px-3 py-1 rounded-md hover:bg-purple-200 transition"
                >
                  {cat.category_name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-lg lg:text-xl font-semibold mb-5 border-l-4 border-l-[#FFB901] text-[#3C087E] pl-4">
              Trending Now
            </h3>
            <div className="space-y-5">
              {trending.map((item) => (
                <Link key={item.news_id} href={`/news/${item.slug}`}>
                  <div className="flex gap-4 items-start hover:bg-white p-3 rounded-lg transition">
                    <div className="relative w-[100px] aspect-video rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-black">{item.title}</h4>
                      <div className="flex items-center text-xs text-gray-500 gap-3">
                        <span>{item.news_categories?.category_name}</span>
                        <span>•</span>
                        <span>{timeAgo(item.published_at)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-5 border-l-4 border-l-[#FFB901] text-[#3C087E] pl-4">
              Latest Updates
            </h3>
            <div className="space-y-4 text-black">
              {filteredLatest.slice(0, 6).map((item) => (
                <Link key={item.news_id} href={`/news/${item.slug}`}>
                  <div className="hover:bg-gray-100 p-2 rounded-md transition">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="py-12 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLatest.slice(0, visibleCount).map((item) => (
              <Link key={item.news_id} href={`/news/${item.slug}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      priority
                      fetchPriority="high"
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
                      <span>{item.news_categories?.category_name}</span>
                      <span>•</span>
                      <span>{timeAgo(item.published_at)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visibleCount < filteredLatest.length && (
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
    </div>
    <section className="w-full mt-10 px-4 md:px-10 lg:px-20 font-[Inter]">
                                               <div className="max-w-7xl mx-auto">
                                                 {/* HEADING */}
                                                 <MotionWrapper
                                                 as="h2"
                                                   initial={{ opacity: 0, y: -30 }}
                                                   whileInView={{ opacity: 1, y: 0 }}
                                                   transition={{ duration: 0.6 }}
                                                   viewport={{ once: true }}
                                                   className="text-[28px] sm:text-[36px] md:text-5xl leading-[120%] font-bold text-[#270652] mb-3 md:mb-8 text-center"
                                                 >
                                                   Explore other top universities
                                                 </MotionWrapper>
                                               </div>
                                             </section>
                                  
                                              <div className="h-[120px]">
                                         <UniversityCards logos={universities} />
                                        </div>
                                
              
                    <ConnectToday />
   </>
  );
}

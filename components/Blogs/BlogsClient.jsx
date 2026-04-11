"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ConnectToday from "../NmimsSection/ConnectToday";
import UniversityCards from "../NmimsSection/Logocards";
import MotionWrapper from "../Radhya/MotionWrapper";

export default function BlogsClient({ trending, latest, categories }) {
  const [activeTrending, setActiveTrending] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hydrated, setHydrated] = useState(false);
  const pillRowRef = useRef(null);

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

  const allCategories = [
    { category_id: "all", category_name: "All" },
    ...categories,
  ];

  const selectedCategory = allCategories[selectedCategoryIndex];

  const filteredByCategory =
    selectedCategory.category_id === "all"
      ? latest
      : latest.filter(
          (blog) => blog.categoryName === selectedCategory.category_name
        );

  const items = filteredByCategory;
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategoryIndex]);

  useEffect(() => {
    const row = pillRowRef.current;
    if (!row) return;
    const btn = row.querySelectorAll("button.pill")[selectedCategoryIndex];
    if (btn) {
      const buttonLeft = btn.offsetLeft;
      const buttonWidth = btn.offsetWidth;
      const containerWidth = row.clientWidth;
      const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;
      row.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [selectedCategoryIndex]);

  useEffect(() => {
    if (!trending.length) return;
    const interval = setInterval(() => {
      setActiveTrending((prev) =>
        prev === trending.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [trending]);

  const currentTrending = trending[activeTrending];

  const filteredLatest = latest.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollPills = (direction = "right") => {
    const el = pillRowRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
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
    <div className="mt-10 py-12 min-h-screen p-5 lg:p-[60px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="lg:col-span-3 text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight mb-4 text-[#270625]">
          Latest Education Blogs & Insights
        </h1>

        <div className="mb-10 flex gap-4 bg-[#3C087E]/10 items-center px-3 py-4 rounded-lg">
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
              <Link href={`/blogs/${currentTrending.slug}`}>
                <div className="w-full">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={currentTrending.image_url}
                      alt={currentTrending.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-5 border-l-4 border-l-[#FFB901] text-[#3C087E] pl-4">
              {currentTrending?.blogs_categories?.category_name || currentTrending?.categoryName || "Category"}
            </h3>
            <p className="text-sm text-black text-justify whitespace-pre-line">
               {currentTrending?.excerpt}
            </p>
          </div>
        </div>
 
         {/* Trending Now and Latest Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-lg lg:text-xl font-semibold mb-5 border-l-4 border-l-[#FFB901] text-[#3C087E] pl-4">
              Trending Now
            </h3>
            <div className="space-y-5">
              {trending.map((item) => (
                <Link key={item.blogs_id} href={`/blogs/${item.slug}`}>
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
                        <span>{item.blogs_categories?.category_name}</span>
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
                <Link key={item.blogs_id} href={`/blogs/${item.slug}`}>
                  <div className="hover:bg-gray-100 p-2 rounded-md transition">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

         {/* All Categories */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#270652] mb-6">
            Explore all categories
          </h2>

          <div className="bg-[#3C087E]/5 rounded-xl p-4 md:p-6 flex items-center gap-3">
            <button
              aria-label="Pill prev"
              onClick={() => scrollPills("left")}
              className="w-4 md:w-8 h-4 md:h-8 rounded-full bg-black flex items-center justify-center"
            >
              <ChevronLeft strokeWidth={2} className="text-white w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div
              ref={pillRowRef}
              className="flex gap-3 overflow-x-auto no-scrollbar flex-1"
            >
              {allCategories.map((cat, idx) => {
                const active = idx === selectedCategoryIndex;
                return (
                  <button
                    key={cat.category_id}
                    className={`pill inline-flex items-center whitespace-nowrap px-2 md:px-4 py-1 md:py-2 rounded-xl font-sm transition ${
                      active ? "bg-[#3C087E] text-white" : "bg-[#3C087E]/10 text-[#3c087e]"
                    }`}
                    onClick={() => {
                      setSelectedCategoryIndex(idx);
                    }}
                    aria-pressed={active}
                  >
                    {cat.category_name}
                  </button>
                );
              })}
            </div>

            <button
              aria-label="Pill next"
              onClick={() => scrollPills("right")}
              className="w-4 md:w-8 h-4 md:h-8 rounded-full bg-black flex items-center justify-center"
            >
              <ChevronRight strokeWidth={2} className="text-white w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <Link key={item.blogs_id} href={`/blogs/${item.slug}`}>
                <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-300"
                      unoptimized
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-black line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 gap-3">
                      <span>{item.categoryName}</span>
                      <span>•</span>
                      <span>{timeAgo(item.published_at)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center md:justify-end mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="bg-[#3C087E] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
              >
                View More
              </button>
            </div>
          )}
        </section>
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

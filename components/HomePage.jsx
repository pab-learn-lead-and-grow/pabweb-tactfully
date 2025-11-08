"use client";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection from "./HeroSection";
import UnivCard from "./UnivCard";
import Link from "next/link";
import { SquareUserRound, FileText, BriefcaseBusiness } from "lucide-react";

export default function HomePage() {
  const catScrollRef = useRef(null);
  const cardScrollRef = useRef(null);
  const careerRef = useRef(null);

  const categories = [
    { label: "AI", slug: "ai" },
    { label: "MBA", slug: "mba" },
    { label: "BBA", slug: "bba" },
    { label: "BCom", slug: "bcom" },
    { label: "All Courses", slug: "all" },
  ];

  // Duplicate category list to fake infinite scroll effect
  const repeatedCats = [...categories, ...categories, ...categories];

  useEffect(() => {
    if (catScrollRef.current) {
      const mid = catScrollRef.current.scrollWidth / 3;
      catScrollRef.current.scrollLeft = mid;
    }
  }, []);

  const scrollCats = () => {
    catScrollRef.current?.scrollBy({ left: 180, behavior: "smooth" });
  };

  const scrollCards = (dir) => {
    cardScrollRef.current?.scrollBy({
      left: dir === "left" ? -450 : 450,
      behavior: "smooth",
    });
  };

  const scrollCareer = (dir) => {
    if (!careerRef.current) return;
    const amount = Math.floor(careerRef.current.offsetWidth * 0.7);
    careerRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      <HeroSection />
      <div className="w-full px-20 py-10 bg-white">
        <p className="text-green-600 font-bold text-2xl">LEARN</p>
        <p className="text-black mt-1">Industry relevant topics</p>
        <h2 className="text-3xl text-blue-900 font-bold mt-1 ">
          Every subject delivers a different career ROI
        </h2>
      </div>

      {/* ✅ Inline Infinite Category Bar */}
      <div className="w-full flex items-center bg-white py-4 px-20 relative">
        {/* Scrollable Row */}
        <div
          ref={catScrollRef}
          className="flex gap-20 overflow-x-scroll whitespace-nowrap select-none scroll-smooth no-scrollbar"
        >
          {repeatedCats.map((item, i) => (
            <Link
              key={i}
              href={`/courses/${item.slug}`}
              className="text-gray-700 hover:text-blue-900 font-medium text-xs transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Chevron Right */}
        <button
          onClick={scrollCats}
          className="ml-6 flex items-center text-gray-700 hover:text-blue-900"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ✅ Scrollable UnivCards Section */}
      <section className="w-full px-20 bg-white relative">
        {/* Left Arrow */}
        <button
          onClick={() => scrollCards("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 
               text-2xl md:text-3xl bg-white p-1.5 md:p-2 
               rounded-full shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft size={30} className="md:hidden" />
          <ChevronLeft size={34} className="hidden md:block" />
        </button>

        {/* Scroll Container */}
        <div
          ref={cardScrollRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="lg:min-w-[31.5%] md:min-w-[48%] sm:min-w-[80%] transition-all"
            >
              <UnivCard
                logo="/pablogo.png"
                institute="NMIMS Mumbai"
                title={`Executive MBA Program ${i}`}
                badge="Alumni Status"
                program="Executive PG Program"
                duration="24 months"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCards("right")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 
               text-2xl md:text-3xl bg-white p-1.5 md:p-2 
               rounded-full shadow-lg hover:scale-110 transition"
        >
          <ChevronRight size={30} className="md:hidden" />
          <ChevronRight size={34} className="hidden md:block" />
        </button>
      </section>

      {/* ✅ Feature Strip */}
      <div className="w-full pl-40 pr-20 mt-5 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Box 1 */}
          <div className="flex items-center justify-center gap-3 border border-green-200 rounded-xl h-[100px] bg-green-100 px-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <SquareUserRound size={36} className="text-green-700" />
            <p className="text-green-700 text-md font-semibold px-2">
              1:1 Free Counselling Call
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex items-center justify-center gap-3 border border-green-200 rounded-xl h-[100px] bg-green-100 px-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <FileText size={28} className="text-green-700" />
            <p className="text-green-700 text-md font-semibold px-2">
              Data Driven Insights
            </p>
          </div>

          {/* Box 3 - wraps text now */}
          <div className="flex items-center justify-center gap-3 border border-green-200 rounded-xl h-[100px] bg-green-100 px-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-center">
            <BriefcaseBusiness size={40} className="text-green-700" />
            <p className="text-green-700 text-md font-semibold leading-snug px-2">
              Select Best Fit Before You Commit
            </p>
          </div>

          {/* Button */}
          <button className="flex items-center justify-center pl-5 pr-5 text-md gap-2 bg-blue-900 text-white rounded-xl h-[60px] font-semibold hover:bg-blue-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ">
            Talk To Subject Matter Expert
          </button>
        </div>
      </div>
      <div className="w-full px-20 py-10 bg-white">
        <p className="text-green-600 font-bold text-2xl">LEAD</p>
        <p className="text-black mt-1">Make every skill count</p>
        <h2 className="text-3xl text-blue-900 font-bold mt-1 ">
          Apply what you learn, see the ROI in real time
        </h2>
      </div>

      {/* ✅ Scrollable Cards Section */}
      <section className="w-full px-20 bg-white relative">
        {/* Left Arrow */}
        <button
          onClick={() => scrollCareer("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 
               text-2xl md:text-3xl bg-white p-1.5 md:p-2 
               rounded-full shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft size={30} className="md:hidden" />
          <ChevronLeft size={34} className="hidden md:block" />
        </button>

        <div
          ref={careerRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth py-4"
        >
          {[
            { title: "gdftegysaijcdhkbjnxzaksidehufgcseijchnjskjnd" },
            { title: "gdftegysaijcdhkbjnxzaksidehufgcseijchnjskjnd" },
            { title: "gdftegysaijcdhkbjnxzaksidehufgcseijchnjskjnd" },
            { title: "gdftegysaijcdhkbjnxzaksidehufgcseijchnjskjnd" },
            { title: "gdftegysaijcdhkbjnxzaksidehufgcseijchnjskjnd" },
            { title: "gdftegysaijcdhkbjnxzaksidehufgcseijchnjskjnd" },
          ].map((c, idx) => (
            <div
              key={idx}
              className="relative
             min-w-[280px] h-[300px] 
             lg:min-w-[31.5%] md:min-w-[48%] sm:min-w-[80%] 
             max-w-[340px] 
             rounded-2xl overflow-hidden 
             border border-gray-200 
             border-r-4 border-b-4 
             shadow-lg 
             hover:-translate-y-2 hover:shadow-xl 
             hover:border-r-[6px] hover:border-b-[6px] 
             transition-all duration-300"
            >
              {/* full image */}
              <img
                src="/pablogo.png"
                alt={c.title}
                className="w-full h-full object-cover"
              />

              {/* bottom text overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-white/30 backdrop-blur-md flex items-center px-4">
                <h3 className="text-md font-semibold text-black leading-tight line-clamp-2 overflow-hidden">
                  {c.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCareer("right")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 
               text-2xl md:text-3xl bg-white p-1.5 md:p-2 
               rounded-full shadow-lg hover:scale-110 transition"
        >
          <ChevronRight size={30} className="md:hidden" />
          <ChevronRight size={34} className="hidden md:block" />
        </button>
      </section>

      {/* ✅ Small Form Block */}
      <div className="w-full bg-white rounded-2xl p-6 pl-20 pr-20 shadow-md">
        <form className="grid grid-cols-1 md:grid-cols-4  gap-15 px-[15px]">
          {/* Job Role */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-black mb-1">
              Job Role
            </label>
            <input
              type="text"
              placeholder="Enter your job role"
              className="px-4 py-2 rounded-lg border bg-[rgba(6,78,146,0.1)]  placeholder-gray-600  focus:border-blue-700 focus:outline-none"
            />
          </div>

          {/* Job Skill */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-black   mb-1">
              Job Skill
            </label>
            <input
              type="text"
              placeholder="Enter relevant skills"
              className="px-4 py-2 rounded-lg border bg-[rgba(6,78,146,0.1)]  placeholder-gray-600 focus:border-blue-700 focus:outline-none"
            />
          </div>

          {/* ROI */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-black mb-1">
              ROI Expectation
            </label>
            <input
              type="text"
              placeholder="Expected career ROI"
              className="px-4 py-2 rounded-lg border bg-[rgba(6,78,146,0.1)]   placeholder-gray-600 focus:border-blue-700 focus:outline-none"
            />
          </div>

          {/* Submit Button  */}
          <div className="flex items-end">
            <button className="w-full bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full px-20 py-10 bg-white">
        <p className="text-green-600 font-bold text-2xl">GROW</p>
        <p className="text-black mt-1">Multiply Skills, Salary and Confidence</p>
        <h2 className="text-3xl text-blue-900 font-bold mt-1 ">
          Explore best ROI Programs
        </h2>
      </div>

      {/* ✅ Scrollable UnivCards Section */}
      <section className="w-full px-20 bg-white relative">
        {/* Left Arrow */}
        <button
          onClick={() => scrollCards("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 
               text-2xl md:text-3xl bg-white p-1.5 md:p-2 
               rounded-full shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft size={30} className="md:hidden" />
          <ChevronLeft size={34} className="hidden md:block" />
        </button>

        {/* Scroll Container */}
        <div
          ref={cardScrollRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="lg:min-w-[31.5%] md:min-w-[48%] sm:min-w-[80%] transition-all"
            >
              <UnivCard
                logo="/pablogo.png"
                institute="NMIMS Mumbai"
                title={`Executive MBA Program ${i}`}
                badge="Alumni Status"
                program="Executive PG Program"
                duration="24 months"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCards("right")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 
               text-2xl md:text-3xl bg-white p-1.5 md:p-2 
               rounded-full shadow-lg hover:scale-110 transition"
        >
          <ChevronRight size={30} className="md:hidden" />
          <ChevronRight size={34} className="hidden md:block" />
        </button>
      </section>
       <div className=" bg-white rounded-2xl p-6 pt-5 flex items-center justify-center shadow-md">
            <button className=" bg-blue-900 text-white font-semibold px-6 py-3 item-center rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
              Book a 10min call for quick comparison
            </button>
      </div>
    </div>
  );
}

"use client";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const scrollContainerRef = useRef(null);
  const sectionsRef = useRef(null);

  return (
    <section className="w-full bg-white flex flex-col overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-3 md:py-6 lg:py-5">
      {/* --- Category Header --- */}
      <div className="w-full justify-between px-6 items-center bg-white flex flex-col overflow-hidden">
      <div className="hidden md:flex items-center justify-center md:justify-start space-x-5 text-gray-800 font-medium mb-6">
        {["AI", "MBA", "BBA", "BCom", "All Courses"].map((item, i) => (
          <button
            key={i}
            className="flex items-center space-x-1 hover:text-blue-900 font-semibold"
          >
            <span>{item}</span>
            <ChevronDown size={14} />
          </button>
        ))}
      </div>
      </div>

      {/* --- Hero Section --- */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* --- Left Content --- */}
        <div className="flex flex-col space-y-4 text-center md:text-left max-w-xl lg:max-w-2xl">
          <p className="text-black text-sm sm:text-base">
            Learn from top universities, work in top firms
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-blue-900">
            Shaping Professionals
            <br className="hidden sm:block" />
            of Tomorrow
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-green-700 font-semibold">
            Get Seamless Online Degree Journey
          </h2>

          {/* --- Search Bar --- */}
          <div className="flex border border-blue-900 rounded-md overflow-hidden w-full sm:max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="px-3 sm:px-4 py-2 sm:py-3 w-full outline-none text-gray-800 text-sm sm:text-base"
            />
            <button className="bg-blue-900 text-white px-3 sm:px-4 hover:bg-blue-800 flex items-center justify-center">
              <Search size={18} />
            </button>
          </div>

          {/* --- Tags --- */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            {[
              "Online MBA",
              "Marketing Courses",
              "Certifications",
              "Get Promotion",
              "AI Courses",
              "Finance",
              "Prepare your first job",
            ].map((tag, index) => (
              <span
                key={index}
                className="text-blue-900 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium bg-[rgba(6,78,146,0.1)]  cursor-pointer transition border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* --- Learner Count (Blue CTA) --- */}
          <div className="flex justify-center md:justify-start mt-4">
            <div className="bg-blue-900 text-white px-5 py-2 rounded-md text-xs sm:text-sm font-medium">
              Learn, Lead and Grow with 1500+ learners
            </div>
          </div>
        </div>

        {/* --- Right Side (Image + CTA) --- */}
        <div className="flex flex-col items-center md:items-end space-y-4 w-full md:w-1/2">
          <button className="bg-green-600 text-white w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-green-700 transition">
            Prepare your first job
          </button>

          <div className="relative w-[90%] sm:w-[75%] md:w-[470px]">
            <Image
              src="/professional.png"
              alt="Professional"
              width={470}
              height={350}
              className="rounded-md object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function UniversityCards({ logos }) {

  return (
    <div className="relative w-full overflow-hidden relative">
      
      {/* SCROLLER */}
      <div className="marquee flex min-w-max whitespace-nowrap animate-marquee gap-6 py-4 px-2">
       {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="min-w-[260px] bg-purple-50 border rounded-xl shadow-md p-4 flex flex-col items-center justify-between hover:shadow-xl transition"
          >
            {/* LOGO */}
            <div className="w-full h-[60px] flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-full w-auto object-contain"
                sizes="120px"
              />
            </div>

            {/* NAME */}
            <h3 className="text-center text-black font-semibold text-lg mt-3">
              {logo.name}
            </h3>

            {/* BUTTON */}
            <div className="flex mt-4 w-full">
              <Link
                href={logo.href}
                className="flex-1 text-center text-xs px-3 py-2 rounded-lg bg-[#F6A410] text-white font-medium hover:scale-105 transition"
              >
                View University Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
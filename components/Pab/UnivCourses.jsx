"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UnivCourses({
  heading,
  courses = [],
  onDownloadBrochure,
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 mt-10 xl:mt-20 py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10 gap-4">
  <h2 className="text-4xl md:text-5xl xl:text-[64px] font-bold text-[#345895]">
    {heading}
  </h2>

  <button
    onClick={() => setShowAll((p) => !p)}
    className="
      bg-[#345895] hover:bg-blue-800 text-white
      px-4 py-1
      rounded-full
      text-sm font-medium
      transition
      w-fit shrink-0
    "
  >
    {showAll ? "Show Less" : "View More"}
  </button>
</div>


      {/* COURSE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCourses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* TOP LOGOS */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4  items-center">
                <Image
                  src={course.universityLogo}
                  alt={course.universityName}
                  width={300}
                  height={100}
                />
              </div>
            </div>

            {/* COURSE TITLE */}
            <h3 className="text-lg font-bold text-[#345895] leading-snug mb-1">
              {course.title}
            </h3>
            <p className="text-sm text-regular text-[#064E92] mb-4">
              {course.subtitle}
            </p>

            {/* TAG */}
            {course.tag && (
              <span className="inline-block bg-[#064E92]/10 text-[#064E92] text-xs font-medium px-4 py-1 rounded-full mb-4">
                {course.tag}
              </span>
            )}

            {/* META */}
            <div className="text-sm text-gray-700 space-y-1 mt-4">
              <p>
                <span className="font-semibold">Duration:</span>{" "}
                {course.duration}
              </p>
              <p>
                <span className="font-semibold">Validity:</span>{" "}
                {course.validity}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 mt-6">
              <Link
                href={course.coursePath}
                className="flex-1 text-center bg-[#4d964f] hover:bg-green-700 text-white py-2 rounded-2xl text-sm font-regular"
              >
                Dive Deeper
              </Link>

              <button
                onClick={onDownloadBrochure}
                className="flex-1 bg-[#345895] hover:bg-blue-800 text-white px-2 py-2 rounded-2xl text-sm font-regular"
              >
                Download Brochure
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

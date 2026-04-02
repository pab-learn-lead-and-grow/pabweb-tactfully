"use client";

import Image from "next/image";
import Link from "next/link";
import CounsellingModal from "./CounsellingModal";
import MotionWrapper from "./MotionWrapper";
import { useState } from "react";

export default function UnivCourses({ heading, courses = [] }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white px-6 md:px-12 lg:px-10 mt-10 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10 gap-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#270652]">
          {heading}
        </h2>

        <button
          onClick={() => setShowAll((p) => !p)}
          className="bg-[#270652] hover:[#3C087E]/50 text-white px-4 py-1 rounded-full text-sm font-medium transition w-fit shrink-0"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>

      {/* COURSE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`
              border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition
              ${!showAll && index >= 3 ? "hidden" : ""}
            `}
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
            <h3 className="text-lg font-bold text-black leading-snug mb-1">
              {course.title}
            </h3>
            <p className="text-sm text-regular text-black mb-4">
              {course.subtitle}
            </p>

            {/* TAG */}
            {course.tag && (
              <span className="inline-block bg-[#3C087E]/10 text-[#3C087E] text-xs font-medium px-4 py-1 rounded-full mb-4">
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
            <div className="flex gap-2 mt-6 w-full">
              <Link
                href={course.coursePath}
                className="flex-1 text-center text-sm px-3 py-1.5 rounded-xl bg-[#F6A410] text-white font-medium shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-100"
              >
                Dive Deeper
              </Link>

              <CounsellingModal>
                <button className="flex-1 text-center text-sm px-3 py-1.5 rounded-xl bg-[#3D077E] text-white font-medium shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-100">
                  Download Brochure
                </button>
              </CounsellingModal>
            </div>
            <div className="flex w-full mt-2">
              <Link
                href="/university-response-time"
                className="w-full text-center text-sm px-3 py-1.5 rounded-xl bg-[#8e6109] text-white font-medium shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-100"
              >
                Compare with other Universities
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SEO SAFE INTERNAL LINKS (NO UI IMPACT) */}
      <div className="sr-only">
        {courses.map((course) => (
          <Link key={`seo-${course.id}`} href={course.coursePath}>
            {course.title} - {course.subtitle}
          </Link>
        ))}
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import React from "react";

const TITLE = "All-in-one space that's got your back, always";

const ITEMS = [
  { title: "Career Opportunities", image: "/x.png" },
  { title: "Scholarships & Financial Aid", image: "/professional.png" },
  { title: "Refer & Earn", image: "/professional.png" },
  { title: "Finance Your Future", image: "/professional.png" },
  { title: "Post-Admission Support", image: "/professional.png" },
  { title: "University Verification", image: "/professional.png" },
  { title: "Verify Your Counsellor", image: "/professional.png" },
  { title: "Online Learning Trends", image: "/professional.png" },
];

export default function AllInOneSection() {
  return (
    <section className="my-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 bg-white text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#345895] text-center mx-auto leading-snug">
  {TITLE}
        </h2>

        {/* Grid */}
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
          {ITEMS.map((item, i) => (
            <li key={i} className="w-full flex justify-center">
              <IconCard title={item.title} image={item.image} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            className="px-10 py-4 rounded-lg bg-[#4D964F] text-white text-xl font-semibold shadow-md hover:shadow-lg transition duration-200"
          >
            Unlock the Whole Experience
          </button>
        </div>

      </div>
    </section>
  );
}

function IconCard({ title, image }) {
  return (
    <div className="w-28 md:w-32 flex flex-col items-center text-center">

      {/* ICON BOX */}
      <div className="group relative w-full aspect-square bg-white rounded-3xl border border-[#345895] shadow-[8px_8px_0px_#345895] hover:shadow-[14px_14px_0px_#345895] transition-all duration-300 flex items-center justify-center hover:-translate-y-2 hover:scale-105">
        <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Image
            src={image}
            alt={title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* TITLE */}
      <p className="mt-3 text-xs sm:text-sm font-semibold text-[#0B2131]">
        {title}
      </p>
    </div>
  );
}

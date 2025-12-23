"use client";

import Image from "next/image";
import React from "react";
import CounsellingForm from "@/components/Pab/CounsellingForm";
import { useState } from "react";


const TITLE = "All-in-one space that's got your back, always";

const ITEMS = [
  { title: "Career Opportunities", image: "/pab/career.png" },
  { title: "Scholarships & Financial Aid", image: "/pab/scholarship.png" },
  { title: "Refer & Earn", image: "/pab/refer.png" },
  { title: "Finance Your Future", image: "/pab/finance.png" },
  { title: "Post-Admission Support", image: "/pab/support.png" },
  { title: "University Verification", image: "/pab/verification.png" },
  { title: "Verify Your Counsellor", image: "/pab/counsellor.png" },
  { title: "Online Learning Trends", image: "/pab/trends.png" },
];

export default function AllInOneSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="my-8">
      <div className="max-w-7xl xl:max-w-full mx-auto px-4 md:px-8 lg:px-16 bg-white text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[50px] xl:text-[54px] 2xl:text-[64px] font-bold text-[#345895] text-center mx-auto leading-snug">
         {TITLE}
        </h2>

        {/* Grid */}
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 xl:gap-0 justify-items-center">
          {ITEMS.map((item, i) => (
            <li key={i} className="w-full flex justify-center">
              <IconCard title={item.title} image={item.image} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className=" px-5 xl:px-10 py-2 rounded-lg bg-[#4D964F] text-white text-xl font-semibold shadow-md hover:shadow-lg transition duration-200"
          >
            Unlock the Whole Experience
          </button>
        </div>

      </div>
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
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
            width={100}
            height={100}
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

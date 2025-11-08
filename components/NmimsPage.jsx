"use client";
import Image from "next/image";
import { Download } from "lucide-react";

export default function ProgramCard() {
  return (
    <div className="w-[calc(100%-40px)] flex flex-col md:flex-row justify-between items-center bg-white rounded-xl border border-[#064E92] shadow-sm hover:shadow-md transition-shadow duration-300 mx-5 pl-5 pt-3 pb-2 gap-6 overflow-hidden">

      {/* Left Section */}
      <div className="flex flex-col justify-between w-full md:w-3/4">
        {/* Top Tag */}
        <span className="bg-green-500 text-white text-sm md:text-sm px-2 py-1 rounded w-fit mb-2">
          Bestseller
        </span>

        {/* Program Title */}
        <h2 className="text-blue-900 text-xl md:text-2xl font-bold mb-2">
          Prog. name
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-xs md:text-base leading-relaxed mb-4">
          As an Inside Sales Executive, you'll be the bridge between learners and opportunities. 
          You will connect with prospective students, understand their goals, and guide them toward 
          the right PAB program that helps them learn, lead, and grow in their careers.
        </p>

        {/* Tags Row */}
        <div className="flex flex-wrap gap-3 mb-5">
          <span className="bg-[rgba(6,78,146,0.1)] text-green-500 text-xs md:text-xs font-medium px-3 py-1 rounded">
            Full time
          </span>
          <span className="bg-[rgba(6,78,146,0.1)] text-green-500 text-xs md:text-xs font-medium px-3 py-1 rounded">
            Corporate
          </span>
          <span className="bg-[rgba(6,78,146,0.1)] text-green-500 text-xs md:text-xs font-medium px-3 py-1 rounded">
            Location
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-1">
          <button className="flex items-center gap-2 border border-blue-900 text-blue-900 bg-[rgba(6,78,146,0.1)] text-md md:text-base px-4 py-1 rounded-md hover:bg-blue-50 transition">
            Download Brochure
            <Download size={16} /> 
          </button>
          <button className="bg-blue-900 text-white text-md md:text-base pl-18 pr-18 px-6 py-1 rounded-md hover:bg-blue-800 transition">
            CTA
          </button>
        </div>

        {/* Footer Info */}
        <div className="flex gap-10 text-xs md:text-sm text-red-600 mt-7">
          <span className="text-red-600">LIVE STUDENTS — WATCHING</span>
          <span className="text-gray-700 font-normal">Contact no. XXXXXXXXXX</span>
        </div>
      </div>

      {/* Right Section (Logo) */}
      <div className="w-full md:w-1/4 flex justify-center md:justify-end">
        <Image
          src="/pablogo.png"
          alt="NMIMS Logo"
          width={180}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}

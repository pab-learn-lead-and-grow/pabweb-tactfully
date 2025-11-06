
"use client";
import Image from "next/image";

export default function Card({
  logo = "/pablogo.png",
  institute = "NMIMS Mumbai",
  title = "Executive MBA in Marketing",
  badge = "Alumni Status",
  program = "Executive PG Program",
  duration = "24 months",
  onView = () => {},
  onSyllabus = () => {},
}) {
  return (
    <div className="mx-auto w-[420px] h-[430px] max-w-full border border-gray-200 rounded-2xl p-4 shadow-[3px_3px_10px_rgba(6,78,146,0.25)] hover:shadow-[5px_5px_15px_rgba(6,78,146,0.3)] transition-all duration-300 mb-3 flex flex-col justify-between bg-white relative">
      {/* Bestseller Badge */}
      <span className="absolute top-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded-md font-medium">
        Bestseller
      </span>

      {/* Logo */}
      <div className="flex justify-center mt-4">
        <img
          src={logo}
          alt="Program Logo"
          className="w-40 h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-left">
        <p className="text-black text-sm">{institute}</p>
        <h2 className="text-xl text-black font-bold mt-1">{title}</h2>

        {badge && (
          <span className="inline-block mt-3 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-md border border-green-400">
            {badge}
          </span>
        )}

        <p className="mt-4 text-gray-800 font-medium text-lg">{program}</p>
        <p className="text-gray-600 text-md">{duration}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-3">
        <button
          className="w-[48%] border border-blue-900 text-blue-900 bg-[rgba(6,78,146,0.1)] font-medium py-2 rounded-lg"
          onClick={onView}
        >
          View Program
        </button>
        <button
          className="w-[48%] bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded-lg"
          onClick={onSyllabus}
        >
          Syllabus
        </button>
      </div>
      <span className="absolute top-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded-md font-medium">
        Bestseller
      </span>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  BadgeCheck,
  Clock,
  Ticket,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function UniversityGrid() {
  const [universities, setUniversities] = useState([]);
  const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/News`;

  const getImageUrl = (path) => (path ? `${BUCKET_URL}/${path}` : null);

  const accreditationIcons = {
    NAAC: "/accreditation/naac.png",
    AICTE: "/accreditation/aicte.png",
    NIRF: "/accreditation/nirf.png",
    UGC: "/accreditation/ugc.png",
  };

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const { data, error } = await supabase
          .from("universities")
          .select("*")
          .order("rating", { ascending: false });

        if (error) {
          console.error("Supabase error:", error);
          setError(error.message);
        } else {
          setUniversities(data || []);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-10 lg:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#3C087E] mb-4">
        Knowledge Corner
      </h2>

      <p className="text-sm md:text-base text-center text-black max-w-4xl mx-auto justify-center mb-12">
        Stay updated with the latest industry insights and trends. Stay updated
        with the latest industry insights and trends. Stay updated with the
        latest industry insights and trends. Stay updated with the latest
        industry insights and trends. Stay updated with the latest industry
        insights and trends. Stay updated with the latest industry insights and
        trends.Stay updated with the latest industry insights and trends.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {universities.map((uni) => (
          <div
            key={uni.university_id}
            className="bg-white rounded-2xl shadow-md p-5 transition hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
              <Image
                src={getImageUrl(uni.image_url)}
                alt={uni.name}
                fill
                className="object-cover"
                unoptimized
              />

              {/* LOGO */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow">
                <Image
                  src={getImageUrl(uni.logo_url)}
                  alt="logo"
                  width={60}
                  height={40}
                  unoptimized
                />
              </div>
            </div>

            {/* TITLE + RATING */}
            <div className="flex justify-between items-center text-black mt-4">
              <h3 className="text-2xl sm:text-3xl font-semibold">{uni.name}</h3>
              <span className="text-2xl sm:text-3xl font-semibold text-yellow-500">
                ⭐ {uni.rating}/5
              </span>
            </div>

            <div className="inline-flex items-center gap-2 mt-4 bg-[#3C087E]/10 px-3 py-2 rounded-lg">
              {" "}
              {uni.accreditation?.map((acc, i) => (
                <Image
                  key={i}
                  src={accreditationIcons[acc]}
                  alt={acc}
                  width={112}
                  height={60}
                  className="object-contain w-14 sm:w-16 md:w-24 h-auto"
                />
              ))}
            </div>

            {/* PROGRESS METRICS */}
            <div className="mt-5 space-y-2 text-[10px] sm:text-sm font-medium text-black">
              {[
                {
                  label: "Education Quality",
                  value: uni.education_quality,
                  icon: GraduationCap,
                },
                {
                  label: "Placement Assistance",
                  value: uni.placement_assistance,
                  icon: Briefcase,
                },
                {
                  label: "Brand Value",
                  value: uni.brand_value,
                  icon: BadgeCheck,
                },
                {
                  label: "Response Time",
                  value: uni.response_time,
                  icon: Clock,
                },
                {
                  label: "Ticket Resolution",
                  value: uni.ticket_resolution,
                  icon: Ticket,
                },
                { label: "Alumni", value: uni.alumni_strength, icon: Users },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  {/* Blue Dot */}
                  <div className="w-2 h-2 shrink-0 bg-[#3C087E] rounded-full overflow-hidden" />

                  {/* Label */}
                  <span className="w-40 text-gray-800">{label}</span>

                  {/* Progress Bar */}
                  <div className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#3C087E] text-white overflow-hidden">
                    <Icon size={14} />
                  </div>
                  <div
                    style={{
                      width: "40%",
                      backgroundColor: "#F0F2F5",
                      borderRadius: "9999px",
                      height: "8px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#1755E7",
                        width: `${(Number(value) || 0) * 10}%`,
                        height: "8px",
                        borderRadius: "9999px",
                      }}
                    ></div>
                  </div>

                  {/* Score */}
                  <span className="w-10 text-right text-[#3C087E] font-medium">
                    {value}/10
                  </span>
                </div>
              ))}
            </div>

            {/* FEES */}
            <div className="flex justify-between items-center text-xl lg:text-2xl mt-6 bg-[#FFD66C]/10 rounded-lg p-3">
              <span className="font-semibold text-[#3C087E]">
                Fees: ₹{uni.fees.toLocaleString()}
              </span>
              {uni.emi_available && (
                <span className="italic text-[#3C087E]">EMI Available</span>
              )}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-4">
              <button className="flex px-5 bg-[#FFD66C] hover:scale-105 hover:bg-yellow-500 text-black py-2 rounded-lg">
                View Details
              </button>
              <button className="flex px-5 bg-[#3C087E]  hover:scale-105 hover:bg-purple-800 text-white py-2 rounded-lg">
                Download Brochure
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-end mt-10">
        <Link href="/universitieslist">
          <button className="bg-[#3C087E] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

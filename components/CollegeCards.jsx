"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import {
  GraduationCap,
  Briefcase,
  BadgeCheck,
  Clock,
  Ticket,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import ConnectToday from "./NmimsSection/ConnectToday";

export default function CollegeCards() {
  const [universities, setUniversities] = useState([]);
  const LOGO_BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/logos`;
   const CLG_BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/News`;

  const getLogoUrl = (path) => (path ? `${LOGO_BUCKET_URL}/${path}` : null);
    const getImageUrl = (path) => (path ? `${CLG_BUCKET_URL}/${path}` : null);
  const [showForm, setShowForm] = useState(false);
 

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
   <>
    <div className="max-w-6xl mx-auto px-4 py-12 mt-10 lg:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#3C087E] mb-4">
        Knowledge Corner
      </h2>

      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
        University Accreditations and Approvals refer to the official recognition granted to institutions by regulatory bodies to ensure they meet required academic and quality standards. In India, the University Grants Commission (UGC) is the statutory body that approves universities and authorizes them to award valid degrees. UGC approval means the university is legally recognized by the government. The National Assessment and Accreditation Council (NAAC) provides accreditation, which is a quality grading system that evaluates institutions based on teaching, infrastructure, research, and overall performance. Similarly, the All India Council for Technical Education (AICTE) grants approval to technical and management programs such as MBA and engineering courses.
      </p>
      <p className="text-sm md:text-base text-black max-w-5xl mt-4 mx-auto text-justify">
        Understanding these approvals is essential before enrolling in any online, distance, or regular degree program. A university may offer attractive courses, but without proper accreditation and approval, the degree may not be valid for government jobs, higher education, or certain professional opportunities. Verifying UGC recognition, checking NAAC grades, and confirming AICTE approval for technical programs ensures academic credibility and long-term career security. At Radhya Education Academy, we guide students in carefully evaluating university accreditations and approvals so they can choose recognized institutions with confidence and clarity.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {universities.map((uni, index) => (
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
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* LOGO */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow">
                <Image
                  src={getLogoUrl(uni.logo_url)}
                  alt={uni.name}
                  width={120}
                  height={80}
                  className="object-contain"
                  sizes="120px"
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
                src={getLogoUrl(acc.logo)}
                alt={acc.name}
                width={112}
                height={60}
                className="object-contain w-14 sm:w-16 md:w-24 h-auto"
                sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 96px"
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
              <button
              onClick={() => setShowForm(true)}
               className="flex px-5 bg-[#FFD66C] hover:scale-105 hover:bg-yellow-500 text-black py-2 rounded-lg">
                View Details
              </button>
              <button
              onClick={() => setShowForm(true)}
               className="flex px-5 bg-[#3C087E]  hover:scale-105 hover:bg-purple-800 text-white py-2 rounded-lg">
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
       {showForm && (
                <CounsellingForm onClose={() => setShowForm(false)} />
              )}
    </div>
    <ConnectToday />
   </>
  );
}

"use client";

import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Wallet,
  Building2,
  MapPin,
  Star,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import CounsellingModal from "./CounsellingModal";
import { supabase } from "@/lib/supabaseClient";

const EXPERIENCE_OPTIONS = [
  { value: "", label: "Select Experience" },
  { value: "0-2", label: "0-2 Years" },
  { value: "2-5", label: "2-5 Years" },
  { value: "5+", label: "5+ Years" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select Budget Range" },
  { value: "0-50000", label: "Under ₹50,000" },
  { value: "50000-100000", label: "₹50,000 – ₹1,00,000" },
  { value: "100000-200000", label: "₹1,00,000 – ₹2,00,000" },
  { value: "200000-500000", label: "₹2,00,000 – ₹5,00,000" },
  { value: "500000+", label: "Above ₹5,00,000" },
];

function loadPersistedResults() {
  if (typeof window === "undefined") return null;

  try {
    const saved = sessionStorage.getItem("comparison_results");
    return saved ? JSON.parse(saved) : null;
  } catch {
    sessionStorage.removeItem("comparison_results");
    return null;
  }
}

export default function UniversityComparison() {
  const [percentage, setPercentage] = useState(50);
  const [experience, setExperience] = useState("");
  const [budget, setBudget] = useState("");

  const persisted = loadPersistedResults();

  const [results, setResults] = useState(persisted || []);
  const [showResults, setShowResults] = useState(!!persisted);

  const handleFindClick = () => {
    sessionStorage.setItem(
      "comparison_filters",
      JSON.stringify({
        percentage,
        experience,
        budget,
      })
    );
  };

  const handleFormSuccess = async () => {
    try {
      const filters = JSON.parse(sessionStorage.getItem("comparison_filters") || "{}");

      let query = supabase.from("universities_comparison").select("*");

      if (filters.percentage) {
        query = query.lte("min_percentage", filters.percentage).gte("max_percentage", filters.percentage);
      }

      const { data, error } = await query;

      if (error) {
        console.warn("Query error:", error.message);
        setResults([]);
      } else {
        let filtered = data || [];
        if (filters.experience) {
          filtered = filtered.filter(
            (u) => !u.experience || u.experience === "All" || u.experience === filters.experience
          );
        }
        setResults(filtered);
        sessionStorage.setItem("comparison_results", JSON.stringify(filtered));
      }

      setShowResults(true);
    } catch (err) {
      console.error("Failed to fetch results:", err);
      setResults([]);
      setShowResults(true);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden py-8 md:py-14">

        {/* Decorative Background */}

        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#3C087E]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#EEA727]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

          <div className="
          rounded-[32px]
          border
          border-[#3C087E]/10
          bg-gradient-to-br
          from-white
          via-[#FCFAFF]
          to-[#F7F2FF]
          shadow-[0_20px_70px_rgba(60,8,126,0.08)]
          p-6
          md:p-10">

            {/* Badge */}

            <div className="flex justify-center">

              <div className="
              inline-flex
              items-center
              gap-2
              mb-3
              rounded-full
              bg-[#3C087E]/10
              px-5
              py-1">

                <Sparkles
                  size={16}
                  className="text-[#3C087E]"
                />

                <span className="text-xs sm:text-sm font-semibold text-[#3C087E]">
                  Personalized University Matching
                </span>

              </div>

            </div>

            {/* Heading */}

             <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-[#270652] text-center mx-auto leading-snug">

              Find Your Perfect University Match

            </h2>

            <p className="text-sm sm:text-base max-w-3xl mb-6 mx-auto text-center text-gray-900">

              Tell us your graduation score, work experience, and preferred
              budget. We'll instantly match you with the best universities
              that fit your profile so you can make confident admission
              decisions.

            </p>

            {/* Filters */}

            <div className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6">

              {/* Graduation */}

              <div className="
              rounded-2xl
              border
              border-[#3C087E]/10
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:shadow-xl">

                <div className="flex items-center gap-4">

                  <div className="
                  h-12
                  w-12
                  rounded-xl
                  bg-[#3C087E]/10
                  flex
                  items-center
                  justify-center">

                    <GraduationCap
                      size={22}
                      className="text-[#3C087E]"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#270652]">
                      Graduation %
                    </h3>

                    <p className="text-xs text-gray-500">
                      Select your graduation score
                    </p>

                  </div>

                </div>

                <div className="mt-5">

                  <div className="flex justify-between text-xs text-gray-500 mb-2">

                    <span>0%</span>

                    <span>100%</span>

                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={percentage}
                    onChange={(e) =>
                      setPercentage(Number(e.target.value))
                    }
                    className="w-full accent-[#EEA727] h-3 cursor-pointer"
                  />

                  <div className="mt-5 text-center">

                    <span className="
                    inline-flex
                    items-center
                  bg-[#3C087E]
                    text-xs
                    rounded-full
                    px-4
                    py-1
                    text-white
                    font-bold
                    shadow-lg">

                      {percentage}%

                    </span>

                  </div>

                </div>

              </div>

              {/* Experience */}

              <div className="
              rounded-2xl
              border
              border-[#3C087E]/10
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:shadow-xl">

                <div className="flex items-center gap-4">

                  <div className="
                  h-12
                  w-12
                  rounded-xl
                  bg-[#3C087E]/10
                  flex
                  items-center
                  justify-center">

                    <Briefcase
                      size={22}
                      className="text-[#3C087E]"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#270652]">
                      Work Experience
                    </h3>

                    <p className="text-xs text-gray-500">
                      Select your experience
                    </p>

                  </div>

                </div>

                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="
                  mt-8
                  h-12
                  w-full
                  rounded-xl
                  border
                  text-gray-700
                  border-gray-300
                  bg-white
                  px-4
                  outline-none
                  transition-all
                  focus:border-[#3C087E]
                  focus:ring-2
                  focus:ring-[#3C087E]/20">

                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                    >
                      {opt.label}
                    </option>
                  ))}

                </select>

                {experience && (
                  <div className="mt-4 text-center">

                    <span className="
                    inline-flex
                    rounded-full
                    bg-[#3C087E]
                    px-4
                    py-1
                    text-xs
                    font-medium
                    text-white">

                      {
                        EXPERIENCE_OPTIONS.find(
                          (o) => o.value === experience
                        )?.label
                      }

                    </span>

                  </div>
                )}

              </div>
                            {/* Budget */}

              <div
                className="
                rounded-2xl
                border
                border-[#3C087E]/10
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    h-12
                    w-12
                    rounded-xl
                    bg-[#3C087E]/10
                    flex
                    items-center
                    justify-center"
                  >
                    <Wallet
                      size={22}
                      className="text-[#3C087E]"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#270652]">
                      Budget Range
                    </h3>

                    <p className="text-xs text-gray-500">
                      Select your preferred budget
                    </p>
                  </div>
                </div>

                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="
                  mt-8
                  h-12
                  w-full
                  rounded-xl
                  border
                  text-gray-700
                  border-gray-300
                  bg-white
                  px-4
                  outline-none
                  transition-all
                  focus:border-[#3C087E]
                  focus:ring-2
                  focus:ring-[#3C087E]/20"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>

                {budget && (
                  <div className="mt-4 text-center">
                    <span
                      className="
                      inline-flex
                      rounded-full
                      bg-[#3C087E]
                      px-4
                      py-1
                      text-xs
                      font-medium
                      text-white"
                    >
                      {
                        BUDGET_OPTIONS.find(
                          (o) => o.value === budget
                        )?.label
                      }
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-12 flex justify-center">
              <CounsellingModal onSuccess={handleFormSuccess}>
               
                <button
                  onClick={handleFindClick}
                  className="px-5 xl:px-10 py-2 rounded-lg text-white text-xl font-medium transition-all duration-300 ease-out hover:scale-105 bg-[#EEA727] border-0 border-transparent shadow-[#b36e06] shadow-md transform active:scale-100"
                >
                  <span className="relative z-10">
                    Find Matching Universities
                  </span>

                  <span
                    className="
                    absolute
                    inset-0
                    bg-white/20
                    translate-x-[-120%]
                    skew-x-12
                    transition-transform
                    duration-700
                    group-hover:translate-x-[150%]"
                  />
                </button>
              </CounsellingModal>
            </div>

            {/* Trust Strip */}

            <div
              className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-8
              gap-y-4
              text-sm"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />
                <span>100% Free Counselling</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />
                <span>50+ Universities</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />
                <span>Personalized Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          RESULTS SECTION
      =========================== */}

      {showResults && results.length > 0 && (
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

            <div
              className="
              rounded-[32px]
              border
              border-[#3C087E]/10
              bg-white
              shadow-[0_20px_60px_rgba(60,8,126,0.08)]
              p-6
              md:p-10"
            >
              <h3
                className="
                text-center
                text-2xl
                md:text-4xl
                font-bold
                text-[#270652]"
              >
                🎉 We Found {results.length} Matching{" "}
                {results.length === 1
                  ? "University"
                  : "Universities"}
              </h3>

              <p
                className="
                mt-3
                text-center
                text-gray-600
                max-w-2xl
                mx-auto"
              >
                Based on your graduation score,
                experience and preferred budget,
                these universities best fit your
                profile.
              </p>

              <div
                className="
                mt-10
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6"
              >                {results.map((uni, idx) => (
                  <div
                    key={uni.id || idx}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#3C087E]/10
                    bg-gradient-to-br
                    from-white
                    to-[#FCFAFF]
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_20px_50px_rgba(60,8,126,0.12)]"
                  >
                    {/* Decorative Background */}

                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#3C087E]/5 blur-2xl" />

                    <div className="relative">

                      {/* University */}

                      <div className="flex items-start gap-4">

                        <div
                          className="
                          h-12
                          w-12
                          rounded-xl
                          bg-[#3C087E]/10
                          flex
                          items-center
                          justify-center
                          shrink-0"
                        >
                          <Building2
                            size={22}
                            className="text-[#3C087E]"
                          />
                        </div>

                        <div className="min-w-0 flex-1">

                          <h4
                            className="
                            text-lg
                            font-bold
                            text-[#270652]
                            break-words"
                          >
                            {uni.name || uni.university_name}
                          </h4>

                          {uni.location && (
                            <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                              <MapPin size={14} />
                              {uni.location}
                            </p>
                          )}

                        </div>

                      </div>

                      {/* Program */}

                      {uni.program && (
                        <div
                          className="
                          mt-6
                          rounded-xl
                          bg-[#3C087E]/5
                          p-4"
                        >
                          <p className="text-xs uppercase tracking-wide text-gray-500">
                            Recommended Program
                          </p>

                          <p className="mt-1 font-semibold text-[#270652]">
                            {uni.program}
                          </p>
                        </div>
                      )}

                      {/* Tags */}

                      <div className="mt-5 flex flex-wrap gap-2">

                        {uni.accreditation && (
                          <span
                            className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-full
                            bg-[#EEA727]/15
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-[#8E6109]"
                          >
                            <Star size={12} />
                            {uni.accreditation}
                          </span>
                        )}

                        {uni.fees && (
                          <span
                            className="
                            rounded-full
                            bg-gray-100
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-gray-700"
                          >
                            💰 {uni.fees}
                          </span>
                        )}

                        {uni.duration && (
                          <span
                            className="
                            rounded-full
                            bg-gray-100
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-gray-700"
                          >
                            ⏳ {uni.duration}
                          </span>
                        )}

                      </div>

                      {/* CTA */}

                      <button
                        className="
                        mt-6
                        w-full
                        rounded-xl
                        border
                        border-[#3C087E]/10
                        bg-[#3C087E]
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#4A0A99]"
                      >
                        View University
                      </button>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>
      )}

      {/* Empty State */}

      {showResults && results.length === 0 && (
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

            <div
              className="
              rounded-[32px]
              border
              border-[#3C087E]/10
              bg-gradient-to-br
              from-white
              to-[#FCFAFF]
              p-10
              text-center
              shadow-[0_20px_60px_rgba(60,8,126,0.08)]"
            >

              <div
                className="
                mx-auto
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-[#3C087E]/10"
              >
                <Building2
                  size={36}
                  className="text-[#3C087E]"
                />
              </div>

              <h3 className="text-3xl font-bold text-[#270652]">
                No Matching Universities Found
              </h3>

              <p className="mt-4 mx-auto max-w-xl text-gray-600 leading-7">
                We couldn't find a university matching your
                current profile. Try adjusting your graduation
                percentage, work experience, or budget range
                and we'll recommend better matches.
              </p>

            </div>

          </div>

        </section>
      )}

    </>
  );
}
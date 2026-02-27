"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import FAQ from "@/components/NmimsSection/FAQ";
import ConnectToday from "./NmimsSection/ConnectToday";

export default function UniversityList() {
  const [universitieslist, setUniversitiesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const faqs = [
    {
      q: "What are UGC Approved Universities?",
      a: "UGC approved universities are institutions recognized by the University Grants Commission to offer valid degree programs in India.",
    },
    {
      q: "Is a UGC approved online degree valid?",
      a: "Yes, an online degree from a UGC-approved and entitled university is valid for jobs, government exams, and higher education.",
    },
    {
      q: "How can I check if a university is UGC approved?",
      a: "You can verify recognition through the official UGC website or consult trusted education guidance platforms like Radhya Education Academy.",
    },
    {
      q: "Are UGC approved distance education universities safe for admission?",
      a: "Yes, enrolling in a UGC approved distance education university ensures your degree is legitimate and recognized nationwide.",
    }
  ];

  useEffect(() => {
    const fetchUniversities = async () => {
      const { data } = await supabase
        .from("universitieslist")
        .select("*")
        .order("name");

      setUniversitiesList(data || []);
    };

    fetchUniversities();
  }, []);

 const filteredData = universitieslist.filter((uni) =>
  uni.name.toLowerCase().includes(search.toLowerCase())
);

const totalPages = Math.ceil(filteredData.length / rowsPerPage);

const paginatedData = filteredData.slice(
  (page - 1) * rowsPerPage,
  page * rowsPerPage
);

  return (
    <>
      <section className="py-12 lg:py-24 mt-10 px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl max-w-6xl mx-auto font-bold text-center text-[#3C087E] mb-4">
          UGC Approved Universities in India
        </h2>

        <span className="block max-w-3xl mx-auto bg-yellow-400 h-[4px]"></span>

        <div className="text-[#3C087E] text-xl sm:text-2xl font-bold text-center mx-auto mt-2">
          Updated List for Online & Distance Education for year 2026
        </div>

        {/* Content Paragraphs */}
        <p className="text-sm md:text-base text-black max-w-5xl mt-8 mx-auto text-justify">
         Choosing from UGC Approved Universities in India is the first and most important step before taking admission into any online or distance education program. The University Grants Commission (UGC) is the official regulatory authority that ensures universities meet national academic standards and are authorized to offer valid degree programs. Whether you are planning to pursue an online MBA, distance education course, or any online degree, verifying UGC approval safeguards your career and ensures your qualification is recognized for private jobs, government exams, and higher studies. However, beyond recognition, students should also compare universities based on accreditation, program structure, fee range, specialization options, learning flexibility, and overall academic credibility. </p>

        <p className="text-sm md:text-base text-black max-w-5xl mt-2 mx-auto text-justify mb-14">
          With the rapid growth of online and distance learning in India, comparing UGC approved universities has become essential for making an informed decision. Many students actively search for UGC approved online MBA programs and distance education universities to ensure long-term career value. A UGC-entitled online degree holds the same validity as a regular degree when issued by a recognized institution, but selecting the right university depends on your career goals, budget, and preferred specialization. At Radhya Education Academy, we simplify this process by helping students compare top UGC approved universities and choose the institution that best aligns with their professional aspirations. </p>

        
        {/* List Section */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 w-full">
  <div className="bg-[#3C087E]/10 flex items-center px-3 py-2 gap-3 rounded-lg w-full">
    <svg
      className="h-4 w-4 text-[#3C087E]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>

    <input
      type="text"
      placeholder="Search university..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setPage(1);
      }}
      className="bg-transparent outline-none text-sm w-full text-[#3C087E]"
    />
  </div>
</div>
          <div className="space-y-2">
            {paginatedData.map((uni, index) => (
              <div
                key={uni.id}
                className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-6">
                  <span className="text-black font-medium text-xs sm:text-base w-6">
                    {(page - 1) * rowsPerPage + index + 1}
                  </span>
                  <span className="font-medium text-xs sm:text-base text-black">
                    {uni.name}
                  </span>
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#FFD66C] shrink-0 hover:bg-yellow-600 text-black text-xs sm:text-base font-medium px-2 lg:px-6 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">

            {/* Rows Selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#3C3C43]">View</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setPage(1);
                }}
                className="border px-2 py-1 text-[#3C3C43] bg-[#3C087E]/10 rounded"
              >

                <option value={25}>25 rows</option>
                <option value={50}>50 rows</option>
              </select>
            </div>

            {/* Page Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    page === i + 1
                      ? "bg-[#3C087E]/10 text-[#3C087E]"
                      : "bg-gray-200 text-[#345895]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {showForm && (
            <CounsellingForm onClose={() => setShowForm(false)} />
          )}
        </div>
      </section>

      {/* FAQ Section Below Pagination */}
      <FAQ faqs={faqs} />

      <ConnectToday />
    </>
  );
}
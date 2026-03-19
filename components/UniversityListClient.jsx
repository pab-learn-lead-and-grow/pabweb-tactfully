"use client";

import { useState } from "react";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function UniversityListClient({ initialData = [] }) {

  const [universitieslist] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const filteredData = universitieslist.filter((uni) =>
    uni.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto">

      {/* Search */}
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

      {/* List */}
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

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">

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
  );
}
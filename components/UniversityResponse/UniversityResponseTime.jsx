"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";

export default function UniversityResponseTable() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const totalPages = Math.ceil(totalCount / rowsPerPage);

  async function fetchData() {
    setLoading(true);

    const from = (page - 1) * rowsPerPage;
    const to = from + rowsPerPage - 1;

    let query = supabase
      .from("university_response_time")
      .select("*", { count: "exact" })
      .order("response_time", { ascending: false });

    if (search) {
      query = query.ilike("university_name", `%${search}%`);
    }

    const { data, count } = await query.range(from, to);

    setData(data || []);
    setTotalCount(count || 0);
    setLoading(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(timeout);
  }, [page, rowsPerPage, search, fetchData]);

  function toggleCompare(university) {
    setSelected((prev) => {
      const exists = prev.find((u) => u.id === university.id);

      if (exists) {
        return prev.filter((u) => u.id !== university.id);
      }

      if (prev.length >= 4) {
        Swal.fire({
          icon: "warning",
          title: "Limit Reached",
          text: "You can compare maximum 4 universities at a time.",
          confirmButtonColor: "#3C087E",
        });
        return prev;
      }

      return [...prev, university];
    });
  }

  function handleCompare() {
    if (selected.length < 2) {
      Swal.fire({
        icon: "info",
        title: "Select at least 2 universities",
        text: "Please select minimum 2 universities to compare.",
        confirmButtonColor: "#3C087E",
      });
      return;
    }

    setShowModal(true);
  }

  return (
    <>
      <section className="w-full py-12 lg:py-24 mt-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-[#3C087E]">
              University Response Time
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Safe, secure, and transparent guidance starts with verified
              university response tracking.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex justify-start">
            <div className="bg-[#3C087E]/10 flex items-center px-3 py-2 gap-3 rounded-lg w-fit md:w-80">
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
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="bg-transparent outline-none text-sm w-full text-[#3C087E]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm sm:text-base">
              <thead
                style={{ background: "rgba(255, 185, 1, 0.56)" }}
                className="text-black"
              >
                <tr>
                   <th className="p-3 text-left w-20">S.no</th>
    <th className="p-3 text-left w-[30%]">University Name</th>
    <th className="p-3 text-left w-25">Response Time</th>
    <th className="p-3 text-left w-[35%]">Ratings</th>
    <th className="p-3 text-center w-25">Compare</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center p-6 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-6 text-gray-500">
                      No universities found
                    </td>
                  </tr>
                ) : (
                  data.map((uni, index) => (
                    <tr key={uni.id} className="border-t hover:bg-gray-50">
                      <td className="p-3 text-[#3C3C43]">
                        {(page - 1) * rowsPerPage + index + 1}
                      </td>

                      <td className="p-3 font-medium text-[#3C3C43]">
                        {uni.university_name}
                      </td>

                      <td className="p-3 text-[#3C3C43]">
                        {uni.response_time}/10
                      </td>

                      <td className="p-3 w-60">
                          <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px' }}>
                            <div
                              style={{
                                backgroundColor: '#4285F4',
                                width: `${(Number(uni.response_time) || 0) * 10}%`,
                                height: '8px',
                                borderRadius: '9999px',
                              }}
                            ></div>
                        </div>
                      </td>

                      <td className="p-3 text-center">
                        <button
                          onClick={() => toggleCompare(uni)}
                          className={`px-4 py-1 rounded-md text-white text-xs ${
                            selected.find((u) => u.id === uni.id)
                              ? "bg-gray-400"
                              : "bg-[#3C087E]"
                          }`}
                        >
                          {selected.find((u) => u.id === uni.id)
                            ? "Remove -"
                            : "Add +"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

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
                <option value={10}>10 rows</option>
                <option value={25}>25 rows</option>
                <option value={100}>100 rows</option>
              </select>
            </div>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  disabled={loading}
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

        </div>
      </section>


      {/* Persistent Bottom Compare Bar */}
      {selected.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex flex-wrap gap-3">
              {selected.map((uni) => (
                <div
                  key={uni.id}
                  className="bg-[#3C087E]/10 text-[#3C087E] px-4 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  {uni.university_name}
                  <button
                    onClick={() =>
                      setSelected((prev) =>
                        prev.filter((u) => u.id !== uni.id)
                      )
                    }
                    className="text-red-500 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleCompare}
              className="bg-[#3C087E] hover:bg-[#270652] text-white px-6 py-2 rounded-lg"
            >
              Compare ({selected.length})
            </button>
          </div>
        </div>
      )}

     {/* Comparison Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
    <div className="bg-white w-[95%] max-w-6xl rounded-xl overflow-hidden shadow-2xl">

      {/* Header */}
      <div className="bg-[#3C087E] text-white px-6 py-4 flex justify-between items-center">
        <h3 className="font-semibold">University Comparison</h3>
        <button onClick={() => setShowModal(false)}>✕</button>
      </div>

      {/* Body */}
      <div className="p-8">

        {/* Dynamic Grid */}
        <div
          className={`grid gap-8 text-center
            grid-cols-1
            sm:grid-cols-2
            ${
              selected.length === 2
                ? "md:grid-cols-2"
                : selected.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-4"
            }
          `}
        >
          {selected.map((uni) => (
            <div key={uni.id} className="space-y-4 justify-center mx-auto">

              <h4 className="font-semibold text-[#3C087E]">
                {uni.university_name}
              </h4>

              <p className="text-[#3C3C43]">
                {uni.response_time}/10
              </p>

               <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px' }}>
                            <div
                              style={{
                                backgroundColor: '#4285F4',
                                width: `${(Number(uni.response_time) || 0) * 10}%`,
                                height: '8px',
                                borderRadius: '9999px',
                              }}
                            ></div>
               </div>
              
             <div
  style={{ backgroundColor: "#d1d5db" }}  // light gray track
  className="w-full rounded-full h-2"
>
  <div
    className="h-2 rounded-full"
    style={{
      backgroundColor: "#3C087E",
      width: `${(Number(uni.response_time) || 0) * 10}%`,
    }}
  ></div>
</div>
            </div>
          ))}
        </div>

        {/* CTA Always in Next Row */}
        <div className="mt-10 flex justify-center">
          <a
          href ="/contact-us"
           className="bg-[#F6A410] hover:scale-105 text-black font-medium px-8 py-3 rounded-lg hover:opacity-90">
            Get Free Counselling
          </a>
        </div>

      </div>
    </div>
  </div>
)}
    
    </>
  );
}

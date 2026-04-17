"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function UniversityResponseTableClient({
  initialData = [],
  initialCount = 0,
}) {
  const [data] = useState(initialData);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount] = useState(initialCount);
  const [search, setSearch] = useState("");
  const [loading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const filteredData = data.filter((uni) =>
    uni.university_name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

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
      <section className="w-full py-12 lg:pt-20 mt-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-5xl max-w-4xl mx-auto  leading-[110%] font-bold text-[#3C087E]">
              Online University Response Time Comparison in India (2026)
            </h1>
               <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    Choosing an online university in India is not only about selecting the right course, comparing fees, or evaluating rankings - it is also about how efficiently the university communicates with you during the admission process. In today’s fast-paced digital environment, students expect quick responses, accurate information, and consistent support from universities. Whether you are enquiring about eligibility, fee structure, specializations, or admission deadlines, timely communication plays a critical role in helping you make informed decisions. However, many students face challenges such as delayed responses, unclear communication, or difficulty in connecting with university support teams, which can create confusion and slow down the admission process.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    To solve this problem, Radhya Education Academy provides a comprehensive online university response time comparison in India for 2026, helping students understand which universities are quick, reliable, and student-focused. This comparison evaluates response speed, communication quality, and the overall efficiency of admission support systems across different institutions. By going beyond traditional factors like fees and rankings, this approach focuses on real student experience and helps you choose a university that values your time. As a result, you can ensure a smoother admission journey, faster decision-making, and a more confident start to your higher education path.
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
                  <th className="p-3 text-left w-35">Response Time</th>
                  <th className="p-3 text-left w-25">Ratings</th>
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
                ) : paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-6 text-gray-500">
                      No universities found
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((uni, index) => (
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

                      <td className="p-3 w-40">
                        <div style={{ width:'60%', backgroundColor:'#e5e7eb', borderRadius:'9999px', height:'8px'}}>
                          <div
                            style={{
                              backgroundColor:'#4285F4',
                              width:`${(Number(uni.response_time)||0)*10}%`,
                              height:'8px',
                              borderRadius:'9999px',
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

        <div className="text-start mt-20">
  <h2 className="text-2xl md:text-4xl leading-[120%] font-bold text-[#3C087E] mb-4">
    What is University Response Time in Online Education
  </h2>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    University response time refers to how quickly a university replies to student queries related to admissions, course details, fee structure, eligibility, and counseling support. In the context of online and distance education in India, response time becomes even more important because the entire admission process is conducted digitally through calls, emails, chat platforms, or WhatsApp. Students rely heavily on timely communication to make informed decisions.
    <br /><br />
    A fast response time indicates that the university has a well-structured support system, trained counselors, and a student-first approach. On the other hand, slow or delayed responses can create confusion, increase uncertainty, and negatively impact the overall admission experience. This is why response time has become a key factor when evaluating online universities today.
  </p>
</div>

<div className="text-start max-w-6xl mt-14">
  <h2 className="text-2xl md:text-4xl leading-[120%] font-bold text-[#3C087E] mb-4">
    Why Response Time is Important for Students
  </h2>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    Response time directly affects how smoothly and efficiently a student can complete their admission process. When universities respond quickly, students receive timely guidance, clear information, and the confidence needed to move forward with their application without delays.
  </p>

  <ul className="list-disc px-5 text-start text-black mt-2">
    <li>Faster decision-making during admissions</li>
    <li>Clear understanding of courses, fees, and eligibility</li>
    <li>Better guidance from counselors</li>
    <li>Smoother and stress-free admission experience</li>
  </ul>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    However, when response time is slow, students often face multiple challenges that can negatively impact their decisions and timelines.
  </p>

  <ul className="list-disc px-5 text-start text-black mt-2">
    <li>Delays in completing the admission process</li>
    <li>Confusion due to incomplete or late information</li>
    <li>Missed deadlines or limited seat availability</li>
    <li>Frustration and lack of trust in the institution</li>
  </ul>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    This is why response time is an important and often overlooked factor when choosing the right online university in India.
  </p>
</div>

<div className="text-start max-w-6xl mt-14">
  <h2 className="text-2xl md:text-4xl leading-[120%] font-bold text-[#3C087E] mb-4">
    How We Measure University Response Time
  </h2>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    At Radhya Education Academy, we measure university response time based on real student interactions, inquiry handling efficiency, and overall communication quality. Our goal is to provide a practical and unbiased comparison that reflects actual student experience rather than theoretical claims.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    We analyze multiple factors to ensure accurate evaluation:
  </p>

  <ul className="list-disc px-5 text-start text-black mt-2">
    <li>Time taken to respond to the first student inquiry</li>
    <li>Speed and consistency of follow-up responses</li>
    <li>Availability and accessibility of counseling support</li>
    <li>Response across multiple channels (calls, WhatsApp, email)</li>
    <li>Clarity, accuracy, and usefulness of the information provided</li>
  </ul>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    This approach ensures that the comparison is realistic, transparent, and genuinely helpful for students making important education decisions.
  </p>
</div>

<div className="text-start max-w-6xl mt-14">
  <h2 className="text-2xl md:text-4xl leading-[120%] font-bold text-[#3C087E] mb-4">
    Online University Response Time Comparison in India
  </h2>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    This section provides a detailed comparison of how different online universities in India respond to student queries during the admission process. Based on response speed and communication efficiency, universities can generally be grouped into different categories.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    <strong>Fast Response Universities : </strong>
    These universities typically respond within a few minutes to a few hours and provide complete, clear, and actionable guidance to students.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    <strong>Moderate Response Universities : </strong>
    These universities may take several hours to respond and often require follow-ups to get complete information.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    <strong>Slow Response Universities : </strong>
    These universities take more than 24 hours to respond or provide incomplete and unclear information, which can delay decision-making.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    This comparison helps students identify which universities offer better communication, faster support, and a more reliable admission experience.
  </p>
</div>

<div className="text-start max-w-6xl mt-14">
  <h2 className="text-2xl md:text-4xl leading-[120%] font-bold text-[#3C087E] mb-4">
    Fast vs Slow Response – What It Indicates
  </h2>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    University response time is often a direct reflection of the institution’s internal systems, operational efficiency, and commitment toward student support.
  </p>

  <p className="mt-2 text-sm md:text-base text-black max-w-6xl mx-auto text-justify">
    Fast response usually indicates:
  </p>

  <ul className="list-disc px-5 text-start text-black mt-2">
    <li>Strong and well-trained admission support team</li>
    <li>Efficient communication systems and processes</li>
    <li>Student-focused approach and responsiveness</li>
    <li>Better overall admission and learning experience</li>
  </ul>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    Slow response may indicate:
  </p>

  <ul className="list-disc px-5 text-start text-black mt-2">
    <li>Poor or understaffed support infrastructure</li>
    <li>High inquiry volume without proper management</li>
    <li>Lack of prioritization of student queries</li>
  </ul>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    Understanding this difference can help you select a university that not only offers good academics but also provides a smooth and supportive experience throughout your journey.
  </p>
</div>

<div className="text-start max-w-6xl mt-14">
  <h2 className="text-2xl md:text-4xl leading-[120%] font-bold text-[#3C087E] mb-4">
    Choose a University That Values Your Time
  </h2>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    When selecting an online university, it is important to consider not just academic factors such as courses and fees, but also how responsive and supportive the institution is throughout the admission process. A university that responds quickly demonstrates professionalism, efficiency, and a commitment to student satisfaction.
  </p>

  <p className="text-sm md:text-base text-black max-w-6xl mt-4 mx-auto text-justify">
    A responsive university ensures that your admission journey is smooth, transparent, and stress-free. It also reflects how supportive the institution will be during your course, from handling academic queries to providing ongoing assistance. Choosing such a university helps you save time, reduce confusion, and start your educational journey with confidence.
  </p>
</div>
        </div>
       
      </section>

      {/* Bottom Compare Bar */}
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
            
            </div>
          ))}
        </div>

              <div className="mt-10 flex justify-center">
                <a
                  href="/contact-us"
                  className="bg-[#F6A410] hover:scale-105 text-black font-medium px-8 py-3 rounded-lg hover:opacity-90"
                >
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
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronsDown } from "lucide-react";
import CounsellingModal from "../Radhya/CounsellingModal";

export default function SyllabusSection({
  title,
  subjects,
  semesters,
  semSuffix,
  topicsData,
  unitLabel = "Semester",
}) {
  const [activeSubject, setActiveSubject] = useState(subjects[0].id);
  const [activeSemester, setActiveSemester] = useState(semesters[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-white px-4 md:px-16 py-10">
      
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[32px] md:text-[64px] leading-[110%] font-extrabold font-sans text-center text-[#270652] mb-10"
      >
        {title}
      </motion.h2>

      {/* MAIN WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-[#3C087E]/10 rounded-[30px] p-4 sm:p-6 md:p-12 flex flex-col xl:flex-row gap-6 md:gap-10"
      >

        {/* MOBILE LAYOUT */}
        <div className="grid grid-cols-2 gap-4 md:gap-20 lg:gap-30 w-full xl:hidden">

          {/* SUBJECTS */}
          <div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-full h-[180px] md:h-[250px] overflow-y-auto no-scrollbar gap-2 sm:gap-3 items-center">

                {subjects.map((sub) => (
                  <motion.button
                    key={sub.id}
                    onClick={() => {
                      setActiveSubject(sub.id);
                      setActiveSemester(semesters[0]);
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`w-full px-2 py-2 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold
                    ${
                      activeSubject === sub.id
                        ? "bg-[#3C087E] text-white"
                        : "bg-white text-black border-2 border-dashed border-[#3C087E]"
                    }`}
                  >
                    {sub.name}
                  </motion.button>
                ))}

              </div>
            </div>
          </div>

          {/* SEMESTERS */}
            <div className="flex flex-col">
              <div className="max-h-[140px] overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-2">
                  {semesters.map((sem) => (
                    <motion.button
                      key={sem}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveSemester(sem)}
                      className={`px-3 py-2 rounded-full text-xs font-semibold
                      ${
                        activeSemester === sem
                          ? "bg-[#3C087E] text-white"
                          : "bg-white text-black border-2 border-dashed border-[#3C087E]"
                     }`}
                    >
                      {sem}
                      {semSuffix[sem]} {unitLabel}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* DOWNLOAD BUTTON */}
              <CounsellingModal>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                mt-4 bg-[#F6A410]
                text-white px-2 py-2 rounded-xl text-[10px]
                shadow-md flex items-center justify-center gap-2
              "
              >
                DOWNLOAD SYLLABUS
                <ChevronRight size={14} />
              </motion.button>
              </CounsellingModal>
            </div>
        </div>

        {/* DESKTOP SUBJECTS */}
        <div className="hidden xl:flex w-[30%] flex-col items-center">
          <div className="flex flex-col w-full h-80 overflow-y-auto no-scrollbar gap-4 mt-10 items-center">

            {subjects.map((sub) => (
              <motion.button
                key={sub.id}
                onClick={() => {
                  setActiveSubject(sub.id);
                  setActiveSemester(semesters[0]);
                }}
                whileHover={{ scale: 1.05 }}
                className={`w-full px-4 py-3 rounded-full font-semibold
                ${
                  activeSubject === sub.id
                    ? "bg-[#3C087E] text-white"
                    : "bg-white text-black border-2 border-dashed border-[#3C087E]"
                }`}
              >
                {sub.name}
              </motion.button>
            ))}

          </div>
        </div>

        {/* TOPICS */}
        <div className="w-full flex flex-col mt-6 items-center justify-center xl:w-[40%]">

          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md relative w-full">

            <div className="absolute top-0 bottom-0 flex flex-col items-center">
              <div className="bg-[#270652] text-white p-3 rounded-full shadow z-10 mt-6">
                <ChevronsDown size={16} />
              </div>
              <div className="w-0.5 bg-[#270652] flex-1 mb-4"></div>
            </div>

            <p className="text-[20px] sm:text-[26px] md:text-3xl font-bold text-[#270652] ml-16 mb-3">
              Topics Covered
            </p>

            <AnimatePresence mode="wait">
              <motion.ul
                key={activeSubject + "-" + activeSemester}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-3 ml-16"
              >
                {topicsData[activeSubject][activeSemester].map((topic, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 6 }}
                    className="flex gap-3 items-center group cursor-pointer"
                  >
                    <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white group-hover:bg-[#270652] transition">
                      <Check
                        size={12}
                        className="text-[#270652] group-hover:text-white transition"
                      />
                    </div>

                    <span className="text-gray-800 text-sm md:text-base group-hover:text-[#270652] transition">
                      {topic}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>

          </div>

        </div>

        {/* DESKTOP SEMESTERS */}
       <div className="hidden xl:flex w-[25%] flex-col items-center mt-10">
            <div className="max-h-50 overflow-y-auto no-scrollbar w-[90%] flex flex-col gap-4">
              {semesters.map((sem) => (
                <motion.button
                  key={sem}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveSemester(sem)}
                  className={`px-4 py-3 rounded-full font-semibold
                  ${
                    activeSemester === sem
                      ? "bg-[#3C087E] text-white"
                      : "bg-white text-black border-2 border-dashed border-[#3C087E]"
                         }`}
                >
                  {sem}
                  {semSuffix[sem]} {unitLabel}
                </motion.button>
              ))}
            </div>

            {/* DOWNLOAD BUTTON */}
            <CounsellingModal>
            <motion.button
              
              whileHover={{ scale: 1.05 }}
              className="
              mt-6 w-full
              bg-[#F6A410]
              text-white px-3 py-4 rounded-2xl
              shadow-lg flex items-center justify-center gap-4
            "
            >
              DOWNLOAD SYLLABUS
              <ChevronRight size={20} />
            </motion.button>
            </CounsellingModal>
          </div>

      </motion.div>
    </section>
  );
}
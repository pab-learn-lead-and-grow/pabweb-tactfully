import React, { useState } from "react";
import { ChevronDown, ChevronsDown } from "lucide-react";

const Syllabus = ({ years, data }) => {
  const [activeYear, setActiveYear] = useState(years[0]);

  // Controls for dropdown open/close
  const [openDropdown, setOpenDropdown] = useState({});

  // Controls for selected elective
  const [selectedSpecialization, setSelectedSpecialization] = useState({});

  // Controls for radio type (super/dual)
  const [selectedType, setSelectedType] = useState({});

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const chooseSpec = (key, value) => {
    setSelectedSpecialization((prev) => ({ ...prev, [key]: value }));
    setOpenDropdown((prev) => ({ ...prev, [key]: false }));
  };

  const chooseType = (key, type) => {
    setSelectedType((prev) => ({ ...prev, [key]: type }));
    setSelectedSpecialization((prev) => ({ ...prev, [key]: "" }));
  };

  // Render a specialization block (works for spec1 and spec2)
  const renderSpecializationBlock = (semKey, specKey, specData, label) => {
    const fullKey = `${semKey}-${specKey}`;

    const list =
      specData.useRadio && selectedType[fullKey]
        ? specData.data[selectedType[fullKey]]
        : specData.data;

    return (
      <div className="mt-10">
        <h3 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-[#345895]">{label}</h3>

        {/* RADIO BUTTONS (super / dual) */}
        {specData.useRadio && (
          <div className="flex gap-4 mb-4 mt-3">
            {specData.types.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 text-black cursor-pointer"
              >
                <input
                  type="radio"
                  checked={selectedType[fullKey] === type}
                  onChange={() => chooseType(fullKey, type)}
                />
                {type}
              </label>
            ))}
          </div>
        )}

        {/* DROPDOWN */}
        <div className="relative mb-4">
          <div
    onClick={() => toggleDropdown(fullKey)}
    className="w-full px-4 py-2 text-[20px] text-[#616161] border rounded-lg cursor-pointer bg-white flex items-center justify-between"
  >
    <span>
      {selectedSpecialization[fullKey] || "Select Elective"}
    </span>

    <ChevronDown
      size={25}
      className={`transition-transform duration-200 ${
        openDropdown[fullKey] ? "rotate-180" : "rotate-0"
      }`}
    />
  </div>

          {openDropdown[fullKey] && (
            <div
              className="absolute w-full bg-white border rounded-lg mt-1 shadow-md z-50 text-black"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {list.map((item) => (
                <div
                  key={item.name}
                  onClick={() => chooseSpec(fullKey, item.name)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[18px]"
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SHOW TOPICS */}
        {selectedSpecialization[fullKey] && (
          <div className="mt-4 bg-white rounded-lg p-4 text-black">
            <h4 className="font-semibold text-[12px] md:text-[20px] mb-2">Topics Covered:</h4>
            <ul className="space-y-1">
              {list
                .find((x) => x.name === selectedSpecialization[fullKey])
                ?.topics.map((topic, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#4D964F]">✓</span>
                    {topic}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto font-[Inter]">
        {/* Heading */}
        <div className="text-[36px] md:text-[48px] lg:text-[64px] font-extrabold text-center text-[#345895] mb-8">
          Syllabus
        </div>

        {/* YEAR TABS */}
        <div className="flex gap-4 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-10 py-2 rounded-full font-semibold ${
                activeYear === year
                  ? "bg-[#4D964F] text-white shadow-lg"
                  : "bg-white text-[#4D964F] border-2 border-dashed border-[#4D964F]"
              }`}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* SEMESTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {Object.entries(data[activeYear].semesters).map(
            ([semKey, semData]) => (
              <div key={semKey} className="bg-[#F0F7FD] rounded-lg  w-full  p-6">

                <h2 className="text-3xl font-bold text-black mb-6">
                  {semData.title}
                </h2>

                <div className="flex gap-4">

                  {/* LEFT ICON COLUMN */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#345895] mt-3 rounded-full flex items-center justify-center text-white">
                      <ChevronsDown size={25} />
                    </div>
                    <div className="w-[3px] bg-[#345895] flex-1"></div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex-1">

                    {/* CORE SUBJECTS */}
                    {semData.coreSubjects && (
                      <>
                        <h3 className="text-[40px] font-bold text-[#345895]">
                          Core Subjects
                        </h3>
                        <ul className="mt-4 space-y-2 text-black text-[20px]">
                          {semData.coreSubjects.map((s, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-[#4D964F]">✓</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* NORMAL TOPICS */}
                    {semData.topics && (
                      <>
                        <h3 className="text-[30px] md:text-[40px] font-bold text-[#345895]">
                          Topics Covered
                        </h3>
                        <ul className="mt-4 text-black space-y-2 text-[20px]">
                          {semData.topics.map((t, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-[#4D964F]">✓</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* SPECIALIZATION I */}
                    {semData.specialization1 &&
                      renderSpecializationBlock(
                        semKey,
                        "spec1",
                        semData.specialization1,
                        "Specialization I:"
                      )}

                    {/* SPECIALIZATION II */}
                    {semData.specialization2 &&
                      renderSpecializationBlock(
                        semKey,
                        "spec2",
                        semData.specialization2,
                        "Specialization II:"
                      )}

                    {/* SINGLE SPECIALIZATION (old structure) */}
                    {semData.specialization &&
                      renderSpecializationBlock(
                        semKey,
                        "single",
                        semData.specialization,
                        "Specialization:"
                      )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;

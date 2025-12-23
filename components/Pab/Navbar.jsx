"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import CounsellingForm from "./CounsellingForm.jsx";
import { createSupabaseClient } from "@/lib/supabaseClient";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

  // desktop dropdown states
  const [exploreOpen, setExploreOpen] = useState(false);
  const [topUnivOpen, setTopUnivOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // mobile-specific dropdown states
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [mobileTopUnivOpen, setMobileTopUnivOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("Online MBA");
  const [selectedExploreCategory, setSelectedExploreCategory] =
    useState("PG Courses");
  const [selectedExploreSubCategory, setSelectedExploreSubCategory] =
    useState(null);


  const pathname = usePathname();
const searchParams = useSearchParams();
useEffect(() => {
  const slug = searchParams.get("category");

  if (!slug) return;

  const mappedCategory = CATEGORY_SLUG_MAP[slug];
  if (!mappedCategory || !categoryData[mappedCategory]) return;

  if (mappedCategory && categoryData[mappedCategory]) {
    setSelectedCategory(mappedCategory);
    setTopUnivOpen(true);
    setMobileTopUnivOpen(true); 
    setIsOpen(true);  // open dropdown
    setExploreOpen(false);
    setMobileExploreOpen(false);
    setMoreOpen(false);
  }
}, [searchParams]);

const CATEGORY_SLUG_MAP = {
  "online-mba": "Online MBA",
  "executive-mba": "Executive MBA",
  "online-bba": "Online BBA",
  "online-bcom": "Online B.COM",
  "online-bcom-hons": "Online B.COM(Hons.)",
  "online-bcom-int": "Online B.COM(Int.)",
  "online-mca": "Online MCA",
  "online-bca": "Online BCA",
  "online-ba": "Online BA",
  "online-ma": "Online MA",
  "online-msc": "Online MSc",
  "online-certification": "Online Certification",
  "online-diploma": "Online Diploma",
  "online-majmc": "Online MAJMC",
  "online-bajmc": "Online BAJMC",
  "integrated-programs": "Integrated Programs",
};




  const router = useRouter();
  const supabase = createSupabaseClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (topUnivOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [topUnivOpen]);

  // Close dropdowns when clicking outside (desktop-targeted)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        topUnivOpen &&
        !event.target.closest(".top-univ-dropdown") &&
        !event.target.closest('[aria-expanded="true"]')
      ) {
        setTopUnivOpen(false);
         clearCategoryFromUrl();
      }
      if (
        exploreOpen &&
        !event.target.closest(".explore-programs-dropdown") &&
        !event.target.closest('[aria-expanded="true"]')
      ) {
        setExploreOpen(false);
      }
    };

    if (topUnivOpen || exploreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [topUnivOpen, exploreOpen]);

 const clearCategoryFromUrl = () => {
  setTimeout(() => {
    router.replace(pathname, { scroll: false });
  }, 0);
};



  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  };

  const handleProgramAction = (program) => {
  // Open counselling ONLY for amity certificates
  if (program.openModal) {
    setShowForm(true);
    handleMobileCloseAll();
    handleLinkClick();
    return;
  }

  // Navigate for all normal courses
  if (program.path) {
    router.push(program.path);
    handleMobileCloseAll();
    handleLinkClick();
  }
};


  // Helper to close all mobile + desktop dropdowns when navigating / applying
  const handleMobileCloseAll = () => {
    setIsOpen(false);
    setMobileExploreOpen(false);
    setMobileTopUnivOpen(false);
    setExploreOpen(false);
    setTopUnivOpen(false);
    setMoreOpen(false);
  };

  // Top Universities data structure
  const categoryData = {
    "Online MBA": {
      label: "PG Courses",
      programs: [
        {
          id: 1,
          title: "Masters of Business Administration",
          logo: "/nmims.png",
          path: "/nmims/NmimsMba",
        },
        {
          id: 2,
          title: "Masters of Business Administration",
          logo: "/amity.png",
          path: "/amity/amityMba",
        },
        {
          id: 3,
          title: "Masters of Business Administration",
          logo: "/manipal.png",
          path: "/muj/MujMba",
        },
        {
          id: 4,
          title: "Masters of Business Administration",
          logo: "/jain.png",
          path: "/jain/JainMba",
        },
        {
          id: 5,
          title: "Masters of Business Administration",
          logo: "/smu.png",
          path: "/smu/SmuMba",
        },
      ],
    },
     "Online MSc": {
      label: "PG Courses",
      programs: [
        {
          id: 1,
          title: "MSc. Data Science",
          logo: "/amity.png",
          path: "/amity/AmityMsc",
        },
      ],
    },
    "Executive MBA": {
      label: "Executive Programs",
      programs: [
        { id: 1, title: "Marketing Management", logo: "/nmims.png", path: "/nmims/NmimsWx", },
        { id: 2, title: "Leadership & Strategy", logo: "/nmims.png", path: "/nmims/NmimsWx", },
        { id: 3, title: "Operations & Supply Chain Management", logo: "/nmims.png", path: "/nmims/NmimsWx", },
        { id: 4, title: "Applied Finance ", logo: "/nmims.png", path: "/nmims/NmimsWx", },
        { id: 5, title: "Digital Marketing", logo: "/nmims.png", path: "/nmims/NmimsWx", },

      ],
    },
    "Online MCA": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "Master of Computer Applications", logo: "/amity.png",  path: "/amity/AmityMca",},
        {
          id: 2,
          title: "Master of Computer Applications",
          logo: "/manipal.png",
           path: "/muj/MujMca",
        },
        { id: 3, title: "Master of Computer Applications", logo: "/jain.png", path: "/jain/JainMca", },
        { id: 4, title: "Master of Computer Applications", logo: "/smu.png", path: "/smu/SmuMca", },
      ],
    },
    "Online MA": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "Master of Arts", logo: "/manipal.png", path:"/muj/MujMa" },
        { id: 2, title: "Master of Arts", logo: "/jain.png", path:"/jain/JainMa" },
        { id: 3, title: "Master of Arts", logo: "/amity.png", path:"/amity/AmityMa" },
        { id: 4, title: "Master of Arts", logo: "/smu.png", path:"/smu/SmuMa" },
      ],
    },
    "Online MAJMC": {
      label: "PG Courses",
      programs: [
        {
          id: 1,
          title: "MA in Journalism & Mass Communication",
          logo: "/manipal.png",
          path: "/muj/MujMajmc",
        },
        {
          id: 2,
          title: "MA in Journalism & Mass Communication",
          logo: "/amity.png",
          path: "/amity/AmityMajmc",
        },
      ],
    },
    "Online M.COM": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "Master of Commerce", logo: "/amity.png", path: "/amity/AmityMcom" },
        { id: 2, title: "Master of Commerce", logo: "/manipal.png", path: "/muj/MujMcom" },
        { id: 3, title: "Master of Commerce", logo: "/smu.png", path: "/smu/SmuMcom" },
        { id: 4, title: "Master of Commerce", logo: "/jain.png", path: "/jain/JainMcom" },
      ],
    },
    "Online BBA": {
      label: "UG Courses",
      programs: [
        {
          id: 1,
          title: "Bachelor of Business Administration",
          logo: "/nmims.png",
          path: "/nmims/NmimsBba",
        },
        {
          id: 2,
          title: "Bachelor of Business Administration",
          logo: "/amity.png",
          path: "/amity/AmityBba",
        },
        {
          id: 3,
          title: "Bachelor of Business Administration",
          logo: "/manipal.png",
          path: "/muj/MujBba",
        },
        {
          id: 4,
          title: "Bachelor of Business Administration",
          logo: "/jain.png",
          path: "/jain/JainBba",
        },
      ],
    },
    "Online B.COM": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "Bachelor of Commerce", logo: "/nmims.png", path: "/nmims/NmimsBcom" },
        { id: 2, title: "Bachelor of commerce", logo: "/amity.png", path: "/amity/AmityBcom" },
        { id: 3, title: "Bachelor of Commerce", logo: "/manipal.png", path: "/muj/MujBcom" },
        { id: 4, title: "Bachelor of Commerce", logo: "/jain.png", path: "/jain/JainBcom" },
        { id: 5, title: "Bachelor of Commerce", logo: "/smu.png", path: "/smu/SmuBcom"},
      ],
    },
     "Online B.COM(Hons.)": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "Bachelor of commerce (Honours)", logo: "/amity.png", path: "/amity/AmityBcomHons" },
      ],
    },
     "Online B.COM(Int.)": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "B.Com in International Finance & Accounting", logo: "/amity.png", path: "/amity/AmityBcomInt" },
      ],
    },
    "Online BCA": {
      label: "UG Courses",
      programs: [
        {
          id: 1,
          title: "Bachelor of Computer Applications",
          logo: "/manipal.png",
          path: "/muj/MujBca",
        },
        {
          id: 2,
          title: "Bachelor of Computer Applications",
          logo: "/jain.png",
          path: "/jain/JainBca",
        },
         {
          id: 3,
          title: "Bachelor of Computer Applications",
          logo: "/amity.png",
          path: "/amity/AmityBca",
        },
      ],
    },
    "Online BAJMC": {
      label: "UG Courses",
      programs: [
        {
          id: 1,
          title: "BA in Journalism & Mass Communication",
          logo: "/amity.png",
          path: "/amity/AmityBajmc",
        },
      ],
    },
    "Online BA": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "Bachelor of Arts", logo: "/amity.png", path: "/amity/AmityBa" },
        { id: 2, title: "Bachelor of Arts", logo: "/smu.png", path: "/smu/SmuBa" },
      ],
    },
    "Online Diploma": {
      label: "Diploma Programs",
      programs: [
        { id: 1, title: "Diploma in Marketing Management", logo: "/nmims.png", path: "/nmims/NmimsDiploma" },
        { id: 2, title: "Diploma in Financial Management", logo: "/nmims.png", path: "/nmims/NmimsDiploma" },
        {
          id: 3,
          title: "Diploma in Human Resource Management",
          logo: "/nmims.png",
          path: "/nmims/NmimsDiploma"

        },
        { id: 4, title: "Diploma in Business Management", logo: "/nmims.png", path: "/nmims/NmimsDiploma" },
        {
          id: 5,
          title: "Diploma in Operations Management",
          logo: "/nmims.png",
          path: "/nmims/NmimsDiploma"
        },
      ],
    },
    "Online Certification": {
      label: "Certificate Programs",
      programs: [
        {
          id: 1,
          title: "Business Management Certification",
          logo: "/nmims.png",
          path: "/nmims/NmimsCert"
        },
        { id: 2, title: "AI for Product Managers", logo: "/amity.png", openModal: true, },
        {
          id: 3,
          title: "Agentic AI and Autonomous Systems",
          logo: "/amity.png",
          openModal: true,
        },
        { id: 4, title: "AI in BFSI", logo: "/amity.png", openModal: true, },
        { id: 5, title: "AI for Business Leaders", logo: "/amity.png", openModal: true, },
        {
          id: 6,
          title: "AI in Finance and Risk Management",
          logo: "/amity.png",
          openModal: true,
        },
        { id: 7, title: "AI for Marketing & Sales", logo: "/amity.png", openModal: true, },
        { id: 8, title: "AI in Healthcare", logo: "/amity.png", openModal: true, },
        { id: 9, title: "AI in Executive Strategy", logo: "/amity.png", openModal: true, },
        { id: 10, title: "AI for HR & Talent Management", logo: "/amity.png", openModal: true, },
        { id: 11, title: "AI in Manufacturing", logo: "/amity.png", openModal: true, },
        { id: 12, title: "AI in Education", logo: "/amity.png", openModal: true, },
        {
          id: 13,
          title: "Predictive Analytics Using Python",
          logo: "/amity.png",
          openModal: true,
        },
        {
          id: 14,
          title: "Programming for Data Analytics Using Python",
          logo: "/amity.png",
          openModal: true,
        },
        { id: 15, title: "Applied Data Engineering", logo: "/amity.png", openModal: true, },
        {
          id: 16,
          title: "Business Analytics Professional",
          logo: "/amity.png",
          openModal: true,
        },
        {
          id: 17,
          title: "Descriptive Analytics and Data Pre-processing using Python",
          logo: "/amity.png",
          openModal: true,
        },
        { id: 18, title: "Time Series Forecasting", logo: "/amity.png", openModal: true, },
        { id: 19, title: "Social Media Analytics", logo: "/amity.png",  openModal: true, },
        { id: 20, title: "Text Mining and NLP", logo: "/amity.png", openModal: true, },
        {
          id: 21,
          title: "Artificial Intelligence and Deep Learning using Python",
          logo: "/amity.png",
          openModal: true,
        },
        { id: 22, title: "Big Data Analytics", logo: "/amity.png", openModal: true, },
        {
          id: 23,
          title: "Spreadsheet Modelling using Excel",
          logo: "/amity.png",
          openModal: true,
        },
        {
          id: 24,
          title: "Financial Modelling using Excel",
          logo: "/amity.png",
          openModal: true,
        },
        { id: 25, title: "HR Analytics", logo: "/amity.png", openModal: true, },
        { id: 26, title: "Financial Analytics", logo: "/amity.png", openModal: true, },
        { id: 27, title: "Marketing Analytics", logo: "/amity.png", openModal: true, },
        {
          id: 28,
          title: "Dashboarding and Storytelling using Tableau",
          logo: "/amity.png",
          openModal: true,
        },
        {
          id: 29,
          title: "Dashboarding and Storytelling using PowerBI",
          logo: "/amity.png",
          openModal: true,
        },
        {
          id: 30,
          title: "Database Management using SQL and MongoDB",
          logo: "/amity.png",
          openModal: true,
        },
      ],
    },
    "Integrated Programs": {
      label: "Integrated Programs",
      programs: [
        { id: 1, title: "BBA + MBA Integrated", logo: "/amity.png", path: "/amity/AmityUgPg" },
        { id: 2, title: "B.COM + MBA Integrated", logo: "/amity.png", path: "/amity/AmityUgPg" },
        { id: 3, title: "BCA + MCA Integrated", logo: "/amity.png", path: "/amity/AmityUgPg" },
      ],
    },
  };

  // Explore Programs data structure
  const exploreProgramsData = {
    "PG Courses": {
      categories: [
        {
          id: "online-mba",
          title: "Online MBA",
          subtitle: "View Specialization",
          categoryKey: "Online MBA",
        },
        {
          id: "online-mca",
          title: "Online MCA",
          subtitle: "View Specialization",
          categoryKey: "Online MCA",
        },
        {
          id: "online-ma",
          title: "OnlineMA",
          subtitle: "View Specialization",
          categoryKey: "Online MA",
        },
         {
          id: "online-msc",
          title: "OnlineMSc",
          subtitle: "View Specialization",
          categoryKey: "Online MSc",
        },
        {
          id: "online-majmc",
          title: "Online MAJMC",
          subtitle: "View Specialization",
          categoryKey: "Online MAJMC",
        },
        {
          id: "online-mcom",
          title: "Online M.COM",
          subtitle: "View Specialization",
          categoryKey: "Online M.COM",
        },
      ],
    },
    Executive: {
      categories: [
        {
          id: "executive-mba",
          title: "Executive MBA",
          subtitle: "View Specialization",
          categoryKey: "Executive MBA",
        },
      ],
    },
    "UG Courses": {
      categories: [
        {
          id: "online-bba",
          title: "Online BBA",
          subtitle: "View Specialization",
          categoryKey: "Online BBA",
        },
        {
          id: "online-bcom-hons",
          title: "Online B.COM (Hons.)",
          subtitle: "View Specialization",
          categoryKey: "Online B.COM(Hons.)",
        },
         {
          id: "online-bcom-int",
          title: "Online B.COM (Int.)",
          subtitle: "View Specialization",
          categoryKey: "Online B.COM(Int.)",
        },
         {
          id: "online-bcom",
          title: "Online B.COM",
          subtitle: "View Specialization",
          categoryKey: "Online B.COM",
        },
        {
          id: "online-bca",
          title: "Online BCA",
          subtitle: "View Specialization",
          categoryKey: "Online BCA",
        },
        {
          id: "online-bajmc",
          title: "Online BAJMC",
          subtitle: "View Specialization",
          categoryKey: "Online BAJMC",
        },
        {
          id: "online-ba",
          title: "Online BA",
          subtitle: "View Specialization",
          categoryKey: "Online BA",
        },
      ],
    },
    Diploma: {
      categories: [
        {
          id: "online-diploma",
          title: "Online Diploma",
          subtitle: "View Specialization",
          categoryKey: "Online Diploma",
        },
      ],
    },
    Certifications: {
      categories: [
        {
          id: "certification-program",
          title: "Online Certification",
          subtitle: "View Specialization",
          categoryKey: "Online Certification",
        },
      ],
    },
    "Integrated Programs": {
      categories: [
        {
          id: "integrated-program",
          title: "Integrated Programs",
          subtitle: "View Specialization",
          categoryKey: "Integrated Programs",
        },
      ],
    },
  };

  const leftItems = Object.keys(categoryData);
  const currentPrograms = categoryData[selectedCategory]?.programs || [];
  const currentLabel = categoryData[selectedCategory]?.label || "Courses";

  const exploreLeftItems = Object.keys(exploreProgramsData);
  const currentExploreCategories =
    exploreProgramsData[selectedExploreCategory]?.categories || [];

  // Get programs for selected subcategory in Explore Programs
  const currentExplorePrograms = selectedExploreSubCategory
    ? categoryData[selectedExploreSubCategory]?.programs || []
    : [];

  const handleExploreCategoryClick = (categoryKey) => {
    setSelectedExploreSubCategory(categoryKey);
  };

  const handleExploreBack = () => {
    setSelectedExploreSubCategory(null);
  };

  // Close all dropdowns when navigating to a page (desktop-focused)
  const handleLinkClick = () => {
    setIsOpen(false);
    setExploreOpen(false);
    setTopUnivOpen(false);
    setMoreOpen(false);
    // Note: mobile close handled separately with handleMobileCloseAll when needed
  };

  return (
    <div className="fixed top-0 left-0 right-0 md:px-9 z-50">
      <nav className="w-full xl:w-[90%] mx-auto h-[72px] bg-[rgba(255,255,255,0.33)] backdrop-blur-3xl rounded-4xl shadow-sm border border-white/20">
        <div className="w-full mx-auto flex items-center justify-between h-full px-4 md:px-8">
          <div className="flex items-center gap-4">
            <a href="/" className="block">
              <Image
                src="/pablogo.png"
                alt="PAB Logo"
                width={80}
                height={60}
                priority
              />
            </a>

            {/* Explore Program (desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => {
                  setExploreOpen((v) => !v);
                  setTopUnivOpen(false);
                  setMoreOpen(false);
                }}
                className="flex items-center gap-2 bg-[#345895] text-white px-3 py-2 rounded-lg shadow-sm text-sm font-semibold"
                aria-expanded={exploreOpen}
              >
                Explore Program
                <ChevronDown size={20} strokeWidth={3} />
              </button>

              {exploreOpen && (
                <>
                  <div
                    onClick={() => setExploreOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40 md:block hidden"
                    aria-hidden="true"
                  />

                  <div
                    className="explore-programs-dropdown fixed left-1/2 -translate-x-1/2 top-[85px] mt-2 z-50 w-[95vw] md:w-[90vw] lg:w-[85vw] max-w-[1100px] bg-white/95 text-black rounded-lg shadow-lg border border-gray-100 p-6 overflow-x-hidden mb-5"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="flex gap-6">
                      <div className="w-48 max-h-[70vh] overflow-y-auto pr-4 shrink-0">
                        <ul className="space-y-1 text-sm">
                          {exploreLeftItems.map((item) => (
                            <li key={item}>
                              <button
                                onClick={() => {
                                  setSelectedExploreCategory(item);
                                  setSelectedExploreSubCategory(null);
                                }}
                                className={`w-full text-left block py-3 px-3 rounded-md transition ${
                                  selectedExploreCategory === item
                                    ? "bg-blue-50 border-l-4 border-[#345895] pl-4"
                                    : "hover:bg-gray-50"
                                }`}
                              >
                                <div className="font-medium text-gray-900">
                                  {item}
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="mb-3 text-sm text-gray-500">
                          Explore Programs &gt;{" "}
                          <span className="font-semibold text-[#345895]">
                            {selectedExploreCategory}
                          </span>
                          {selectedExploreSubCategory && (
                            <>
                              {" "}
                              &gt;{" "}
                              <span className="font-semibold text-[#345895]">
                                {selectedExploreSubCategory}
                              </span>
                            </>
                          )}
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden pr-2">
                          {!selectedExploreSubCategory ? (
                            currentExploreCategories.length === 0 ? (
                              <div className="text-center py-12 text-gray-500">
                                No programs available
                              </div>
                            ) : (
                              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                                {currentExploreCategories.map((category) => (
                                  <button
                                    key={category.id}
                                    onClick={() =>
                                      handleExploreCategoryClick(
                                        category.categoryKey
                                      )
                                    }
                                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow text-left w-full min-w-0"
                                  >
                                    <div className="h-16 mb-3 rounded flex items-center justify-center overflow-hidden">
                                      <span className="text-2xl text-[#345895]">
                                        🎓
                                      </span>
                                    </div>
                                    <div className="text-sm font-semibold leading-snug mb-2 grow min-h-10 text-gray-900">
                                      {category.title}
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">
                                      {category.subtitle}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            )
                          ) : (
                            <div>
                              <button
                                onClick={handleExploreBack}
                                className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                              >
                                ← Back to {selectedExploreCategory}
                              </button>

                              {currentExplorePrograms.length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                  No specializations available
                                </div>
                              ) : (
                                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                                  {currentExplorePrograms.map((program) => (
                                    <div
                                      key={program.id}
                                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow w-full min-w-0"
                                    >
                                      <div className="h-16 mb-3 rounded flex items-center justify-center overflow-hidden">
                                        <Image
                                          src={program.logo}
                                          alt={program.title}
                                          width={120}
                                          height={64}
                                          className="object-contain w-full h-full"
                                        />
                                      </div>
                                      <div className="text-sm font-semibold leading-snug mb-3 grow min-h-10 text-gray-900">
                                        {program.title}
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => handleProgramAction(program)}
                                          className="w-full bg-[#4D964F] text-white text-xs px-3 py-2 rounded hover:bg-[#3d7a3f] transition"
                                        >
                                          View Course
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="mt-3 text-xs text-gray-500">
                          {!selectedExploreSubCategory
                            ? currentExploreCategories.length > 0 && (
                                <>
                                  Showing {currentExploreCategories.length}{" "}
                                  {currentExploreCategories.length === 1
                                    ? "category"
                                    : "categories"}{" "}
                                  for <strong>{selectedExploreCategory}</strong>
                                  .
                                </>
                              )
                            : currentExplorePrograms.length > 0 && (
                                <>
                                  Showing {currentExplorePrograms.length}{" "}
                                  {currentExplorePrograms.length === 1
                                    ? "specialization"
                                    : "specializations"}{" "}
                                  for{" "}
                                  <strong>{selectedExploreSubCategory}</strong>.
                                </>
                              )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Top Universities (desktop) */}
            <div className="relative hidden md:block">
              <button
                 onClick={() => {
    setTopUnivOpen((v) => {
      if (v) clearCategoryFromUrl(); // ✅ closing
      return !v;
    });
    setExploreOpen(false);
    setMoreOpen(false);
  }}
                className="flex items-center gap-2 text-sm text-gray-800 px-3 py-2 rounded-md hover:bg-white/30 font-medium"
                aria-expanded={topUnivOpen}
              >
                Top Universities
                <ChevronDown size={24} strokeWidth={1} />
              </button>

              {topUnivOpen && (
                <>
                 <div
  onClick={() => {
    setTopUnivOpen(false);
    clearCategoryFromUrl(); // ✅ remove ?category
  }}
  className="fixed inset-0 bg-black/30 z-40 md:block hidden"
/>

                  <div
                    className="top-univ-dropdown fixed left-1/2 -translate-x-1/2 top-[85px] mt-2 z-50 w-[95vw] md:w-[90vw] lg:w-[85vw] max-w-[1100px] bg-white/95 text-black rounded-lg shadow-lg border border-gray-100 p-6 overflow-x-hidden mb-5"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="flex gap-6">
                      <div className="w-64 max-h-[70vh] overflow-y-auto pr-4 shrink-0">
                        <ul className="space-y-1 text-sm">
                          {leftItems.map((item) => {
                            const itemData = categoryData[item];
                            return (
                              <li key={item}>
                                <button
                                  onClick={() => setSelectedCategory(item)}
                                  className={`w-full text-left block py-3 px-3 rounded-md transition ${
                                    selectedCategory === item
                                      ? "bg-blue-50 border-l-4 border-[#345895] pl-4"
                                      : "hover:bg-gray-50"
                                  }`}
                                >
                                  <div className="font-medium text-gray-900">
                                    {item}
                                  </div>
                                  <div className="text-xs text-blue-600">
                                    {itemData.label}
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="mb-3 text-sm text-gray-500">
                          Top Universities &gt;{" "}
                          <span className="font-semibold text-[#345895]">
                            {selectedCategory}
                          </span>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden pr-2">
                          {currentPrograms.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                              No programs available for this category
                            </div>
                          ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                              {currentPrograms.map((program) => (
                                <div
                                  key={program.id}
                                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow w-full min-w-0"
                                >
                                  <div className="h-16 mb-3 rounded flex items-center justify-center overflow-hidden">
                                    <Image
                                      src={program.logo}
                                      alt={program.title}
                                      width={120}
                                      height={64}
                                      className="object-contain w-full h-full"
                                    />
                                  </div>
                                  <div className="text-sm font-semibold leading-snug mb-3 grow min-h-10 text-gray-900">
                                    {program.title}
                                  </div>
                                  <div>
                                    <button
                                     onClick={() => handleProgramAction(program)}
                                      className="w-full bg-[#4D964F] text-white text-xs px-3 py-2 rounded hover:bg-[#3d7a3f] transition"
                                    >
                                      View Course
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {currentPrograms.length > 0 && (
                          <div className="mt-3 text-xs text-gray-500">
                            Showing {currentPrograms.length}{" "}
                            {currentPrograms.length === 1
                              ? "program"
                              : "programs"}{" "}
                            for <strong>{selectedCategory}</strong>.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-800">
              <Link
                href="/#knowledge"
                className="hover:text-blue-900 font-medium scroll-true"
              >
                Blogs
              </Link>

              <div className="relative">
                <button
                  onClick={() => {
                    setMoreOpen((v) => !v);
                    setExploreOpen(false);
                    setTopUnivOpen(false);
                  }}
                  className="flex items-center gap-1 text-sm text-gray-800 px-2 py-1 rounded hover:bg-white/30 font-medium"
                  aria-expanded={moreOpen}
                >
                  More
                  <ChevronDown size={14} />
                </button>

                {moreOpen && (
                  <div
                    onMouseLeave={() => setMoreOpen(false)}
                    className="absolute right-0 mt-2 w-48 bg-white/95 text-black rounded-lg shadow-lg border border-gray-100 p-2"
                  >
                    <Link
                      className="block py-2 px-3 rounded hover:bg-gray-100"
                      href="/Gallery"
                    >
                      Gallery
                    </Link>
                    <Link
                      className="block py-2 px-3 rounded hover:bg-gray-100"
                      href="/ContactUs"
                    >
                      Contact us
                    </Link>
                    <Link
                      className="block py-2 px-3 rounded hover:bg-gray-100"
                      href="/Career"
                    >
                      Careers
                    </Link>
                    <Link
                      className="block py-2 px-3 rounded hover:bg-gray-100"
                      href="/AboutUs"
                    >
                      About us
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#4D964F] text-white px-3 py-2 rounded-lg text-sm font-medium shadow"
              >
                Personalized Counselling
              </button>

              {!user ? (
                <button
                  onClick={() => router.push("/login")}
                  className="bg-[#345895] text-white px-4 py-2 rounded-lg text-sm font-medium shadow"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow"
                >
                  Logout
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => {
                  setIsOpen((v) => !v);
                  // intentionally do NOT toggle desktop dropdown states here
                }}
                aria-label="Toggle menu"
                className="p-2 rounded-md"
              >
                <Menu size={24} className="text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE DROPDOWN (mobile-scoped behavior + improved responsive cards) */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white/95 border-t border-gray-100 shadow-md`}
        >
          <div className=" mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {/* Mobile: Explore */}
              <div className="mobile-dropdown-section">
                <button
                  onClick={() => {
                    setMobileExploreOpen((v) => !v);
                    setMobileTopUnivOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-gray-900 px-3 py-2 rounded hover:bg-gray-100 font-medium"
                >
                  <span>Explore Program</span>
                  <ChevronDown
                    size={24}
                    className={`transition-transform ${
                      mobileExploreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExploreOpen && (
                  // remove extra left padding and prevent accidental body-level closing
                  <div className="mt-2 w-full overflow-x-hidden ">
                    <div className="mb-3 px-3">
                      <select
                        value={selectedExploreCategory}
                        onChange={(e) => {
                          setSelectedExploreCategory(e.target.value);
                          setSelectedExploreSubCategory(null);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
                      >
                        {exploreLeftItems.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {!selectedExploreSubCategory ? (
                      // mobile-friendly grid: single column on tiny screens, 2 columns on small+
                      <div className="px-3 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pb-4">
                        {currentExploreCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() =>
                              handleExploreCategoryClick(category.categoryKey)
                            }
                            type="button"
                            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-left w-full min-w-0"
                          >
                            <div className="h-12 mb-2 rounded flex items-center justify-center">
                              <span className="text-xl text-blue-600">🎓</span>
                            </div>
                            <div className="text-xs font-semibold leading-tight mb-2 text-gray-900">
                              {category.title}
                            </div>
                            <div className="text-xs text-green-600">
                              {category.subtitle}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-3">
                        <button
                          onClick={handleExploreBack}
                          type="button"
                          className="mb-3 text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          ← Back
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pb-4">
                          {currentExplorePrograms.map((program) => (
                            <div
                              key={program.id}
                              className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 w-full min-w-0"
                            >
                              <div className="h-12 mb-2 rounded flex items-center justify-center overflow-hidden">
                                <Image
                                  src={program.logo}
                                  alt={program.title}
                                  width={80}
                                  height={48}
                                  className="object-contain w-full h-full"
                                />
                              </div>
                              <div className="text-xs font-semibold leading-tight mb-2 text-gray-900">
                                {program.title}
                              </div>
                              <button
                                type="button"
                               onClick={() => handleProgramAction(program)}
                                className="w-full bg-[#4D964F] text-white text-xs px-2 py-1 rounded"
                              >
                                View Course 
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile: Top Universities */}
              <div className="mobile-dropdown-section">
                <button
                 onClick={() => {
  setMobileTopUnivOpen(v => {
    if (v) clearCategoryFromUrl(); // closing
    return !v;
  });
  setMobileExploreOpen(false);
}}

                  className="flex items-center justify-between w-full text-gray-900 px-3 py-2 rounded hover:bg-gray-100 font-medium"
                >
                  <span>Top Universities</span>
                  <ChevronDown
                    size={24}
                    className={`transition-transform ${
                      mobileTopUnivOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileTopUnivOpen && (
                  <div className="mt-2 w-full overflow-x-hidden">
                    <div className="mb-3 px-3">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
                      >
                        {leftItems.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="px-3 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pb-4">
                      {currentPrograms.map((program) => (
                        <div
                          key={program.id}
                          className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 w-full min-w-0"
                        >
                          <div className="h-12 mb-2 rounded flex items-center justify-center overflow-hidden">
                            <Image
                              src={program.logo}
                              alt={program.title}
                              width={80}
                              height={48}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <div className="text-xs font-semibold leading-tight mb-2 text-gray-900">
                            {program.title}
                          </div>
                          <button
                            type="button"
                           onClick={() => handleProgramAction(program)}
                            className="w-full bg-[#4D964F] text-white text-xs px-2 py-1 rounded"
                          >
                            View Course
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#knowledge"
                onClick={() => {
                  handleLinkClick();
                  handleMobileCloseAll();
                }}
                className="text-gray-900 px-3 py-2 rounded hover:bg-gray-100 font-medium"
              >
                Blogs
              </Link>

              <div>
                <button
                  onClick={() => setMoreOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-gray-900 px-3 py-2 rounded hover:bg-gray-100 font-medium"
                >
                  <span>More</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {moreOpen && (
                  <div className="pl-4">
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100 text-gray-900"
                      href="/Gallery"
                      onClick={() => {
                        handleLinkClick();
                        handleMobileCloseAll();
                      }}
                    >
                      Gallery
                    </Link>
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100 text-gray-900"
                      href="/ContactUs"
                      onClick={() => {
                        handleLinkClick();
                        handleMobileCloseAll();
                      }}
                    >
                      Contact us
                    </Link>
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100 text-gray-900"
                      href="/Career"
                      onClick={() => {
                        handleLinkClick();
                        handleMobileCloseAll();
                      }}
                    >
                      Careers
                    </Link>
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100 text-gray-900"
                      href="/AboutUs"
                      onClick={() => {
                        handleLinkClick();
                        handleMobileCloseAll();
                      }}
                    >
                      About us
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    setShowForm(true);
                    handleMobileCloseAll();
                  }}
                  className="flex-1 text-center py-2 rounded bg-[#4D964F] text-white"
                >
                  Counselling
                </button>

                {!user ? (
                  <button
                    onClick={() => {
                      router.push("/login");
                      handleMobileCloseAll();
                    }}
                    className="flex-1 text-center py-2 rounded bg-[#345895] text-white"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      handleMobileCloseAll();
                    }}
                    className="flex-1 text-center py-2 rounded-full bg-red-600 text-white"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </div>
  );
}

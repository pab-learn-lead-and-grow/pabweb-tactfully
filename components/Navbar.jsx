"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CounsellingForm from "./CounsellingForm";
import { createSupabaseClient } from "@/lib/supabaseClient";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showForm, setShowForm] = useState(false); // counselling modal
  const [user, setUser] = useState(null);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [topUnivOpen, setTopUnivOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // new: which left category is selected (default Online MBA)
  const [selectedCategory, setSelectedCategory] = useState("Online MBA");

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

  // lock body scroll while topUnivOpen
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

  // ✅ Logout handler (kept)
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  };

  // Dynamic data structure for categories and their programs
  const categoryData = {
    "Online MBA": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "Finance Management", universities: 27, logo: "/nmims.png" },
        { id: 2, title: "Business Analytics", universities: 11, logo: "/nmims.png" },
        { id: 3, title: "Healthcare Management", universities: 4, logo: "/nmims.png" },
        { id: 4, title: "Hospital Management", universities: 2, logo: "/nmims.png" },
        { id: 5, title: "HR Management", universities: 19, logo: "/nmims.png" },
        { id: 6, title: "Operations Management", universities: 12, logo: "/nmims.png" },
        { id: 7, title: "Marketing Management", universities: 15, logo: "/nmims.png" },
        { id: 8, title: "Digital Marketing", universities: 8, logo: "/nmims.png" },
      ]
    },
    "Executive MBA": {
      label: "Executive Programs",
      programs: [
        { id: 1, title: "Executive MBA - General", universities: 5, logo: "/nmims.png" },
        { id: 2, title: "Executive MBA - Leadership", universities: 3, logo: "/nmims.png" },
        { id: 3, title: "Executive MBA - Strategy", universities: 2, logo: "/nmims.png" },
      ]
    },
    "MCA": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "Master of Computer Applications", universities: 24, logo: "/nmims.png" },
        { id: 2, title: "MCA - Data Science", universities: 8, logo: "/nmims.png" },
        { id: 3, title: "MCA - AI & ML", universities: 6, logo: "/nmims.png" },
        { id: 4, title: "MCA - Cloud Computing", universities: 4, logo: "/nmims.png" },
      ]
    },
    "MA": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "MA in English", universities: 12, logo: "/nmims.png" },
        { id: 2, title: "MA in Psychology", universities: 8, logo: "/nmims.png" },
        { id: 3, title: "MA in Economics", universities: 10, logo: "/nmims.png" },
      ]
    },
    "MAJMC": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "MA in Journalism & Mass Communication", universities: 15, logo: "/nmims.png" },
      ]
    },
    "M.COM": {
      label: "PG Courses",
      programs: [
        { id: 1, title: "M.COM - General", universities: 18, logo: "/nmims.png" },
        { id: 2, title: "M.COM - Finance", universities: 9, logo: "/nmims.png" },
      ]
    },
    "BBA": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "Bachelor of Business Administration", universities: 22, logo: "/nmims.png" },
        { id: 2, title: "BBA - Marketing", universities: 6, logo: "/nmims.png" },
        { id: 3, title: "BBA - Finance", universities: 5, logo: "/nmims.png" },
        { id: 4, title: "BBA - HR", universities: 4, logo: "/nmims.png" },
      ]
    },
    "B.COM": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "B.COM - General", universities: 25, logo: "/nmims.png" },
        { id: 2, title: "B.COM - Accounting", universities: 12, logo: "/nmims.png" },
      ]
    },
    "BCA": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "Bachelor of Computer Applications", universities: 20, logo: "/nmims.png" },
        { id: 2, title: "BCA - Data Analytics", universities: 7, logo: "/nmims.png" },
      ]
    },
    "BAJMC": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "BA in Journalism & Mass Communication", universities: 14, logo: "/nmims.png" },
      ]
    },
    "BA": {
      label: "UG Courses",
      programs: [
        { id: 1, title: "BA in English", universities: 16, logo: "/nmims.png" },
        { id: 2, title: "BA in Political Science", universities: 10, logo: "/nmims.png" },
        { id: 3, title: "BA in History", universities: 8, logo: "/nmims.png" },
      ]
    },
    "Diploma": {
      label: "Diploma Programs",
      programs: [
        { id: 1, title: "Diploma in Digital Marketing", universities: 12, logo: "/nmims.png" },
        { id: 2, title: "Diploma in Financial Management", universities: 8, logo: "/nmims.png" },
        { id: 3, title: "Diploma in HR Management", universities: 6, logo: "/nmims.png" },
      ]
    },
    "Certifications": {
      label: "Certificate Programs",
      programs: [
        { id: 1, title: "Data Science Certification", universities: 5, logo: "/nmims.png" },
        { id: 2, title: "Digital Marketing Certification", universities: 4, logo: "/nmims.png" },
      ]
    },
    "Integrated Prog.": {
      label: "Integrated Programs",
      programs: [
        { id: 1, title: "BBA + MBA Integrated", universities: 7, logo: "/nmims.png" },
        { id: 2, title: "B.Tech + MBA Integrated", universities: 4, logo: "/nmims.png" },
      ]
    },
  };

  // Get left list items from categoryData keys
  const leftItems = Object.keys(categoryData);

  // Get current category programs
  const currentPrograms = categoryData[selectedCategory]?.programs || [];
  const currentLabel = categoryData[selectedCategory]?.label || "Courses";

  return (
    <div className="px-9 fixed top-0 left-0 right-0 z-50">
      <nav className="w-full h-[72px] bg-[rgba(255,255,255,0.33)] backdrop-blur-3xl rounded-4xl shadow-sm border border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
          {/* LEFT: Logo + primary dropdowns */}
          <div className="flex items-center gap-4">
            <a href="/" className="block">
              <Image
                src="/pablogo.png"
                alt="PAB Logo"
                width={130}
                height={80}
                priority
              />
            </a>

            {/* Explore Program (blue pill) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => {
                  setExploreOpen((v) => !v);
                  // close others
                  setTopUnivOpen(false);
                  setMoreOpen(false);
                }}
                className="flex items-center gap-2 bg-[#345895] text-white px-3 py-2 rounded-lg shadow-sm text-sm font-semibold"
                aria-expanded={exploreOpen}
              >
                Explore Program
                <div className="flex items-center justify-center">
                  <ChevronDown
                    size={20}
                    strokeWidth={3}
                    className="relative top-3px"
                  />
                </div>
              </button>

              {exploreOpen && (
                <div
                  onMouseLeave={() => setExploreOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-white/95 text-black rounded-lg shadow-lg border border-gray-100 p-3"
                >
                  <a
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                    href="/programs"
                  >
                    All Programs
                  </a>
                  <a
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                    href="/programs/mba"
                  >
                    MBA
                  </a>
                  <a
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                    href="/programs/executive"
                  >
                    Executive Programs
                  </a>
                </div>
              )}
            </div>

            {/* Top Universities (click to open, left list controls right strip) */}
            <div className="relative hidden md:block">
              <button
                onClick={(e) => {
                  // open/close on click (desktop + accessibility)
                  setTopUnivOpen((v) => !v);
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
                  {/* backdrop darkens page; clicking it closes the dropdown */}
                  <div
                    onClick={() => setTopUnivOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40 md:block hidden"
                    aria-hidden="true"
                  />

                  {/* dropdown container — left list + right grid */}
                  <div
                    className="absolute left-0 mt-2 z-50 w-[75vw] max-w-[900px] bg-white/95 text-black rounded-lg shadow-lg border border-gray-100 p-6"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="flex gap-6">
                      {/* LEFT: categories list (clickable) */}
                      <div className="w-64 max-h-[70vh] overflow-y-auto pr-4 shrink-0">
                        <ul className="space-y-1 text-sm">
                          {leftItems.map((item) => {
                            const itemData = categoryData[item];
                            return (
                              <li key={item}>
                                <button
                                  onClick={() => {
                                    setSelectedCategory(item);
                                    // Keep dropdown open - don't call setTopUnivOpen
                                  }}
                                  className={`w-full text-left block py-3 px-3 rounded-md transition ${
                                    selectedCategory === item
                                      ? "bg-blue-50 border-l-4 border-[#345895] pl-4"
                                      : "hover:bg-gray-50"
                                  }`}
                                >
                                  <div className="font-medium text-gray-800">
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

                      {/* RIGHT: grid layout with vertical scrolling */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 text-sm text-gray-500">
                          {/* breadcrumb like text — shows selected category */}
                          Top Universities &nbsp;&gt;&nbsp;{" "}
                          <span className="font-semibold text-[#345895]">
                            {selectedCategory}
                          </span>
                        </div>

                        {/* The grid: vertically scrollable, dynamic columns based on content */}
                        <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden pr-2">
                          {currentPrograms.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                              No programs available for this category
                            </div>
                          ) : (
                            <div className={`grid gap-4 ${
                              currentPrograms.length === 1 ? 'grid-cols-1 max-w-sm' :
                              currentPrograms.length === 2 ? 'grid-cols-2 max-w-md' :
                              'grid-cols-3'
                            }`}>
                              {currentPrograms.map((program) => (
                                <div
                                  key={program.id}
                                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
                                >
                                    <div className="h-16 mb-3 bg-linear-to-br from-blue-50 to-blue-100 rounded flex items-center justify-center overflow-hidden">
                                    <Image
                                      src={program.logo}
                                      alt={program.title}
                                      width={80}
                                      height={80}
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="text-sm font-semibold leading-snug mb-2 grow">
                                    {program.title}
                                  </div>
                                  
                                  <div>
                                    <button className="w-full bg-[#4D964F] text-white text-xs px-3 py-2 rounded hover:bg-[#3d7a3f] transition">
                                      Apply Now
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* small pager / hint (optional) */}
                        {currentPrograms.length > 0 && (
                          <div className="mt-3 text-xs text-gray-500">
                            Showing {currentPrograms.length} {currentPrograms.length === 1 ? 'program' : 'programs'} for <strong>{selectedCategory}</strong>.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* CENTER spacer */}
          <div className="flex-1" />

          {/* RIGHT: About us + More moved here, plus CTAs / mobile icon */}
          <div className="flex items-center gap-3">
            {/* Desktop small links including About us and More (moved to right) */}
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-800">
              <Link href="/#knowledge" className="hover:text-blue-900 font-medium scroll-true">
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

            {/* Desktop CTAs */}
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

            {/* Mobile menu icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => {
                  setIsOpen((v) => !v);
                  // close desktop dropdowns when opening mobile
                  setExploreOpen(false);
                  setTopUnivOpen(false);
                  setMoreOpen(false);
                }}
                aria-label="Toggle menu"
                className="p-2 rounded-md"
              >
                <Menu size={24} className="text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE DROPDOWN PANEL (under nav) */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white/95 border-t border-gray-100 shadow-md`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-3">
              {/* Mobile: Explore */}
              <button
                onClick={() => setExploreOpen((v) => !v)}
                className="flex items-center justify-between w-full text-gray-800 px-3 py-2 rounded hover:bg-gray-100"
              >
                <span>Explore Program</span>
                <ChevronDown size={24} strokeWidth={5} />
              </button>
              {exploreOpen && (
                <div className="pl-4">
                  <a
                    className="block py-2 px-2 rounded hover:bg-gray-100"
                    href="/programs"
                  >
                    All Programs
                  </a>
                  <a
                    className="block py-2 px-2 rounded hover:bg-gray-100"
                    href="/programs/mba"
                  >
                    MBA
                  </a>
                  <a
                    className="block py-2 px-2 rounded hover:bg-gray-100"
                    href="/programs/executive"
                  >
                    Executive Programs
                  </a>
                </div>
              )}

              {/* Mobile: Top Universities */}
              <button
                onClick={() => setTopUnivOpen((v) => !v)}
                className="flex items-center justify-between w-full text-gray-800 px-3 py-2 rounded hover:bg-gray-100"
              >
                <span>Top Universities</span>
                <ChevronDown size={24} />
              </button>
              {topUnivOpen && (
                <div className="pl-4">
                  {/* Mobile: Show category selection */}
                  <div className="mb-3">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {leftItems.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Mobile: Show cards in responsive grid */}
                  <div className={`grid gap-3 max-h-[400px] overflow-y-auto ${
                    currentPrograms.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                  }`}>
                    {currentPrograms.map((program) => (
                      <div
                        key={program.id}
                        className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                      >
                        <div className="h-12 mb-2 bg-linear-to-br from-blue-50 to-blue-100 rounded flex items-center justify-center">
                          <span className="text-xs text-blue-600 font-semibold">🎓</span>
                        </div>
                        <div className="text-xs font-semibold leading-tight mb-2">
                          {program.title}
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          {program.universities} Universities
                        </div>
                        <button className="w-full bg-[#4D964F] text-white text-xs px-2 py-1 rounded">
                          Apply Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile: Gallery */}
              <a
                href="/Gallery"
                className="text-gray-800 px-3 py-2 rounded hover:bg-gray-100"
              >
                Gallery
              </a>

              {/* Mobile: More (now contains Gallery / Contact us / About Us / Careers) */}
              <div>
                <button
                  onClick={() => setMoreOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-gray-800 px-3 py-2 rounded hover:bg-gray-100"
                >
                  <span>More</span>
                  <ChevronDown size={14} />
                </button>
                {moreOpen && (
                  <div className="pl-4">
                    <a
                      className="block py-2 px-2 rounded hover:bg-gray-100"
                      href="/Gallery"
                    >
                      Gallery
                    </a>
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100"
                      href="/ContactUs"
                    >
                      Contact us
                    </Link>
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100"
                      href="/Career"
                    >
                      Careers
                    </Link>
                    <Link
                      className="block py-2 px-2 rounded hover:bg-gray-100"
                      href="/AboutUs"
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
                    setIsOpen(false);
                  }}
                  className="flex-1 text-center py-2 rounded bg-[#4D964F] text-white"
                >
                  Counselling
                </button>

                {!user ? (
                  <button
                    onClick={() => {
                      router.push("/login");
                      setIsOpen(false);
                    }}
                    className="flex-1 text-center py-2 rounded bg-[#345895] text-white"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
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

      {/* Counselling Form Modal (kept logic) */}
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
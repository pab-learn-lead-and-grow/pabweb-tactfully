// components/CoursesSection.jsx
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import CounsellingForm from "./CounsellingForm";
const THEME_GREEN = "#4D964F";
const CARD_WIDTH = 330; // Fixed card width in pixels
const GAP = 16; // Gap between cards

const CATEGORIES = [
  {
    id: "mba",
    label: "Online MBA",
    programs: [
      {
        id: "nmims-mba",
        university: "NMIMS Mumbai",
        programTitle: "Master of Business Administration",
        badges: [
          "Most-Loved",
          "NAAC A++","500+ Hiring Partners",
          "ranked top 30 by NIRF", "Mumbai"
        ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-mba"
      },
      {
        id: "manipal-mba",
        university: "Manipal Jaipur",
        programTitle: "Master of Business Administration",
        badges: ["BestSeller","Jaipur", "NAAC A+", "Top 20 by career360", "Super/Dual Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-mba"
      },
      {
        id: "amity-mba",
        university: "Amity University",
        programTitle: "Master of Business Administration",
        badges: ["Asia Pacific Top 10", "Global", "Internship opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-mba",
      },
       {
        id: "jain-mba",
        university: "Jain University",
        programTitle: "Master of Business Administration",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/Jain.png",
        path: "/jain/jain-online-mba"
      },
      {
        id: "smu-mba",
        university: "Sikkim Manipal",
        programTitle: "Master of Business Administration",
        badges: ["NAAC A+", "Sikkim","IIRF Rank 1"],
        image: "/smu.png",
        path: "/smu/sikkim-manipal-online-mba"
      },
    ],
  },
  {
    id: "exec-mba",
    label: "Executive MBA",
    programs: [
      {
        id: "exec-1",
        university: "NMIMS Mumbai",
        programTitle: "Master of Business Admin. (WX)",
        badges: ["Most Loved","NAAC A++", "ranked top 30 by NIRF", "500+ Hiring Partners", "Mumbai"],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-mba-working-executives"
      },
    ],
  },
  {
    id: "mca",
    label: "MCA",
    programs: [
      {
        id: "mca-1",
        university: "Manipal Jaipur",
        programTitle: "Master of Computer Applications",
        badges: ["Bestseller", "NAAC A+", "Jaipur", "Top 20 by career 360", "Super/Dual specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-mca"
      },
      {
        id: "mca-2",
        university: "Amity university",
        programTitle: "Master of Computer Applications",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-mca",
      },
      {
        id: "mca-3",
        university: "Jain university",
        programTitle: "Master of Computer Applications",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/jain.png",
        path: "/jain/jain-online-mca"
      },
      {
        id: "mca-4",
        university: "Sikkim Manipal",
        programTitle: "Master of Computer Applications",
        badges: ["Sikkim", "IIRF Rank 1","NAAC A+"],
        image: "/smu.png",
        path: "/smu/sikkim-manipal-online-mca"
      },
    ],
  },
  {
    id: "bajmc",
    label: "BAJMC",
    programs: [
      {
        id: "bajmc-1",
        university: "Amity university",
        programTitle: "Bachelor of Arts in Journalism and Mass Communication",
        badges:["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-bajmc",
      },
    ],
  },
  {
    id: "ba",
    label: "BA",
    programs: [
      {
        id: "ba-1",
        university: "Amity University",
        programTitle: "Bachelor of Arts",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-ba",
      },
      {
        id: "ba-2",
        university: "Sikkim Manipal",
        programTitle: "Bachelor of Arts",
        badges: ["Sikkim", "IIRF Rank 1","NAAC A+"],
        image: "/smu.png",
        path: "/smu/sikkim-manipal-online-ba"
      },
    ],
  },
  {
    id: "ma",
    label: "MA",
    programs: [
      {
        id: "ma-1",
        university: "Manipal Jaipur",
        programTitle: "Master of Arts",
        badges: ["Bestseller", "Jaipur", "NAAC A+", "Top 20 by Career 360", "Super/Duel Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-ma"
      },
      {
        id: "ma-2",
        university: "Amity University",
        programTitle: "Master of Arts",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-ma",
      },
      {
        id: "ma-3",
        university: "Jain university",
        programTitle: "Master of Arts",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/jain.png",
        path: "/jain/jain-online-ma"
      },
      {
        id: "ma-4",
        university: "Sikkim Manipal",
        programTitle: "Master of Arts",
        badges: ["Sikkim", "IIRF Rank 1","NAAC A+"],
        image: "/smu.png",
        path: "/smu/sikkim-manipal-online-ma"
      },
    ],
  },
  {
    id: "mcom",
    label: "M.COM",
    programs: [
     {
        id: "mcom-1",
        university: "Manipal Jaipur",
        programTitle: "Master of Commerce",
        badges: ["Bestseller", "Jaipur", "NAAC A+", "Top 20 by Career 360", "Super/Duel Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-mcom"
      },
      {
        id: "mcom-2",
        university: "Amity University",
        programTitle: "Master of Commerce",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-mcom",
      },
      {
        id: "mcom-3",
        university: "Jain university",
        programTitle: "Master of Commerce",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/jain.png",
        path: "/jain/jain-online-mcom"
      },
      {
        id: "mcom-4",
        university: "Sikkim Manipal",
        programTitle: "Master of Commerce",
        badges: ["Sikkim", "IIRF Rank 1","NAAC A+"],
        image: "/smu.png",
        path: "/smu/sikkim-manipal-online-mcom"
      },
    ],
  },
  {
    id: "majmc",
    label: "MAJMC",
    programs: [
      {
        id: "majmc-1",
        university: "Manipal Jaipur",
        programTitle: "Master of Arts in Journalism and Mass Communication",
        badges: ["Bestseller", "Jaipur", "NAAC A+", "Top 20 by Career 360", "Super/Duel Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-majmc"
      },
      {
        id: "majmc-2",
        university: "Amity University",
        programTitle: "Master of Arts in Journalism and Mass Communication",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-majmc",
      },
    ],
  },
  {
    id: "bba",
    label: "BBA",
    programs: [
      {
        id: "bba-1",
        university: "Nmims Mumbai",
        programTitle: "Bachelor of Business Administration",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-bba"
      },
      {
        id: "bba-2",
        university: "Manipal Jaipur",
        programTitle: "Bachelor of Business Administration",
        badges: ["Bestseller", "Jaipur", "NAAC A+", "Top 20 by Career 360", "Super/Duel Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-bba"
      },
      {
        id: "bba-3",
        university: "Amity University",
        programTitle: "Bachelor of Business Administration",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-bba",
      },
      {
        id: "bba-4",
        university: "Jain university",
        programTitle: "Bachelor of Business Administration",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/jain.png",
        path: "/jain/jain-online-bba"
      },  
    ],
  },
  {
    id: "bca",
    label: "BCA",
    programs: [
      {
        id: "bca-1",
        university: "Manipal Jaipur",
        programTitle: "Bachelor of Computer Application",
        badges: ["Bestseller", "Jaipur", "NAAC A+", "Top 20 by Career 360", "Super/Duel Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-bca"
      },
      {
        id: "bca-2",
        university: "Amity University",
        programTitle: "Bachelor of Computer Application",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-bca",
      },
      {
        id: "bca-3",
        university: "Jain university",
        programTitle: "Bachelor of Computer Application",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/jain.png",
        path: "/jain/jain-online-bca"
      },
    ],
  },
  {
    id: "bcom",
    label: "B.COM",
    programs: [
      {
        id: "bcom-1",
        university: "Nmims Mumbai",
        programTitle: "Bachelor of Commerce",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-bcom"
      },
      {
        id: "bcom-2",
        university: "Manipal Jaipur",
        programTitle: "Bachelor of Commerce",
        badges: ["Bestseller", "Jaipur", "NAAC A+", "Top 20 by Career 360", "Super/Duel Specialization"],
        image: "/manipal.png",
        path: "/muj/manipal-jaipur-online-bcom"
      },
      {
        id: "bcom-3",
        university: "Amity University",
        programTitle: "Bachelor of Commerce",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-bcom",
      },
      {
        id: "bcom-4",
        university: "Jain university",
        programTitle: "Bachelor of Commerce",
        badges: ["AI Driven", "Bangalore", "NAAC A++", "AIU Member"],
        image: "/jain.png",
        path: "/jain/jain-online-bcom"
      },  
      {
        id: "bcom-5",
        university: "Sikkim Manipal",
        programTitle: "Bachelor of Commerce",
        badges: ["Sikkim","NAAC A+", "IIRF Rank 1"],
        image: "/smu.png",
        path: "/smu/sikkim-manipal-online-bcom"
      },  
    ],
  },
  {
    id: "diploma",
    label: "Diploma",
    programs: [
      {
        id: "diploma-1",
        university: "Nmims Mumbai",
        programTitle: "Financial Management",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-diploma"
      },
      {
        id: "diploma-2",
        university: "Nmims Mumbai",
        programTitle: "Marketing Management",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-diploma"
      },
      {
        id: "diploma-3",
        university: "Nmims Mumbai",
        programTitle: "Business Management",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-diploma"
      },
      {
        id: "diploma-4",
        university: "Nmims Mumbai",
        programTitle: "Operations Management",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-diploma"
      },
      {
        id: "diploma-5",
        university: "Nmims Mumbai",
        programTitle: "Human Resource Management",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-diploma"
      },
    ],
  },
  {
    id: "certificates",
    label: "Certifications",
    programs: [
      {
        id: "cetificate-1",
        university: "NMIMS Mumbai",
        programTitle: "Business Management",
        badges: ["Most Loved", "Mumbai","ranked top 30 by NIRF", "500+ Hiring Partners", "NAAC A++" ],
        image: "/nmims.png",
        path: "/nmims/nmims-mumbai-online-certification"
      },
    ],
  },
   {
    id: "bcomhonours",
    label: "B.COM (Hons.)",
    programs: [
      {
        id: "bcomhonours-1",
        university: "Amity University",
        programTitle: "B.Com Honours",
        badges:  ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-bcom-honours",
      },
    ],
  },
   {
    id: "bcomint",
    label: "B.COM (Int.)",
    programs: [
      { 
        id: "bcomint-1",
        university: "Amity University",
        programTitle: "B.Com in Int. Finance & Accounting",
        badges:  ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-bcom-international-finance-and-accounting",
      },
    ],
  },
  {
    id: "integ_prog",
    label: "Integrated Prog.",
    programs: [
      {
        id: "integ-1",
        university: "Amity University",
        programTitle: "BBA + MBA",
        badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
         path: "/amity/amity-online-integrated-programs",
      },
      {
        id: "integ-2",
        university: "Amity University",
        programTitle: "B.COM + MBA",
       badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
         path: "/amity/amity-online-integrated-programs",
      },
       {
        id: "integ-3",
        university: "Amity University",
        programTitle: "BCA + MCA",
       badges: ["Global", "Noida", "Top 10 QS ranked online mba", "Internship Opportunities"],
        image: "/amity.png",
        path: "/amity/amity-online-integrated-programs",
      },
    ],
  },
];

export default function CoursesSection() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pillRowRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();

  const selectedCategory = CATEGORIES[selectedCategoryIndex];
  const items = selectedCategory.programs;

  // Calculate how many cards fit based on container width
  const [itemsPerView, setItemsPerView] = useState(1);
  
  useEffect(() => {
    function updateItemsPerView() {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      
      // Calculate how many cards can fit
      // Account for nav buttons on larger screens (hidden on mobile)
      const navButtonSpace = window.innerWidth >= 640 ? 96 : 0; // 48px * 2 for left and right buttons
      const availableWidth = containerWidth - navButtonSpace;
      
      // Calculate items that fit: (available width + gap) / (card width + gap)
      const cardsPluGap = CARD_WIDTH + GAP;
      const fits = Math.floor((availableWidth + GAP) / cardsPluGap);
      
      setItemsPerView(Math.max(1, fits));
    }

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Ensure cardIndex is valid when items or itemsPerView changes
  useEffect(() => {
    setCardIndex((ci) => {
      const maxStart = Math.max(0, items.length - itemsPerView);
      return Math.min(ci, maxStart);
    });
  }, [items.length, itemsPerView]);

  // Scroll pill into view when selectedCategoryIndex changes
  useEffect(() => {
    const row = pillRowRef.current;
    if (!row) return;
    const btn = row.querySelectorAll("button.pill")[selectedCategoryIndex];
    if (btn && typeof btn.scrollIntoView === "function") {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedCategoryIndex]);

  // Pill row scroll helpers
  const scrollPills = (direction = "right") => {
    const el = pillRowRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  // Card carousel navigation
  const prevCards = () => setCardIndex((i) => Math.max(0, i - 1));
  const nextCards = () =>
    setCardIndex((i) => Math.min(i + 1, Math.max(0, items.length - itemsPerView)));

  // Click handlers
  const handleDiveDeeper = (program) => {
    if (program.path) {
      router.push(program.path);
    } else {
      console.warn("No path defined for:", program.programTitle);
    }
  };

  const handleDownloadBrochure = (program) => {
    setIsModalOpen(true);
  };

  return (
    <section className="p-5 lg:p-15 relative">
      <h2 className="font-bold text-[2.25rem] md:text-4xl lg:text-5xl xl:text-[64px] leading-tight text-[#345895] mb-6">
        Courses that fit your hustle
      </h2>

      {/* Pill selector */}
      <div className="bg-[#EEF6F1] rounded-xl p-4 md:p-6 flex items-center gap-3">
        <button
          aria-label="Pill prev"
          onClick={() => scrollPills("left")}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
        >
          <ChevronLeft size={18} strokeWidth={2} color={THEME_GREEN} />
        </button>

        <div
          ref={pillRowRef}
          className="flex gap-3 overflow-x-auto no-scrollbar py-1 md:py-0 flex-1"
        >
          {CATEGORIES.map((cat, idx) => {
            const active = idx === selectedCategoryIndex;
            return (
              <button
                key={cat.id}
                className={`pill inline-flex items-center whitespace-nowrap px-4 py-2 rounded-xl font-sm transition ${
                  active ? "bg-[#345895] text-white" : "bg-[#4D964F] text-white"
                }`}
                onClick={() => {
                  setSelectedCategoryIndex(idx);
                  setCardIndex(0);
                }}
                aria-pressed={active}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <button
          aria-label="Pill next"
          onClick={() => scrollPills("right")}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
        >
          <ChevronRight size={18} strokeWidth={2} color={THEME_GREEN} />
        </button>
      </div>

      {/* Cards carousel */}
      <div className="mt-8 relative flex items-center">
        {/* Left nav */}
        <button
          onClick={prevCards}
          disabled={cardIndex === 0}
          aria-label="Prev cards"
          className="prev-btn hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#345895] text-white items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} strokeWidth={2} color="#fff" />
        </button>

        {/* Right nav */}
        <button
          onClick={nextCards}
          disabled={cardIndex >= items.length - itemsPerView}
          aria-label="Next cards"
          className="next-btn hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#345895] text-white items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} strokeWidth={2} color="#fff" />
        </button>

        {/* Cards container */}
        <div className="overflow-hidden w-full sm:px-16" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${cardIndex * (CARD_WIDTH + GAP)}px)`,
              gap: `${GAP}px`,
            }}
          >
            {items.map((p) => (
              <div
                key={p.id}
                className="shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <ProgramCard
                  program={p}
                  onDive={() => handleDiveDeeper(p)}
                  onDownload={() => handleDownloadBrochure(p)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
        <button
          onClick={prevCards}
          disabled={cardIndex === 0}
          className="w-10 h-10 rounded-lg bg-[#345895] text-white flex items-center justify-center disabled:opacity-50"
        >
          ‹
        </button>
        <div className="text-sm text-gray-600">
          {cardIndex + 1} / {items.length}
        </div>
        <button
          onClick={nextCards}
          disabled={cardIndex >= items.length - itemsPerView}
          className="w-10 h-10 rounded-xl bg-[#345895] text-white flex items-center justify-center disabled:opacity-50"
        >
          ›
        </button>
      </div>

      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

/* ProgramCard component */
function ProgramCard({ program, onDive, onDownload }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col h-[360px]">
      {/* Top logo area */}
      <div className="relative w-full h-28 bg-gray-50">
        <Image
          src={program.image}
          alt={program.university}
          fill
          className="object-contain"
        />
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col flex-1 w-full">
        <h3 className="text-[#345895] font-semibold text-base line-clamp-2">
          {program.programTitle}
        </h3>
        <div className="text-xs text-[#064e92] mb-2">{program.university}</div>

        <div className="border-t my-3" />

        <div className="mb-2">
          {program.badges?.[0] && (
            <span className="inline-block text-xs px-3 py-1 rounded-full text-[#1e40af] bg-[#e6f0ff]">
              {program.badges[0]}
            </span>
          )}
          <div className="flex flex-wrap items-start mt-2 gap-2">
            {program.badges?.slice(1).map((b, i) => (
              <span
                key={i}
                className="inline-block text-xs px-2 py-1 border rounded-full text-gray-700 bg-white"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <div className="mt-2 flex items-center gap-3 flex-nowrap">
          <button
            onClick={onDive}
            className="text-sm px-3 py-1.5 rounded-xl bg-[#4D964F] text-white font-medium shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Dive Deeper
          </button>
          <button
            onClick={onDownload}
            className="text-sm px-3 py-1.5 rounded-xl bg-[#345895] text-white font-medium shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}
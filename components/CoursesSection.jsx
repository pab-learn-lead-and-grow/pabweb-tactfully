// components/CoursesSection.jsx
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const THEME_BLUE = "#345895";
const THEME_GREEN = "#4D964F";

const CATEGORIES = [
  {
    id: "mba",
    label: "Online MBA",
    programs: [
      {
        id: "nmims-mba",
        university: "NMIMS Mumbai",
        programTitle: "Masters of Business Administration",
        description: "A comprehensive MBA program designed for working professionals.",
        badges: [
          "Most-Loved",
          "Grade A+",
          "Ranked top 100 by NIRF",
          "Autonomy",
        ],
        image: "/nmims.png",
      },
      {
        id: "manipal-mba",
        university: "Manipal Jaipur",
        programTitle: "Masters of Business Administration",
        description: "A comprehensive MBA program designed for working professionals.",
        badges: ["Most-Loved", "NAAC A+", "Top 20 by career360"],
        image: "/manipal.png",
      },
      {
        id: "amity-mba",
        university: "Amity University",
        description: "A comprehensive MBA program designed for working professionals.",
        programTitle: "Masters of Business Administration",
        badges: ["Asia Pacific Top 10", "Global", "Internship opportunities"],
        image: "/amity.png",
      },
       {
        id: "jain-mba",
        university: "Jain University",
        description: "A comprehensive MBA program designed for working professionals.",
        programTitle: "Masters of Business Administration",
        badges: ["Asia Pacific Top 10", "Global", "Internship opportunities"],
        image: "/Jain.png",
      },
      // add more sample programs if needed
    ],
  },
  {
    id: "exec-mba",
    label: "Executive MBA",
    programs: [
      {
        id: "exec-1",
        university: "Executive Univ",
        programTitle: "Executive MBA (Part-time)",
        description: "A comprehensive MBA program designed for working professionals.",
        badges: ["Work-friendly", "Industry mentors"],
        image: "/professional.png",
      },
      {
        id: "exec-2",
        university: "Leader School",
        programTitle: "Global Executive MBA",
        description: "A comprehensive MBA program designed for working professionals.",
        badges: ["Global immersion", "Senior cohorts"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "mca",
    label: "MCA",
    programs: [
      {
        id: "mca-1",
        university: "Tech Institute",
        programTitle: "MCA Online",
        badges: ["Placements", "Hands-on labs"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "bajmc",
    label: "BAJMC",
    programs: [
      {
        id: "bajmc-1",
        university: "Media College",
        programTitle: "BAJMC Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "ba",
    label: "BA",
    programs: [
      {
        id: "ba-1",
        university: "Media College",
        programTitle: "BAJMC Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "ma",
    label: "MA",
    programs: [
      {
        id: "ma-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "mcom",
    label: "M.COM",
    programs: [
      {
        id: "mcom-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "majmc",
    label: "MAJMC",
    programs: [
      {
        id: "majmc-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "bcom-bba",
    label: "B.COM/BBA",
    programs: [
      {
        id: "bcom-bba-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "bca",
    label: "BCA",
    programs: [
      {
        id: "bca-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "diploma",
    label: "Diploma",
    programs: [
      {
        id: "diploma-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  {
    id: "certificates",
    label: "certifications",
    programs: [
      {
        id: "cetificate-1",
        university: "Media College",
        programTitle: "MA Online",
        badges: ["Journalism", "Field projects"],
        image: "/professional.png",
      },
    ],
  },
  // add more categories as required
];

export default function CoursesSection() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0); // carousel start index
  const pillRowRef = useRef(null);
  const containerRef = useRef(null);
  const [cardPixelWidth, setCardPixelWidth] = useState(null);

  const selectedCategory = CATEGORIES[selectedCategoryIndex];
  const items = selectedCategory.programs;

  // Determine visible count based on width (1,2,3)
  const [itemsPerView, setItemsPerView] = useState(3);
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
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

  // Pill row scroll helpers (left/right)
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
  const prevCards = () => setCardIndex((i) => Math.max(0, i - itemsPerView));
  const nextCards = () =>
    setCardIndex((i) =>
      Math.min(i + itemsPerView, Math.max(0, items.length - itemsPerView))
    );

  // Measure available width between nav buttons and compute per-card pixel width
  useEffect(() => {
    const gap = 16; // px, matches gap-4 (16px)
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const containerWidth = container.clientWidth;

      // try to find nav buttons (they are absolute siblings)
      const parent = container.parentElement;
      const prevBtn = parent?.querySelector('.prev-btn');
      const nextBtn = parent?.querySelector('.next-btn');

      const leftWidth = prevBtn && getComputedStyle(prevBtn).display !== 'none' ? prevBtn.offsetWidth : 0;
      const rightWidth = nextBtn && getComputedStyle(nextBtn).display !== 'none' ? nextBtn.offsetWidth : 0;

      const available = Math.max(0, containerWidth - leftWidth - rightWidth);
      const computed = Math.floor((available - gap * (itemsPerView - 1)) / itemsPerView);
      setCardPixelWidth(computed > 0 ? computed : null);
    }

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [itemsPerView]);

  // Click handlers for card CTAs - replace with real logic
  const handleDiveDeeper = (program) => {
    // Example: navigate to program details page or open modal
    // router.push(`/programs/${program.id}`)
    console.log("Dive Deeper clicked:", program);
    alert(`Dive deeper: ${program.programTitle} — ${program.university}`);
  };

  const handleDownloadBrochure = (program) => {
    // Example: trigger download or open brochure link
    console.log("Download brochure:", program);
    alert(`Download brochure for: ${program.programTitle}`);
  };

  /* compute widths used by carousel transform */
  const trackWidthPercent = (100 / itemsPerView) * items.length; // width of inner track
  const translatePercent = (100 / itemsPerView) * cardIndex; // how much to shift left
  const cardWidthPercent = 100 / itemsPerView;
  const gapSize = 16; // gap size in px for 3 cards
  const perCardWidth = `calc(${cardWidthPercent}% - ${gapSize}px)`; // reduced width accounting for gaps

  return (
    <section className="px-4 md:px-8 lg:px-16 py-10">
      <h2
        className="font-extrabold text-[2.25rem] md:text-4xl leading-tight text-[#345895] mb-6"
        style={{
          whiteSpace: "nowrap",
          maxWidth: "980px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
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
            const base =
              "pill inline-flex items-center whitespace-nowrap px-4 py-2 rounded-xl font-sm transition";
            return (
              <button
                key={cat.id}
                className={`${base} ${
                  active ? "bg-[#345895] text-white" : "bg-[#4D964F] text-white"
                } pill`}
                onClick={() => {
                  setSelectedCategoryIndex(idx);
                  setCardIndex(0); // reset carousel
                }}
                aria-pressed={active}
                style={{
                  paddingLeft: 18,
                  paddingRight: 18,
                  width: "auto",
                }}
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
        {/* left nav */}
        <button
          onClick={prevCards}
          aria-label="Prev cards"
          className="prev-btn hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#345895] text-white items-center justify-center shadow-lg"
        >
          <ChevronLeft size={18} strokeWidth={2} color="#fff" />
        </button>

        {/* right nav */}
        <button
          onClick={nextCards}
          aria-label="Next cards"
          className="next-btn hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#345895] text-white items-center justify-center shadow-lg"
        >
          <ChevronRight size={18} strokeWidth={2} color="#fff" />
        </button>

        <div className="overflow-hidden w-full sm:px-16" ref={containerRef}>
          <div
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
            style={{
              transform: cardPixelWidth
                ? `translateX(-${cardIndex * (cardPixelWidth + 16)}px)`
                : `translateX(-${translatePercent}%)`, // slide track
              width: cardPixelWidth
                ? `${items.length * cardPixelWidth + (items.length - 1) * 16}px`
                : `${trackWidthPercent}%`, // total track width
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            {items.map((p) => (
              <div
                key={p.id}
                className="shrink-0"
                style={{
                  width: cardPixelWidth ? `${cardPixelWidth}px` : perCardWidth, // each card width
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
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

      {/* Mobile swipe hint / small nav */}
      <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
        <button
          onClick={prevCards}
          className="w-10 h-10 rounded-lg bg-[#345895] text-white flex items-center justify-center"
        >
          ‹
        </button>
        <div className="text-sm text-gray-600">
          {Math.min(cardIndex + 1, items.length)} /{" "}
          {Math.max(1, Math.ceil(items.length / itemsPerView))}
        </div>
        <button
          onClick={nextCards}
          className="w-10 h-10 rounded-xl bg-[#345895] text-white flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </section>
  );
}

/* ProgramCard component */
function ProgramCard({ program, onDive, onDownload }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col h-[360px]">
      {/* Top logo area - full width, consistent height */}
      <div className="relative w-full h-28 bg-gray-50">
        <Image
          src={program.image}
          alt={program.university}
          fill
          className="object-contain"
        />
      </div>

      {/* Content area with padding (description removed) */}
      <div className="p-5 flex flex-col flex-1 w-full">
        {/* Program title & university */}
        <h3 className="text-[#345895] font-semibold text-base line-clamp-2">
          {program.programTitle}
        </h3>
        <div className="text-xs text-[#3b82f6] mb-2">{program.university}</div>

        {/* separator */}
        <div className="border-t my-3" />

        {/* Title label and vertical tag area */}
        <div className="mb-2">
          <div className="text-xs text-gray-500 mb-2">Title</div>
          <div className="flex flex-wrap items-start gap-2">
            {/* primary/special tag (first badge) */}
            {program.badges?.[0] && (
              <span className="inline-block text-xs px-3 py-1 rounded-full text-[#1e40af] bg-[#e6f0ff]">
                {program.badges[0]}
              </span>
            )}

            {/* remaining tags - one per row, width fits text */}
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

        {/* fill space */}
        <div className="flex-1" />

        {/* CTAs - reduced text size and padding to keep single line */}
        <div className="mt-2 flex items-center gap-3 flex-nowrap">
          <button
            onClick={onDive}
            className="text-sm px-3 py-1.5 rounded-md bg-[#4D964F] text-white font-medium shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Dive Deeper
          </button>
          <button
            onClick={onDownload}
            className="text-sm px-3 py-1.5 rounded-md bg-[#345895] text-white font-medium shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

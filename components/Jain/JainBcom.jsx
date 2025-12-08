"use client";
import Image from "next/image";
import {
  Download,
  BookOpenCheck,
  SplinePointer,
  Speech,
  GlobeLock,
  Users,
  Check,
  ChevronRight,
  ChevronsDown,
  ArrowUpRight,
  ArrowRight,
  FileClock,
  BookCheck,
  Headset,
  Plus,
  CornerDownRight,
  Route,
  FileUser,
  Blocks,
  MessagesSquare,
  ChartNoAxesColumn,
  Fullscreen,
  LayoutDashboard,
  BriefcaseBusiness,
  Usb,
  HandCoins,
  Ungroup,
  BookText,
  UserLock,
  StickyNote,
  ListMinus,
  ArrowUpWideNarrow,
  ContactRound,
  Headphones,
  Boxes,
  GalleryVertical,
  Tally4,
  Star,
  Building2,
  AlarmClockCheck,
  UserStar,
  BookMarked,
  ThumbsUp,
  Airplay,
  GraduationCap,
  Brain,
  Grid2X2Plus,
  ChevronsRightLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import ServicesByPAB from "../NmimsSection/servicesbyPab";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Link from "next/link";

export default function Page() {
  const learningCards = [
    {
      icon: BookMarked,
      title: "Future",
      desc: "A future-ready framework aligned with NEP 2020 and NCrF, combining core skills and micro-credentials for industry relevance."  },
    {
      icon: ThumbsUp,
      title: "Excellence",
      desc: "Built on four pillars—Ethics, AI, Data Science, and Leadership—to shape responsible, tech-driven professionals.",
    },
    {
      icon: Airplay,
      title: "Technology",
      desc: "Learn through interactive content, simulations, virtual labs, and advanced AI tools for real, hands-on experience." },
  ];

  const steps = [
    {
      num: "01",
      title: "Submit Application",
      desc: " Visit the jain online enrollment form.",
    },
    {
      num: "02",
      title: "Enroll for the Elective",
      desc: "Sign up and complete the 4 essential steps to enroll in the program of your choice",
    },
    {
      num: "03",
      title: "Make Payment",
      desc: "Pay fees through net banking/debit card/ credit card or using easy emi with 0% interest.",
    },
  ];


const faqs = [
  {
    q: "Is the Online B.Com from JAIN Online recognized and valid?",
    a: "Yes. The Online B.Com programme offered by JAIN Online is UGC-entitled and recognized under approved online education regulations.",
  },
  {
    q: "Who is eligible to apply for the Online B.Com program?",
    a: "Applicants need to have completed 10+2 (or equivalent) from a recognized board to be eligible for the Online B.Com programme.",
  },
  {
    q: "What is the duration and structure of the Online B.Com?",
    a: "The Online B.Com is a 3-year undergraduate programme, typically structured over 6 semesters.",
  },
  {
    q: "What specializations or electives are available in Online B.Com?",
    a: "JAIN Online offers B.Com specializations including Accounting & Finance and International Finance & Accounting.",
  },
  {
    q: "Is the course delivery fully online? Do I need to visit campus?",
    a: "Yes — the entire course is delivered online via a Learning Management System (LMS), allowing you to study from anywhere with internet access. There is no requirement to visit campus.",
  },
  ];

  const topFaculty = [
    {
      name: "Prof. Sathyanarayana K",
      title: "Program Head",
      image: "/professional.png",
    },
    {
      name: "Dr. Prasantha k J",
      title: "Assistant Professor",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Ms. Chethana K",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Ms. Chethana K",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Prof. Anshu Abhishek",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Prof. Laxmi Devi",
      title: "Assistant Professor",
      image: "/professional.png",
    },
  ];

const subjects = [
  { id: 1, name: "International Finance & Accounting" },
  { id: 2, name: "Accounting & Finance" },
];

const terms = [1, 2, 3, 4, 5, 6];

const topicsData = {
  1: {
    1: [
      "English",
      "HRM & Organizational Behavior",
      "Financial Accounting",
      "Business and Technology",
      "Generative AI for Online Learners",
      "Financial Literacy & Planning",
    ],
    2: [
      "Management Accounting",
      "Financial Markets and Instruments",
      "Performance Management",
      "Business Economics",
      "Communicative English",
      "Virtual Accounting Lab",
    ],
    3: [
      "Corporate and Business Law",
      "Financial Management",
      "Financial Reporting",
      "Personality Development and Leadership Skills",
      "Research Methodology",
      "Environmental Science",
    ],
    4: [
      "Marketing Management",
      "Audit and Assurance",
      "Strategic Business Leadership",
      "Advanced Financial Management",
      "Quantitative Techniques",
      "Virtual Finance Lab",
    ],
    5: [
      "International Business",
      "Taxation",
      "Strategic Business Reporting",
      "Advanced Performance Management",
      "Digital Marketing & E-Commerce",
      "Human Values and Professional Ethics",
    ],
    6: [
      "Strategic Management",
      "Macroeconomics",
      "Advanced Audit and Assurance",
      "Advanced Taxation",
      "Sustainable Finance and ESG Strategies",
      "Business Analytics and AI",
    ],
  },

  2: {
    1: [
      "English",
      "HRM & Organizational Behavior",
      "Financial Accounting",
      "Modern Business Environment",
      "Digital Fluency & Financial Modelling",
      "Financial Literacy & Planning",
    ],
    2: [
      "Business Regulatory Framework",
      "Financial Markets and Instruments",
      "Corporate Accounting",
      "Business Economics",
      "Communicative English",
      "Applied Learning",
    ],
    3: [
      "Financial Management",
      "Cost Accounting",
      "Auditing",
      "Personality Development & Leadership Skills",
      "Research Methodology",
      "Environmental Science",
    ],
    4: [
      "Marketing Management",
      "Management Accounting",
      "Advanced Financial Accounting",
      "Advanced Financial Management",
      "Quantitative Techniques",
      "Applied Learning I",
    ],
    5: [
      "Direct Tax",
      "International Business",
      "Advanced Cost & Management Accounting",
      "International Financial Management",
      "Digital Marketing & E-Commerce",
      "Artificial Intelligence",
    ],
    6: [
      "Strategic Management",
      "Business Ethics & Corporate Values",
      "Advanced Auditing",
      "GST & Customs Tax",
      "Introduction to Business Analytics",
      "Applied Learning III",
    ],
  },
};




  const [activeSubject, setActiveSubject] = useState(1);
  const [activeterms, setActiveterms] = useState(1);
  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const whyCards = [
    {
      logo: Star,
      heading: "Interact",
      subheading:
        "Experience real classroom energy through live sessions led by expert faculty, where you can ask questions instantly and participate in meaningful discussions. These interactive classes help you clear doubts on the spot, stay motivated, and deepen your understanding through two-way learning rather than passive content consumption." },
    {
      logo: BookOpenCheck,
      heading: "Reinforce",
      subheading:
      "Build strong conceptual clarity with short, structured video lessons that break complex topics into easy-to-understand segments. After each lesson, self-assessment quizzes help you evaluate your learning, identify gaps, and strengthen retention—ensuring you truly master every topic instead of just covering it."
   },
    {
      logo: Speech,
      heading: "Listen",
      subheading:
        "Use audio-based learning resources to study anytime, anywhere—whether while traveling, exercising, or taking a break from screens. Perfect for auditory learners and busy schedules, these audio capsules help you revise effortlessly and reinforce learning without needing to sit in front of a laptop.",
     },
    {
      logo: ChevronsRightLeft,
      heading: "Collaborate",
      subheading:
        "Become part of a vibrant learning community through peer discussions, knowledge sharing, and group problem-solving. Access scholarly notes and visually designed learning decks for quick revision, and participate in forums to exchange ideas, gain different perspectives, and enhance understanding through collaborative learning.",
    },
  ];

  const benefits = [
    {
      icon: (
        <FileUser
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Professional Resumes",
      text: "Our expert team, backed by foundit, crafts high-quality,industry-specific resumes to significantly improve learners' chances of securing their desired jobs.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "Profile Highlighter",
      text: "Access the powerful foundit Profile Highlighter tool, ensuring instant attention from recruiters and giving you a competitive advantage as an active job seeker.",
    },
    {
      icon: <MessagesSquare strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Interview Preparation Guide",
      text: " Learners receive a comprehensive guide powered by foundit to boost essential skills, knowledge, and confidence for successful job interviews.",
     },
    {
      icon: (
        <Users
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Featured Profile",
      text: "Elevate your profile on foundit with priority attention, relevant job alerts, and 3x higher shortlisting chances, connecting you with at least 5 domain-specific recruiters",
      },
  ];

  const stats = [
    { value: "3", label: "Years Duration" },
    { value: "6", label: "Semesters" },
    { value: "120", label: "Credits" },
    { value: "Practical", label: "exposure" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[650px] md:min-h-[750px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/jainClg.png"
            alt="Campus"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* LOGO – move to left screen edge, keep same height */}
        <div className="relative z-10 w-full mt-35">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="bg-white rounded-r-2xl shadow-md h-[100px] px-5 -mb-8 flex items-center">
              <Image
                src="/jain.png"
                alt="Jain Logo"
                width={260}
                height={100}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto p-6 sm:p-10">
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-[16px] mx-5 sm:text-[16px] mt-8 italic font-light"
          >
          Online B.Com
          </motion.p>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-[Inter] lg:text-6xl font-bold -mt-2 mx-5 leading-tight"
            >
              Bachelor of Commerce (B.Com)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 mx-5 text-left text-[16px] sm:text-[18px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
            >
   Accelerate your growth with our Online B.Com—an industry-focused, flexible program that builds the skills to excel in today’s dynamic business world, with electives tailored to your goals.
    </motion.p>
            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 mt-5 md:grid-cols-4 gap-y-6 w-5xl"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center px-10 py-6 ${
                    idx !== stats.length - 1
                      ? "md:border-r-2 md:border-white"
                      : ""
                  }`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-[Inter] font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white text-[22px] font-bold font-[Inter] sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS – CENTERED */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mt-12 w-full items-center justify-center"
            >
              <button className="flex items-center justify-center gap-2 bg-[#345895] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium">
                Download Brochure
                <Download size={20} />
              </button>

              <button className="bg-green-500 flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 font-medium">
                Talk to an Expert
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pl-6 pt-0 md:px-16">
        {/* ======= ABOUT JAIN SECTION ======= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-6xl md:text-6xl font-bold text-[#345895] mb-6">
              About <span className="text-[#002153] ">JAIN </span>
            </h2>

            <p className="text-black leading-relaxed text-sm md:text-base">
             JAIN Online, a division of the NAAC A++ accredited JAIN (Deemed-to-be University), offers UGC-entitled online degree programs designed to equip learners with modern knowledge and industry-ready skills. Our goal is to help individuals confidently shape and advance their professional journeys.
With more than three decades of academic excellence and cutting-edge, technology-driven learning systems, we focus on both academic achievement and personal growth to ensure holistic development. Supported by experienced faculty and digital learning experts, our flexible online platform allows learners to study anytime, anywhere, and at their own pace.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end  ">
            <div className="w-full md:w-[90%] overflow-hidden mr-0 rounded-bl-full">
              <img
                src="/professional.png"
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
      <section className="w-full mt-16 px-4 md:px-18">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-[64px] leading-[120%] font-extrabold text-[#345895] mb-10 font-[Inter]">
            A Snapshot of Success
          </h2>

          {/* BLUE BAR */}
          <div className="bg-[#064E92] rounded-tr-full rounded-bl-full py-10 px-6 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center text-white">
              {/* STAT 1 */}
              <div>
                <h3 className="text-[54px] font-bold">NAAC A++</h3>
                <p className="text-sm md:text-[22px] font-medium -my-3 opacity-90">
                  accredited
                </p>
              </div>

              {/* STAT 2 */}
              <div>
                <h3 className="text-[54px] font-bold">2000+</h3>
                <p className="text-sm md:text-[22px] font-medium -my-3 opacity-90">
                  Hiring Corporates
                </p>
              </div>

              {/* STAT 3 */}
              <div>
                <h3 className="text-[54px] font-bold ">42 LPA</h3>
                <p className="text-sm md:text-[22px] font-medium -my-3 opacity-90">
                  Highest Salary Offered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-2 md:px-12 lg:px-20 py-12 flex flex-col gap-8">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-7xl text-left mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[40px] leading-snug text-gray-900">
            <span className="text-[#002153] ">
         Advance your career with our Online B.Com Program.{" "}
           </span>
      Designed with an industry-focused curriculum and a flexible learning format, this program equips youto thrive in the evolving field of commerce. Choose the elective that aligns with your goals and enroll today.
      </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <AlarmClockCheck size={70} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-1">
               Study Anytime, Anywhere
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
           400+ hours of recorded video lectures making, your learning journey convenient.
            </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <UserStar size={70} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-1">
                 Personalized Support
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
               Complete handholding & support by student relationship managers.
               </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} />

      <section className="w-full bg-white px-6 mt-10 md:px-16 py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[52px] md:text-[64px] leading-[110%] font-extrabold font-[Inter] text-center text-[#345895] mb-10"
        >
          Syllabus
        </motion.h2>

        {/* MAIN WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#345895] rounded-[30px] p-4 md:p-12 flex flex-col lg:flex-row gap-10"
        >
          {/* LEFT COLUMN — SUBJECTS */}
          <div className="w-full lg:w-[30%] flex flex-col items-center">
            <div className="max-h-[400px] md:w-[90%] pr-2 overflow-y-auto scrollbar-hide">
              <div className="flex flex-col w-full gap-4 mt-30 items-center">
                {subjects.map((sub) => (
                  <motion.button
                    key={sub.id}
                    onClick={() => {
                      setActiveSubject(sub.id);
                      setActiveterms(1);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-2 py-3 rounded-full font-semibold transition 
                      ${
                        activeSubject === sub.id
                          ? "bg-[#38A169] text-white shadow"
                          : "bg-white text-[#38A169] border border-[#38A169] border-dashed [border-width:2px] [border-dasharray:6_4]"
                      }`}
                  >
                    {sub.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN — TOPICS */}
          <div className="w-full flex flex-col items-center lg:w-[40%]">
            <div className="bg-white rounded-xl p-6 shadow-md relative mt-8 w-full min-h-auto">
              {/* ICON + LINE */}
              <div className="absolute left-6 top-0 bottom-0 flex flex-col items-center">
                <div className="bg-[#345895] text-white p-3 rounded-full shadow z-10 mt-6">
                  <ChevronsDown size={18} />
                </div>
                <div className="w-0.5 bg-[#345895] flex-1 mb-5"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-[Inter] font-bold text-[#345895] ml-12 mb-4">
                Topics Covered
              </h3>

              {/* TOPICS LIST — Hidden Scrollbar */}
              <div className="max-h-[260px] overflow-y-auto pr-2 scrollbar-hide">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeSubject + "-" + activeterms}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-4 ml-12"
                  >
                    {topicsData[activeSubject][activeterms]?.map(
                      (topic, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 6 }}
                          className="flex gap-3 items-center group cursor-pointer"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white group-hover:bg-[#345895] transition">
                            <Check
                              size={16}
                              className="text-[#345895] group-hover:text-white transition"
                            />
                          </div>
                          <span className="text-gray-800 group-hover:text-[#345895] transition">
                            {topic}
                          </span>
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — TERMS + DOWNLOAD BUTTON */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-end mt-8">
            {/* SCROLLABLE TERMS */}
            <div className="flex flex-col gap-4 w-full lg:w-[90%] max-h-[260px] overflow-y-auto scrollbar-hide pr-2">
              {terms.map((term) => (
                <motion.button
                  key={term}
                  onClick={() => setActiveterms(term)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-full font-semibold transition 
                ${
                  activeterms === term
                    ? "bg-[#38A169] text-white shadow"
                    : "bg-white text-[#38A169] border border-[#38A169] border-dashed [border-width:2px] [border-dasharray:6_4]"
                }`}
                >
                  {term === 0
                    ? "Foundation Modules (HBPE)"
                    : `${ordinal(term)} Term`}
                </motion.button>
              ))}
            </div>

            {/* DOWNLOAD BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#4D964F] text-white px-4 py-3 rounded-xl bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md flex items-center justify-center gap-4 w-full lg:w-[90%]"
            >
              DOWNLOAD SYLLABUS
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
  <div className="p-6 md:p-10">
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

      {/* LEFT — TEXT (60%) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-3/5"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-[64px] font-bold text-[#345895] mb-7">
          Eligibility Criteria
        </h2>

        <ul className="text-[#1F284E] text-[24px] md:text-[28px] lg:text-[32px] px-5 list-disc mb-5 space-y-4 leading-tight">
          <li>
          Pass in the (10+2) examination from State Board / CBSE / NIOS / IGCSE/ IB / ICSE recognized by the State or Central Government.
          </li>
          <li>
           Candidates who are due to appear in the (10+2) examination are also eligible to apply for an Online B.Com Program.
          </li>
        </ul>
      </motion.div>

      {/* RIGHT — IMAGE (40%) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-2/5 flex justify-center"
      >
        <Image
          src="/office.png"
          alt="Office workspace"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </motion.div>

    </div>
  </div>
</section>


      <LearningApproach
        title="Learning Approach"
        subtitle="Journey towards online degree programs"
        cards={learningCards}
        ctaText="Ready to Learn ? Click Here"
      />

      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter] relative">
        {/* Faded Background Heading */}
        <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[66px] md:text-[66px] text-[rgba(6, 78, 146, 0.1)] opacity-90 select-none tracking-tight whitespace-nowrap">
          EXAMINATION PROCESS
        </h1>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[62px] font-bold text-center text-[#345895] mb-6"
          >
            EXAMINATION PROCESS
          </motion.h2>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left text-[#345895] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16"
          >
            The Jain University Online B.COM follows a structured and
            transparent examination process designed to evaluate learners
            through continuous assessments and end-term evaluations.
          </motion.p>

          {/* Cards Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-linear-to-b from-[#345895] to-[#101C2F] text-white p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
            >
              <h3 className="text-2xl font-semibold italic mb-5">
                Exam Slot Booking
              </h3>

              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-2xl leading-none">✦</span>
                  <p className="text-left mb-6">
                    Learners must book their examination slots through the Jain
                    University Student Portal.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-2xl leading-no">✦</span>
                  <p className="text-left">
                    All exam slot details are shared well in advance, allowing
                    candidates to schedule their tests conveniently.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-linear-to-b from-[#345895] to-[#101C2F] text-white p-5 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
            >
              <h3 className="text-2xl font-semibold italic mb-5">
                Exam Slot Timings
              </h3>

              <p className="text-lg max-w-[380] mb-6 text-center">
                For end-term examinations, Jain University provides three
                available slots:
              </p>

              {/* Exam Time Circles */}
              <div className="flex items-center justify-center gap-6 mb-7">
                {["9 AM", "1 PM", "5 PM"].map((slot, i) => (
                  <div
                    key={i}
                    className="w-15 h-15 border border-white rounded-full flex items-center justify-center text-lg font-semibold"
                  >
                    {slot}
                  </div>
                ))}
              </div>

              <p className="text-lg max-w-[380] text-center">
                Candidates may choose their preferred slot based on
                availability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 font-[Inter]">
        <div className="max-w-4xl mx-auto p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-[40] font-bold italic text-[#345895] mb-12 text-center">
            ASSESSMENT STRUCTURE (100 MARKS)
          </h2>

          {/* Two Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            {/* Left Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                End-term Examination (70 Marks)
              </div>

              <div className="flex flex-cols-2 gap-1">
                <div className="rounded-lg border border-[#345895] py-3 px-2 text-sm text-center text-[#345895] bg-white">
                  MCQ (40 Marks)
                </div>
                <div className="rounded-lg border border-[#345895] py-3 px-3 text-sm text-center text-[#345895] bg-white">
                  Descriptive Answers (30 Marks)
                </div>
              </div>
            </div>

            {/* Right Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                Internal Assessment (30 Marks)
              </div>

              <div className="flex flex-cols-2 gap-2">
                <div className="rounded-lg border border-[#345895] py-3 px-16 text-sm text-center text-[#345895] bg-white">
                  Quiz
                </div>
                <div className="rounded-lg border border-[#345895] py-3 px-16 text-sm text-center text-[#345895] bg-white">
                  Assignment
                </div>
              </div>
            </div>
          </div>

          {/* Passing Criteria Box */}
          <div className="border border-[#e5e7eb] rounded-lg p-5 mt-15 bg-white">
            <p className="font-semibold text-black mb-1">Passing Criteria</p>
            <ul className="list-disc pl-8 text-[#345895] text-lg">
              <li>
                A candidate must secure a minimum of 40% to successfully pass
                the course
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white mt-15 py-5 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-center text-[#345895] font-[Inter] text-6xl md:text-5xl font-extrabold mb-12">
          Career Services
        </h2>

        {/* Main rounded container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10 md:p-14"
        >
          {/* ALL 6 BENEFITS — 3 ON TOP, 3 BELOW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-20 gap-y-20 gap-12">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-[#345895] font-extrabold font-[Inter] text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-[#345895] text-sm max-w-60 mx-auto leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#4D964F] text-white mt-4 px-6 py-2 rounded-lg text-sm 
              bg-linear-to-r from-[#4D964F] to-[#193019] border-0
              shadow-[#1C361D] shadow-md transform hover:scale-105 
              duration-200 flex items-center justify-center gap-4 transition"
            >
              Explore Your Benefits
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
        {/* CONTAINER BORDER BOX */}
        <div className="px-2">
          {/* FLEX WRAPPER */}
          <div className="flex flex-row justify-center items-center gap-10">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <h2 className="text-[#064E92] text-[42px] md:text-[52px] font-extrabold leading-[110%] mb-6">
                Fees Structure
              </h2>
               <div className="text-black">
               Professional fee will be applicable during the 1st and 3rd and 5th semesters.
               </div>
               <div className="text-black">
                One time university registration fee during Admission:<br />₹2,500/- Examination Fee per year: ₹3,000/-<br />For SAARC countries, Registration Fee Per Year: ₹ 11,250/-<br/> and Exam Fee Per Year: ₹ 3,750/-<br />Fee applicable to students from India and SAARC<br/> countries only
              </div>

             

              <button className=" text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] mt-5 font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration 200 flex items-center justify-center w-fit">
                Compare all Plans
              </button>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex flex-row items-start justify-center font-[Inter] gap-6 lg:w-[35%] pr-25">
              {/* Annual PAYMENT CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Annual Payment</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    B.COM
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹1,20,000/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  inclusive of all taxes
                </p>
              </div>
              {/* Semester wise CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Semester wise</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    B.COM
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹20,000/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  inclusive of all taxes
                </p>
              </div>

              {/* EMI CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] rounded-xl shadow-md px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center">
                  <p className="font-semibold text-white">EMI Strating at </p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    B.COM
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl  text-white text-center mt-5">
                  ₹5,125/-
                </p>
                <p className="text-xs text-white text-center italic mb-3 ">
                  per month
                </p>
                <p className="text-xs text-[#FFDD55] text-center italic mb-10 ">
                  0% interest<br />
                  No Hidden Costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={0}
      />

      <section className="w-full mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] items-center font-[Inter] gap-6">
          {/* LEFT CONTENT */}
          <div className="space-y-4 pr-4">
            <p className="text-[#1F1717] text-sm font-medium">Degree Sample</p>
            {/* FIXED THREE-LINE HEADING WITH SMOOTH LINE-HEIGHT */}
            <h2 className="text-[#345895] text-[46px] md:text-[52px] lg:text-[62px] font-bold leading-[1.05] max-w-[720px]">
              <span className="block">Jain University</span>
              <span className="block">Online B.COM</span>
              <span className="block">Certificate</span>
            </h2>

           <p className="text-black text-sm md:text-base leading-relaxed max-w-xl mb-2">
             Degrees from JAIN Online are
             </p>
             <ul className="text-black text-sm md:text-base px-5 list-disc leading-relaxed max-w-xl mb-6">
                <li>
                  Equivalent to JAIN (Deemed-to-be University) on-campus degree
                </li>
                <li>
                    Globally recognized
                </li>
             </ul>
           <button className="bg-[#4D964F] text-white font-medium text-sm px-10 py-2 rounded-lg bg-linear-to-r from-[#4D964F] to-[#193019] border-0 shadow-md shadow-[#1C361D] transform hover:scale-105 duration-200 flex items-center justify-center">
              Know more
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <img
              src="/office.png"
              alt="Certificate Preview"
              className="rounded-lg shadow-sm object-cover"
              style={{ width: "484px", height: "343px" }}
            />
          </div>
        </div>
      </section>

     <section className="w-full bg-white mt-20 px-4 md:px-12 lg:px-20 py-16 font-[Inter]">
  {/* Small Header */}
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-black text-lg md:text-xl mb-2"
  >
    What will you gain?
  </motion.p>

  {/* Main Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-[#345895] font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] leading-tight max-w-7xl mb-12"
  >
    This is more than a degree it's a journey that reshapes your mindset, your skills, and your growth.
  </motion.h2>

  {/* LIST WRAPPER */}
  <div className="flex flex-col gap-10 max-w-7xl">

    {/* ITEM 1 */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-start gap-6"
    >
      <div className="w-15 h-15 bg-[#345895]  shrink-0 rounded-full flex items-center justify-center">
        <Blocks size={24} strokeWidth={2} className="text-white" />
      </div>
      <p className="text-black text-[16px] md:text-[24px] mt-4 leading-tight">
     Build a strong foundation in accounting principles to prepare for careers in auditing, taxation, or financial analysis.
      </p>
    </motion.div>

    {/* ITEM 2 */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-6"
    >
      <div className="w-15 h-15 bg-[#345895]  shrink-0  rounded-full flex items-center justify-center">
        <HandCoins size={24} strokeWidth={2} className="text-white" />
      </div>
      <p className="text-black text-[16px] md:text-[24px] max-w-7xl leading-tight">
     Strengthen your financial management skills for opportunities in corporate finance, investment banking, or financial planning.
     </p>
    </motion.div>

    {/* ITEM 3 */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-start gap-6"
    >
      <div className="w-15 h-15 bg-[#345895]  shrink-0 rounded-full flex items-center justify-center">
        <GraduationCap size={24} strokeWidth={2} className="text-white" />
      </div>
      <p className="text-black text-[16px] md:text-[24px] max-w-7xl leading-tight">
    Develop solid knowledge of business law and regulatory frameworks for roles in compliance, legal support, or contract management.
     </p>
    </motion.div>

    {/* ITEM 4 */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-6"
    >
      <div className="w-15 h-15 bg-[#345895] shrink-0 rounded-full flex items-center justify-center">
        <Brain size={24} strokeWidth={2} className="text-white" />
      </div>
      <p className="text-black text-[16px] md:text-[22px] max-w-7xl leading-tight">
    Gain a deeper understanding of economics and market dynamics for careers in market research or economic consulting.
     </p>
    </motion.div>

    {/* ITEM 5 */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-6"
    >
      <div className="w-15 h-15 bg-[#345895]  shrink-0  rounded-full flex items-center justify-center">
        <Grid2X2Plus size={24} strokeWidth={2} className="text-white" />
      </div>
      <p className="text-black text-[16px] md:text-[24px] max-w-7xl leading-tight">
      Enhance your abilities in business analytics and data interpretation to qualify for roles in business intelligence or management consulting.
      </p>
    </motion.div>

  </div>
</section>

      <section className="w-full bg-white py-20 px-16 md:px-12 lg:px-20">
        <div className="w-full bg-[#064E92] rounded-4xl py-20 px-16 md:px-12 lg:px-20">
          {/* White inner container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-6 md:p-12 max-w-7xl mx-auto"
          >
            {/* Title */}
            <div className="text-center mb-10 relative pb-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#064E92] font-extrabold font-[Inter] text-3xl md:text-5xl"
              >
                Career Opportunities
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center flex justify-center text-black max-w-3xl mx-auto mb-12"
            >
              Gain practical, job-ready skills through online programs designed
              to help you grasp industry fundamentals and begin your career with
              confidence.
            </motion.p>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/professional.png"
                    width={566}
                    height={390}
                    alt="Career handshake"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* RIGHT LIST — ROLES directly written here */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                {/* Each line manually listed */}
                {[
                  
                  "Management Analyst",
                  "Business Consultancies",
                  "Global Business Manager",
                  "Account Executive",
                  "Business Intelligence Analyst",
                ].map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#4d964f] flex items-center justify-center">
                      <Check size={18} className="text-white" />
                    </span>

                    <span className="text-gray-900 font-semibold text-lg">
                      {role}
                    </span>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className=" w-[200px] bg-[#4D964F] text-white mt-4 px-6 py-3 rounded-lg text-sm bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200"
                >
                  Know more
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Faculties
             heading="With a diverse range of expertise spanning various disciplines, our faculty brings a wealth of knowledge and real-world experience to the virtual classroom."
             topFaculty={topFaculty}
             bottomFaculty={bottomFaculty}
           />

      <ServicesByPAB />

      <section className="w-full px-4 md:px-10 lg:px-20 py-16">
        {/* TITLE */}
        <h2 className="text-[#345895] font-extrabold flex flex-row items-center justify-center font-[Inter] text-[42px] md:text-[64px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className=" max-w-5xl flex items-center justify-center bg-[#4d964f]/10 text-[#4D964F] font-semibold text-center m-auto py-8 text-[24px] rounded-xl">
            <p> ADMISSION OPEN FOR JANUARY 26 SESSION</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}

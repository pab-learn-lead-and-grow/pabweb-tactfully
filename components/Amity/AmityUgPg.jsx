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
      icon: Tally4,
      title: "Get Started",
      desc: "Kick off with clarity—discover program structure, tools, and guidelines to set a strong foundation.",
    },
    {
      icon: Headset,
      title: "Engage",
      desc: "Connect with mentors and classmates through interactive meetups and build your professional network.",
    },
    {
      icon: BookCheck,
      title: "Grow",
      desc: "Learn through live/on-demand classes, complete projects confidently, and access 24/7 academic and digital resources to keep progressing.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Select Your Program",
      desc: " Choose the program that suits your goals.",
    },
    {
      num: "02",
      title: "Complete Your Application",
      desc: "Fill out your application with all the necessary information.",
    },
    {
      num: "03",
      title: "Pay your Program Fee",
      desc: "Make your program payment securely & easily.",
    },
    {
      num: "04",
      title: "Submit & Register",
      desc: "Submit your application and complete your registration",
    },
    {
      num: "05",
      title: "Await Enrollment Details",
      desc: "Wait for enrollment details & further guidance.",
    },
  ];

  const faqs = [
  {
  q: "What is the UG + PG Degree Program at Amity Online?",
  a: "The UG + PG Degree Program combines a bachelor’s and a master’s degree into a single pathway — typically completed in around 4.5 years, including an internship, instead of the usual 5–6 years when pursued separately.",
},
{
  q: "Which combinations of degrees are available under this program?",
  a: "Amity Online offers multiple integrated degree combinations, including BBA + MBA, BCA + MCA, and B.Com + MBA.",
},
{
  q: "How does the program benefit students compared to pursuing degrees separately?",
  a: "The integrated UG + PG pathway helps students save time and tuition costs while gaining advanced knowledge earlier. This provides a faster route to higher qualifications and can accelerate career opportunities.",
},
{
  q: "Is the UG + PG integrated degree recognised and valid?",
  a: "Yes, the integrated program is fully recognised. Amity University Online is UGC-approved and DEB-approved, and its online UG and PG degrees are valid and widely accepted. The integrated pathway carries the same recognition as pursuing the degrees individually.",
},

  ];

  const topFaculty = [
    {
      name: "Dr. Rashmi Saxena",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Mona Chaudhary",
      title: "Assistant Professor",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Pragati Sahai",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Dr. Harshita",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Dr. Coral J Barboza",
      title: "Associate Professor",
      image: "/professional.png",
    },
    {
      name: "Dr. Maitri Savarna",
      title: "Professor",
      image: "/professional.png",
    },
  ];

  const subjects = [
  { id: 1, name: "BBA+MBA" },
  { id: 1, name: "BCA +MCA" },
  { id: 1, name: "B.COM +MBA" }
];

const terms = [1, 2, 3, 4, 5, 6];

const topicsData = {
  1:{
     1: [
    "Accounting Fundamentals",
    "Management Foundation",
    "Principles of Marketing",
    "Business Statistics",
    "Business Communication"
  ],

  2: [
    "IT Applications in Business",
    "Environmental Studies",
    "Fundamentals of Financial Management",
    "Fundamentals of Human Resource Management",
    "Individual Excellence and Social Dynamic"
  ],

  3: [
    "Principles of Organizational Behaviour",
    "Essentials of Production and Operations Management",
    "Research Methods for Managers",
    "Financial Markets and Services",
    "Cross Cultural Management"
  ],

  4: [
    "Fundamentals of Entrepreneurship",
    "Principles of Consumer Behaviour",
    "Operations Research",
    "Sales and Distribution Management",
    "Fundamentals of Project Management"
  ],

  5: [
    "Marketing in Digital Age",
    "Business Strategy",
    "Professional Ethics",
    "Managing Customer Relationships",
    "Financial Planning",
    "Quality Management"
  ],

  6: [
    "Fundamentals of International Human Resource Management",
    "Brand Management",
    "Fundamentals of Retailing",
    "Dissertation"
  ]
},
 2:{
     1: [
    "Computer and Information Technology",
    "Programming in C",
    "Human Computer Interaction",
    "Basic Mathematics I",
    "Business Communication"
  ],

  2: [
    "Operating System Concepts",
    "Data Structure using C",
    "Software Engineering and Modelling",
    "Environmental Studies",
    "Individual Excellence and Social Dynamic"
  ],

  3: [
    "Object Oriented Programming Using Java",
    "Network Basics",
    "Introduction to Data Base Management Systems",
    "Computational Statistics",
    "Green computing"
  ],

  4: [
    "Python Programming",
    "Unix Operating System and Shell Programming",
    "Fundamentals of Digital Marketing",
    "IT Project Management",
    "Fundamental of Cloud Computing and Enterprise",
    "Cyber and Information Security"
  ],

  5: [
    "Introduction to Artificial Intelligence",
    "Fundamentals of Ecommerce",
    "Professional Ethics",
    "Internet of Things",
    "Introduction to Enterprise Resource Planning",
    "Data Warehousing and Mining"
  ],

  6: [
    "Introduction to e-Governance",
    "Human Resource Management",
    "Blockchain Technologies",
    "Introduction to Data Science",
    "Major Project"
  ]
 },
 3:{
     1: [
    "Business Mathematics I",
    "Environmental Studies",
    "Financial Accounting - I",
    "Mercantile Law",
    "Business Communication"
  ],

  2: [
    "Business Mathematics II",
    "Financial Accounting - II",
    "Fundamentals of Corporate Law",
    "Macroeconomics",
    "Principles of Marketing"
  ],

  3: [
    "Corporate Accounting - I",
    "Cost Accounting",
    "Direct Tax - I",
    "Business Statistics",
    "Individual Excellence and Social Dynamic"
  ],

  4: [
    "Auditing",
    "Corporate Accounting - II",
    "Direct Tax - II",
    "Management Accounting",
    "Research Methodology"
  ],

  5: [
    "Business Organisation",
    "Fundamentals of Financial Management",
    "Professional Ethics",
    "Computerized Accounting System",
    "Financial Reporting",
    "Indian Economy"
  ],

  6: [
    "Ethics and Corporate Governance",
    "Major Project",
    "Corporate Tax Planning",
    "International Financial Management",
    "Investment Analysis and Portfolio Management"
  ]
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
      heading: "Accredited",
      subheading:
        "Amity’s MBA is approved by the University Grants Commission (UGC) and recognised as a valid postgraduate degree - giving you credentials that are widely accepted by employers across India and abroad.",
    },
    {
      logo: BookOpenCheck,
      heading: "Specialized",
      subheading:
        "The curriculum is updated for modern business realities and offers specializations like Business Analytics, Digital Marketing, Finance, HR, IT & Data-driven business management — preparing you for roles in a variety of sectors.",
    },
    {
      logo: Speech,
      heading: "Career-Ready",
      subheading:
        "Amity Online offers placement assistance, virtual job fairs, global alumni and industry networks, practical training via case studies and projects — helping you boost employability and career growth.",
    },
    {
      logo: SplinePointer,
      heading: "Flexibile",
      subheading:
        "With online lectures (live & recorded), digital study resources, and remote-exam options, the program lets you learn on your own schedule — enabling you to upskill without giving up your job or other commitments.",
    },
  ];

  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Discovery",
      text: "Tools to explore your interests and strengths, understand different career pathways, and uncover your true passion and potential.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "Resume Pro",
      text: "Expert support to build a professional, polished resume or CV tailored to industry standards, showcasing your skills and accomplishments.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "JobSearch",
      text: "Guidance through the online application process, virtual networking opportunities, and preparation for remote interviews to enhance your digital presence.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Counselling",
      text: "Personalized 1-on-1 sessions with experienced career advisors, goal setting, and strategic support to make informed decisions about your future.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "SkillBoost",
      text: "Access to workshops, certification programs, and learning resources to develop job-ready skills and stay competitive in today’s job market.",
    },
    {
      icon: (
        <BriefcaseBusiness
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Internships",
      text: "Assistance with internship sourcing, application strategies, and gaining real-world project experience to build strong portfolios and work confidence.",
    },
  ];

  const stats = [
    { value: "4.5", label: "Years Duration" },
    { value: "60+", label: "Programs & Specializations" },
    { value: "Scholarships", label: "Available" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[650px] md:min-h-[750px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/amityClg.png"
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
                src="/amity.png"
                alt="Amity Logo"
                width={260}
                height={100}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-6xl mx-auto p-6 mt-10 sm:p-10">

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-[Inter] lg:text-[58px] font-bold -mt-2 leading-tight"
            >
              UG + PG Degree Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[18px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
            >
       Fast-track your education and career with Amity Online’s integrated UG + PG program—earn both degrees in just 4.5 years, gain real-world experience, and graduate job-ready with a competitive edge.
        </motion.p>
        {/* STATS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-4 gap-y-6 max-w-7xl mx-auto w-full mt-5"
>
  {stats.map((stat, idx) => (
    <div
      key={idx}
      className={`text-center px-5  py-6 ${
        idx !== stats.length - 1 ? "md:border-r-2 md:border-white" : ""
      }`}
    >
      <p className="text-3xl sm:text-4xl md:text-5xl font-[Inter] font-bold text-white mb-1">
        {stat.value}
      </p>

      <p className="text-white text-[22px] font-bold font-[Inter] whitespace-nowrap sm:text-base flex items-center justify-center">
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
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-6xl md:text-6xl font-bold text-[#345895] mb-6">
              About <span className="text-[#F9BD04] ">Amity </span>
            </h2>

            <p className="text-black leading-relaxed text-sm md:text-base">
              Amity University Online, approved by the UGC, is a leading
              provider of online higher education in India, offering various
              undergraduate, postgraduate, diploma, and certificate programs.
              Built for students and working professionals, it delivers a
              flexible learning experience through live and recorded classes,
              supported by downloadable resources. The university is
              particularly known for its industry-focused programs in
              management, IT, and computer applications.
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
                <h3 className="text-[54px] font-bold">NAAC A+</h3>
                <p className="text-sm md:text-[22px] font-medium -my-3 opacity-90">
                  accredited
                </p>
              </div>

              {/* STAT 2 */}
              <div>
                <h3 className="text-[54px] font-bold">1.6 lakh+</h3>
                <p className="text-sm md:text-[22px] font-medium -my-3 opacity-90">
                  working professionals enrolled
                </p>
              </div>

              {/* STAT 3 */}
              <div>
                <h3 className="text-[54px] font-bold ">AICTE</h3>
                <p className="text-sm md:text-[22px] font-medium -my-3 opacity-90">
                  approved
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
            <span className="text-[#F9BD04] ">
          Accelerate your academic and career growth with Amity Online’s UG + PG Degree Program. Designed for ambitious learners, this integrated pathway lets you complete both a Bachelor’s and Master’s degree in just 4.5 years*, including an internship.{" "}
            </span>
           Choose from combinations like BBA + MBA, BCA + MCA, or B.Com + MBA, and gain comprehensive knowledge, advanced skills, and hands-on experience through real projects and case studies. Graduate job-ready, save time and money, and enter the workforce with a competitive advantage. (*As per recent regulatory guidelines on Accelerated Degree Programs & dependent on Year 1 performance).</h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <Ungroup size={70} strokeWidth={1.0} />
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
              <BookText size={70} strokeWidth={1.0} />
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
          className="bg-[#345895] rounded-[30px] p-8 md:p-12 flex flex-col lg:flex-row gap-10"
        >
          {/* LEFT COLUMN — SUBJECTS */}
          <div className="w-full lg:w-[30%] flex flex-col items-center">
            <div className="max-h-[400px] md:w-[90%] pr-2 overflow-y-auto scrollbar-hide">
              <div className="flex flex-col w-full gap-4 mt-25 items-center">
                {subjects.map((sub) => (
                  <motion.button
                    key={sub.id}
                    onClick={() => {
                      setActiveSubject(sub.id);
                      setActiveterms(1);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-4 py-3 rounded-full font-semibold transition 
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
          {/* Heading */}
          <h2 className="text-3xl md:text-[64px] font-bold text-[#345895] mb-7">
            Eligibility Criteria
          </h2>
          <ul className="text-[#1F284E] text-[32px] px-5 list-disc mb-5 space-y-4 leading-tight">
            <li>
           Fresh 10+2 pass out students or aspirants seeking a career in business management.
           </li>
             <li>
         Entrepreneurs looking to enhance their skills in business management.
          </li>
            <li>
        Aspirants who want to understand topics of wide relevance including Human Resource, Banking, Law and Accounting from a Business Management perspective.
        </li>
         <li>
           Applicant must possess sufficient knowledge and understanding of English Language.
           </li>
        
          </ul>
          {/* for Indian Students */}
          <div className="mb-5">
            <h3 className="text-xl md:text-5xl italic text-[#345895] mb-4">
              For Indian students
            </h3>
            <ul className="text-[#1F284E] text-[32px] px-5 list-disc mb-5 space-y-4 leading-tight">
              <li>
             10th Class Certificate (Completing 10 years of formal schooling)</li>
              <li>
             12th Class Certificate (Completing 12 years of formal schooling)
             </li>
            </ul>
          </div>
          {/* for Foreign Students */}
          <div className="mb-5">
            <h3 className="text-xl md:text-5xl italic text-[#345895] mb-4">
              For NRI & Foreign students
            </h3>
            <ul className="text-[#1F284E] text-[32px] mb-5 space-y-4 list-disc px-5 leading-tight">
              <li>
               O Level Certificate (Completing 10 yrs of formal schooling. Diploma not accepted)
             </li>
               <li>
               A Level Certificate (Completing 12 yrs of formal schooling. Diploma not accepted)
            </li>
            <li>
              Certificate of Equivalence from Association of Indian Universities (required by any student with foreign education to apply in any University in INDIA).
              </li>
            </ul>
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
            The Amity University Online UG+PG Program follows a structured and
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
                    Learners must book their examination slots through the Amity
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
                For end-term examinations, Amity University provides three
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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

      <section className="w-full font-[Inter] mt-25 mx-20 flex items-center justify-center">
        {/* CONTAINER BORDER BOX */}
        <div className="px-2">
          {/* FLEX WRAPPER */}
          <div className="flex flex-row justify-center items-center gap-5">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <h2 className="text-[#064E92] text-[42px] md:text-[64px] font-bold leading-tight ">
                Fees Structure
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
                Finance Your Future, Hassle-Free Loan
                <br />
                Assistance Available
              </p>

               <h4 className="text-[#064E92] text-[25px] md:text-[40px] font-bold leading-tight mt-5 mb-20">
                BBA + MBA
              </h4>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex flex-row items-start justify-center font-[Inter] gap-6 lg:w-[55%] pr-25">
              {/* Annual PAYMENT CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Annual Payment</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    BBA+MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹3,45,800/-
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
                    BBA+MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹57,633/-
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
                    BBA+MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl  text-white text-center mt-5">
                  ₹14,409/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  per month
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  T&C apply
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-20 gap-5">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
               <h4 className="text-[#064E92] text-[25px] md:text-[40px] font-bold leading-tight mb-6">
                BCA + MCA
              </h4>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex flex-row items-start justify-center font-[Inter] gap-6 lg:w-[55%] pr-25">
              {/* Annual PAYMENT CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Annual Payment</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    BCA+MCA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹3,04,800/-
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
                    BCA+MCA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹50,666/-
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
                    BCA+MCA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl  text-white text-center mt-5">
                  ₹12,667/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  per month
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  T&C apply
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-20 gap-5">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] flex flex-col mt-20 justify-center">
               <h4 className="text-[#064E92] text-[25px] md:text-[40px] font-bold leading-tight mb-20">
                B.COM + MBA
              </h4>
              <button className=" text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration 200 flex items-center justify-center w-fit">
                Compare all Plans
              </button>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex flex-row items-start justify-center font-[Inter] gap-6 lg:w-[55%] pr-25">
              {/* Annual PAYMENT CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Annual Payment</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    B.COM+MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹2,83,100/-
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
                    B.COM+MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl text-white text-center mt-5">
                  ₹47,184/-
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
                    B.COM+MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-2xl  text-white text-center mt-5">
                  ₹11,796/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  per month
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  T&C apply
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
              <span className="block">Amity<br /> University</span>
              <span className="block">Online UG + PG</span>
              <span className="block">Program <br />
              Certificate</span>
            </h2>
           <button className="bg-[#4D964F] text-white font-medium text-sm px-15 py-2 rounded-lg bg-linear-to-r mt-20 from-[#4D964F] to-[#193019] border-0 shadow-md shadow-[#1C361D] transform hover:scale-105 duration-200 flex items-center justify-center">
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
          className="text-[#345895] font-extrabold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
        >
          The program offers strong academics, interactive learning, and full
          flexibility to help professionals grow confidently.
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <UserLock size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Gamified assignments
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Engage in immersive roleplay simulations to solve real
                  business challenges and sharpen leadership skills.
                </p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <Headset size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Internship Opportunities
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Access curated internships with top companies to gain real
                  experience.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-12">
            {/* Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <GlobeLock size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Pan India campus access & offline events
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Balance work and study with a fully online program + campus
                  events.
                </p>
              </div>
            </motion.div>

            {/* Item 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <StickyNote
                  size={35}
                  strokeWidth={1.0}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Access to campus life
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Connect, collaborate, and join clubs through the beSocial app.
                </p>
              </div>
            </motion.div>
          </div>
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
                  "Business Analyst",
                  "Marketing Associate ",
                  "Financial Analyst ",
                  "Operations Executive",
                  "Finance Manager",
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
        heading="Learn from the best at Amity with world-class education and leading International Faculty"
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

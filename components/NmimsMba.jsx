"use client";
import Image from "next/image";
import {
  Download,
  Briefcase,
  BookOpenCheck,
  SplinePointer,
  Speech,
  GlobeLock,
  Users,
  GraduationCap,
  LayoutGrid,
  Check,
  ChevronsDown,
  ChevronRight,
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import CareerServices from "./NmimsSection/CareerServices";
import Enrollment from "./NmimsSection/Enrollment";
import ServicesByPAB from "./NmimsSection/servicesbyPab";
import FAQ from "./NmimsSection/FAQ";
import ConnectToday from "./NmimsSection/ConnectToday";
import LearningApproach from "./NmimsSection/LearningApproach";
import Faculties from "./NmimsSection/Faculties";
import WhyChooseUs from "./NmimsSection/WhyChooseUs";

export default function Page() {
  const Counter = ({ end, duration = 2000 }) => {
    const [value, setValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            let start = 0;
            const increment = end / (duration / 16);

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                clearInterval(counter);
                setValue(end);
              } else {
                setValue(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.4 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={ref}>{value.toLocaleString()}</span>;
  };

  /* fees crousel */
  function FeesCarousel() {
    const cards = [
      {
        title: "One Time",
        amount: "₹1,96,000/-",
        sub: "Congratulations!\nYou save ₹24,000/-",
      },
      {
        title: "Annual Payment",
        amount: "₹1,05,000/-",
        sub: "",
      },
      {
        title: "Semester Wise",
        amount: "₹55,000/-",
        sub: "",
      },
    ];

    const [index, setIndex] = useState(0);

    // Auto-scroll every 3 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % cards.length);
      }, 3000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-full flex flex-col items-center">
        {/* CARD */}
        <div className="relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="
              bg-gradient-to-b from-[#345895] to-[#101C2F]
              rounded-2xl shadow-lg p-8 
              w-[80%] md:w-[60%] lg:w-[80%]
              h-[260px]
              flex flex-col justify-between text-center
            "
            >
              <div>
                <p className="font-semibold text-white">{cards[index].title}</p>
                <p className="text-xs text-white mt-1">(in INR)</p>
                <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">MBA</p>
                <div className="w-12 mx-auto h-0.5 bg-white mt-3" />
              </div>

              <p className="text-2xl font-medium text-white mt-4">
                {cards[index].amount}
              </p>

              {cards[index].sub && (
                <p className="text-xs text-white italic whitespace-pre-line">
                  {cards[index].sub}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="flex gap-2 mt-4">
          {cards.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              animate={{
                scale: index === i ? 1.2 : 1,
                backgroundColor: index === i ? "#345895" : "#d1d5db",
              }}
              className="w-3 h-3 rounded-full"
            />
          ))}
        </div>
      </div>
    );
  }

  const whyCards = [
    {
      logo: Users,
      heading: "Foundation",
      subheading:
        "Deepen your understanding of key management concepts and sharpen your ability to critically analyse and solve real-world business challenges.",
    },
    {
      logo: BookOpenCheck,
      heading: "Specializations",
      subheading:
        "Choose from marketing, finance, or business analytics to shape your career trajectory with the right specialization.",
    },
    {
      logo: SplinePointer,
      heading: "Flexible",
      subheading:
        "Experience seamless learning through an integrated platform accessible on any device study whenever and however you prefer.",
    },
    {
      logo: Speech,
      heading: "Mentorship",
      subheading:
        "Learn from top academicians and industry leaders who guide you with practical knowledge and deep professional experience.",
    },
    {
      logo: GlobeLock,
      heading: "Industry-Ready",
      subheading:
        "Gain the skills to develop and apply business models and frameworks to solve real-world business challenges.",
    },
    {
      logo: FileUser,
      heading: "Upskill",
      subheading:
        "Master practical business tools and strategic frameworks that empower you to solve complex challenges and drive meaningful results in the real world.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Registration",
      desc: "Dummy description for registration. Replace with real content later.",
    },
    {
      num: "02",
      title: "Document Submission",
      desc: "Dummy description for document submission. Replace with real content later.",
    },
    {
      num: "03",
      title: "Fee Submission",
      desc: "You may confirm your admission by paying the fee online, or by sending a demand draft in favour of SVKM’S NMIMS Payable at Mumbai.",
    },
    {
      num: "04",
      title: "Confirmation",
      desc: "Dummy description for confirmation. Replace with real content later.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Step 03 open by default (as screenshot)

  const toggleStep = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const learningCards = [
    {
      icon: FileClock,
      title: "Learn at Your Own Pace",
      desc: "Choose between weekday or weekend batches and study in a way that fits your schedule. Access all recorded lectures anytime through the Student Portal.",
    },
    {
      icon: BookCheck,
      title: "Comprehensive Learning Resources",
      desc: "Get both physical books and an extensive online library including e-books, journals, transcripts, and 24/7 recorded sessions.",
    },
    {
      icon: Headset,
      title: "Dedicated Student Support Team",
      desc: "Receive quick assistance through chat, ticketing, and call-back options ensuring smooth learning.",
    },
  ];

  const faqs = [
    {
      q: "Is the NMIMS Online MBA valid and recognized?",
      a: "Yes, it is UGC-approved and offered by a NAAC A++ accredited university.",
    },
    {
      q: "Can working professionals balance this MBA with a full-time job?",
      a: "Absolutely. The program is designed for flexible, self-paced learning.",
    },
    {
      q: "Does NMIMS offer placement support?",
      a: "Yes-through job portals, resume coaching, interview prep, and 500+ hiring partners",
    },
    {
      q: "Are live classes available?",
      a: "Yes, alongside recorded sessions you can access anytime.",
    },
    {
      q: "How long is the NMIMS Online MBA?",
      a: "The program duration is 24 months.",
    },
  ];

  const topFaculty = [
    {
      name: "Prof. Aman Joshi",
      title: "MBA in Business Design",
      image: "/professional.png",
    },
    {
      name: "Dr. Brinda Sampat",
      title: "Ph.D",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Prof. Anisha Bose",
      title: "PGDMM in Digital Marketing",
      image: "/professional.png",
    },
    {
      name: "Dr. Chhavi Taneja",
      title: "Ph.D Master of Business Eco",
      image: "/professional.png",
    },
    {
      name: "Prof. Abhishek Mani",
      title: "MBA in Finance",
      image: "/professional.png",
    },
    {
      name: "Dr. Arun Kohli",
      title: "Ph.D",
      image: "/professional.png",
    },
  ];

  const subjects = [
    { id: 1, name: "Business Management" },
    { id: 2, name: "Marketing Management" },
    { id: 3, name: "Financial Management" },
    { id: 4, name: "Human Resource Management" },
    { id: 5, name: "Operation and Data Science Management" },
  ];

  const semesters = [1, 2, 3, 4];
  const semSuffix = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
  };

  const topicsData = {
    1: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost and Management Accounting",
        "Human resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations Management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Information Systems for Management",
        "Consumer Behaviour",
        "Organisational Theory, Structure & Design",
        "Supply Chanin Management",
      ],
      4: [
        "Indian Ethos and Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Digital Marketing",
        "Entrepreneurship & Venture Capital Management",
        "Project Management",
      ],
    },
    2: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Brand Management",
        "Consumer Behaviour",
        "Integrated Marketing Communications",
        "Sales Management",
      ],
      4: [
        "Indian Ethos and Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Digital Marketing",
        "Services Marketing",
        "International Marketing",
      ],
    },
    3: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Capital Market & Portfolio Management",
        "Business valuation",
        "Financial Derivatives",
        "Strategic Cost Management",
      ],
      4: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Corporate Tax Planning",
        "Investment Banking",
        "International Finance",
      ],
    },
    4: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Compensation & Benefits",
        "Industrial Relations & Labour Laws",
        "Manpower Planning, Recruitment & Selection",
        "Organisational Development & Change",
      ],
      4: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Performance Management System",
        "Learning & Development",
        "Emotional Intelligence",
      ],
    },
    5: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Research Methodology",
        "Strategic Applications of IOT & Big Data",
        "Strategic Applications and E-procurement",
        "Supply Chain Management",
      ],
      4: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Operational Analytics",
        "Total Quality Management",
        "EDA & Data Visualization",
      ],
    },
  };
  const [activeSubject, setActiveSubject] = useState(1);
  const [activeSemester, setActiveSemester] = useState(4);
  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "4", label: "Years Validity" },
    { value: "IA + TEE", label: "Evaluation" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[650px] md:min-h-[750px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/nmimsClg.png"
            alt="Campus"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* LOGO – move to left screen edge, keep same height */}
        <div className="relative z-10 w-full mt-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="bg-white rounded-r-xl shadow-md h-[100px] -mb-5 p-2 flex items-center">
              <Image
                src="/nmims.png"
                alt="NMIMS Logo"
                width={260}
                height={100}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto p-6 sm:10">
          {/* Most Loved */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6  mb-2 font-sm px-8 py-2 rounded-full"
          >
            Most-Loved
          </motion.span>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-[16px] sm:text-[16px] italic font-light"
          >
            Degree in Online Mode
          </motion.p>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-5xl font-[Inter] lg:text-[64px] font-bold -mt-1 leading-tight"
            >
              Master of Business Administration
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-5xl mt-0 mb-10 leading-relaxed"
            >
              NMIMS is one of India’s leading management universities, known for
              its academic excellence and global recognition. Through PAB, you
              get access to its Online MBA a program designed for working
              professionals who want to learn from the best and achieve
              measurable career growth.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 mt-5 md:grid-cols-2 lg:grid-cols-4  gap-y-5 w-full"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center py-6 ${
                    idx !== stats.length - 1
                      ? "md:border-r-2 md:border-white"
                      : ""
                  }`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-200 md:text-3xl font-bold sm:text-base">
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
      <section className="w-full bg-white p-10 pt-0">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl mt-15 lg:text-[64px] font-bold text-[#345895] mb-6">
              About NMIMS
            </h2>

            <p className="text-black leading-relaxed text-sm md:text-[18px] mb-10">
              SVKM's Narsee Monjee Institute of Management was established in
              1981 and was granted Deemed-to-be-University status by the
              University Grants Commission in 2003. With over four decades of
              excellence in education, NMIMS has evolved into a
              multidisciplinary centre of learning known for its strong academic
              foundation and innovative approach. The university provides a rich
              and balanced environment that fosters both intellectual and
              personal growth, while also promoting exposure to research and
              academics. Moreover, it offers students valuable opportunities for
              hands-on learning, enabling them to understand and experience the
              practical aspects of various industry functions.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl overflow-hidden lg:-mr-10">
              <img
                src="/aboutNmims.png"
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
      <section className="w-full font-[Inter] mt-5  p-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[64px] leading-[120%] font-extrabold text-[#345895] text-center lg:mb-10 md:mb-15 mb-6 font-[Inter]">
            A Snapshot of Success
          </h2>

          {/* BLUE BAR */}
          <div className="bg-[#064E92] rounded-3xl md:rounded-4xl lg:rounded-tr-full lg:rounded-bl-full lg:rounded-tl-3xl lg:rounded-br-3xl py-10 px-6 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center text-white">
              {/* STAT 1 */}
              <div>
                <h3 className="text-2xl md:text-4xl lg:text-[64px] font-bold ">
                  <Counter end={25} />%
                </h3>
                <p className="text-sm md:text-[22px] text-white font-bold">
                  Average Salary Growth
                </p>
              </div>

              {/* STAT 2 */}
              <div>
                <h3 className="text-2xl md:text-4xl lg:text-[64px] font-bold ">
                  <Counter end={82000} />
                </h3>
                <p className="text-sm md:text-[22px] text-white font-bold">
                  Strong Global Alumni Network
                </p>
              </div>

              {/* STAT 3 */}
              <div>
                <h3 className="text-2xl md:text-4xl lg:text-[64px] font-bold ">
                  <Counter end={500} />+
                </h3>
                <p className="text-sm md:text-[22px] text-white font-bold">
                  Hiring Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-6xl text-left mx-auto">
          <h2 className="text-xl md:text-2xl font-regular lg:text-[49px] leading-normal text-gray-900">
            <span className="text-red-600 ">
              The 2-year Online Master of Business Administration{" "}
            </span>
            programme is designed to provide working professionals the
            flexibility to pace the programme to fit their schedule, without the
            need to de-prioritise their professional or personal commitments.
          </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <GraduationCap size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#345895] mb-1">
                Learn from faculty that sparks thinking minds
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                NMIMS CDOE academic reputation is upheld by a team of top
                academicians, Ph.D. holders, scholars, industry veterans, and
                practitioners who hold valuable insights about the curriculum
                and the industry.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 ">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <LayoutGrid size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#345895] mb-1">
                Case-Based and Application-oriented Assessment
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                Programme participants are assessed and evaluated for their
                learning in both theoretical and application-based areas, thus
                gauging their ability to analyse and deploy appropriate
                solutions to real-world business problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} />
      

    <section className="w-full bg-white px-4 md:px-16 py-20">
  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-[32px] md:text-[64px] leading-[110%] font-extrabold font-[Inter] text-center text-[#345895] mb-10"
  >
    Syllabus
  </motion.h2>

  {/* MAIN WRAPPER */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="
      bg-[#345895] rounded-[30px]
      p-4 sm:p-6 md:p-12
      flex flex-col lg:flex-row gap-6 md:gap-10
    "
  >

    {/** ------------------------------------------------ */}
    {/** MOBILE 2-COLUMN WRAPPER (LEFT + RIGHT)          */}
    {/** ------------------------------------------------ */}
    <div className="grid grid-cols-2 gap-4 w-full lg:hidden">

      {/* LEFT COLUMN (Subjects) - MOBILE */}
      <div className="col-span-1">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-col w-full gap-2 sm:gap-3 mt-4 items-center">
              {subjects.map((sub) => (
                <motion.button
                  key={sub.id}
                  onClick={() => {
                    setActiveSubject(sub.id);
                    setActiveSemester(1);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={`w-full px-2 py-2 sm:px-3 sm:py-2 rounded-full
                    text-[10px] sm:text-xs md:text-sm font-semibold
                    ${
                      activeSubject === sub.id
                        ? "bg-[#38A169] text-white shadow"
                        : "bg-white text-[#38A169] border-[#38A169] border-dashed border-[2px]"
                    }
                  `}
                >
                  {sub.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (Semesters) - MOBILE */}
      <div className="col-span-1">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 sm:gap-3 w-full mt-4">
            {semesters.map((sem) => (
              <motion.button
                key={sem}
                onClick={() => setActiveSemester(sem)}
                whileHover={{ scale: 1.05 }}
                className={`px-2 py-2 sm:px-3 sm:py-2 rounded-full
                  text-[10px] sm:text-xs md:text-sm font-semibold
                  ${
                    activeSemester === sem
                      ? "bg-[#38A169] text-white shadow"
                      : "bg-white text-[#38A169] border border-[#38A169] border-dashed border-[2px]"
                  }
                `}
              >
                {sem}
                {semSuffix[sem]} Semester
              </motion.button>
            ))}

            {/* DOWNLOAD BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                mt-3 w-full bg-[#4D964F] text-white px-3 py-2 sm:py-3
                rounded-xl text-[10px] sm:text-xs md:text-sm
                bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md
                flex items-center justify-center gap-2
              "
            >
              DOWNLOAD SYLLABUS
              <ChevronRight size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>

    {/** ------------------------------------------------ */}
    {/** DESKTOP LEFT COLUMN (Subjects) - UNCHANGED     */}
    {/** ------------------------------------------------ */}
    <div className="hidden lg:flex w-[30%] flex-col items-center">
      <div className="max-h-[400px] w-[90%]">
        <div className="flex flex-col w-full gap-4 mt-10 items-center">
          {subjects.map((sub) => (
            <motion.button
              key={sub.id}
              onClick={() => {
                setActiveSubject(sub.id);
                setActiveSemester(1);
              }}
              whileHover={{ scale: 1.05 }}
              className={`w-full px-4 py-3 rounded-full font-semibold
                ${
                  activeSubject === sub.id
                    ? "bg-[#38A169] text-white shadow"
                    : "bg-white text-[#38A169] border-[#38A169] border-dashed border-2"
                }`}
            >
              {sub.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>

    {/** ------------------------------------------------ */}
    {/** MIDDLE COLUMN (Topics) - FULL WIDTH ON MOBILE   */}
    {/** ------------------------------------------------ */}
    <div className="w-full flex flex-col mt-8 items-center justify-center lg:w-[40%]">
      <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md relative w-full">

        {/* ICON + LINE */}
        <div className="absolute top-0 bottom-0 flex flex-col items-center">
          <div className="bg-[#345895] text-white p-2 sm:p-3 rounded-full shadow z-10 mt-4 sm:mt-6">
            <ChevronsDown size={16} />
          </div>
          <div className="w-0.5 bg-[#345895] flex-1 mb-4"></div>
        </div>

        {/* TITLE */}
        <h3 className="text-[20px] sm:text-[26px] md:text-3xl font-bold text-[#345895] ml-12 sm:ml-16 mb-3">
          Topics Covered
        </h3>

        {/* TOPICS LIST */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeSubject + '-' + activeSemester}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-3 ml-12 sm:ml-16"
          >
            {topicsData[activeSubject][activeSemester].map((topic, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                className="flex gap-2 sm:gap-3 items-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white group-hover:bg-[#345895] transition"
                >
                  <Check
                    size={12}
                    className="sm:size-16 text-[#345895] group-hover:text-white transition"
                  />
                </motion.div>

                <span className="text-gray-800 text-xs sm:text-sm md:text-base group-hover:text-[#345895] transition">
                  {topic}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

      </div>
    </div>

    {/** ------------------------------------------------ */}
    {/** DESKTOP RIGHT COLUMN (Semesters) - UNCHANGED    */}
    {/** ------------------------------------------------ */}
    <div className="hidden lg:flex w-[30%] flex-col items-start md:items-center mt-10">
      <div className="flex flex-col gap-4 w-full lg:w-[90%]">
        {semesters.map((sem) => (
          <motion.button
            key={sem}
            onClick={() => setActiveSemester(sem)}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-3 rounded-full font-semibold
              ${
                activeSemester === sem
                  ? "bg-[#38A169] text-white shadow"
                  : "bg-white text-[#38A169] border-[#38A169] border-dashed border-2"
              }`}
          >
            {sem}
            {semSuffix[sem]} Semester
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 w-full bg-[#4D964F] text-white px-4 py-4 rounded-2xl bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md flex items-center justify-center gap-4"
        >
          DOWNLOAD SYLLABUS
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>

  </motion.div>
</section>


<section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        <div className="max-w-5xl mx-auto">
          {/* Title animation */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#345895]"
          >
            Eligibility Criteria
          </motion.h2>

          {/* Card container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col md:flex-row max-w-5xl items-center gap-8"
          >
            {/* Left text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700  text-[20px] md:text-3xl font-semibold leading-relaxed md:w-3/5"
            >
              Bachelor's Degree (10+2+3) in any discipline from recognized University or an equivalent degree recognised by Association of Indian Universities (AIU) with a minimum of 55% and 3 + years of Work Experience (50% for SC/ST/OBC/PwD).
            </motion.p>

            {/* Right image animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/3 flex justify-center"
            >
              <img
                src="/office.png"
                alt="Eligibility Illustration"
                className="w-64 h-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <LearningApproach
        title="Learning Approach"
        subtitle="Get a work-life-study balance with this program designed for working professionals delivered via latest learning management systems."
        cards={learningCards}
        ctaText="Ready to Learn ? Click Here"
      />

      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter] relative">
        {/* Faded Background Heading */}
        <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[30px] md:text-[60px] lg:text-[64px] text-[rgba(6, 78, 146, 0.1)] opacity-90 select-none tracking-tight whitespace-nowrap">
          EXAMINATION PROCESS
        </h1>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[56px] lg:text-[64px] font-bold text-center text-[#345895] mb-6"
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
            The NMIMS Online MBA follows a structured and transparent
            examination process designed to evaluate learners through continuous
            assessments and end-term evaluations.
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
              <h3 className=" text-md md:text-2xl font-semibold italic mb-5">
                Exam Slot Booking
              </h3>

              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-none">✦</span>
                  <p className="text-left text-lg lg:text-2xl mb-6">
                    Learners must book their examination slots through the NMIMS
                    Student Portal.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-no">✦</span>
                  <p className="text-lg lg:text-2xl text-left">
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
              <h3 className="text-lg md:text-2xl font-semibold italic mb-5">
                Exam Slot Timings
              </h3>

              <p className="text-lg lg:text-2xl max-w-[380] mb-6 text-center">
                For end-term examinations, NMIMS provides three available slots:
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

              <p className="text-lg lg:text-2xl max-w-[380] text-center">
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
          <h2 className="text-[24px] md:text-[40] font-bold italic text-[#345895] mb-12 text-center">
            ASSESSMENT STRUCTURE (100 MARKS)
          </h2>

          {/* Two Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            {/* Left Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                Internal Assessment-60 Marks
              </div>
            </div>

            {/* Right Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                External Assessment-40 Marks
              </div>
            </div>
          </div>

          {/* Passing Criteria Box */}
          <div className="border border-[#e5e7eb] rounded-lg p-5 mt-15 bg-white">
            <p className="font-semibold text-black mb-1">Passing Criteria</p>
            <ul className="list-disc pl-8 text-[#345895] text-sm md:text-lg">
              <li>
                A candidate must secure a minimum of 40% to successfully pass
                the course
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CareerServices />
    
     <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
  <div className="px-2 w-full">
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

      {/* LEFT SIDE TEXT */}
      <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-[#064E92] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4">
          Fees Structure
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-6">
          Pay conveniently to launch your leadership career
        </p>

        {/* CTA visible only on large screens */}
        <button className="hidden lg:flex text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit">
          Compare all Plans
        </button>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="w-full lg:w-[35%] flex justify-center">
        <FeesCarousel />
      </div>

      {/* CTA below carousel on mobile only */}
      <button className="lg:hidden text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
        Compare all Plans
      </button>

    </div>
  </div>
</section>



      <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-[Inter]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#064E92]/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
        >
          {/* Heading */}
          <h2 className="text-center text-black text-2xl md:text-[40px] font-bold mb-6">
            Note
          </h2>

          {/* Sub-heading */}
          <p className="text-black text-sm font-semibold md:text-base mb-6 leading-relaxed">
            Note: To get a detailed understanding of the fee structure, contact
            a student counsellor.
          </p>

          {/* Bullet Points */}
          <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
            <li>
              Admission Processing Fee of ₹1,200/– applicable for all
              admissions.
            </li>
            <li>
              An initial amount of ₹10,000/– from the program fee will be
              collected at the time of registration.
            </li>
            <li>Exam fee : ₹800/– per subject, per attempt</li>
            <li>Project fee : ₹800/– per attempt</li>
            <li>
              Students also have the option to pay the full program fee of
              ₹196,000/– if they prefer.
            </li>
            <li>
              The above-mentioned fee structure is subject to change at the
              discretion of the University.
            </li>
            <li>
              Any payment made via Demand Draft should be made in favour of
              “SVKM’s NMIMS’’ payable at Mumbai.
            </li>
            <li>
              Now avail loan facility to pay fees for the Program even without a
              credit card
            </li>
            <li>
              Finance Options Available with No Cost Emi*. Please contact a
              counsellor to know more.
            </li>
          </ul>

          {/* Scholarship Policy */}
          <div className="mt-8">
            <h3 className="text-black text-lg md:text-xl font-bold mb-2">
              Scholarship Policy
            </h3>

            <p className="text-black text-sm md:text-base leading-relaxed">
              The University offers special incentives to our armed forces,
              Defence Personnel and their immediate family with a 20% Defence
              Scholarship on the program fee.
            </p>
          </div>
        </motion.div>
      </section>

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

      <section className="w-full px-6 md:px-18">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-5">

      <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">Degree Sample</p>

      <h2 className="text-[#345895] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
        NMIMS Online <br />
        MBA <br />
        Certificate
      </h2>

      <p className="text-[#3C3C43] max-w-[350px] text-base">
        Highlight your professional success with official certificate from
        NMIMS NCDOE
      </p>

      {/* IMAGE that appears ONLY on mobile, above CTA */}
      <div className="md:hidden flex justify-center">
        <img
          src="/office.png"
          alt="Certificate Preview"
          className="w-full max-w-xs rounded-lg shadow-sm"
        />
      </div>

      {/* CTA BUTTON */}
      <button className="bg-[#4D964F] text-white font-medium text-sm px-10 py-2 rounded-lg bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md shadow-[#1C361D] transform hover:scale-105 duration-200 flex items-center justify-center">
        Know more
      </button>

    </div>

    {/* RIGHT IMAGE (visible only on md+ screens) */}
    <div className="hidden md:flex justify-center md:justify-end">
      <img
        src="/office.png"
        alt="Certificate Preview"
        className="w-full max-w-sm rounded-lg shadow-sm"
      />
    </div>

  </div>
</section>


      <section className="w-full bg-white font-[Inter] px-6 md:px-12 lg:px-20 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10"
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            {/* Small Header */}
            <h4 className="text-black text-xl font-medium mt-2 md:text-base">
              What will you gain?
            </h4>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-3xl lg:text-[42px] font-bold text-[#345895] leading-tight mb-8">
              This isn't just another degree it's a<br />
              transformation in how you think,
              <br />
              work, and grow.
            </h2>

            {/* Points */}
            <div className="flex flex-col gap-6">
              {/* Point 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#345895] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <Briefcase size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Strategic Thinking
                  </h3>
                  <p className="text-gray-600 text-sm max-w-120 md:text-base">
                    Develop the ability to break down complex business problems
                    and make confident, data-backed decisions.
                    <br />
                    Learn to think ahead, anticipate challenges, and create
                    strategies that drive long-term success.
                  </p>
                </div>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#345895] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <Users size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Practical Business Insight
                  </h3>
                  <p className="text-gray-600 text-sm max-w-120 md:text-base">
                    Go beyond classroom theory with hands-on projects, case
                    studies, and expert interactions.
                    <br />
                    Understand how real companies operate, make decisions, and
                    solve everyday challenges.
                  </p>
                </div>
              </motion.div>

              {/* Point 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-7"
              >
                <div className="flex items-center justify-center bg-[#345895] text-white rounded-full w-15 h-15 shrink-0 p-3">
                  <GraduationCap size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Career Acceleration
                  </h3>
                  <p className="text-gray-600 text-sm max-w-120 md:text-base">
                    Gain the knowledge, credibility, and skillset that opens
                    doors to higher roles and better opportunities.
                    <br />
                    Fast-track your professional growth with a qualification
                    that employers trust.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-[70%] md:w-[40%] lg:w-[35%] max-w-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=" hidden md:flex md:-mx-20 mt-40 md:mr-10"
            >
              <Image
                src="/nmimsMbaGain.png"
                alt="what will you Gain"
                width={523}
                height={408}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full bg-white py-20 md:px-12 lg:px-20">
        <div className="w-full md:bg-[#345895] rounded-4xl py-20 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] md:p-12 max-w-7xl mx-auto"
          >
            {/* Title */}
            <div className="text-center md:mb-4 pb-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                    text-[#345895] 
                      font-bold font-[Inter] 
                      text-[32px] md:text-5xl lg:text-[64px] 
                      leading-tight"
              >
                Career Opportunities
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-black text-[18px] md:text-[20px] max-w-2xl mx-auto md:mb-12"
            >
              The NMIMS Online MBA opens doors to varied career paths. Built on
              practical learning and industry engagement, it equips you with the
              skills and network needed to stand out in a competitive job market
              and move confidently into leadership roles.
            </motion.p>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <Image
                  src="/nmimsMbaCareer.png"
                  width={400}
                  height={400}
                  alt="Career Opportunities"
                  className="
    w-full 
    max-w-[220px]       /* Smaller on mobile */
    sm:max-w-[260px]  
    md:max-w-[320px]   /* Medium screens */
    lg:max-w-[380px]   /* Large screens */
    object-contain
    mx-auto
  "
                />
              </motion.div>

              {/* RIGHT LIST */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                {[
                  "Senior Project Manager",
                  "Director of Business Development",
                  "Policy Analyst",
                  "Financial Advisor",
                  "Investment Analyst",
                  "Human Resources Manager",
                ].map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#4D964F] flex items-center justify-center">
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
                  className="
              w-[200px] 
              mt-6 py-3 px-6 
              rounded-lg 
              text-white text-sm 
              bg-linear-to-r from-[#4D964F] to-[#193019]
              shadow-md shadow-[#1C361D]/40
            "
                >
                  Know more
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ServicesByPAB />

  <section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
  {/* TITLE */}
  <h2 className="text-[#345895] font-extrabold text-center text-[32px] md:text-[48px] lg:text-[64px] mb-8">
    Important Dates
  </h2>

  {/* TABLE WRAPPER */}
  <div className="w-full">
    <table className="w-full border-collapse table-fixed">
      {/* HEADER */}
      <thead>
        <tr className="bg-[#4D964F] text-white text-[12px] md:text-[16px]">
          <th className="py-3 px-2 text-left rounded-l-lg">PARTICULARS</th>
          <th className="py-3 px-2 text-left rounded-r-lg">DATES</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="divide-y divide-[#D6D6D6]">
        {[
          { p: "Registration Starts", d: "22nd September, 2025" },
          {
            p: "Admission Without Late Fees",
            d: "22nd September, 2025 To 31st January, 2026",
          },
          {
            p: "Admission With Late Fees Of Rs. 500/-",
            d: "1st February, 2026 To 28th February, 2026",
          },
          {
            p: "Admission With Late Fees Of Rs. 1000/-",
            d: "1st March, 2026 To 16th March, 2026",
          },
          { p: "Closure Of Registration", d: "16th March, 2026" },
          { p: "Re-Registration Starts", d: "22nd September, 2025" },
          {
            p: "Re-Registration Without Late Fees",
            d: "22nd September, 2025 To 31st January, 2026",
          },
          {
            p: "Re-Registration With Late Fees Of Rs. 1000/-",
            d: "1st February, 2026 To 16th March, 2026",
          },
          { p: "Last Date Of Admission", d: "16th March, 2026" },
        ].map((row, i) => (
          <tr
            key={i}
            className="text-[10px] text-black sm:text-[12px] md:text-[14px] lg:text-[16px]"
          >
            <td className="py-3 px-2 wrap-break-words">{row.p}</td>
            <td className="py-3 px-2 wrap-break-words">{row.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


      <section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        <div className="max-w-5xl mx-auto">
          {/* Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#345895] px-6 py-3 flex items-center justify-center rounded-md"
          >
            Lateral Admission MBA (Online)
          </motion.h2>

          {/* FIRST SECTION */}
          <div className="mt-10">
            <p className="text-gray-800 text-lg leading-relaxed font-semibold">
              Below mentioned student will be allowed to take Lateral admission
              to Master of Business Administration (Online) program:
            </p>

            <ul className="mt-4 space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>
                1. Students enrolled for CBM program in July 2019 or later and
                successfully completed the CBM program will be admitted to
                Semester 2 of Master of Business Administration program
                (Online). Waiver will be given to the common subjects and
                Additional subjects will be added in Semester 2.
              </li>

              <li>
                2. Students enrolled for DBM program in July 2019 or later and
                successfully completed the DBM program will be admitted to
                Semester 3 of Master of Business Administration program
                (Online). Waiver will be given to the common subjects and
                Additional subjects will be added in Semester 3.
              </li>

              <li>
                3. Student enrolled for Diploma program in July 2019 or later
                and took an Exit and got CBM certificate issued will be admitted
                to Semester 2 of Master of Business Administration program
                (Online). Waiver will be given to the common subjects and
                Additional subjects will be added in Semester 2.
              </li>

              <li>
                4. Students enrolled for any Diploma program other than DBM in
                July 2019 or later and successfully completed the Diploma
                program will be admitted to Semester 2 of Master of Business
                Administration program (Online). Waiver will be given to the
                common subjects and Additional subjects will be added in
                Semester 2.
              </li>
            </ul>
          </div>

          {/* SECOND SECTION */}
          <div className="mt-10">
            <p className="text-gray-800 text-lg leading-relaxed font-semibold">
              Below mentioned student will not be allowed to take Lateral
              admission to Master of Business Administration (Online):
            </p>

            <ul className="mt-4 space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>1. Any student enrolled for any program prior July 2019.</li>

              <li>
                2. Students enrolled for PG program in July 2019 or later and
                completed the program.
              </li>

              <li>
                3. Students enrolled for PG program in July 2019 or later and
                took an Exit from the program.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}

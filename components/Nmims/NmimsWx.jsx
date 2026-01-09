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
  ChevronsDown,
  ChevronRight,
  ArrowRight,
  FileClock,
  BookCheck,
  Headset,
  FileUser,
  Blocks,
  Move,
  BookText,
  Option,
  UserLock,
  ListMinus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import CareerServices from "../NmimsSection/CareerServices";
import Enrollment from "../NmimsSection/Enrollment";
import Faculties from "../NmimsSection/Faculties";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    return <span ref={ref}>{value}</span>;
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

  const steps = [
    {
      num: "01",
      title: "Registration",
      desc: "Register online at online.nmims.edu. Post registeration, a counsellor will get in touch with you",
    },
    {
      num: "02",
      title: "Document Submission",
      desc: "Upload the relevant Gazette Attested photocopies of the academic and KYC documents.",
    },
    {
      num: "03",
      title: "Fee Submission",
      desc: "You may confirm your admission by paying the fee online, or by sending a demand draft in favour of SVKM’S NMIMS Payable at Mumbai.",
    },
    {
      num: "04",
      title: "Confirmation",
      desc: "On Document approval, Payment approval & Student verification your admission will be confirmed, and a 'student number' will be issued to you by the University.",
    },
  ];

  const subjects = [
    { id: 1, name: "Marketing Management" },
    { id: 2, name: "Leadership And Strategy" },
    { id: 3, name: "Applied Finance" },
    { id: 4, name: "Digital Marketing" },
    { id: 5, name: "Operation and Supply Chain Management" },
  ];

  const terms = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const getTermLabel = (term) => {
    if (term === 0) return "Foundation (HSBE)";
    return `${ordinal(term)} Term`;
  };

  const topicsData = {
    0: [
      "Management Communication",
      "Financial Accounting",
      "Quantitative Methods",
      "Mathematics for Management",
      "Finance",
      "Spreadsheet Modelling - Excel 2013",
    ],
    1: {
      0: [
        "Management Communication",
        "Financial Accounting",
        "Quantitative Methods",
        "Mathematics for Management",
        "Finance",
        "Spreadsheet Modelling - Excel 2013",
      ],
      1: [
        "Financial accounting: Information for Decisions",
        "Organisational Behaviour",
        "Marketing Management",
        "Business Statistics for Decision Makers",
        "Quantitative Methods Online Course - HBR",
        "Spreadsheet Modeling Online Course: Excel 2013 - HBR",
        "Financial Accounting Online Course - HBR",
      ],
      2: [
        "Information Systems for Managers",
        "Operations Management",
        "Business Communication",
        "Corporate Finance",
        "Management Communication: Complete Online Course - HBR",
        "Mathematics for Management Online Course - HBR",
        "Finance Online Course - HBR",
      ],
      3: [
        "Managerial Economics",
        "Strategic Management",
        "Consumer Behaviour",
        "Customer Relationship Management",
        "Strategic Brand Management",
        "Marketing in a Digital World",
        "Marketing and Web Social Media Analytics",
        "Crafting and Providing Marketing Services",
        "Integrated Marketing Communications",
        "Sales Management",
        "Marketing Research",
      ],
      4: [
        "Managerial Economics",
        "Strategic Management",
        "Consumer Behaviour",
        "Customer Relationship Management",
        "Strategic Brand Management",
        "Marketing in a Digital World",
        "Marketing and Web Social Media Analytics",
        "Crafting and Providing Marketing Services",
        "Integrated Marketing Communications",
        "Sales Management",
        "Marketing Research",
      ],
      5: [
        "Managerial Economics",
        "Strategic Management",
        "Consumer Behaviour",
        "Customer Relationship Management",
        "Strategic Brand Management",
        "Marketing in a Digital World",
        "Marketing and Web Social Media Analytics",
        "Crafting and Providing Marketing Services",
        "Integrated Marketing Communications",
        "Sales Management",
        "Marketing Research",
      ],
      6: ["Capstone Project"],
      7: ["Project or Industry Experience "],
      8: ["Project or Industry Experience"],
    },
    2: {
      0: [
        "Management Communication",
        "Financial Accounting",
        "Quantitative Methods",
        "Mathematics for Management",
        "Finance",
        "Spreadsheet Modelling - Excel 2013",
      ],
      1: [
        "Financial accounting: Information for Decisions",
        "Organisational Behaviour",
        "Marketing Management",
        "Business Statistics for Decision Makers",
        "Quantitative Methods Online Course - HBR",
        "Spreadsheet Modeling Online Course: Excel 2013 - HBR",
        "Financial Accounting Online Course - HBR",
      ],
      2: [
        "Information Systems for Managers",
        "Operations Management",
        "Business Communication",
        "Corporate Finance",
        "Management Communication: Complete Online Course - HBR",
        "Mathematics for Management Online Course - HBR",
        "Finance Online Course - HBR",
      ],
      3: [
        "Managerial Economics",
        "Strategic Management",
        "Strategic HRM : Gaining a Competitive Advantage",
        "Managing Organization Change",
        "Strategic Performance Management",
        "Innovation by Design: Strategic Thinking & Entrepreneurial Leadership",
        "Strategic Knowledge Management",
        "Strategic Business Process Management",
        "Art of Leadership",
        "HR Analytics",
      ],
      4: [
        "Managerial Economics",
        "Strategic Management",
        "Strategic HRM : Gaining a Competitive Advantage",
        "Managing Organization Change",
        "Strategic Performance Management",
        "Innovation by Design: Strategic Thinking & Entrepreneurial Leadership",
        "Strategic Knowledge Management",
        "Strategic Business Process Management",
        "Art of Leadership",
        "HR Analytics",
      ],
      5: [
        "Managerial Economics",
        "Strategic Management",
        "Strategic HRM : Gaining a Competitive Advantage",
        "Managing Organization Change",
        "Strategic Performance Management",
        "Innovation by Design: Strategic Thinking & Entrepreneurial Leadership",
        "Strategic Knowledge Management",
        "Strategic Business Process Management",
        "Art of Leadership",
        "HR Analytics",
      ],
      6: ["Capstone Project"],
      7: ["Project or Industry Experience "],
      8: ["Project or Industry Experience"],
    },
    3: {
      0: [
        "Management Communication",
        "Financial Accounting",
        "Quantitative Methods",
        "Mathematics for Management",
        "Finance",
        "Spreadsheet Modelling - Excel 2013",
      ],
      1: [
        "Financial accounting: Information for Decisions",
        "Organisational Behaviour",
        "Marketing Management",
        "Business Statistics for Decision Makers",
        "Quantitative Methods Online Course - HBR",
        "Spreadsheet Modeling Online Course: Excel 2013 - HBR",
        "Financial Accounting Online Course - HBR",
      ],
      2: [
        "Information Systems for Managers",
        "Operations Management",
        "Business Communication",
        "Corporate Finance",
        "Management Communication: Complete Online Course - HBR",
        "Mathematics for Management Online Course - HBR",
        "Finance Online Course - HBR",
      ],
      3: [
        "Managerial Economics",
        "Strategic Management",
        "Quantitative Methods : Concepts & Applications",
        "Financial Reporting and Analysis",
        "Security Analysis and Portfolio Management I",
        "Fraud and Risk Analytics",
        "Security Analysis and Portfolio Management II",
        "Financial Engineering: Derivatives ",
        "Personal Finance: Turning Money into Wealth",
        "Managerial Accounting: Decision Making and Performance Management",
      ],
      4: [
        "Managerial Economics",
        "Strategic Management",
        "Quantitative Methods : Concepts & Applications",
        "Financial Reporting and Analysis",
        "Security Analysis and Portfolio Management I",
        "Fraud and Risk Analytics",
        "Security Analysis and Portfolio Management II",
        "Financial Engineering: Derivatives ",
        "Personal Finance: Turning Money into Wealth",
        "Managerial Accounting: Decision Making and Performance Management",
      ],
      5: [
        "Managerial Economics",
        "Strategic Management",
        "Quantitative Methods : Concepts & Applications",
        "Financial Reporting and Analysis",
        "Security Analysis and Portfolio Management I",
        "Fraud and Risk Analytics",
        "Security Analysis and Portfolio Management II",
        "Financial Engineering: Derivatives ",
        "Personal Finance: Turning Money into Wealth",
        "Managerial Accounting: Decision Making and Performance Management",
      ],
      6: ["Capstone Project"],
      7: ["Project or Industry Experience "],
      8: ["Project or Industry Experience"],
    },
    4: {
      0: [
        "Management Communication",
        "Financial Accounting",
        "Quantitative Methods",
        "Mathematics for Management",
        "Finance",
        "Spreadsheet Modelling - Excel 2013",
      ],
      1: [
        "Financial accounting: Information for Decisions",
        "Organisational Behaviour",
        "Marketing Management",
        "Business Statistics for Decision Makers",
        "Quantitative Methods Online Course - HBR",
        "Spreadsheet Modeling Online Course: Excel 2013 - HBR",
        "Financial Accounting Online Course - HBR",
      ],
      2: [
        "Information Systems for Managers",
        "Operations Management",
        "Business Communication",
        "Corporate Finance",
        "Management Communication: Complete Online Course - HBR",
        "Mathematics for Management Online Course - HBR",
        "Finance Online Course - HBR",
      ],
      3: [
        "Managerial Economics",
        "Strategic Management",
        "Consumer Behaviour",
        "Marketing and Web Social Media Analytics",
        "Social Media and Content Marketing",
        "Integrated Marketing Communication",
        "Search Engine Optimisation & Search Engine Marketing",
        "Mobile and Email Marketing",
      ],
      4: [
        "Managerial Economics",
        "Strategic Management",
        "Consumer Behaviour",
        "Marketing and Web Social Media Analytics",
        "Social Media and Content Marketing",
        "Integrated Marketing Communication",
        "Search Engine Optimisation & Search Engine Marketing",
        "Mobile and Email Marketing",
      ],
      5: [
        "Managerial Economics",
        "Strategic Management",
        "Consumer Behaviour",
        "Marketing and Web Social Media Analytics",
        "Social Media and Content Marketing",
        "Integrated Marketing Communication",
        "Search Engine Optimisation & Search Engine Marketing",
        "Mobile and Email Marketing",
      ],
      6: ["Capstone Project"],
      7: ["Project or Industry Experience "],
      8: ["Project or Industry Experience"],
    },
    5: {
      0: [
        "Management Communication",
        "Financial Accounting",
        "Quantitative Methods",
        "Mathematics for Management",
        "Finance",
        "Spreadsheet Modelling - Excel 2013",
      ],
      1: [
        "Financial accounting: Information for Decisions",
        "Organisational Behaviour",
        "Marketing Management",
        "Business Statistics for Decision Makers",
        "Quantitative Methods Online Course - HBR",
        "Spreadsheet Modeling Online Course: Excel 2013 - HBR",
        "Financial Accounting Online Course - HBR",
      ],
      2: [
        "Information Systems for Managers",
        "Operations Management",
        "Business Communication",
        "Corporate Finance",
        "Management Communication: Complete Online Course - HBR",
        "Mathematics for Management Online Course - HBR",
        "Finance Online Course - HBR",
      ],
      3: [
        "Managerial Economics",
        "Strategic Management",
        "Supply Chain Management",
        "Service Operations Management",
        "Supply Chain and Logistics Analytics",
        "Total Quality Management",
        "Procurement Management",
        "Logistics Management",
        "Project Management",
      ],
      3: [
        "Managerial Economics",
        "Strategic Management",
        "Supply Chain Management",
        "Service Operations Management",
        "Supply Chain and Logistics Analytics",
        "Total Quality Management",
        "Procurement Management",
        "Logistics Management",
        "Project Management",
      ],
      4: [
        "Managerial Economics",
        "Strategic Management",
        "Supply Chain Management",
        "Service Operations Management",
        "Supply Chain and Logistics Analytics",
        "Total Quality Management",
        "Procurement Management",
        "Logistics Management",
        "Project Management",
      ],
      5: [
        "Managerial Economics",
        "Strategic Management",
        "Supply Chain Management",
        "Service Operations Management",
        "Supply Chain and Logistics Analytics",
        "Total Quality Management",
        "Procurement Management",
        "Logistics Management",
        "Project Management",
      ],
      6: ["Capstone Project"],
      7: ["Project or Industry Experience "],
      8: ["Project or Industry Experience"],
    },
  };
  const [activeSubject, setActiveSubject] = useState(1);
  const [activeterms, setActiveterms] = useState(0);
  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const faqs = [
    {
      q: "What makes the MBA (WX) – Marketing Management suitable for working professionals?",
      a: "The program is built around a flexible online structure, allowing professionals to upskill without interrupting their careers. Live sessions, recorded lectures, and self-paced learning make it easy to balance work and study.",
    },
    {
      q: "How is the MBA (WX) different from a regular online MBA?",
      a: "MBA (WX) is an executive-level program created specifically for experienced professionals. It offers advanced coursework, leadership-focused learning, and dual specialisation options—features typically found in premium on-campus MBA programs.",
    },
    {
      q: " Does the program include real-world industry exposure?",
      a: "Yes. Learners engage in case studies, projects, simulations, and an industry or capstone project. These components help professionals apply concepts directly to workplace scenarios.",
    },
    {
      q: " Is there any campus immersion or offline component?",
      a: "The program includes optional on-campus immersion sessions, providing opportunities to network with faculty, industry experts, and peers from diverse professional backgrounds.",
    },
    {
      q: "What learning support is offered during the program?",
      a: "Students receive continuous academic support through live classes, discussion forums, faculty consultations, and a dedicated student portal with 24/7 access to study material and resources.",
    },
  ];
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

  const topFaculty = [
    {
      name: "Prof. Aishwarya Nagpal",
      title: "Ph.D",
      image: "/nmims/bcom/faculties/aishwarya.png",
    },
    {
      name: "Dr. Brinda Sampat",
      title: "Ph.D",
      image: "/nmims/mba/faculties/brinda.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Prof. Jigar Shah",
      title: "MBA General Management",
      image: "/nmims/bcom/faculties/jigar.png",
    },
    {
      name: "Dr. Chhavi Taneja",
      title: "Ph.D Master of Business Eco",
      image: "/nmims/mba/faculties/chhavi.png",
    },
    {
      name: "Prof. Abhishek Mani",
      title: "MBA in Finance",
      image: "/nmims/mba/faculties/abhishek.png",
    },
    {
      name: "Dr. Arun Kohli",
      title: "Ph.D",
      image: "/nmims/mba/faculties/arun.png",
    },
  ];

  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "8", label: "Terms" },
    { value: "4", label: "Years Validity" },
    { value: "IA + TEE", label: "Evaluation" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/nmims/nmimsUniv.png"
            alt="Campus"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />
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
            className="inline-block bg-[#FFB901] text-white text-[18px] sm:text-[18px] mt-6  mb-2 font-sm px-4 py-1 rounded-full"
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
              className="text-white text-4xl sm:text-5xl md:text-5xl font-[Inter] lg:text-[62px] font-bold -mt-1 leading-tight"
            >
              Master of Business Administration (WX)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
            >
              The MBA (WX) Executive Program brings the prestige and rigour of a
              campus MBA directly to working professionals through a flexible
              learning model. It develops strategic, insightful leaders capable
              of influencing decisions and creating measurable value in the
              corporate sphere.
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
                  className={`text-center py-6 
  ${idx % 2 === 0 ? "md:border-r-2 md:border-white" : ""} 
  ${idx !== stats.length - 1 ? "lg:border-r-2 lg:border-white" : ""}
`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-200 text-[16px] md:text-[22px] font-bold sm:text-base">
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
              <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2  bg-[#3D077E] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                   transition-all duration-300 ease-out
                   hover:scale-105 hover:shadow-lg
                   active:scale-100 text-white px-6 py-3 rounded-lg hover:bg-blue-950 transition-all duration-300 font-medium">
                             Download Brochure
                             <Download size={20} />
                           </button>
             
                           <button onClick={() => setIsModalOpen(true)} className=" bg-[#F6A410] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                   transition-all duration-300 ease-out
                   hover:scale-105 hover:shadow-lg
                   active:scale-100 flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-medium">
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
            <h2 className="text-[32px] md:text-4xl mt-15 lg:text-[64px] font-bold text-[#270652] mb-6">
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
            <div className="max-w-7xl overflow-hidden md:-mr-10">
              <img
                src="/nmims/aboutNmims.png"
                alt="Students"
                className="w-full h-full rounded-2xl md:rounded-bl-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
     {/* ======= SNAPSHOT SECTION ======= */}
          <section className="w-full md:mt-16  px-4 md:px-10 lg:px-20 font-[Inter]">
            <div className="max-w-7xl mx-auto">
              {/* HEADING */}
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[28px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[120%] font-extrabold text-[#270652] mb-3 md:mb-8 text-center"
              >
                A Snapshot of Success
              </motion.h2>
              {/* BLUE BAR */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#3C087e]/5 rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-full py-4 sm:py-6 md:py-10 px-8 sm:px-10 md:px-16"
              >
                {/* ALWAYS 3 COLUMNS */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center text-[#3C087E]">
                  {/* STAT 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold">
                      <Counter end={25} />%
                    </h3>
                     <p className="text-[8px] md:text-[16px] xl:text-[22px] md:text-sm font-bold opacity-90 leading-tight">
                      Average Salary Growth
                    </p>
                  </motion.div>
    
                  {/* STAT 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold">
                      <Counter end={82000} />
                    </h3>
                     <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                      Strong Global Alumni Network
                    </p>
                  </motion.div>
    
                  {/* STAT 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold">
                      <Counter end={500} />+
                    </h3>
                     <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                      Hiring Partners
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

      <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-6xl text-left mx-auto">
          <h2 className="text-xl md:text-2xl font-regular lg:text-[42px] leading-normal text-gray-900">
            <span className="text-red-600 ">
              The MBA (WX) brings campus-level prestige and rigour{" "}
            </span>
            to working professionals through a flexible model, shaping strategic
            leaders who drive impact and value.
          </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <Blocks size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#270652] mb-4">
                Build your academic forte
              </h3>
              <ul className="text-gray-700 text-sm lg:text-[16px] leading-relaxed list-disc ml-5">
                <li>Modules from Harvard Business Publishing Education</li>
                <li>Robust Curriculum</li>
                <li>
                  Internal Assessment & Term End Examinations for enhanced
                  retention
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <BookText size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#270652] mb-4">
                2 years of experiential learning
              </h3>
              <ul className="text-gray-700 text-sm lg:text-[16px] leading-relaxed list-disc ml-5">
                <li>On Campus Program Immersion Capstone</li>
                <li>Project for hands-on learning</li>
                <li>Project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full bg-white px-4 md:px-16 py-20 font-[Inter]">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[64px] leading-[110%] font-extrabold text-center text-[#270652] mb-10"
        >
          Syllabus
        </motion.h2>

        {/* MAIN WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
              bg-[#3C087E]/10 rounded-[30px]
              p-4 sm:p-6 md:p-12
              flex flex-col xl:flex-row gap-6 md:gap-10
            "
        >
          {/* ================= MOBILE SUBJECTS + SEMESTERS ================= */}
          <div className="grid grid-cols-2 gap-10 md:gap-20 lg:gap-40 w-full xl:hidden">
            {/* SUBJECTS */}
            <div className="flex flex-col">
              <div className="max-h-[140px] overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-2">
                  {subjects.map((sub) => (
                    <motion.button
                      key={sub.id}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        setActiveSubject(sub.id);
                        setActiveterms(0);
                      }}
                      className={`px-3 py-2 rounded-full text-xs font-semibold
                          ${
                            activeSubject === sub.id
                             ? "bg-[#3C087E] text-white shadow"
                                : "bg-white text-[#3C087E] border-[#3C087E] border-dashed border-2"
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
                  {terms.map((term) => (
                    <motion.button
                      key={term}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveterms(term)}
                      className={`px-3 py-2 rounded-full text-xs font-semibold
                          ${
                            activeterms === term
                              ? "bg-[#3C087E] text-white shadow"
                                : "bg-white text-[#3C087E] border-[#3C087E] border-dashed border-2"
                             }`}
                    >
                      {getTermLabel(term)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* DOWNLOAD BUTTON */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                className="
                    mt-4  bg-[#3C087E]/10
                    text-white px-2 py-2 rounded-xl text-[10px]
                    shadow-md flex items-center justify-center gap-2
                  "
              >
                DOWNLOAD SYLLABUS
                <ChevronRight size={14} />
              </motion.button>
            </div>
          </div>

          {/* ================= DESKTOP SUBJECTS ================= */}
          <div className="hidden xl:flex w-[30%] justify-center">
            <div className="max-h-100 overflow-y-auto no-scrollbar w-[90%] flex flex-col gap-4 mt-10">
              {subjects.map((sub) => (
                <motion.button
                  key={sub.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setActiveSubject(sub.id);
                    setActiveterms(0);
                  }}
                  className={`px-4 py-3 rounded-full font-semibold
                      ${
                        activeSubject === sub.id
                          ? "bg-[#3C087E] text-white shadow"
                          : "bg-white text-[#3C087E] border-[#3C087E] border-dashed border-2"
                            }`}
                >
                  {sub.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ================= TOPICS ================= */}
          <div className="w-full xl:w-[40%] flex justify-center mt-6">
            <div className="bg-white rounded-xl p-6 shadow-md relative w-full">
              {/* ICON LINE */}
              <div className="absolute top-0 bottom-0 left-6 flex flex-col items-center">
                <div className="bg-[#270652] text-white p-2 rounded-full mt-6 z-10">
                  <ChevronsDown size={16} />
                </div>
                <div className="w-0.5 bg-[#270652] flex-1 mb-4"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-[#270652] ml-16 mb-4">
                Topics Covered
              </h3>

              {/* TOPICS LIST */}
              <AnimatePresence mode="wait">
                <motion.ul
                  key={`${activeSubject}-${activeterms}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3 ml-16"
                >
                  {topicsData[activeSubject][activeterms].map((topic, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#270652] flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm md:text-base text-gray-800">
                        {topic}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>

          {/* ================= DESKTOP TERMS ================= */}
          <div className="hidden xl:flex w-[30%] flex-col items-center mt-10">
            <div className="max-h-63 overflow-y-auto no-scrollbar w-[90%] flex flex-col gap-4">
              {terms.map((term) => (
                <motion.button
                  key={term}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveterms(term)}
                  className={`px-4 py-3 rounded-full font-semibold
                      ${
                        activeterms === term
                          ? "bg-[#3C087E] text-white shadow"
                                : "bg-white text-[#3C087E] border-[#3C087E] border-dashed border-2"
                           
                      }`}
                >
                  {getTermLabel(term)}
                </motion.button>
              ))}
            </div>

            {/* DOWNLOAD BUTTON */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              className="
                  mt-6 w-[90%]
                  bg-[#F6A410]
                  text-white px-3 py-4 rounded-2xl
                  shadow-lg flex items-center justify-center gap-4
                "
            >
              DOWNLOAD SYLLABUS
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          {/* Title animation */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
          >
            Eligibility Criteria
          </motion.h2>

          {/* Card container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col md:flex-row max-w-7xl items-center gap-20"
          >
            {/* Left text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black  text-[20px] md:text-3xl font-medium leading-relaxed md:w-3/5"
            >
              Bachelor’s Degree (10+2+3) in any discipline from recognized
              University or an equivalent degree recognised by Association of
              Indian Universities (AIU) with a minimum of 55% and 3 + years of
              Work Experience (50% for SC/ST/OBC/PwD).
            </motion.p>

            {/* Right image animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-[40%] w-full flex justify-end pr-0 md:pr-0"
            >
              <img
                src="/nmims/nmimsEligibility.png"
                alt="Eligibility Illustration"
                className="w-full max-w-[420px] md:max-w-[520px] h-auto rounded-xl object-contain"
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
        onCtaClick={() => setIsModalOpen(true)}
      />

      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter] relative">
        {/* Faded Background Heading */}
        <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[30px] md:text-[60px] lg:text-[64px] text-[rgba(6,78,146,0.1)] select-none tracking-tight whitespace-nowrap">
          EXAMINATION PROCESS
        </h1>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[56px] lg:text-[64px] font-bold text-center text-[#270652] mb-6"
          >
            EXAMINATION PROCESS
          </motion.h2>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-14"
          >
            The NMIMS Online MBA (WX) follows a structured and transparent
            examination process designed to evaluate learners through continuous
            assessments and end-term evaluations.
          </motion.p>

          {/* SINGLE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#3C087E]/10 text-[#3C087E] p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto"
          >
            <h3 className="text-center text-lg md:text-2xl font-semibold italic mb-8">
              Exam Slot Booking
            </h3>

            {/* POINTS WRAPPER */}
            <div
              className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
      "
            >
              {/* POINT 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-[30px_auto] gap-3 text-black items-start"
              >
                <span className="text-xl md:text-2xl leading-none">✦</span>
                <p className="text-base md:text-xl leading-relaxed">
                  Learners must book their examination slots through the NMIMS
                  Student Portal.
                </p>
              </motion.div>

              {/* POINT 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-[30px_auto] gap-3 text-black items-start"
              >
                <span className="text-xl md:text-2xl leading-none">✦</span>
                <p className="text-base md:text-xl leading-relaxed">
                  All exam slot details are shared well in advance, allowing
                  candidates to schedule their tests conveniently.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 font-[Inter]">
        <div className="max-w-4xl mx-auto p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-[24px] md:text-[40] font-bold italic text-[#270652] mb-12 text-center">
            ASSESSMENT STRUCTURE (100 MARKS)
          </h2>

          {/* Two Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            {/* Left Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#270652] py-3 text-center italic font-semibold text-[#3C087E] bg-white">
                Internal Assessment-60 Marks
              </div>
            </div>

            {/* Right Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#270652] py-3 text-center italic font-semibold text-[#3C087E] bg-white">
                External Assessment-40 Marks
              </div>
            </div>
          </div>

          {/* Passing Criteria Box */}
          <div className="border border-[#e5e7eb] rounded-lg p-5 mt-15 bg-white">
            <p className="font-semibold text-black mb-1">Passing Criteria</p>
            <ul className="list-disc pl-8 text-[#270652] text-sm md:text-lg">
              <li>
                A candidate must secure a minimum of 40% to successfully pass
                the course
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CareerServices onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full font-[Inter] py-20 flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-10">
          {/* WRAPPER */}
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* ================= LEFT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%] flex flex-col items-center text-center"
            >
              {/* Heading */}
              <h2 className="text-[#270652] text-[42px] md:text-[60px] font-bold leading-tight">
                Fees Structure
              </h2>

              {/* Subtitle */}
              <p className="text-gray-700 text-base md:text-lg mt-10">
                Convenient Fee Payment Option: <br />
                Choose your preferred fee payment option
              </p>

              {/* Fee Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=" bg-linear-to-b from-[#270652] to-[#3C087E]/50 
                     text-white w-[200px] h-[285px] md:w-[260px] rounded-2xl shadow-xl p-8 flex flex-col mt-20 items-center"
              >
                <p className="text-lg font-semibold mb-1">Program Fee</p>
                <p className="text-[10px] tracking-wider opacity-80 mb-3">
                  INR
                </p>

                <p className="text-xl font-semibold mb-2">MBA (WX)</p>

                <div className="w-full h-0.5 bg-white/40 my-2"></div>

                <p className="text-3xl font-bold mt-8">₹4,00,000/-</p>
              </motion.div>

              {/* Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="mt-10 bg-[#F6A410] 
                     text-white px-10 py-3 rounded-xl shadow-lg"
              >
                Compare all Plans
              </motion.button>
            </motion.div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-[60%]"
            >
              <div className="bg-[#3C087E]/5 rounded-3xl p-8 md:p-12 shadow-sm">
                <h3 className="text-[#270652] text-3xl md:text-4xl font-bold text-center mb-8">
                  Note
                </h3>

                {/* Bullets */}
                <ul className="space-y-5 text-[#1F1F1F] text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Admission Processing Fee of ₹1,500/- applicable for all
                    admissions.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    An initial amount of ₹20,000/- from the program fee will be
                    collected at the time of registration.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Re-Exam fee : ₹2,500/- per subject per attempt*
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    The above-mentioned fee structure is subject to change at
                    the discretion of the University.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Any payment made via Demand Draft should be made in favour
                    of “SVKM’s NMIMS” payable at Mumbai.
                  </li>
                </ul>

                {/* Scholarship Policy */}
                <div className="mt-10">
                  <p className="font-semibold text-black text-lg mb-2">
                    Scholarship Policy
                  </p>
                  <p className="text-[#1F1F1F] leading-relaxed text-sm md:text-base">
                    The University offers special incentives to our Armed
                    Forces, Defence Personnel, Paramilitary and their immediate
                    family with a 20% concession on the program fee.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
            <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">
              Degree Sample
            </p>

            <h2 className="text-[#270652] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
              NMIMS Online <br />
              MBA (WX) <br />
              Certificate
            </h2>

            <p className="text-[#3C3C43] max-w-[350px] text-base">
              Highlight your professional success with official certificate from
              NMIMS NCDOE
            </p>

            {/* IMAGE that appears ONLY on mobile, above CTA */}
            <div className="md:hidden flex justify-center">
              <img
                src="/nmims/nmimsMbaWxDegree.png"
                alt="Certificate Preview"
                className="w-full max-w-xs rounded-lg shadow-sm"
              />
            </div>

            {/* CTA BUTTON */}
            <button onClick={() => setIsModalOpen(true)} className="bg-[#F6A410] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200 flex items-center justify-center">
              Know more
            </button>
          </div>

          {/* RIGHT IMAGE (visible only on md+ screens) */}
          <div className="hidden md:flex justify-center mt-5 md:justify-end">
            <img
              src="/nmims/nmimsMbaWxDegree.png"
              alt="Certificate Preview"
              className="w-full max-w-sm rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-4 md:px-12 lg:px-20 py-16 font-[Inter]">
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
          className="text-[#270652] font-bold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl xl:text-[64px] leading-tight mb-12 w-full"
        >
          This isnt just another degree its a <br />
          transformation in how you think, work and grow.
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
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
              <div className="w-20 h-20 bg-[#270652] rounded-full flex items-center my-10 justify-center">
                <Option size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Tailor Your MBA to Your Ambitions
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  This program lets you graduate with two specialisations,
                  choosing from Leadership & Strategy, Marketing, Operations &
                  Supply Chain, Applied Finance, and Digital Marketing giving
                  you the flexibility to shape an MBA path that fits your career
                  goals.
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
              <div className="w-20 h-20 bg-[#270652] rounded-full flex items-center my-10 justify-center">
                <UserLock size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Learn From Exceptional Faculty
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Benefit from guidance and mentorship from a distinguished
                  faculty team comprising scholars, seasoned academicians, Ph.D.
                  holders, and experienced industry leaders.
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
              <div className="w-20 h-20 bg-[#270652] rounded-full flex items-center my-10 justify-center">
                <Move size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Peer Learning Through Collaborative Work
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  The program promotes meaningful interaction with fellow
                  professionals through structured group assignments and
                  collaborative projects. This approach enriches learning,
                  strengthens teamwork, and enhances your ability to work
                  effectively in diverse business environments.
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
              <div className="w-20 h-20 bg-[#270652] rounded-full flex items-center my-10 justify-center">
                <ListMinus size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Deep Dive Learning for Stronger Mastery
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  The program's unique pedagogy focuses on one Study Plan
                  subject at a time, allowing learners to dive deep into
                  concepts, build stronger understanding, and retain knowledge
                  more effectively.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-20 md:px-12 lg:px-20">
        <div className="w-full md:bg-[#270652] rounded-4xl py-12 px-6 md:px-12 lg:px-15">
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
                          text-[#270652] 
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
              This program gives you the foundation to dive into all major
              aspects of Business Administration and unlock exciting career
              opportunities in diverse business functions.
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
                  src="/nmimsCareer.png"
                  width={400}
                  height={400}
                  alt="Career Opportunities"
                  className="
          w-full 
          max-w-[220px]       /* Smaller on mobile */
          sm:max-w-[260px]  
          md:max-w-[320px]   /* Medium screens */
          lg:max-w-[400px]   /* Large screens */
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
                  "Brand & Communication Manager",
                  "Marketing Manager",
                  "Marketinng Analyst",
                  "Senior Strategy Manager",
                ].map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#F6A410] flex items-center justify-center">
                      <Check size={18} className="text-white" />
                    </span>
                    <span className="text-gray-900 font-semibold text-lg">
                      {role}
                    </span>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    w-[200px] 
                    mt-6 py-3 px-6 
                    rounded-lg 
                    text-white text-sm 
                    bg-[#F6A410]
                    shadow-lg
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

      <ServicesByRadhya />

      <section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        {/* TITLE */}
        <h2 className="text-[#270652] font-extrabold text-center text-[32px] md:text-[48px] lg:text-[64px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full">
          <table className="w-full border-collapse table-fixed">
            {/* HEADER */}
            <thead>
              <tr className="bg-[#F6A410] text-white text-[12px] md:text-[16px]">
                <th className="py-3 px-2 text-left rounded-l-lg">
                  PARTICULARS
                </th>
                <th className="py-3 px-2 text-left rounded-r-lg">DATES</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-[#D6D6D6]">
              {[
                { p: "Application Start Date", d: "17th October, 2025" },
                {
                  p: "paymment Start Date",
                  d: "17th October, 2025",
                },
                {
                  p: "Last Date For Application",
                  d: "6th January, 2026",
                },
                {
                  p: "Last Date For Loan Application",
                  d: "7th January, 2026",
                },
                {
                  p: "Last Date For Interview",
                  d: "8th January, 2026",
                },
                {
                  p: "Interview Result Declaration",
                  d: "10th January, 2026",
                },
                {
                  p: "Last Date Of Document Submission",
                  d: "10th January, 2026",
                },
                {
                  p: "Last Date For Loan Approval",
                  d: "10th January, 2026",
                },
                {
                  p: "Last Date For Program Fee Payment",
                  d: "13th January, 2026",
                },
                {
                  p: "Last Date Of Admission",
                  d: "13th January, 2026",
                },
                {
                  p: "Lecture Start Date",
                  d: "27th January, 2026",
                },
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

      <FAQ faqs={faqs} />

      <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

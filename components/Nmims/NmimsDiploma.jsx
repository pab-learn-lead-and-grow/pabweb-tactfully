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
  Ungroup,
  BookText,
  Option,
  UserLock,
  ListMinus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import LearningApproach from "../NmimsSection/LearningApproach";
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

  const subjects = [
    { id: 1, name: "Finance Management" },
    { id: 2, name: "Marketing Management" },
    { id: 3, name: "Business Management" },
    { id: 4, name: "Operations Management" },
    { id: 5, name: "Human Resource Management" },
  ];

  const semesters = [1, 2];

  const semSuffix = {
    1: "st",
    2: "nd",
  };

  const topicsData = {
    1: {
      1: [
        "Business Communication",
        "Financial Accounting ",
        "Micro Economics & Macro Economics",
        "Organisational Behaviour",
        "Marketing Management",
        "Quantitative Methods - I",
      ],
      2: [
        "Legal Aspect of Business",
        "Strategic Management",
        "Business Analytics",
        "Corporate Finance",
        "Capital Market and Portfolio Management siness Valuation",
        "Cost & Management Accounting",
      ],
    },
    2: {
      1: [
        "Business Communication",
        "Financial Accounting ",
        "Micro Economics & Macro Economics",
        "Organisational Behaviour",
        "Marketing Management",
        "Quantitative Methods - I",
      ],
      2: [
        "Legal Aspect of Business",
        "Strategic Management",
        "Business Analytics",
        "Sales Management",
        "Brand Management",
        "Consumer Behaviour",
      ],
    },
    3: {
      1: [
        "Business Communication",
        "Financial Accounting ",
        "Micro Economics & Macro Economics",
        "Organisational Behaviour",
        "Marketing Management",
        "Quantitative Methods - I",
      ],
      2: [
        "Legal Aspect of Business",
        "Strategic Management",
        "Business Analytics",
        "Cost and Management Accounting",
        "Human Resource Management",
        "Operations Management",
      ],
    },
    4: {
      1: [
        "Business Communication",
        "Financial Accounting ",
        "Micro Economics & Macro Economics",
        "Organisational Behaviour",
        "Marketing Management",
        "Quantitative Methods - I",
      ],
      2: [
        "Legal Aspect of Business",
        "Strategic Management",
        "Business Analytics",
        "Project Management",
        "Supply Chain Management",
        "Operations Management",
      ],
    },
    5: {
      1: [
        "Business Communication",
        "Financial Accounting ",
        "Micro Economics & Macro Economics",
        "Organisational Behaviour",
        "Marketing Management",
        "Quantitative Methods - I",
      ],
      2: [
        "Legal Aspect of Business",
        "Strategic Management",
        "Business Analytics",
        "Human Resource Management",
        "Manpower Planning, Recruitment and Selection",
        "Performance Management",
      ],
    },
  };
  const [activeSubject, setActiveSubject] = useState(1);
  const [activeSemester, setActiveSemester] = useState(1);

  const faqs = [
    {
      q: "Is an internship included in the diploma programmes?",
      a: "No. Currently these diploma programmes do not include an internship component.",
    },
    {
      q: "Who is eligible to enrol in these diploma programmes?",
      a: "Applicants must have completed Higher Secondary Certificate (10+2) in any discipline from a recognised board to be eligible for admission.",
    },
    {
      q: " Can I pursue more than one diploma at the same time?",
      a: "Yes, the structure allows you to enrol in multiple diploma programmes concurrently, subject to scheduling and admission conditions. (Note: check the exact terms with the admissions team.",
    },
    {
      q: " Will the diploma help me acquire industry-relevant skills?",
      a: "Absolutely. These diploma programmes are designed with industry relevance in mind, offering specialised domain knowledge and practical insights to prepare you for real-world roles.",
    },
    {
      q: "Is the learning duration flexible?",
      a: "Yes. Diploma programmes are structured into two terms, allowing you to complete the coursework in one year with flexibility to accommodate your schedule.",
    },
    {
      q: " Are these diplomas recognised and credible?",
      a: "Yes. They are UGC-entitled online diploma programmes offered by a top Indian university, which makes them credible and ready for career-focused learners.",
    },
  ];

  const topFaculty = [
    {
      name: "Dr. Rohini Kelkar",
      title: "Ph.D",
      image: "/nmims/bcom/faculties/rohini.png",
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

    function FeesCarouselOnlineDiploma() {
  const cards = [
    {
      title: "Annual Payment",
      subtitle: "(no. of years 1)",
      program: "Online Diploma",
      amount: "₹1,10,000/-",
      note: "",
    },
    {
      title: "Semester Wise",
      subtitle: "(no. of sem 2)",
      program: "Online Diploma",
      amount: "₹55,000/-",
      note: "",
    },
    {
      title: "One Time",
      subtitle: "(in INR)",
      program: "Online Diploma",
      amount: "₹1,05,000/-",
      note: "Congratulations!\nYou save ₹5,000/-",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-scroll
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
            transition={{ duration: 0.5 }}
            className="bg-linear-to-b from-[#270652] to-[#101C2F] rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
          >
            <div>
              <p className="font-semibold text-white">
                {cards[index].title}
              </p>
              <p className="text-xs text-white mt-1">
                {cards[index].subtitle}
              </p>

              <p className="text-[#C4C4C4] font-bold text-[19px] mt-4">
                {cards[index].program}
              </p>

              <div className="w-12 mx-auto h-0.5 bg-white mt-3" />
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-white">
              {cards[index].amount}
            </p>

            {cards[index].note && (
              <p className="text-xs italic text-white whitespace-pre-line">
                {cards[index].note}
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
              backgroundColor: index === i ? "#270652" : "#d1d5db",
            }}
            className="w-3 h-3 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}


  const stats = [
    { value: "1", label: "Years Duration" },
    { value: "2", label: "Semesters" },
    { value: "2", label: "Years Validity" },
    { value: "IA + TEE", label: "Evaluation" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
     <section className="relative min-h-screen lg:min-h-[50vh] xl:min-h-screen w-full">
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
            className="inline-block bg-[#ffb901] text-white text-[18px] sm:text-[18px] mt-6  mb-2 font-sm px-6 py-1 rounded-full"
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
            Diploma in Online Mode
          </motion.p>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-5xl font-[Inter] lg:text-[54px] xl:text-[64px] font-bold -mt-1 leading-tight"
            >
              Online Diploma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
            >
              Explore key business sectors with Diploma Programs designed to give you practical insight into everyday organisational processes across diverse domains
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
                       <div className="max-w-7xl overflow-hidden md:-mr-10 ">
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
                           className="bg-[#3C087E]/5 rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-full py-4 sm:py-6 md:py-10 px-8 sm:px-10 md:px-16"
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
             Explore key business sectors with Diploma Programs{" "}
            </span>
           designed to give you practical insight into everyday organisational processes across diverse domains.
          </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <Ungroup size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#270652] mb-1">
               Be a part of legacy
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
               Be a part of legacy - Learn from a top Indian university with over 40 years of experience in delivering career-oriented education.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 ">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <BookText size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#270652] mb-1">
                Work-study balance
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
               With a self-paced format tailored for professionals, these diploma programs help you maintain the right balance between work, personal life, and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full bg-white px-4 md:px-16 py-20">
                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[32px] md:text-[64px] leading-[110%] font-extrabold font-[Inter] text-center text-[#270652] mb-10"
                  >
                    Syllabus
                  </motion.h2>
                
                  {/* MAIN WRAPPER */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="
                      bg-[#3C087E]/10 rounded-[30px]
                      p-4 sm:p-6 md:p-12
                      flex flex-col xl:flex-row gap-6 md:gap-10
                    "
                  >
                
                    {/** ------------------------------------------------ */}
                    {/** MOBILE 2-COLUMN WRAPPER (LEFT + RIGHT)          */}
                    {/** ------------------------------------------------ */}
                    <div className="grid grid-cols-2 gap-4 md:gap-20 lg:gap-30 w-full xl:hidden">
                
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
                                  className={`w-full px-2 py-2 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold ${activeSubject === sub.id ? "bg-[#3C087E] text-white shadow" : "bg-white text-[#38A169] border-[#38A169] border-dashed border-2"}`}
      
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
                                      ? "bg-[#3C087E] text-white shadow"
                                      : "bg-white text-[#3C087E] border-[#3C087E] border-dashed border-2"
                                  }
                                `}
                              >
                                {sem}
                                {semSuffix[sem]} Semester
                              </motion.button>
                            ))}
                
                            {/* DOWNLOAD BUTTON */}
                            <motion.button
                              onClick={() => setIsModalOpen(true)}
                              whileHover={{ scale: 1.05 }}
                              className="
                                 w-full bg-[#F6A410] text-white px-3 py-2 sm:py-3
                                rounded-xl text-[10px] sm:text-xs md:text-sm shadow-md
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
                    <div className="hidden xl:flex w-[30%] flex-col items-center">
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
                              className={`w-full px-4 py-3 rounded-full font-regular
                                ${
                                  activeSubject === sub.id
                                    ? "bg-[#3C087E] text-white shadow"
                                    : "bg-white text-black border-[#3C087E] border-dashed border-2"
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
                    <div className="w-full flex flex-col mt-8 items-center justify-center xl:w-[40%]">
                      <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md relative w-full">
                
                        {/* ICON + LINE */}
                        <div className="absolute top-0 bottom-0 flex flex-col items-center">
                          <div className="bg-[#270652] text-white p-2 sm:p-3 rounded-full shadow z-10 mt-4 sm:mt-6">
                            <ChevronsDown size={16} />
                          </div>
                          <div className="w-0.5 bg-[#270652] flex-1 mb-4"></div>
                        </div>
                
                        {/* TITLE */}
                        <h3 className="text-[20px] sm:text-[26px] md:text-3xl font-bold text-[#270652] ml-12 sm:ml-16 mb-3">
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
                                  className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white group-hover:bg-[#270652] transition"
                                >
                                  <Check
                                    size={12}
                                    className="sm:size-16 text-[#270652] group-hover:text-white transition"
                                  />
                                </motion.div>
                
                                <span className="text-gray-800 text-xs sm:text-sm md:text-base group-hover:text-[#270652] transition">
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
                    <div className="hidden xl:flex w-[30%] flex-col items-start xl:items-center mt-10">
                      <div className="flex flex-col gap-4 w-full xl:w-[90%]">
                        {semesters.map((sem) => (
                          <motion.button
                            key={sem}
                            onClick={() => setActiveSemester(sem)}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-3 rounded-full font-regular
                              ${
                                activeSemester === sem
                                  ? "bg-[#3C087E] text-white shadow"
                                  : "bg-white text-black border-[#3C087E] border-dashed border-2"
                              }`}
                          >
                            {sem}
                            {semSuffix[sem]} Semester
                          </motion.button>
                        ))}
                
                        <motion.button
                          onClick={() => setIsModalOpen(true)}
                          whileHover={{ scale: 1.05 }}
                          className="mt-30 w-full bg-[#F6A410] text-white px-4 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-4"
                        >
                          DOWNLOAD SYLLABUS
                          <ChevronRight size={20} />
                        </motion.button>
                      </div>
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
                   className="text-black text-[20px] md:text-3xl font-medium leading-relaxed md:w-3/5"
                 >
                  HSC (10+2) in any discipline from a recognised Board.
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
             <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[30px] md:text-[60px] lg:text-[64px] text-[#270652]/10 opacity-90 select-none tracking-tight whitespace-nowrap">
               EXAMINATION PROCESS
             </h1>
     
             <div className="max-w-6xl mx-auto relative">
               {/* Main Animated Heading */}
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
                 className="text-left text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16"
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
                   className="bg-[#3C087E]/5 text-white p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                 >
                   <h3 className="text-[#270652] text-md md:text-2xl font-semibold italic mb-5">
                     Exam Slot Booking
                   </h3>
     
                   {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
                   <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto text-black">
                     {/* POINT 1 */}
                     <div className="grid grid-cols-[30px_auto] gap-3 items-start ">
                       <span className="text-lg lg:text-2xl leading-none">✦</span>
                       <p className="text-left text-lg lg:text-2xl mb-6">
                         Time-table will be assigned to the candidates prior to examination.
                       </p>
                     </div>
     
                     {/* POINT 2 */}
                     <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                       <span className="text-lg lg:text-2xl leading-no">✦</span>
                       <p className="text-lg lg:text-2xl text-left">
                         Candidates must be present at an already allotted time slot
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
                   className="bg-[#3C087E]/5 text-white p-5 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                 >
                   <h3 className="text-[#270652] text-lg md:text-2xl font-semibold italic mb-5">
                     Exam Slot Timings
                   </h3>
     
                   <p className="text-lg lg:text-2xl max-w-[380] mb-6 text-center text-black">
                     For end-term examinations, NMIMS provides three available slots:
                   </p>
     
                   {/* Exam Time Circles */}
                   <div className="flex items-center justify-center gap-6 mb-7 text-black">
                     {["9 AM", "1 PM", "5 PM"].map((slot, i) => (
                       <div
                         key={i}
                         className="w-15 h-15 border border-black rounded-full flex items-center justify-center text-lg font-semibold"
                       >
                         {slot}
                       </div>
                     ))}
                   </div>
     
                   <p className="text-black text-lg lg:text-2xl max-w-[380] text-center">
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
               <h2 className="text-[24px] md:text-[40] font-bold italic text-[#270652] mb-12 text-center">
                 ASSESSMENT STRUCTURE (100 MARKS)
               </h2>
     
               {/* Two Categories */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                 {/* Left Category */}
                 <div className="space-y-2">
                   <div className="w-full rounded-lg border border-gray-200 py-3 text-center italic font-semibold text-black bg-white">
                     Internal Assessment-60 Marks
                   </div>
                 </div>
     
                 {/* Right Category */}
                 <div className="space-y-2">
                   <div className="w-full rounded-lg border border-gray-200 py-3 text-center italic font-semibold text-black bg-white">
                     External Assessment-40 Marks
                   </div>
                 </div>
               </div>
     
               {/* Passing Criteria Box */}
               <div className="border border-[#e5e7eb] rounded-lg p-5 mt-15 bg-white">
                 <p className="font-semibold text-black mb-1">Passing Criteria</p>
                 <ul className="list-disc pl-8 text-[#3C3C43] text-sm md:text-lg">
                   <li>
                     A candidate must secure a minimum of 40% to successfully pass
                     the course
                   </li>
                 </ul>
               </div>
             </div>
           </section>
            <CareerServices onCtaClick={() => setIsModalOpen(true)} />
      <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
      <div className="px-2 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[#270652] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4">
              Fees Structure
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl mb-6">
              Convenient fee payment option <br />
              Choose your preferred fee payment option
            </p>

            {/* CTA – desktop only */}
            <button onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-[#F6A410] font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit">
              Compare all Plans
            </button>
          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <FeesCarouselOnlineDiploma />
          </div>

          {/* CTA – mobile only */}
          <button onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-[#F6A410] font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
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
          className="max-w-4xl mx-auto bg-[#3C087E]/5 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
        >
          {/* Heading */}
          <h2 className="text-center text-black text-2xl md:text-[40px] font-bold mb-6">
            Note
          </h2>

          {/* Sub-heading */}
          <p className="text-black text-lg md:text-xl font-semibold mb-6 leading-relaxed">
            Important instructions:
          </p>

          {/* Bullet Points */}
          <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
            <li>
              Admission Processing Fee of ₹1,200/- applicable for all
              admissions.
            </li>
            <li>
              An initial amount of ₹10,000/- from the program fee will be
              collected at the time of registration.
            </li>
            <li>Exam fee : ₹800/- per subject, per attempt</li>
            <li>Project fee : ₹800/- per attempt</li>
            <li>
              Students also have the option to pay the full program fee of
              ₹105,000/- if they prefer.
            </li>
            <li>
              The above-mentioned fee structure is subject to change at the
              discretion of the University.
            </li>
            <li>
              Any payment made via Demand Draft should be made in favour of
              "SVKM's NMIMS" payable at Mumbai.
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
            <h3 className="text-black text-lg md:text-xl font-semibold mb-2">
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
     
           <h2 className="text-[#270652] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
             NMIMS Online <br />
             Diploma <br />
             Certificate
           </h2>
     
           <p className="text-[#3C3C43] max-w-[350px] text-base">
             Highlight your professional success with official certificate from
             NMIMS NCDOE
           </p>
     
           {/* IMAGE that appears ONLY on mobile, above CTA */}
           <div className="md:hidden flex justify-center">
             <img
               src="/nmims/nmimsDiplomaDegree.jpg"
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
             src="/nmims/nmimsDiplomaDegree.jpg"
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
          className="text-[#270652] font-bold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
        >
          The program offers strong academics, interactive learning, and full
          flexibility to help professionals grow confidently.
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
                  Industry relevant education
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Prepare for real-world success with industry-aligned skills
                  and UGC-entitled programs from India’s top online education
                  provider.
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
                  Robust curriculum
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                   Build job-ready expertise with a robust curriculum trusted by
                  India’s leading corporates and emerging start-ups, designed to
                  help you solve practical business challenges.
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
                <UserLock size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Professional Facutly
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                   Learn from a distinguished faculty of seasoned academicians
                  and industry professionals who bring deep insights into both
                  the curriculum and real-world business practices.
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
                  Career Opportunities
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Gain practical, job-ready skills through diploma programs
                  designed to help you grasp industry fundamentals and begin
                  your career with confidence.
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
                 Gain practical, job-ready skills through diploma programs designed to help you grasp industry fundamentals and begin your career with confidence.
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
         rounded-2xl
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
                      "Accounts and Finance Manager",
                      "Digital Marketing Executive",
                      "Business Consultant",
                      "Human Resources Manager",
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
          <FAQ faqs={faqs} />
          
                <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

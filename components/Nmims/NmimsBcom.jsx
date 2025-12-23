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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import ServicesByPAB from "../NmimsSection/servicesbyPab";
import Enrollment from "../NmimsSection/Enrollment";
import CareerServices from "../NmimsSection/CareerServices";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Faculties from "../NmimsSection/Faculties";
import CounsellingForm from "@/components/Pab/CounsellingForm";

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
  const topics = [
    "Financial Accounting",
    "Micro Economics",
    "Business Statistics",
    "Banking and Insurance",
    "Fundamentals of Taxation",
    "Research Methodology",
  ];

  function FeesCarouselBCom() {
  const cards = [
    {
      title: "Annual Payment",
      subtitle: "(no. of years 3)",
      program: "B.COM",
      amount: "₹18,000/-",
      note: "",
    },
    {
      title: "Semester Wise",
      subtitle: "(no. of semesters 6)",
      program: "B.COM",
      amount: "₹1,05,000/-",
      note: "",
    },
    {
      title: "One Time",
      subtitle: "(in INR)",
      program: "B.COM",
      amount: "₹94,000/-",
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
            className="bg-linear-to-b from-[#345895] to-[#101C2F] rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
          >
            <div>
              <p className="font-semibold text-white">
                {cards[index].title}
              </p>
              <p className="text-xs text-white mt-1">
                {cards[index].subtitle}
              </p>

              <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                {cards[index].program}
              </p>

              <div className="w-12 mx-auto h-0.5 bg-white mt-3" />
            </div>

            <p className="text-2xl md:text-3xl font-bold text-white">
              {cards[index].amount}
            </p>

            {cards[index].note && (
              <p className="text-xs text-white italic whitespace-pre-line">
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
              backgroundColor: index === i ? "#345895" : "#d1d5db",
            }}
            className="w-3 h-3 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}


  const faqs = [
    {
      q: "Is the Online B.Com from NMIMS a recognized and valid degree?",
      a: "Yes. The Online B.Com is offered by NMIMS, a UGC-entitled and NAAC A++ accredited university, ensuring full academic and professional recognition across industries.",
    },
    {
      q: " Who should apply for the NMIMS Online B.Com program?",
      a: "The program is ideal for Students who have completed Class 12, Working individuals who want to upskill, Aspiring accountants, finance professionals, and commerce graduates and Learners seeking a flexible and industry-relevant commerce degree.",
    },
    {
      q: "What is the duration of the Online B.Com program?",
      a: "The Online B.Com is a 3-year undergraduate degree, designed to provide flexibility with live sessions, recorded classes, and self-paced learning.",
    },
    {
      q: " Is the program fully online?",
      a: "Yes. The entire program—including lectures, assignments, exams, and doubt sessions—is delivered online through the NMIMS student portal.",
    },
    {
      q: " What subjects are covered in the Online B.Com curriculum?",
      a: "The curriculum includes Financial Accounting, Cost & Management Accounting, Business Law, Taxation, Economics, Auditing, Banking & Finance, Business Communication and more, giving students a comprehensive commerce foundation.",
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

  const whyCards = [
    {
      logo: Users,
      heading: "Foundation",
      subheading: "Deepen your understanding of key management concepts and sharpen your ability to critically analyse and solve real-world business challenges.",
    },
    {
      logo: BookOpenCheck,
      heading: "Specializations",
      subheading: "Choose from marketing, finance, or business analytics to shape your career trajectory with the right specialization.",
    },
    {
      logo: SplinePointer,
      heading: "Flexible",
      subheading: "Experience seamless learning through an integrated platform accessible on any device study whenever and however you prefer.",
    },
    {
      logo: Speech,
      heading: "Mentorship",
      subheading: "Learn from top academicians and industry leaders who guide you with practical knowledge and deep professional experience.",
    },
    {
      logo: GlobeLock,
      heading: "Industry-Ready",
      subheading: "Gain the skills to develop and apply business models and frameworks to solve real-world business challenges.",
    },
    {
      logo: FileUser,
      heading: "Upskill",
      subheading: "Master practical business tools and strategic frameworks that empower you to solve complex challenges and drive meaningful results in the real world.",
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
    { value: "3", label: "Years Duration" },
    { value: "6", label: "Semesters" },
    { value: "6", label: "Years Validity" },
    { value: "IA + TEE", label: "Evaluation" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-screen lg:min-h-[50vh] xl:min-h-screen w-full ">
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
                       <div className="bg-white rounded-r-2xl shadow-md h-[100px] -mb-5 flex items-center">
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
                   <div className="relative z-10 max-w-7xl mx-auto p-6 sm:p-10">
                     {/* Most Loved */}
                     <motion.span
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.6 }}
                       viewport={{ once: true }}
                       className="inline-block bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6  mb-2 font-sm px-6 py-1 rounded-full"
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
                         className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-[54px] xl:text-[64px] font-[Inter] font-bold -mt-1 leading-tight"
                       >
                        Bachelor of Commerce
                         </motion.h1>
           
                       <motion.p
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: 0.7, delay: 0.2 }}
                         viewport={{ once: true }}
                         className="text-gray-200 text-left text-[16px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
                       >
                         Build comprehensive expertise in Finance, Accounting, Taxation, and Management that prepares you to excel in today’s dynamic financial markets.
                         </motion.p>
           
                       {/* STATS */}
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         viewport={{ once: true }}
                         className="grid grid-cols-2 mt-5 md:grid-cols-2 lg:grid-cols-4 lg:-mx-15 gap-y-5 font-[Inter] w-full"
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
                             <p className="text-white text-[16px] md:text-[22px] font-bold sm:text-base">
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
                          <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 bg-[#345895] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium">
                            Download Brochure
                            <Download size={20} />
                          </button>
           
                          <button onClick={() => setIsModalOpen(true)} className="bg-[#4d964f] flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 font-medium">
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
                      <div className="max-w-7xl overflow-hidden md:-mr-10 xl:-mr-16">
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
                          className="text-[28px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[120%] font-extrabold text-[#345895] mb-3 md:mb-8 text-center"
                        >
                          A Snapshot of Success
                        </motion.h2>
                        {/* BLUE BAR */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-[#064E92] rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-full py-4 sm:py-6 md:py-10 px-8 sm:px-10 md:px-16"
                        >
                          {/* ALWAYS 3 COLUMNS */}
                          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center text-white">
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
          <h2 className="text-xl md:text-2xl font-regular lg:text-[49px] leading-normal text-gray-900">
            <span className="text-red-600 ">
             Build comprehensive expertise in Finance, Accounting, Taxation, and Management {" "}
            </span>
             that prepares you to excel in today’s dynamic financial markets.
             </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <Fullscreen size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#345895] mb-1">
                High-Impact & Student-Focused
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
               Benefit from the mentorship of renowned academicians and industry veterans who equip you with the knowledge and confidence to excel in your career.
               </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <LayoutDashboard size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#345895] mb-1">
                Foundation of your professional career
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                Strengthen your corporate career base through comprehensive learning and skill-building that prepares you to step confidently into managerial roles.
                </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full bg-linear-to-b from-[#345895] to-[#101c2f] mt-15 py-16 px-4 md:px-12 lg:px-20 rounded-xl text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-10">
          {/* LEFT: Syllabus */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-5xl font-[Inter] font-bold lg:pl-6"
          >
            Syllabus
          </motion.h2>

          {/* MIDDLE: Divider + Topics */}
          <div className="flex items-start justify-center gap-6">
            {/* Vertical Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative flex flex-col items-center">
                <div className="bg-[#345895] text-white p-3 rounded-full shadow z-10">
                  <ChevronsDown size={18} />
                </div>

                {/* STATIC VERTICAL LINE (height controlled by JS) */}
                <div
                  style={{ height: 250 }}
                  className="w-0.5 bg-[#345895] absolute top-10 left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </motion.div>

            {/* Topics Text */}
            <div className="">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold mb-4 whitespace-nowrap"
              >
                Topics Covered
              </motion.h3>

              <ul className="space-y-3 text-base md:text-lg">
                {topics.map((topic, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-green-300">✔</span> {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Button */}
          <div className="flex lg:justify-end justify-start lg:items-start items-center">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 px-6 py-2 lg:mt-60 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap"
            >
              DOWNLOAD SYLLABUS →
            </motion.button>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
              <div className="max-w-7xl mx-auto">
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
                  className="mt-6 flex flex-col md:flex-row max-w-7xl items-center gap-20"
                >
                  {/* Left text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-700  text-[20px] md:text-3xl font-medium leading-relaxed md:w-3/5"
                  >
                    HSC (10+2) in any discipline from a recognized board with minimum 50%(45% for SC/ST/OBC/PwD).
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
                          The NMIMS Online B.COM follows a structured and transparent
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
                            <h3 className="text-md md:text-2xl font-semibold italic mb-5">
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
              
                            <p className="text-lg lg:text-[2xl] max-w-[380] text-center">
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
                              Assignments + Quizes (30 Marks)
                            </div>
              
                            <div className="flex flex-cols-2 gap-2">
                              <div className="rounded-lg border border-[#345895] py-3 px-7 text-sm text-center text-[#345895] bg-white">
                                Quiz (10 Marks)
                              </div>
                              <div className="rounded-lg border border-[#345895] py-3 px-6 text-sm text-center text-[#345895] bg-white">
                                Assignment (20 Marks)
                              </div>
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

      <CareerServices onCtaClick={() => setIsModalOpen(true)} />

       <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
      <div className="px-2 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[#064E92] text-[42px] md:text-[52px] lg:text-[64px] font-extrabold leading-[110%] mb-4">
              Fees Structure
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl mb-6">
              Convenient fee payment options available <br />
              Choose semester-wise, annual, or one-time payment.
            </p>

            {/* CTA – desktop only */}
            <button onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-linear-to-r from-[#4D964F] to-[#193019] shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit">
              Compare all Plans
            </button>
          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <div className="w-full lg:w-[35%] flex justify-center">
            <FeesCarouselBCom />
          </div>

          {/* CTA – mobile only */}
          <button onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-linear-to-r from-[#4D964F] to-[#193019] shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
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
              ₹94,000/- for the BBA program with Marketing and Finance electives
              if they prefer.
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
        defaultOpen={0} // Step 3 open by default
      />

       <section className="w-full px-6 md:px-18">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-5">

      <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">Degree Sample</p>

      <h2 className="text-[#345895] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
        NMIMS Online <br />
        B.COM <br />
        Certificate
      </h2>

      <p className="text-[#3C3C43] max-w-[350px] text-base">
        Highlight your professional success with official certificate from
        NMIMS NCDOE
      </p>

      {/* IMAGE that appears ONLY on mobile, above CTA */}
      <div className="md:hidden flex justify-center">
        <img
          src="/nmims/nmimsBcomDegree.png"
          alt="Certificate Preview"
          className="w-full max-w-xs rounded-lg shadow-sm"
        />
      </div>

      {/* CTA BUTTON */}
      <button onClick={() => setIsModalOpen(true)} className="bg-[#4D964F] text-white font-medium text-sm px-10 py-2 rounded-lg bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md shadow-[#1C361D] transform hover:scale-105 duration-200 flex items-center justify-center">
        Know more
      </button>

    </div>

    {/* RIGHT IMAGE (visible only on md+ screens) */}
    <div className="hidden md:flex justify-center mt-5 md:justify-end">
      <img
        src="/nmims/nmimsBcomDegree.png"
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
          className="text-[#345895] font-extrabold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
        >
          This isnt just another degree its a <br />
          transformation in how you think, work and grow.
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5">
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
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center my-10 justify-center">
                <HandCoins size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Stronger Earning Potential Early in Your Career
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  NMIMS Online B.Com graduates gain strong commerce skills that
                  prepare them for fast growth in roles like Accounts Executive,
                  Finance Assistant, Tax Associate, Audit Analyst, and
                  Operations Executive.
                </p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center my-10 justify-center">
                <Usb size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Explore Multiple Career Pathways
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Step confidently into entry-level and early mid-level roles
                  across accounting, finance, taxation, banking, auditing,
                  compliance, and business operations. The NMIMS Online B.Com
                  gives you the versatility to explore high-demand
                  commerce-driven roles.{" "}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-12">
            {/* Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center my-10 justify-center">
                <Blocks size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Build Robust Commerce & Analytical Foundations
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Gain essential skills in accounting, finance, taxation,
                  business law, and analytics—preparing you for advanced studies
                  like an MBA, M.Com, or professional certifications such as CA,
                  CMA, or CFA.{" "}
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
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center my-10 justify-center">
                <BriefcaseBusiness size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Become a Global-Ready Commerce Professional
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  With a curriculum aligned to modern business environments, the
                  program prepares you to succeed in multinational corporations,
                  fintech companies, consulting firms, and fast-growing startups
                  in India and abroad.{" "}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
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
                   This program gives you the foundation to dive into all major aspects of Business Administration and unlock exciting career opportunities in diverse business functions.
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
                        "Charteted Accountant",
                        "Financial Analyst",
                        "Accounts Process Executive",
                        "Corporate Sales Executive",
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
                        onClick={() => setIsModalOpen(true)}
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

      <FAQ faqs={faqs} />

      <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

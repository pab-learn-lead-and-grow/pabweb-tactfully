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
  BicepsFlexed,
  BriefcaseBusiness,
  BanknoteArrowUp,
  Move,
  UserRoundCheck,
  Ungroup,
  BookText,
  Option,
  UserLock,
  ListMinus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import CounsellingForm from "@/components/Pab/CounsellingForm";
import Faculties from "../NmimsSection/Faculties";
import ServicesByPAB from "../NmimsSection/servicesbyPab";
import Enrollment from "../NmimsSection/Enrollment";
import CareerServices from "../NmimsSection/CareerServices";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";

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


  const topics = [
    "Financial Accounting",
    "Micro Economics & Macro Economics",
    "Business Communication",
    "Organisational Behaviour",
    "Marketing Management",
    "Quantitative Methods - I",
  ];

  const faqs = [
    {
      q: "Do I need work experience to pursue certification in business management?",
      a: "You don't need work experience to apply, but you must have passed HSC (10+2) in any discipline from a recognized board.",
    },
    {
      q: "What is required minimum qualification?",
      a: "To enroll, learners need to have successfully completed HSC (10+2) in any discipline from a recognized education board.",
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

  const whyCards= [
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

  const stats = [
    { value: "6", label: "Months Duration" },
    { value: "1", label: "Semesters" },
    { value: "2", label: "Years Validity" },
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
                       Certificate in Online Mode
                     </motion.p>
           
                     {/* TITLE + DESCRIPTION */}
                     <div className="flex flex-col items-start">
                       <motion.h1
                         initial={{ opacity: 0, y: -20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         viewport={{ once: true }}
                         className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-[54px] font-[Inter] font-bold -mt-1 leading-tight"
                       >
                        Certificate Program in Business Management
                         </motion.h1>
           
                       <motion.p
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: 0.7, delay: 0.2 }}
                         viewport={{ once: true }}
                         className="text-gray-200 text-left text-[16px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
                       >
                         Explore the essentials of business management with this 6-month certificate program designed to offer a strong preview of the business world.
                         </motion.p>
           
                       {/* STATS */}
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         viewport={{ once: true }}
                         className="grid grid-cols-3 mt-5 lg:-mx-10 gap-y-4 font-[Inter] w-full"
                       >
                         {stats.map((stat, idx) => (
                           <div
                             key={idx}
                             className={`text-center py-3 lg:py-6 ${
                               idx !== stats.length - 1
                                 ? "border-r-2 border-white"
                                 : ""
                             }`}
                           >
                             <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white mb-1">
                               {stat.value}
                             </p>
                             <p className="text-white md:text-3xl font-bold sm:text-base">
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
                    Explore the essentials of business management {" "}
                  </span>
                  with this 6-month certificate program designed to offer a strong preview of the business world.</h2>
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
                    <h3 className="lg:text-2xl text-[#345895] mb-1">
                      Learn basics of business management
                    </h3>
                    <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                    Understand the foundational concepts of business management and how they apply in real-world settings to build a strong career in the field.</p>
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
                    <h3 className="lg:text-2xl text-[#345895] mb-1">
                      Skills to solve business challenges
                    </h3>
                    <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                     Gain essential business skills that empower you to analyze issues, think strategically, and create solutions for real-world challenges.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
           <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full bg-linear-to-b from-[#345895] to-[#101c2f] mt-20 py-16 px-4 md:px-12 lg:px-20 rounded-xl text-white">
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
                  style={{ height: 260 }}
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
                  Eligibility criteria - HSC (10+2) in any discipline from a recognised Board.
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
                          The NMIMS Online Certification follows a structured and transparent
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
                              Term End Examination(70%)
                            </div>
              
                            <div className="flex flex-cols-2 gap-1">
                              <div className="rounded-lg border border-[#345895] py-3 px-2 text-sm text-center text-[#345895] bg-white">
                                MCQ 
                              </div>
                              <div className="rounded-lg border border-[#345895] py-3 px-3 text-sm text-center text-[#345895] bg-white">
                                Descriptive Answers
                              </div>
                            </div>
                          </div>
              
                          {/* Right Category */}
                          <div className="space-y-2">
                            <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                              Internal assessments (30%)
                            </div>
              
                            <div className="flex flex-col">
                              <div className="rounded-lg border border-[#345895] py-3 px-6 text-sm text-center text-[#345895] bg-white">
                                Regular Case-based and application-oriented internal assessments
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
              <h2 className="text-[#345895] text-[42px] md:text-[60px] font-extrabold leading-tight">
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
                className=" bg-linear-to-b from-[#345895] to-[#173152] 
                          text-white w-[200px] h-[285px] md:w-[260px] rounded-2xl shadow-xl p-8 flex flex-col mt-20 items-center"
              >
                <p className="text-lg font-semibold mb-1">Program Fee</p>
                <p className="text-[10px] tracking-wider opacity-80 mb-3">
                  INR
                </p>

                <p className="text-xl font-semibold mb-2">
                  Certificate Program
                </p>

                <div className="w-full h-0.5 bg-white/40 my-2"></div>

                <p className="text-3xl font-bold mt-8">₹55,000/-</p>
              </motion.div>

              {/* Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="mt-10 bg-linear-to-r from-[#4D964F] to-[#193019] 
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
              <div className="bg-[#E9F0F8] rounded-3xl p-8 md:p-12 shadow-sm">
                <h3 className="text-[#345895] text-3xl md:text-4xl font-bold text-center mb-8">
                  Note
                </h3>
                <p className="text-[#1F1F1F] leading-relaxed text-sm md:text-base">
                  Note: To get a detailed understanding of the fee structure,
                  contact a student counsellor.
                </p>

                {/* Bullets */}
                <ul className="space-y-5 text-[#1F1F1F] text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Admission Processing Fee of ₹1,200/- applicable for all
                    admissions.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    An initial amount of ₹10,000/- from the program fee will be
                    collected at the time of registration.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Exam fee : ₹800/- per subject per attempt*
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    The above-mentioned fee structure is subject to change at
                    the discretion of the University.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Any payment made via Demand Draft should be made in favour
                    of “SVKM's NMIMS” payable at Mumbai.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Now Avail loan facility to pay fees for the program even
                    without a credit card.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl mt-1">•</span>
                    Finance Options available with No Cost EMI*. Please contact
                    a counsellor to know more.
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
                  <p className="text-[#1F1F1F] leading-relaxed text-sm md:text-base">
                    Note: Faculty assigned to a subject for each semester will
                    be at the discretion of the university. It is not necessary
                    that the mentioned faculty will teach across all batches and
                    in all terms.
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

      <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">Degree Sample</p>

      <h2 className="text-[#345895] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
        NMIMS Online <br />
        Certification Program <br />
        Certificate
      </h2>

      <p className="text-[#3C3C43] max-w-[350px] text-base">
        Highlight your professional success with official certificate from
        NMIMS NCDOE
      </p>

      {/* IMAGE that appears ONLY on mobile, above CTA */}
      <div className="md:hidden flex justify-center">
        <img
          src="/nmims/nmimsBusinessManag.jpg"
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
        src="/nmims/nmimsBusinessManag.jpg"
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
          The program offers strong academics, interactive learning, and full
          flexibility to help professionals grow confidently.
        </motion.h2>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 w-full"
          >
            <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
              <Option size={50} strokeWidth={1.0} className="text-white" />
            </div>

            <div className="max-w-[260px]" >
              <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                Industry relevant education
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Prepare for real-world success with industry-aligned skills and
                UGC-entitled programs from India's top online education
                provider.
              </p>
            </div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6 w-full"
          >
            <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
              <UserLock size={50} strokeWidth={1.0} className="text-white" />
            </div>

            <div className="max-w-[260px]">
              <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                Robust curriculum
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Build job-ready expertise with a robust curriculum trusted by India's leading corporates and emerging start-ups, designed to help you solve practical business challenges.
              </p>
            </div>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6 w-full"
          >
            <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
              <UserLock size={50} strokeWidth={1.0} className="text-white" />
            </div>

            <div className="max-w-[260px]">
              <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                Professional Faculty
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Learn from a distinguished faculty of seasoned academicians and industry professionals who bring deep insights into both the curriculum and real-world business practices.
              </p>
            </div>
          </motion.div>
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
                        "Business Consultant",
                        "Business Development Manager",
                        "Franchiser",
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

"use client";
import Image from "next/image";
import {
  Download,
  BookOpenCheck,
  SplinePointer,
  Speech,
  GlobeLock,
  Check,
  ArrowRight,
  BookCheck,
  Headset,
  FileUser,
  ChartNoAxesColumn,
  Ungroup,
  BookText,
  UserLock,
  StickyNote,
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
import MujCareerServices from "../NmimsSection/MujCareerServices"
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import CourseCurriculumSection from "@/components/NmimsSection/CourseCurriculumSection";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const learningCards = [
    {
      icon: Tally4,
      title: "AI Learning Support",
      desc: "Smart tools like SummarizeMe and AI Professor simplify complex content and answer course-related queries instantly.",
    },
    {
      icon: BookCheck,
      title: "AI Assessment & Practice",
      desc: "QuizMe AI generates personalised quizzes to help students test and strengthen their understanding.",
    },
    {
      icon: Headset,
      title: "AI Study Planning",
      desc: "Learning Path AI helps structure study schedules for improved learning outcomes and better results.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Application",
      desc: " Fill in your basic, education & work experience-related details and pay the application fee to register.",
    },
    {
      num: "02",
      title: "Fee Payment",
      desc: "Pay the admission fee for the first semester/year or full program.",
    },
    {
      num: "03",
      title: "Document Upload",
      desc: "Upload supporting documents & submit your application.Mandatory documents are Proof of identity - Aadhaar card (mandatory for Indian citizens), Proof of address - Aadhaar card, passport, voter’s ID, gas bill, bank statement, post-paid mobile statement , lass 10 & 12 marksheet and Graduation marksheet (for PG students)",
    },
    {
      num: "04",
      title: "University Approval",
      desc: "The university will evaluate your documents to confirm your admission.",
    },
  ];

  const faqs = [
    {
      q: "What is the duration and mode of delivery of the SMU Online BA program?",
      a: "The BA program runs for 3 years (six semesters) and is delivered completely online.",
    },
    {
      q: "What specializations are available under the Online BA?",
      a: "You can choose from specializations such as English, Political Science, and Sociology.",
    },
    {
      q: "What are the eligibility requirements to apply for Online BA?",
      a: "Applicants must have passed 10+2 (or equivalent) from a recognised board or hold a valid diploma qualification. There’s no upper-age limit, and final-year 10+2 students may also apply provisionally.",
    },
    {
      q: "Is the degree from SMU's Online BA program recognized and valid?",
      a: "Yes - the program is UGC-entitled and delivered by a university accredited by NAAC A+, so the online BA holds the same academic validity as a regular on-campus BA degree.",
    },
    {
      q: "How are classes, study materials, and assessments conducted?",
      a: "Learning is fully online through live or recorded sessions, digital study material, and virtual classrooms. Assignments and examinations are conducted online.",
    },
  ];

  /* fees crousel */
      function FeesCarousel() {
        const cards = [
          {
            title: "Annual Payment",
            amount: "₹75,000/-",
            sub: "Inclusive of all taxes",
          },
          {
            title: "Semester Wise",
            amount: "₹12,500/-",
            sub: "Inclusive of all taxes",
          },
          {
            title: "EMI starting at",
            amount: "₹2,083/-",
            sub: "per month [Terms & Conditions apply]",
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
                  className="bg-linear-to-b from-[#270652] to-[#3C087E]/50 rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
                >
                  <div>
                    <p className="font-semibold text-white">{cards[index].title}</p>
                    <p className="text-xs text-white mt-1">(in INR)</p>
                    <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">BA</p>
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
                    backgroundColor: index === i ? "#270652" : "#d1d5db",
                  }}
                  className="w-3 h-3 rounded-full"
                />
              ))}
            </div>
          </div>
        );
      }

  const topFaculty = [
    {
      name: "Dr. Sachin Limbu",
      title: "Assistant Professor",
      image: "/smu/faculties/sachin.png",
    },
    {
      name: "Mr. T.N Bhutia",
      title: "Assistant Professor",
      image: "/smu/faculties/bhutia.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Ramesh Sharma",
      title: "Adjunct Faculty",
      image: "/smu/faculties/ramesh.png",
    },
    {
      name: "Ms. Mrinalini Subba",
      title: "Assistant Professor",
      image: "/smu/faculties/mrinalini.png",
    },
    {
      name: "Ms. Anshu Chhetri",
      title: "Assistant Professor",
      image: "/smu/faculties/anshu.png",
    },
    {
      name: "Mr. Pawan Rai",
      title: "Assistant Professor",
      image: "/smu/faculties/pawan.png",
    },
  ];

  const whyCards = [
    {
      logo: Star,
      heading: "Credibility",
      subheading:
        "SMU is a nationally recognised institution with NAAC A+ accreditation and UGC-entitled programs, ensuring your degree holds strong academic and professional value across industries.",
    },
    {
      logo: Building2,
      heading: "Legacy",
      subheading:
        "Since 1995, SMU has built a strong reputation for delivering high-quality, industry-relevant education through innovative learning models and experienced faculty.",
    },
    {
      logo: BookOpenCheck,
      heading: "Trust",
      subheading:
        "SMU’s distance and online education ecosystem has empowered more than 5 lakh learners—making it one of India's most trusted and preferred universities for flexible higher education.",
    },
    {
      logo: Speech,
      heading: "Technology",
      subheading:
        "With a next-generation learning management system, SMU offers 24/7 access to live & recorded classes, e-libraries, discussion forums, and remote-proctored exams, ensuring a seamless learning experience anytime, anywhere.",
    },
    {
      logo: SplinePointer,
      heading: "Flexibility",
      subheading:
        "SMU's online programs are designed to fit your schedule—allowing you to study without interrupting your job or personal commitments.",
    },
    {
      logo: FileUser,
      heading: "Support",
      subheading:
        "Dedicated academic & career assistance to guide you throughout your learning journey.",
    },
  ];

  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Upskill and Certify",
      text: "Advance your career with in-demand skill training and certifications that employers value.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />
      ),
      title: "Industry Relevance",
      text: "Engage in live sessions with industry professionals who provide practical insights, career advice, and up-to-date market trends to prepare you for real-world roles.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />
      ),
      title: "Self-paced Learning",
      text: "Flexible self-paced modules to improve communication, polish your resume, build professional etiquette, and gain hands-on industry skills.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Discover your strengths and skill gaps with targeted assessments that help you develop the competencies required to boost your employability.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "AI Placement Portal",
      text: "Elevate your job readiness with Online Manipal's AI-powered placement portal, where you can practice unlimited mock interviews, receive instant insights, and seamlessly apply to career opportunities.",
    },
    {
      icon: (
        <ChartNoAxesColumn
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Placement & Job Fairs",
      text: "Launch your career through extensive placement drives and job fairs that give you access to recruiters across sectors. Discover various job opportunities, participate in interviews, and engage with employers.",
    },
  ];

  const stats = [
    { value: "3", label: "Years Duration" },
    { value: "6", label: "Semesters" },
    { value: "4", label: "Years Validity" },
    { value: "15-20", label: "hours per week" },
  ];
  return (
   <main className="flex flex-col items-center w-full bg-white">
        <section className="relative min-h-[50vh] w-full ">
                                               {/* Background Image */}
                                               <div className="absolute inset-0">
                                                 <Image
                                                   src="/smu/smuUniv.png"
                                                   alt="Campus"
                                                   fill
                                                   className="object-cover object-center"
                                                 />
                                                 <div className="absolute inset-0 bg-black/80" />
                                               </div>
                                               {/* LOGO – move to left screen edge, keep same height */}
                                               <div className="relative z-10 w-full mt-20 md:mt-28">
                                                 <motion.div
                                                   initial={{ opacity: 0, x: -30 }}
                                                   whileInView={{ opacity: 1, x: 0 }}
                                                   transition={{ duration: 0.6 }}
                                                   viewport={{ once: true }}
                                                   className="flex"
                                                 >
                                                   <div className="bg-white rounded-r-2xl shadow-md h-[60px] sm:h-[80px] lg:h-[100px] -mb-5 flex items-center px-3 sm:px-4">
                                               <Image
                                                 src="/smu.png"
                                                 alt="SMU Logo"
                                                 width={220}
                                                 height={100}
                                                 className="object-contain w-[140px] sm:w-[180px] lg:w-[220px]"
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
                                                                                           className="inline-flex items-center gap-2 bg-[#ffb901] text-white text-[12px] md:text-[16px] lg:text-[18px] mt-6 mb-2 px-2 md:px-4 md:py-1 rounded-full"
                                                                                         >
                                                                                           4.5 <Star  className="w-3 h-3 md:w-4 md:h-4"/>
                                                                                         </motion.span>
                                       
                                                 {/* Subtext */}
                                                 <motion.p
                                                   initial={{ opacity: 0, x: -20 }}
                                                   whileInView={{ opacity: 1, x: 0 }}
                                                   transition={{ duration: 0.6, delay: 0.1 }}
                                                   viewport={{ once: true }}
                                                   className="text-white text-[12px] md:text-[16px] italic font-light"
                                                 >
                                                    Bachelor of Arts
                                                 </motion.p>
                                       
                                                 {/* TITLE + DESCRIPTION */}
                                                 <div className="flex flex-col items-start">
                                                   <motion.h1
                                                     initial={{ opacity: 0, y: -20 }}
                                                     whileInView={{ opacity: 1, y: 0 }}
                                                     transition={{ duration: 0.7 }}
                                                     viewport={{ once: true }}
                                                     className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-[Inter] font-bold mt-1 leading-tight"
                                                   >
                                                  Online BA Degree
                 
                                                   </motion.h1>
                                       
                                                   <motion.p
                                                     initial={{ opacity: 0 }}
                                                     whileInView={{ opacity: 1 }}
                                                     transition={{ duration: 0.7, delay: 0.2 }}
                                                     viewport={{ once: true }}
                                                     className="text-gray-200 text-left text-[10px] md:text-[16px] lg:text-[18px] max-w-7xl mt-0 lg:mb-5 leading-relaxed"
                                                   >
                                                   Sikkim Manipal University’s 100% online BA offers an updated curriculum in English, Sociology, and Political Science with AI-powered learning, flexible live/recorded classes, interactive forums, quizzes, and networking—preparing learners for diverse career opportunities from home.
                                                </motion.p>
                                       
                                                   {/* STATS */}
                                                   <motion.div
                                                     initial={{ opacity: 0, y: 20 }}
                                                     whileInView={{ opacity: 1, y: 0 }}
                                                     transition={{ duration: 0.7 }}
                                                     viewport={{ once: true }}
                                                     className="grid grid-cols-2 mt-5 md:grid-cols-2 lg:grid-cols-4 lg:-mx-5 xl:-mx-15 gap-y-5 font-[Inter] w-full"
                                                   >
                                                     {stats.map((stat, idx) => (
                                                       <div
                                                         key={idx}
                                                         className={`text-center py-2 lg:py-6 
                                         ${idx % 2 === 0 ? "border-r-2 border-white" : ""} 
                                         ${idx !== stats.length - 1 ? "lg:border-r-2 lg:border-white" : ""}
                                       `}
                                                       >
                                                         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-1">
                                                           {stat.value}
                                                         </p>
                                                         <p className="text-white text-[10px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-bold">
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
                                                     className="flex flex-row gap-2 md:gap-4 mt-8 lg:mt-12 w-full items-center justify-center"
                                                   >
                                                      <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2  bg-[#3D077E] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                                                          transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-100 text-[12px] md:text-[16px] xl:text-[22px] px-2 py-2 md:px-6 md:py-3 whitespace-nowrap rounded-lg hover:bg-blue-950 font-medium">
                                                                    Download Brochure
                                                                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                                                                  </button>
                                                    
                                                                  <button onClick={() => setIsModalOpen(true)} className=" bg-[#F6A410] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white text-[12px] md:text-[16px] xl:text-[22px] shadow-md
                                                          ease-out
                                                          hover:scale-105 hover:shadow-lg
                                                          active:scale-100 flex items-center justify-center gap-2 px-2 py-2 md:px-6 md:py-3 whitespace-nowrap rounded-lg hover:bg-yellow-600 transition-all duration-300 font-medium">
                                                                    Talk to an Expert
                                                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
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
              About <span className="text-[#B35531] ">SMU </span>
            </h2>

            <p className="text-black leading-relaxed text-xs lg:text-[18px] mb-10">
              Sikkim Manipal University (SMU), established in 1995, is a NAAC A+
              accredited and UGC-entitled institution known for its academic
              credibility and technology-enabled education. SMU provides
              learners with industry-relevant, high-quality programs designed
              for today’s competitive world.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl overflow-hidden md:-mr-10">
              <img
                src="/smu/aboutSmu.jpeg"
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
                        className="text-[28px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[120%] font-bold text-[#270652] mb-3 md:mb-8 text-center"
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
                            <h3 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                              NAAC A+
                            </h3>
                            <p className="text-[8px] md:text-[16px] xl:text-[22px] md:text-sm font-bold opacity-90 leading-tight">
                              accredited
                            </p>
                          </motion.div>
            
                          {/* STAT 2 */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            <h3 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                              UGC
                            </h3>
                            <p className="text-[8px] md:text-[16px] xl:text-[22px] md:text-sm font-bold opacity-90 leading-tight">
                              Entitled Degree
                            </p>
                          </motion.div>
            
                          {/* STAT 3 */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <h3 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                              Rank 1
                            </h3>
                            <p className="text-[8px] md:text-[16px] xl:text-[22px] md:text-sm font-bold opacity-90 leading-tight">
                              in North East by IIRF
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
            <span className="text-[#B35531] ">
             The online Bachelor of Arts (BA) from Sikkim Manipal University (SMU) offers an up-to-date curriculum to equip learners with in-demand skills and knowledge for the evolving job market.
             </span>
             With a combination of English, Sociology, and Political Science, this three-year online BA degree program enables learners to explore career opportunities across various fields of study. This 100% online degree course in India is delivered through an AI-enabled learning management system that allows learners to access industry-oriented learning resources, attend live and recorded classes, participate in discussion forums, resolve queries using an AI tutor, and take quizzes – all from the comfort of their homes. Learners can also boost their career prospects by networking with peers and faculty and joining the prestigious Manipal alumni status.
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
               Fully Online, Flexible & Affordable Degree with UGC-Entitlement
               </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
              The Online BA from SMU offers a UGC-entitled 3-year undergraduate degree, delivered entirely online. With a modest total fee (₹75,000) and semester-wise payment option, it makes quality higher education accessible and budget-friendly.
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
              Multi-Disciplinary Humanities & Social-Science Foundation + Career-Ready Skills
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
              With specializations in English, Political Science and Sociology, this BA program builds strong analytical, critical thinking, and communication skills preparing learners for a wide range of career paths in fields like content creation, public service, academia, research, media, and social sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

          <CourseCurriculumSection
  years={[1, 2, 3]}
  data={{
    /* ----------------------------- YEAR 1 ----------------------------- */
    1: {
      semesters: {
        semester1: {
          title: "Semester 1",
          coreSubjects: [
            "Natural Science - 1",
            "Communicative English",
            "Indian English Literature",
            "Foundations of Political Science",
            "Introduction to Sociology",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "Sociology",
                topics: [
                  "Introduction to Sociology",
                  "Foundations of Political Science",
                  "Indian English Literature",
                  "Communicative English",
                  "Natural Science",
                ],
              },
              {
                name: "English",
                topics: [
                  "Indian English Literature",
                  "Communicative English",
                  "Natural Science",
                  "Introduction to Sociology",
                  "Foundations of Political Science",
                ],
              },
              {
                name: "Political Science",
                topics: [
                   "Foundations of Political Science",
                  "Introduction to Sociology",
                  "Indian English Literature",
                  "Communicative English",
                  "Natural Science",
                ],
              },
            ],
          },
        },

        semester2: {
          title: "Semester 2",
          coreSubjects: [
            "Functional English",
            "Environmental Studies",
            "World Literature",
            "Political Theory",
            "Sociology in India",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "English",
                topics: [
                  "World Literature",
                  "Functional English",
                   "Sociology in India",
                  "Political Theory",
                  "Environmental Studies",
                ],
              },
              {
                name: "Sociology",
                topics: [
                  "Sociology in India",
                  "Political Theory",
                  "World Literature",
                  "Functional English",
                  "Environmental Studies",
                ],
              },
              {
                name: "Political Science",
                topics: [
                  "Political Theory",
                  "Sociology in India",
                  "World Literature",
                  "Functional English",
                  "Environmental Studies",
                ],
              },
            ],
          },
        },
      },
    },

    /* ----------------------------- YEAR 2 ----------------------------- */
    2: {
      semesters: {
        semester3: {
          title: "Semester 3",
          coreSubjects: [
            "Digital Fluency",
            "Academic Writing",
            "Essays and Poetry",
            "Comparative Political Analysis",
            "Rural Sociology",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "Political Science",
                topics: [
                  "Comparative Political Analysis",
                  "Rural Sociology",
                  "Essays and Poetry",
                  "Universal Human Values",
                  "Digital Fluency",
                ],
              },
              {
                name: "English",
                topics: [
                  "Essays and Poetry",
                  "Comparative Political Analysis",
                  "Rural Sociology",
                  "Universal Human Values",
                  "Digital Fluency",
                ],
              },
              {
                name: "Political Science",
                topics: [ 
                  "Rural Sociology",
                  "Comparative Political Analysis",
                  "Essays and Poetry",
                  "Universal Human Values",
                  "Digital Fluency",
                ],
              },
            ],
          },
        },

        semester4: {
          title: "Semester 4",
          coreSubjects: [
            "New Literature in English",
            "Literary Terms, Forms, and Movements",
            "Classical Indian Political Thought",
            "Theories of International Relations",
            "Urban Sociology",
            "Methods in Social Research",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "English",
                topics: [
                   "New Literature in English",
                  "Literary Terms, Forms, and Movements",
                  "Women Writing in English",
                  "Classical Indian Political Thought",
                  "Urban Sociology",
                ],
              },
               {
                name: "Sociology",
                topics: [
                   "Urban Sociology",
                  "Family, Kinship, and Marriage",
                  "Principle of Sociology",
                  "Classical Indian Political Thought", 
                  "New Literature in English",
                ],
              },
               {
                name: "Political Science",
                topics: [
                  "Classical Indian Political Thought",
                  "Theories of International Relations",
                  "Political Economy",
                  "Urban Sociology",
                  "New Literature in English",
                ],
              },
            ],
          },
        },
      },
    },

    /* ----------------------------- YEAR 3 ----------------------------- */
    3: {
      semesters: {
        semester5: {
          title: "Semester 5",
          coreSubjects: [
            "One Act Plays",
            "Poetry: Evolution, Elements and Genres",
            "Human Rights",
            "Political Processes in India",
            "Sociology of Change and Development",
            "Social Problems in India",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "English",
                topics: [
                  "Victorian and Modern Literature",
                  "Poetry: Evolution, Elements and Genres",
                  "Children’s Literature",
                  "Human Rights",
                  "Social Problems in India",
                ],
              },
               {
                name: "Sociology",
                topics: [
                  "Classical Sociological Thinkers",
                  "Social Problems in India",
                  "Social Demography",
                  "Human Rights",
                  "Children’s Literature",
                ],
              },
               {
                name: "Political Science",
                topics: [
                  "Political Processes in India",
                  "India’s Foreign Policy in a Globalized World",
                  "Children’s Literature",
                  "Human Rights",
                  "Social Problems in India",
                ],
              },
            ],
          },
        },

        semester6: {
          title: "Semester 6",
          coreSubjects: [
            "American Literature",
            "Novels and Short Stories",
            "Public Policy and Administration in India",
            "United Nations and Global Conflicts",
            "Social Movement in India",
            "Sociology of Change and Development",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "English",
                topics: [
                  "American Literature",
                  "One Act Plays: Introduction & Studies",
                  "Novels and Short Stories",
                  "United Nations and Global Conflicts",
                  "Sociology of Change and Development",
                ],
              },
               {
                name: "Sociology",
                topics: [
                  "Sociology of Change and Development",
                  "Sociology of Education",
                  "Social Movements in India",
                  "United Nations and Global Conflicts",
                  "American Literature",
                ],
              },
               {
                name: "Political Science",
                topics: [
                  "United Nations and Global Conflicts",
                  "Public Policy and Administration in India",
                  "Gender and Politics",
                  "Sociology of Change and Development",
                  "American Literature",
                ],
              },
            ],
          },
        },
      },
    },
  }}
/>



      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-[32px] sm:text-4xl md:text-[54px] lg:text-[64px] font-bold text-[#270652] mb-4 md:mb-7">
            Eligibility Criteria
          </h2>

          {/* Indian Students */}
          <div className="mb-5">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] md:mb-4">
              For Indian students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Educational qualification
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
                  Candidates must have completed 10+2 from a recognized national or state board institution or 10+3 diploma from a recognized national or state institute.
             </p>

             <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] md:mb-4">
              For NRI & foreign students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Educational qualification
            </h4>
            <ul className="text-black text-[12px] px-5 list-disc md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                 Candidates must have completed 10+2 / intermediate / senior secondary from a recognized board or an equivalent qualification as recognized by the Association of Indian Universities in any discipline.
                 </li>
              <li>
                 Candidates who have completed 10+2 education outside India must produce a certificate of equivalence issued by the Association of Indian Universities.
                  </li>
            </ul>

            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Other requirements 
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates who are not Indian citizens or residing outside India and holding NRE or PIO status will be billed an international fee for respective degrees & may need to submit documents mentioned but not limited to CV, address proof, valid visa, PR card & passport copy as part of the application process.
            </p>
          </div>
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
                              className="text-left text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16"
                            >
                              The Sikkim Manipal Online BA follows a structured and
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
                                className="bg-[#3C087E]/5 text-white p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                              >
                                <h3 className=" text-md md:text-2xl text-[#3C087E] font-semibold italic mb-5">
                                  Exam Slot Booking
                                </h3>
                  
                                {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
                                <div className="space-y-5 text-lg leading-relaxed max-w-[380] text-black mx-auto">
                                  {/* POINT 1 */}
                                  <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                                    <span className="text-lg lg:text-2xl leading-none">✦</span>
                                    <p className="text-left text-lg lg:text-2xl mb-6">
                                      Learners must book their examination slots through the SMU
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
                                className="bg-[#3C087E]/5 text-white p-5 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                              >
                                <h3 className="text-md md:text-2xl text-[#3C087E] font-semibold italic mb-5">
                                  Exam Slot Timings
                                </h3>
                  
                                <p className="text-lg lg:text-2xl max-w-[380] mb-6 text-black text-center">
                                  For end-term examinations, SMU provides three available slots:
                                </p>
                  
                                {/* Exam Time Circles */}
                                <div className="flex items-center justify-center text-black gap-6 mb-7">
                                  {["9 AM", "1 PM", "5 PM"].map((slot, i) => (
                                    <div
                                      key={i}
                                      className="w-15 h-15 border border-black rounded-full flex items-center justify-center text-lg font-semibold"
                                    >
                                      {slot}
                                    </div>
                                  ))}
                                </div>
                  
                                <p className="text-lg lg:text-2xl max-w-[380] text-black text-center">
                                  Candidates may choose their preferred slot based on
                                  availability.
                                </p>
                              </motion.div>
                            </div>
                          </div>
                        </section>
                  
                        <section className="w-full px-4 md:px-10 lg:px-20 font-[Inter]">
                          <div className="max-w-6xl mx-auto p-6 md:p-10">
                            {/* HEADING */}
                            <h2 className="text-[24px] md:text-[40px] font-bold italic text-[#270652] mb-12 text-center">
                              ASSESSMENT STRUCTURE (100 MARKS)
                            </h2>
                  
                            {/* TWO CATEGORIES */}
                            <div className="grid grid-cols-1 md:grid-cols-2  text-black gap-12">
                              {/* LEFT CATEGORY */}
                              <div className="space-y-2 w-full">
                                <div className="w-full rounded-lg border border-[#270652] py-3 text-center italic font-semibold bg-white">
                                  External Assessment – 70 Marks
                                </div>
                  
                                {/* FULL-WIDTH SPLIT ROW */}
                                <div className="grid grid-cols-2 gap-2 w-full">
                                  <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                    MCQ (40 Marks)
                                  </div>
                                  <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                    Descriptive Answers (30 Marks)
                                  </div>
                                </div>
                              </div>
                  
                              {/* RIGHT CATEGORY */}
                              <div className="space-y-2 w-full">
                                <div className="w-full rounded-lg border border-[#270652] py-3 text-center italic font-semibold bg-white">
                                  Internal Assessment – 30 Marks
                                </div>
                  
                                {/* FULL-WIDTH SPLIT ROW */}
                                <div className="grid grid-cols-2 gap-2 w-full">
                                  <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                    Quiz
                                  </div>
                                  <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                    Assignment
                                  </div>
                                </div>
                              </div>
                            </div>
                  
                            {/* PASSING CRITERIA */}
                            <div className="border border-[#e5e7eb] rounded-lg p-5 mt-12 bg-white">
                              <p className="font-semibold text-black mb-1">Passing Criteria</p>
                              <ul className="list-disc pl-6 text-[#3C3C43] text-sm md:text-lg">
                                <li>
                                  A candidate must secure a minimum of 40% to successfully pass
                                  the course.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>

      <MujCareerServices benefits={benefits} onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
        <div className="px-2 w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
              <h2 className="text-[#270652] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4 md:mb-10">
                Fees Structure
              </h2>

              {/* Subtitle */}
              <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-10">
                Convenient Fee payment option:
                <br />
                Choose your preferred fee payment option
              </p>

              {/* CTA visible only on large screens */}
              <button onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-[#F6A410] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit">
                Compare all Plans
              </button>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="w-full lg:w-[35%] flex justify-center">
              <FeesCarousel />
            </div>

            {/* CTA below carousel on mobile only */}
            <button onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-[#F6A410] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
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

          {/* Bullet Points */}
          <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
            <li>
              All payments must be done exclusively through official links on
              the onlinemanipal.com domain.
            </li>
            <li>
              Do not make payments to any unauthorized individuals or via any
              unofficial links / QR codes or other websites.
            </li>
            <li>
              The university is not liable for any issues arising from payments
              made outside the authorized platform.
            </li>
            <li>
              All Indian Nationals paying fees in INR will be treated as
              domestic students and can access the LMS(Learning Management
              System) and academic content only within India.
            </li>
          </ul>
        </motion.div>
      </section>

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={0}
      />

      <section className="w-full flex items-center justify-center pt-10 px-6 md:px-18">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">
              Degree Sample
            </p>

            <h2 className="text-[#270652] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
              Sikkim Manipal<br/>
               University Online <br />
              BA Certificate
            </h2>

            <p className="text-[#3C3C43] max-w-[350px] text-base">
              Graduate with UGC-entitled and
              <br /> internationally accepted online degrees.
            </p>

            {/* IMAGE that appears ONLY on mobile, above CTA */}
            <div className="md:hidden flex justify-center">
              <img
                src="/smu/smuBaDegree.png"
                alt="Certificate Preview"
                className="w-full max-w-xs rounded-lg shadow-sm"
              />
            </div>

            {/* CTA BUTTON  */}
          <div className="flex justify-center md:justify-start">
  <button
    onClick={() => setIsModalOpen(true)}
    className="bg-[#F6A410] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200"
  >
    Know more
  </button>
</div>

          </div>

          {/* RIGHT IMAGE (visible only on md+ screens) */}
          <div className="hidden md:flex justify-center mt-5">
            <img
              src="/smu/smuBaDegree.png"
              alt="Certificate Preview"
              className="w-full max-w-sm rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white mt-10 lg:mt-20 px-4 md:px-12 lg:px-20 font-[Inter]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
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
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
             rounded-full
             flex items-center justify-center
           "
              >
                <UserLock
                  strokeWidth={1.0}
                  className="
                 text-white
                 w-8 h-8
                 md:w-8 md:h-8
                 lg:w-9 lg:h-9
               "
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                 Flexible, 100% Online Learning that Fits You
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Study from anywhere at your own pace — all lectures, assignments, and exams are delivered through a full online platform. This makes the program ideal if you are working, managing personal commitments, or located far from a campus.
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
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
             rounded-full
             flex items-center justify-center
           "
              >
                <Headset
                  strokeWidth={1.0}
                  className="
                 text-white
                 w-8 h-8
                 md:w-8 md:h-8
                 lg:w-9 lg:h-9
               "
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                 Affordable, Recognized Degree with Good Value
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                 SMU’s Online BA is UGC-entitled, offered by a NAAC A+ accredited university, and carries the same validity as an on-campus degree. Plus, the fee structure is budget-friendly, with semester-wise payments or EMI options.
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
             rounded-full
             flex items-center justify-center
           "
              >
                <StickyNote
                  strokeWidth={1.0}
                  className="
                 text-white
                 w-8 h-8
                 md:w-8 md:h-8
                 lg:w-9 lg:h-9
               "
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                 Versatile Career & Academic Pathways
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                Graduates can pursue further education, or explore roles across sectors — journalism, content writing, public administration, social research, media, education, civil services, and more — thanks to the program’s interdisciplinary exposure.
                </p>
              </div>
            </motion.div>
            

            {/* Item 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
             rounded-full
             flex items-center justify-center
           "
              >
                <GlobeLock
                  strokeWidth={1.0}
                  className="
                 text-white
                 w-8 h-8
                 md:w-8 md:h-8
                 lg:w-9 lg:h-9
               "
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                 Strong Foundation in Humanities & Social Sciences
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                 The curriculum covers core disciplines like English Literature, Political Science, and Sociology — giving you critical thinking, communication, analytical, and societal-awareness skills useful for diverse career paths.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-10 lg:py-20 md:px-12 lg:px-20">
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
              Gain practical, job-ready skills through diploma programs designed
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
                className="flex justify-center"
              >
                <Image
                  src="/nmimsCareer.png"
                  width={400}
                  height={400}
                  alt="Career Opportunities"
                  className="
                    w-full 
                    mt-10
                    sm:mt-0
                    max-w-[260px]  /* Medium screens */
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
                  "Public Administration",
                  "Public Relations",
                  "Community Outreach",
                  "Research and Development",
                  "Urban Planning ",
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsModalOpen(true)}
                  className="
                              w-[200px] 
                              mt-6 py-3 px-6 
                              rounded-lg 
                              text-white text-sm 
                              bg-[#F6A410]
                              self-center lg:self-start
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

      <section className="w-full px-4 md:px-10 lg:px-20 py-10">
        {/* TITLE */}
        <h2 className="text-[#270652] font-bold flex flex-row items-center justify-center font-[Inter] md:text-[42px] text-[36px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className=" max-w-5xl flex items-center justify-center bg-[#D68E0E]/10 text-[#D68E0E] font-semibold text-center m-auto px-10 lg:px-30 gap-10 lg:gap-25 py-8 text-[14px] md:text-[24px] rounded-xl">
            <p>ADMISSION CLOSING SOON FOR JANUARY 26 SESSION</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

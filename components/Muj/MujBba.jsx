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
  BriefcaseBusiness,
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
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import CourseCurriculumSection from "@/components/NmimsSection/CourseCurriculumSection";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import MujCareerServices from "../NmimsSection/MujCareerServices";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const learningCards = [
    {
      icon: Tally4,
      title: "Coursera for Skill Development",
      desc: "Learners receive exclusive access to Coursera, allowing them to earn certifications from global industry leaders in digital marketing, analytics, management, technology, and more—boosting employability.",
    },
    {
      icon: BookCheck,
      title: "Modern LMS for Seamless Learning",
      desc: "MUJ’s feature-rich platform provides course material, assignments, progress tracking, support services and discussion boards all accessible on both web and mobile.",
    },
    {
      icon: Headset,
      title: "Blended Pedagogy: Live + Recorded + Self-Learning Modules",
      desc: "The teaching format combines live lectures, recorded videos, e-books/resources, and discussion forums with faculty interaction — supporting every learning style.",
    },
  ];
  const faqs = [
    {
      q: "What is the eligibility requirement for the Online BBA?",
      a: "Applicants must have completed 10+2 (or equivalent) from a recognised board or institution, with a minimum aggregate of 40% marks.",
    },
    {
      q: " Is prior work experience required to enrol?",
      a: "No work experience is required. The program is open to students who have completed their 10+2 education.",
    },
    {
      q: "Can I tailor the program to my interests?",
      a: "Yes. You may choose from 7 in-demand electives such as Finance & Accounting, Digital Marketing, Entrepreneurship & Family Business, Retail & E-commerce, and others to align your studies with your career goals.",
    },
    {
      q: "Is the program fully online, and what platform features are provided?",
      a: "Yes, the program is delivered entirely online with live and recorded classes, a robust e-learning platform, and anytime/anywhere access.",
    },
    {
      q: "How flexible is the fee payment and financing option?",
      a: "The program offers flexible payment options including EMI plans along with scholarships and fee concessions for eligible learners.",
    },
  ];

  const whyCards = [
    {
      logo: Star,
      heading: "Accreditation",
      subheading:
        "MUJ is NAAC A+ accredited, UGC-approved and appears in major university rankings—offering strong credibility and trust.",
    },
    {
      logo: SplinePointer,
      heading: "Flexibility",
      subheading:
        "The university offers 100% online enrolment, classes, assessments and student support — enabling you to learn from anywhere without compromising quality.",
    },
    {
      logo: BookOpenCheck,
      heading: "Relevance",
      subheading:
        "Online degrees at MUJ are UGC-entitled and equivalent to campus degrees, ensuring your qualification is comprehensive and respected.",
    },
    {
      logo: Speech,
      heading: "Expertise",
      subheading:
        "MUJ's online programmes are taught by faculty with strong academic credentials and real-world industry experience — enhancing the quality and practical relevance of learning.",
    },
    {
      logo: Building2,
      heading: "Infrastructure",
      subheading:
        "The platform showcases a diverse learner base across cities and age groups, with optional on-campus immersion — giving you flexibility plus networking opportunities.",
    },
    {
      logo: FileUser,
      heading: "Career-Support",
      subheading:
        "MUJ provides placement assistance, career guidance and industry-focused sessions — helping learners transition smoothly into job roles or advance in their careers.",
    },
  ];

  const topFaculty = [
    {
      name: "Dr. Mehak Gulati",
      title: "Ph.D, M.Com-Assistant Prof.",
      image: "/muj/faculties/mehak.png",
    },
    {
      name: "Dr. david Campbell",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/muj/faculties/david.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Harendra Singh",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/muj/faculties/harendra.png",
    },
    {
      name: "Dr. Anadi Trikha",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/muj/faculties/anadi.png",
    },
    {
      name: "Dr. Arpita Aggarwal",
      title: "Ph.D, M.Com- Assistant prof.",
      image: "/muj/faculties/arpita.png",
    },
    {
      name: "Dr. Rohit S Tomar",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/muj/faculties/rohit.png",
    },
  ];

  /* fees crousel */
      function FeesCarousel() {
        const cards = [
          {
            title: "Full Course Fee",
            amount: "₹1,35,000/-",
            sub: "Inclusive of all taxes",
          },
           {
            title: "Semester Wise",
            amount: "₹22,500/-",
             sub: "Inclusive of all taxes",
          },
          {
            title: "EMI starting at",
            amount: "₹3,750/-",
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
                    <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">BBA</p>
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

  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#270652] w-18 h-18"
        />
      ),
      title: "Upskill and Certify",
      text: "Advance your career with in-demand skill training and certifications that employers value.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#270652] w-18 h-18" />
      ),
      title: "Industry Relevance",
      text: "Engage in live sessions with industry professionals who provide practical insights, career advice, and up-to-date market trends to prepare you for real-world roles.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#270652] w-18 h-18" />
      ),
      title: "Self-paced Learning",
      text: "Flexible self-paced modules to improve communication, polish your resume, build professional etiquette, and gain hands-on industry skills.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#270652] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Discover your strengths and skill gaps with targeted assessments that help you develop the competencies required to boost your employability.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#270652] w-18 h-18"
        />
      ),
      title: "AI Placement Portal",
      text: "Elevate your job readiness with Online Manipal's AI-powered placement portal, where you can practice unlimited mock interviews, receive instant insights, and seamlessly apply to career opportunities.",
    },
    {
      icon: (
        <ChartNoAxesColumn
          strokeWidth={1.0}
          className="text-[#270652] w-18 h-18"
        />
      ),
      title: "Placement & Job Fairs",
      text: "Launch your career through extensive placement drives and job fairs that give you access to recruiters across sectors. Discover various job opportunities, participate in interviews, and engage with employers.",
    },
  ];

  const stats = [
    { value: "36", label: "Months" },
    { value: "15-20", label: "hours per week" },
    { value: "6", label: "semesters" },
    { value: "15% ", label: "scholarship 1st Sem" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
       <section className="relative min-h-screen lg:min-h-[50vh] xl:min-h-screen w-full">
             {/* Background Image */}
             <div className="absolute inset-0">
               <Image
                 src="/muj/mujUniv.png"
                 alt="Campus"
                 fill
                 className="object-cover object-center"
               />
               <div className="absolute inset-0 bg-black/85" />
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
                 <div className="bg-white rounded-r-xl shadow-md h-[100px] -mb-5 px-2 flex items-center">
                   <Image
                     src="/manipal.png"
                     alt="manipal Jaipur Logo"
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
                 className="inline-flex items-center gap-2 bg-[#ffb901] text-white text-[18px] sm:text-[18px] mt-6 mb-2 px-4 py-1 rounded-full"
               >
                 4.8 <Star size={15} />
               </motion.span>
     
               {/* Subtext */}
               <motion.p
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 viewport={{ once: true }}
                 className="text-white text-[16px] sm:text-[16px] italic font-light"
               >
                 (Bachelor of Business Administration)

               </motion.p>
     
               {/* TITLE + DESCRIPTION */}
               <div className="flex flex-col items-start">
                 <motion.h1
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.7 }}
                   viewport={{ once: true }}
                   className="text-white text-4xl md:text-5xl lg:text-[54px] font-[Inter] xl:text-[64px] font-bold -mt-1 leading-tight"
                 >
                 Online BBA Degree

                 </motion.h1>
     
                 <motion.p
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.7, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
                 >
                  Launch your management career with MUJ’s Online BBA, a 3-year program for 10+2 students. Choose from 7 electives like Digital Marketing, Finance, and Retail. Learn flexibly through live/recorded classes and expert support, plus gain Coursera certifications for industry-ready skills.
                 </motion.p>
     
                 {/* STATS */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.7 }}
                   viewport={{ once: true }}
                   className="grid grid-cols-2 mt-2 md:grid-cols-2 lg:grid-cols-4  gap-y-5 w-full"
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
                   About <span className="text-[#F26722] ">MUJ </span>
                 </h2>
     
                 <p className="text-black leading-relaxed text-xs lg:text-[18px] mb-10">
                   Manipal University Jaipur (MUJ) is a UGC-approved, NAAC A+
                   accredited university known for its strong academic standards and
                   industry-relevant teaching. As part of the prestigious Manipal
                   Group, MUJ brings innovation, credibility, and global recognition
                   to online education. Its UGC-entitled online degree programs
                   provide flexible learning options for students and working
                   professionals across India. Backed by an extensive curriculum,
                   experienced faculty, and a cutting-edge digital platform, MUJ
                   offers a complete learning experience aligned with industry
                   expectations.
                 </p>
               </div>
     
               {/* RIGHT IMAGE WITH CURVED SHAPE */}
               <div className="relative w-full h-full flex md:justify-end ">
                 <div className="max-w-7xl overflow-hidden md:-mr-10 ">
                   <img
                     src="/muj/aboutMuj.png"
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
                            <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center text-[#37087E]">
                              {/* STAT 1 */}
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                              >
                                <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                                  NAAC A+
                                </h3>
                                 <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                                  Rajasthan's First
                                </p>
                              </motion.div>
                
                              {/* STAT 2 */}
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                              >
                                <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                                  UGC
                                </h3>
                                 <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
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
                                <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                                  #9
                                </h3>
                                <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                                  Rank By Careers360
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </section>
     
           <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
             {/* ===== Top Text Section ===== */}
             <div className="max-w-6xl text-left mx-auto">
               <h2 className="text-xl md:text-2xl font-regular lg:text-[40px] leading-normal text-gray-900">
                 <span className="text-[#F26722] ">
                   Launch your management career with MUJ’s online BBA, a three-year undergraduate program designed for students who have completed 10+2.{" "}
                 </span>
                 Tailored for success across industries like banking, hospitality, healthcare, insurance, and manufacturing, the program lets you choose from 7 popular electives including Digital Marketing, Finance & Accounting, and Retail & E-commerce. Study at your convenience through MUJ’s digital learning platform with live and recorded classes, rich e-learning content, and expert faculty support. You’ll also get exclusive access to Coursera to earn certifications from top global institutions.
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
                     Diverse Career Options
                   </h3>
                   <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                     Once you complete the program, unlock pathways to advanced degrees or begin your career in dynamic fields like Marketing, Data Science, Sales, Project Management, Supply Chain, Finance, and several others.
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
                     Get Access To Exclusive Coursera Benefits
                   </h3>
                   <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                     Choose from 10,000+ courses & professional certifications from
                     leading global universities while pursuing your degree.
                   </p>
                 </div>
               </div>
             </div>
           </section>

      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

      <CourseCurriculumSection
  years={[1, 2, 3]}
  data={{
    1: {
      semesters: {
        semester1: {
          title: "Semester 1",
          topics: [
            "Business and Management Functions",
            "Financial Accounting",
            "Microeconomics",
            "Entrepreneurship and Innovation Management",
            "Universal Human Values",
            "Office Automation Tools",
          ],
        },

        semester2: {
          title: "Semester 2",
          topics: [
            "Macroeconomics",
            "Financial Management",
            "Organizational Behaviour",
            "Community Development",
            "Introduction to Python",
            "Statistics for Managers",
            "Business Communication",
          ],
        },
      },
    },

    2: {
      semesters: {
        semester3: {
          title: "Semester 3",
          topics: [
            "Operations Management",
            "Human Resource Management",
            "Marketing Management",
            "Cost & Management Accounting",
            "Interview Skills and Etiquettes",
            "Business and Corporate Laws",
            "Business Environment",
          ],
        },

        semester4: {
          title: "Semester 4",
          topics: [
            "Indian Financial System",
            "Business Research Methods",
            "Supply Chain Management",
            "E-Commerce",
            "Design Thinking (MLC)",
            "Environmental Science",
            "Technology Management",
          ],
        },
      },
    },

    3: {
      semesters: {
        semester5: {
          title: "Semester 5",
          coreSubjects: [
            "Fundamentals of Business Analytics",
            "International Business Management",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "HRM",
                topics: [
                  "Industrial Relations & Labour Laws",
                  "Compensation Management",
                  "Human Resource Planning & Development",
                ],
              },
              {
                name: "Marketing",
                topics: [
                  "International Marketing",
                  "Consumer Behavior",
                  "Digital Marketing",
                ],
              },
              {
                name: "Finance & Accounting",
                topics: [
                  "Financial Statement Analysis and Reporting",
                  "Security Analysis and Portfolio Management",
                  "Personal Financial Planning",
                ],
              },
               {
                name: "Entrepreneurship Management & Family Business",
                topics: [
                  "Psychological Aspects of Entrepreneurs",
                  "Growing the Family Business in the Global Environment",
                  "Social Entrepreneurship",
                ],
              },
               {
                name: "Data Analytics",
                topics: [
                  "Database Management System",
                  "Digital Marketing",
                  "Business Analytics for Decision Making",
                ],
              },
               {
                name: "Retail and E-Commerce",
                topics: [
                  "IT in Retail",
                  "Visual Merchandising",
                  "Entrepreneurship in Retail Business",
                ],
              },
               {
                name: "Digital Marketing",
                topics: [
                  "Introduction to Digital Media",
                  "IT in Business",
                  "Entrepreneurship and Digital Marketing",
                ],
              },
            ],
          },
        },

        semester6: {
          title: "Semester 6",
          coreSubjects: [
            "Strategic Management",
            "Management Information System",
            "Project",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "HRM",
                topics: [
                  "International Human Resource Management",
                  "Talent Management and Employee Retention",
                  "HR Audit and Capital Management",
                ],
              },
              {
                name: "Marketing",
                topics: [
                  "Sales & Distribution Management",
                  "Advertising Management",
                  "Green Marketing",
                ],
              },
              {
                name: "Finance & Accounting",
                topics: [
                  "Mergers and Acquisitions",
                  "Investment Banking & Financial Services",
                  "Corporate Accounting",
                ],
              },
               {
                name: "Entrepreneurship Management & Family Business",
                topics: [
                  "Marketing for Startups",
                  "Entrepreneurship & Industry 4.0/5.0/6.0s",
                  "Scaling Excellence through Innovation & Incubation",
                ],
              },
               {
                name: "Finance & Accounting",
                topics: [
                  "Mergers and Acquisitions",
                  "Investment Banking & Financial Services",
                  "Corporate Accounting",
                ],
              },
               {
                name: "Data Analytics",
                topics: [
                  "Social media and Web Analytics",
                  "Data Mining and Warehousing",
                  "Data Visualization with R",
                ],
              },
               {
                name: "Retail & E-Commerce",
                topics: [
                  "Retail Logistics Management",
                  "Digital Marketing for Retail Business",
                  "Enterprise Resource Planning (ERP)",
                ],
              },
               {
                name: "Digital Marketing",
                topics: [
                  "E-Marketing",
                  "Advertising and Brand Management",
                  "New Media and Social Media Spectrum",
                ],
              },
            ],
          },
        },
      },
    },
  }}
/>

      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-5 md:py-12">
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
              Candidates must have completed 10+2 education from a recognized
              national or state board institution or 10+3 diploma from a
              recognized national or state institute.
            </p>

            {/* Grades */}
             <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Grades
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates must have at least 40% marks in aggregate in 10+2 /
              diploma (35% for reserved categories).
            </p>
          </div>

          {/* NRI & Foreign Students */}
          <div className="mb-5">
             <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] md:mb-4">
              For NRI & foreign students
            </h3>

            {/* Educational Qualification */}
             <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Educational qualification
            </h4>
             <ul className="text-black text-[12px] list-disc px-5 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                Candidates must have completed 10+2/ intermediate/ senior
                secondary education from a recognized board, or an equivalent
                qualification as recognized by the Association of Indian
                Universities, in any discipline.
              </li>
              <li>
                Candidates who have completed 10+2 education or graduate level
                education outside India must produce a certificate of
                equivalence issued by the Association of Indian Universities
              </li>
            </ul>

            {/* Grades */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Grades
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates must have a minimum of 50% marks in aggregate in
              graduation.
            </p>

            {/* Other Requirements */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Other requirements
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates who are not Indian citizens or residing outside India
              and holding NRE or PIO status will be billed an international fee
              for respective degrees & may need to submit documents mentioned
              but not limited to CV, address proof, valid visa, PR card &
              passport copy as part of the application process.
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
                The Manipal University Jaipur Online BBA follows a structured and
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
                        Learners must book their examination slots through the MUJ
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
                    For end-term examinations, MUJ provides three available slots:
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
     
           <MujCareerServices benefits={benefits}  onCtaClick={() => setIsModalOpen(true)} />

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
          Convenient Fee payment option:<br/>
          Choose your preferred fee payment option
        </p>

        {/* CTA visible only on large screens */}
        <button onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit">
          Compare all Plans
        </button>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="w-full lg:w-[35%] flex justify-center">
        <FeesCarousel />
      </div>

      {/* CTA below carousel on mobile only */}
      <button onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
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

      <section className="w-full flex items-center justify-center px-6 md:px-18">
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] lg:gap-20">
     
         {/* LEFT CONTENT */}
         <div className="space-y-5">
     
           <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">Degree Sample</p>
     
           <h2 className="text-[#270652] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
             Manipal University <br />
             Jaipur Online <br />
             BBA Certificate
           </h2>
     
           <p className="text-[#3C3C43] max-w-[350px] text-base">
            Graduate with UGC-entitled and<br/> internationally accepted online degrees.
           </p>
     
           {/* IMAGE that appears ONLY on mobile, above CTA */}
           <div className="md:hidden flex justify-center">
             <img
               src="/muj/mujBbaDegree.png"
               alt="Certificate Preview"
               className="w-full max-w-xs rounded-lg shadow-sm"
             />
           </div>
     
           {/* CTA BUTTON */}
           <button className="bg-[#F6A104] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-md transform hover:scale-105 duration-200 flex items-center justify-center" onClick={() => setIsModalOpen(true)}>
             Know more
           </button>
     
         </div>
     
         {/* RIGHT IMAGE (visible only on md+ screens) */}
         <div className="hidden md:flex justify-center mt-5">
           <img
             src="/muj/mujBbaDegree.png"
             alt="Certificate Preview"
             className="w-full max-w-sm rounded-lg shadow-sm"
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
                       Job-ready skills
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       that match current industry demands.
                     </p>
                   </div>
                 </motion.div>
     
                 {/* Item 2 */}
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
                     <ListMinus
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
                       Confidence
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       to take on professional challenges.{" "}
                     </p>
                   </div>
                 </motion.div>
               
     
                 {/* Item 3 */}
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
                     <BriefcaseBusiness
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
                       Enhanced Employability
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       with structured career support and placement services
                     </p>{" "}
                   </div>
                 </motion.div>
               </div>
     
               {/* RIGHT COLUMN */}
               <div className="flex flex-col gap-12">
                 {/* Item 4 */}
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
                       Practical Learning
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       through projects, case studies, and real-world examples{" "}
                     </p>
                   </div>
                 </motion.div>
     
                 {/* Item 5 */}
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
                       A respected degree
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       that strengthens your professional profile.{" "}
                     </p>
                   </div>
                 </motion.div>
     
                 {/* Item 6 */}
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
                       Global Exposure
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       through online tools, certifications, and industry
                       interactions
                     </p>{" "}
                   </div>
                 </motion.div>
               </div>
             </div>
           </section>
            <section className="w-full bg-white py-20 md:px-12 lg:px-20">
                  <div className="w-full md:bg-[#270652] rounded-4xl py-20 px-6 md:px-12 lg:px-20">
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
              mt-10
              sm:mt-0
              max-w-[260px]  /* Medium screens */
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
                            "Data Analyst",
                            "Search Engine Optimization",
                            "Technical Product Manager",
                            "Operations Analyst",
                            "Research and Development Operations ",
                          ].map((role, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 25 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <span className="w-7 h-7 rounded-full bg-[#F6A104] flex items-center justify-center">
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
                        bg-[#F6A104]
                        shadow-md
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

    <section className="w-full px-4 md:px-10 lg:px-20 py-16">
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

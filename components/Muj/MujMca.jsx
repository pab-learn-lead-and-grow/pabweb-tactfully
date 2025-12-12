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
import MujCareerServices from "../MujCareerServices";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import ConnectToday from "../NmimsSection/ConnectToday";
import Faculties from "../NmimsSection/Faculties";
import CourseCurriculumSection from "@/components/CourseCurriculumSection";
import FAQ from "../NmimsSection/FAQ";

export default function Page() {

  const learningCards = [
    {
      icon: Tally4,
      title: "Coursera for Skill Development",
      desc: "Learners receive exclusive access to Coursera, allowing them to earn certifications from global industry leaders in digital marketing, analytics, management, technology, and more—boosting employability.",
    },
    {
      icon: BookCheck,
      title: "Modern LMS for Seamless Learning",
      desc: "MUJ's feature-rich platform provides course material, assignments, progress tracking, support services and discussion boards all accessible on both web and mobile.",
    },
    {
      icon: Headset,
      title: "Blended Pedagogy: Live + Recorded + Self-Learning Modules",
      desc: "The teaching format combines live lectures, recorded videos, e-books/resources, and discussion forums with faculty interaction — supporting every learning style.",
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
      desc: "Upload supporting documents & submit your application.Mandatory documents are Proof of identity - Aadhaar card (mandatory for Indian citizens), Proof of address - Aadhaar card, passport, voter's ID, gas bill, bank statement, post-paid mobile statement , lass 10 & 12 marksheet and Graduation marksheet (for PG students)",
    },
    {
      num: "04",
      title: "University Approval",
      desc: "The university will evaluate your documents to confirm your admission.",
    },
  ];

      /* fees crousel */
          function FeesCarousel() {
            const cards = [
              {
                title: "Annual Payment",
                amount: "₹1,58,000/-",
                sub: "Inclusive of all taxes",
              },
               {
                title: "Semester Wise",
                amount: "₹39,500/-",
                 sub: "Inclusive of all taxes",
              },
              {
                title: "EMI starting at",
                amount: "₹6,583/-",
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
                      className="
                      bg-linear-to-b from-[#345895] to-[#101C2F]
                      rounded-2xl shadow-lg p-8 
                      w-[80%] md:w-[60%] lg:w-[80%]
                      h-[260px]
                      flex flex-col justify-between text-center
                    "
                    >
                      <div>
                        <p className="font-semibold text-white">{cards[index].title}</p>
                        <p className="text-xs text-white mt-1">(in INR)</p>
                        <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">MCA</p>
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

  const faqs = [
    {
      q: "What is the duration and learning mode of the Online MCA?",
      a: "The Online MCA is a two-year postgraduate program delivered fully online through MUJ’s digital learning platform.",
    },
    {
      q: "Who can apply for the Online MCA program?",
      a: "Applicants must hold a bachelor’s degree from a recognised university. Candidates from non-IT backgrounds may be required to complete a bridge or preparatory module.",
    },
    {
      q: " What specialisations can i choose in the Online MCA?",
      a: "Learners can specialise in high-demand areas such as Artificial Intelligence, Data Science, Machine Learning, Cloud Computing, Cybersecurity, and other emerging technologies.",
    },
    {
      q: " How are classes and practical sessions conducted?",
      a: "The program includes live online classes, recorded lectures, virtual labs, hands-on assignments, and project-based learning, with all assessments conducted digitally.",
    },
    {
      q: "Is the degree from MUJ recognised?",
      a: "Yes. The degree is UGC-entitled and offered by a NAAC A+ accredited university, making it valid for employment and higher education globally.",
    },
  ];

   const topFaculty = [
    {
      name: "Dr. M.k Srivastav",
      title: "Associate Professor",
      image: "/muj/faculties/srivastav.png",
    },
    {
      name: "Dr. Vaibhav Panwar",
      title: "Associate Professor",
      image: "/muj/faculties/vaibhav.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Monika Rathore",
      title: "Associate Professor",
     image: "/muj/faculties/monika.png",
    },
    {
      name: "Dr. Ravi Chaudhary",
      title: "Assistant Professor",
      image: "/muj/faculties/ravi.png",
    },
    {
      name: "Dr. Vijay Singh Maan",
      title: "Assistant Professor",
      image: "/muj/faculties/vijay.png",
    },
    {
      name: "Dr. Sameer Saxena",
      title: "Associate Professor",
      image: "/muj/faculties/sameer.png",
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

  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Upskill and Certify",
      text: "Advance your career with in-demand skill training and certifications that employers value.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "Industry Relevance",
      text: "Engage in live sessions with industry professionals who provide practical insights, career advice, and up-to-date market trends to prepare you for real-world roles.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "Self-paced Learning",
      text: "Flexible self-paced modules to improve communication, polish your resume, build professional etiquette, and gain hands-on industry skills.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Discover your strengths and skill gaps with targeted assessments that help you develop the competencies required to boost your employability.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "AI Placement Portal",
      text: "Elevate your job readiness with Online Manipal's AI-powered placement portal, where you can practice unlimited mock interviews, receive instant insights, and seamlessly apply to career opportunities.",
    },
    {
      icon: (
        <ChartNoAxesColumn
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Placement & Job Fairs",
      text: "Launch your career through extensive placement drives and job fairs that give you access to recruiters across sectors. Discover various job opportunities, participate in interviews, and engage with employers.",
    },
  ];

  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "85", label: "Credits" },
    { value: "Coursera", label: "Exclusive Access" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
       <section className="relative min-h-[650px] md:min-h-[750px] w-full">
                         {/* Background Image */}
                         <div className="absolute inset-0">
                           <Image
                             src="/mujClg.png"
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
                             className="inline-flex items-center gap-2 bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6 mb-2 px-4 py-1 rounded-full"
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
                             (Master of Computer Applications)
            
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
                             Online MCA Degree
            
                             </motion.h1>
                 
                             <motion.p
                               initial={{ opacity: 0 }}
                               whileInView={{ opacity: 1 }}
                               transition={{ duration: 0.7, delay: 0.2 }}
                               viewport={{ once: true }}
                               className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-5xl mt-0 mb-10 leading-relaxed"
                             >
                            The Online MCA from NAAC A+ Manipal University Jaipur (MUJ) is a 2-year program that blends theory with hands-on labs and offers specializations like AI, Data Science, ML, Cloud Computing & Cybersecurity, along with Microsoft & Coursera certifications.
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
                             <div className="max-w-7xl overflow-hidden md:-mr-10 xl:-mr-16">
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
                                 <h3 className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-1">
                                   NAAC A+
                                 </h3>
                                 <p className="text-[8px]  md:text-sm font-bold opacity-90 leading-tight">
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
                                 <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-1">
                                   UGC
                                 </h3>
                                 <p className="text-[8px]  md:text-sm font-bold opacity-90 leading-tight">
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
                                 <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-1">
                                   #9
                                 </h3>
                                 <p className="text-[8px]  md:text-sm font-bold opacity-90 leading-tight">
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
                           <h2 className="text-xl md:text-2xl font-regular lg:text-[49px] leading-normal text-gray-900">
                             <span className="text-[#F26722] ">
                              MUJ’s NAAC A+ accredited online MCA empowers learners to thrive as innovative tech leaders in a digital-first world.{" "}
                             </span>
                            This two-year program combines theory with hands-on labs to build expertise in core IT and computer application domains. Learners can specialize in high-demand areas like AI, Data Science, Machine Learning, Cloud Computing, Cybersecurity, and more. Indian learners also benefit from Microsoft and Coursera certifications, a virtual coding lab, rich e-library access, and sessions with industry experts.
                             </h2>
                         </div>
                 
                         {/* ===== Bottom Card Section ===== */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
                           {/* Card 1 */}
                           <div className="flex flex-col gap-4 p-4 sm:p-6">
                             {/* Icon */}
                             <div className="shrink-0 text-black w-15 h-15 flex items-center justify-center">
                               <Ungroup size={72} strokeWidth={1.0} />
                             </div>
                 
                             {/* Content */}
                             <div>
                               <h3 className="lg:text-2xl text-[#345895] mb-1">
                                  New age tech skills and domain expertise
                               </h3>
                               <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                               Master essential IT concepts including visual programming, digital logic, data structures & algorithms, mobile application development, and numerical methods. Deepen your domain knowledge with modern electives in Cloud Computing, Data Science & Analytics, and Cybersecurity.
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
                               <h3 className="lg:text-2xl text-[#345895] mb-1">
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

      <WhyChooseUs cards={whyCards} />

      <CourseCurriculumSection
  years={[1, 2]}
  data={{
    /* -------------------------------- YEAR 1 -------------------------------- */
    1: {
      semesters: {
        semester1: {
          title: "Semester 1",
          topics: [
            "Fundamentals of Computer",
            "Fundamental of Mathematics",
            "Discrete Mathematics and Graph Theory",
            "Python Programming",
            "Programming & Problem-Solving using C",
            "Relational Database Management System",
            "Data Visualization",
            "Relational Database Management – Lab",
            "Programming & Problem-Solving using C – Lab",
            "Python Programming – Lab",
          ],
        },

        semester2: {
          title: "Semester 2",

          coreSubjects: [
            "Computer Networks & Protocols",
            "Object Oriented Programming using JAVA",
            "Operating System",
            "Data Structure and Algorithms",
            "Computer Architecture",
            "Object Oriented Programming using JAVA – Lab",
            "Data Structure and Algorithms – Lab",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "AI & Data Science",
                topics: [
                  "Artificial Intelligence",
                ],
              },
              {
                name: "Cyber Security",
                topics: [
                  "Cybersecurity Essentials",
                ],
              },
              {
                name: "Cloud Computing",
                topics: [
                  "Fundamentals of Cloud Computing",
                ],
              },
              {
                name: "AI & ML",
                topics: [
                  "Fundamentals of Artificial Intelligence and Problem Solving",
                ],
              },
              {
                name: "Comprehensive Emerging Technologies",
                topics: [
                  "IoT Essentials",
                ],
              },
            ],
          },
        },
      },
    },

    /* -------------------------------- YEAR 2 -------------------------------- */
    2: {
      semesters: {
        semester3: {
          title: "Semester 3",

          coreSubjects: [
            "Unix & Shell Programming",
            "Web Technology",
            "Software Engineering & Project Management",
            "Unix & Shell Programming – Lab",
            "Web Technology – Lab",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "AI & Data Science",
                topics: [
                  "Categorical Data Analysis and Generalized Linear Models",
                  "Google Cloud Essentials",
                ],
              },
              {
                name: "Cyber Security",
                topics: [
                  "Cyber Laws and Ethics",
                  "Ethical Hacking",
                ],
              },
              {
                name: "Cloud Computing",
                topics: [
                  "Google Cloud Essentials",
                  "Cloud Architecture and Services",
                ],
              },
               {
                name: "AI & ML",
                topics: [
                  "Introduction to Machine Learning",
                  "Fundamentals of Unsupervised Learning",
                ],
              },
               {
                name: "Comprehensive Emerging Technologies",
                topics: [
                  "Data Mining Techniques",
                  "Blockchain Technologies",
                ],
              },
            ],
          },
        },

        semester4: {
          title: "Semester 4",

          coreSubjects: [
            "Banking and Insurance Management",
            "Project Work",
          ],

          specialization: {
            useRadio: false,
            data: [
              {
                name: "AI & Data Science",
                topics: [
                  "Cryptography and Network Security",
                ],
              },
              {
                name: "Cyber Security",
                topics: [
                  "Cryptography and Network Security",
                ],
              },
              {
                name: "Cloud Computing",
                topics: [
                  "Cloud Application Development",
                ],
              },
               {
                name: "AI & ML",
                topics: [
                  "AI in Project Management",
                ],
              },
               {
                name: "Comprehensive Emerging Technologies",
                topics: [
                  "Big Data Analytics and Business Intelligence",
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
          <h2 className="text-[32px] sm:text-4xl md:text-[54px] lg:text-[64px] font-bold text-[#345895] mb-4 md:mb-7">
            Eligibility Criteria
          </h2>

          {/* Indian Students */}
          <div className="mb-5">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#345895] md:mb-4">
              For Indian students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-[#1F284E] mb-1">
              Educational qualification
            </h4>
             <ul className="text-[#1F284E] text-[12px] list-disc px-5 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                Candidates must have completed 10+2+3-year bachelor's degree in
                Computer Applications/Computer Science/Information Technology
                from a recognized university/institution, or an equivalent
                qualification as recognized by the Association of Indian
                Universities (AIU) or other competent bodies
              </li>
              <li>
                Candidates who have completed 10+2+3-year bachelor's degree from
                other streams like Science, Business Administration, Business
                Management, Arts & Humanities, Commerce, etc. are also eligible
                for MCA admission but they have to attend and complete a
                compulsory bridge course in fundamentals of computer and IT
                along with their Semester 1 courses. Additionally, candidates
                who have not studied mathematics during their 10 + 2/ bachelor's
                degree programs must attend and complete a compulsory bridge
                course in mathematics along with other semester 1 courses.
              </li>
            </ul>
            {/* Grades */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-[#1F284E] mb-1">
              Grades
            </h4>
            <p className="text-[#1F284E] text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates must have a minimum of 50% marks in aggregate in
              graduation (45% for reserved categories).
            </p>
          </div>

          {/* NRI & Foreign Students */}
          <div className="mb-5">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#345895] md:mb-4">
              For NRI & foreign students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-[#1F284E] mb-1">
              Educational qualification
            </h4>
            <ul className="text-[#1F284E] text-[12px] list-disc px-5 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                 Candidates must have completed
                10+2+3-year bachelor's degree in Computer Applications/Computer
                Science/Information Technology from a recognized
                university/institution, or an equivalent qualification as
                recognized by the Association of Indian Universities (AIU) or
                other competent bodies.</li>
              <li>
                Candidates who have completed
                10+2+3-year bachelor's degree from other streams like Science,
                Business Administration, Business Management, Arts & Humanities,
                Commerce, etc. are also eligible for MCA admission but they have
                to attend and complete a compulsory bridge course in
                fundamentals of computer and IT along with their Semester 1
                courses. Additionally, candidates who have not studied
                mathematics during their 10 + 2/ bachelor's degree programs must
                attend and complete a compulsory bridge course in mathematics
                along with other semester 1 courses.
              </li>
              <li>
                Candidates who have completed their 10+2 or graduate level
                education outside India must produce a certificate of
                equivalence issued by the Association of Indian Universities.
              </li>
            </ul>

            {/* Grades */}
           <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-[#1F284E] mb-1">
              Grades
            </h4>
            <p className="text-[#1F284E] text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates must have a minimum of 50% marks in aggregate in
              graduation
            </p>

            {/* Other Requirements */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-[#1F284E] mb-1">
              Other requirements
            </h4>
           <p className="text-[#1F284E] text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
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
                         The Manipal University Jaipur Online MCA follows a structured and
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
                           <h3 className=" text-md md:text-2xl font-semibold italic mb-5">
                             Exam Slot Booking
                           </h3>
             
                           {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
                           <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto">
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
                           className="bg-linear-to-b from-[#345895] to-[#101C2F] text-white p-5 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                         >
                           <h3 className="text-md md:text-2xl font-semibold italic mb-5">
                             Exam Slot Timings
                           </h3>
             
                           <p className="text-lg lg:text-2xl max-w-[380] mb-6 text-center">
                             For end-term examinations, MUJ provides three available slots:
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
                     <div className="max-w-6xl mx-auto p-6 md:p-10">
                       {/* HEADING */}
                       <h2 className="text-[24px] md:text-[40px] font-bold italic text-[#345895] mb-12 text-center">
                         ASSESSMENT STRUCTURE (100 MARKS)
                       </h2>
             
                       {/* TWO CATEGORIES */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         {/* LEFT CATEGORY */}
                         <div className="space-y-2 w-full">
                           <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                             External Assessment – 70 Marks
                           </div>
             
                           {/* FULL-WIDTH SPLIT ROW */}
                           <div className="grid grid-cols-2 gap-2 w-full">
                             <div className="w-full rounded-lg border border-[#345895] py-3 text-sm text-center text-[#345895] bg-white">
                               MCQ (40 Marks)
                             </div>
                             <div className="w-full rounded-lg border border-[#345895] py-3 text-sm text-center text-[#345895] bg-white">
                               Descriptive Answers (30 Marks)
                             </div>
                           </div>
                         </div>
             
                         {/* RIGHT CATEGORY */}
                         <div className="space-y-2 w-full">
                           <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                             Internal Assessment – 30 Marks
                           </div>
             
                           {/* FULL-WIDTH SPLIT ROW */}
                           <div className="grid grid-cols-2 gap-2 w-full">
                             <div className="w-full rounded-lg border border-[#345895] py-3 text-sm text-center text-[#345895] bg-white">
                               Quiz
                             </div>
                             <div className="w-full rounded-lg border border-[#345895] py-3 text-sm text-center text-[#345895] bg-white">
                               Assignment
                             </div>
                           </div>
                         </div>
                       </div>
             
                       {/* PASSING CRITERIA */}
                       <div className="border border-[#e5e7eb] rounded-lg p-5 mt-12 bg-white">
                         <p className="font-semibold text-black mb-1">Passing Criteria</p>
                         <ul className="list-disc pl-6 text-[#345895] text-sm md:text-lg">
                           <li>
                             A candidate must secure a minimum of 40% to successfully pass
                             the course.
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

      <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
  <div className="px-2 w-full">
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

      {/* LEFT SIDE TEXT */}
      <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-[#064E92] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4 md:mb-10">
          Fees Structure
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-10">
          Convenient Fee payment option:<br/>
          Choose your preferred fee payment option
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
          
                <h2 className="text-[#345895] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
                  Manipal University <br />
                  Jaipur Online <br />
                  BCA Certificate
                </h2>
          
                <p className="text-[#3C3C43] max-w-[350px] text-base">
                 Graduate with UGC-entitled and<br/> internationally accepted online degrees.
                </p>
          
                {/* IMAGE that appears ONLY on mobile, above CTA */}
                <div className="md:hidden flex justify-center">
                  <img
                    src="/muj/mujMcaDegree.png"
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
              <div className="hidden md:flex justify-center mt-5">
                <img
                  src="/muj/mujMcaDegree.png"
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
                    className="text-[#345895] font-extrabold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
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
            bg-[#345895]
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
                          <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                            Online experience with campus immersion
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                           Learn entirely online with high-quality classes, assessments, and placement support. Dedicated mentors and 24/7 student help ensure you’re supported at every step.
                          </p>{" "}
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
            bg-[#345895]
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
                          <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                            Get MUJ alumni status
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                            Leverage Manipal University Jaipur’s powerful alumni community to build meaningful connections and gain real-world industry perspectives.
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
                        <div
                          className="
            shrink-0
            w-18 h-18
            md:w-14 md:h-14
            lg:w-18 lg:h-18 
            bg-[#345895]
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
                          <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                           Hands on Experience workshops
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                             Enhance your technical skills through workshops that introduce cutting-edge technologies and provide real-world training in programming, mobile and web application development, and beyond.
                          </p>
                        </div>
                      </motion.div>
          
                      {/* Item 4 */}
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
            bg-[#345895]
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
                          <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                            Become job ready
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                            Develop strong domain expertise through intensive training in essential software tools such as Oracle, MySQL, Eclipse, and Visual Studio.
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
                                 "Full Stack Development",
                                 "Data Analytics",
                                 "Cloud Architecture",
                                 "Cybersecurity",
                                 "Artificial Intelligence ",
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

       <section className="w-full px-4 md:px-10 lg:px-20 py-16">
        {/* TITLE */}
        <h2 className="text-[#345895] font-bold flex flex-row items-center justify-center font-[Inter]  md:text-[42px] text-[36px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className=" max-w-5xl flex items-center justify-center md:grid grid-cols-2 bg-[#E5E5E5] text-[#4D964F] font-semibold text-center m-auto px-10 lg:px-30 gap-10 lg:gap-25 py-8 text-[16px] md:text-[24px] rounded-xl">
            <p>LAST ADMISSION DATE</p>
            <p>27TH NOVEMBER 2025</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}

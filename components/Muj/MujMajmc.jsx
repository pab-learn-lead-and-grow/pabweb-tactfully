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
import MujCareerServices from "../NmimsSection/MujCareerServices";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import ConnectToday from "../NmimsSection/ConnectToday";
import Faculties from "../NmimsSection/Faculties";
import FAQ from "../NmimsSection/FAQ";
import CounsellingForm from "../Radhya/CounsellingForm";
import CourseCurriculumSection from "@/components/NmimsSection/CourseCurriculumSection";


export default function Page() {
     
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const faqs = [
    {
      q: "How long is the Online MA JMC program, and how is it delivered?",
      a: "The program runs for two years (four semesters) and is offered entirely online through MUJ’s digital learning platform.",
    },
    {
      q: "What qualifications do I need to enroll?",
      a: "You must have a bachelor’s degree (10+2+3 or equivalent) from a recognised university. No work experience is required.",
    },
    {
      q: " Is this program suitable for working professionals?",
      a: "Yes. The flexible online structure makes it ideal for working individuals or those who cannot attend regular on-campus classes.",
    },
    {
      q: " What practical and theoretical skills will I learn?",
      a: "Students gain hands-on experience in new media writing, digital publishing, AV editing, script and screenwriting, and photography, along with strong foundations in reporting, broadcast journalism, and digital media marketing.",
    },
    {
      q: "How are classes and study material provided?",
      a: "Learning happens through live and recorded sessions, digital reading material, video tutorials, discussion forums, and online assignments accessible 24/7 via the LMS.",
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

      /* fees crousel */
            function FeesCarousel() {
              const cards = [
                {
                  title: "Annual Payment",
                  amount: "₹1,40,000/-",
                  sub: "Inclusive of all taxes",
                },
                 {
                  title: "Semester Wise",
                  amount: "₹35,000/-",
                   sub: "Inclusive of all taxes",
                },
                {
                  title: "EMI starting at",
                  amount: "₹5,833/-",
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
                        className="bg-linear-to-b from-[#270652] to-[#101C2F] rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
                      >
                        <div>
                          <p className="font-semibold text-white">{cards[index].title}</p>
                          <p className="text-xs text-white mt-1">(in INR)</p>
                          <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">MA-JMC</p>
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
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Upskill and Certify",
      text: "Advance your career with in-demand skill training and certifications that employers value.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Industry Relevance",
      text: "Engage in live sessions with industry professionals who provide practical insights, career advice, and up-to-date market trends to prepare you for real-world roles.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Self-paced Learning",
      text: "Flexible self-paced modules to improve communication, polish your resume, build professional etiquette, and gain hands-on industry skills.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Discover your strengths and skill gaps with targeted assessments that help you develop the competencies required to boost your employability.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "AI Placement Portal",
      text: "Elevate your job readiness with Online Manipal's AI-powered placement portal, where you can practice unlimited mock interviews, receive instant insights, and seamlessly apply to career opportunities.",
    },
    {
      icon: (
        <ChartNoAxesColumn
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Placement & Job Fairs",
      text: "Launch your career through extensive placement drives and job fairs that give you access to recruiters across sectors. Discover various job opportunities, participate in interviews, and engage with employers.",
    },
  ];

  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "84", label: "Credits" },
    { value: "Coursera", label: "Exclusive Access" },
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
                                 <div className="bg-white rounded-r-xl shadow-md h-25 px-2 flex items-center">
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
                                 className="inline-flex items-center gap-2 bg-[#FFB901] text-white text-[18px] sm:text-[18px] mt-6 mb-2 px-4 py-1 rounded-full"
                               >
                                 4.2 <Star size={15} />
                               </motion.span>
                     
                               {/* Subtext */}
                               <motion.p
                                 initial={{ opacity: 0, x: -20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 transition={{ duration: 0.6, delay: 0.1 }}
                                 viewport={{ once: true }}
                                 className="text-white text-[16px] sm:text-[16px] italic font-light"
                               >
                                 (Master of Arts in Journalism and Mass Communication)
                
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
                                Online MA-JMC
                
                                 </motion.h1>
                     
                                 <motion.p
                                   initial={{ opacity: 0 }}
                                   whileInView={{ opacity: 1 }}
                                   transition={{ duration: 0.7, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
                                 >
                                The Online MA in Journalism & Mass Communication from MUJ trains learners in digital publishing, AV editing, scriptwriting, and photography through flexible learning. It offers Coursera certifications, key media concepts, and 100% placement assistance.
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
                                 <div className="max-w-7xl overflow-hidden md:-mr-10">
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
                                                <h3 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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
                                                <h3 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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
                                                <h3 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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
                               <h2 className="text-xl md:text-2xl font-regular lg:text-[42px] leading-normal text-gray-900">
                                 <span className="text-[#F26722] ">
                                MUJ’s online MA in Journalism and Mass Communication equips learners with the skills needed to excel in today’s dynamic media industry
                                </span>
                                 This two-year online degree offers practical learning in digital writing, publishing, editing, screenwriting, and photography. With guidance from expert faculty, students can master news reporting, broadcast journalism, digital media marketing, and film appreciation without interrupting their careers. Learners in India also gain access to Coursera certifications and dedicated placement support.</h2>
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
                                      Future ready journalist
                                   </h3>
                                   <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                                 Gain core journalism abilities—including digital literacy, AV editing, scriptwriting, research, and reporting—by studying subjects like media language, digital publishing, photography fundamentals, development communication, and broadcast journalism.
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

      <WhyChooseUs cards={whyCards}  onClick={() => setIsModalOpen(true)}/>

     <CourseCurriculumSection
  years={[1, 2]}
  data={{
    /* ------------------------------------------------ YEAR 1 ------------------------------------------------ */
    1: {
      semesters: {
        semester1: {
          title: "Semester 1",
          topics: [
            "Basics of Language",
            "Social Structure & Current Affairs",
            "Fundamentals of Photography",
            "Communication Theories and Models",
            "Concept of News and Reporting",
            "Development of Media",
            "Basics of Audio and Visual Communication",
          ],
        },

        semester2: {
          title: "Semester 2",
          topics: [
            "Media Language",
            "Political Structure & Current Affairs",
            "Digital Publishing",
            "Editing and Layout Designing",
            "Public Relations",
            "Broadcast Journalism",
            "Media Laws and Ethics",
            "Development Communication",
          ],
        },
      },
    },

    /* ------------------------------------------------ YEAR 2 ------------------------------------------------ */
    2: {
      semesters: {
        /* ------------------------------ SEMESTER 3 (STATIC ELECTIVES) ------------------------------ */
        semester3: {
          title: "Semester 3",

           topics: [
            "Writing for New Media",
                "Inter Culture Communication and Current Affairs",
                "Mobile Editing Software",
                "Internship",
                "Communication Research",
          ],

           specialization: {
            useRadio: false,

            data: [
              {
                name: "Elective set A",
                topics: [
                  "Beats of Journalism",
                ],
              },
              {
                name: "Elective Set B",
                topics: [
                  "Mobile Journalism",
                  "Advertising Theory & Practice",
                ],
              },
              {
                name: "Minor Specialization",
                topics: [
                  "Corporate Communication",
                  "Data Journalism",
                ],
              },
            ],
          },
        },

        /* ------------------------------ SEMESTER 4 (DROPDOWNS WITH SAME TOPICS) ------------------------------ */
        semester4: {
          title: "Semester 4",

          topics: [
            "Script and Screen Writing",
            "Economic Structure and Current Affairs",
            "Basics of Audio and Video Editing",
            "Film Appreciation",
            "Dissertation",
          ],

          specialization: {
            useRadio: false,

            data: [
              {
                name: "A. Medium wise(Final Project)",
                topics: [
                  "Print Production",
                  "Audio Production",
                  "A/V Production",
                  "Website Management",
                ],
              },
              {
                name: "B. Beat wise(Final Project)",
                topics: [
                  "Social",
                  "Political",
                  "Cultural",
                  "Business",
                  "Sports",
                  "Science",
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
            <ul className="text-black text-[12px] list-disc px-5 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
             <li>
               Candidates must have completed 10+2+3-year bachelor's degree from
              a recognized university/institution, or an equivalent
              qualification as recognized by the Association of Indian
              Universities (AIU).
              </li>
            </ul>
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
                Candidates must have completed 10+2+3-year bachelor's degree
                from a recognized university/institution, or an equivalent
                qualification as recognized by the Association of Indian
                Universities (AIU).
              </li>
              <li>
                Candidates who have completed their 10+ ducation or graduate
                level education outside India must produce a certificate of
                equivalence issued by the Association of Indian Universities.
              </li>
            </ul>

            {/* Other Requirements */}
           <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Other requirements
            </h4>
            <p className="text-black text-[12px] list-disc px-5 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
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
                               The Manipal University Jaipur Online MAJMC follows a structured and
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
      
           <MujCareerServices
  benefits={benefits}
  onCtaClick={() => setIsModalOpen(true)}
/>

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
                   <button  onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit">
                     Compare all Plans
                   </button>
                 </div>
           
                 {/* RIGHT SIDE CARDS */}
                 <div className="w-full lg:w-[35%] flex justify-center">
                   <FeesCarousel />
                 </div>
           
                 {/* CTA below carousel on mobile only */}
                 <button  onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
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
                      MA-JMC Certificate
                    </h2>
              
                    <p className="text-[#3C3C43] max-w-[350px] text-base">
                     Graduate with UGC-entitled and<br/> internationally accepted online degrees.
                    </p>
              
                    {/* IMAGE that appears ONLY on mobile, above CTA */}
                    <div className="md:hidden flex justify-center">
                      <img
                        src="/muj/mujMajmcDegree.png"
                        alt="Certificate Preview"
                        className="w-full max-w-xs rounded-lg shadow-sm"
                      />
                    </div>
              
                    {/* CTA BUTTON */}
                    <button  onClick={() => setIsModalOpen(true)} className="bg-[#F6A104] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200 flex items-center justify-center">
                      Know more
                    </button>
              
                  </div>
              
                  {/* RIGHT IMAGE (visible only on md+ screens) */}
                  <div className="hidden md:flex justify-center mt-5">
                    <img
                      src="/muj/mujMajmcDegree.png"
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
                      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl">
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
                               Explore a dream career in policymaking 
                              </h3>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                               Build skills that align with your professional interests. Master print, audio, and video production, along with website management, and get hands-on exposure to key beats.                         </p>
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
                              Cross indstry contacts and access to alumni
                              </h3>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                               Network with diverse peers, media experts, and industry leaders to advance your career. Benefit from MUJ’s extensive and active alumni community. 
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
                                Online experience with campus immersion
                              </h3>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                                Learn entirely online with high-quality classes, assessments, and placement support. Dedicated mentors and 24/7 student help ensure you’re supported at every step.
                              </p>
                            </div>
                          </motion.div>
                          
              
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
                                Keep up with media trend
                              </h3>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                                Stay updated on emerging media trends and sharpen your edge by joining expert-led webinars from industry leaders.
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
                                     "News Editing",
                                     "Social Media Management",
                                     "Screen Writing",
                                     "Film Direction",
                                     "Public Relations",
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

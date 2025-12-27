"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import MujCareerServices from "../NmimsSection/MujCareerServices" ;
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import CounsellingForm from "@/components/Pab/CounsellingForm";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Pab/ContactSection";
import UnivCourses from "../Pab/UnivCourses";
import { ArrowUpWideNarrow, Boxes, ChartNoAxesColumn, ContactRound, FileUser, GalleryVertical, Headphones, MessagesSquare, Users } from "lucide-react";

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

    return <span ref={ref}>{value.toLocaleString()}</span>;
  };
   const benefits = [
    {
      icon: (
        <FileUser
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Professional Resumes",
      text: "Our expert team, backed by foundit, crafts high-quality,industry-specific resumes to significantly improve learners' chances of securing their desired jobs.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "Profile Highlighter",
      text: "Access the powerful foundit Profile Highlighter tool, ensuring instant attention from recruiters and giving you a competitive advantage as an active job seeker.",
    },
    {
      icon: <MessagesSquare strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Interview Preparation Guide",
      text: " Learners receive a comprehensive guide powered by foundit to boost essential skills, knowledge, and confidence for successful job interviews.",
     },
    {
      icon: (
        <Users
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Featured Profile",
      text: "Elevate your profile on foundit with priority attention, relevant job alerts, and 3x higher shortlisting chances, connecting you with at least 5 domain-specific recruiters",
      },
  ];

   const steps = [
    {
      num: "01",
      title: "Submit Application",
      desc: " Visit the jain online enrollment form.",
    },
    {
      num: "02",
      title: "Enroll for the Elective",
      desc: "Sign up and complete the 4 essential steps to enroll in the program of your choice",
    },
    {
      num: "03",
      title: "Make Payment",
      desc: "Pay fees through net banking/debit card/ credit card or using easy emi with 0% interest.",
    },
  ];

  const faqs = [
 {
  q: "Is the Online MBA from JAIN Online officially recognized?",
  a: "Yes. The Online MBA offered by JAIN Online is UGC-entitled and follows approved online education regulations. It holds the same value as a regular on-campus postgraduate degree for both private and government employment.",
},
{
  q: "What qualifications do I need to apply for the Online MBA?",
  a: "You must have a bachelor's degree of at least three years from a recognized university with a minimum of 50% marks (45% for reserved categories). Final-year students awaiting results are also eligible.",
},
{
  q: "How long does the Online MBA take to complete, and how is it structured?",
  a: "The program runs for 2 years and is divided into 4 semesters. You will study core subjects initially and move on to specialization electives from the second semester.",
},
{
  q: "What specializations can I choose from?",
  a: "JAIN Online offers a wide range of electives, including Finance, Marketing, Human Resource Management, General Management, Data Science & Analytics, International Finance, Business Intelligence & Analytics, IT Management, Supply Chain & Operations, Project Management, and more.",
},
{
  q: "Is the program completely online? Do I need to visit the campus?",
  a: "Yes, the MBA is delivered entirely online through an advanced LMS with live classes, recorded lectures, study materials, and discussion forums. No campus visits are required.",
},
  ];

  const topFaculty = [
    {
      name: "Prof. Sathyanarayana K",
      title: "Program Head",
      image: "/jain/faculties/sathya.png",
    },
    {
      name: "Dr. Prasantha k J",
      title: "Assistant Professor",
      image: "/jain/faculties/prashantha.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Ms. Chethana K",
      title: "Assistant Professor",
      image: "/jain/faculties/chethana.png",
    },
    {
      name: "Prof Nusrath Fatima",
      title: "Assistant Professor",
      image: "/jain/faculties/nusrath.png",
    },
    {
      name: "Prof. Anshu Abhishek",
      title: "Assistant Professor",
      image: "/jain/faculties/anshu.png",
    },
    {
      name: "Prof. Laxmi Devi",
      title: "Assistant Professor",
      image: "/jain/faculties/laxmi.png",
    },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
       <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-20 py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
         <h1 className=" text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-bold leading-none bg-linear-to-r from-[#0E385F] to-[#F9BD04] bg-clip-text text-transparent">
            Jain University
         </h1>

        {/* Right LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <Image
            src="/jain.png"
            alt="JAIN Logo"
            width={526}
            height={180}
            className="object-contain w-[320px] md:w-[250px] lg:w-[400px] xl:w-[526px] pr-10 mt-10 md:mt-0"
          />
        </motion.div>

      </div>
    </section>
      <section className="w-full bg-white px-10 xl:px-15 ">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl lg:text-[64px] text-center md:text-left font-extrabold text-[#345895] mb-12">
              About JAIN
            </h2>

            <p className="text-black leading-relaxed text-center md:text-left  font-inter text-xs lg:text-[18px] mb-18">
            JAIN Online, a division of the NAAC A++ accredited JAIN (Deemed-to-be University), offers UGC-entitled online degree programs designed to equip learners with modern knowledge and industry-ready skills. Our goal is to help individuals confidently shape and advance their professional journeys.<br />
With more than three decades of academic excellence and cutting-edge, technology-driven learning systems, we focus on both academic achievement and personal growth to ensure holistic development. Supported by experienced faculty and digital learning experts, our flexible online platform allows learners to study anytime, anywhere, and at their own pace.
                 </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl  -mt-10 md:mt-0 mb-10 md:mb-0 overflow-hidden">
              <img
                src="/jain/jainUniv.png"
                alt="University"
                className="w-full h-full rounded-2xl object-cover"
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
                           <h3 className="text-[18px] sm:text-[24px] md:text-[29px] lg:text-[36px] xl:text-[64px] font-bold">
                             NAAC A++
                           </h3>
                           <p className="text-[8px]  md:text-[16px] xl:text-[22px]  md:text-sm font-bold opacity-90 leading-tight">
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
                           <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold">
                             2000+
                           </h3>
                           <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                             Hiring Corporates
                           </p>
                         </motion.div>
           
                         {/* STAT 3 */}
                         <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 0.2 }}
                           viewport={{ once: true }}
                         >
                           <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold ">
                             42 LPA
                           </h3>
                           <p className="text-[8px] md:text-[16px] xl:text-[22px]  md:text-sm font-bold opacity-90 leading-tight">
                             Highest Salary Offered
                           </p>
                         </motion.div>
                       </div>
                     </motion.div>
                   </div>
                 </section>
           

  <UnivCourses
  heading="Courses"
  onDownloadBrochure={() => setIsModalOpen(true)}
  courses={[
    {
      id: 1,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
      title: "Master of Business Administration",
      subtitle: "JAIN University",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/jain/jain-online-mba",
    },
      {
      id: 2,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
      title: "Bachelor of Business Administration",
      subtitle: "JAIN University",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "5 years",
      coursePath: "/jain/jain-online-bba",
    },
     {
      id: 3,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
       title: "Bachelor of Computer Applications",
      subtitle: "JAIN University",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "5 years",
      coursePath: "/jain/jain-online-bca",
    },
    {
      id: 4,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
      title: "Bachelor of Commerce",
      subtitle: "JAIN University",
      duration: "3 years",
      validity: "5 years",
      coursePath: "/jain/jain-online-bcom",
    },
     {
      id: 5,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
      title: "Master of Arts",
      subtitle: "JAIN University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/jain/jain-online-ma",
    },
    {
      id: 6,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
      title: "Master of Computer Applications",
      subtitle: "JAIN University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/jain/jain-online-mca",
    },
     {
      id: 7,
      universityLogo: "/jain.png",
      universityName: "JAIN Logo",
      title: "Master of Commerce",
      subtitle: "JAIN University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/jain/jain-online-mcom",
    },
  ]}
/>

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

      <MujCareerServices  benefits={benefits}  onCtaClick={() => setIsModalOpen(true)} />

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ContactSection/>


      <FAQ faqs={faqs} />

      <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

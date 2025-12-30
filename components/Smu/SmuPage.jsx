"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import MujCareerServices from "../NmimsSection/MujCareerServices" ;
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Radhya/ContactSection";
import UnivCourses from "../Radhya/UnivCourses";
import { ArrowUpWideNarrow, Boxes, ChartNoAxesColumn, ContactRound, GalleryVertical, Headphones } from "lucide-react";

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

  const faqs = [
    {
      q: "What is the duration and mode of delivery for the SMU Online MBA?",
      a: "The MBA runs over 2 years (4 semesters) and is delivered entirely online — with live and recorded lectures, digital resources, and remote-proctored exams.",
    },
    {
      q: "What are the eligibility requirements to join this MBA program?",
      a: "You need a bachelor's degree from a recognised university to be eligible.",
    },
    {
      q: "What specializations are offered?",
      a: "The program uses a dual-specialization model: all students study Marketing and choose a second specialization from Finance, Human Resources (HR), Systems, Operations & Supply Chain Management, or Healthcare.",
    },
    {
      q: "Can I study while working full-time?",
      a: "Yes. The online format, flexible access to lectures, and remote examinations make it well-suited for working professionals seeking to continue their job while studying.",
    },
    {
      q: "What is the fee structure for the program?",
      a: "Total program fee is ₹1,10,000, payable over four semesters — ₹27,500 per semester. EMI and flexible payment plans are available.",
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

   const topFaculty = [
    {
      name: "Dr. Ishwer Shivakoti",
      title: "Assistant Prof. (SG) & Assistant Director",
      image: "/smu/faculties/ishwer.png",
    },
    {
      name: "Ms. Samu Kharel",
      title: "Assistant Professor",
      image: "/smu/faculties/samu.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Anupam K Pandey",
      title: "Assistant Prof.(SG)",
      image: "/smu/faculties/anupam.png",
    },
    {
      name: "Ms. Shushmita Prasad",
      title: "Assistant Professor",
      image: "/smu/faculties/sushmita.png",
    },
    {
      name: "Mr. Vivek Pandey",
      title: "Assistant Professor",
      image: "/smu/faculties/vivek.png",
    },
    {
      name: "Ms.Tshering G Bhutia",
      title: "Assistant Professor",
      image: "/smu/faculties/tshering.png",
    },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
       <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-20 py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
         <h1 className=" text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-bold leading-none bg-linear-to-r from-[#E75A16] to-[#B1320C] bg-clip-text text-transparent">
             Sikkim Manipal
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
            src="/smu.png"
            alt="SMU Logo"
            width={526}
            height={180}
            className="object-contain w-[320px] md:w-[250px] lg:w-100 xl:w-[526px] pr-10 mt-10 md:mt-0"
          />
        </motion.div>

      </div>
    </section>
      <section className="w-full bg-white px-10 xl:px-15 ">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl lg:text-[64px] text-center md:text-left font-extrabold text-[#345895] mb-5 xl:mb-12">
              About SMU
            </h2>

            <p className="text-black leading-relaxed text-center md:text-left  font-inter text-xs lg:text-[18px] mb-10">
             Sikkim Manipal University (SMU), established in 1995, is a NAAC A+
              accredited and UGC-entitled institution known for its academic
              credibility and technology-enabled education. SMU provides
              learners with industry-relevant, high-quality programs designed
              for today’s competitive world.</p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl mb-10 md:mb-0 overflow-hidden">
              <img
                src="/smu/smuUniv.png"
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
                      <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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
                      <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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
                      <h3 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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

  <UnivCourses
  heading="Courses"
  onDownloadBrochure={() => setIsModalOpen(true)}
  courses={[
    {
      id: 1,
      universityLogo: "/smu.png",
      universityName: "SMU",
      title: "Master of Business Administration",
      subtitle: "Sikkim Manipal",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/smu/sikkim-manipal-online-mba",
    },
     {
      id: 2,
      universityLogo: "/smu.png",
      universityName: "SMU",
      title: "Bachelor of Arts",
      subtitle: "Sikkim Manipal",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "5 years",
      coursePath: "/smu/sikkim-manipal-online-bba",
    },
    {
      id: 3,
      universityLogo: "/smu.png",
      universityName: "SMU",
      title: "Bachelor of Commerce",
      subtitle: "Sikkim Manipal",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "5 years",
      coursePath: "/smu/sikkim-manipal-online-bcom",
    },
    {
      id: 4,
      universityLogo: "/smu.png",
      universityName: "SMU",
      title: "Master of Computer Applications",
      subtitle: "Sikkim Manipal",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/smu/sikkim-manipal-online-mca",
    },
     {
      id: 5,
       universityLogo: "/smu.png",
      universityName: "SMU",
      title: "Master of Arts",
      subtitle: "Sikkim Manipal",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/smu/sikkim-manipal-online-ma",
    },
     {
      id: 6,
      universityLogo: "/smu.png",
      universityName: "SMU",
      title: "Master of Commerce",
      subtitle: "Manipal Jaipur",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/smu/sikkim-manipal-online-mcom",
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

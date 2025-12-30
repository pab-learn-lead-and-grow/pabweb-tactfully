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
import { ArrowUpWideNarrow, Boxes, BriefcaseBusiness, ContactRound, GalleryVertical, Headphones, MessagesSquare, Users } from "lucide-react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Discovery",
      text: "Tools to explore your interests and strengths, understand different career pathways, and uncover your true passion and potential.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "Resume Pro",
      text: "Expert support to build a professional, polished resume or CV tailored to industry standards, showcasing your skills and accomplishments.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />
      ),
      title: "JobSearch",
      text: "Guidance through the online application process, virtual networking opportunities, and preparation for remote interviews to enhance your digital presence.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Counselling",
      text: "Personalized 1-on-1 sessions with experienced career advisors, goal setting, and strategic support to make informed decisions about your future.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "SkillBoost",
      text: "Access to workshops, certification programs, and learning resources to develop job-ready skills and stay competitive in today's job market.",
    },
    {
      icon: (
        <BriefcaseBusiness
          strokeWidth={1.0}
          className="text-[#4D964F] w-18 h-18"
        />
      ),
      title: "Internships",
      text: "Assistance with internship sourcing, application strategies, and gaining real-world project experience to build strong portfolios and work confidence.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Select Your Program",
      desc: " Choose the program that suits your goals.",
    },
    {
      num: "02",
      title: "Complete Your Application",
      desc: "Fill out your application with all the necessary information.",
    },
    {
      num: "03",
      title: "Pay your Program Fee",
      desc: "Make your program payment securely & easily.",
    },
    {
      num: "04",
      title: "Submit & Register",
      desc: "Submit your application and complete your registration",
    },
    {
      num: "05",
      title: "Await Enrollment Details",
      desc: "Wait for enrollment details & further guidance.",
    },
  ];

   const faqs = [
    {
      q: "What is the duration and structure of the Amity Online MBA?",
      a: "The program lasts 2 years, divided into 4 semesters.",
    },
    {
      q: "What are the eligibility criteria for admission?",
      a: "You need a bachelor's degree in any discipline from a recognized university. The minimum required aggregate is 40% in graduation.",
    },
    {
      q: "Do I need to appear for CAT or other entrance exams to get admission?",
      a: "No — Amity Online's MBA does not require CAT, XAT, MAT or any other entrance exam. Admission is based on graduation eligibility.",
    },
    {
      q: "What kind of specializations or electives are offered?",
      a: "Amity Online MBA offers a variety of specializations — including areas like Digital Marketing, HR Analytics, Data Science/Analytics, Digital Entrepreneurship, and more — allowing students to tailor the degree to their career goals.",
    },
    {
      q: "How are classes and learning delivered?",
      a: "The program is fully online, with live and recorded lectures, digital study material, online assignments, and proctored remote exams — allowing flexible learning from anywhere.",
    },
  ];

  const topFaculty = [
    {
      name: "Dr. Rashmi Saxena",
      title: "Assistant Professor",
      image: "/amity/faculties/rashmi.png",
    },
    {
      name: "Mona Chaudhary",
      title: "Assistant Professor",
      image: "/amity/faculties/mona.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Pragati Sahai",
      title: "Assistant Professor",
      image: "/amity/faculties/pragati.png",
    },
    {
      name: "Dr. Harshita",
      title: "Assistant Professor",
      image: "/amity/faculties/harshita.png",
    },
    {
      name: "Dr. Coral J Barboza",
      title: "Associate Professor",
     image: "/amity/faculties/coral.png",
    },
    {
      name: "Dr. Maitri Savarna",
      title: "Professor",
      image: "/amity/faculties/maitri.png",
    },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
       <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-20 py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
         <h1 className=" text-4xl md:text-5xl lg:text-[64px] xl:text-[75px] font-bold leading-none bg-linear-to-r from-[#0E385F] to-[#F9BD04] bg-clip-text text-transparent">
            Amity University
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
            src="/amity.png"
            alt="AMITY Logo"
            width={526}
            height={180}
            className="object-contain w-[320px] md:w-[250px] lg:w-[400px] xl:w-[500px] pr-10 mt-10 md:mt-0"
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
              About Amity
            </h2>

            <p className="text-black leading-relaxed text-center md:text-left  font-inter text-xs lg:text-[18px] mb-10 xl:mb-18">
              Amity University Online, approved by the UGC, is a leading provider of online higher education in India, offering various undergraduate, postgraduate, diploma, and certificate programs. Built for students and working professionals, it delivers a flexible learning experience through live and recorded classes, supported by downloadable resources. The university is particularly known for its industry-focused programs in management, IT, and computer applications.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl mb-10 md:m-0 overflow-hidden">
              <img
                src="/amity/amityUniv.png"
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
                                        <p className="text-[8px]  md:text-[16px] xl:text-[22px] md:text-sm font-bold opacity-90 leading-tight">
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
                                          1.6 lakh+
                                        </h3>
                                        <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                                          working professionals enrolled
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
                                          AICTE
                                        </h3>
                                        <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                                          approved
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
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
      title: "Master of Business Administration",
      subtitle: "AMITY University",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/amity/amity-online-mba",
    },
      {
      id: 2,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
      title: "Bachelor of Business Administration",
      subtitle: "AMITY University",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-bba",
    },
     {
      id: 3,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Bachelor of Computer Applications",
      subtitle: "AMITY University",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-bca",
    },
     {
      id: 4,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Bachelor of Arts",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-ba",
    },
      {
      id: 5,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "BA-JMC",
      subtitle: "AMITY University",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-bajmc",
    },
     {
      id: 6,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Bachelor of Commerce",
      subtitle: "AMITY University",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-bcom",
    },
     {
      id: 7,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Bachelor of Commerce (Hons.)",
      subtitle: "AMITY University",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-bcom-honours",
    },
     {
      id: 8,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Bachelor of Commerce (IFAC)",
      subtitle: "AMITY University",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/amity/amity-online-bcom-international-finance-and-accounting",
    },
     {
      id: 9,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Master of Arts",
      subtitle: "AMITY University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/amity/amity-online-ma",
    },
     {
      id: 10,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "MA-JMC",
      subtitle: "AMITY University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/amity/amity-online-majmc",
    },
     {
      id: 11,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Master of Computer Applications",
      subtitle: "AMITY University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/amity/amity-online-mca",
    },
     {
      id: 12,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
       title: "Master of Science",
      subtitle: "AMITY University",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/amity/amity-online-msc-data-science",
    },
    {
      id: 13,
      universityLogo: "/amity.png",
      universityName: "AMITY Logo",
      title: "Integrated Programs",
      subtitle: "AMITY University",
      duration: "4.5 years",
      validity: "10 years",
      coursePath: "/amity/amity-online-integrated-programs",
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

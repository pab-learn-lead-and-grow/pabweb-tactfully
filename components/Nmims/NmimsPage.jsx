"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import CareerServices from "../NmimsSection/CareerServices";
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Radhya/ContactSection";
import UnivCourses from "../Radhya/UnivCourses";

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

  const faqs = [
    {
      q: "Is the NMIMS Online MBA valid and recognized?",
      a: "Yes, it is UGC-approved and offered by a NAAC A++ accredited university.",
    },
    {
      q: "Can working professionals balance this MBA with a full-time job?",
      a: "Absolutely. The program is designed for flexible, self-paced learning.",
    },
    {
      q: "Does NMIMS offer placement support?",
      a: "Yes-through job portals, resume coaching, interview prep, and 500+ hiring partners",
    },
    {
      q: "Are live classes available?",
      a: "Yes, alongside recorded sessions you can access anytime.",
    },
    {
      q: "How long is the NMIMS Online MBA?",
      a: "The program duration is 24 months.",
    },
  ];

  const topFaculty = [
    {
      name: "Prof. Aman Joshi",
      title: "MBA in Business Design",
      image: "/nmims/mba/faculties/aman.png",
    },
    {
      name: "Dr. Brinda Sampat",
      title: "Ph.D",
      image: "/nmims/mba/faculties/brinda.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Prof. Anisha Bose",
      title: "PGDMM in Digital Marketing",
      image: "/nmims/mba/faculties/anisha.png",
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

  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-20 py-10">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className=" text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-bold leading-none bg-[linear-gradient(90deg,#000000_0%,#3C3C43_15.87%,#BA1C22_42.31%,#D3272A_100%)] bg-clip-text text-transparent">
            NMIMS - CDOE
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
              src="/nmims.png"
              alt="NMIMS Logo"
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
            <h2 className="text-[32px] md:text-4xl lg:text-[64px]  text-center md:text-left font-extrabold text-[#270652] mb-12">
              About NMIMS
            </h2>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
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
            <div className="max-w-7xl overflow-hidden">
              <img
                src="/nmims/nmimsUniv.png"
                alt="Students"
                className="w-full h-[95%] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
      <section className="w-full mt-8 xl:mt-16  px-4 md:px-10 lg:px-20 font-[Inter]">
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

      <UnivCourses
        heading="Courses"
        onDownloadBrochure={() => setIsModalOpen(true)}
        courses={[
          {
            id: 1,
            universityLogo: "/nmims.png",
            universityName: "NMIMS",
            title: "Master of Business Administration",
            subtitle: "NMIMS Mumbai",
            tag: "Most-Loved",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/nmims/nmims-mumbai-online-mba",
          },
          {
            id: 2,
            universityLogo: "/nmims.png",
            universityName: "NMIMS",
            title: "Bachelor of Business Administration",
            subtitle: "NMIMS Mumbai",
            tag: "Trending",
            duration: "3 years",
            validity: "6 years",
            coursePath: "/nmims/nmims-mumbai-online-bba",
          },
          {
            id: 3,
            universityLogo: "/nmims.png",
            universityName: "NMIMS",
            title: "Master of Business Admin.(WX)",
            subtitle: "NMIMS Mumbai",
            tag: "Most-Loved",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/nmims/nmims-mumbai-online-mba-working-executives",
          },
          {
            id: 4,
            universityLogo: "/nmims.png",
            universityName: "NMIMS",
            title: "Bachelor of Commerce",
            subtitle: "NMIMS Mumbai",
            duration: "3 years",
            validity: "6 years",
            coursePath: "/nmims/nmims-mumbai-online-bcom",
          },
          {
            id: 5,
            universityLogo: "/nmims.png",
            universityName: "NMIMS",
            title: "Online Diploma",
            subtitle: "NMIMS Mumbai",
            duration: "1 year",
            validity: "2 years",
            coursePath: "/nmims/nmims-mumbai-online-diploma",
          },
          {
            id: 6,
            universityLogo: "/nmims.png",
            universityName: "NMIMS",
            title: "Certification in Business Management",
            subtitle: "NMIMS Mumbai",
            duration: "6 months",
            validity: "2 years",
            coursePath: "/nmims/nmims-mumbai-online-certification",
          },
        ]}
      />

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

      <CareerServices onCtaClick={() => setIsModalOpen(true)} />

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ContactSection />

      <FAQ faqs={faqs} />

      <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

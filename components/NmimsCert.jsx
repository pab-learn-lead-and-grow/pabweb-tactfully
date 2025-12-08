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

export default function Page() {
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
      desc: "Dummy description for registration. Replace with real content later.",
    },
    {
      num: "02",
      title: "Document Submission",
      desc: "Dummy description for document submission. Replace with real content later.",
    },
    {
      num: "03",
      title: "Fee Submission",
      desc: "You may confirm your admission by paying the fee online, or by sending a demand draft in favour of SVKM’S NMIMS Payable at Mumbai.",
    },
    {
      num: "04",
      title: "Confirmation",
      desc: "Dummy description for confirmation. Replace with real content later.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Step 03 open by default

  const toggleStep = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const topics = [
    "Financial Accounting",
    "Micro Economics & Macro Economics",
    "Business Communication",
    "Organisational Behaviour",
    "Marketing Management",
    "Quantitative Methods - I",
  ];

  const servicesPab = [
    {
      num: "01",
      title: "1-1 career coaching",
      desc: "trusted one point of contact throughout your journey",
    },
    {
      num: "02",
      title: "Subject matter experts",
      desc: "team of dedicated SME for your personal interests",
    },
    {
      num: "03",
      title: "Post admission program services",
      desc: "a help in adapting online courses with growth opportunities",
    },
    {
      num: "04",
      title: "30 min query assistance",
      desc: "just in time query resolution.",
    },
    {
      num: "05",
      title: "Progress Tracking & Feedback",
      desc: "regular check-ins to keep you on track and help you improve continuously",
    },
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

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const benefits = [
    {
      icon: <FileUser className="text-[#4D964F] w-18 h-18" />,
      title: "Access to Job Portal",
      text: "Get a 6-month access to IIMJobs, Updazz & Hirist to find a role of your choice, get your job applications highlighted, and improve profile ranking.",
    },
    {
      icon: <Route className="text-[#4D964F] w-18 h-18" />,
      title: "Coaching",
      text: "One-on-one personalised guidance by an expert coach to create a strategic roadmap for your career and achieve your professional goals.",
    },
    {
      icon: <Blocks className="text-[#4D964F] w-18 h-18" />,
      title: "Profile Development",
      text: "Get expert mentoring on Resume building, Social Media Profiling, and Personal Branding to increase your chances of getting shortlisted.",
    },
    {
      icon: <MessagesSquare className="text-[#4D964F] w-18 h-18" />,
      title: "Practice Interviews",
      text: "One-on-one practice interview session to enhance your chances of succeeding at interviews for jobs, career change, or promotions.",
    },
    {
      icon: <ChartNoAxesColumn className="text-[#4D964F] w-18 h-18" />,
      title: "Assessment",
      text: "Assessment of your cognitive and behavioural skills through aptitude and psychometric tests to identify the most suitable career path",
    },
  ];

  const topFaculty = [
    {
      name: "Prof. Aman Joshi",
      title: "MBA in Business Design",
      image: "/professional.png",
    },
    {
      name: "Dr. Brinda Sampat",
      title: "Ph.D",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Prof. Anisha Bose",
      title: "PGDMM in Digital Marketing",
      image: "/professional.png",
    },
    {
      name: "Dr. Chhavi Taneja",
      title: "Ph.D Master of Business Eco",
      image: "/professional.png",
    },
    {
      name: "Prof. Abhishek Mani",
      title: "MBA in Finance",
      image: "/professional.png",
    },
    {
      name: "Dr. Arun Kohli",
      title: "Ph.D",
      image: "/professional.png",
    },
  ];

  const stats = [
    { value: "6", label: "Months Duration" },
    { value: "1", label: "Semesters" },
    { value: "2", label: "Years Validity" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[650px] md:min-h-[750px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/nmimsClg.png"
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
            className="inline-block bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6  mb-2 font-sm px-8 py-2 rounded-full"
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
              className="text-white text-4xl sm:text-5xl md:text-5xl font-[Inter] lg:text-[54px] font-bold -mt-1 leading-tight"
            >
              Certificate Program in Business Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[18px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
            >
              Explore the essentials of business management with this 6-month
              certificate program designed to offer a strong preview of the
              business world.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 mt-5 md:grid-cols-3 gap-y-5 w-full"
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
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-200 text-[48px] font-bold sm:text-base">
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

      <section className="w-full bg-white pl-6 pt-0 md:px-16">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#345895] mb-6">
              About NMIMS
            </h2>

            <p className="text-black leading-relaxed text-sm md:text-base">
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
          <div className="relative w-full h-full flex md:justify-end  ">
            <div className="w-full md:w-[90%] overflow-hidden mr-0 rounded-bl-full">
              <img
                src="/professional.png"
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
      <section className="w-full mt-16 px-4 md:px-18">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-[64px] leading-[120%] font-extrabold text-[#345895] mb-10 font-[Inter]">
            A Snapshot of Success
          </h2>

          {/* BLUE BAR */}
          <div className="bg-[#064E92] rounded-tr-full rounded-bl-full py-10 px-6 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center text-white">
              {/* STAT 1 */}
              <div>
                <p className="text-sm md:text-base font-medium opacity-90">
                  5-Star NAAC
                  <br /> Accreditation Since
                </p>
                <h3 className="text-4xl font-bold mb-2">
                  <Counter end={1999} />
                </h3>
              </div>

              {/* STAT 2 */}
              <div>
                <p className="text-sm md:text-base font-medium opacity-90">
                  Deemed University
                  <br /> Status Awarded
                </p>
                <h3 className="text-4xl font-bold mb-2">
                  <Counter end={2003} />
                </h3>
              </div>

              {/* STAT 3 */}
              <div>
                <p className="text-sm md:text-base font-medium opacity-90">
                  NAAC A++ (3.67) for 4th
                  <br /> Consecutive Cycle
                </p>
                <h3 className="text-4xl font-bold mb-2">
                  <Counter end={2025} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-2 md:px-12 lg:px-20 py-12 flex flex-col gap-8">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-232 text-left mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[49px] leading-snug text-gray-900">
            <span className="text-red-600 ">
              Explore the essentials of business management
              <br />
            </span>
            with this 6-month certificate program designed to offer a strong
            preview of the business world.
          </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <Ungroup size={70} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-4">
                Learn basics of business management
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Understand the foundational concepts of business management and
                how they apply in real-world settings to build a strong career
                in the field.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <BookText size={70} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-4">
                Skills to solve business challenges
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Gain essential business skills that empower you to analyze
                issues, think strategically, and create solutions for real-world
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto px-5 text-left"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-[64px] font-[Inter] flex items-center justify-center text-left md:text-[64px] font-extrabold text-[#345895] mb-10"
        >
          Why Choose Us
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {[
            {
              logo: Users,
              title: "Foundation",
              text: "Deepen your understanding of key management concepts and sharpen your ability to critically analyse and solve real-world business challenges.",
            },
            {
              logo: BookOpenCheck,
              title: "Specializations",
              text: "Choose from marketing, finance, or business analytics to shape your career trajectory with the right specialization.",
            },
            {
              logo: SplinePointer,
              title: "Flexible",
              text: "Experience seamless learning through an integrated platform accessible on any device study whenever and however you prefer.",
            },
            {
              logo: Speech,
              title: "Mentorship",
              text: "Learn from top academicians and industry leaders who guide you with practical knowledge and deep professional experience.",
            },
            {
              logo: GlobeLock,
              title: "Industry-Ready",
              text: "Gain the skills to develop and apply business models and frameworks to solve real-world business challenges.",
            },
            {
              logo: FileUser,
              title: "Upskill",
              text: "Master practical business tools and strategic frameworks that empower you to solve complex challenges and drive meaningful results in the real world.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#064E92] p-4 rounded-xl hover:shadow-lg transition-shadow flex gap-2"
            >
              {/* Icon - 30% */}
              <div className="w-[30%] flex items-center justify-center">
                <card.logo size={70} strokeWidth={1.0} className="text-white" />
              </div>

              {/* Text - 70% */}
              <div className="w-[70%]">
                <h3 className="text-3xl font-semibold text-white text-left mt-2 mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-left text-xs">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="w-full flex items-center justify-center"
        >
          <button className=" text-white mt-4 px-16 py-2 rounded-lg text-sm bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 flex items-center justify-center gap-4 transition">
            Get Full Access
          </button>
        </motion.div>
      </motion.div>

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 px-6 py-3 mt-65 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap"
            >
              DOWNLOAD SYLLABUS →
            </motion.button>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        <div className="max-w-5xl mx-auto">
          {/* Title animation */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-5xl md:text-5xl font-bold text-[#345895]"
          >
            Eligibility Criteria
          </motion.h2>

          {/* Card container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col md:flex-row max-w-5xl items-center gap-8"
          >
            {/* Left text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 text-3xl font-semibold leading-relaxed md:w-3/5"
            >
              Eligibility criteria - HSC (10+2) in any discipline from a
              recognized Board.
            </motion.p>

            {/* Right image animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/3 flex justify-center"
            >
              <img
                src="/office.png"
                alt="Eligibility Illustration"
                className="w-64 h-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 py-16">
        {/* Heading */}
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-5xl font-[Inter] font-bold text-[#345895] mb-4">
            Learning Approach
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Get a work-life-study balance with this program designed for working
            professionals delivered via <br /> latest learning management
            systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {/* Card Template */}
          {[
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
              desc: "Receive quick assistance through chat, ticketing, and call-back options ensuring smooth and uninterrupted learning.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-2xl p-10 border border-gray-100 flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <item.icon size={50} className="text-[#0A3971]" />
              </div>

              <h3 className="text-xl font-semibold text-[#0A3971] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button at Bottom Center */}
        <div className="flex items-center justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="text-white mt-4 px-8 py-4 rounded-lg text-md bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md shadow-[#1C361D] flex items-center justify-center"
          >
            Ready to Learn? Click Here
          </motion.button>
        </div>
      </section>
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter] relative">
        {/* Faded Background Heading */}
        <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[66px] md:text-[66px] text-[rgba(6, 78, 146, 0.1)] opacity-90 select-none tracking-tight whitespace-nowrap">
          EXAMINATION PROCESS
        </h1>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[62px] font-bold text-center text-[#345895] mb-6"
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
            The NMIMS Online Diploma follows a structured and transparent
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
              <h3 className="text-2xl font-semibold italic mb-5">
                Exam Slot Booking
              </h3>

              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-2xl leading-none">✦</span>
                  <p className="text-left mb-6">
                    Learners must book their examination slots through the NMIMS
                    Student Portal.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-2xl leading-no">✦</span>
                  <p className="text-left">
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
              <h3 className="text-2xl font-semibold italic mb-5">
                Exam Slot Timings
              </h3>

              <p className="text-lg max-w-[380] mb-6 text-center">
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

              <p className="text-lg max-w-[380] text-center">
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
          <h2 className="text-4xl md:text-[40] font-bold italic text-[#345895] mb-12 text-center">
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
                <div className="rounded-lg border border-[#345895] py-4 px-13 text-sm text-center text-[#345895] bg-white">
                  MCQ
                </div>
                <div className="rounded-lg border border-[#345895] py-3 px-12 text-sm text-center text-[#345895] bg-white">
                  Descriptive Answers
                </div>
              </div>
            </div>

            {/* Right Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                Internal Assessment(30%)
              </div>

              <div className="flex flex-col gap-2">
                <div className="rounded-lg border border-[#345895] py-[5px] px-7 text-sm text-center text-[#345895] bg-white">
                  Regular Case-based & application-oriented internal assessments
                </div>
              </div>
            </div>
          </div>

          {/* Passing Criteria Box */}
          <div className="border border-[#e5e7eb] rounded-lg p-5 mt-15 bg-white">
            <p className="font-semibold text-black mb-1">Passing Criteria</p>
            <ul className="list-disc pl-8 text-[#345895] text-lg">
              <li>
                A candidate must secure a minimum of 40% to successfully pass
                the course
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-white mt-15 py-5 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-center text-[#345895] font-[Inter] text-5xl md:text-5xl font-extrabold mb-12">
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
          {/* GRID — 3 ON TOP, 2 BELOW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* ---- TOP 3 BENEFITS ---- */}
            {benefits.slice(0, 3).map((item, index) => (
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

            {/* ---- BOTTOM 2 BENEFITS (Centered) ---- */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-20 mt-6">
              {benefits.slice(3, 5).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center flex flex-col items-center max-w-[250px]"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-[#345895] font-extrabold font-[Inter] text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#345895] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
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
      <section className="w-full bg-[#345895]  mt-10 px-4 md:px-12 lg:px-20 py-16">
        {/* OUTER BORDER BOX */}
        <div className="p-6 md:p-12">
          {/* TITLE BLOCK */}
          <div className="text-center mb-10">
            <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
              Your Path to Enrollment
            </h2>

            <p
              className="text-[#4DA7DE] font-[Covered_By_Your_Grace] 
               text-4xl md:text-5xl lg:text-[64px] leading-none mt-2"
            >
              Here's how.
            </p>
          </div>

          {/* STEPS */}
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <div key={i}>
                <div
                  onClick={() => toggleStep(i)}
                  className="flex items-center gap-6 cursor-pointer group"
                >
                  {/* NUMBER */}
                  <p
                    className="text-white font-[Covered_By_Your_Grace] 
                     text-[42px] md:text-[48px] leading-none pt-1 min-w-[50px]"
                  >
                    {step.num}
                  </p>

                  {/* TITLE + DESCRIPTION */}
                  <div className="w-full relative">
                    <p
                      className={`text-[20px] md:text-[24px] font-bold transition-colors
                      ${
                        activeIndex === i ? "text-white" : "text-[#D8D8D8]/79"
                      }`}
                    >
                      {step.title}
                    </p>

                    {/* VERTICAL LINE */}
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute -left-4 top-6 w-0.5 bg-[#345895]"
                      ></motion.div>
                    )}

                    {/* DESCRIPTION */}
                    <AnimatePresence>
                      {activeIndex === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-sm md:text-base mt-2 leading-relaxed pr-6 line-clamp-2"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-18">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] gap-10">
          {/* LEFT CONTENT */}
          <div className="space-y-4">
            <p className="text-[#1F1717] text-sm font-medium">Degree Sample</p>

            <h2 className="text-[#345895] text-[64px] font-bold md:text-[64px] leading-tight">
              NMIMS Online <br />
              Certification <br />
              Program
              <br />
              Certificate
            </h2>

            <p className="text-[#3C3C43] max-w-[350px] text-base">
              Highlight your professional success with official certificate from
              NMIMS NCDOE
            </p>

            <button className="bg-[#4D964F] text-white font-medium text-sm px-10 py-2 mt-10  rounded-lg bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-md shadow-[#1C361D]  transform hover:scale-105 duration 200 flex items-center justify-center ">
              Know more
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/office.png"
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
      <section className="w-full bg-white py-20 px-16 md:px-12 lg:px-20">
        <div className="w-full bg-[#064E92] rounded-4xl py-20 px-16 md:px-12 lg:px-20">
          {/* White inner container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-6 md:p-12 max-w-7xl mx-auto"
          >
            {/* Title */}
            <div className="text-center mb-4 relative pb-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#064E92] font-bold font-[Inter] text-3xl md:text-5xl lg:text-[64px]"
              >
                Career Opportunities
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center flex justify-center text-black text-[20px] max-w-lg mx-auto mb-12"
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
              >
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/professional.png"
                    width={466}
                    height={250}
                    alt="Career handshake"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* RIGHT LIST — ROLES directly written here */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                {/* Each line manually listed */}
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
                    <span className="w-7 h-7 rounded-full bg-[#4d964f] flex items-center justify-center">
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
                  className=" w-[200px] bg-[#4D964F] text-white mt-4 px-6 py-3 rounded-lg text-sm bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200"
                >
                  Know more
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="min-h-screen font-[Inter] px-18 bg-[#345895] py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 md:mb-12">
            <span>
              <CornerDownRight />
            </span>
            <h2 className="text-white text-base sm:text-lg font-medium">
              Our Faculties
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start mb-6 sm:mb-8 md:mb-10">
            {/* Left Column - Heading */}
            <div className="lg:pr-8">
              <h1 className="text-white font-[Inter] text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-semibold leading-tight">
               NMIMS faculty comprises a mix of academicians and industry experts who will inspire and support you in your journey towards professional success.
               </h1>
            </div>

            {/* Right Column - Top 2 Faculty Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5 md:gap-6">
              {topFaculty.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="aspect-4/3 relative overflow-hidden bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom 4 Faculty Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
            {bottomFaculty.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-4/3 relative overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-200 text-xs sm:text-sm">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* See All Members Button */}
          <div className="max-w-4xl mx-auto">
            <button className="w-full py-4 sm:py-5 px-6 border-2 border-white/30 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
              See all members
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <section className="w-full px-4 md:px-14 lg:px-20 py-16">
        {/* OUTER BORDER BOX */}
        <div className=" px-6  md:px-10 relative">
          <div className="flex items-center gap-40">
            {/* TITLE + DESCRIPTION */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[#345895] text-[64px] md:text-[64px] font-bold font-[Inter] leading-10 whitespace-nowrap"
            >
              Services by PAB
            </motion.h2>

            {/* Horizontal line that starts after text & has fixed width */}
            <div className="h-px bg-black w-[572px] md:w-[250px] lg:w-[600px] mt-6"></div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[#345895]/65 text-sm md:text-[36px] font-semibold italic leading-relaxed"
          >
            Learn Lead & Grow
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-black text-sm md:text-base max-w-md leading-relaxed"
          >
            Our services ensure you're supported at every step through
            personalised 1-1 career coaching, access to subject matter experts,
            and dedicated post-admission assistance. With quick 30-minute query
            resolution and continuous progress tracking, you get a smooth,
            guided, and growth-focused learning experience.
          </motion.p>

          {/* INNER BORDER BOX */}
          <div className=" mt-10 p-4 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesPab.map((servicesPab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  {/* NUMBER */}
                  <p className="text-[#4D964F] text-9xl md:text-8xl ">
                    {servicesPab.num}
                  </p>

                  {/* TEXT BLOCK */}
                  <div>
                    <h3 className="font-semibold text-black text-sm md:text-base leading-snug max-w-[150px]">
                      {servicesPab.title}
                    </h3>
                    <p className="text-[#3C3C43] text-xs md:text-sm mt-1 leading-snug max-w-[150px]">
                      {servicesPab.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 ">
        {/* TITLE */}
        <h2 className="text-[#345895] font-extrabold flex flex-row items-center justify-center font-[Inter] text-[42px] md:text-[64px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className="hidden w-full md:grid grid-cols-2 bg-[#4D964F] text-white font-semibold text-left px-35 gap-40 py-4 text-base rounded-xl">
            <p>PARTICULARS</p>
            <p>DATES</p>
          </div>

          {/* BODY ROWS */}
          <div className="divide-y divide-[#C8C8C8]">
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
              <div
                key={i}
                className="
            grid grid-cols-1 md:grid-cols-2 
            gap-2 md:gap-0
            text-sm md:text-base 
            py-4 px-4 md:px-6 
            hover:bg-[#F8FAFC] transition-colors
          "
              >
                {/* Mobile Labels */}
                <div className="md:hidden text-[#345895] font-medium">
                  Particulars
                </div>
                <p className="text-black px-30">{row.p}</p>

                <div className="md:hidden mt-2 text-[#345895] font-medium">
                  Dates
                </div>
                <p className="text-black px-20">{row.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-10 md:px-50 py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#345895] font-extrabold flex flex-row items-center justify-center font-[Inter] text-3xl md:text-5xl mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ CARDS */}
        <div className="flex flex-col gap-6 max-w-5xl">
          {faqs.map((q, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 md:p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center text-black justify-between">
                {/* ❗ FIXED HERE — use q.q instead of q */}
                <p className="text-lg md:text-xl font-semibold">{q.q}</p>

                <Plus
                  size={24}
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-black mt-4 text-sm md:text-base"
                  >
                    {/* ❗ FIXED HERE — use q.a */}
                    {q.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-90 bg-[#345895] py-15 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Inter] font-bold text-white max-w-4xl leading-tight px-4">
          Connect Today for expert-led,
          <br />
          personalised career counselling.
        </h2>

        <button
          type="button"
          className="mt-15 text-white py-3 px-15 rounded-xl text-lg  bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 font-semibold hover:shadow-lg transition duration-200"
        >
          What's My Fit?
        </button>
      </section>
    </main>
  );
}

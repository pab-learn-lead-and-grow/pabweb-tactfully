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
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import CourseCurriculumSection from "@/components/CourseCurriculumSection";

export default function Page() {
  const curriculumData = {
    1: {
      semesters: {
        semester1: {
          title: "Semester 1",
          topics: [
            "Principles of Management and Organizational Behavior",
            "Marketing Management",
            "Accounting for Managers",
            "Business Economics",
            "Business Communication",
            "Legal Aspects of Business",
            "Computer Application in Management",
          ],
        },

        semester2: {
          title: "Semester 2",
          topics: [
            "Quantitative Methods in Management",
            "Human Resource Management",
            "Financial Management",
            "Productions and Operations Management",
            "Research Methodology and Statistical Techniques",
            "Global Economic Environment and Policy",
            "Management Information Systems",
          ],
        },
      },
    },

    /* ------------------------------------------------------------- */

    2: {
      semesters: {
        semester3: {
          title: "Semester 3",

          coreSubjects: ["Project Management", "Business Strategy"],

          specialization1: {
            title: "Specialization I",
            useRadio: false,
            data: [
              {
                name: "Marketing",
                topics: [
                  "Consumer Behavior and Advertisement and Brand Management",
                  "Retail and Distribution Management and Supply Chain Management",
                ],
              },
              {
                name: "Finance",
                topics: [
                  "Corporate Financial Reporting",
                  "International Finance",
                ],
              },
              {
                name: "HR",
                topics: [
                  "Training and Development",
                  "Performance Appraisal Management",
                ],
              },
            ],
          },

          specialization2: {
            title: "Specialization II",
            useRadio: false,
            data: [
              {
                name: "Finance",
                topics: [
                  "Security Analysis and Portfolio Management & Derivative Market",
                  "Taxation",
                ],
              },
              {
                name: "Marketing",
                topics: ["Marketing Analytics", "Digital Marketing"],
              },
              {
                name: "HR",
                topics: ["Industrial Relations", "Compensation Management"],
              },
            ],
          },
        },

        /* --------------------------------------------------------- */

        semester4: {
          title: "Semester 4",

          coreSubjects: ["Banking and Insurance Management", "Project Work"],

          specialization1: {
            title: "Specialization I",
            useRadio: false,
            data: [
              {
                name: "Marketing",
                topics: [
                  "Market Research",
                  "Service Marketing & Global Marketing",
                ],
              },
              {
                name: "Finance",
                topics: ["Corporate Finance", "Investment Banking"],
              },
              {
                name: "HR",
                topics: ["Strategic HRM", "Talent Acquisition"],
              },
            ],
          },

          specialization2: {
            title: "Specialization II",
            useRadio: false,
            data: [
              {
                name: "Finance",
                topics: [
                  "Multinational Finance & Risk Exposure Management",
                  "Marketing of Financial Services & Mergers and Acquisitions",
                ],
              },
              {
                name: "Marketing",
                topics: ["Retail Analytics", "Digital Consumer Insights"],
              },
              {
                name: "HR",
                topics: ["HR Analytics", "Labour Welfare Policies"],
              },
            ],
          },
        },
      },
    },
  };

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

  const topFaculty = [
    {
      name: "Dr. Ishwer Shivakoti",
      title: "Assistant Prof. (SG) & Assistant Director",
      image: "/professional.png",
    },
    {
      name: "Ms. Samu Kharel",
      title: "Assistant Professor",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Anupam K Pandey",
      title: "Assistant Prof.(SG)",
      image: "/professional.png",
    },
    {
      name: "Ms. Shushmita Prasad",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Mr. Vivek Pandey",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Ms.Tshering G Bhutia",
      title: "Assistant Professor",
      image: "/professional.png",
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
    { value: "102", label: "Credits" },
    { value: "Dual", label: "Specialization" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[650px] md:min-h-[750px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/smuClg.png"
            alt="Campus"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* LOGO – move to left screen edge, keep same height */}
        <div className="relative z-10 w-full mt-35">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="bg-white rounded-r-2xl shadow-md h-[100px] px-5 -mb-8 flex items-center">
              <Image
                src="/smu.png"
                alt="manipal Jaipur Logo"
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
            className="inline-flex items-center gap-2 bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6 mb-2 px-5 py-2 rounded-full"
          >
            4.5 <Star size={15} />
          </motion.span>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-[16px] sm:text-[16px] italic font-light"
          >
            (Master of Business Administration)
          </motion.p>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-[Inter] lg:text-[62px] font-bold -mt-2 leading-tight"
            >
              Online MBA with Dual Specialization
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[18px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
            >
              Step into the future of work with the UGC-entitled Online MBA from
              Manipal University Jaipur (NAAC A+ & QS-ranked). Choose from 13
              specializations, including Digital Marketing and Data Science,
              with the option for super or dual specialization in Semester 3.
              Gain Coursera access, industry certificates, placement support,
              and the strength of the global Manipal Alumni network.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 mt-5 md:grid-cols-4 -mx-8 gap-y-6 w-5xl"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center px-5 py-6 ${
                    idx !== stats.length - 1
                      ? "md:border-r-2 md:border-white"
                      : ""
                  }`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-[Inter] font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white text-[22px] font-bold font-[Inter] sm:text-base">
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
              About <span className="text-[#B35531] ">SMU </span>
            </h2>

            <p className="text-black leading-relaxed text-sm md:text-base">
              Sikkim Manipal University (SMU), established in 1995, is a NAAC A+
              accredited and UGC-entitled institution known for its academic
              credibility and technology-enabled education. SMU provides
              learners with industry-relevant, high-quality programs designed
              for today’s competitive world.
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
                <h3 className="text-4xl font-bold mb-2">NAAC A+</h3>
                <p className="text-sm md:text-base font-medium opacity-90">
                  Rajsthan's First
                </p>
              </div>

              {/* STAT 2 */}
              <div>
                <h3 className="text-4xl font-bold mb-2">UGC</h3>
                <p className="text-sm md:text-base font-medium opacity-90">
                  Entitled Degree
                </p>
              </div>

              {/* STAT 3 */}
              <div>
                <h3 className="text-4xl font-bold mb-2">#9</h3>
                <p className="text-sm md:text-base font-medium opacity-90">
                  Rank By Careers360
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-2 md:px-12 lg:px-20 py-12 flex flex-col gap-8">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-232 text-left mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[40px] leading-snug text-gray-900">
            <span className="text-[#B35531] ">
              SMU's online MBA with dual specialization, offered by a NAAC A+
              accredited university, prepares professionals with essential
              management skills to thrive in today’s business world.{" "}
            </span>
            Students can choose any two specializations—Marketing, Finance, HR,
            Systems, Operations & Supply Chain Management, or Healthcare.
            Designed for working professionals, this affordable online MBA
            provides flexible learning, expert faculty support, and networking
            opportunities. The AI-enabled LMS ensures round-the-clock access to
            classes, resources, digital libraries, forums, and remote-proctored
            exams.
          </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <Ungroup size={70} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-1">
                Dual-Specialization Flexibility
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                 The program lets you specialise in two domains with Marketing
                as a core specialisation plus a second area of your choice such
                as Finance, Human Resources, Systems, Operations & Supply Chain
                Management, or Healthcare giving you broader expertise and
                making you more versatile in the job market.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 text-[#345895] rounded-full w-12 h-12 flex items-center justify-center">
              <BookText size={70} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-1">
                Fully Online, Highly Flexible & Accessible
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Delivered entirely online via an AI-enabled learning platform,
                the MBA allows professionals to study from anywhere, blending
                live and recorded classes, digital resources, remote-proctored
                exams, and 24/7 access, letting you balance work, learning, and
                personal commitments without disrupting your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} />

      <CourseCurriculumSection years={[1, 2]} data={curriculumData} />

      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-[64px] font-bold text-[#345895] mb-7">
            Eligibility Criteria
          </h2>

          {/* Indian Students */}
          <div className="mb-5">
            <h3 className="text-xl md:text-5xl italic text-[#345895] mb-4">
              For Indian students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Educational qualification
            </h4>
            <p className="text-[#1F284E] text-[32px] mb-5 leading-tight">
              Candidates must have completed 10+2+3-year or 10+2+4-year or
              10+3+3-year bachelor's degree in any discipline from a recognized
              university/institution, or an equivalent qualification as
              recognized by the Association of Indian Universities (AIU) or
              other competent bodies.
            </p>

            {/* Grades */}
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Grades
            </h4>
            <p className="text-[#1F284E] text-[32px] mb-8 leading-tight">
              Candidates must have a minimum of 50% marks in aggregate in
              graduation (45% for reserved categories).
            </p>
          </div>

          {/* NRI & Foreign Students */}
          <div className="mb-5">
            <h3 className="text-xl md:text-5xl italic text-[#345895] mb-4">
              For NRI & foreign students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Educational qualification
            </h4>
            <ul className="text-[#1F284E] text-[32px] mb-5 list-disc px-5 leading-tight">
              <li>
                Candidates must have completed 10+2+3-year or 10+2+4-year or
                10+3+3-year bachelor's degree in any discipline from a
                recognized university/institution, or an equivalent
                qualification as recognized by the Association of Indian
                Universities (AIU) or other competent bodies.
              </li>
              <li>
                Candidates who have completed 10+2 education or graduate level
                education outside India must produce a certificate of
                equivalence issued by the Association of Indian Universities.
              </li>
            </ul>

            {/* Grades */}
            <h4 className="font-bold text-[32px] text-[#1F284E] mb-1">
              Grades
            </h4>
            <p className="text-[#1F284E] text-[32px] leading-tight mb-5">
              Candidates must have a minimum of 50% marks in aggregate in
              graduation.
            </p>

            {/* Other Requirements */}
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Other requirements
            </h4>
            <p className="text-[#1F284E] text-[32px] leading-tight mb-8">
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
            The Sikkim Manipal Univeristy Online MBA follows a structured and
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
              <h3 className="text-2xl font-semibold italic mb-5">
                Exam Slot Booking
              </h3>

              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-2xl leading-none">✦</span>
                  <p className="text-left mb-6">
                    Learners must book their examination slots through the SMU
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
                For end-term examinations, SMU provides three available slots:
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
                End-term Examination (70 Marks)
              </div>

              <div className="flex flex-cols-2 gap-1">
                <div className="rounded-lg border border-[#345895] py-3 px-2 text-sm text-center text-[#345895] bg-white">
                  MCQ (40 Marks)
                </div>
                <div className="rounded-lg border border-[#345895] py-3 px-3 text-sm text-center text-[#345895] bg-white">
                  Descriptive Answers (30 Marks)
                </div>
              </div>
            </div>

            {/* Right Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-[#345895] py-3 text-center italic font-semibold text-[#064E92] bg-white">
                Internal Assessment (30 Marks)
              </div>

              <div className="flex flex-cols-2 gap-2">
                <div className="rounded-lg border border-[#345895] py-3 px-16 text-sm text-center text-[#345895] bg-white">
                  Quiz
                </div>
                <div className="rounded-lg border border-[#345895] py-3 px-16 text-sm text-center text-[#345895] bg-white">
                  Assignment
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
        {/* CONTAINER BORDER BOX */}
        <div className="px-2">
          {/* FLEX WRAPPER */}
          <div className="flex flex-row justify-center items-center gap-10">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <h2 className="text-[#064E92] text-[42px] md:text-[52px] font-extrabold leading-[110%] mb-6">
                Fees Structure
              </h2>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                Convenient Fee Payment Option:
                <br />
                Choose your preferred fee payment option
              </p>

              <button className=" text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] mt-5 font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration 200 flex items-center justify-center w-fit">
                Compare all Plans
              </button>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex flex-row items-start justify-center font-[Inter] gap-6 lg:w-[35%] pr-25">
              {/* Annual PAYMENT CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Annual Payment</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">
                  1,10,000/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  inclusive of all taxes
                </p>
              </div>
              {/* Semester wise CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center ">
                  <p className="font-semibold text-white">Semester wise</p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">
                  27,500/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  inclusive of all taxes
                </p>
              </div>

              {/* EMI CARD */}
              <div className="bg-linear-to-b from-[#345895] to-[#101C2F] rounded-xl shadow-md px-6 py-8 w-[100px] md:w-[230px] flex flex-col justify-between h-[260px]">
                <div className="text-center">
                  <p className="font-semibold text-white">EMI Strating at </p>
                  <p className="text-xs text-white mt-1">in INR</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                    MBA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">
                  4,583/-
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  per month
                </p>
                <p className="text-xs text-white text-center italic mb-5 ">
                  T&C apply
                </p>
              </div>
            </div>
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

      <section className="w-full mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] items-center font-[Inter] gap-6">
          {/* LEFT CONTENT */}
          <div className="space-y-4 pr-4">
            <p className="text-[#1F1717] text-sm font-medium">Degree Sample</p>

            {/* FIXED THREE-LINE HEADING WITH SMOOTH LINE-HEIGHT */}
            <h2 className="text-[#345895] text-[46px] md:text-[52px] lg:text-[62px] font-bold leading-[1.05] max-w-[720px]">
              <span className="block">Sikkim Manipal</span>
              <span className="block">University Online</span>
              <span className="block">MBA Certificate</span>
            </h2>

            <p className="text-[#3C3C43] max-w-[530px] text-base leading-relaxed">
              Graduate with UGC-entitled and
              <br />
              internationally accepted online degrees.
            </p>

            <button className="bg-[#4D964F] text-white font-medium text-sm px-10 py-2 rounded-lg bg-linear-to-r from-[#4D964F] to-[#193019] border-0 shadow-md shadow-[#1C361D] transform hover:scale-105 duration-200 flex items-center justify-center">
              Know more
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <img
              src="/office.png"
              alt="Certificate Preview"
              className="rounded-lg shadow-sm object-cover"
              style={{ width: "484px", height: "343px" }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5">
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
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
                <UserLock size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Dual-Domain Expertise and versatility
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  You graduate with knowledge and skills in two management
                  domains (e.g. Marketing + Finance / HR / Systems / Operations
                  & Supply Chain / Healthcare), making you more adaptable and
                  valuable to employers.
                </p>
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
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
                <GlobeLock size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Strong Managerial & Leadership Skills
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  The curriculum builds competencies in leadership, strategic
                  decision-making, problem-solving, global business environment,
                  and project management — essential for mid- to senior-level
                  roles.
                </p>{" "}
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
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
                <Headset size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Flexibility to Study While Working
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  As a fully online program, it lets you balance work and study.
                  Live & recorded classes, e-library access, remote exams, and
                  24/7 learning support allow you to upgrade your qualification
                  without interrupting your career.{" "}
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
              <div className="w-20 h-20 bg-[#345895] rounded-full flex items-center justify-center">
                <StickyNote
                  size={50}
                  strokeWidth={1.0}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Enhanced Career Prospects & Network Access
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  With an MBA degree from a NAAC A+ & UGC-entitled institution,
                  dual specialization, and comprehensive management training,
                  you'll be well-positioned for a wide range of job roles across
                  sectors.{" "}
                </p>
              </div>
            </motion.div>
          </div>
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
            <div className="text-center mb-10 relative pb-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#064E92] font-extrabold font-[Inter] text-3xl md:text-5xl"
              >
                Career Opportunities
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center flex justify-center text-black max-w-3xl mx-auto mb-12"
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
              >
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/professional.png"
                    width={566}
                    height={390}
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
                  "Marketing Management",
                  "Supply Chain Management",
                  "Logistics Management",
                  "IT Consultancy",
                  "Portfolio Management",
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

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ServicesByPAB />

      <section className="w-full px-4 md:px-10 lg:px-20 py-16">
        {/* TITLE */}
        <h2 className="text-[#345895] font-extrabold flex flex-row items-center justify-center font-[Inter] text-[42px] md:text-[64px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className=" max-w-5xl flex items-center justify-center md:grid grid-cols-2 bg-[#E5E5E5] text-[#4D964F] font-semibold text-center m-auto px-30 gap-25 py-8 text-[24px] rounded-xl">
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

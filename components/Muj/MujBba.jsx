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
import CourseCurriculumSection from "@/components/CourseCurriculumSection";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";

export default function Page() {
  const topics = [
    "Financial Accounting",
    "Micro Economics",
    "Business Statistics",
    "Banking and Insurance",
    "Fundamentals of Taxation",
    "Research Methodology",
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
      image: "/professional.png",
    },
    {
      name: "Dr. david Campbell",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Harendra Singh",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/professional.png",
    },
    {
      name: "Dr. Anadi Trikha",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/professional.png",
    },
    {
      name: "Dr. Arpita Aggarwal",
      title: "Ph.D, M.Com- Assistant prof.",
      image: "/professional.png",
    },
    {
      name: "Dr. Rohit S Tomar",
      title: "Ph.D, MBA- Assistant prof.",
      image: "/professional.png",
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
    { value: "36", label: "Months" },
    { value: "15-20", label: "hours per week" },
    { value: "6", label: "semesters" },
    { value: "15% ", label: "scholarship 1st Sem" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[650px] md:min-h-[750px] w-full overflow-hidden">
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
        <div className="relative z-10 max-w-6xl mx-auto p-6 sm:p-10">
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
            (Bachelor of Business Administration)
          </motion.p>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-[Inter] lg:text-[60px] font-bold -mt-2 leading-tight"
            >
              Bachelor of Business Administration
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[18px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
            >
              Launch your management career with MUJ's Online BBA, a 3-year
              program for 10+2 students. Choose from 7 electives like Digital
              Marketing, Finance, and Retail. Learn flexibly through
              live/recorded classes and expert support, plus gain Coursera
              certifications for industry-ready skills.
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
                  className={`text-center  px-5 py-6 ${
                    idx !== stats.length - 1
                      ? "md:border-r-2 md:border-white"
                      : ""
                  }`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-[Inter] font-bold text-white mb-1 whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="text-white text-[22px] font-bold font-[Inter] sm:text-base whitespace-nowrap">
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
              About <span className="text-[#F26722] ">MUJ </span>
            </h2>

            <p className="text-black leading-relaxed text-sm md:text-base">
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
            <span className="text-[#F26722] ">
              Launch your management career with MUJ's online BBA, a three-year
              undergraduate program designed for students who have completed
              10+2.{" "}
            </span>
            Tailored for success across industries like banking, hospitality,
            healthcare, insurance, and manufacturing, the program lets you
            choose from 7 popular electives including Digital Marketing, Finance
            & Accounting, and Retail & E-commerce. Study at your convenience
            through MUJ's digital learning platform with live and recorded
            classes, rich e-learning content, and expert faculty support. You'll
            also get exclusive access to Coursera to earn certifications from
            top global institutions.
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
                Diverse career Options
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Once you complete the program, unlock pathways to advanced
                degrees or begin your career in dynamic fields like Marketing,
                Data Science, Sales, Project Management, Supply Chain, Finance,
                and several others.
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
                Get Access To Exclusive Coursera Benefits
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Choose from 10,000+ courses & professional certifications from
                leading global universities while pursuing your degree.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} />

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
              Candidates must have completed 10+2 education from a recognized
              national or state board institution or 10+3 diploma from a
              recognized national or state institute.
            </p>

            {/* Grades */}
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Grades
            </h4>
            <p className="text-[#1F284E] text-[32px] mb-8 leading-tight">
              Candidates must have at least 40% marks in aggregate in 10+2 /
              diploma (35% for reserved categories).
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
            The Manipal Univeristy Jaipur Online MBA follows a structured and
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
                    Learners must book their examination slots through the MUJ
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
                Internal Assessment 30 Marks
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
  <div className="px-2 w-full">
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full">
      
      {/* LEFT SIDE TEXT */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 lg:px-0">
        <h2 className="text-[#064E92] text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[110%] mb-6">
          Fees Structure
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl mb-6">
          Convenient Fee Payment Option:
          <br />
          Choose your preferred fee payment option
        </p>

        <button className="text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] mt-5 font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 flex items-center justify-center w-fit">
          Compare all Plans
        </button>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start justify-center 
                      font-[Inter] gap-6 lg:w-[35%] pr-0 lg:pr-25 w-full">
        
        {/* Annual PAYMENT CARD */}
        <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm 
                        px-6 py-8 w-[90%] sm:w-[200px] md:w-[230px] h-[260px] 
                        flex flex-col justify-between">
          <div className="text-center ">
            <p className="font-semibold text-white">Annual Payment</p>
            <p className="text-xs text-white mt-1">in INR</p>
            <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">BBA</p>
            <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
          </div>

          <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">1,35,000/-</p>
          <p className="text-xs text-white text-center italic mb-5 ">inclusive of all taxes</p>
        </div>

        {/* Semester wise CARD */}
        <div className="bg-linear-to-b from-[#345895] to-[#101C2F] border rounded-xl shadow-sm 
                        px-6 py-8 w-[90%] sm:w-[200px] md:w-[230px] h-[260px] 
                        flex flex-col justify-between">
          <div className="text-center ">
            <p className="font-semibold text-white">Semester wise</p>
            <p className="text-xs text-white mt-1">in INR</p>
            <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">BBA</p>
            <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
          </div>

          <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">22,500/-</p>
          <p className="text-xs text-white text-center italic mb-5 ">inclusive of all taxes</p>
        </div>

        {/* EMI CARD */}
        <div className="bg-linear-to-b from-[#345895] to-[#101C2F] rounded-xl shadow-md 
                        px-6 py-8 w-[90%] sm:w-[200px] md:w-[230px] h-[260px] 
                        flex flex-col justify-between">
          <div className="text-center">
            <p className="font-semibold text-white">EMI Starting at</p>
            <p className="text-xs text-white mt-1">in INR</p>
            <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">BBA</p>
            <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
          </div>

          <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">3,750/-</p>
          <p className="text-xs text-white text-center italic mb-2">per month</p>
          <p className="text-xs text-white text-center italic mb-5">T&C apply</p>
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
              <span className="block">Manipal University</span>
              <span className="block">Jaipur Online</span>
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
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <UserLock size={50} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <GlobeLock size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Global Exposure
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  through online tools, certifications, and industry
                  interactions
                </p>{" "}
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
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <BriefcaseBusiness
                  size={35}
                  strokeWidth={1.0}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
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
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <Headset size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
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
              <div className="w-18 h-18 bg-[#345895] rounded-full flex items-center justify-center">
                <StickyNote
                  size={35}
                  strokeWidth={1.0}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-18 h-18 bg-[rgb(52,88,149)] rounded-full flex items-center justify-center">
                <ListMinus size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Confidence
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  to take on professional challenges.{" "}
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
                  "Business Intelligence Analyst",
                  "Digital Marketing Manager",
                  "Financial Analyst",

                  "Investment Banker",
                  "Logistics Manager",
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
            <p>25TH NOVEMBER 2025</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}

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
  ChevronRight,
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
      q: "What is the duration of the online MA programs at SMU?",
      a: "All three MA programs follow a 2-year (4-semester) structure, delivered fully online.",
    },
    {
      q: "What are the eligibility criteria for admission?",
      a: "Applicants must hold a bachelor’s degree (10+2+3 or equivalent) from a recognised university. No work experience or entrance exam is required.",
    },
    {
      q: "Are the online MA degrees recognized and valid for jobs or further studies?",
      a: "Yes. The degrees are UGC-entitled and offered by NAAC A+ accredited SMU, making them equivalent to regular on-campus MA degrees for employment, UPSC, NET, PhD admission, and other academic pathways.",
    },
    {
      q: "Is the degree from SMU's Online BA program recognized and valid?",
      a: "Learning happens through a fully online AI-enabled LMS with Live classes, Recorded lectures, E-learning study materials, Digital libraries, Discussion forums and Online assignments. This ensures flexible, anytime learning.",
    },
    {
      q: "How are examinations conducted?",
      a: "Exams are conducted remotely through online proctored tests, allowing learners to complete assessments from home.",
    },
  ];

  const topFaculty = [
    {
      name: "Dr. Sudeshna Dutta",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Uttam K. Upadhyaya",
      title: "Adjunct Faculty",
      image: "/professional.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Ms. Tenzin N Bhutia",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Ms. Salwa Lachungpa",
      title: "Assistant Professor",
      image: "/professional.png",
    },
    {
      name: "Ms. Heeral Mehta",
      title: "Adjunct Faculty",
      image: "/professional.png",
    },
    {
      name: "Mr. Ajay Kumar N",
      title: "Assistant Professor",
      image: "/professional.png",
    },
  ];

  const subjects = [
    { id: 1, name: "English" },
    { id: 2, name: "Political Science" },
    { id: 3, name: "Sociology" },
  ];

  const terms = [1, 2, 3, 4];

  const topicsData = {
    1: {
      1: [
        "Drama I",
        "Poetry I",
        "Fiction I",
        "Literature Theory & Criticism I",
        "Gender Studies in Literature",
      ],
      2: [
        "Drama II",
        "Poetry II",
        "Fiction II",
        "Literature Theory & Criticism II",
        "Environment & Climate Change",
      ],
      3: [
        "American Literature",
        "Indian English Literature",
        "Post-Colonial Literature I",
        "Research Methodology",
        "Literature and Environment",
      ],
      4: [
        "Diaspora Literature",
        "Post-Colonial Literature II",
        "World Literature",
        "Dissertation",
      ],
    },
    2: {
      1: [
        "Political Theory",
        "Indian Government and Politics",
        "Major Ideas and Issues in Public Administration",
        "Comparative Politics: Concepts and Methods",
        "Interpreting Modern India",
      ],
      2: [
        "Western Political Thought",
        "International Politics: Theory and Issues",
        "Politics in India",
        "Political Sociology of India",
        "Environment & Climate Change",
      ],
      3: [
        "Modern Indian Political Thought",
        "Research Methodology",
        "Governance and Public Policy in India",
        "Theory and Practice of Democracy",
        "India’s Foreign Policy",
      ],
      4: [
        "Gender and Politics",
        "Indo-Pacific Emerging Trends",
        "International Political Economy",
        "Dissertation and Viva Voce",
      ],
    },
    3: {
      1: [
        "Introduction to Sociology",
        "Sociological Thoughts",
        "Social Stratification in India",
        "Gender and Society",
        "Sociology of Globalization",
      ],
      2: [
        "Classical Sociological Theories",
        "Perspectives of Indian Society",
        "Rural and Urban Sociology",
        "Sociology of Family and Kinship",
        "Environment and Climate Change",
      ],
      3: [
        "Contemporary Sociological Theories",
        "Culture, Personality, and Society",
        "Research Methodology",
        "Sociology of Religion",
        "Sociology of Ethnicity and Nationalism",
      ],
      4: [
        "Sociology of Development",
        "Sociology of Health",
        "Social Movements in India",
        "Participatory Sociology (Dissertation)",
      ],
    },
  };
  const [activeSubject, setActiveSubject] = useState(1);
  const [activeterms, setActiveterms] = useState(1);
  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

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
    { value: "80", label: "Credits" },
    { value: "15-20", label: "hours per week" },
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
                alt="sikkim manipal Logo"
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
            className="inline-flex items-center gap-2 bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6 mb-2 px-5 py-2 rounded-full"
          >
            4.4 <Star size={15} />
          </motion.span>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-[16px] sm:text-[16px] italic font-light"
          >
            (Master of Arts)
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
              Online MA Degree
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[18px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
            >
              Sikkim Manipal University (SMU) offers online MA programs in
              English, Sociology, and Political Science, giving learners a
              strong foundation in literature, social systems, and political
              studies. Delivered through an AI-enabled platform, the programs
              provide live/recorded classes, digital resources, e-libraries, and
              online exams. Designed for working professionals, these affordable
              degrees offer flexible learning and enhanced career opportunities
              along with SMU alumni benefits.
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
                  Accredited
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
                <h3 className="text-4xl font-bold mb-2">Rank 1</h3>
                <p className="text-sm md:text-base font-medium opacity-90">
                  in North East by IIRF
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
              The online Master of Arts (MA) programs in English, Sociology, and
              Political Science from Sikkim Manipal University (SMU) are
              designed to help learners build deep academic expertise and
              advance their careers while enjoying complete flexibility.
            </span>
            The MA in English offers rich insights into language and literature
            across eras and cultures, covering areas such as gender studies,
            literary theory and criticism, postcolonial and Commonwealth
            literature, and more. The MA in Sociology equips learners with a
            strong understanding of social systems and contemporary societal
            issues through subjects like sociological thoughts, gender and
            society, sociology of development, and sociology of health.
            Meanwhile, the MA in Political Science strengthens your grasp of
            political systems, theory, international politics, comparative
            politics, and peace and conflict studies, preparing you for
            policy-oriented and governance-related roles.
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
                Academic Excellence + Full Flexibility
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                SMU is NAAC A+ accredited and offers a UGC-entitled, fully
                online MA in English. The program combines academic rigor
                (literary theory, world literature, critical studies, and more)
                with full flexibility — all coursework, lectures, and exams can
                be completed online, making the degree accessible even for
                working professionals.
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
                Strong Skill Development & Career Versatility
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                 Through courses in literature, criticism, creative writing, and
                research methodology, the program helps students build advanced
                communication, critical-analysis, research, and writing skills.
                This opens up diverse career paths such as content writing,
                media and communication, publishing, academia, research,
                editing, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs cards={whyCards} />

      <section className="w-full bg-white px-6 mt-10 md:px-16 py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[52px] md:text-[64px] leading-[110%] font-extrabold font-[Inter] text-center text-[#345895] mb-10"
        >
          Syllabus
        </motion.h2>

        {/* MAIN WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#345895] rounded-[30px] p-8 md:p-12 flex flex-col lg:flex-row gap-10"
        >
          {/* LEFT COLUMN — SUBJECTS */}
          <div className="w-full lg:w-[30%] flex flex-col items-center">
            <div className="max-h-[400px] md:w-[90%] pr-2 overflow-y-auto scrollbar-hide">
              <div className="flex flex-col w-full gap-4 mt-30 items-center">
                {subjects.map((sub) => (
                  <motion.button
                    key={sub.id}
                    onClick={() => {
                      setActiveSubject(sub.id);
                      setActiveterms(1);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-4 py-3 rounded-full font-semibold transition 
                      ${
                        activeSubject === sub.id
                          ? "bg-[#38A169] text-white shadow"
                          : "bg-white text-[#38A169] border border-[#38A169] border-dashed [border-width:2px] [border-dasharray:6_4]"
                      }`}
                  >
                    {sub.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN — TOPICS */}
          <div className="w-full flex flex-col items-center lg:w-[40%]">
            <div className="bg-white rounded-xl p-6 shadow-md relative mt-8 w-full min-h-[350px]">
              {/* ICON + LINE */}
              <div className="absolute left-6 top-0 bottom-0 flex flex-col items-center">
                <div className="bg-[#345895] text-white p-3 rounded-full shadow z-10 mt-6">
                  <ChevronsDown size={18} />
                </div>
                <div className="w-0.5 bg-[#345895] flex-1 mb-5"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-[Inter] font-bold text-[#345895] ml-12 mb-4">
                Topics Covered
              </h3>

              {/* TOPICS LIST — Hidden Scrollbar */}
              <div className="max-h-[260px] overflow-y-auto pr-2 scrollbar-hide">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeSubject + "-" + activeterms}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-4 ml-12"
                  >
                    {topicsData[activeSubject][activeterms]?.map(
                      (topic, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 6 }}
                          className="flex gap-3 items-center group cursor-pointer"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white group-hover:bg-[#345895] transition">
                            <Check
                              size={16}
                              className="text-[#345895] group-hover:text-white transition"
                            />
                          </div>
                          <span className="text-gray-800 group-hover:text-[#345895] transition">
                            {topic}
                          </span>
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — TERMS + DOWNLOAD BUTTON */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-end mt-8">
            {/* SCROLLABLE TERMS */}
            <div className="flex flex-col gap-4 w-full lg:w-[90%] max-h-[260px] overflow-y-auto scrollbar-hide pr-2">
              {terms.map((term) => (
                <motion.button
                  key={term}
                  onClick={() => setActiveterms(term)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-full font-semibold transition 
                ${
                  activeterms === term
                    ? "bg-[#38A169] text-white shadow"
                    : "bg-white text-[#38A169] border border-[#38A169] border-dashed [border-width:2px] [border-dasharray:6_4]"
                }`}
                >
                  {term === 0
                    ? "Foundation Modules (HBPE)"
                    : `${ordinal(term)} Term`}
                </motion.button>
              ))}
            </div>

            {/* DOWNLOAD BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#4D964F] text-white px-4 py-3 rounded-xl bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md flex items-center justify-center gap-4 w-full lg:w-[90%]"
            >
              DOWNLOAD SYLLABUS
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-[64px] font-bold text-[#345895] mb-7">
            Eligibility Criteria
          </h2>
          {/* for Indian Students */}
          <div className="mb-5">
            <h3 className="text-xl md:text-5xl italic text-[#345895] mb-4">
              For Indian students
            </h3>
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Educational qualification
            </h4>
            <p className="text-[#1F284E] text-[32px] mb-5 leading-tight">
              Candidates must have completed 10+2+3-year bachelor’s degree from
              a recognized university/institution, or an equivalent
              qualification as recognized by the Association of Indian
              Universities.
            </p>
          </div>
          {/* for Foreign Students */}
          <div className="mb-5">
            <h3 className="text-xl md:text-5xl italic text-[#345895] mb-4">
              For NRI & Foreign students
            </h3>
            <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
              Educational qualification
            </h4>
            <ul className="text-[#1F284E] text-[32px] mb-5 list-disc px-5 leading-tight">
              <li>
                {" "}
                Candidates must have completed 10+2+3-year bachelor’s degree
                from a recognized university/institution, or an equivalent
                qualification as recognized by the Association of Indian
                Universities.
              </li>
              <li>
                Candidates who have completed 10+2 education or graduate level
                education outside India must produce a certificate of
                equivalence issued by the Association of Indian Universities.{" "}
              </li>
            </ul>
          </div>
          <h4 className="font-bold text-[36px] text-[#1F284E] mb-1">
            Other Requirements
          </h4>
          <p className="text-[#1F284E] text-[32px] mb-5 leading-tight">
            Candidates who are not Indian citizens or residing outside India and
            holding NRE or PIO status will be billed an international fee for
            respective degrees & may need to submit documents mentioned but not
            limited to CV, address proof, valid visa, PR card & passport copy as
            part of the application process.{" "}
          </p>
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
            The Sikkim Manipal Univeristy Online MA follows a structured and
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
                    MA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">
                  ₹75,000/-
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
                    MA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">
                  ₹18,750/-
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
                    MA
                  </p>
                  <div className="w-30 mx-auto h-0.5 bg-white mt-3" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white text-center mt-5">
                  ₹3,125/-
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
              <span className="block">MA Certificate</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4">
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
                <UserLock size={35} strokeWidth={1.0} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Advanced Literary & Critical
                  <br /> Understanding
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Deepen your knowledge of British, American, Indian, and world
                  literature while mastering literary theory, criticism, and
                  modern interpretative approaches.
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
                  Strong Understanding of Social Structures
                  <br /> and Change
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Gain deep insights into social institutions, cultural
                  dynamics, inequality, development, and contemporary social
                  issues—helping you understand how societies function and
                  evolve.
                </p>{" "}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col w-[542px] gap-12">
            {/* Item 3 */}
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
                  Deep & Broad Understanding of Politics
                  <br /> and Governance
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Build a holistic understanding of political systems through a
                  comprehensive curriculum spanning theory, governance, and
                  global affairs.
                </p>
              </div>
            </motion.div>

            {/* Item 4 */}
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
                  Flexibility & Work-Study Balance
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                   Delivered 100% online via a modern learning platform, the
                  program offers live and recorded classes, digital resources,
                  discussion forums, and remote exams — allowing you to study
                  without disrupting ongoing work or other commitments. 
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
                  "Content Management",
                  "Journalism",
                  "Corporate social responsibility",
                  "Political Analysis",
                  "Teaching",
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

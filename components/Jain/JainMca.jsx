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
  AlarmClockCheck,
  UserStar,
  BookMarked,
  ThumbsUp,
  Airplay,
  GraduationCap,
  Brain,
  Grid2X2Plus,
  ChevronsRightLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import ServicesByPAB from "../NmimsSection/servicesbyPab";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import MujCareerServices from "../NmimsSection/MujCareerServices";
import Faculties from "../NmimsSection/Faculties";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Link from "next/link";
import CounsellingForm from "@/components/Pab/CounsellingForm";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const learningCards = [
    {
      icon: BookMarked,
      title: "Future",
      desc: "A future-ready framework aligned with NEP 2020 and NCrF, combining core skills and micro-credentials for industry relevance."  },
    {
      icon: ThumbsUp,
      title: "Excellence",
      desc: "Built on four pillars—Ethics, AI, Data Science, and Leadership—to shape responsible, tech-driven professionals.",
    },
    {
      icon: Airplay,
      title: "Technology",
      desc: "Learn through interactive content, simulations, virtual labs, and advanced AI tools for real, hands-on experience." },
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
    q: "Is the Online MCA from JAIN Online recognized and valid?",
    a: "Yes. The Online MCA degree from JAIN Online is UGC-entitled and offered under the regulations for approved online education programs."
  },
  {
    q: "What are the eligibility requirements to apply for the Online MCA?",
    a: "Applicants must hold a bachelor's degree of minimum three years' duration from a UGC-recognized university, with at least 50% aggregate marks (or equivalent grade). A 5% relaxation is typically allowed for SC/ST candidates. Final-year bachelor’s students awaiting results are also eligible."
  },
  {
    q: "How long does the Online MCA take, and what is its structure?",
    a: "The program spans 2 years, divided into 4 semesters. The curriculum includes core courses, practical labs, electives, and a final project or specialization focus."
  },
  {
    q: "What specializations or electives are offered under JAIN Online MCA?",
    a: "JAIN Online provides a variety of specializations, such as Computer Science & IT, Data Analytics, Cybersecurity, Artificial Intelligence, Cloud Computing, Full-Stack Development, and more depending on the batch."
  },
  {
    q: "Is the program fully online? Do I need to visit campus?",
    a: "Yes. The entire course is delivered online. Learners access study material, live sessions or recorded lectures, labs, and discussion forums via a Learning Management System (LMS). There is no requirement to visit the campus."
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




  /* fees crousel */
    function FeesCarousel() {
      const cards = [
        {
          title: "Annual Payment",
          amount: "₹1,60,000/-",
          sub: "Inclusive of all taxes",
        },
        {
          title: "Semester Wise",
          amount: "₹40,000/-",
          sub: "Inclusive of all taxes",
        },
        {
          title: "EMI starting at",
          amount: "₹10,531/-",
          sub: "per month [0% interest No Hidden Cost]",
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
                className="bg-linear-to-b from-[#345895] to-[#101C2F] rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
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

  const subjects = [
  { id: 1, name: "DevOps" },
   { id: 2, name: "NLP & LLM Development" },
    { id: 3, name: "Computer Science & IT" },
     { id: 4, name: "Data Analytics" },
      { id: 5, name: "Cyber Security" },
       { id: 6, name: "Full Stack Development" },
       { id: 7, name: "Cloud Computing" },
       { id: 8, name: "Data Science" },
       { id: 9, name: "Artificial " },
];

const semesters = [1, 2, 3, 4];

const topicsData = {
  1: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Artificial Intelligence and Machine Learning",
      "Python Programming",
      "Infrastructure as Code & Automation",
      "AI & Machine Learning Lab",
      "Python Programming Lab",
      "Open Elective",
    ],
    4: [
      "Site Reliability Engineering",
      "DevSecOps",
      "Microservices & Containerization",
      "DevOps in AI & Big Data",
      "Project",
    ],
  },

  2: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Artificial Intelligence and Machine Learning",
      "Python Programming",
      "Transformer Models & Attention Mechanisms",
      "AI & Machine Learning Lab",
      "Python Programming Lab",
      "Open Elective",
    ],
    4: [
      "Large-Scale AI Model Deployment",
      "Multimodal AI",
      "Reinforcement Learning",
      "Fine-Tuning & Optimization",
      "Project",
    ],
  },

  3: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Artificial Intelligence and Machine Learning",
      "Python Programming",
      "Software Testing",
      "AI & Machine Learning Lab",
      "Python Programming Lab",
      "Open Elective",
    ],
    4: [
      "IT Project Management",
      "Big Data Analytics",
      "Low-Code/No-Code Application Development",
      "Data Visualization",
      "Project",
    ],
  },

  4: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Artificial Intelligence and Machine Learning",
      "Python Programming",
      "Computer Vision",
      "AI & Machine Learning Lab",
      "Python Programming Lab",
      "Open Elective",
    ],
    4: [
      "Natural Language Processing",
      "Predictive Analytics using Machine Learning",
      "Deep Learning",
      "Big Data Hadoop",
      "Project",
    ],
  },

  5: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Artificial Intelligence and Machine Learning",
      "Python Programming",
      "Cyber Threat Intelligence",
      "AI & Machine Learning Lab",
      "Python Programming Lab",
      "Open Elective",
    ],
    4: [
      "Ethical Hacking",
      "Defensive Cyber Security Technologies",
      "Vulnerability Analysis",
      "Penetration Testing",
      "Project",
    ],
  },

  6: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Application Development using Python",
      "Web Technologies",
      "React JS",
      "Advanced Database Systems",
      "Mobile Application Development",
      "Applied Learning",
      "Application Development using Python Lab",
      "Web Technologies Lab",
    ],
    4: [
      "Software Engineering & Testing",
      "Web APIs",
      "Network Security & Cryptography",
      "DevOps",
      "Mastering Professional and Academic Writing",
      "Capstone Project",
    ],
  },

  7: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Application Development using Python",
      "Web Technologies",
      "Cloud Managed Services",
      "Containers and Microservices",
      "Big Data Management and Analytics",
      "Applied Learning",
      "Application Development using Python Lab",
      "Web Technologies Lab",
    ],
    4: [
      "CI/CD and DevOps",
      "Cloud Security and Migration",
      "Microsoft Azure Essentials",
      "Google Cloud Platform Essentials",
      "Mastering Professional and Academic Writing",
      "Capstone Project",
    ],
  },

  8: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Data Visualization",
      "Web Technologies",
      "Predictive Analytics using Machine Learning",
      "Statistical Methods in Decision Making",
      "Advanced Database Systems",
      "Applied Learning",
      "Predictive Analytics using Machine Learning Lab",
      "Web Technologies Lab",
    ],
    4: [
      "Data Mining",
      "Time Series Analysis",
      "Natural Language Processing and GenAI",
      "Applied Analytics - Marketing, Web, Social Media",
      "Mastering Professional and Academic Writing",
      "Capstone Project",
    ],
  },

  9: {
    1: [
      "Mathematical Foundations for Computer Science",
      "Computing Concepts and Problem Solving using C",
      "Operating Systems",
      "Data Structures",
      "Problem Solving using C Lab",
      "Data Structures Lab",
      "Generative AI Applications in Modern Computing",
    ],
    2: [
      "Advanced Database Systems",
      "Java Programming",
      "Web Technologies",
      "Cloud Computing Foundations",
      "Advanced Database Systems Lab",
      "Java Programming Lab",
      "Environmental, Social, and Governance (ESG) in IT",
    ],
    3: [
      "Predictive Analytics using Machine Learning",
      "Web Technologies",
      "Advanced Database Systems",
      "Recommendation Systems",
      "Advanced Machine Learning",
      "Applied Learning",
      "Predictive Analytics using Machine Learning Lab",
      "Web Technologies Lab",
    ],
    4: [
      "Model Deployment and AI in Practice",
      "Neural Networks and Deep Learning",
      "Computer Vision",
      "Natural Language Processing and GenAI",
      "Mastering Professional and Academic Writing",
      "Capstone Project",
    ],
  },
};
  
 const semSuffix = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
  };

  const [activeSubject, setActiveSubject] = useState(1);
  const [activeSemester, setActiveSemester] = useState(1);
  

  const whyCards = [
    {
      logo: Star,
      heading: "Interact",
      subheading:
        "Experience real classroom energy through live sessions led by expert faculty, where you can ask questions instantly and participate in meaningful discussions. These interactive classes help you clear doubts on the spot, stay motivated, and deepen your understanding through two-way learning rather than passive content consumption." },
    {
      logo: BookOpenCheck,
      heading: "Reinforce",
      subheading:
      "Build strong conceptual clarity with short, structured video lessons that break complex topics into easy-to-understand segments. After each lesson, self-assessment quizzes help you evaluate your learning, identify gaps, and strengthen retention—ensuring you truly master every topic instead of just covering it."
   },
    {
      logo: Speech,
      heading: "Listen",
      subheading:
        "Use audio-based learning resources to study anytime, anywhere—whether while traveling, exercising, or taking a break from screens. Perfect for auditory learners and busy schedules, these audio capsules help you revise effortlessly and reinforce learning without needing to sit in front of a laptop.",
     },
    {
      logo: ChevronsRightLeft,
      heading: "Collaborate",
      subheading:
        "Become part of a vibrant learning community through peer discussions, knowledge sharing, and group problem-solving. Access scholarly notes and visually designed learning decks for quick revision, and participate in forums to exchange ideas, gain different perspectives, and enhance understanding through collaborative learning.",
    },
  ];

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

  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "90", label: "Credits" },
    { value: "Practical", label: "exposure" },
  ];
  return (
   <main className="flex flex-col items-center w-full bg-white">
         <section className="relative min-h-screen lg:min-h-[50vh] xl:min-h-screen w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/jain/jainUniv.png"
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
                    <div className="bg-white rounded-r-xl shadow-md h-[100px] -mb-5 px-2 flex items-center">
                      <Image
                        src="/jain.png"
                        alt="Jain University Logo"
                        width={260}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </div>
        
                {/* CONTENT WRAPPER */}
                <div className="relative z-10 max-w-6xl mx-auto p-6 mt-10 sm:10">
        
                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-white text-[16px] sm:text-[16px] italic font-light"
                  >
                   Online MCA
                  </motion.p>
        
                  {/* TITLE + DESCRIPTION */}
                  <div className="flex flex-col items-start">
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                      className="text-white text-4xl md:text-[40px] font-[Inter] lg:text-[56px] xl:text-[64px] font-bold -mt-1 leading-tight"
                    >
                       Master of Computer Application
                    </motion.h1>
        
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-5xl mt-0 mb-10 leading-relaxed"
                    >
                    Elevate your tech career with our Online MCA—featuring a modern, industry-driven curriculum and flexible learning to build the advanced skills needed for today’s rapidly evolving digital world. Customize your path with electives and get started today.
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
                          className={`text-center py-6 
          ${idx % 2 === 0 ? "md:border-r-2 md:border-white" : ""} 
          ${idx !== stats.length - 1 ? "lg:border-r-2 lg:border-white" : ""}
        `}
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
                      <button  onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 bg-[#345895] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium">
                        Download Brochure
                        <Download size={20} />
                      </button>
        
                      <button  onClick={() => setIsModalOpen(true)} className="bg-[#4D964F] flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 font-medium">
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
                      About <span className="text-[#002153] ">JAIN </span>
                    </h2>
        
                    <p className="text-black leading-relaxed text-xs lg:text-[18px] mb-10">
                     JAIN Online, a division of the NAAC A++ accredited JAIN (Deemed-to-be University), offers UGC-entitled online degree programs designed to equip learners with modern knowledge and industry-ready skills. Our goal is to help individuals confidently shape and advance their professional journeys.<br />
   With more than three decades of academic excellence and cutting-edge, technology-driven learning systems, we focus on both academic achievement and personal growth to ensure holistic development. Supported by experienced faculty and digital learning experts, our flexible online platform allows learners to study anytime, anywhere, and at their own pace.
                    </p>
                  </div>
        
                  {/* RIGHT IMAGE WITH CURVED SHAPE */}
                  <div className="relative w-full h-full flex md:justify-end ">
                    <div className="max-w-7xl overflow-hidden md:-mr-10 xl:-mr-16">
                      <img
                        src="/jain/aboutJain.png"
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
        
              <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
                {/* ===== Top Text Section ===== */}
                <div className="max-w-6xl text-left mx-auto">
                  <h2 className="text-xl md:text-2xl font-regular lg:text-[49px] leading-normal text-gray-900">
                    <span className="text-[#002153] ">
                     Advance your career with our Online MCA Program.{" "}</span>
                  Designed with a modern, industry-focused curriculum and a flexible learning format, this program helps you build the skills and expertise needed to thrive in today’s fast-evolving tech landscape. Choose the elective that aligns with your goals and enroll today.
                  </h2>
                </div>
        
                {/* ===== Bottom Card Section ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
                  {/* Card 1 */}
                  <div className="flex flex-col gap-4 p-4 sm:p-6">
                    {/* Icon */}
                    <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
                      <FileClock size={72} strokeWidth={1.0} />
                    </div>
        
                    {/* Content */}
                    <div>
                      <h3 className="lg:text-2xl text-[#345895] mb-1">
                        Study Anytime, Anywhere
                      </h3>
                      <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                       400+ hours of recorded video lectures making, your learning journey convenient.
                      </p>
                    </div>
                  </div>
        
                  {/* Card 2 */}
                  <div className="flex flex-col gap-4 p-4 sm:p-6 ">
                    {/* Icon */}
                    <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
                      <UserStar size={72} strokeWidth={1.0} />
                    </div>
        
                    {/* Content */}
                    <div>
                      <h3 className="lg:text-2xl text-[#345895] mb-1">
                        Personalized Support
                      </h3>
                      <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                       Complete handholding & support by student relationship managers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
         <WhyChooseUs cards={whyCards}  onCtaClick={() => setIsModalOpen(true)}/>
   
        <section className="w-full bg-white px-4 md:px-16 py-20">
                           {/* Title */}
                           <motion.h2
                             initial={{ opacity: 0, y: -20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6 }}
                             className="text-[32px] md:text-[64px] leading-[110%] font-extrabold font-[Inter] text-center text-[#345895] mb-10"
                           >
                             Syllabus
                           </motion.h2>
                         
                           {/* MAIN WRAPPER */}
                           <motion.div
                             initial={{ opacity: 0, y: 40 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.7 }}
                             className="
                               bg-[#345895] rounded-[30px]
                               p-4 sm:p-6 md:p-12
                               flex flex-col xl:flex-row gap-6 md:gap-10
                             "
                           >
                         
                             {/** ------------------------------------------------ */}
                             {/** MOBILE 2-COLUMN WRAPPER (LEFT + RIGHT)          */}
                             {/** ------------------------------------------------ */}
                             <div className="grid grid-cols-2 gap-4 md:gap-20 lg:gap-30 w-full xl:hidden">
                         
                               {/* LEFT COLUMN (Subjects) - MOBILE */}
                               <div className="col-span-1">
                                 <div className="flex flex-col items-center">
                                   <div className="w-full">
                                     <div className="flex flex-col w-full h-[180px] md:h-[250px] overflow-y-auto no-scrollbar gap-2 sm:gap-3 mt-4 items-center">
                                       {subjects.map((sub) => (
                                         <motion.button
                                           key={sub.id}
                                           onClick={() => {
                                             setActiveSubject(sub.id);
                                             setActiveSemester(1);
                                           }}
                                           whileHover={{ scale: 1.05 }}
                                           className={`w-full px-2 py-2 sm:px-3 sm:py-2 rounded-full
                                             text-[10px] sm:text-xs md:text-sm font-semibold
                                             ${
                                               activeSubject === sub.id
                                                 ? "bg-[#38A169] text-white shadow"
                                                 : "bg-white text-[#38A169] border-[#38A169] border-dashed border-2"
                                             }
                                           `}
                                         >
                                           {sub.name}
                                         </motion.button>
                                       ))}
                                     </div>
                                   </div>
                                 </div>
                               </div>
                         
                               {/* RIGHT COLUMN (Semesters) - MOBILE */}
                               <div className="col-span-1">
                                 <div className="flex flex-col items-center">
                                   <div className="flex flex-col gap-2 sm:gap-3 w-full mt-4">
                                     {semesters.map((sem) => (
                                       <motion.button
                                         key={sem}
                                         onClick={() => setActiveSemester(sem)}
                                         whileHover={{ scale: 1.05 }}
                                         className={`px-2 py-2 sm:px-3 sm:py-2 rounded-full
                                           text-[10px] sm:text-xs md:text-sm font-semibold
                                           ${
                                             activeSemester === sem
                                               ? "bg-[#38A169] text-white shadow"
                                               : "bg-white text-[#38A169]  border-[#38A169] border-dashed border-0.5"
                                           }
                                         `}
                                       >
                                         {sem}
                                         {semSuffix[sem]} Semester
                                       </motion.button>
                                     ))}
                         
                                     {/* DOWNLOAD BUTTON */}
                                     <motion.button
                                       whileHover={{ scale: 1.05 }}
                                        onClick={() => setIsModalOpen(true)}
                                       className="
                                          w-full bg-[#4D964F] text-white px-3 py-2 sm:py-3
                                         rounded-xl text-[10px] sm:text-xs md:text-sm
                                         bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md
                                         flex items-center justify-center gap-2
                                       "
                                     >
                                       DOWNLOAD SYLLABUS
                                       <ChevronRight size={14} />
                                     </motion.button>
                                   </div>
                                 </div>
                               </div>
                             </div>
                         
                             {/** ------------------------------------------------ */}
                             {/** DESKTOP LEFT COLUMN (Subjects) - UNCHANGED     */}
                             {/** ------------------------------------------------ */}
                             <div className="hidden xl:flex w-[30%] flex-col items-center">
                               <div className="max-h-[400px] w-[90%]">
                                 <div className="flex flex-col w-full h-[350px] overflow-y-auto no-scrollbar gap-4 mt-10 items-center">
                                   {subjects.map((sub) => (
                                     <motion.button
                                       key={sub.id}
                                       onClick={() => {
                                         setActiveSubject(sub.id);
                                         setActiveSemester(1);
                                       }}
                                       whileHover={{ scale: 1.05 }}
                                       className={`w-full px-4 py-3 rounded-full font-semibold
                                         ${
                                           activeSubject === sub.id
                                             ? "bg-[#38A169] text-white shadow"
                                             : "bg-white text-[#38A169] border-[#38A169] border-dashed border-2"
                                         }`}
                                     >
                                       {sub.name}
                                     </motion.button>
                                   ))}
                                 </div>
                               </div>
                             </div>
                         
                             {/** ------------------------------------------------ */}
                             {/** MIDDLE COLUMN (Topics) - FULL WIDTH ON MOBILE   */}
                             {/** ------------------------------------------------ */}
                             <div className="w-full flex flex-col mt-8 items-center justify-center xl:w-[40%]">
                               <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md relative w-full">
                         
                                 {/* ICON + LINE */}
                                 <div className="absolute top-0 bottom-0 flex flex-col items-center">
                                   <div className="bg-[#345895] text-white p-2 sm:p-3 rounded-full shadow z-10 mt-4 sm:mt-6">
                                     <ChevronsDown size={16} />
                                   </div>
                                   <div className="w-0.5 bg-[#345895] flex-1 mb-4"></div>
                                 </div>
                         
                                 {/* TITLE */}
                                 <h3 className="text-[20px] sm:text-[26px] md:text-3xl font-bold text-[#345895] ml-12 sm:ml-16 mb-3">
                                   Topics Covered
                                 </h3>
                         
                                 {/* TOPICS LIST */}
                                 <AnimatePresence mode="wait">
                                   <motion.ul
                                     key={activeSubject + '-' + activeSemester}
                                     initial={{ opacity: 0, x: 30 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     exit={{ opacity: 0, x: -30 }}
                                     transition={{ duration: 0.35 }}
                                     className="flex flex-col gap-3 ml-12 sm:ml-16"
                                   >
                                     {topicsData[activeSubject][activeSemester].map((topic, index) => (
                                       <motion.li
                                         key={index}
                                         whileHover={{ x: 6 }}
                                         className="flex gap-2 sm:gap-3 items-center group cursor-pointer"
                                       >
                                         <motion.div
                                           whileHover={{ scale: 1.1 }}
                                           className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white group-hover:bg-[#345895] transition"
                                         >
                                           <Check
                                             size={12}
                                             className="sm:size-16 text-[#345895] group-hover:text-white transition"
                                           />
                                         </motion.div>
                         
                                         <span className="text-gray-800 text-xs sm:text-sm md:text-base group-hover:text-[#345895] transition">
                                           {topic}
                                         </span>
                                       </motion.li>
                                     ))}
                                   </motion.ul>
                                 </AnimatePresence>
                         
                               </div>
                             </div>
                         
                             {/** ------------------------------------------------ */}
                             {/** DESKTOP RIGHT COLUMN (Semesters) - UNCHANGED    */}
                             {/** ------------------------------------------------ */}
                             <div className="hidden xl:flex w-[30%] flex-col items-start xl:items-center mt-10">
                               <div className="flex flex-col gap-4 w-full xl:w-[90%]">
                                 {semesters.map((sem) => (
                                   <motion.button
                                     key={sem}
                                     onClick={() => setActiveSemester(sem)}
                                     whileHover={{ scale: 1.05 }}
                                     className={`px-4 py-3 rounded-full font-semibold
                                       ${
                                         activeSemester === sem
                                           ? "bg-[#38A169] text-white shadow"
                                           : "bg-white text-[#38A169] border-[#38A169] border-dashed border-2"
                                       }`}
                                   >
                                     {sem}
                                     {semSuffix[sem]} Semester
                                   </motion.button>
                                 ))}
                         
                                 <motion.button
                                   whileHover={{ scale: 1.05 }}
                                  onClick={() => setIsModalOpen(true)}
                                   className="mt-8 w-full bg-[#4D964F] text-white px-4 py-4 rounded-2xl bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md flex items-center justify-center gap-4"
                                 >
                                   DOWNLOAD SYLLABUS
                                   <ChevronRight size={20} />
                                 </motion.button>
                               </div>
                             </div>
                         
                           </motion.div>
                         </section>
   
         <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
     <div className="p-6 md:p-10">
       <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
   
         {/* LEFT — TEXT (60%) */}
         <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="w-full"
         >
           {/* Heading */}
           <h2 className="text-3xl md:text-[64px] font-bold text-[#345895] mb-7">
             Eligibility Criteria
           </h2>
   
           <ul className="text-[#1F284E] text-[20px] md:text-[24px] lg:text-[32px] px-5 list-disc mb-5 space-y-4 leading-tight">
             <li>
               Pass in an Undergraduate (Bachelor) Program of a minimum duration of 
               three (3) years in any stream from a UGC Recognized University
             </li>
   
             <li>
               A minimum aggregate of 50% or an equivalent letter/ numerical grade.
             </li>
   
             <li>
               A relaxation of 5% shall be given to SC/ST candidates.
             </li>
   
             <li>
               Candidates who are in the final semester of the Bachelors Program are also eligible to apply.
             </li>
           </ul>
         </motion.div>
       </div>
     </div>
   </section>
   
   
         <LearningApproach
           title="Learning Approach"
           subtitle="Journey towards online degree programs"
           cards={learningCards}
           ctaText="Ready to Learn ? Click Here"
           onCtaClick={() => setIsModalOpen(true)}
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
                         The Jain University Online MCA follows a structured and
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
                                 Learners must book their examination slots through the Jain University
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
                             For end-term examinations, Jain University provides three available slots:
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
             
                   {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
             
                   <MujCareerServices benefits={benefits} onCtaClick={() => setIsModalOpen(true)} />
             
                   <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
                     <div className="px-2 w-full">
                       <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                         {/* LEFT SIDE TEXT */}
                         <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
                           <h2 className="text-[#064E92] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4 md:mb-10">
                             Fees Structure
                           </h2>
             
                           {/* Subtitle */}
                           <p className="text-gray-700 text-sm md:text-base leading-tight md:max-w-xl  md:text-center mx-auto lg:text-left md:mb-10">
                            One time university registration fee during Admission: ₹2,500/- Examination Fee per year: ₹3,000/-For SAARC countries, Registration Fee Per Year: ₹ 11,250/- and Exam Fee Per Year: ₹ 3,750/-Fee applicable to students from India and SAARC countries only
                           </p>
             
                           {/* CTA visible only on large screens */}
                           <button onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit">
                             Compare all Plans
                           </button>
                         </div>
             
                         {/* RIGHT SIDE CARDS */}
                         <div className="w-full lg:w-[35%] flex justify-center">
                           <FeesCarousel />
                         </div>
             
                         {/* CTA below carousel on mobile only */}
                         <button onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
                           Compare all Plans
                         </button>
                       </div>
                     </div>
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
                          <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">
                            Degree Sample
                          </p>
              
                          <h2 className="text-[#345895] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
                            Jain University<br/>
                            Online MCA <br />
                            Certificate
                          </h2>
              
                         <p className="text-black text-sm md:text-base leading-relaxed max-w-xl mb-2">
                Degrees from JAIN Online are
                </p>
                <ul className="text-black text-sm md:text-base px-5 list-disc leading-relaxed max-w-xl mb-6">
                   <li>
                     Equivalent to JAIN (Deemed-to-be University) on-campus degree
                   </li>
                   <li>
                       Globally recognized
                   </li>
                </ul>
              
                          {/* IMAGE that appears ONLY on mobile, above CTA */}
                          <div className="md:hidden flex justify-center">
                            <img
                              src="/jain/degree.png"
                              alt="Certificate Preview"
                              className="w-full max-w-xs rounded-lg shadow-sm"
                            />
                          </div>
              
                          {/* CTA BUTTON */}
                          <button onClick={() => setIsModalOpen(true)} className="bg-[#4D964F] text-white font-medium text-sm px-10 py-2 rounded-lg bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md shadow-[#1C361D] transform hover:scale-105 duration-200 flex items-center justify-center">
                            Know more
                          </button>
                        </div>
              
                        {/* RIGHT IMAGE (visible only on md+ screens) */}
                        <div className="hidden md:flex justify-center mt-5">
                          <img
                            src="/jain/degree.png"
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
                        className="text-[#345895] font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] leading-tight max-w-7xl mb-12"
                      >
                        This is more than a degree it's a journey that reshapes your mindset, your skills, and your growth.
                      </motion.h2>
                    
                      {/* LIST WRAPPER */}
                      <div className="flex flex-col gap-10 max-w-7xl">
                    
                        {/* ITEM 1 */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-6"
                        >
                          <div className="w-15 h-15 bg-[#345895]  shrink-0 rounded-full flex items-center justify-center">
                            <Blocks size={24} strokeWidth={2} className="text-white" />
                          </div>
                          <p className="text-black text-[16px] md:text-[24px] mt-4 leading-tight">
                            Build strategic management capabilities to excel in executive and global leadership roles.
                          </p>
                        </motion.div>
                    
                        {/* ITEM 2 */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-6"
                        >
                          <div className="w-15 h-15 bg-[#345895]  shrink-0  rounded-full flex items-center justify-center">
                            <HandCoins size={24} strokeWidth={2} className="text-white" />
                          </div>
                          <p className="text-black text-[16px] md:text-[24px] max-w-7xl leading-tight">
                            Strengthen your financial acumen to pursue careers in corporate finance, investment banking, or entrepreneurial ventures.
                          </p>
                        </motion.div>
                    
                        {/* ITEM 3 */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-6"
                        >
                          <div className="w-15 h-15 bg-[#345895]  shrink-0 rounded-full flex items-center justify-center">
                            <GraduationCap size={24} strokeWidth={2} className="text-white" />
                          </div>
                          <p className="text-black text-[16px] md:text-[24px] max-w-7xl leading-tight">
                            Enhance your communication and negotiation skills to foster strong business relationships and solve complex challenges.
                          </p>
                        </motion.div>
                    
                        {/* ITEM 4 */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-6"
                        >
                          <div className="w-15 h-15 bg-[#345895] shrink-0 rounded-full flex items-center justify-center">
                            <Brain size={24} strokeWidth={2} className="text-white" />
                          </div>
                          <p className="text-black text-[16px] md:text-[22px] max-w-7xl leading-tight">
                            Gain deep insights into marketing and consumer behavior for opportunities in brand management and market research.
                          </p>
                        </motion.div>
                    
                        {/* ITEM 5 */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-6"
                        >
                          <div className="w-15 h-15 bg-[#345895]  shrink-0  rounded-full flex items-center justify-center">
                            <Grid2X2Plus size={24} strokeWidth={2} className="text-white" />
                          </div>
                          <p className="text-black text-[16px] md:text-[24px] max-w-7xl leading-tight">
                            Develop expertise in data-driven decision-making to advance in consulting, operations, or business intelligence roles.
                          </p>
                        </motion.div>
                    
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
                            Gain practical, job-ready skills through online programs designed
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
                                "DevOps Engineer",
                                "CI/CD Pipeline Engineer",
                                "Automation Engineer",
                                "Software Developer",
                                "IT Project Manager",
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
                                onClick={() => setIsModalOpen(true)}
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
                heading="With a diverse range of expertise spanning various disciplines, our faculty brings a wealth of knowledge and real-world experience to the virtual classroom."
                topFaculty={topFaculty}
                bottomFaculty={bottomFaculty}
              />
   
         <ServicesByPAB />
   
         <section className="w-full px-4 md:px-10 lg:px-20 py-16">
           {/* TITLE */}
           <h2 className="text-[#345895] font-bold flex flex-row items-center justify-center font-[Inter] md:text-[42px] text-[36px] mb-8">
             Important Date
           </h2>
   
           {/* TABLE WRAPPER */}
           <div className="w-full overflow-hidden">
             {/* HEADER ROW */}
             <div className=" max-w-5xl flex items-center justify-center bg-[#E5E5E5] text-[#4D964F] font-semibold text-center m-auto px-10 lg:px-30 py-8 text-[14px] md:text-[24px] rounded-xl">
               <p>ADMISSION OPEN FOR JANUARY 26 SESSION</p>
             </div>
           </div>
         </section>
   
         <FAQ faqs={faqs} />
   
         <ConnectToday />
       </main>
  );
}

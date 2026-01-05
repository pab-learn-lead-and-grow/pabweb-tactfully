"use client";
import Image from "next/image";
import {
  Download,
  BookOpenCheck,
  SplinePointer,
  Speech,
  GlobeLock,
  Check,
  ChevronRight,
  ChevronsDown,
  ArrowRight,
  BookCheck,
  Headset,
  BriefcaseBusiness,
  Ungroup,
  BookText,
  UserLock,
  StickyNote,
  ArrowUpWideNarrow,
  ContactRound,
  Headphones,
  Boxes,
  GalleryVertical,
  Tally4,
  Star,
} from "lucide-react";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import MujCareerServices from "../NmimsSection/MujCareerServices";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Link from "next/link";

export default function Page() {
  const learningCards = [
    {
      icon: Tally4,
      title: "Get Started",
      desc: "Kick off with clarity—discover program structure, tools, and guidelines to set a strong foundation.",
    },
    {
      icon: Headset,
      title: "Engage",
      desc: "Connect with mentors and classmates through interactive meetups and build your professional network.",
    },
    {
      icon: BookCheck,
      title: "Grow",
      desc: "Learn through live/on-demand classes, complete projects confidently, and access 24/7 academic and digital resources to keep progressing.",
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

    /* fees crousel */
    function FeesCarousel() {
      const cards = [
        {
          title: "Annual Payment",
          amount: "₹1,99,000/-",
          sub: "Inclusive of all taxes",
        },
        {
          title: "Semester Wise",
          amount: "₹49,750/-",
          sub: "Inclusive of all taxes",
        },
        {
          title: "EMI starting at",
          amount: "₹8,292/-",
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
                className="bg-linear-to-b from-[#345895] to-[#101C2F] rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
              >
                <div>
                  <p className="font-semibold text-white">{cards[index].title}</p>
                  <p className="text-xs text-white mt-1">(in INR)</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">MBA</p>
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

  const subjects = [
{ id: 1, name: "Business Analytics" },
{ id: 2, name: "Data Science" },
{ id: 3, name: "Digital Entrepreneurship" },
{ id: 4, name: "Digital Marketing" },
{ id: 5, name: "General Management" },
{ id: 6, name: "International Finance (ACCA)" },
{ id: 7, name: "MBA Dual Specialization" }, 
{ id: 8, name: "Human Resource Analytics" },
{ id: 9, name: "Hospital & Healthcare Management" },
{ id: 10, name: "Entrepreneurship and Leadership Management" },
{ id: 11, name: "Finance and Accounting Management" },
{ id: 12, name: "Petroleum & Natural Gas Management" },
{ id: 13, name: "Hospitality Management" },
{ id: 14, name: "Human Resource Management" },
{ id: 15, name: "Information Technology Management" },
{ id: 16, name: "International Business Management" },
{ id: 17, name: "Marketing & Sales Management" },
{ id: 18, name: "Production and Operations Management" },
{ id: 19, name: "Retail Management" },
];

const semesters = [1, 2, 3, 4];
const semSuffix = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
  };

const topicsData = {
  1:{
     1: [
        "Accounting for Managers",
        "Marketing Management",
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods",
        "Conflict Resolution and Management"
      ],
      3: [
        "Analyzing and Visualizing Data with Power BI",
        "Forecasting Techniques",
        "Introduction to Business Analytics",
        "Minor Project",
        "Professional Ethics",
        "Strategic Management",
        "Supervised Learning Techniques"
      ],
      4: [
        "Big Data Analytics",
        "Digital Marketing",
        "Major Project",
        "Management in Action - Social Economic and Ethical Issues",
        "Optimization and Dimension Reduction Techniques"
      ]
    },

 2: {
      1: [
        "Accounting for Managers",
        "Marketing Management",
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods",
        "Conflict Resolution and Management"
      ],
      3: [
        "Analytics for Decision Making",
        "Data Engineering",
        "Data Visualization and EDA",
        "Introduction to Data Science",
        "Minor Project",
        "Professional Ethics",
        "Strategic Management"
      ],
      4: [
        "Advance Deep Learning",
        "Digital Marketing",
        "Major Project",
        "Management in Action - Social Economic and Ethical Issues",
        "Supervised and Unsupervised Machine Learning"
      ]
    },
  3: {
      1: [
        "Accounting for Managers",
        "Marketing Management",
        "ManagerManagerial Economics",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods",
        "Conflict Resolution and Management"
      ],
      3: [
        "Developing Entrepreneurial Skills",
        "Entrepreneurship - Basics",
        "Idea Scouting and Development",
        "Minor Project",
        "Planning & Launching the Product",
        "Professional Ethics",
        "Strategic Management"
      ],
      4: [
        "Digital Marketing",
        "Financial Aspects in Entrepreneurship",
        "Major Project",
        "Management in Action - Social Economic and Ethical Issues",
        "Successful Marketing"
      ]
    },
  4: {
      1: [
        "Accounting for Managers",
        "Marketing Management",
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods",
        "Conflict Resolution and Management"
      ],
      3: [
        "Digital Customer Analytics",
        "Digital Journey with Brand Management",
        "Minor Project",
        "Performance Marketing",
        "Professional Ethics",
        "Social Media and Technology Marketing",
        "Strategic Management"
      ],
      4: [
        "Digital Commerce - Reinventing Business Models",
        "Digital Marketing",
        "Major Project",
        "Management in Action - Social Economic and Ethical Issues",
        "Marketing Analytics - Data Tools and Techniques"
      ]
    },
 5: {
      1: [
        "Accounting for Managers",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Conflict Resolution and Management"
      ],
      3: [
        "Strategic Management",
        "Management of Financial Services",
        "Strategic Human Resource Management",
        "Product and Brand Management",
        "Operations Planning, Scheduling & Control",
        "Professional Ethics",
        "Minor Project"
      ],
      4: [
        "Big Data Analytics",
        "Digital Commerce - Reinventing Business Models",
        "Digital Marketing",
        "Management in Action - Social Economic and Ethical Issues",
        "Major Project"
      ]
    },
  6: {
      1: [
        "Accounting for Managers",
        "Marketing Management",
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Conflict Resolution and Management"
      ],
      3: [
        "Strategic Management",
        "Professional Ethics",
        "Minor Project",
        "Performance Management",
        "Business Taxation",
        "Financial Reporting",
        "International Financial Management"
      ],
      4: [
        "Management in Action - Social Economic and Ethical Issues",
        "Major Project",
        "Digital Marketing",
        "Audit & Assurance",
        "Strategic Business Reporting"
      ]
    },
  7: {
      1: [
        "Accounting for Managers",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management",
        "Professional Communication"
      ],
      2: [
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Conflict Resolution and Management"
      ],
      3: [
        "Major Specialization Course-1",
        "Major Specialization Course-2",
        "Major Specialization Course-3",
        "Major Specialization Course-4",
        "Minor Specialization Course-1",
        "Professional Ethics",
        "Minor Project"
      ],
      4: [
        "Major Specialization Course-5",
        "Minor Specialization Course-1",
        "Minor Specialization Course-2",
        "Minor Specialization Course-3",
        "Digital Marketing",
        "Management in Action - Social Economic and Ethical Issues",
        "Major Project / Dissertation"
      ]
    },
 8: {
      1: [
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication",
        "Accounting for Managers",
        "Marketing Management"
      ],
      2: [
        "Legal Aspects of Business",
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Conflict Resolution and Management"
      ],
      3: [
        "Employee Data Visualization",
        "Employee Data, Data Sources & Metrics",
        "Introduction to HR Management",
        "Introduction to HR Technology & Analytics",
        "Minor Project",
        "Professional Ethics",
        "Strategic Management"
      ],
      4: [
        "Advanced HR Analytics",
        "Digital Marketing",
        "Industrial Relations & Employee Relations",
        "Major Project",
        "Management in Action - Social Economic and Ethical Issues"
      ]
    },
    9: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
      3: [
        "Professional Ethics",
        "Strategic Management",
        "Minor Project",
        "Decision Leadership in Emergency Care",
        "Complex Case Management in Internal Medicine",
        "Patient Care Management in Critical Care",
        "Strategic Healthcare Leadership"
      ],
      4: [
        "Major Project",
        "Management in Action Social Economic and Ethical Issues",
        "Digital Marketing",
        "AI Tools and Applications",
        "Driving Innovation & Technology in Healthcare",
        "Advanced Hospital Operations & Strategic Management"
      ]
    },
    10: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
           3: [
        "Enterprise Planning, Appraisal and Financing",
        "Entrepreneurial Marketing",
        "Social Entrepreneurship",
        "Building Entrepreneurial Culture and Team",
        "Entrepreneurship and New Venture Creation"
      ],
      4: [
        "Managing Innovation Process",
        "Corporate Entrepreneurship",
        "Leading Change in Family Business"
      ]

    },
    11: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
       3: [
        "Cost and Management Accounting for Decision Making",
        "Corporate Tax Planning & Management",
        "Management of Financial Services",
        "Project Planning, Appraisal and Control",
        "Security Analysis and Portfolio Management"
      ],
      4: [
        "Principle & Practice of Banking",
        "Corporate Re-Structuring, Mergers & Acquisitions",
        "Strategic Financial Management"
      ]
    },
    12: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
       3: [
        "Fundamentals of Oil & Gas Business",
        "Fundamentals of Petroleum Exploration",
        "Project Management",
        "Petro Economics"
      ],
      4: [
        "Fundamentals of Refining",
        "Environment and Carbon Finance",
        "Customer Relationship Management"
      ]
    },
     13: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
       3: [
        "Hospitality and Tourism Management",
        "Accommodation Management",
        "Catering Management",
        "Managing Front Office in Hospitality"
      ],
      4: [
        "Customer Relationship Management in Hospitality",
        "Managing Room Revenue for Hospitality Industry",
        "Entrepreneurship Development in Food Industry"
      ]
    },
    14: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
        3: [
        "Global Commodity Trade",
        "International Human Resource Management",
        "Compensation and Reward Management",
        "Strategic Human Resource Management",
        "Measurement in HR"
      ],
      4: [
        "Training and Development",
        "Managerial Counselling",
        "Leadership and Motivation in Organization"
      ]
    },
     15: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
       3: [
        "IT Project Management",
        "Business Intelligence & Data Analytics",
        "E-Business and Trade",
        "System Analysis & Design",
        "Web-based Business Process"
      ],
      4: [
        "Enterprise Management",
        "Information Security & Risk Management",
        "Business Process Management"
      ]
    },
    16: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
        3: [
        "International Currency Management",
        "WTO and International Regulatory Environment",
        "Global Commodity Trade",
        "International Business Negotiation",
        "International Business and Practice"
      ],
      4: [
        "Managing Business in Emerging Markets",
        "Global Outsourcing",
        "Foreign Trade Policy"
      ]
    },
    17: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
        3: [
        "Consumer Behavior",
        "Product and Brand Management",
        "Direct Marketing",
        "Pricing Strategies",
        "Bottom of Pyramid Marketing"
      ],
      4: [
        "Advertising & Sales Promotion",
        "Customer Relationship Management",
        "Marketing of Services"
      ]
    },
    18: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
       3: [
        "Supply Chain Management",
        "Capacity Planning and Management",
        "Operations Planning, Scheduling and Control",
        "Service Operations Management",
        "Project Management"
      ],
      4: [
        "Operations Strategy",
        "Manufacturing and Services Competitiveness",
        "Lean Sigma"
      ]
    },
    19: {
      1: [
        "Accounting for Managers",
        "Professional Communication",
        "Managerial Economics",
        "Marketing Management",
        "Statistics for Management"
      ],
      2: [
        "Conflict Resolution and Management",
        "Financial Management",
        "Human Resource Management",
        "Legal Aspects of Business",
        "Business Research Methods"
      ],
       3: [
        "Merchandising and Category Management",
        "Sourcing and Vendor Management",
        "Mall Management",
        "Principles of Retailing",
        "Retail Supply Chain and Logistics Management"
      ],
      4: [
        "Retail Branding and CRM",
        "E-Retailing",
        "Luxury Retail"
      ]
    },
 };

 const [activeSubject, setActiveSubject] = useState(1);
   const [activeSemester, setActiveSemester] = useState(4);
   const [isModalOpen, setIsModalOpen] = useState(false);

  const whyCards = [
    {
      logo: Star,
      heading: "Accredited",
      subheading:
        "Amity's MBA is approved by the University Grants Commission (UGC) and recognised as a valid postgraduate degree - giving you credentials that are widely accepted by employers across India and abroad.",
    },
    {
      logo: BookOpenCheck,
      heading: "Specialized",
      subheading:
        "The curriculum is updated for modern business realities and offers specializations like Business Analytics, Digital Marketing, Finance, HR, IT & Data-driven business management — preparing you for roles in a variety of sectors.",
    },
    {
      logo: Speech,
      heading: "Career-Ready",
      subheading:
        "Amity Online offers placement assistance, virtual job fairs, global alumni and industry networks, practical training via case studies and projects — helping you boost employability and career growth.",
    },
    {
      logo: SplinePointer,
      heading: "Flexibile",
      subheading:
        "With online lectures (live & recorded), digital study resources, and remote-exam options, the program lets you learn on your own schedule — enabling you to upskill without giving up your job or other commitments.",
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

  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "13", label: "Specializations" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
        <section className="relative min-h-screen lg:min-h-[50vh] xl:min-h-screen w-full ">
                         {/* Background Image */}
                         <div className="absolute inset-0">
                           <Image
                             src="/amity/amityUniv.png"
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
                             <div className="bg-white rounded-r-2xl shadow-md h-[100px] flex items-center">
                               <Image
                                 src="/amity.png"
                                 alt="AMITY Logo"
                                 width={280}
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
                             className="inline-block bg-[#4d964f] text-white text-[18px] sm:text-[18px] mt-6  mb-2 font-sm px-5 py-1 rounded-full"
                           >
                             Best Seller
                           </motion.span>
                 
                           {/* Subtext */}
                           <motion.p
                             initial={{ opacity: 0, x: -20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.6, delay: 0.1 }}
                             viewport={{ once: true }}
                             className="text-white text-[16px] sm:text-[16px] italic font-light"
                           >
                             PG Program
                           </motion.p>
                 
                           {/* TITLE + DESCRIPTION */}
                           <div className="flex flex-col items-start">
                             <motion.h1
                               initial={{ opacity: 0, y: -20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.7 }}
                               viewport={{ once: true }}
                               className="text-white text-4xl sm:text-5xl md:text-5xl xl:text-[64px] lg:text-[54px] font-[Inter] font-bold -mt-1 leading-tight"
                             >
                              Master of Business Administration
                               </motion.h1>
                 
                             <motion.p
                               initial={{ opacity: 0 }}
                               whileInView={{ opacity: 1 }}
                               transition={{ duration: 0.7, delay: 0.2 }}
                               viewport={{ once: true }}
                               className="text-gray-200 text-left text-[16px] md:text-[18px] max-w-6xl mt-0 mb-10 leading-relaxed"
                             >
                            A high-impact blend of academic depth, AI-powered tools, and practical projects that equip you for real-world industry challenges.<br/>Experience personalized learning, 24/7 mentorship, and advanced simulations built to help you succeed in a digital-first business landscape.
                             </motion.p>
                 
                             {/* STATS */}
                             <motion.div
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.7 }}
                               viewport={{ once: true }}
                               className="grid grid-cols-3 mt-5 lg:-mx-10 gap-y-4 font-[Inter] w-full"
                             >
                               {stats.map((stat, idx) => (
                                 <div
                                   key={idx}
                                   className={`text-center py-3 lg:py-6 ${
                                     idx !== stats.length - 1
                                       ? "border-r-2 border-white"
                                       : ""
                                   }`}
                                 >
                                   <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white mb-1">
                                     {stat.value}
                                   </p>
                                   <p className="text-white md:text-3xl font-bold sm:text-base">
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
                               <button
                                              onClick={() => setIsModalOpen(true)}
                                              className="flex items-center justify-center gap-2  bg-linear-to-r from-[#345895] to-[#142138] border-0 border-transparent shadow-[#020b34] transform  text-white  shadow-md
                                    transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-xl
                                    active:scale-100 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                                            >
                                              Download Brochure
                                              <Download size={20} />
                                            </button>
                              
                                            <button
                                              onClick={() => setIsModalOpen(true)}
                                              className=" bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] transform  text-white  shadow-md
                                    transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-xl
                                    active:scale-100 flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                                            >
                                              Talk to an Expert
                                              <ArrowRight size={16} />
                                            </button>
                             </motion.div>
                           </div>
                         </div>
                       </section>
                  <section className="w-full bg-white pt-0 p-10">
                    {/* ======= ABOUT AMITY SECTION ======= */}
                    <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
                      {/* LEFT TEXT */}
                      <div>
                        <h2 className="text-[32px] md:text-4xl lg:text-[64px] mt-15 font-bold text-[#345895] mb-6">
                         About <span className="text-[#F9BD04] ">Amity </span>
                        </h2>
            
                        <p className="text-black leading-relaxed text-sm md:text-[18px] mb-10">
                         Amity University Online, approved by the UGC, is a leading provider of online higher education in India, offering various undergraduate, postgraduate, diploma, and certificate programs. Built for students and working professionals, it delivers a flexible learning experience through live and recorded classes, supported by downloadable resources. The university is particularly known for its industry-focused programs in management, IT, and computer applications.
                        </p>
                      </div>
            
                      {/* RIGHT IMAGE WITH CURVED SHAPE */}
                      <div className="relative w-full h-full flex md:justify-end  ">
                        <div className="max-w-7xl overflow-hidden  lg:-mr-10 xl:-mr-16">
                          <img
                            src="/amity/aboutAmity.png"
                            alt="Students"
                            className="w-full h-full rounded-2xl md:rounded-bl-full object-content"
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
                                   
            
                  <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
                    {/* ===== Top Text Section ===== */}
                    <div className="max-w-6xl text-left mx-auto">
                      <h2 className="text-xl md:text-2xl font-regular lg:text-[49px] leading-normal text-gray-900">
                        <span className="text-[#F9BD04] ">
                          A powerful combination of academic rigor, AI-driven tools, and hands-on projects that prepare you for real industry challenges. {" "}
                        </span>
                        Benefit from personalized learning, round-the-clock mentorship, and advanced simulations designed to help you thrive in today’s digital-first business environment.</h2>
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
                          <h3 className="lg:text-2xl text-[#345895] mb-1">
                            Live Industry Projects
                          </h3>
                          <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                         Engage in real industry projects and solve actual business challenges with guidance from industry experts. Build practical experience, earn project-specific certifications, and demonstrate your caRadhyailities to recruiters before you graduate.
                         </p> </div>
                      </div>
            
                      {/* Card 2 */}
                      <div className="flex flex-col gap-4 p-4 sm:p-6">
                        {/* Icon */}
                        <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
                          <BookText size={72} strokeWidth={1.0} />
                        </div>
            
                        {/* Content */}
                        <div>
                          <h3 className="lg:text-2xl text-[#345895] mb-1">
                            Interactive AI powered Learning Materials
                          </h3>
                          <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                          Learn more efficiently with AI-powered interactive content:
                           </p>
                           <ul className="text-gray-700 text-xs list-disc px-5 lg:text-[16px] leading-relaxed">
                          <li>
                            Quick summaries for immediate clarity
                          </li>
                          <li>
                            Auto generated practice questions
                          </li>
                          <li>
                           Abuilt-in tool to capture and organize notes
                          </li>
                           </ul>
                            <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                          Everything you need is unified in one intuitive platform, so you can concentrate fully on mastering your lessons.
                           </p>
                        </div>
                      </div>
                    </div>
                  </section>

      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

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
                         <div className="flex flex-col w-full h-80 overflow-y-auto no-scrollbar gap-4 mt-10 items-center">
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
                            className=" w-full bg-[#4D964F] text-white px-4 py-4 rounded-2xl bg-linear-to-r from-[#4D964F] to-[#193019] shadow-md flex items-center justify-center gap-4"
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
          {/* Heading */}
          <h2 className="text-[32px] sm:text-4xl md:text-[54px] lg:text-[64px] font-bold text-[#345895] mb-4 md:mb-7">
            Eligibility Criteria
          </h2>
         <ul className="text-[#1F284E] text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
            <li> Fresh graduates and working professionals.</li>
            <li>
              Entrepreneurs looking to develop skills to manage critical
              business projects.
            </li>
            <li>
              Aspirants or working professionals seeking a global career in the
              fields of Management, Finance, Marketing, Sales, Operations,
              Logistics among many more.
            </li>
          </ul>
          {/* for Indian Students */}
          <div className="mb-5">
              <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#345895] mb-2 md:mb-4">
              For Indian students
            </h3>
            <ul className="text-[#1F284E] text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                Graduation in any discipline with 40% marks in the last
                qualifying examination. Below 40% marks, a test is conducted and
                if passed then the student is eligible for admission
              </li>
              <li>
                Applicants must possess sufficient knowledge and understanding
                of the English Language.
              </li>
            </ul>
          </div>
          {/* for Foreign Students */}
          <div className="mb-5">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#345895] mb-2 md:mb-4">
              For NRI & Foreign students
            </h3>
            <ul className="text-[#1F284E] text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>Candidates must have completed a graduation degree</li>
              <li>
                Certificate of equivalence from the Association of Indian
                Universities required from students with foreign education to
                apply to any university in India. (Refer to (
                <Link
                  href="https://aiu.ac.in/"
                  target="_blank"
                  className="text-inherit hover:text-[#345895]"
                >
                  http://aiu.ac.in/
                </Link>
                ))
              </li>
            </ul>
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
                 The Amity University Online MBA follows a structured and
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
                         Learners must book their examination slots through the Amity University
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
                     For end-term examinations, Amity University provides three available slots:
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
     
           <MujCareerServices benefits={benefits} onCtaClick={() => setIsModalOpen(true)}  />
     
           <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
             <div className="px-2 w-full">
               <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                 {/* LEFT SIDE TEXT */}
                 <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
                   <h2 className="text-[#064E92] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4 md:mb-10">
                     Fees Structure
                   </h2>
     
                   {/* Subtitle */}
                   <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-10">
                     Convenient Fee payment option:
                     <br />
                     Choose your preferred fee payment option
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
                   Amity University<br/>
                   Online MBA <br />
                   Certificate
                 </h2>
     
                 <p className="text-[#3C3C43] max-w-[350px] text-base">
                   Graduate with UGC-entitled and
                   <br /> internationally accepted online degrees.
                 </p>
     
                 {/* IMAGE that appears ONLY on mobile, above CTA */}
                 <div className="md:hidden flex justify-center">
                   <img
                     src="/amity/degree/amityMbaDegree.png"
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
                   src="/amity/degree/amityMbaDegree.png"
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
               className="text-[#345895] font-extrabold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
             >
               The program offers strong academics, interactive learning, and full
               flexibility to help professionals grow confidently.
             </motion.h2>
     
             {/* Two Column Layout */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
               {/* LEFT COLUMN */}
               <div className="flex flex-col  gap-5 md:gap-12">
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
                  bg-[#345895]
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
                     <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                       Gamified assignments
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                      Engage in immersive roleplay simulations to solve real business challenges and sharpen leadership and decision-making skills.
                     </p>
                   </div>
                 </motion.div>
     
                 {/* Item 2 */}
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
                  bg-[#345895]
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
                     <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                       Internship Opportutnities
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       Access curated internships with top companies to gain real experience and boost your career prospects.
                     </p>
                   </div>
                 </motion.div>
                 
               </div>
     
               {/* RIGHT COLUMN */}
               <div className="flex flex-col  gap-5 md:gap-12">
                 {/* Item 3 */}
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
                  bg-[#345895]
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
                     <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                      Pan India campus access & offline events
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       Balance work and study with a fully online program featuring live/recorded classes, remote exams, and 24/7 support.
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
                   <div
                     className="
                  shrink-0
                  w-18 h-18
                  md:w-14 md:h-14
                  lg:w-18 lg:h-18 
                  bg-[#345895]
                  rounded-full
                  flex items-center justify-center
                "
                   >
                     <StickyNote
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
                     <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                       Access to Campus Life
                     </h3>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                       Connect, collaborate, and join clubs through the beSocial app — your virtual student community.
                     </p>
                   </div>
                 </motion.div>
               </div>
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
                       "Business Analyst",
                       "Product Manager",
                       "Strategy Consultant",
                       "Digital Transformation Lead",
                       "C Suite Executive ",
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
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ServicesByRadhya />

     <section className="w-full px-4 md:px-10 lg:px-20 py-16">
        {/* TITLE */}
        <h2 className="text-[#345895] font-bold flex flex-row items-center justify-center font-[Inter] md:text-[42px] text-[36px] mb-8">
          Important Dates
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
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

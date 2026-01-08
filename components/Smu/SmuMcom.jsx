"use client";
import Image from "next/image";
import {
  Download,
  BookOpenCheck,
  SplinePointer,
  Speech,
  GlobeLock,
  Check,
  ArrowRight,
  BookCheck,
  Headset,
  FileUser,
  ChartNoAxesColumn,
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
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import MujCareerServices from "../NmimsSection/MujCareerServices"
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import CourseCurriculumSection from "@/components/NmimsSection/CourseCurriculumSection";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const curriculumData = {
    1: {
      semesters: {
        semester1: {
          title: "Semester 1",
          topics: [
            "Management Concepts and Organizational Behavior",
            "Marketing Management",
            "Financial Accounting & Reporting",
            "Economics for Managers",
            "Corporate Financial Management",
          ],
        },

        semester2: {
          title: "Semester 2",
          topics: [
            "Advanced Corporate Accounting",
            "Business and Economic Laws",
            "Cost Analysis & Control",
            "Human Resource Management",
            "Audit & Assurance",
          ],
        },
      },
    },

    /* ------------------------------------------------------------- */

    2: {
      semesters: {
        semester3: {
          title: "Semester 3",

          coreSubjects: [
            "Business Ethics and Corporate Governance",
            "Strategic Management",
            "Management Accounting",
          ],

          specialization1: {
            title: "Specialization I",
            useRadio: false,
            data: [
              {
                name: "Elective Finance",
                topics: [
                  "Management of Financial Services",
                  "Security Analysis and Portfolio Management",
                ],
              },
              {
                name: "Elective Marketing",
                topics: ["E-Business", "Consumer Behavior"],
              },
            ],
          },
        },

        /* --------------------------------------------------------- */

        semester4: {
          title: "Semester 4",

          coreSubjects: [
            "Research Methodology and Statistical Analysis",
            "Project Work",
          ],

          specialization1: {
            title: "Specialization I",
            useRadio: false,
            data: [
              {
                name: "Elective Finance",
                topics: [
                  "Corporate Tax Laws & Planning",
                  "Merger & Acquisitions",
                ],
              },
              {
                name: "Elective Marketing",
                topics: [
                  "International Marketing",
                  "Advertising Management and Sales Promotion",
                ],
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
      q: "What is the duration and mode of delivery for the Online M.Com program?",
      a: "The Online M.Com is a 2-year postgraduate program comprising 4 semesters, and is delivered entirely online through SMU’s digital learning platform.",
    },
    {
      q: "Who is eligible to apply for the Online M.Com?",
      a: "Applicants must have a bachelor’s degree from a recognized university to be eligible for admission to the Online M.Com.",
    },
    {
      q: "Is prior work experience required to enrol?",
      a: "No - the program does not require prior work experience. The eligibility criteria focus on academic qualification only.",
    },
    {
      q: "What is the fee structure for the Online M.Com program?",
      a: "The total fee for the full course is ₹ 75,000, payable per semester. EMI and flexible payment options are often available for eligible students.",
    },
    {
      q: "How are classes, learning materials and assessments handled?",
      a: "Learning is delivered online via a robust LMS, offering live and recorded lectures, access to e-libraries, discussion forums, assignments, and online examinations. All coursework can be completed remotely.",
    },
  ];

  const topFaculty = [
    {
      name: "Ms. Usmita Baraliya",
      title: "Assistant Professor",
      image: "/smu/faculties/usmita.png",
    },
    {
      name: "Dr. Ruchita Sharma",
      title: "Assistant Professor",
       image: "/smu/faculties/ruchita.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Anupam K Pandey",
      title: "Assistant Prof.(SG)",
      image: "/smu/faculties/anupam.png",
    },
    {
      name: "Dr. Aditya Rai",
      title: "Associate Professor",
       image: "/smu/faculties/aditya.png",
    },
    {
      name: "Mr. Vivek Pandey",
      title: "Assistant Professor",
       image: "/smu/faculties/vivek.png",
    },
    {
      name: "Ms.Tshering G Bhutia",
      title: "Assistant Professor",
       image: "/smu/faculties/bhutia.png",
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
        "SMU’s distance and online education ecosystem has empowered more than 5 lakh learners-making it one of India's most trusted and preferred universities for flexible higher education.",
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
        "SMU's online programs are designed to fit your schedule-allowing you to study without interrupting your job or personal commitments.",
    },
    {
      logo: FileUser,
      heading: "Support",
      subheading:
        "Dedicated academic & career assistance to guide you throughout your learning journey.",
    },
  ];

    /* fees crousel */
    function FeesCarousel() {
      const cards = [
        {
          title: "Annual Payment",
          amount: "₹75,000/-",
          sub: "Inclusive of all taxes",
        },
        {
          title: "Semester Wise",
          amount: "₹18,750/-",
          sub: "Inclusive of all taxes",
        },
        {
          title: "EMI starting at",
          amount: "₹3,125/-",
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
                className="bg-linear-to-b from-[#270652] to-[#3C087E]/50 rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
              >
                <div>
                  <p className="font-semibold text-white">{cards[index].title}</p>
                  <p className="text-xs text-white mt-1">(in INR)</p>
                  <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">MCom</p>
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
                  backgroundColor: index === i ? "#270652" : "#d1d5db",
                }}
                className="w-3 h-3 rounded-full"
              />
            ))}
          </div>
        </div>
      );
    }

  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Upskill and Certify",
      text: "Advance your career with in-demand skill training and certifications that employers value.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Industry Relevance",
      text: "Engage in live sessions with industry professionals who provide practical insights, career advice, and up-to-date market trends to prepare you for real-world roles.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Self-paced Learning",
      text: "Flexible self-paced modules to improve communication, polish your resume, build professional etiquette, and gain hands-on industry skills.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Discover your strengths and skill gaps with targeted assessments that help you develop the competencies required to boost your employability.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "AI Placement Portal",
      text: "Elevate your job readiness with Online Manipal's AI-powered placement portal, where you can practice unlimited mock interviews, receive instant insights, and seamlessly apply to career opportunities.",
    },
    {
      icon: (
        <ChartNoAxesColumn
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
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
      <section className="relative min-h-screen lg:min-h-[50vh] xl:min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/smu/smuUniv.png"
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
        <div className="relative z-10 max-w-7xl mx-auto p-6 sm:10">
          {/* Most Loved */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#EEA727] text-white text-[18px] sm:text-[18px] mt-6 mb-2 px-4 py-1 rounded-full"
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
            (Master of Commerce)
          </motion.p>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-5xl font-[Inter] lg:text-[54px] xl:text-[64px] font-bold -mt-1 leading-tight"
            >
              Online MCom Degree
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[16px] sm:text-[12px] md:text-[18px] max-w-7xl mt-0 mb-10 leading-relaxed"
            >
              Sikkim Manipal University’s affordable online MCom offers AI-powered learning with flexible live/recorded classes, expert faculty, interactive forums, online exams, and an industry-focused curriculum-helping you build strong commerce skills and earn a globally recognized degree with SMU alumni status.
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
                  <p className="text-gray-200 text-[16px] md:text-[22px] font-bold sm:text-base">
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
              <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2  bg-[#3D077E] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                                                  transition-all duration-300 ease-out
                                                  hover:scale-105 hover:shadow-lg
                                                  active:scale-100 text-white px-6 py-3 rounded-lg hover:bg-blue-950 transition-all duration-300 font-medium">
                                                            Download Brochure
                                                            <Download size={20} />
                                                          </button>
                                            
                                                          <button onClick={() => setIsModalOpen(true)} className=" bg-[#F6A410] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                                                  transition-all duration-300 ease-out
                                                  hover:scale-105 hover:shadow-lg
                                                  active:scale-100 flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-medium">
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
            <h2 className="text-[32px] md:text-4xl mt-15 lg:text-[64px] font-bold text-[#270652] mb-6">
              About <span className="text-[#B35531] ">SMU </span>
            </h2>

            <p className="text-black leading-relaxed text-xs lg:text-[18px] mb-10">
              Sikkim Manipal University (SMU), established in 1995, is a NAAC A+
              accredited and UGC-entitled institution known for its academic
              credibility and technology-enabled education. SMU provides
              learners with industry-relevant, high-quality programs designed
              for today’s competitive world.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl overflow-hidden md:-mr-10">
              <img
                src="/smu/aboutSmu.jpeg"
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

      <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-6xl text-left mx-auto">
          <h2 className="text-xl md:text-2xl font-regular lg:text-[42px] leading-normal text-gray-900">
            <span className="text-[#B35531] ">
             The online Master of Commerce (MCom) from the prestigious Sikkim Manipal University (SMU) aims to build future-ready professionals across industries.{" "}
            </span>
            Delivered through an AI-enabled learning portal, this most affordable online MCom supports anytime, anywhere learning by providing high-quality learning content, live & recorded classes by expert faculty, clarifying queries with an AI tutor, participating in discussion forums, and taking online examinations. The curriculum covers key commerce concepts such as corporate financial management, investment management, security analysis, and portfolio management to enhance commerce acumen. Earn a globally accepted degree certificate and prestigious SMU alumni status to boost your career prospects and expand your professional network.
            </h2>
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
              <h3 className="lg:text-2xl text-[#270652] mb-1">
                Comprehensive, Industry-Relevant Commerce Training
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
              The program covers advanced topics such as cost analysis & control, corporate tax planning, international business, e-commerce, financial management, and strategic business skills - equipping you with deep domain expertise that matches current industry demands.
               </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 ">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <BookText size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <h3 className="lg:text-2xl text-[#270652] mb-1">
               Fully Online Flexibility with UGC-Entitled, Recognized Degree
              </h3>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
              Offered entirely online via SMU’s robust learning platform including live/recorded classes, digital resources, online examinations, and 24/7 access this M.Com allows you to upgrade your qualifications without interrupting work or personal commitments. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs cards={whyCards} onCtaClick={() => setIsModalOpen(true)} />

      <CourseCurriculumSection years={[1, 2]} data={curriculumData} />
      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-[32px] sm:text-4xl md:text-[54px] lg:text-[64px] font-bold text-[#270652] mb-4 md:mb-7">
            Eligibility Criteria
          </h2>

          {/* Indian Students */}
          <div className="mb-5">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] md:mb-4">
              For Indian students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Educational qualification
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates must have completed 10+2+3-year bachelor’s degree from a recognized university/institution, or an equivalent qualification as recognized by the Association of Indian Universities. 
            </p>

             <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] md:mb-4">
              For NRI & foreign students
            </h3>

            {/* Educational Qualification */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Educational qualification
            </h4>
            <ul className="text-black text-[12px] px-5 list-disc md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                 Candidates must have completed 10+2+3-year bachelor’s degree from a recognized university/institution, or an equivalent qualification as recognized by the Association of Indian Universities
                 </li>
               <li>
                 Candidates who have completed 10+2 education or graduate level education outside India must produce a certificate of equivalence issued by the Association of Indian Universities.
                 </li>
            </ul>

            {/* Grades */}
            <h4 className="font-bold text-[16px] md:text-2xl xl:text-[36px] text-black mb-1">
              Grades
            </h4>
            <p className="text-black text-[12px] md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              Candidates must have a minimum of 50% marks in aggregate in
              graduation (45% for reserved categories).
            </p>
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
                               <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[30px] md:text-[60px] lg:text-[64px] text-[#270652]/10 opacity-90 select-none tracking-tight whitespace-nowrap">
                                 EXAMINATION PROCESS
                               </h1>
                       
                               <div className="max-w-6xl mx-auto relative">
                                 {/* Main Animated Heading */}
                                 <motion.h2
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="text-[28px] md:text-[56px] lg:text-[64px] font-bold text-center text-[#270652] mb-6"
                                 >
                                   EXAMINATION PROCESS
                                 </motion.h2>
                       
                                 {/* Sub Text */}
                                 <motion.p
                                   initial={{ opacity: 0 }}
                                   whileInView={{ opacity: 1 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="text-left text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16"
                                 >
                                   The Sikkim Manipal Online MCom follows a structured and
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
                                     className="bg-[#3C087E]/5 text-white p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                                   >
                                     <h3 className=" text-md md:text-2xl text-[#3C087E] font-semibold italic mb-5">
                                       Exam Slot Booking
                                     </h3>
                       
                                     {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
                                     <div className="space-y-5 text-lg leading-relaxed max-w-[380] text-black mx-auto">
                                       {/* POINT 1 */}
                                       <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                                         <span className="text-lg lg:text-2xl leading-none">✦</span>
                                         <p className="text-left text-lg lg:text-2xl mb-6">
                                           Learners must book their examination slots through the SMU
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
                                     className="bg-[#3C087E]/5 text-white p-5 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
                                   >
                                     <h3 className="text-md md:text-2xl text-[#3C087E] font-semibold italic mb-5">
                                       Exam Slot Timings
                                     </h3>
                       
                                     <p className="text-lg lg:text-2xl max-w-[380] mb-6 text-black text-center">
                                       For end-term examinations, SMU provides three available slots:
                                     </p>
                       
                                     {/* Exam Time Circles */}
                                     <div className="flex items-center justify-center text-black gap-6 mb-7">
                                       {["9 AM", "1 PM", "5 PM"].map((slot, i) => (
                                         <div
                                           key={i}
                                           className="w-15 h-15 border border-black rounded-full flex items-center justify-center text-lg font-semibold"
                                         >
                                           {slot}
                                         </div>
                                       ))}
                                     </div>
                       
                                     <p className="text-lg lg:text-2xl max-w-[380] text-black text-center">
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
                                 <h2 className="text-[24px] md:text-[40px] font-bold italic text-[#270652] mb-12 text-center">
                                   ASSESSMENT STRUCTURE (100 MARKS)
                                 </h2>
                       
                                 {/* TWO CATEGORIES */}
                                 <div className="grid grid-cols-1 md:grid-cols-2  text-black gap-12">
                                   {/* LEFT CATEGORY */}
                                   <div className="space-y-2 w-full">
                                     <div className="w-full rounded-lg border border-[#270652] py-3 text-center italic font-semibold bg-white">
                                       External Assessment – 70 Marks
                                     </div>
                       
                                     {/* FULL-WIDTH SPLIT ROW */}
                                     <div className="grid grid-cols-2 gap-2 w-full">
                                       <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                         MCQ (40 Marks)
                                       </div>
                                       <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                         Descriptive Answers (30 Marks)
                                       </div>
                                     </div>
                                   </div>
                       
                                   {/* RIGHT CATEGORY */}
                                   <div className="space-y-2 w-full">
                                     <div className="w-full rounded-lg border border-[#270652] py-3 text-center italic font-semibold bg-white">
                                       Internal Assessment – 30 Marks
                                     </div>
                       
                                     {/* FULL-WIDTH SPLIT ROW */}
                                     <div className="grid grid-cols-2 gap-2 w-full">
                                       <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                         Quiz
                                       </div>
                                       <div className="w-full rounded-lg border border-[#270652] py-3 text-sm text-center bg-white">
                                         Assignment
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                       
                                 {/* PASSING CRITERIA */}
                                 <div className="border border-[#e5e7eb] rounded-lg p-5 mt-12 bg-white">
                                   <p className="font-semibold text-black mb-1">Passing Criteria</p>
                                   <ul className="list-disc pl-6 text-[#3C3C43] text-sm md:text-lg">
                                     <li>
                                       A candidate must secure a minimum of 40% to successfully pass
                                       the course.
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </section>

      <MujCareerServices benefits={benefits} onCtaClick={() => setIsModalOpen(true)} />

      <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
        <div className="px-2 w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
              <h2 className="text-[#270652] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4 md:mb-10">
                Fees Structure
              </h2>

              {/* Subtitle */}
              <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-10">
                Convenient Fee payment option:
                <br />
                Choose your preferred fee payment option
              </p>

              {/* CTA visible only on large screens */}
              <button onClick={() => setIsModalOpen(true)} className="hidden lg:flex text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit">
                Compare all Plans
              </button>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="w-full lg:w-[35%] flex justify-center">
              <FeesCarousel />
            </div>

            {/* CTA below carousel on mobile only */}
            <button onClick={() => setIsModalOpen(true)} className="lg:hidden text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
              Compare all Plans
            </button>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-[Inter]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#3c087E]/5 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
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

      <section className="w-full flex items-center justify-center px-6 md:px-18">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">
              Degree Sample
            </p>

            <h2 className="text-[#270652] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
              Sikkim Manipal<br/>
               University Online <br />
              MCom Certificate
            </h2>

            <p className="text-[#3C3C43] max-w-[350px] text-base">
              Graduate with UGC-entitled and
              <br /> internationally accepted online degrees.
            </p>

            {/* IMAGE that appears ONLY on mobile, above CTA */}
            <div className="md:hidden flex justify-center">
              <img
                src="/smu/smuMcomDegree.png"
                alt="Certificate Preview"
                className="w-full max-w-xs rounded-lg shadow-sm"
              />
            </div>

            {/* CTA BUTTON */}
            <button onClick={() => setIsModalOpen(true)} className="bg-[#F6A104] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200 flex items-center justify-center">
              Know more
            </button>
          </div>

          {/* RIGHT IMAGE (visible only on md+ screens) */}
          <div className="hidden md:flex justify-center mt-5">
            <img
              src="/smu/smuMcomDegree.png"
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
          className="text-[#270652] font-bold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
        >
          The program offers strong academics, interactive learning, and full
          flexibility to help professionals grow confidently.
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
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
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
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
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Strong Advanced Commerce & Financial Expertise
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                 Gain deep knowledge in accounting, cost analysis, corporate taxation, financial management, and international business to excel in commerce-driven roles.
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
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
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
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                 Practical, Industry-Ready Business Skills
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                 Develop analytical, managerial, and decision-making capabilities through a curriculum aligned with real-world business and finance requirements.
                  </p>
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
              <div
                className="
             shrink-0
             w-18 h-18
             md:w-14 md:h-14
             lg:w-18 lg:h-18 
             bg-[#270652]
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
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                  Full Flexibility with 100% Online Learning
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                 Learn anytime, anywhere through live and recorded classes, e-resources, online exams, and interactive forums-ideal for working professionals.
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
             bg-[#270652]
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
                <h3 className="text-black text-lg md:text-xl font-bold mb-2">
                 Enhanced Career Opportunities Across the Commerce Sector
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
               Unlock broader job prospects and higher growth potential across diverse roles in the commerce and finance industry.
               </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-20 md:px-12 lg:px-20">
        <div className="w-full md:bg-[#270652] rounded-4xl py-12 px-6 md:px-12 lg:px-15">
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
                                    text-[#270652] 
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
                  "Investment Management",
                  "Financial Risk Analysis",
                  "Tax Consulting",
                  "Cost Accounting",
                  "Corporate Treasury ",
                ].map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#F6A104] flex items-center justify-center">
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
                              bg-[#F6A104]
                              shadow-lg
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
        <h2 className="text-[#270652] font-bold flex flex-row items-center justify-center font-[Inter] md:text-[42px] text-[36px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className=" max-w-5xl flex items-center justify-center bg-[#D68E0E]/10 text-[#D68E0E] font-semibold text-center m-auto px-10 lg:px-30 gap-10 lg:gap-25 py-8 text-[14px] md:text-[24px] rounded-xl">
            <p>ADMISSION CLOSING SOON FOR JANUARY 26 SESSION</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}

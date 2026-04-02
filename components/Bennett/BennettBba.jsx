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
  FileUser,
  GlobeLockIcon,
} from "lucide-react";
import CounsellingModal from "../Radhya/CounsellingModal";
import SyllabusSection from "../NmimsSection/Syllabus";
import FeesCarousel from "../NmimsSection/FeesCrousel";
import React from "react";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import MujCareerServices from "../NmimsSection/MujCareerServices";
import Faculties from "../NmimsSection/Faculties";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Link from "next/link";
import MotionWrapper from "../Radhya/MotionWrapper";
import UnivCourses from "../Radhya/UnivCourses";
import SnapshotSection from "../NmimsSection/SnapshotSection";
import SpecializationSection from "../Programs/SpecializationSection";

export default function Page() {
  const learningCards = [
    {
      icon: Tally4,
      title: "Learn at Your Own Pace",
      desc: "Access live and recorded lectures anytime through the AI-enabled learning platform, allowing you to study conveniently alongside your professional commitments.",
    },
    {
      icon: Headset,
      title: "Comprehensive Learning Resources",
      desc: "Get access to a wide range of digital learning materials including e-books, case studies, recorded sessions, and interactive academic content.",
    },
    {
      icon: BookCheck,
      title: "Dedicated Student Support",
      desc: "Receive continuous academic and technical support through chat, call, and helpdesk services for a seamless learning journey.",
    },
  ];

   const steps = [
    {
      num: "01",
      title: "Registration",
      desc: "Register online and submit your application.",
    },
    {
      num: "02",
      title: "Document Submission",
      desc: "Upload academic and KYC documents.",
    },
    {
      num: "03",
      title: "Fee Submission",
      desc: "Pay fees online to confirm admission.",
    },
    {
      num: "04",
      title: "Confirmation",
      desc: "Receive enrollment confirmation and student ID",
    },
  ];

  const topFaculty = [
    {
      name: "Prof. (Dr.) Shikha Mittal Shrivastav",
      title: "Associate Professor",
      image: "/bennett/faculties/shikha.webp",
    },
    {
      name: "Prof. (Dr.) Bhuwandeep",
      title: "Associate Professor",
      image: "/bennett/faculties/bhuwandeep.webp",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. Pratibha Biswas",
      title: "Assistant Professor",
      image: "/bennett/faculties/pratibha.jpg",
    },
    {
      name: "Prof. (Dr.) Nidhi Sinha",
      title: "Associate Professor",
      image: "/bennett/faculties/nidhi.jpg",
    },
    {
      name: "Dr. Kishore Kumar",
      title: "Assistant Professor",
      image: "/bennett/faculties/kishore.webp",
    },
    {
      name: "Dr. Monika Sharma",
      title: "Assistant Professor",
      image: "/bennett/faculties/monika.webp",
    },
  ];

  const specializationsData = [
    {
      slug: "marketing",
      specialization_name: "Marketing",
      cover_image: "/specializations/marketing.png",
    },
    {
      slug: "finance",
      specialization_name: "Finance",
      cover_image: "/specializations/finance.png",
    },
    {
      slug: "analytics",
      specialization_name: "Business Analytics",
      cover_image: "/specializations/analytics.png",
    },
    {
      slug: "business",
      specialization_name: "International Business",
      cover_image: "/specializations/international.png",
    },
    {
      slug: "hr",
      specialization_name: "Human Resource Management",
      cover_image: "/specializations/hr.png",
    },
    {
      slug: "entrepreneurship",
      specialization_name: "Entrepreneurship",
      cover_image: "/specializations/entrepreneurship.png",
    },
  ];

  const semesters = [1, 2, 3, 4, 5, 6];
  const semSuffix = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
  };

  const subjects = [
    { id: 1, name: "Marketing" },
    { id: 2, name: "Finance" },
    { id: 3, name: "International Business" },
    { id: 4, name: "Business Analytics" },
    { id: 5, name: "Entrepreneurship" },
    { id: 6, name: "Human Resource Management" },
  ];

  const topicsData = {
    1: {
      1: [
        "Introduction to Organization Behaviour",
        "Principles of Economics – I",
        "Modern Management Practices",
        "Principles of Marketing Management",
        "Quantitative Techniques",
      ],
      2: [
        "English Communication",
        "Financial Accounting & Analysis",
        "Principles of Economics – II",
        "Introduction to Human Resource Management",
        "Introduction to Data Science",
      ],
      3: [
        "Fundamentals of Financial Management",
        "Strategic Management",
        "Business Law & Corporate Governance",
        "Business Ethics, Sustainability, and the Circular Economy",
        "Operations Management",
      ],
      4: [
        "Cost & Management Accounting",
        "Digital & Social Media Marketing",
        "Basics of Research Methodology",
        "Elective 1",
        "Elective 2",
      ],
      5: [
        "Design Thinking and Innovation",
        "Environmental Studies",
        "Essentials of IT",
        "Elective 3",
        "Elective 4",
      ],
      6: [
        "Creativity & Storytelling",
        "Project",
        "Elective 5",
        "Elective 6",
        "Elective 7",
        "AI Tools for Managers",
        "Excel for Decision Making",
      ],
    },
    2: {
      1: [
        "Introduction to Organization Behaviour",
        "Principles of Economics – I",
        "Modern Management Practices",
        "Principles of Marketing Management",
        "Quantitative Techniques",
      ],
      2: [
        "English Communication",
        "Financial Accounting & Analysis",
        "Principles of Economics – II",
        "Introduction to Human Resource Management",
        "Introduction to Data Science",
      ],
      3: [
        "Fundamentals of Financial Management",
        "Strategic Management",
        "Business Law & Corporate Governance",
        "Business Ethics, Sustainability, and the Circular Economy",
        "Operations Management",
      ],
      4: [
        "Cost & Management Accounting",
        "Digital & Social Media Marketing",
        "Basics of Research Methodology",
        "Elective 1",
        "Elective 2",
      ],
      5: [
        "Design Thinking and Innovation",
        "Environmental Studies",
        "Essentials of IT",
        "Elective 3",
        "Elective 4",
      ],
      6: [
        "Creativity & Storytelling",
        "Project",
        "Elective 5",
        "Elective 6",
        "Elective 7",
        "AI Tools for Managers",
        "Excel for Decision Making",
      ],
    },
    3: {
      1: [
        "Introduction to Organization Behaviour",
        "Principles of Economics – I",
        "Modern Management Practices",
        "Principles of Marketing Management",
        "Quantitative Techniques",
      ],
      2: [
        "English Communication",
        "Financial Accounting & Analysis",
        "Principles of Economics – II",
        "Introduction to Human Resource Management",
        "Introduction to Data Science",
      ],
      3: [
        "Fundamentals of Financial Management",
        "Strategic Management",
        "Business Law & Corporate Governance",
        "Business Ethics, Sustainability, and the Circular Economy",
        "Operations Management",
      ],
      4: [
        "Cost & Management Accounting",
        "Digital & Social Media Marketing",
        "Basics of Research Methodology",
        "Elective 1",
        "Elective 2",
      ],
      5: [
        "Design Thinking and Innovation",
        "Environmental Studies",
        "Essentials of IT",
        "Elective 3",
        "Elective 4",
      ],
      6: [
        "Creativity & Storytelling",
        "Project",
        "Elective 5",
        "Elective 6",
        "Elective 7",
        "AI Tools for Managers",
        "Excel for Decision Making",
      ],
    },
    4: {
      1: [
        "Introduction to Organization Behaviour",
        "Principles of Economics – I",
        "Modern Management Practices",
        "Principles of Marketing Management",
        "Quantitative Techniques",
      ],
      2: [
        "English Communication",
        "Financial Accounting & Analysis",
        "Principles of Economics – II",
        "Introduction to Human Resource Management",
        "Introduction to Data Science",
      ],
      3: [
        "Fundamentals of Financial Management",
        "Strategic Management",
        "Business Law & Corporate Governance",
        "Business Ethics, Sustainability, and the Circular Economy",
        "Operations Management",
      ],
      4: [
        "Cost & Management Accounting",
        "Digital & Social Media Marketing",
        "Basics of Research Methodology",
        "Elective 1",
        "Elective 2",
      ],
      5: [
        "Design Thinking and Innovation",
        "Environmental Studies",
        "Essentials of IT",
        "Elective 3",
        "Elective 4",
      ],
      6: [
        "Creativity & Storytelling",
        "Project",
        "Elective 5",
        "Elective 6",
        "Elective 7",
        "AI Tools for Managers",
        "Excel for Decision Making",
      ],
    },
    5: {
      1: [
        "Introduction to Organization Behaviour",
        "Principles of Economics – I",
        "Modern Management Practices",
        "Principles of Marketing Management",
        "Quantitative Techniques",
      ],
      2: [
        "English Communication",
        "Financial Accounting & Analysis",
        "Principles of Economics – II",
        "Introduction to Human Resource Management",
        "Introduction to Data Science",
      ],
      3: [
        "Fundamentals of Financial Management",
        "Strategic Management",
        "Business Law & Corporate Governance",
        "Business Ethics, Sustainability, and the Circular Economy",
        "Operations Management",
      ],
      4: [
        "Cost & Management Accounting",
        "Digital & Social Media Marketing",
        "Basics of Research Methodology",
        "Elective 1",
        "Elective 2",
      ],
      5: [
        "Design Thinking and Innovation",
        "Environmental Studies",
        "Essentials of IT",
        "Elective 3",
        "Elective 4",
      ],
      6: [
        "Creativity & Storytelling",
        "Project",
        "Elective 5",
        "Elective 6",
        "Elective 7",
        "AI Tools for Managers",
        "Excel for Decision Making",
      ],
    },
    6: {
      1: [
        "Introduction to Organization Behaviour",
        "Principles of Economics – I",
        "Modern Management Practices",
        "Principles of Marketing Management",
        "Quantitative Techniques",
      ],
      2: [
        "English Communication",
        "Financial Accounting & Analysis",
        "Principles of Economics – II",
        "Introduction to Human Resource Management",
        "Introduction to Data Science",
      ],
      3: [
        "Fundamentals of Financial Management",
        "Strategic Management",
        "Business Law & Corporate Governance",
        "Business Ethics, Sustainability, and the Circular Economy",
        "Operations Management",
      ],
      4: [
        "Cost & Management Accounting",
        "Digital & Social Media Marketing",
        "Basics of Research Methodology",
        "Elective 1",
        "Elective 2",
      ],
      5: [
        "Design Thinking and Innovation",
        "Environmental Studies",
        "Essentials of IT",
        "Elective 3",
        "Elective 4",
      ],
      6: [
        "Creativity & Storytelling",
        "Project",
        "Elective 5",
        "Elective 6",
        "Elective 7",
        "AI Tools for Managers",
        "Excel for Decision Making",
      ],
    },
  };

  const faqs = [
  {
    q: "Is Bennett University Online BBA valid?",
    a: "Yes, the Bennett University Online BBA is UGC-entitled and recognized, making it valid for jobs and higher education.",
  },
  {
    q: "What is the duration of Bennett University Online BBA?",
    a: "The duration of the program is 3 years, divided into multiple semesters.",
  },
  {
    q: "What is the fee for Bennett University Online BBA?",
    a: "The total fee for the Bennett Online BBA is approximately ₹1,50,000, with EMI options available.",
  },
  {
    q: "What is the eligibility for Bennett Online BBA?",
    a: "Candidates must have completed 10+2 from a recognized board with required marks and English as a subject.",
  },
  {
    q: "Is Bennett Online BBA good for students after 12th?",
    a: "Yes, it is designed for students who want to build a strong foundation in business and management after 12th.",
  },
  {
    q: "What specializations are offered in Bennett Online BBA?",
    a: "Specializations include Marketing, Finance, HR, Business Analytics, Entrepreneurship, and International Business.",
  },
  {
    q: "Can I pursue Bennett Online BBA while preparing for other exams?",
    a: "Yes, the flexible online format allows students to manage studies alongside other preparations.",
  },
  {
    q: "Does Bennett University provide placement support for Online BBA?",
    a: "Yes, students receive career guidance, skill development support, and access to job opportunities.",
  },
  {
    q: "Is there any entrance exam required for Bennett Online BBA?",
    a: "Generally, no entrance exam is required; admission is based on eligibility criteria.",
  },
  {
    q: "Is Bennett University a good option for Online BBA?",
    a: "Yes, Bennett University, backed by The Times Group, offers industry-aligned programs with modern learning methods.",
  },
];

  const whyCards = [
    {
      logo: Star,
      heading: "Strong Foundation",
      subheading:
        "Build core management knowledge and develop analytical thinking skills to solve real-world business challenges effectively.",
    },
    {
      logo: BookOpenCheck,
      heading: "Diverse Specializations",
      subheading:
        "Choose from marketing, finance, HR, analytics, and more to align your MBA with your career goals.",
    },
    {
      logo: Speech,
      heading: "Flexible Learning",
      subheading:
        "Study anytime, anywhere with a fully online platform designed for working professionals and busy schedules.",
    },
    {
      logo: FileUser,
      heading: "Industry-Ready Skills",
      subheading:
        "Develop practical business skills, frameworks, and decision-making abilities required in modern organizations.",
    },
    {
      logo: GlobeLockIcon,
      heading: "Expert Mentorship",
      subheading:
        "Learn from experienced faculty and industry experts who provide practical insights and real-world business exposure.",
    },
    {
      logo: SplinePointer,
      heading: "Career Upskilling",
      subheading:
        "Enhance your professional profile with advanced business knowledge and leadership capabilities for career growth.",
    },
  ];

  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Discovery",
      text: "Tools to explore your interests and strengths, understand different career pathways, and uncover your true passion and potential.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Resume Pro",
      text: "Expert support to build a professional, polished resume or CV tailored to industry standards, showcasing your skills and accomplishments.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "JobSearch",
      text: "Guidance through the online application process, virtual networking opportunities, and preparation for remote interviews to enhance your digital presence.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />,
      title: "Counselling",
      text: "Personalized 1-on-1 sessions with experienced career advisors, goal setting, and strategic support to make informed decisions about your future.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "SkillBoost",
      text: "Access to workshops, certification programs, and learning resources to develop job-ready skills and stay competitive in today’s job market.",
    },
    {
      icon: (
        <BriefcaseBusiness
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Internships",
      text: "Assistance with internship sourcing, application strategies, and gaining real-world project experience to build strong portfolios and work confidence.",
    },
  ];

  const stats = [
    { value: "3", label: "Years Duration" },
    { value: "6", label: "Semesters" },
    { value: "6", label: "Years Validity" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="relative min-h-[50vh] w-full ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bennett/bennett_Univ.jpg"
            alt="Bennett University campus for Online BBA program"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        {/* LOGO – move to left screen edge, keep same height */}
        <div className="relative z-10 w-full mt-20 md:mt-28">
          <MotionWrapper
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="bg-white rounded-r-2xl shadow-md h-[60px] sm:h-[80px] lg:h-[100px] -mb-5 flex items-center px-3 sm:px-4">
              <Image
                src="/bennett.png"
                alt="Bennett University logo powered by The Times Group"
                width={220}
                height={100}
                className="object-contain w-[140px] sm:w-[180px] lg:w-[220px]"
              />
            </div>
          </MotionWrapper>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto p-6 sm:p-10">
          {/* Subtext */}
          <MotionWrapper
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-[12px] md:text-[16px] mt-10 italic font-light"
          >
            Bachelor of Business Administration
          </MotionWrapper>

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col items-start">
            <MotionWrapper
              as="h1"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-white text-[20px] md:text-4xl lg:text-5xl font-[Inter] font-bold mt-1 leading-tight"
            >
              Bennett University Online BBA 2026: Fees, Admission, Eligibility,
              Syllabus & Review
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 text-left text-[10px] md:text-[16px] lg:text-[18px] max-w-5xl mt-0 lg:mb-5 leading-relaxed"
            >
              Start your business career with Bennett University Online BBA.
              Explore fees, eligibility, specializations, and career
              opportunities.
            </MotionWrapper>

            {/* STATS */}
            <MotionWrapper className="grid grid-cols-3 divide-x-2 divide-white mt-5 -mx-5 lg:-mx-10 gap-y-2 font-[Inter] w-full">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center px-3 sm:px-5 lg:px-8 py-2 lg:py-6"
                >
                  <p className="text-[20px] sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-white text-[10px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </MotionWrapper>

            {/* BUTTONS – CENTERED */}
            <MotionWrapper
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-row gap-2 md:gap-4 mt-8 lg:mt-12 w-full items-center justify-center"
            >
              <CounsellingModal>
                <button
                  className="flex items-center justify-center gap-2  bg-[#3D077E] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                   transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-100 text-[12px] md:text-[16px] xl:text-[22px] px-2 py-2 md:px-6 md:py-3 whitespace-nowrap rounded-lg hover:bg-blue-950 font-medium"
                >
                  Download Brochure
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </CounsellingModal>
              <CounsellingModal>
                <button
                  className="bg-[#F6A410] border-0 border-transparent shadow-[#FFFFFF]/35 transform text-white text-[12px] md:text-[16px] xl:text-[22px] shadow-md
    ease-out hover:scale-105 hover:shadow-lg active:scale-100 flex items-center justify-center gap-2
    px-2 py-2 md:px-6 md:py-3 whitespace-nowrap rounded-lg hover:bg-yellow-600 transition-all duration-300 font-medium"
                >
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </CounsellingModal>
            </MotionWrapper>
          </div>
        </div>
      </section>
         <section className="w-full bg-white py-10 px-4 lg:px-10 pt-0">
        {/* ======= ABOUT BENNETT SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl lg:text-5xl mt-10 lg:mt-15 font-bold text-[#0C549E] mb-4">
              About <span className="text-[#D03033] ">Bennett Online BBA </span>
            </h2>
            <p className="text-black leading-relaxed text-sm md:text-[18px] text- mb-10">
              The Bennett University Online BBA is a 3-year UGC-approved
              undergraduate program designed for students who want to build a
              strong foundation in business and management. Powered by The Times
              Group, this program offers a flexible and industry-aligned
              curriculum that prepares students for the digital-first economy.
              With specializations in areas like Marketing, Finance, Business
              Analytics, and Entrepreneurship, along with an AI-enabled learning
              platform, students gain practical knowledge, business insights,
              and job-ready skills to kickstart their careers. The program also
              focuses on developing analytical thinking, communication skills,
              and business decision-making abilities, making students ready for
              real-world corporate environments and future career growth
              opportunities.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
                  <div className="relative w-full h-full flex md:justify-end">
           <div className="max-w-7xl overflow-hidden md:-mr-10 relative w-full h-[250px] md:h-full">
             <Image
               src="/bennett/aboutBennett.png"
                alt="Students learning Bennett University Online BBA program"
               fill
               className="rounded-2xl md:rounded-bl-full object-cover"
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
             />
           </div>
         </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
      <SnapshotSection
        stats={[
          { value: 120, suffix: "+", label: "International Collaborations" },
          { value: 13500, suffix: "+", label: "Lives Transformed" },
          { value: 1200, suffix: "+", label: "Placement Companies" },
        ]}
      />

      <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-6xl text-left mx-auto">
          <p className="text-xl md:text-2xl font-regular lg:text-[36px] leading-normal text-gray-900">
            <span className="text-[#D03033] ">
              The 3-year Online Bachelor of Business Administration programme at
              Bennett University is designed for students who want to build a
              strong foundation in business while enjoying the flexibility of
              online learning.{" "}
            </span>
            With a learner-friendly approach, students can study at their own
            pace and gain industry-relevant knowledge without compromising on
            other academic or personal commitments.
          </p>
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
              <p className="lg:text-2xl text-[#270652] mb-1">
                Learn from Experienced Faculty & Industry Experts
              </p>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                The Bennett University Online BBA is delivered by qualified
                academicians, industry professionals, and subject experts who
                bring practical insights, real-world knowledge, and updated
                industry exposure to the learning experience.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <BookText size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <p className="lg:text-2xl text-[#270652] mb-1">
                Application-Based Learning & Practical Assessment
              </p>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                The programme emphasizes case-based learning and practical
                assessments, enabling students to understand core business
                concepts and apply them effectively in real-world business
                scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Why Choose Bennett Online BBA"
        subtitle="The Online BBA program is designed to build strong business fundamentals and prepare students for future career opportunities in a competitive business environment."
        cards={whyCards}
      />

      <SpecializationSection
        title=" Specializations & Electives"
        description={[
          "Choose from industry-relevant MBA specializations designed for career growth.",
          "Each specialization focuses on real-world skills and business applications.",
        ]}
        programName="BBA"
        specializations={specializationsData}
      />

      <SyllabusSection
        title="Bennett Online BBA Syllabus"
        subjects={subjects}
        semesters={semesters}
        semSuffix={semSuffix}
        topicsData={topicsData}
      />

      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-[32px] sm:text-4xl md:text-[54px] lg:text-[64px] font-bold text-[#270652] mb-4 md:mb-7">
            Eligibility for Bennett Online BBA
          </h2>
          {/* for Indian Students */}
          <div className="mb-5">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] mb-2 md:mb-4">
              For Domestic students
            </h3>
            <ul className="text-black text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                Applicants must have passed XII standard from any recognised Education Board with minimum 60% marks (Class XII Best of 3 subjects score) and English as compulsory subject OR IB Board with minimum score of 24 credits, 3 Higher level and 3 standard level subjects.
              </li>
            </ul>
          </div>
          {/* for Foreign Students */}
          <div className="mb-4">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] mb-2 md:mb-4">
              For International students
            </h3>
            <ul className="text-black text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                Applicants must have passed with 55% aggregate marks in grade 12th/ A level or equivalent and English language requirement (ELR)
              </li>
            </ul>
          </div>
        </div>
        {/* CTA BUTTON */}
        <div className="flex justify-center">
          <CounsellingModal>
            <button className="bg-[#F6A410] text-white font-medium text-sm px-10 py-3 rounded-lg shadow-lg transform hover:scale-105 duration-200">
              Check Your Eligibility
            </button>
          </CounsellingModal>
        </div>
      </section>

      <LearningApproach
        title="Learning Approach"
        subtitle="The Bennett University Online BBA is designed to provide a flexible and engaging learning experience for students."
        cards={learningCards}
        ctaText="Ready to Learn ? Click Here"
      />

      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter] relative">
        {/* Faded Background Heading */}
        <h2 className="absolute top-6 left-1/2 -translate-x-1/2 text-[30px] md:text-[60px] lg:text-[64px] text-[#270652]/10 opacity-90 select-none tracking-tight whitespace-nowrap">
          EXAMINATION PROCESS
        </h2>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Animated Heading */}
          <MotionWrapper
            as="h2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[56px] lg:text-[64px] font-bold text-center text-[#270652] mb-6"
          >
            EXAMINATION PROCESS
          </MotionWrapper>

          {/* Sub Text */}
          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left text-black text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-16"
          >
          The Bennett University Online BBA follows a structured and flexible examination process designed to evaluate students through continuous assessments and end-term examinations. The process focuses on both conceptual clarity and practical application, ensuring students develop strong foundational business knowledge and problem-solving skills required for real-world scenarios.
           </MotionWrapper>

          {/* Cards Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Card */}
            <MotionWrapper
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#3C087E]/5 text-white p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
            >
              <p className=" text-md md:text-2xl text-[#3C087E] font-semibold italic mb-5">
                Exam Guidelines
              </p>

              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] text-black mx-auto">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-none">✦</span>
                  <p className="text-left text-lg lg:text-2xl mb-6">
                     Students receive examination schedules and updates in advance through the learning platform.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-no">✦</span>
                  <p className="text-lg lg:text-2xl text-left">
                    Exams are conducted online, allowing students to appear conveniently from any location.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* Right Card */}
            <MotionWrapper
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#3C087E]/5 text-white p-5 flex flex-col items-center justify-center rounded-3xl shadow-xl text-center"
            >
              <p className="text-md md:text-2xl text-[#3C087E] font-semibold italic mb-5">
                Assessment Approach
              </p>
              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] text-black mx-auto">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-none">✦</span>
                  <p className="text-left text-lg lg:text-2xl mb-6">
                    The evaluation includes assignments, projects, and end-term examinations throughout the program.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-no">✦</span>
                  <p className="text-lg lg:text-2xl text-left">
                    Minimum qualifying criteria are defined by the university to maintain academic standards and performance.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <MujCareerServices benefits={benefits} />

      <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
        <div className="px-2 w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            {/* LEFT SIDE TEXT */}
            <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
              <h2 className="text-[#270652] text-[42px] md:text-[52px] font-bold leading-[110%] mb-4 ">
                Bennett University Online BBA Fees 2026
              </h2>

              {/* Subtitle */}
              <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-10">
                
The Bennett University Online BBA fees are designed to be affordable and accessible for students looking to start their career in business and management.
              </p>

              {/* CTA visible only on large screens */}
              <button className="hidden lg:flex text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit">
                Compare all Plans
              </button>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="w-full lg:w-[35%] flex justify-center">
              <FeesCarousel
                cards={[
                  {
                    title: "Annual Payment",
                    amount: "₹50,000/-",
                    sub: "No. of years 3",
                  },
                  {
                    title: "Semester Wise",
                    amount: "₹25,000/-",
                    sub: "No. of semesters 6",
                  },
                   {
                    title: "One Time Payment",
                    amount: "₹1,50,000/-",
                    sub: "No Cost EMI Option Available ",
                  },
                  {
                    title: "EMI starting at",
                    amount: "₹5,834/-",
                    sub: "per month [No cost EMI Option*]",
                  },
                ]}
              />
            </div>

            {/* CTA below carousel on mobile only */}
            <CounsellingModal>
              <button className="lg:hidden text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
                Compare all Plans
              </button>
            </CounsellingModal>
          </div>
        </div>
      </section>

       <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-[Inter]">
                         <MotionWrapper
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6 }}
                           viewport={{ once: true }}
                           className="max-w-4xl mx-auto bg-[#3C087E]/5 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
                         >
                           {/* Heading */}
                           <h2 className="text-center text-black text-2xl md:text-[40px] font-bold mb-6">
                             Note
                           </h2>
                 
                           {/* Sub-heading */}
                           <p className="text-black text-sm font-semibold md:text-base mb-6 leading-relaxed">
                             Note: To get a detailed understanding of the fee structure, contact
                             a student counsellor.
                           </p>
                 
                           {/* Bullet Points */}
                           <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
                             <li>
                               Application fee of ₹1,500 is non-refundable and must be paid during registration.
                             </li>
                             <li>
                               An amount of ₹10,000 is collected at the time of enrollment as part of the total programme fee.
                             </li>
                             <li>An examination fee of ₹800 is applicable per course attempt.</li>
                             <li>Students may need to pay additional charges during the programme duration, such as arrear fees, re-registration fees, payment gateway charges, or applicable taxes.</li>
                             <li>
                              The fee structure is subject to revision as per the university’s discretion.
      Scholarships are provided as tuition fee waivers and are granted after successful document verification.
                             </li>
                             <li>
                              Loan application charges may apply depending on the loan provider.
                             </li>
                             <li>
                               Loan terms and conditions are decided by the respective financial institution.
                             </li>
                             <li>
                              Loan cancellation charges, if any, will be applicable as per the lender’s policies.
                             </li>
                             <li>Bennett University follows the cancellation and refund policy as per UGC guidelines.</li>
                            
                           </ul>
                 
                           {/* Scholarship Policy */}
      <div className="mt-8">
        <p className="text-black text-lg md:text-xl font-bold mb-4">
          Scholarship Policy
        </p>
      
        <p className="text-black text-sm md:text-base leading-relaxed mb-3">
          <strong>Defence Scholarship - 20%</strong><br />
          Scholarship is available for defence personnel, their dependents, and wards upon submission of a valid Government of India-issued ID proof.
        </p>
      
        <p className="text-black text-sm md:text-base leading-relaxed mb-3">
          <strong>Bennett University Alumni - 10%</strong><br />
          Alumni of Bennett University are eligible for a scholarship, subject to verification of their passing certificate.
        </p>
      
        <p className="text-black text-sm md:text-base leading-relaxed">
          <strong>Divyangjan - 15%</strong><br />
          Scholarships are offered to learners with benchmark disabilities upon submission of a valid UDID card or disability certificate.
        </p>
      </div>
                         </MotionWrapper>
                       </section>
      

       <Enrollment
                   title="Admission Process"
                   subtitle="Your Path to Enrollment"
                   steps={steps}
                   defaultOpen={2} // Step 3 open by default
                 />

      <section className="w-full flex items-center justify-center pt-10 px-6 md:px-18">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] lg:gap-10">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">
              Degree Sample
            </p>

            <h2 className="text-[#270652] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
             Bennett University Online
BBA Degree Certificate
            </h2>

            <p className="text-[#3C3C43]  text-base">
             Showcase your academic achievement with an official UGC-recognized Online BBA degree from Bennett University, backed by The Times Group. This degree reflects your strong foundation in business and management, validating your skills, knowledge, and readiness for real-world career opportunities.
            </p>

            {/* IMAGE that appears ONLY on mobile, above CTA */}
            <div className="md:hidden flex justify-center">
              <Image
                src="/bennett/degree/mba.png"
                alt="Bennett University Online BBA degree certificate sample"
                width={300}
                      height={200}
                      className="w-full max-w-xs rounded-lg shadow-sm"
                      sizes="(max-width: 768px) 90vw, 300px"
                    />
            </div>

            {/* CTA BUTTON */}
            <div className="flex justify-center md:justify-start">
              <CounsellingModal>
                <button className="bg-[#F6A410] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200">
                  Know more
                </button>
              </CounsellingModal>
            </div>
          </div>

          {/* RIGHT IMAGE (visible only on md+ screens) */}
          <div className="hidden md:flex justify-center mt-5">
            <Image
              src="/bennett/degree/mba.png"
              alt="Bennett University Online BBA degree certificate sample"
              width={400}
        height={250}
        className="w-full max-w-sm rounded-lg shadow-sm"
        sizes="(max-width: 768px) 100vw, 400px"
      />
          </div>
        </div>
      </section>

      <section className="w-full bg-white mt-10 lg:mt-20 px-4 md:px-12 lg:px-20 font-[Inter]">
        {/* Small Header */}
        <MotionWrapper
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black text-lg md:text-xl mb-2"
        >
          What will you gain?
        </MotionWrapper>

        {/* Main Heading */}
        <MotionWrapper
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#270652] font-bold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
        >
          The program offers strong academics, interactive learning, and full
          flexibility to help professionals grow confidently.
        </MotionWrapper>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col  gap-5 md:gap-12">
            {/* Item 1 */}
            <MotionWrapper
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
                  Gamified assignments
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Engage in immersive roleplay simulations to solve real
                  business challenges and sharpen leadership and decision-making
                  skills.
                </p>
              </div>
            </MotionWrapper>

            {/* Item 2 */}
            <MotionWrapper
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
                  Internship Opportutnities
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Access curated internships with top companies to gain real
                  experience and boost your career prospects.
                </p>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 md:gap-12">
            {/* Item 3 */}

            <MotionWrapper
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
                  Pan India campus access & offline events
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Balance work and study with a fully online program featuring
                  live/recorded classes, remote exams, and 24/7 support.
                </p>
              </div>
            </MotionWrapper>

            {/* Item 4 */}
            <MotionWrapper
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
                  Access to Campus Life
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Connect, collaborate, and join clubs through the beSocial app
                  - your virtual student community.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-10 lg:py-20 md:px-12 lg:px-20">
        <div className="w-full md:bg-[#270652] rounded-4xl py-12 px-6 md:px-12 lg:px-15">
          <MotionWrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] md:p-12 max-w-7xl mx-auto"
          >
            {/* Title */}
            <div className="text-center md:mb-4 pb-3">
              <MotionWrapper
                as="h2"
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
              </MotionWrapper>
            </div>

            {/* Subtitle */}
            <MotionWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-black text-[18px] md:text-[20px] max-w-4xl mx-auto md:mb-12"
            >
              The Bennett University Online BBA opens doors to a wide range of career opportunities for students starting their journey in business and management. With a strong foundation in core business concepts and practical learning, this online BBA equips students with essential skills required for entry-level roles and long-term career growth in various industries.
            </MotionWrapper>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT IMAGE */}
              <MotionWrapper
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <Image
                  src="/nmimsCareer.png"
                  width={400}
                  height={400}
                  alt="Career options after Bennett Online BBA like marketing and business roles"
                  className="
                         w-full 
                         mt-10
                         sm:mt-0
                         max-w-[260px]  /* Medium screens */
                         lg:max-w-[400px]   /* Large screens */
                         object-contain
                         rounded-2xl
                         mx-auto
                       "
                />
              </MotionWrapper>

              {/* RIGHT LIST */}
              <MotionWrapper
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                {[
                  "Business Executive",
                  "Marketing Executive",
                  "Human Resource Executive",
                  "Sales Executive",
                  "Business Analyst",
                ].map((role, index) => (
                  <MotionWrapper
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
                  </MotionWrapper>
                ))}

                {/* CTA */}
                <CounsellingModal>
                  <button
                    className="
                    w-[200px] 
                    mt-6 py-3 px-6 
                    rounded-lg 
                    hover:scale-105
                    text-white text-sm 
                    bg-[#F6A410]
                    self-center md:self-start
                    shadow-lg
                  "
                  >
                    Know more
                  </button>
                </CounsellingModal>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </section>

       <UnivCourses
                          heading="Bennett University Online Courses"
                          courses={[
                            {
                              id: 1,
                              universityLogo: "/bennett.png",
                              universityName: "Bennett",
                              title: "Master of Business Administration",
                              subtitle: "Bennett University",
                              tag: "Most-Loved",
                              duration: "2 years",
                              validity: "4 years",
                              coursePath: "/bennett/bennett-online-mba",
                            },
                             {
                              id: 2,
                              universityLogo: "/bennett.png",
                              universityName: "Bennett",
                              title: "Bachelor of Business Administration",
                              subtitle: "Bennett University",
                              tag: "Most-Loved",
                              duration: "3 years",
                              validity: "6 years",
                              coursePath: "/bennett/bennett-online-bba",
                            },
                          ]}
                        />
      

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ServicesByRadhya />

      <section className="w-full px-4 md:px-10 lg:px-20 py-10">
        {/* TITLE */}
        <h2 className="text-[#270652] font-bold flex flex-row items-center justify-center font-[Inter] md:text-[42px] text-[36px] mb-8">
          Important Dates
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-hidden">
          {/* HEADER ROW */}
          <div className=" max-w-5xl flex items-center justify-center bg-[#D68E0E]/10 text-[#D68E0E] font-semibold text-center m-auto px-10 lg:px-30 py-8 text-[14px] md:text-[24px] rounded-xl">
            <p>ADMISSION OPEN FOR JANUARY 26 SESSION</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}

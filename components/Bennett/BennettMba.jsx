
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
  GlobeLockIcon,
  FileUser,
} from "lucide-react";
import CounsellingModal from  "../Radhya/CounsellingModal";
import MotionWrapper from "../Radhya/MotionWrapper";
import SyllabusSection from "../NmimsSection/Syllabus";
import FeesCarousel from "../NmimsSection/FeesCrousel";
import React from "react";
import SpecializationSection from "../Programs/SpecializationSection";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import Faculties from "../NmimsSection/Faculties";
import MujCareerServices from "../NmimsSection/MujCareerServices";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Link from "next/link";
import UnivCourses from "../Radhya/UnivCourses";
import SnapshotSection from "../NmimsSection/SnapshotSection";

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


  const faqs = [
  {
    q: "Is Bennett University Online MBA valid?",
    a: "Yes, the Bennett University Online MBA is UGC-approved and recognized, making it valid for jobs and higher education.",
  },
  {
    q: "What is the fee for Bennett University Online MBA?",
    a: "The total fee for the Bennett Online MBA is approximately ₹2,10,000, with EMI options available for easy payment.",
  },
  {
    q: "Is Bennett Online MBA good for working professionals?",
    a: "Yes, the program is designed for working professionals with flexible learning, recorded lectures, and online assessments.",
  },
  {
    q: "What is the duration of Bennett University Online MBA?",
    a: "The duration of the program is 2 years, divided into multiple semesters.",
  },
  {
    q: "What specializations are offered in Bennett Online MBA?",
    a: "Specializations include Marketing, Finance, HR, Business Analytics, Media Management, and Logistics & Supply Chain.",
  },
  {
    q: "Does Bennett University provide placement support for Online MBA?",
    a: "Yes, career support services like resume building, interview preparation, and job assistance are provided.",
  },
  {
    q: "Is there any entrance exam required for Bennett Online MBA?",
    a: "Generally, no entrance exam is required; admission is based on eligibility criteria.",
  },
  {
    q: "Can I do Bennett Online MBA while working?",
    a: "Yes, the program is fully online and flexible, allowing you to study while continuing your job.",
  },
  {
    q: "What is the eligibility for Bennett University Online MBA?",
    a: "Candidates must have a graduation degree with minimum required marks from a recognized university.",
  },
  {
    q: "Is Bennett University a good option for Online MBA?",
    a: "Yes, Bennett University, backed by The Times Group, offers industry-aligned programs with modern learning methods.",
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
    slug: "sales",
    specialization_name: "Sales and Marketing",
    cover_image: "/specializations/marketing.png",
  },
  {
    slug: "finance",
    specialization_name: "Finance",
    cover_image: "/specializations/finance.png",
  },
  {
    slug: "media",
    specialization_name: "Media Management",
    cover_image: "/specializations/media.png",
  },
  {
    slug: "business",
    specialization_name: "Business Analytics",
    cover_image: "/specializations/analytics.png",
  },
  {
    slug: "hr",
    specialization_name: "Human Resource Management",
    cover_image: "/specializations/hr.png",
  },
   {
    slug: "logistics",
    specialization_name: "Logistics & Supply Chain Management",
    cover_image: "/specializations/supply.png",
  },
];

  const subjects = [
{ id: 1, name: "Sales and Marketing" },
{ id: 2, name: "Finance" },
{ id: 3, name: "Media Management" },
{ id: 4, name: "Business Analytics" },
{ id: 5, name: "Human Resource Management" },
{ id: 6, name: "Logistics & Supply Chain Management" },
]

const semesters = [1, 2, 3, 4];
const semSuffix = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
  };

const topicsData = {
    1: {
    1: [
      "Managerial Economics",
      "Managerial Communication",
      "Marketing for Managers",
      "Quantitative Methods for Managers",
      "Organizational Dynamics",
      "Machine Learning for Managers",
      "Indian Knowledge System"
    ],
    2: [
      "Business Law",
      "Financial Accounting and Analysis",
      "Human Capital Management",
      "Operations Management",
      "Strategy for Managers",
      "Adaptive Change and Resilience",
      "Emotional Intelligence & Resonant Leadership"
    ],
    3: [
      "Applied Business Research",
      "Professional Ethics, Sustainability and Social Responsiveness",
      "Elective 1",
      "Elective 2",
      "Elective 3",
      "Digital Transformation"
    ],
    4: [
      "Entrepreneurial Mindset and Innovation",
      "Corporate Finance",
      "Project",
      "Elective 4",
      "Elective 5",
      "Managerial Skills"
    ]
},

  2: {
    1: [
      "Managerial Economics",
      "Managerial Communication",
      "Marketing for Managers",
      "Quantitative Methods for Managers",
      "Organizational Dynamics",
      "Machine Learning for Managers",
      "Indian Knowledge System"
    ],
    2: [
      "Business Law",
      "Financial Accounting and Analysis",
      "Human Capital Management",
      "Operations Management",
      "Strategy for Managers",
      "Adaptive Change and Resilience",
      "Emotional Intelligence & Resonant Leadership"
    ],
    3: [
      "Applied Business Research",
      "Professional Ethics, Sustainability and Social Responsiveness",
      "Elective 1",
      "Elective 2",
      "Elective 3",
      "Digital Transformation"
    ],
    4: [
      "Entrepreneurial Mindset and Innovation",
      "Corporate Finance",
      "Project",
      "Elective 4",
      "Elective 5",
      "Managerial Skills"
    ]
  },
  3: {
    1: [
      "Managerial Economics",
      "Managerial Communication",
      "Marketing for Managers",
      "Quantitative Methods for Managers",
      "Organizational Dynamics",
      "Machine Learning for Managers",
      "Indian Knowledge System"
    ],
    2: [
      "Business Law",
      "Financial Accounting and Analysis",
      "Human Capital Management",
      "Operations Management",
      "Strategy for Managers",
      "Adaptive Change and Resilience",
      "Emotional Intelligence & Resonant Leadership"
    ],
    3: [
      "Applied Business Research",
      "Professional Ethics, Sustainability and Social Responsiveness",
      "Elective 1",
      "Elective 2",
      "Elective 3",
      "Digital Transformation"
    ],
    4: [
      "Entrepreneurial Mindset and Innovation",
      "Corporate Finance",
      "Project",
      "Elective 4",
      "Elective 5",
      "Managerial Skills"
    ]
  },
   4: {
    1: [
      "Managerial Economics",
      "Managerial Communication",
      "Marketing for Managers",
      "Quantitative Methods for Managers",
      "Organizational Dynamics",
      "Machine Learning for Managers",
      "Indian Knowledge System"
    ],
    2: [
      "Business Law",
      "Financial Accounting and Analysis",
      "Human Capital Management",
      "Operations Management",
      "Strategy for Managers",
      "Adaptive Change and Resilience",
      "Emotional Intelligence & Resonant Leadership"
    ],
    3: [
      "Applied Business Research",
      "Professional Ethics, Sustainability and Social Responsiveness",
      "Elective 1",
      "Elective 2",
      "Elective 3",
      "Digital Transformation"
    ],
    4: [
      "Entrepreneurial Mindset and Innovation",
      "Corporate Finance",
      "Project",
      "Elective 4",
      "Elective 5",
      "Managerial Skills"
    ]
  },
 5: {
    1: [
      "Managerial Economics",
      "Managerial Communication",
      "Marketing for Managers",
      "Quantitative Methods for Managers",
      "Organizational Dynamics",
      "Machine Learning for Managers",
      "Indian Knowledge System"
    ],
    2: [
      "Business Law",
      "Financial Accounting and Analysis",
      "Human Capital Management",
      "Operations Management",
      "Strategy for Managers",
      "Adaptive Change and Resilience",
      "Emotional Intelligence & Resonant Leadership"
    ],
    3: [
      "Applied Business Research",
      "Professional Ethics, Sustainability and Social Responsiveness",
      "Elective 1",
      "Elective 2",
      "Elective 3",
      "Digital Transformation"
    ],
    4: [
      "Entrepreneurial Mindset and Innovation",
      "Corporate Finance",
      "Project",
      "Elective 4",
      "Elective 5",
      "Managerial Skills"
    ]
  },
  6: {
    1: [
      "Managerial Economics",
      "Managerial Communication",
      "Marketing for Managers",
      "Quantitative Methods for Managers",
      "Organizational Dynamics",
      "Machine Learning for Managers",
      "Indian Knowledge System"
    ],
    2: [
      "Business Law",
      "Financial Accounting and Analysis",
      "Human Capital Management",
      "Operations Management",
      "Strategy for Managers",
      "Adaptive Change and Resilience",
      "Emotional Intelligence & Resonant Leadership"
    ],
    3: [
      "Applied Business Research",
      "Professional Ethics, Sustainability and Social Responsiveness",
      "Elective 1",
      "Elective 2",
      "Elective 3",
      "Digital Transformation"
    ],
    4: [
      "Entrepreneurial Mindset and Innovation",
      "Corporate Finance",
      "Project",
      "Elective 4",
      "Elective 5",
      "Managerial Skills"
    ]
  },
 };

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
    },{
      logo: GlobeLockIcon,
      heading: "Expert Mentorship",
      subheading:
        "Learn from experienced faculty and industry experts who provide practical insights and real-world business exposure.",
    },{
      logo: SplinePointer,
      heading: "Career Upskilling",
      subheading:
        "Enhance your professional profile with advanced business knowledge and leadership cailities for career growth.",
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
      title: "Access to Job Portal",
      text: "Get access to curated job opportunities and career platforms to explore relevant roles, apply easily, and enhance your professional visibility.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Coaching",
      text: "Receive one-on-one personalised career guidance from experts to plan your growth strategy, switch roles, and achieve your professional goals.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />
      ),
      title: "Profile Development",
      text: "Get expert support in building your resume, improving your LinkedIn profile, and strengthening your personal brand to increase shortlisting chances.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#F6A104] w-18 h-18" />,
      title: "Practice Interviews",
      text: "Participate in mock interview sessions with experts to improve confidence, communication skills, and performance in real job interviews.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Assessment",
      text: "Evaluate your aptitude, technical, and behavioural skills through assessments to identify strengths and align with suitable career opportunities.",
    },
    {
      icon: (
        <BriefcaseBusiness
          strokeWidth={1.0}
          className="text-[#F6A104] w-18 h-18"
        />
      ),
      title: "Interactive Learning Experience",
      text: "Engage in live sessions, discussions, and practical assignments that enhance understanding and help apply concepts in real-world scenarios.",
    },
  ];

  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "4", label: "Years validity" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
        <section className="relative min-h-[50vh] w-full ">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/bennett/bennett_Univ.jpg"
                    alt="Bennett University campus building for Online MBA program"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/80" />
                </div>
                {/* LOGO - move to left screen edge, keep same height */}
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
                   {/* Most Loved */}
                                 <MotionWrapper
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-block bg-[#FFB901] text-white text-[12px] lg:text-[18px] mt-8 lg:mt-6  mb-2 font-sm px-2 lg:px-4 md:py-1 rounded-full"
                                 >
                                   Most-Loved
                                 </MotionWrapper>
                  {/* Subtext */}
                  <MotionWrapper
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-white text-[12px] md:text-[16px] italic font-light"
                  >
                     Master of Business Administration
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
                     Bennett University Online MBA 2026: Fees, Admission, Eligibility, Syllabus & Review
                    </MotionWrapper>
        
                    <MotionWrapper
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-gray-200 text-left text-[10px] md:text-[16px] lg:text-[18px] max-w-5xl mt-0 lg:mb-5 leading-relaxed"
                    >
                    Advance your career with Bennett University's Online MBA, powered by The Times Group. Explore fees, eligibility, specializations, and career opportunities.
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
        
        
                    {/* BUTTONS - CENTERED */}
                    <MotionWrapper
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                      className="flex flex-row gap-2 md:gap-4 mt-8 lg:mt-12 w-full items-center justify-center"
                    >
                          <CounsellingModal>
               <button className="flex items-center justify-center gap-2  bg-[#3D077E] border-0 border-transparent shadow-[#FFFFFF]/35 transform  text-white  shadow-md
                   transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-100 text-[12px] md:text-[16px] xl:text-[22px] px-2 py-2 md:px-6 md:py-3 whitespace-nowrap rounded-lg hover:bg-blue-950 font-medium">
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
                  <section className="w-full bg-white pt-0 p-10">
                    {/* ======= ABOUT Bennett SECTION ======= */}
                    <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
                      {/* LEFT TEXT */}
                      <div>
                         <h2 className="text-[32px] md:text-4xl lg:text-5xl mt-15 font-bold text-[#0C549E] mb-6">
                         About <span className="text-[#D03033] ">Bennett Online MBA </span>
                        </h2>
            
                        <p className="text-black leading-relaxed text-sm md:text-[18px] mb-10">
                        The Bennett University Online MBA is a UGC-approved, 2-year postgraduate program designed for working professionals and graduates aiming to advance their careers. Offered by Bennett University, backed by The Times Group, this program combines academic excellence with industry-relevant learning. It features a flexible, 100% online format, allowing learners to study at their own pace without interrupting their professional commitments. With specializations in areas like Marketing, Finance, HR, and Business Analytics, along with an AI-enabled learning platform and practical curriculum, the program equips students with the skills needed to succeed in today’s dynamic business environment.
                        </p>
                        </div>
            
                      {/* RIGHT IMAGE WITH CURVED SHAPE */}
                      <div className="relative w-full h-full flex md:justify-end  ">
                        <div className="max-w-7xl overflow-hidden  lg:-mr-10">
                          <img
                            src="/bennett/aboutBennett.png"
                            alt="Students studying Bennett University Online MBA program"
                            className="w-full h-full rounded-2xl md:rounded-bl-full object-content"
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
                         The 2-year Online Master of Business Administration programme at Bennett University is designed for working professionals who seek flexibility without compromising their career or personal commitments.  {" "}
                        </span>
                        With a fully online format, learners can study at their own pace while gaining industry-relevant knowledge and practical business skills needed in today’s digital economy..</p>
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
                           Learn from Industry-Experienced Faculty
                          </p>
                          <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                        Bennett University's Online MBA is delivered by experienced academicians, industry experts, and professionals who bring real-world insights, practical exposure, and updated knowledge to every session.
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
                          <p className="lg:text-2xl text-[#270652] mb-1">
                            Application-Based Learning & Assessment
                          </p>
                          <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                          The programme focuses on case-based learning and practical assessments, enabling students to apply theoretical concepts to real business scenarios and develop strong problem-solving and decision-making skills.
                           </p>
                         
                        </div>
                      </div>
                    </div>
                  </section>

      <WhyChooseUs title="Why Choose Bennett Online MBA"  subtitle="The Online MBA program is designed to provide flexibility, practical exposure, and career growth opportunities for professionals in a digital-first economy." cards={whyCards}  />


 <SpecializationSection
  title="Specializations & Electives"
  description={[
    "The Bennett University Online MBA offers industry-aligned specialisations designed to match current market demands and future career opportunities. Students can choose a specialization based on their interests and career goals, gaining in-depth knowledge and practical skills to stand out in a competitive business environment.",
  ]}
  programName="MBA"
  specializations={specializationsData}
/>

          <SyllabusSection
  title="Bennett Online MBA Syllabus"
  subjects={subjects}
  semesters={semesters}
  semSuffix={semSuffix}
  topicsData={topicsData}
/>


      <section className="w-full font-[Inter] px-4 md:px-10 lg:px-20 py-12">
        <div className="p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-[32px] sm:text-4xl md:text-[54px] lg:text-[64px] font-bold text-[#270652] mb-4 md:mb-7">
            Eligibility for Bennett Online MBA
          </h2>
          {/* for Indian Students */}
          <div className="mb-5">
              <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] mb-2 md:mb-4">
              For Domestic students
            </h3>
            <ul className="text-black text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>
                Applicants must have completed graduation in any discipline from a UGC-recognized university with a minimum of 50% aggregate marks. The medium of instruction should be English to ensure smooth participation in the program.
              </li>
              
            </ul>
          </div>
          {/* for Foreign Students */}
          <div className="mb-4">
            <h3 className="text-[20px] md:text-3xl lg:text-5xl italic text-[#3C087E] mb-2 md:mb-4">
              For International students
            </h3>
            <ul className="text-black text-[12px] list-disc px-5 space-y-2 md:space-y-4 md:text-2xl xl:text-[32px] mb-2 md:mb-5 leading-tight">
              <li>International applicants must have secured at least 50% marks in their qualifying examination and should have studied relevant prerequisite subjects required for admission into the chosen program.</li>
            </ul>
          </div>
        </div>
         {/* CTA BUTTON */}
                <div className="flex justify-center">
 <CounsellingModal>
   <button
    className="bg-[#F6A410] text-white font-medium text-sm px-10 py-3 rounded-lg shadow-lg transform hover:scale-105 duration-200"
  >
    Check Your Eligibility
  </button>
 </CounsellingModal>
</div>
      </section>

      <LearningApproach
        title="Learning Approach"
        subtitle="The Bennett University Online MBA is designed to help working professionals maintain a perfect work-life-study balance through a flexible and technology-driven learning experience."
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
                                            The Bennett University Online MBA follows a structured and flexible examination process designed to evaluate students through continuous assessments and end-term examinations. The evaluation focuses on both theoretical understanding and practical application of business concepts, making it suitable for working professionals pursuing an online MBA.
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
                                                   Students receive examination schedules, guidelines, and updates through the online learning platform.
                                                  </p>
                                                </div>
                                
                                                {/* POINT 2 */}
                                                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                                                  <span className="text-lg lg:text-2xl leading-no">✦</span>
                                                  <p className="text-lg lg:text-2xl text-left">
                                                   Examinations are conducted in an online mode, allowing students to appear from any location with ease.
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
                                                   The evaluation includes a combination of assignments, projects, and end-term examinations.
                                                  </p>
                                                </div>
                                
                                                {/* POINT 2 */}
                                                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                                                  <span className="text-lg lg:text-2xl leading-no">✦</span>
                                                  <p className="text-lg lg:text-2xl text-left">
                                                   Minimum qualifying criteria are defined by the university to ensure academic standards are maintained.
                                                  </p>
                                                </div>
                                              </div>
                                             
                                            </MotionWrapper>
                                          </div>
                                        </div>
                                      </section>
                                
                                     
     
           <MujCareerServices benefits={benefits}/>
     
           <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
             <div className="px-2 w-full">
               <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                 {/* LEFT SIDE TEXT */}
                 <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
                   <h2 className="text-[#270652] text-[42px] md:text-[56px] font-bold leading-[110%] mb-4 ">
                     Fees Structure for Bennett Online MBA
                   </h2>
     
                   {/* Subtitle */}
                   <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl md:mb-10">
                   The Bennett University Online MBA fees are designed to be affordable and flexible for students, working professionals, and others.
                    
                   </p>
     
                   {/* CTA visible only on large screens */}
                   <button className="hidden lg:flex text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit">
                     Compare all Plans
                   </button>
                 </div>
     
                 {/* RIGHT SIDE CARDS */}
                 <div className="w-full lg:w-[35%] flex justify-center">
                   <FeesCarousel
                   cards = {[
        {
          title: "Annual Payment",
          amount: "₹1,05,000/-",
          sub: "No. of Years 2",
        },
        {
          title: "Semester Wise",
          amount: "₹52,500/-",
          sub: "No. of Semesters 4",
        },
        {
          title: "One Time Fees",
          amount: "₹2,10,000/-",
          sub: "No Cost EMI Option Available",
        },
        {
          title: "EMI starting at",
          amount: "₹8,334/-",
          sub: "per month [No Cost EMI Option*]",
        },
      ]} 
      />
                 </div>
     
                 {/* CTA below carousel on mobile only */}
                <CounsellingModal>
                   <button className="lg:hidden text-white bg-[#F6A104] border-0 border-transparent font-medium px-6 py-2 rounded-md shadow-md transform hover:scale-105 duration-200 w-fit mx-auto mt-3">
                   Compare all Plans
                 </button></CounsellingModal>
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

       <section className="w-full flex items-center justify-center px-6 pt-10 md:px-18">
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] lg:gap-10">
               {/* LEFT CONTENT */}
               <div className="space-y-5">
                 <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">
                   Degree Sample
                 </p>
     
                 <h2 className="text-[#270652] text-[32px] md:text-[40px] lg:text-[64px] font-bold leading-tight">
                   Bennett University
                   Online MBA Degree
                   Certificate
                 </h2>
     
                 <p className="text-[#3C3C43] text-base">
                  Showcase your professional achievement with an official UGC-recognized Online MBA degree from Bennett University, backed by The Times Group.
                 </p>
     
                 {/* IMAGE that appears ONLY on mobile, above CTA */}
                 <div className="md:hidden flex justify-center">
                   <img
                     src="/bennett/degree/mba.png"
                     alt="Bennett University Online MBA degree certificate sample"
                     className="w-full max-w-xs rounded-lg shadow-sm"
                   />
                 </div>
     
                 {/* CTA BUTTON */}
                <div className="flex justify-center md:justify-start">
 <CounsellingModal>
   <button
    className="bg-[#F6A410] text-white font-medium text-sm px-10 py-2 rounded-lg shadow-lg transform hover:scale-105 duration-200"
  >
    Know more
  </button>
 </CounsellingModal>
</div>

               </div>
     
               {/* RIGHT IMAGE (visible only on md+ screens) */}
               <div className="hidden md:flex justify-center mt-5">
                 <img
                   src="/bennett/degree/mba.png"
                   alt="Bennett University Online MBA degree certificate sample"
                   className="w-full max-w-sm rounded-lg shadow-sm"
                 />
               </div>
             </div>
           </section>
     
           <section className="w-full bg-white mt-20 px-4 md:px-12 lg:px-20 font-[Inter]">
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
                      Engage in immersive roleplay simulations to solve real business challenges and sharpen leadership and decision-making skills.
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
                       Access curated internships with top companies to gain real experience and boost your career prospects.
                     </p>
                   </div>
                 </MotionWrapper>
                 
               </div>
     
               {/* RIGHT COLUMN */}
               <div className="flex flex-col  gap-5 md:gap-12">
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
                       Balance work and study with a fully online program featuring live/recorded classes, remote exams, and 24/7 support.
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
                       Connect, collaborate, and join clubs through the beSocial app - your virtual student community.
                     </p>
                   </div>
                 </MotionWrapper>
               </div>
             </div>
           </section> 

           <section className="w-full bg-white py-16 md:px-12 lg:px-20">
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
                   className="text-center text-black text-[18px] md:text-[20px] max-w-2xl mx-auto md:mb-12"
                 >
                   The Bennett University Online MBA opens doors to diverse career opportunities across industries. Designed with an industry-aligned curriculum and practical learning approach, this online MBA equips students with in-demand business, management, and leadership skills required to succeed in today’s competitive job market.
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
                       alt="Job roles after completing Bennett Online MBA like manager and analyst"
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
                       "Senior Project Manager",
                       "Business Development Manager",
                       "Financial Analyst",
                       "Investment Analyst",
                       "Human Resource Manager ",
                       "Marketing Manager",
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
                </button></CounsellingModal>
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

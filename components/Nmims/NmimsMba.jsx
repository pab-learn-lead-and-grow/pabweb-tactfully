
import Image from "next/image";
import {
  Download,
  Briefcase,
  BookOpenCheck,
  SplinePointer,
  Speech,
  GlobeLock,
  Users,
  GraduationCap,
  LayoutGrid,
  Check,
  ChevronsDown,
  ChevronRight,
  ArrowRight,
  FileClock,
  BookCheck,
  Headset,
  FileUser,
} from "lucide-react";
import MotionWrapper from "../Radhya/MotionWrapper";
import FeesCarousel from "../NmimsSection/FeesCrousel";
import SnapshotSection from "../NmimsSection/SnapshotSection";
import SyllabusSection from "../NmimsSection/Syllabus";
import CounsellingModal from "../Radhya/CounsellingModal";
import React from "react";
import CareerServices from "../NmimsSection/CareerServices";
import Enrollment from "../NmimsSection/Enrollment";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import LearningApproach from "../NmimsSection/LearningApproach";
import Faculties from "../NmimsSection/Faculties";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";

export default function Page() {

  const whyCards = [
    {
      logo: Users,
      heading: "Foundation",
      subheading:
        "Deepen your understanding of key management concepts and sharpen your ability to critically analyse and solve real-world business challenges.",
    },
    {
      logo: BookOpenCheck,
      heading: "Specializations",
      subheading:
        "Choose from marketing, finance, or business analytics to shape your career trajectory with the right specialization.",
    },
    {
      logo: SplinePointer,
      heading: "Flexible",
      subheading:
        "Experience seamless learning through an integrated platform accessible on any device study whenever and however you prefer.",
    },
    {
      logo: Speech,
      heading: "Mentorship",
      subheading:
        "Learn from top academicians and industry leaders who guide you with practical knowledge and deep professional experience.",
    },
    {
      logo: GlobeLock,
      heading: "Industry-Ready",
      subheading:
        "Gain the skills to develop and apply business models and frameworks to solve real-world business challenges.",
    },
    {
      logo: FileUser,
      heading: "Upskill",
      subheading:
        "Master practical business tools and strategic frameworks that empower you to solve complex challenges and drive meaningful results in the real world.",
    },
  ];

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

  

  const learningCards = [
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
      desc: "Receive quick assistance through chat, ticketing, and call-back options ensuring smooth learning.",
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

  const subjects = [
    { id: 1, name: "Business Management" },
    { id: 2, name: "Marketing Management" },
    { id: 3, name: "Financial Management" },
    { id: 4, name: "HR Management" },
    { id: 5, name: "Operation and Data Science Management" },
  ];

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
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost and Management Accounting",
        "Human resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations Management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Information Systems for Management",
        "Consumer Behaviour",
        "Organisational Theory, Structure & Design",
        "Supply Chanin Management",
      ],
      4: [
        "Indian Ethos and Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Digital Marketing",
        "Entrepreneurship & Venture Capital Management",
        "Project Management",
      ],
    },
    2: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Brand Management",
        "Consumer Behaviour",
        "Integrated Marketing Communications",
        "Sales Management",
      ],
      4: [
        "Indian Ethos and Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Digital Marketing",
        "Services Marketing",
        "International Marketing",
      ],
    },
    3: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Capital Market & Portfolio Management",
        "Business valuation",
        "Financial Derivatives",
        "Strategic Cost Management",
      ],
      4: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Corporate Tax Planning",
        "Investment Banking",
        "International Finance",
      ],
    },
    4: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Compensation & Benefits",
        "Industrial Relations & Labour Laws",
        "Manpower Planning, Recruitment & Selection",
        "Organisational Development & Change",
      ],
      4: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Performance Management System",
        "Learning & Development",
        "Emotional Intelligence",
      ],
    },
    5: {
      1: [
        "Business Communication",
        "Financial Accounting",
        "Micro Economics and Macro Economics",
        "Organizational Behaviour",
        "Marketing Management",
        "Quantitative Methods-I",
      ],
      2: [
        "Cost & Management Accounting",
        "Human Resource Management",
        "Strategic Management",
        "Business Analytics",
        "Legal Aspects of Business",
        "Operations management",
      ],
      3: [
        "Corporate Finance",
        "Research Methodology",
        "Project Pre-Work",
        "Research Methodology",
        "Strategic Applications of IOT & Big Data",
        "Strategic Applications and E-procurement",
        "Supply Chain Management",
      ],
      4: [
        "Indian Ethos & Ethics",
        "Corporate Sustainability",
        "International Business",
        "Project",
        "Operational Analytics",
        "Total Quality Management",
        "EDA & Data Visualization",
      ],
    },
  };
  const stats = [
    { value: "2", label: "Years Duration" },
    { value: "4", label: "Semesters" },
    { value: "4", label: "Years Validity" },
    { value: "IA + TEE", label: "Evaluation" },
  ];
  return (
    <main className="flex flex-col items-center w-full bg-white">
     <section className="relative min-h-[50vh] w-full ">
             {/* Background Image */}
             <div className="absolute inset-0">
               <Image
                 src="/nmims/nmimsUniv.png"
                 alt="Campus"
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
               src="/nmims.png"
               alt="NMIMS Logo"
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
                 className="inline-block bg-[#FFB901] text-white text-[12px] lg:text-[18px] mt-8 lg:mt-6  mb-2 font-sm px-4 py-1 rounded-full"
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
                   className="text-white text-[20px] md:text-4xl lg:text-5xl xl:text-[64px] font-[Inter] font-bold mt-1 leading-tight"
                 >
                   NMIMS Online MBA
                 </MotionWrapper>
     
                 <MotionWrapper
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.7, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="text-gray-200 text-left text-[10px] md:text-[16px] lg:text-[18px] max-w-7xl mt-0 lg:mb-5 leading-relaxed"
                 >
                 NMIMS is one of India’s leading management universities, known for its academic excellence and global recognition. Through Radhya Education Academy, you get access to its Online MBA a program designed for working professionals who want to learn from the best and achieve measurable career growth.
                 </MotionWrapper>
     
                 {/* STATS */}
                 <MotionWrapper
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.7 }}
                   viewport={{ once: true }}
                   className="grid grid-cols-2 mt-5 md:grid-cols-2 lg:grid-cols-4 lg:-mx-5 xl:-mx-15 gap-y-5 font-[Inter] w-full"
                 >
                   {stats.map((stat, idx) => (
                     <div
                       key={idx}
                       className={`text-center py-2 lg:py-6 
       ${idx % 2 === 0 ? "border-r-2 border-white" : ""} 
       ${idx !== stats.length - 1 ? "lg:border-r-2 lg:border-white" : ""}
     `}
                     >
                       <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-1">
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
      <section className="w-full bg-white p-10 pt-0">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl mt-15 lg:text-[64px] font-bold text-[#270652] mb-6">
              About NMIMS
            </h2>

            <p className="text-black leading-relaxed text-xs lg:text-[18px] mb-10">
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
            <div className="max-w-7xl overflow-hidden md:-mr-10">
              <img
                src="/nmims/aboutNmims.png"
                alt="Students"
                className="w-full h-full rounded-2xl md:rounded-bl-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
               <SnapshotSection
  stats={[
    { value: 25, suffix: "%", label: "Average Salary Growth" },
    { value: 82000, label: "Strong Global Alumni Network" },
    { value: 500, suffix: "+", label: "Hiring Partners" },
  ]}
/>
      <section className="w-full bg-white p-10 py-12 flex flex-col lg:mb-20 gap-12">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-6xl text-left mx-auto">
          <p className="text-xl md:text-2xl font-regular lg:text-[42px] leading-normal text-gray-900">
            <span className="text-red-600 ">
              The 2-year Online Master of Business Administration{" "}
            </span>
            programme is designed to provide working professionals the
            flexibility to pace the programme to fit their schedule, without the
            need to de-prioritise their professional or personal commitments.
          </p>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <GraduationCap size={92} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <p className="lg:text-2xl text-[#270652] mb-1">
                Learn from faculty that sparks thinking minds
              </p>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                NMIMS CDOE academic reputation is upheld by a team of top
                academicians, Ph.D. holders, scholars, industry veterans, and
                practitioners who hold valuable insights about the curriculum
                and the industry.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 ">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <LayoutGrid size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <p className="lg:text-2xl text-[#270652] mb-1">
                Case-Based and Application-oriented Assessment
              </p>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                Programme participants are assessed and evaluated for their
                learning in both theoretical and application-based areas, thus
                gauging their ability to analyse and deploy appropriate
                solutions to real-world business problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs title="Why Choose NMIMS Online MBA" cards={whyCards} />
      

    <SyllabusSection
  title="NMIMS Online MBA Syllabus"
  subjects={subjects}
  semesters={semesters}
  semSuffix={semSuffix}
  topicsData={topicsData}
/>


<section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        <div className="max-w-7xl mx-auto">
          {/* Title animation */}
          <MotionWrapper
          as="h2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
          >
            Eligibility for NMIMS Online MBA
          </MotionWrapper>

          {/* Card container */}
          <MotionWrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col md:flex-row max-w-7xl items-center gap-20"
          >
            {/* Left text */}
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black  text-[20px] md:text-3xl font-medium leading-tight md:w-3/5"
            >
              Bachelor's Degree (10+2+3) in any discipline from recognized University or an equivalent degree recognised by Association of Indian Universities (AIU) with a minimum of 55% and 3 + years of Work Experience (50% for SC/ST/OBC/PwD).
            </MotionWrapper>

            {/* Right image animation */}
            <MotionWrapper
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-[40%] w-full flex justify-end pr-0 md:pr-0"
            >
              <img
                src="/nmims/nmimsEligibility.png"
                alt="Eligibility Illustration"
              className="w-full max-w-[420px] md:max-w-[520px] h-auto rounded-xl object-contain"
      
              />
            </MotionWrapper>
          </MotionWrapper>
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
        <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[30px] md:text-[60px] lg:text-[64px] text-[#270652]/10 opacity-90 select-none tracking-tight whitespace-nowrap">
          EXAMINATION PROCESS
        </p>

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
            className="text-left text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16"
          >
            The NMIMS Online MBA follows a structured and transparent
            examination process designed to evaluate learners through continuous
            assessments and end-term evaluations.
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
              <p className="text-[#270652] text-md md:text-2xl font-semibold italic mb-5">
                Exam Slot Booking
              </p>

              {/* Bulleted list with ICON COLUMN + TEXT COLUMN */}
              <div className="space-y-5 text-lg leading-relaxed max-w-[380] mx-auto text-black">
                {/* POINT 1 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start ">
                  <span className="text-lg lg:text-2xl leading-none">✦</span>
                  <p className="text-left text-lg lg:text-2xl mb-6">
                    Time-table will be assigned to the candidates prior to examination.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-[30px_auto] gap-3 items-start">
                  <span className="text-lg lg:text-2xl leading-no">✦</span>
                  <p className="text-lg lg:text-2xl text-left">
                    Candidates must be present at an already allotted time slot
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
              <p className="text-[#270652] text-lg md:text-2xl font-semibold italic mb-5">
                Exam Slot Timings
              </p>

              <p className="text-lg lg:text-2xl max-w-[380] mb-6 text-center text-black">
                For end-term examinations, NMIMS provides three available slots:
              </p>

              {/* Exam Time Circles */}
              <div className="flex items-center justify-center gap-6 mb-7 text-black">
                {["9 AM", "1 PM", "5 PM"].map((slot, i) => (
                  <div
                    key={i}
                    className="w-15 h-15 border border-black rounded-full flex items-center justify-center text-lg font-semibold"
                  >
                    {slot}
                  </div>
                ))}
              </div>

              <p className="text-black text-lg lg:text-2xl max-w-[380] text-center">
                Candidates may choose their preferred slot based on
                availability.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 lg:px-20 font-[Inter]">
        <div className="max-w-4xl mx-auto p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-[24px] md:text-[40] font-bold italic text-[#270652] mb-12 text-center">
            ASSESSMENT STRUCTURE (100 MARKS)
          </h2>

          {/* Two Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            {/* Left Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-gray-200 py-3 text-center italic font-semibold text-black bg-white">
                Internal Assessment-60 Marks
              </div>
            </div>

            {/* Right Category */}
            <div className="space-y-2">
              <div className="w-full rounded-lg border border-gray-200 py-3 text-center italic font-semibold text-black bg-white">
                External Assessment-40 Marks
              </div>
            </div>
          </div>

          {/* Passing Criteria Box */}
          <div className="border border-[#e5e7eb] rounded-lg p-5 mt-15 bg-white">
            <p className="font-semibold text-black mb-1">Passing Criteria</p>
            <ul className="list-disc pl-8 text-[#3C3C43] text-sm md:text-lg">
              <li>
                A candidate must secure a minimum of 40% to successfully pass
                the course
              </li>
            </ul>
          </div>
        </div>
      </section>
            <CareerServices  />
    
     <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
    <div className="px-2 w-full">
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

      {/* LEFT SIDE TEXT */}
      <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-[#270652] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4">
          Fees Structure
        </h2>

        {/* Subtitle */}
        <p className="text-[#2F2F30] text-sm md:text-base leading-tight lg:max-w-xl md:mb-6">
          Pay conveniently to launch your leadership career
        </p>

        {/* CTA visible only on large screens */}
            <CounsellingModal>
              <button
                
                className="hidden lg:flex text-white bg-[#F6A410] font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit"
              >
                Compare all Plans
              </button>
              </CounsellingModal>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="w-full lg:w-[35%] flex justify-center">
        <FeesCarousel
        cards = {[
      {
        title: "One Time",
        amount: "₹1,96,000/-",
        sub: "Congratulations!\nYou save ₹24,000/-",
      },
      {
        title: "Annual Payment",
        amount: "₹1,05,000/-",
        sub: "",
      },
      {
        title: "Semester Wise",
        amount: "₹55,000/-",
        sub: "",
      },
    ]}

     />
      </div>

      {/* CTA below carousel on mobile only */}
           <CounsellingModal>
            <button
              className="lg:hidden text-white bg-[#F6A410] font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit mx-auto mt-3"
            >
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
              Admission Processing Fee of ₹1,200/– applicable for all
              admissions.
            </li>
            <li>
              An initial amount of ₹10,000/– from the program fee will be
              collected at the time of registration.
            </li>
            <li>Exam fee : ₹800/– per subject, per attempt</li>
            <li>Project fee : ₹800/– per attempt</li>
            <li>
              Students also have the option to pay the full program fee of
              ₹196,000/– if they prefer.
            </li>
            <li>
              The above-mentioned fee structure is subject to change at the
              discretion of the University.
            </li>
            <li>
              Any payment made via Demand Draft should be made in favour of
              “SVKM’s NMIMS’’ payable at Mumbai.
            </li>
            <li>
              Now avail loan facility to pay fees for the Program even without a
              credit card
            </li>
            <li>
              Finance Options Available with No Cost Emi*. Please contact a
              counsellor to know more.
            </li>
          </ul>

          {/* Scholarship Policy */}
          <div className="mt-8">
            <p className="text-black text-lg md:text-xl font-bold mb-2">
              Scholarship Policy
            </p>

            <p className="text-black text-sm md:text-base leading-relaxed">
              The University offers special incentives to our armed forces,
              Defence Personnel and their immediate family with a 20% Defence
              Scholarship on the program fee.
            </p>
          </div>
        </MotionWrapper>
      </section>

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

      <section className="w-full px-6 md:px-18">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-10 font-[Inter] gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-5">

      <p className="text-[#1F1717] mb-1 mt-5 text-sm font-regular">Degree Sample</p>

      <h2 className="text-[#270652] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
        NMIMS Online <br />
        MBA
        Certificate
      </h2>

      <p className="text-[#3C3C43] max-w-[350px] text-base">
        Highlight your professional success with official certificate from
        NMIMS NCDOE
      </p>

      {/* IMAGE that appears ONLY on mobile, above CTA */}
      <div className="md:hidden flex justify-center">
        <img
          src="/nmims/nmimsMbaDegree.png"
          alt="Certificate Preview"
          className="w-full max-w-xs rounded-lg shadow-sm"
        />
      </div>

      {/* CTA BUTTON  */}
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
    <div className="hidden md:flex justify-center mt-5 md:justify-end">
      <img
        src="/nmims/nmimsMbaDegree.png"
        alt="Certificate Preview"
        className="w-full max-w-sm rounded-lg shadow-sm"
      />
    </div>

  </div>
</section>


  <section className="w-full bg-white font-[Inter] px-6 md:px-12 lg:px-20 mt-8">
  <MotionWrapper
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    {/* HEADING */}
    <div className="max-w-7xl text-left mb-12">
      <h2 className="text-black text-base font-medium">
        What will you gain?
      </h2>

      <h2 className="text-3xl sm:text-3xl lg:text-[42px] max-w-7xl font-bold text-[#270652] leading-tight mt-2">
        This isn't just another degree - it's a transformation in how you think,
        work, and grow.
      </h2>
    </div>

    {/* CONTENT ROW */}
    <div className="flex flex-col lg:flex-row items-start gap-14">
      {/* LEFT: Points */}
      <div className="flex-1 max-w-xl flex flex-col gap-6">
        {/* Point 1 */}
        <MotionWrapper
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-start gap-7"
        >
          <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
            <Briefcase size={30} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">
              Strategic Thinking
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
             Develop the ability to break down complex business problems and make confident, data-backed decisions. Learn to think ahead, anticipate challenges, and create strategies that drive long-term success.
            </p>
          </div>
        </MotionWrapper>

        {/* Point 2 */}
        <MotionWrapper
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex items-start gap-7"
        >
          <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
            <Users size={30} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">
              Practical Business Insight
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Go beyond classroom theory with hands-on projects, case studies, and expert interactions. Understand how real companies operate, make decisions, and solve everyday challenges.
            </p>
          </div>
        </MotionWrapper>

        {/* Point 3 */}
        <MotionWrapper
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-start gap-7"
        >
          <div className="flex items-center justify-center bg-[#270652] text-white rounded-full w-15 h-15 shrink-0 p-3">
            <GraduationCap size={30} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">
              Career Acceleration
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
             Gain the knowledge, credibility, and skillset that opens doors to higher roles and better opportunities.Fast-track your professional growth with a qualification that employers trust.
            </p>
          </div>
        </MotionWrapper>
      </div>

     {/* RIGHT: Image */}
<MotionWrapper
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="
    hidden lg:flex 
    w-[45%] xl:w-[50%] 
    justify-end
  "
>
  <div className="relative w-full max-w-[600px]">
    <Image
      src="/careerGain.png"
      alt="What will you gain"
      width={650}
      height={500}
      className="object-contain w-full h-auto"
      priority
    />
  </div>
</MotionWrapper>

    </div>
  </MotionWrapper>
</section>



      <section className="w-full bg-white py-10 lg:py-20 md:px-12 lg:px-20">
        <div className="w-full md:bg-linear-to-tr from-[#180135] to-[#3C087E] rounded-4xl py-12 px-6 md:px-10 lg:px-15">
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
              The NMIMS Online MBA opens doors to varied career paths. Built on
              practical learning and industry engagement, it equips you with the
              skills and network needed to stand out in a competitive job market
              and move confidently into leadership roles.
            </MotionWrapper>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 md:mt-0 items-center">
              {/* LEFT IMAGE */}
              <MotionWrapper
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center "
              >
                <Image
                  src="/nmimsCareer.png"
                  width={400}
                  height={400}
                  alt="Career Opportunities"
                  className="
    w-full 
    mt-10 md:mt-0
    max-w-[260px]  
    md:max-w-[320px]   /* Medium screens */
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
                  "Director of Business Development",
                  "Policy Analyst",
                  "Financial Advisor",
                  "Investment Analyst",
                  "Human Resources Manager",
                ].map((role, index) => (
                  <MotionWrapper
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#F6A410] flex items-center justify-center">
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

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ServicesByRadhya />

  <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter]">
  {/* TITLE */}
  <h2 className="text-[#270652] font-bold text-center text-[32px] md:text-[48px] lg:text-[64px] mb-8">
    Important Dates
  </h2>

  {/* TABLE WRAPPER */}
  <div className="w-full">
    <table className="w-full border-collapse table-fixed">
      {/* HEADER */}
      <thead>
        <tr className="bg-[#F6A410] text-white text-[12px] md:text-[16px]">
          <th className="py-3 px-2 text-left rounded-l-lg">PARTICULARS</th>
          <th className="py-3 px-2 text-left rounded-r-lg">DATES</th>
        </tr>
      </thead>

      {/* BODY */}
     <tbody className="divide-y divide-[#D6D6D6]">
        {[
          { p: "Registration Starts", d: "19th March, 2026" },
          {
            p: "Admission Without Late Fees",
            d: "19th March, 2026 to 10th August, 2026",
          },
          {
            p: "Admission With Late Fees Of Rs. 500/-",
            d: "11th August, 2026 to 31st August, 2026",
          },
          {
            p: "Admission With Late Fees Of Rs. 1000/-",
            d: "1st September, 2026 to 16th September, 2026",
          },
          { p: "Last Date of Admission", d: "16th September, 2026" },
          { p: "Re-Registration Starts", d: "	19th March, 2026" },
          {
            p: "Re-Registration Without Late Fees",
            d: "19th March, 2026 to 31st July, 2026",
          },
          {
            p: "Re-Registration With Late Fees Of Rs. 1000/-",
            d: "1st August, 2026 to 10th September, 20266",
          },
          { p: "Closure of Re-Registration", d: "10th September, 2026" },
        ].map((row, i) => (
          <tr
            key={i}
            className="text-[10px] text-black sm:text-[12px] md:text-[14px] lg:text-[16px]"
          >
            <td className="py-3 px-2 wrap-break-words">{row.p}</td>
            <td className="py-3 px-2 wrap-break-words">{row.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


      {/*<section className="w-full px-4 md:px-10 lg:px-20 py-16 font-[Inter]">
        <div className="max-w-5xl mx-auto">
          <MotionWrapper
          as="h2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#270652] px-6 py-3 flex items-center justify-center rounded-md"
          >
            Lateral Admission MBA (Online)
          </MotionWrapper>

          
          <div className="mt-10">
            <p className="text-gray-800 text-lg leading-relaxed font-semibold">
              Below mentioned student will be allowed to take Lateral admission
              to Master of Business Administration (Online) program:
            </p>

            <ul className="mt-4 space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>
                1. Students enrolled for CBM program in July 2019 or later and
                successfully completed the CBM program will be admitted to
                Semester 2 of Master of Business Administration program
                (Online). Waiver will be given to the common subjects and
                Additional subjects will be added in Semester 2.
              </li>

              <li>
                2. Students enrolled for DBM program in July 2019 or later and
                successfully completed the DBM program will be admitted to
                Semester 3 of Master of Business Administration program
                (Online). Waiver will be given to the common subjects and
                Additional subjects will be added in Semester 3.
              </li>

              <li>
                3. Student enrolled for Diploma program in July 2019 or later
                and took an Exit and got CBM certificate issued will be admitted
                to Semester 2 of Master of Business Administration program
                (Online). Waiver will be given to the common subjects and
                Additional subjects will be added in Semester 2.
              </li>

              <li>
                4. Students enrolled for any Diploma program other than DBM in
                July 2019 or later and successfully completed the Diploma
                program will be admitted to Semester 2 of Master of Business
                Administration program (Online). Waiver will be given to the
                common subjects and Additional subjects will be added in
                Semester 2.
              </li>
            </ul>
          </div>

         
          <div className="mt-10">
            <p className="text-gray-800 text-lg leading-relaxed font-semibold">
              Below mentioned student will not be allowed to take Lateral
              admission to Master of Business Administration (Online):
            </p>

            <ul className="mt-4 space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>1. Any student enrolled for any program prior July 2019.</li>

              <li>
                2. Students enrolled for PG program in July 2019 or later and
                completed the program.
              </li>

              <li>
                3. Students enrolled for PG program in July 2019 or later and
                took an Exit from the program.
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <FAQ faqs={faqs} />

      <ConnectToday />
   
    </main>
  );
}

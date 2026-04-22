
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
  ArrowRight,
  FileClock,
  BookCheck,
  Headset,
  FileUser,
  Blocks,
  Fullscreen,
  LayoutDashboard,
  BriefcaseBusiness,
  Usb,
  HandCoins,
} from "lucide-react";
import MotionWrapper from "../Radhya/MotionWrapper";
import React from "react";
import SyllabusSection from "../NmimsSection/Syllabus";
import ServicesByRadhya from "../NmimsSection/servicesbyRadhya";
import Enrollment from "../NmimsSection/Enrollment";
import CareerServices from "../NmimsSection/CareerServices";
import LearningApproach from "../NmimsSection/LearningApproach";
import WhyChooseUs from "../NmimsSection/WhyChooseUs";
import ConnectToday from "../NmimsSection/ConnectToday";
import FAQ from "../NmimsSection/FAQ";
import Faculties from "../NmimsSection/Faculties";
import FeesCarousel from "../NmimsSection/FeesCrousel";
import CounsellingModal from "../Radhya/CounsellingModal";
import SnapshotSection from "../NmimsSection/SnapshotSection";
import UnivCourses from "../Radhya/UnivCourses";

export default function Page() {
 
   const subjects = [
    { id: 1, name:"Bachelor of Commerce" },
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

   const topicsData = {
    1: {
      // BCOM
     1: [
      "Principles of Management",
      "Business Communication",
      "Financial Accounting",
      "Micro Economics",
      "Organisation Behaviour & HRM",
      "Essentials of IT",
    ],

    2: [
      "Cost and Management Accounting",
      "Principles of Marketing",
      "Operations Research",
      "Macro Economics",
      "Business Statistics for Decision Making",
      "Introduction to Analytics",
    ],

    3: [
      "Business and Allied Law",
      "Banking and Insurance",
      "Financial Management",
      "Advanced Financial Accounting",
      "Audit - I",
      "International Business & Export Import Management",
    ],

    4: [
      "Corporate & Information Technology Law",
      "Environment and Disaster Management",
      "Fundamentals of Taxation",
      "Research Methodology",
      "Audit - II",
      "Management Accounting",
    ],

    5: [
      "Financial Institutions & Markets",
      "Financial Statement Analysis",
      "Indian Accounting Standards",
      "Investment Products & Analysis",
      "Entrepreneurship Management",
      "Project",
    ],

    6: [
      "Business Ethics and Corporate Governance",
      "Strategic Management",
      "Financial Modelling",
      "Emerging Trends in Accountancy",
      "Corporate Finance",
      "Portfolio Management",
      ],
    },
  };
  


  const faqs = [
    {
      q: "Is the Online B.Com from NMIMS a recognized and valid degree?",
      a: "Yes. The Online B.Com is offered by NMIMS, a UGC-entitled and NAAC A++ accredited university, ensuring full academic and professional recognition across industries.",
    },
    {
      q: " Who should apply for the NMIMS Online B.Com program?",
      a: "The program is ideal for Students who have completed Class 12, Working individuals who want to upskill, Aspiring accountants, finance professionals, and commerce graduates and Learners seeking a flexible and industry-relevant commerce degree.",
    },
    {
      q: "What is the duration of the Online B.Com program?",
      a: "The Online B.Com is a 3-year undergraduate degree, designed to provide flexibility with live sessions, recorded classes, and self-paced learning.",
    },
    {
      q: " Is the program fully online?",
      a: "Yes. The entire program—including lectures, assignments, exams, and doubt sessions—is delivered online through the NMIMS student portal.",
    },
    {
      q: " What subjects are covered in the Online B.Com curriculum?",
      a: "The curriculum includes Financial Accounting, Cost & Management Accounting, Business Law, Taxation, Economics, Auditing, Banking & Finance, Business Communication and more, giving students a comprehensive commerce foundation.",
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

  const whyCards = [
    {
      logo: Users,
      heading: "Foundation",
      subheading: "Deepen your understanding of key management concepts and sharpen your ability to critically analyse and solve real-world business challenges.",
    },
    {
      logo: BookOpenCheck,
      heading: "Specializations",
      subheading: "Choose from marketing, finance, or business analytics to shape your career trajectory with the right specialization.",
    },
    {
      logo: SplinePointer,
      heading: "Flexible",
      subheading: "Experience seamless learning through an integrated platform accessible on any device study whenever and however you prefer.",
    },
    {
      logo: Speech,
      heading: "Mentorship",
      subheading: "Learn from top academicians and industry leaders who guide you with practical knowledge and deep professional experience.",
    },
    {
      logo: GlobeLock,
      heading: "Industry-Ready",
      subheading: "Gain the skills to develop and apply business models and frameworks to solve real-world business challenges.",
    },
    {
      logo: FileUser,
      heading: "Upskill",
      subheading: "Master practical business tools and strategic frameworks that empower you to solve complex challenges and drive meaningful results in the real world.",
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

  const topFaculty = [
    {
      name: "Prof. Aishwarya Nagpal",
      title: "Ph.D",
      image: "/nmims/bcom/faculties/aishwarya.png",
    },
    {
      name: "Dr. Brinda Sampat",
      title: "Ph.D",
      image: "/nmims/mba/faculties/brinda.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Prof. Jigar Shah",
      title: "MBA General Management",
      image: "/nmims/bcom/faculties/jigar.png",
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

  const stats = [
    { value: "3", label: "Years Duration" },
    { value: "6", label: "Semesters" },
    { value: "6", label: "Years Validity" },
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
                 Bachelor of Commerce
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
                   NMIMS Online BCOM
                 </MotionWrapper>
     
                 <MotionWrapper
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.7, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="text-gray-200 text-left text-[10px] md:text-[16px] lg:text-[18px] max-w-7xl mt-0 lg:mb-5 leading-relaxed"
                 >
                   Build comprehensive expertise in Finance, Accounting, Taxation, and Management that prepares you to excel in today’s dynamic financial markets.
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
   <section className="w-full bg-white py-10 px-4 lg:px-10 pt-0">
           {/* ======= ABOUT NMIMS SECTION ======= */}
           <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
             {/* LEFT TEXT */}
             <div>
               <h2 className="text-[32px] md:text-4xl mt-10 lg:mt-15 lg:text-[64px] font-bold text-[#270652] mb-4">
                 About NMIMS
               </h2>
   
               <p className="text-black leading-relaxed text-sm md:text-[18px] mb-10">
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
            <div className="relative w-full h-full flex md:justify-end">
     <div className="max-w-7xl overflow-hidden md:-mr-10 relative w-full h-[250px] md:h-full">
       <Image
         src="/nmims/aboutNmims.png"
         alt="Students"
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
             Build comprehensive expertise in Finance, Accounting, Taxation, and Management {" "}
            </span>
             that prepares you to excel in today’s dynamic financial markets.
             </p>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <Fullscreen size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <p className="lg:text-2xl text-[#270652] mb-1">
                High-Impact & Student-Focused
              </p>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
               Benefit from the mentorship of renowned academicians and industry veterans who equip you with the knowledge and confidence to excel in your career.
               </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {/* Icon */}
            <div className="shrink-0 text-black w-12 h-12 flex items-center justify-center">
              <LayoutDashboard size={72} strokeWidth={1.0} />
            </div>

            {/* Content */}
            <div>
              <p className="lg:text-2xl text-[#270652] mb-1">
                Foundation of your professional career
              </p>
              <p className="text-gray-700 text-xs lg:text-[16px] leading-relaxed">
                Strengthen your corporate career base through comprehensive learning and skill-building that prepares you to step confidently into managerial roles.
                </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs title="Why Choose NMIMS Online BCOM" cards={whyCards}/>

     <SyllabusSection
  title="NMIMS Online BCOM Syllabus"
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
                  Eligibility for NMIMS Online BCOM
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
                    className="text-black  text-[20px] md:text-3xl font-medium leading-relaxed md:w-3/5"
                  >
                    HSC (10+2) in any discipline from a recognized board with minimum 50%(45% for SC/ST/OBC/PwD).
                    </MotionWrapper>
      
                 {/* Right image animation */}
                                                                 <MotionWrapper
                                                                   initial={{ opacity: 0, x: 40 }}
                                                                   whileInView={{ opacity: 1, x: 0 }}
                                                                   transition={{ duration: 0.6, delay: 0.3 }}
                                                                   viewport={{ once: true }}
                                                                   className="md:w-[45%] w-full flex justify-end pr-0 mt-0 md:pr-0"
                                                                 >
                                                                   <Image
                                                                     src="/nmims/nmimsEligibility.png"
                                                                     alt="Eligibility criteria for NMIMS Online BCOM admission"
                                                                     width={520}
                                                                     height={350}
                                                                     className="w-full max-w-105  h-auto rounded-xl object-contain"
                                                                     sizes="(max-width: 768px) 100vw, 520px"
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
                     className="text-left text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16"
                   >
                     The NMIMS Online B.COM follows a structured and transparent
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
                         Internal Assessment-70 Marks
                       </div>
                     </div>
         
                     {/* Right Category */}
                     <div className="space-y-2">
                       <div className="w-full rounded-lg border border-gray-200 py-3 text-center italic font-semibold text-black bg-white">
                         External Assessment-30 Marks
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

      <CareerServices />

       <section className="w-full font-[Inter] mt-20 flex items-center justify-center">
      <div className="px-2 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[#270652] text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[110%] mb-4">
              Fees Structure for NMIMS Online BCOM
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-tight lg:max-w-xl mb-6">
              Convenient fee payment options available <br />
              Choose semester-wise, annual, or one-time payment.
            </p>

            {/* CTA – desktop only */}
              <CounsellingModal>
              <button
                
                className="hidden lg:flex text-white bg-[#F6A410] font-medium px-6 py-2 rounded-md shadow-lg transform hover:scale-105 duration-200 w-fit"
              >
                Compare all Plans
              </button>
              </CounsellingModal>
          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <div className="w-full lg:w-[35%] flex justify-center">
            <FeesCarousel
             cards = {[
    {
      title: "Annual Payment",
      subtitle: "(no. of years 3)",
      program: "B.COM",
      amount: "₹33,000/-",
      note: "",
    },
    {
      title: "Semester Wise",
      subtitle: "(no. of semesters 6)",
      program: "B.COM",
      amount: "₹18,000/-",
      note: "",
    },
  ]}
  />
          </div>

          {/* CTA – mobile only */}
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
          className="max-w-4xl mx-auto bg-[#3C087E]/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
        >
          {/* Heading */}
          <h2 className="text-center text-black text-2xl md:text-[40px] font-bold mb-6">
            Note
          </h2>

          {/* Sub-heading */}
          <p className="text-black text-lg md:text-xl font-semibold mb-6 leading-relaxed">
            Important instructions:
          </p>

          {/* Bullet Points */}
          <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
            <li>
              Admission Processing Fee of ₹1,200/- applicable for all
              admissions.
            </li>
            <li>
              An initial amount of ₹10,000/- from the program fee will be
              collected at the time of registration.
            </li>
            <li>Exam fee : ₹800/- per subject, per attempt</li>
            <li>Project fee : ₹800/- per attempt</li>
            <li>
              Students also have the option to pay the full program fee of
              ₹94,000/- for the BBA program with Marketing and Finance electives
              if they prefer.
            </li>
            <li>
              The above-mentioned fee structure is subject to change at the
              discretion of the University.
            </li>
            <li>
              Any payment made via Demand Draft should be made in favour of
              "SVKM's NMIMS" payable at Mumbai.
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
            <p className="text-black text-lg md:text-xl font-semibold mb-2">
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
        defaultOpen={0} // Step 3 open by default
      />

       <section className="w-full pt-10 px-6 md:px-18">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center font-[Inter] gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-5">

      <p className="text-[#1F1717] mb-1 mt-5 text-sm font-medium">Degree Sample</p>

      <h2 className="text-[#270652] text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
        NMIMS Online <br />
        B.COM
        Certificate
      </h2>

      <p className="text-[#3C3C43] max-w-[350px] text-base">
        Highlight your professional success with official certificate from
        NMIMS CDOE
      </p>

      {/* IMAGE that appears ONLY on mobile, above CTA */}
      <div className="md:hidden flex justify-center">
        <Image
          src="/nmims/nmimsBcomDegree.png"
          alt="Certificate Preview"
          width={300}
                      height={200}
                      className="w-full max-w-xs rounded-lg shadow-sm"
                      sizes="(max-width: 768px) 90vw, 300px"
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
    <div className="hidden md:flex justify-center mt-5 md:justify-end">
      <Image
        src="/nmims/nmimsBcomDegree.png"
        alt="Certificate Preview"
        width={400}
        height={250}
        className="w-full max-w-sm rounded-lg shadow-sm"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>

  </div>
</section>
      <section className="w-full bg-white px-4 md:px-12 lg:px-20 py-16 font-[Inter]">
        {/* Small Header */}
        <MotionWrapper
        as="h2"
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
          className="text-[#270652] font-extrabold text-3xl sm:text-4xl md:text-5xl font-[Inter] lg:text-5xl leading-tight mb-12 max-w-6xl"
        >
          This isnt just another degree its a <br />
          transformation in how you think, work and grow.
        </MotionWrapper>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            {/* Item 1 */}
            <MotionWrapper
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-20 h-20 bg-[#270652] rounded-full shrink-0 flex items-center my-10 justify-center">
                <HandCoins size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Stronger Earning Potential Early in Your Career
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  NMIMS Online B.Com graduates gain strong commerce skills that
                  prepare them for fast growth in roles like Accounts Executive,
                  Finance Assistant, Tax Associate, Audit Analyst, and
                  Operations Executive.
                </p>
              </div>
            </MotionWrapper>

            {/* Item 2 */}
            <MotionWrapper
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-20 h-20 bg-[#270652] rounded-full flex items-center shrink-0 my-10 justify-center">
                <Usb size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Explore Multiple Career Pathways
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Step confidently into entry-level and early mid-level roles
                  across accounting, finance, taxation, banking, auditing,
                  compliance, and business operations. The NMIMS Online B.Com
                  gives you the versatility to explore high-demand
                  commerce-driven roles.{" "}
                </p>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-12">
            {/* Item 3 */}
            <MotionWrapper
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-20 h-20 bg-[#270652] rounded-full shrink-0 flex items-center my-10 justify-center">
                <Blocks size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Build Robust Commerce & Analytical Foundations
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  Gain essential skills in accounting, finance, taxation,
                  business law, and analytics—preparing you for advanced studies
                  like an MBA, M.Com, or professional certifications such as CA,
                  CMA, or CFA.{" "}
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
              <div className="w-20 h-20 bg-[#270652] rounded-full shrink-0 flex items-center my-10 justify-center">
                <BriefcaseBusiness size={50} className="text-white" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-extrabold mb-2">
                  Become a Global-Ready Commerce Professional
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  With a curriculum aligned to modern business environments, the
                  program prepares you to succeed in multinational corporations,
                  fintech companies, consulting firms, and fast-growing startups
                  in India and abroad.{" "}
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
                    className="text-center text-black text-[18px] md:text-[20px] max-w-2xl mx-auto md:mb-12"
                  >
                   This program gives you the foundation to dive into all major aspects of Business Administration and unlock exciting career opportunities in diverse business functions.
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
                        "Chartered Accountant",
                        "Financial Analyst",
                        "Accounts Process Executive",
                        "Corporate Sales Executive",
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

                          heading="NMIMS Online Courses "
                          courses={[
                            {
                              id: 1,
                              universityLogo: "/nmims.png",
                              universityName: "NMIMS",
                              title: "Master of Business Administration",
                              subtitle: "NMIMS Mumbai",
                              tag: "Most-Loved",
                              duration: "2 years",
                              validity: "4 years",
                              coursePath: "/nmims/nmims-mumbai-online-mba",
                            },
                            {
                              id: 2,
                              universityLogo: "/nmims.png",
                              universityName: "NMIMS",
                              title: "Bachelor of Business Administration",
                              subtitle: "NMIMS Mumbai",
                              tag: "Trending",
                              duration: "3 years",
                              validity: "6 years",
                              coursePath: "/nmims/nmims-mumbai-online-bba",
                            },
                            {
                              id: 3,
                              universityLogo: "/nmims.png",
                              universityName: "NMIMS",
                              title: "Master of Business Admin.(WX)",
                              subtitle: "NMIMS Mumbai",
                              tag: "Most-Loved",
                              duration: "2 years",
                              validity: "4 years",
                              coursePath: "/nmims/nmims-mumbai-online-mba-working-executives",
                            },
                            {
                              id: 4,
                              universityLogo: "/nmims.png",
                              universityName: "NMIMS",
                              title: "Bachelor of Commerce",
                              subtitle: "NMIMS Mumbai",
                              duration: "3 years",
                              validity: "6 years",
                              coursePath: "/nmims/nmims-mumbai-online-bcom",
                            },
                            {
                              id: 5,
                              universityLogo: "/nmims.png",
                              universityName: "NMIMS",
                              title: "Online Diploma",
                              subtitle: "NMIMS Mumbai",
                              duration: "1 year",
                              validity: "2 years",
                              coursePath: "/nmims/nmims-mumbai-online-diploma",
                            },
                            {
                              id: 6,
                              universityLogo: "/nmims.png",
                              universityName: "NMIMS",
                              title: "Certification in Business Management",
                              subtitle: "NMIMS Mumbai",
                              duration: "6 months",
                              validity: "2 years",
                              coursePath: "/nmims/nmims-mumbai-online-certification",
                            },
                          ]}
                        />
       <Faculties
                    heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
                    topFaculty={topFaculty}
                    bottomFaculty={bottomFaculty}
                  />

      <ServicesByRadhya />

      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-[Inter]">
  {/* TITLE */}
  <h2 className="text-[#270652] font-extrabold text-center text-[32px] md:text-[48px] lg:text-[64px] mb-8">
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
            d: "1st August, 2026 to 10th September, 2026",
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

      <FAQ faqs={faqs} />

      <ConnectToday />
      
    </main>
  );
}

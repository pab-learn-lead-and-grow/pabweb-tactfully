
import Image from "next/image";
import React from "react";
import MotionWrapper from "../Radhya/MotionWrapper";
import SnapshotSection from "../NmimsSection/SnapshotSection";
import MujCareerServices from "../NmimsSection/MujCareerServices"; 
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Radhya/ContactSection";
import UnivCourses from "../Radhya/UnivCourses";
import UniversityCards from "../NmimsSection/Logocards";
import { BanknoteArrowUp, BriefcaseBusiness, ContactRound, FileUser, MessagesSquare, Users } from "lucide-react";

export default function Page() {
 
  
   const benefits = [
    {
      icon: (
        <FileUser
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Career Coaching",
      text: "Receive one-on-one guidance from career experts to plan your growth, switch roles, and achieve long-term professional goals.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />
      ),
      title: "Resume Building",
      text: "Enhance your resume, LinkedIn profile, and personal branding with expert support to improve visibility and shortlisting chances.",
    },
    
     {
      icon: (
        <BanknoteArrowUp
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Interview Preparation",
      text: "Practice real interview scenarios with experts, get feedback, and improve your confidence to crack job interviews successfully.",
      },
      {
      icon: <MessagesSquare strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Identify your strengths through aptitude and psychometric tests to align your career path with the right opportunities.",
     },
     {
      icon: (
        <BriefcaseBusiness
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Industry Exposure",
      text: "Gain practical insights through industry-relevant curriculum, case studies, and projects that prepare you for real-world job roles.",
      },
    {
      icon: (
        <Users
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Job Portal Access",
      text: "Get access to exclusive job portals and curated opportunities to apply for roles across top companies and industries.",
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
    q: "What is Bennett University Online?",
    a: "Bennett University Online is the Centre for Distance & Online Education offering UGC-approved programs like Online MBA and BBA.",
  },
  {
    q: "Is Bennett University Online approved and valid?",
    a: "Yes, Bennett University is UGC-recognized, and its online programs are valid for jobs and higher education.",
  },
  {
    q: "Which courses are offered by Bennett University Online?",
    a: "Bennett University Online offers programs like Online MBA, Online BBA, and other industry-focused courses.",
  },
  {
    q: "Who is Bennett University backed by?",
    a: "Bennett University is backed by The Times Group, one of India’s leading media and education conglomerates.",
  },
  {
    q: "Are Bennett University Online degrees recognized?",
    a: "Yes, the degrees are UGC-entitled and equivalent to regular degrees as per university guidelines.",
  },
  {
    q: "Is Bennett University Online good for working professionals?",
    a: "Yes, the programs are designed with flexible learning, making them suitable for working professionals.",
  },
  {
    q: "What is the admission process for Bennett University Online?",
    a: "The admission process typically includes registration, document submission, fee payment, and confirmation.",
  },
  {
    q: "Does Bennett University Online provide placement support?",
    a: "Yes, students get access to career support services like resume building, interview preparation, and job opportunities.",
  },
  {
    q: "What is the mode of learning in Bennett University Online?",
    a: "The programs are delivered through an online learning platform with live and recorded sessions.",
  },
  {
    q: "Why choose Bennett University Online?",
    a: "It offers industry-aligned curriculum, flexible learning, AI-enabled platforms, and strong brand credibility backed by The Times Group.",
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

const universities = [
  {
    src: "/nmims.png",
    alt: "NMIMS",
    name: "NMIMS Mumbai",
    href: "/nmims/",
  },
  {
    src: "/manipal.png",
    alt: "Manipal",
    name: "Manipal Jaipur",
    href: "/muj/",
  },
  {
    src: "/amity.png",
    alt: "Amity",
    name: "Amity University",
    href: "/amity/",
  },
  {
    src: "/jain.png",
    alt: "Jain",
    name: "Jain University",
    href: "/jain/",
  },
   { src: "/bennett.png", href: "/bennett/", alt: "Bennett University", name: "Bennett University" },
  { src: "/shoolini.png", href: "/shoolini/", alt: "Shoolini University", name: "Shoolini University" },
  { src: "/smu.png", href: "/smu/", alt: "Sikkim Manipal University", name: "Sikkim Manipal University" },

];


  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-10 pt-10">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-6">
  
  {/* LEFT - 60% */}
  <h1 className="lg:col-span-3 text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight bg-linear-to-r from-[#D03033] to-[#0C549E]  bg-clip-text text-transparent">
    Bennett University Online Courses 2026: Fees, Admission, MBA, BBA & Review
  </h1>

  {/* RIGHT - 40% */}
  <MotionWrapper
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className="lg:col-span-2 flex justify-center lg:justify-end"
  >
    <Image
      src="/bennett.png"
      alt="Bennett Logo"
      width={526}
      height={180}
      className="object-contain w-[220px] md:w-[260px] lg:w-[360px] xl:w-[500px]"
    />
  </MotionWrapper>

</div>
      </section>
      <section className="w-full bg-white px-10 xl:px-15 py-12 ">
        {/* ======= ABOUT Bennett SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl lg:text-[44px]  text-center md:text-left font-bold text-[#270652] mb-4">
              About Bennett University
            </h2>

            <p className="text-black leading-relaxed font-inter text-xs text-justify lg:text-[18px] lg:mb-10">
          Bennett University Online, powered by The Times Group, offers industry-focused and flexible online degree programs designed for both students and working professionals. With UGC-approved courses like Online MBA and Online BBA, the university focuses on delivering a modern, industry-aligned curriculum that builds practical knowledge and job-ready skills. Learners benefit from an AI-enabled learning platform, live and recorded sessions, and continuous academic support. Backed by a strong brand legacy and aligned with NEP guidelines, Bennett University Online provides a credible and future-ready education experience for those aiming for career growth in today’s digital-first economy.</p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-100 flex md:justify-end">
                              <div className="max-w-7xl mb-10 md:mb-0 overflow-hidden relative w-full h-full">
                                <Image
                         src="/bennett/bennett_Univ.jpg"
                         alt="University"
                          fill
                        className="rounded-2xl object-cover"
                       />
                     </div>
                   </div>
        </div>
      </section>
       <section className="w-full bg-purple-50 roundedd-xl py-12 px-4 md:px-10 lg:px-20">
       <h2 className="text-[#270652] text-2xl md:text-3xl lg:text-5xl xl:text-[60px] font-bold mb-6">
            Why Choose Bennett University Online?
          </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE (UNCHANGED) */}
        <div>
          <div className="border-l-4 border-gray-300 pl-4 space-y-4 text-black leading-relaxed text-sm md:text-base lg:text-[18px]">
            <p>
              Backed by The Times Group, ensuring strong brand credibility, trust, and industry recognition for your online degree.
            </p>

            <p>
              Learn through an AI-enabled platform with live sessions, recorded lectures, and interactive tools for a seamless experience.
            </p>

            <p>
              Industry-aligned curriculum designed to build practical skills, business knowledge, and prepare you for real-world job roles.</p>
              <p>
                Flexible, 100% online learning structure aligned with NEP, ideal for working professionals aiming for career growth.</p>
          </div>
        </div>

        {/* RIGHT SIDE (UPDATED TO MATCH ABOVE UI) */}
        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
          {[
            "/bennett/accreditations/ugc.png",
            "/bennett/accreditations/naac.png",
           "/bennett/accreditations/aiu.png",
           "/bennett/accreditations/tg.png",
          ].map((icon, index) => (
            <div
              key={index}
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex items-center justify-center"
            >
              <Image
                src={icon}
                alt="Bennett Credential"
                fill
                className="object-contain p-4"
              />
            </div>
          ))}
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

      <Enrollment
        title="Admission Process"
        subtitle="Your Path to Enrollment"
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

 <MujCareerServices title="Career Services by Bennett University" benefits={benefits}  />

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ContactSection />

      <FAQ faqs={faqs} />

        <section className="w-full mt-8 md:mt-16  px-4 md:px-10 lg:px-20 font-[Inter]">
                         <div className="max-w-7xl mx-auto">
                           {/* HEADING */}
                           <MotionWrapper
                           as="h2"
                             initial={{ opacity: 0, y: -30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6 }}
                             viewport={{ once: true }}
                             className="text-[28px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[120%] font-bold text-[#270652] mb-3 md:mb-8 text-center"
                           >
                             Explore other top universities
                           </MotionWrapper>
                         </div>
                       </section>
            
                        <div className="h-[120px]">
                   <UniversityCards logos={universities} />
                  </div>

      <ConnectToday />
     
    </main>
  );
}

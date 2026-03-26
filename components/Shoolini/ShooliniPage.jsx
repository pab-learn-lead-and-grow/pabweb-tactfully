
import Image from "next/image";
import React from "react";
import MotionWrapper from "../Radhya/MotionWrapper";
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import MujCareerServices from "../NmimsSection/MujCareerServices" ;
import ConnectToday from "../NmimsSection/ConnectToday";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Radhya/ContactSection";
import UnivCourses from "../Radhya/UnivCourses";
import { BanknoteArrowUp, BriefcaseBusiness, ContactRound, FileUser, MessagesSquare, Users } from "lucide-react";
import LogoSection from "../Radhya/LogoSection";
import UniversityCards from "../NmimsSection/Logocards";

export default function Page() {

   const benefits = [
    {
      icon: (
        <FileUser
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Resume Building",
      text: "Personalized support in crafting professional resumes that effectively highlight a student’s skills, achievements, and industry potential.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />
      ),
      title: "Interview Preparation",
      text: "Mock interviews and detailed feedback sessions prepare students to face real-world hiring panels with confidence.",
    },
    
     {
      icon: (
        <BanknoteArrowUp
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Pay After Placement Option",
      text: "Students have the flexibility to pay a portion of their course fees only after securing employment",
      },
      {
      icon: <MessagesSquare strokeWidth={1.0} className="text-[#F6A410] w-18 h-18" />,
      title: "Leadership & Soft Skills Development",
      text: "Courses focused on improving emotional intelligence, leadership qualities, and team collaboration skills.",
     },
     {
      icon: (
        <BriefcaseBusiness
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Internship Opportunities",
      text: "Curated access to internship openings that allow students to gain practical experience and industry exposure while studying.",
      },
    {
      icon: (
        <Users
          strokeWidth={1.0}
          className="text-[#F6A410] w-18 h-18"
        />
      ),
      title: "Public Speaking & Business Writing",
      text: "Programs are designed to develop clarity, confidence, and professionalism in both presentations and business documentation.",
      },     
  ];

 
  const steps = [
    {
      num: "01",
      title: "Online Application",
      desc: "Visit the official website and complete the online application form.",
    },
    {
      num: "02",
      title: "Application Fee Payment",
      desc: "Pay the application fee through the portal.",
    },
    {
      num: "03",
      title: "Eligibility Verification",
      desc: "The admissions team will contact applicants to review eligibility requirements.",
    },
    {
      num: "04",
      title: "Entrance/Interview",
      desc: "Depending on the program, you may need to complete an online interview.",
    },
    {
      num: "05",
      title: "Letter of Enrolment",
      desc: " Candidates who meet the requirements receive an offer letter.",
    },
  ];

const faqs = [
  {
    q: "Are Shoolini University online programs valid and recognized?",
    a: "Yes, they are UGC-approved and offered by a NAAC A+ accredited university.",
  },
  {
    q: "Can working professionals pursue Shoolini online programs?",
    a: "Absolutely. The programs are designed with flexible, self-paced learning for working individuals.",
  },
  {
    q: "Does Shoolini University provide placement support?",
    a: "Yes, students get career support including job assistance, resume building, and interview preparation.",
  },
  {
    q: "Are there live classes in Shoolini online programs?",
    a: "Yes, students get access to live interactive sessions along with recorded lectures for flexibility.",
  },
  {
    q: "What is the duration of Shoolini online degree programs?",
    a: "Most programs typically range from 2 to 3 years depending on the course structure.",
  },
];

  const topFaculty = [
    {
      name: "Amit Khanna",
      title: "Adjunct Professor and Advisor",
      image: "/shoolini/faculties/amitkhanna.png",
    },
    {
      name: "Dr. Pooja Verma",
      title: "Associate professor",
      image: "/shoolini/faculties/poojaverma.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Ashish Khosla",
      title: "Co-founder & President Innovation",
      image: "/shoolini/faculties/ashishKhosla.webp",
    },
    {
      name: "Tarun Gupta",
      title: "Prof. of Practice in Management",
      image: "/shoolini/faculties/tarungupta.png",
    },
    {
      name: "Munish Shehrawat",
      title: "President & Dean FMS",
      image: "/shoolini/faculties/munishshehrawat.png",
    },
    {
      name: "Ashoo Khosla",
      title: "Co-founder & President Innovation",
      image: "/shoolini/faculties/ashookhosla.png",
    },
  ];

const universities = [
  {
    src: "/nmims.png",
    alt: "NMIMS",
    name: "NMIMS Mumbai",
    href: "/nmims/nmims-mumbai-online-mba",
  },
  {
    src: "/manipal.png",
    alt: "Manipal",
    name: "Manipal Jaipur",
    href: "/muj/manipal-jaipur-online-mba",
  },
  {
    src: "/amity.png",
    alt: "Amity",
    name: "Amity University",
    href: "/amity/amity-online-mba",
  },
  {
    src: "/jain.png",
    alt: "Jain",
    name: "Jain University",
    href: "/jain/jain-online-mba",
  },
  { src: "/bennett.png", href: "/bennett", alt: "Bennett University", name: "Bennett University" },
  { src: "/shoolini.png", href: "/shoolini", alt: "Shoolini University", name: "Shoolini University" },
  { src: "/smu.png", href: "/smu", alt: "Sikkim Manipal University", name: "Sikkim Manipal University" },
];

  return (
    <main className="flex flex-col items-center w-full bg-white">
      <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-20 py-10">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className=" text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-bold leading-none bg-[linear-gradient(90deg,#000000_0%,#3C3C43_15.87%,#BA1C22_42.31%,#D3272A_100%)] bg-clip-text text-transparent">
            Shoolini Online
          </h2>

          {/* Right LOGO */}
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-end"
          >
            <Image
              src="/shoolini.png"
              alt="Shoolini Logo"
              width={526}
              height={180}
              className="object-contain w-[320px] md:w-[250px] lg:w-[400px] xl:w-[526px] pr-10 mt-10 md:mt-0"
            />
          </MotionWrapper>
        </div>
      </section>
      <section className="w-full bg-white px-10 xl:px-15 ">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl lg:text-[64px]  text-center md:text-left font-extrabold text-[#270652] mb-12">
              About Shoolini
            </h2>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
              Shoolini University of Biotechnology and Management Sciences was established in 2009 and is located in Himachal Pradesh, India. It is recognized by the University Grants Commission and has earned a NAAC A+ accreditation for its academic excellence. In a relatively short span, the university has developed into a leading multidisciplinary institution known for its strong emphasis on research, innovation, and industry-relevant education. Shoolini provides a dynamic and engaging learning environment that supports both intellectual development and personal growth. The university also promotes hands-on learning through practical exposure, enabling students to gain a deeper understanding of real-world industry applications.
            </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-full flex md:justify-end ">
            <div className="max-w-7xl overflow-hidden">
              <img
                src="/shooliniUniv.png"
                alt="Shoolini University"
                className="w-full h-[95%] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= SNAPSHOT SECTION ======= */}
        <section className="w-full mt-8 md:mt-16  px-4 md:px-10 lg:px-20 font-[Inter]">
                          <div className="max-w-7xl mx-auto">
                            {/* HEADING */}
                            <MotionWrapper
                            as="h2"
                              initial={{ opacity: 0, y: -30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-[28px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[120%] font-extrabold text-[#270652] mb-3 md:mb-8 text-center"
                            >
                              A Snapshot of Success
                            </MotionWrapper>
                  
                            {/* BLUE BAR */}
                            <MotionWrapper
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="bg-[#3C087E]/5 rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-full py-4 sm:py-6 md:py-10 px-8 sm:px-10 md:px-16"
                            >
                              {/* ALWAYS 3 COLUMNS */}
                              <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center text-[#3C087E]">
                                {/* STAT 1 */}
                                <MotionWrapper
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5 }}
                                  viewport={{ once: true }}
                                >
                                  <p className="text-[18px] sm:text-[24px] md:text-[29px] lg:text-[36px] xl:text-[64px] font-bold">
                                    A+
                                  </p>
                                  <p className="text-[8px]  md:text-[16px] xl:text-[22px]  md:text-sm font-bold opacity-90 leading-tight">
                                   NAAC accreditation
                                  </p>
                                </MotionWrapper>
                  
                                {/* STAT 2 */}
                                <MotionWrapper
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold">
                                   UGC
                                  </p>
                                  <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                                    Entitled Degree
                                  </p>
                                </MotionWrapper>
                  
                                {/* STAT 3 */}
                                <MotionWrapper
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  viewport={{ once: true }}
                                >
                                  <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[64px] font-bold ">
                                   #3
                                  </p>
                                  <p className="text-[8px] md:text-[16px] xl:text-[22px]  md:text-sm font-bold opacity-90 leading-tight">
                                    Patents filed in India
                                  </p>
                                </MotionWrapper>
                              </div>
                            </MotionWrapper>
                          </div>
                        </section>
      <UnivCourses
        heading="Courses"
        courses={[
          {
            id: 1,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "Master of Business Administration",
            subtitle: "Shoolini University",
            tag: "Most-Loved",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/programs/online-mba" ,
          },
          {
            id: 2,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "Bachelor of Business Administration",
            subtitle: "Shoolini University",
            tag: "Trending",
            duration: "3 years",
            validity: "6 years",
            coursePath: "/programs/online-bba",
          },
          {
            id: 3,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "MBA Premium",
            subtitle:"Shoolini University",
            tag: "Most-Loved",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/programs/online-mba-wx",
          },
          {
            id: 4,
             universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "Bachelor of Commerce (Honours)",
            subtitle:  "Shoolini University",
            duration: "3 years",
            validity: "6 years",
            coursePath: "/programs/online-bcom",
          },
          {
            id: 5,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "Bachelor of Computer Applications",
            subtitle:  "Shoolini University",
            duration: "3 years",
            validity: "6 years",
            coursePath: "/programs/online-bca",
          },
           {
            id: 6,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "Master of Computer Applications",
            subtitle:  "Shoolini University",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/programs/online-mca",
          },
           {
            id: 7,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "MA (English Literature)",
            subtitle:  "Shoolini University",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/programs/online-ma",
          },
           {
            id: 8,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "MA-JMC",
            subtitle:  "Shoolini University",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/programs/online-majmc",
          },
           {
            id: 9,
            universityLogo: "/shoolini.png",
            universityName: "Shoolini University",
            title: "M.Sc in Data Science",
            subtitle:  "Shoolini University",
            duration: "2 years",
            validity: "4 years",
            coursePath: "/programs/online-msc",
          },
        ]}
      />

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

     <MujCareerServices benefits={benefits}  />

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

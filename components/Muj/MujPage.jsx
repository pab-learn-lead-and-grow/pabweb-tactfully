
import Image from "next/image";
import MotionWrapper from "../Radhya/MotionWrapper";
import React from "react";
import MujCareerServices from "../NmimsSection/MujCareerServices" ;
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Radhya/ContactSection";
import UnivCourses from "../Radhya/UnivCourses";
import { ArrowUpWideNarrow, Boxes, ChartNoAxesColumn, ContactRound, GalleryVertical, Headphones } from "lucide-react";
import UniversityCards from "../NmimsSection/Logocards";

export default function Page() {
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
      desc: "Upload supporting documents & submit your application.Mandatory documents are Proof of identity - Aadhaar card (mandatory for Indian citizens), Proof of address - Aadhaar card, passport, voter's ID, gas bill, bank statement, post-paid mobile statement , lass 10 & 12 marksheet and Graduation marksheet (for PG students)",
    },
    {
      num: "04",
      title: "University Approval",
      desc: "The university will evaluate your documents to confirm your admission.",
    },
  ];
  const benefits = [
    {
      icon: (
        <ArrowUpWideNarrow
          strokeWidth={1.0}
          className="text-[#270652] w-18 h-18"
        />
      ),
      title: "Upskill and Certify",
      text: "Advance your career with in-demand skill training and certifications that employers value.",
    },
    {
      icon: (
        <ContactRound strokeWidth={1.0} className="text-[#270652] w-18 h-18" />
      ),
      title: "Industry Relevance",
      text: "Engage in live sessions with industry professionals who provide practical insights, career advice, and up-to-date market trends to prepare you for real-world roles.",
    },
    {
      icon: (
        <Headphones strokeWidth={1.0} className="text-[#270652] w-18 h-18" />
      ),
      title: "Self-paced Learning",
      text: "Flexible self-paced modules to improve communication, polish your resume, build professional etiquette, and gain hands-on industry skills.",
    },
    {
      icon: <Boxes strokeWidth={1.0} className="text-[#270652] w-18 h-18" />,
      title: "Skill Assessment",
      text: "Discover your strengths and skill gaps with targeted assessments that help you develop the competencies required to boost your employability.",
    },
    {
      icon: (
        <GalleryVertical
          strokeWidth={1.0}
          className="text-[#270652] w-18 h-18"
        />
      ),
      title: "AI Placement Portal",
      text: "Elevate your job readiness with Online Manipal's AI-powered placement portal, where you can practice unlimited mock interviews, receive instant insights, and seamlessly apply to career opportunities.",
    },
    {
      icon: (
        <ChartNoAxesColumn
          strokeWidth={1.0}
          className="text-[#270652] w-18 h-18"
        />
      ),
      title: "Placement & Job Fairs",
      text: "Launch your career through extensive placement drives and job fairs that give you access to recruiters across sectors. Discover various job opportunities, participate in interviews, and engage with employers.",
    },
  ];

  const faqs = [
    {
      q: "How long is the Online MA JMC program, and how is it delivered?",
      a: "The program runs for two years (four semesters) and is offered entirely online through MUJ’s digital learning platform.",
    },
    {
      q: "What qualifications do I need to enroll?",
      a: "You must have a bachelor’s degree (10+2+3 or equivalent) from a recognised university. No work experience is required.",
    },
    {
      q: " Is this program suitable for working professionals?",
      a: "Yes. The flexible online structure makes it ideal for working individuals or those who cannot attend regular on-campus classes.",
    },
    {
      q: " What practical and theoretical skills will I learn?",
      a: "Students gain hands-on experience in new media writing, digital publishing, AV editing, script and screenwriting, and photography, along with strong foundations in reporting, broadcast journalism, and digital media marketing.",
    },
    {
      q: "How are classes and study material provided?",
      a: "Learning happens through live and recorded sessions, digital reading material, video tutorials, discussion forums, and online assignments accessible 24/7 via the LMS.",
    },
  ];

   const topFaculty = [
    {
      name: "Ms.Urvashi Thapa",
      title: "Assistant Prof.",
      image: "/muj/faculties/urvashi.png",
    },
    {
      name: "Dr. R Pillai",
      title: "Professor",
      image: "/muj/faculties/pillai.png",
    },
  ];

  const bottomFaculty = [
    {
      name: "Dr. EJ Fernandes",
      title: "Assistant Prof.",
      image: "/muj/faculties/fernandes.png",
    },
    {
      name: "Dr. Raveendra Rao",
      title: "Assistant Prof.",
      image: "/muj/faculties/raveendra.png",
    },
    {
      name: "Mr. Abhishek S. Rao",
      title: "Assistant Prof. - Senior Scale",
      image: "/muj/faculties/abhi.png",
    },
    {
      name: "Dr. Varun Kumar",
      title: "Assistant Prof. - Selection Grade",
      image: "/muj/faculties/varun.png",
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
        <section className="w-full bg-white px-4 md:px-10 xl:px-15 mt-20 py-10">
                  <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-6">
                   
                   {/* LEFT - 60% */}
                   <h1 className="lg:col-span-3 text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight bg-linear-to-r from-[#81320C] to-[#E75A16]  bg-clip-text text-transparent">
                    Manipal University Jaipur Online Courses 2026: Fees, Admission, MBA, BBA & Review
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
                        src="/manipal.png"
                        alt=" Manipal Jaipur Logo"
                        width={526}
                        height={180}
                        className="object-contain w-[320px] md:w-[250px] lg:w-[400px] xl:w-[500px] pr-10 mt-10 md:mt-0"
                      />
                    </MotionWrapper>
            
                  </div>
                </section>
      <section className="w-full bg-white px-10 xl:px-15 ">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 md:mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[32px] md:text-4xl lg:text-[44px]  text-center md:text-left font-bold text-[#270652] mb-4">
              About Manipal University Jaipur (MUJ)
            </h2>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-5 xl:mb-18">
             Manipal University Jaipur (MUJ) is a UGC-approved, NAAC A+ accredited university known for its strong academic standards and industry-relevant teaching. As part of the prestigious Manipal Group, MUJ brings innovation, credibility, and global recognition to online education. Its UGC-entitled online degree programs provide flexible learning options for students and working professionals across India. Backed by an extensive curriculum, experienced faculty, and a cutting-edge digital platform, MUJ offers a complete learning experience aligned with industry expectations.
              </p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
          <div className="relative w-full h-100 flex md:justify-end">
            <div className="max-w-7xl mb-10 md:mb-0 overflow-hidden relative w-full h-full">
              <Image
                src="/muj/mujUniv.png"
                alt="University"
               fill
               className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
       {/* ======= SNAPSHOT SECTION ======= */}
            <section className="w-full mt-8 xl:mt-16  px-4 md:px-10 lg:px-20 font-sans">
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
                      <p className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                        NAAC A+
                      </p>
                       <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                        Rajasthan's First
                      </p>
                    </MotionWrapper>
      
                    {/* STAT 2 */}
                    <MotionWrapper
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
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
                      <p className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px]  xl:text-[62px] font-bold">
                        #9
                      </p>
                      <p className="text-[8px]  md:text-[16px] xl:text-[22px]   md:text-sm font-bold opacity-90 leading-tight">
                        Rank By Careers360
                      </p>
                    </MotionWrapper>
                  </div>
                </MotionWrapper>
              </div>
            </section>


  <UnivCourses
   heading="MUJ Online Courses "
  courses={[
    {
      id: 1,
      universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Master of Business Administration",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/muj/manipal-jaipur-online-mba",
    },
     {
      id: 2,
      universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Bachelor of Business Administration",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/muj/manipal-jaipur-online-bba",
    },
    {
      id: 3,
      universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Bachelor of Commerce",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/muj/manipal-jaipur-online-bcom",
    },
    {
      id: 4,
      universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Bachelor of Computer Applications",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "3 years",
      validity: "6 years",
      coursePath: "/muj/manipal-jaipur-online-bca",
    },
    {
      id: 5,
       universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Master of Computer Applications",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/muj/manipal-jaipur-online-mca",
    },
    {
      id: 6,
       universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Master of Commerce",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/muj/manipal-jaipur-online-mcom",
    },
     {
      id: 7,
       universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "Master of Arts in Economics",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/muj/manipal-jaipur-online-ma",
    },
     {
      id: 8,
      universityLogo: "/manipal.png",
      universityName: "MUJ",
      title: "MA-JMC",
      subtitle: "Manipal Jaipur",
      tag: "Most-Loved",
      duration: "2 years",
      validity: "4 years",
      coursePath: "/muj/manipal-jaipur-online-majmc",
    },
  ]}
/>

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

      <MujCareerServices  benefits={benefits} />

      <Faculties
        heading="Learn from a distinguished group of academicians and industry leaders who bring real-world expertise to every lesson."
        topFaculty={topFaculty}
        bottomFaculty={bottomFaculty}
      />

      <ContactSection/>


      <FAQ faqs={faqs} />

        <section className="w-full mt-8 md:mt-16  px-4 md:px-10 lg:px-20 font-sans">
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

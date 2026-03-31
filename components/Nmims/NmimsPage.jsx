
import Image from "next/image";
import React from "react";
import MotionWrapper from "../Radhya/MotionWrapper";
import SnapshotSection from "../NmimsSection/SnapshotSection";
import CareerServices from "../NmimsSection/CareerServices";
import Enrollment from "../NmimsSection/Enrollment";
import FAQ from "../NmimsSection/FAQ";
import ConnectToday from "../NmimsSection/ConnectToday";
import Faculties from "../NmimsSection/Faculties";
import ContactSection from "../Radhya/ContactSection";
import UnivCourses from "../Radhya/UnivCourses";
import UniversityCards from "../NmimsSection/Logocards";

export default function Page() {
 
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
       <h1 className="lg:col-span-3 text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight bg-linear-to-r from-[#3C3C43] to-[#D3272A]  bg-clip-text text-transparent">
         NMIMS Online Courses 2026: Fees, Admission, MBA, BBA & Review
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
                    src="/nmims.png"
                    alt="NMIMS Logo"
                    width={526}
                    height={180}
                    className="object-contain w-[320px] md:w-[250px] lg:w-[400px] xl:w-[500px] pr-10 mt-10 md:mt-0"
                  />
                </MotionWrapper>
        </div>
      </section>
      <section className="w-full bg-white px-10 xl:px-15 ">
        {/* ======= ABOUT NMIMS SECTION ======= */}
        <div className="w-full mx-auto lg:mb-20 mb-15 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
             <h2 className="text-[32px] md:text-4xl lg:text-[44px]  text-center md:text-left font-bold text-[#270652] mb-4">
              About NMIMS University
            </h2>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
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
          <div className="relative w-full h-100 flex md:justify-end">
            <div className="max-w-7xl mb-10 md:mb-0 overflow-hidden relative w-full h-full">
              <Image
                src="/nmims/nmimsUniv.png"
                alt="Students"
                fill
                className="rounded-2xl object-cover"
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

      <UnivCourses
        heading="Courses"
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

      <Enrollment
        title="Your Path to Enrollment"
        subtitle="Here's how."
        steps={steps}
        defaultOpen={2} // Step 3 open by default
      />

      <CareerServices  />

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

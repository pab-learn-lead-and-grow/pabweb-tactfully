

import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online BCA valid in India?",
    a: "Yes, an Online BCA is valid if pursued from a UGC-approved university.",
  },
  {
    q: "Can I do Online BCA after 12th?",
    a: "Yes, students who have completed 10+2 can pursue an Online BCA program.",
  },
  {
    q: "What is the duration of Online BCA?",
    a: "The duration is typically 3 years divided into 6 semesters.",
  },
  {
    q: "Is coding required for BCA?",
    a: "Basic coding is taught during the course, so prior knowledge is not mandatory.",
  },
  {
    q: "Can I pursue MCA after Online BCA?",
    a: "Yes, Online BCA graduates are eligible to pursue MCA or other postgraduate programs.",
  },
];

const roles = [
  "Software Developer",
  "Data Analyst",
  "System Administrator",
  "UI/UX Designer",
  "Cyber Security Analyst",
  "App Developer",
];

const specializationsData = [
  {
    slug: "software",
    specialization_name: "Software Development",
    cover_image: "/specializations/software.png",
  },
  {
    slug: "datascience",
    specialization_name: "Data Science",
    cover_image: "/specializations/data.png",
  },
  {
    slug: "cybersecurity",
    specialization_name: "Cyber Security",
    cover_image: "/specializations/cyber.png",
  },
  {
    slug: "cloud",
    specialization_name: "Cloud Computing",
    cover_image: "/specializations/cloud.png",
  },
  {
    slug: "ai",
    specialization_name: "Artificial Intelligence",
    cover_image: "/specializations/ai.png",
  },
];

export default function BCA() {
  return (
    <main className="flex flex-col items-center w-full bg-white">

      {/* HERO SECTION */}
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center">
          
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online BCA in India 2026: Top Colleges, Fees, Admission & Eligibility
            </h1>

            <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
            Online BCA programs have gained significant popularity in recent years, offering flexible learning opportunities for students and aspiring professionals alike. These programs are designed to deliver industry-relevant technical knowledge through digital platforms, combining live sessions with recorded content. Learners can develop foundational skills in areas such as programming, database management, and networking, while balancing personal and academic commitments. Additionally, online BCA programs emphasize practical exposure through projects, coding assignments, and real-world applications, helping students build confidence and prepare for careers in a competitive technology-driven environment effectively today while enhancing problem solving and analytical thinking abilities consistently.</p>

            <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
             Online BCA programs typically have a duration of 3 years, structured into 6 semesters, making them suitable for students after completing their 12th education. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners can gradually build expertise in core computer application subjects while also choosing specializations based on their career goals, ensuring a well-rounded and industry-relevant education experience.
            </p>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/mba.png"
               alt="Online BCA course in India with top universities and flexible learning"
              width={461}
              height={644}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHO SHOULD PURSUE */}
      <section className="bg-white py-12 lg:py-20">
       <div className="max-w-7xl mx-auto px-4 lg:px-10">
    <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
          Who Should Pursue an Online BCA?
        </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#4B5563] mb-4">
                An Online BCA is ideal for students who have completed their 12th and want to build a career in the IT and software industry. It is especially suitable for individuals who are interested in programming, technology, and digital systems but also need the flexibility to learn at their own pace. The program provides a strong foundation in computer applications, making it a great starting point for those aiming to enter the tech world early.
              </p>
              <p className="text-[#4B5563]">
                It is also a great choice for students who plan to pursue higher education like MCA or specialize in fields such as Data Science, Cybersecurity, or Artificial Intelligence. Whether you want to become a developer, work in IT services, or explore emerging technologies, an Online BCA equips you with the essential technical skills and practical exposure required to succeed in today’s digital economy.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Students after 12th interested in IT field",
                "Aspiring software developers",
                "Students planning for MCA",
                "Tech enthusiasts",
                "Students seeking flexible learning",
                "Future IT professionals",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
              <span className="w-2 h-2 bg-[#4D964F] rounded-full group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg sm:text-xl font-medium text-[#374151] group-hover:text-[#345895] transition-colors duration-200">
                {item}
              </span>
            </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <ProgramsList title="Top Online BCA Universities" categoryId="bca" />

      {/* WHY BCA */}
     <WhyProgramSection
  title="Why Choose an Online BCA Program?"
  description={[
    "Flexible online learning allows students to study at their own pace while managing personal commitments, making it ideal for learners who prefer convenience and accessibility in education.",
    
    "Build a strong foundation in programming, software development, databases, and networking, which are essential skills required to succeed in the modern IT and technology-driven industry.",
    
    "Online BCA programs are more affordable compared to traditional on-campus degrees, offering cost-effective education without compromising on quality, curriculum, or career opportunities.",
    
    "Industry-relevant curriculum designed with practical projects, coding assignments, and real-world case studies helps students gain hands-on experience and become job-ready from the beginning.",
    
    "Prepares students for higher education like MCA as well as entry-level IT roles, creating multiple career pathways in software development, data analysis, and emerging technologies."
  ]}
/>


       <section className="w-full px-4 md:px-10 lg:px-20 py-12 font-[Inter]">
                  <div className="max-w-7xl mx-auto">
                    {/* Title animation */}
                    <MotionWrapper
                    as ="h2"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
                    >
                      Eligibility for Online BCA Program
                    </MotionWrapper>
          
                    {/* Card container */}
                    <MotionWrapper
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="mt-6 flex flex-col md:flex-row max-w-7xl items-center gap-10"
                    >
                      {/* Left text */}
                      <MotionWrapper
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-black  text-[20px] md:text-3xl font-medium leading-relaxed md:w-3/5"
                      >
                        10+2 from a recognized board with minimum required percentage.
        
                      
                      </MotionWrapper>
          
                      {/* Right image animation */}
                      <MotionWrapper
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="md:w-[45%] w-full flex justify-end pr-0 mt-0 md:pr-0"
                      >
                        <img
                          src="/nmims/nmimsEligibility.png"
                          alt="Eligibility criteria for Online BCA admission in India"
                          className="w-full max-w-[420px] md:max-w-[520px] h-auto rounded-xl object-contain"
                        />
                      </MotionWrapper>
                    </MotionWrapper>
                  </div>
                </section>


     <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-[Inter]">
                  <MotionWrapper
                as="h2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block text-center mx-auto mb-10 text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
              >
                Fees for Online BCA Programs
              </MotionWrapper>
                      <div className="max-w-4xl mx-auto bg-[#3C087E]/5 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
                      >
              
                        {/* Sub-heading */}
                        <p className="text-black text-sm font-semibold md:text-base mb-6 leading-relaxed">
                          Note: To get a detailed understanding of the fee structure, contact
                          a student counsellor.
                        </p>
              
                        {/* Bullet Points */}
                        <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
                          <li>
                           Admission processing fees may be applicable at the time of enrolment, depending on the university.
                          </li>
                          <li>
                            An initial registration amount is usually required to confirm admission, which is adjusted in the total program fee.
                          </li>
                          <li>Examination fees are generally charged per subject and per attempt, as per university guidelines.</li>
                          <li>Project or dissertation fees may also be applicable based on the program structure and university policies.</li>
                          <li>
                           Students may have the option to pay the full program fee in one go or choose flexible payment plans, depending on the university.
                          </li>
                          <li>
                           The fee structure, including all components, is subject to change as per the university’s discretion.
                          </li>
                          <li>
                           Payment methods (such as online transfer, demand draft, etc.) and payee details vary from one university to another.
                          </li>
                          <li>
                           Many universities offer financial assistance options such as education loans, EMI facilities, or no-cost EMI plans.
                          </li>
                          <li>
                           Students are advised to check eligibility with the respective university or counsellor.
                          </li>
                        </ul>
              
                        {/* Scholarship Policy */}
                        <div className="mt-8">
                          <p className="text-black text-lg md:text-xl font-bold mb-2">
                            Scholarship Policy
                          </p>
              
                          <p className="text-black text-sm md:text-base leading-relaxed">
                           Scholarships and financial assistance options may be available depending on the university.Common scholarship categories may include:
                          </p>
                           <ul className="text-black text-sm md:text-base space-y-2 leading-relaxed pl-5 list-disc">
                          <li>
                          Defence personnel and their families
                          </li>
                          <li>
                           Merit-based scholarships Corporate or alumni benefits
                          </li>
                          <li>
                            The eligibility criteria, percentage of scholarship, and applicable terms vary by university.
                          </li>
                          <li>
                            Students are advised to connect with a counsellor to explore available scholarship opportunities and eligibility.</li>
                          </ul>
                        </div>
                      </div>
                    </section>

       <SpecializationSection
  title="Online BCA Specializations"
  description={[
    "Choose from in-demand BCA specializations designed for careers in the IT and software industry.",
    "Each specialization focuses on practical technical skills such as programming, data handling, cybersecurity, cloud-computing, artificial intelligence and modern software development."
  ]}
  programName="BCA"
  specializations={specializationsData}
/>

      {/* CAREER */}
   <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online BCA
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
               <p>Online BCA opens doors to various entry-level IT roles and technical careers.</p>
    
              <p>Students can also pursue higher education like MCA for advanced opportunities.</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pt-2 lg:pl-20">
            <ul className="space-y-6">
              {roles.map((role, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <span className="w-2 h-2 bg-[#4D964F] rounded-full group-hover:scale-110 transition-transform duration-200" />
                  
                  <span className="text-lg sm:text-xl font-medium text-[#374151] group-hover:text-[#345895] transition-colors duration-200">
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>

      {/* FUTURE */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
           <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
                Future of Online BCA
              </h2>
      
               <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
                <p>
                  The future of Online BCA is highly promising as the demand for skilled IT professionals continues to grow across industries. With the rapid advancement of technologies like Artificial Intelligence, Data Science, Cloud Computing, and Cybersecurity, students pursuing BCA gain access to diverse and high-growth career opportunities in the digital economy.
         </p>
      
                <p>
                   Online BCA programs are evolving to include practical learning, real-world projects, and industry-relevant tools, making students job-ready from the start. As companies increasingly value technical skills and hands-on experience, Online BCA graduates are well-positioned to secure roles in the IT sector or pursue advanced studies like MCA for specialized expertise.
           </p>
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
            {/* LEFT SIDE */}
             <div className="w-full mt-10 flex justify-center lg:justify-start">
        <div className="w-full  max-w-[500px]">
          <Image
            src="/nmimsCareer.png"
            alt="Career scope and future opportunities after Online BCA"
            width={500}
            height={500}
            className="w-full h-auto object-contain rounded-xl"
            priority
          />
        </div>
             
            </div>
      
            {/* RIGHT SIDE */}
            <div className="lg:pt-10">
              <ul className="space-y-6">
                {[
  "Increasing demand for skilled IT and software professionals",
  "Rapid growth of AI, Data Science, and Machine Learning fields",
  "Expansion of cloud computing and cybersecurity roles",
  "Rise of remote and global tech job opportunities",
  "Industry-aligned curriculum with practical coding skills",
  "Strong career pathway towards MCA and advanced tech roles",
].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-[#4D964F] rounded-full group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-lg sm:text-xl font-medium text-[#374151] group-hover:text-[#345895] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
      
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} />

      <ConnectToday />
    </main>
  );
}

import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online MCA valid in India?",
    a: "Yes, an Online MCA is valid if pursued from a UGC-approved university.",
  },
  {
    q: "Who is eligible for Online MCA?",
    a: "Candidates with a bachelor's degree in BCA, BSc IT, or related fields are eligible.",
  },
  {
    q: "What is the duration of Online MCA?",
    a: "The duration is typically 2 years divided into 4 semesters.",
  },
  {
    q: "Is MCA good for career growth?",
    a: "Yes, MCA offers advanced technical skills leading to high-paying IT roles.",
  },
  {
    q: "Can I get a job after Online MCA?",
    a: "Yes, MCA graduates can work as developers, analysts, engineers, and IT specialists.",
  },
];

const roles = [
  "Full Stack Developer",
  "Data Scientist",
  "Cloud Engineer",
  "Cyber Security Analyst",
  "AI/ML Engineer",
  "System Architect",
  "DevOps Engineer",
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

export default function MCA() {
  return (
    <main className="flex flex-col items-center w-full bg-white">

      {/* HERO */}
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center">

          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
            Online MCA in India 2026: Top Colleges, Fees, Admission & Eligibility
            </h1>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-4">
             Online MCA programs have gained significant popularity in recent years, offering flexible learning opportunities for students and working professionals alike. These programs are designed to deliver advanced technical knowledge through digital platforms, combining live sessions with recorded content. Learners can develop expertise in areas such as programming, data science, and cloud computing, while balancing personal and professional commitments. Additionally, online MCA programs emphasize practical exposure through projects, coding assignments, and real-world applications, helping students build confidence and advance their careers in a competitive technology-driven environment effectively today while enhancing problem solving and technical decision making abilities consistently. </p>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
             Online MCA programs typically have a duration of 2 years, structured into 4 semesters, making them suitable for graduates and working professionals. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners can gradually build expertise in core computer science subjects while also choosing specializations based on their career goals, ensuring a well-rounded and industry-relevant education experience.
            </p>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/mba.png"
               alt="Online MCA course in India with top universities and flexible learning"
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
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] mb-6">
            Who Should Pursue an Online MCA?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
              <p className="text-[#4B5563] mb-4">
                Online MCA is ideal for graduates who want to advance their knowledge in computer science and IT. It is suitable for individuals with a background in BCA, IT, or related fields.
              </p>

              <p className="text-[#4B5563]">
                It is perfect for those aiming to build careers in software development, data science, cloud computing, and advanced technical roles in the IT industry.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "BCA or IT graduates",
                "Aspiring software engineers",
                "Developers seeking career growth",
                "Students interested in advanced IT roles",
                "Professionals aiming to specialize in tech",
                "Individuals targeting high-paying IT jobs",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <span className="w-2 h-2 bg-[#4D964F] rounded-full" />
                  <span className="text-lg font-medium text-[#374151]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <ProgramsList title="Top Online MCA Universities" categoryId="mca" />

      {/* WHY MCA */}
      <WhyProgramSection
        title="Why Choose an Online MCA Program?"
        description={[
          "Advanced curriculum covering programming, AI, cloud computing, and software development for high-level IT careers.",
          "Flexible learning allows working professionals to upgrade their technical skills without leaving their jobs.",
          "Industry-focused learning with real-world projects and hands-on coding experience.",
          "Higher earning potential with access to advanced technical and leadership roles in IT.",
          "Strong pathway to specialized careers in data science, cybersecurity, and software engineering.",
        ]}
      />

      {/* ELIGIBILITY */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]">
            Eligibility for Online MCA Program
          </h2>

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
                            Bachelor’s Degree (10+2+3) in any discipline from recognised University or an equivalent degree recognised by Association of Indian Universities (AIU) with minimum 40% marks at Graduation Level.
                 
                         
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
                                         alt="Eligibility criteria for Online MCA admission in India"
                                         width={520}
                                         height={350}
                                         className="w-full max-w-105  h-auto rounded-xl object-contain"
                                         sizes="(max-width: 768px) 100vw, 520px"
                                       />
                                     </MotionWrapper>
                       </MotionWrapper>

                 <p className="lg:text-xl italic text-black">
                   NOTE: Eligibility may vary as per the college requirements*.
                 </p>
        </div>
      </section>

     <section className="w-full px-4 md:px-12 lg:px-20 py-12 font-sans">
                  <MotionWrapper
                as="h2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block text-center mx-auto mb-10 text-[32px] md:text-5xl lg:text-[64px] font-bold text-[#270652]"
              >
                Fees for Online MCA Programs
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

      {/* SPECIALIZATION */}
      <SpecializationSection
        title="Online MCA Specializations"
        description={[
          "Choose from advanced MCA specializations designed for high-demand careers in IT and software development.",
          "Each specialization focuses on practical technical skills such as programming, cloud computing, artificial intelligence, and cybersecurity.",
        ]}
        programName="MCA"
        specializations={specializationsData}
      />

      {/* CAREER */}
      <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
             Career Opportunities After Online MCA
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
               <p>Online MCA opens doors to advanced technical roles in the IT industry.
          </p>
    
   <p> Whether you are a working professional aiming for career growth or a fresher looking to build a strong foundation in management, an Online MBA helps you transition into high-paying managerial and leadership roles.      
    </p>
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

     
       <section className="bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
           <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
                Future of Online MCA
              </h2>
      
               <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
                <p>
                  The future of Online MCA is strongly aligned with the rapid growth of the global IT industry, where demand for highly skilled professionals continues to rise across domains like software development, data science, cloud computing, and cybersecurity. As businesses increasingly adopt digital solutions, MCA graduates are becoming essential for building scalable systems, managing data, and driving innovation in a technology-first economy. </p>
      
                <p>
                 Online MCA programs are evolving with industry-focused curriculum, hands-on projects, and exposure to emerging technologies, ensuring students are job-ready from day one. With continuous advancements in Artificial Intelligence, automation, and cloud infrastructure, MCA graduates are well-positioned to secure high-paying roles, work with global companies, and build long-term, future-proof careers in the tech industry.
          </p>
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
            {/* LEFT SIDE */}
             <div className="w-full mt-10 flex justify-center lg:justify-start">
        <div className="w-full  max-w-[500px]">
          <Image
            src="/nmimsCareer.png"
             alt="Career scope and future opportunities after Online MCA"
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
  "High demand for advanced IT and software development professionals",
  "Rapid growth in AI, Data Science, and Machine Learning careers",
  "Expansion of cloud computing, DevOps, and system architecture roles",
  "Strong demand for cybersecurity and data protection experts",
  "Global remote job opportunities in top tech companies",
  "Higher salary growth for specialized technical skill sets",
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

      <FAQ faqs={faqs} />
      <ConnectToday />

    </main>
  );
}
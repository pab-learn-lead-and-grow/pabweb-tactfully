"use client";

import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "What is an Executive MBA?",
    a: "An Executive MBA (EMBA) is designed for working professionals with managerial experience who want to advance into leadership roles.",
  },
  {
    q: "Who should pursue an Executive MBA?",
    a: "Professionals with 2-5+ years of work experience aiming for career growth and leadership positions.",
  },
  {
    q: "What is the duration of Executive MBA?",
    a: "Typically 1 to 2 years depending on the university and program structure.",
  },
  {
    q: "Can I do Executive MBA while working?",
    a: "Yes, Executive MBA programs are designed for working professionals with flexible schedules.",
  },
  {
    q: "Is Executive MBA valuable?",
    a: "Yes, it enhances leadership skills, strategic thinking, and career growth opportunities.",
  },
];

const roles = [
  "Senior Manager",
  "Business Leader",
  "Strategy Consultant",
  "Operations Head",
  "Product Head",
  "Entrepreneur",
  "Business Director",
  "Leadership Roles",
];

const specializationsData = [
  {
    slug: "marketing",
    specialization_name: "Marketing Management",
    cover_image: "/specializations/marketing.png",
  },
  {
    slug: "leadership",
    specialization_name: "Leadership and Strategy",
    cover_image: "/specializations/leadership.png",
  },
  {
    slug: "finance",
    specialization_name: "Applied Finance",
    cover_image: "/specializations/finance.png",
  },
  {
    slug: "operations",
    specialization_name: "Operations & Supply Chain Management",
    cover_image: "/specializations/supply.png",
  },
  {
    slug: "digital",
    specialization_name: "Digital Marketing",
    cover_image: "/specializations/digital.png",
  }
];

export default function ExecutiveMBA() {
  return (
    <main className="flex flex-col items-center w-full bg-white">

      {/* HERO */}
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center">

          <div>
           <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
              Executive MBA in India 2026: Top Colleges, Fees, Eligibility & Admission
            </h1>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-4">
             Executive MBA programs have gained significant popularity in recent years, offering flexible learning opportunities for experienced professionals and working leaders alike. These programs are designed to deliver industry-relevant knowledge through digital platforms, combining live sessions with recorded content. Learners can develop advanced managerial skills in areas such as strategy, finance, and operations, while balancing professional responsibilities and leadership roles effectively. Additionally, executive MBA programs emphasize practical exposure through case studies, projects, and real-world applications, helping professionals build confidence and advance their careers in a competitive business environment effectively today while enhancing leadership and strategic decision making abilities consistently.
            </p>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-4">
             Executive MBA programs typically have a duration of 1 to 2 years, structured into multiple modules or semesters, making them suitable for working professionals. These programs are recognized by accredited universities, ensuring their validity and acceptance across industries. With a structured learning format, learners can gradually build expertise in advanced management subjects while also choosing specializations based on their career goals, ensuring a well-rounded and industry-relevant education experience.
            </p>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/mba.png"
              alt="Online executive mba course in India with top universities and flexible learning"
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
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-[#270652] mb-6">
            Who Should Pursue an Executive MBA?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
              <p className="text-[#4B5563] mb-4">
              An Executive MBA is ideal for professionals who want to enhance their leadership skills without leaving their current roles. It provides flexibility, strategic exposure, and access to quality education for learners at advanced stages of their professional journey. </p>

              <p className="text-[#4B5563]">
               Whether you aim to accelerate your career, move into senior leadership roles, or expand your business, an Executive MBA equips you with the knowledge and confidence to achieve goals.
              </p>
            </div>

               <div className="lg:pt-2">
        <ul className="space-y-6">
              {[
                "Working professionals with experience",
                "Mid-level managers",
                "Team leaders and supervisors",
                "Entrepreneurs",
                "Professionals seeking leadership roles",
                "Individuals aiming for career growth",
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
        </div>
      </section>

      {/* UNIVERSITIES */}
      <ProgramsList title="Top Executive MBA Universities" categoryId="exec-mba" />

      {/* WHY */}
      <WhyProgramSection
        title="Why Choose an Executive MBA Program?"
        description={[
          "Designed specifically for working professionals to enhance leadership and strategic management skills without leaving their current jobs.",
          "Flexible learning format with weekend or online classes allows professionals to balance work, study, and personal commitments effectively.",
          "Industry-relevant curriculum focusing on real-world business challenges, case studies, and leadership development.",
          "Helps professionals transition into senior management and leadership roles across industries.",
          "Strong networking opportunities with experienced peers, alumni, and industry professionals.",
        ]}
      />

      {/* ELIGIBILITY */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-5xl lg:text-[56px] font-bold text-[#270652]">
            Eligibility for Executive MBA Program
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
                            Bachelor’s Degree (10+2+3) in any discipline from recognized University or an equivalent degree recognised by Association of Indian Universities (AIU) with a minimum of 55% and 3 + years of Work Experience (50% for SC/ST/OBC/PwD).
                  
                          
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
                              alt="Eligibility criteria for Online executive mba admission in India"
                              className="w-full max-w-[420px] md:max-w-[520px] h-auto rounded-xl object-contain"
                            />
                          </MotionWrapper>
                        </MotionWrapper>
          
                         <p className="lg:text-xl italic text-black">
                             NOTE: Eligibility may vary as per the college requirements*.
                           </p>
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
                   Fees for Executive Mba Program
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
        title="Executive MBA Specializations"
        description={[
          "Choose from leadership-focused MBA specializations designed for senior-level roles.",
          "Each specialization enhances strategic thinking, decision-making, and business leadership capabilities.",
        ]}
        programName="MBA (WX)"
        specializations={specializationsData}
      />

      {/* CAREER */}
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Executive MBA
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
             <p>
  Executive MBA helps professionals move into leadership and senior management roles across industries, enabling them to take on greater responsibilities and drive organizational growth effectively.
</p>

<p>
  It enhances decision-making, strategic thinking, and leadership capabilities while also improving problem-solving skills and preparing individuals for complex business challenges in dynamic environments.
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

      {/* FUTURE */}
      <section className="bg-white py-12 lg:py-20">
       <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
               Future of Executive MBA
             </h2>
     
              <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
               <p>
                 The future of Executive MBA programs is closely tied to the growing demand for skilled leaders who can navigate complex, technology-driven business environments. As industries evolve with digital transformation, data-driven decision-making, and global competition, organizations increasingly seek professionals with advanced strategic and leadership capabilities. Executive MBA programs are continuously adapting by integrating real-world business challenges, global exposure, and practical learning, ensuring professionals remain relevant and competitive in their careers.
               </p>
     
               <p>
               With rising demand across sectors and strong career outcomes, Executive MBA graduates are expected to experience accelerated career growth, leadership transitions, and higher earning potential. The emphasis on networking, industry collaboration, and immediate workplace application makes these programs a future-proof investment for professionals aiming to move into senior management and executive roles.</p>
             </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
           {/* LEFT SIDE */}
            <div className="w-full mt-10 flex justify-center lg:justify-start">
       <div className="w-full  max-w-[500px]">
         <Image
           src="/nmimsCareer.png"
           alt="Career scope and future opportunities after Online executive mba"
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
  "High demand for leadership professionals",
  "Growing acceptance among top employers",
  "Focus on strategy and decision-making skills",
  "Strong global networking opportunities",
  "Rise of executive leadership roles",
  "Higher salary growth potential",
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
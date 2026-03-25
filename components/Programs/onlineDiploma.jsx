import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online Diploma valid in India?",
    a: "Yes, online diploma programs are valid if offered by recognized institutions.",
  },
  {
    q: "What is the duration of an Online Diploma?",
    a: "Typically ranges from 6 months to 1 year depending on the course.",
  },
  {
    q: "Who can apply for an Online Diploma?",
    a: "Students after 12th, graduates, and working professionals can apply.",
  },
  {
    q: "Is an Online Diploma good for career?",
    a: "Yes, it helps in skill development, career growth, and job readiness.",
  },
  {
    q: "Can I get a job after an Online Diploma?",
    a: "Yes, diploma programs are designed to provide job-ready skills for various industries.",
  },
  {
    q: "Can I pursue higher studies after a diploma?",
    a: "Yes, you can pursue degree programs or certifications after completing a diploma.",
  },
];

const roles = [
  "Marketing Executive",
  "HR Executive",
  "Operations Executive",
  "Finance Executive",
  "Business Development Executive",
  "Sales Executive",
  "Customer Relationship Manager",
  "Administrative Executive",
];

const specializationsData = [
  {
    slug: "marketing",
    specialization_name: "Marketing Management",
    cover_image: "/specializations/marketing.png",
  },
  {
    slug: "finance",
    specialization_name: "Finance Management",
    cover_image: "/specializations/finance.png",
  },
  {
    slug: "hr",
    specialization_name: "Human Resource Management",
    cover_image: "/specializations/hr.png",
  },
  {
    slug: "operations",
    specialization_name: "Operations Management",
    cover_image: "/specializations/supply.png",
  },
  {
    slug: "business",
    specialization_name: "Business Management",
    cover_image: "/specializations/business.png",
  },
];

export default function diploma(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
           <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online Diploma Courses in India 2026: Top Programs, Fees & Admission
            </h1>

            <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online Diploma programs have gained significant popularity in recent years, offering flexible and short-term learning opportunities for students and working professionals alike. These programs are designed to deliver industry-relevant business knowledge through digital platforms, combining live sessions with recorded content. Learners can develop practical skills in areas such as finance, marketing, operations, and human resource management while balancing personal and professional commitments. Additionally, online diploma programs emphasize hands-on learning through projects, case studies, and real-world applications, helping individuals build job-ready skills in a competitive business environment.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online Diploma programs typically have a duration ranging from 6 months to 1 year, making them ideal for individuals seeking quick skill development and career advancement. These programs are often offered by recognized institutions, ensuring their credibility and industry relevance. With a structured learning format, learners can gain specialized knowledge in a short period and enhance their career opportunities across various business domains.
</p>
</div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto justify-center">  <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
               alt="Online diploma course in India with top universities and flexible learning"
                width={461}
                height={644}
                className="rounded-2xl object-cover"
                priority/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 lg:px-10">
    <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
          Who Should Pursue Online Diploma?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
         <p>
An Online Diploma is ideal for individuals who want to gain practical skills and industry knowledge in a short duration without committing to a full-time degree. It provides flexibility and focused learning for students, freshers, and working professionals.
</p>

<p>
Whether you aim to upgrade your skills, switch careers, or improve your job prospects, an Online Diploma equips you with the knowledge and confidence to achieve your professional goals.
</p>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
  "Students looking for short-term skill-based programs",
  "Working professionals seeking career advancement",
  "Individuals planning career switch",
  "Entrepreneurs and business owners",
  "Learners looking for flexible education",
  "Candidates aiming for job-ready skills",
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
       <ProgramsList
      title="Top Online Diploma Universities"
      categoryId="diploma"
    />

     <WhyProgramSection
  title="Why Choose Online Diploma Program?"
  description={[
    "Short-term duration allows learners to gain practical skills quickly and enter the workforce faster.",
    
    "Flexible learning format enables students and professionals to balance education with work and personal commitments.",
    
    "Industry-focused curriculum designed to provide hands-on experience through projects and real-world case studies.",
    
    "Affordable compared to full-time degree programs while still offering valuable career-oriented knowledge.",
    
    "Helps in career advancement, skill enhancement, and transition into new roles across business domains.",
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
                className="inline-block text-[32px] md:text-5xl lg:text-[56px] font-bold text-[#270652]"
              >
                Eligibility for Online Diploma Program
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
                
10+2 (Higher Secondary) or equivalent from a recognized board. Some diploma programs may also accept graduates or working professionals depending on the specialization.

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
                     alt="Eligibility criteria for Online diploma admission in India"
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
                     Fees for Online Diploma Program
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
  title="Online Diploma Specializations"
  description={[
    "Choose from industry-relevant diploma specializations designed for career growth and skill development.",
    "Each specialization focuses on practical business skills required in today’s competitive job market.",
  ]}
  programName="Diploma"
  specializations={specializationsData}
/>

 <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online Diploma
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
             <p>
Online Diploma programs open doors to entry-level and mid-level roles across various business domains, where practical skills and industry knowledge are highly valued.
</p>

<p>
Learners can quickly enter the workforce, switch careers, or enhance their current job roles with specialized skills gained through diploma programs.
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
          Future of Online Diploma
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
         <p>
The future of Online Diploma programs is highly promising as industries increasingly demand skilled professionals with practical knowledge and job-ready capabilities. With the rapid evolution of business environments, diploma holders gain quick access to career opportunities across multiple sectors.
</p>

<p>
Online diploma programs are evolving to include industry-driven curriculum, real-world applications, and skill-based learning, making learners immediately employable. As companies prioritize skills over degrees in many roles, diploma graduates are well-positioned for career growth and advancement.
</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
       alt="Career scope and future opportunities after Online diploma"
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
  "Growing demand for skill-based professionals",
  "Faster entry into job market",
  "Industry-focused practical learning",
  "Rise of short-term career programs",
  "Opportunities across multiple industries",
  "Strong career growth potential",
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
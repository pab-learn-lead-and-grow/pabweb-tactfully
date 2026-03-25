
import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online BCom (Honours) valid in India?",
    a: "Yes, an Online BCom (Honours) is valid if pursued from a UGC-approved university. It is recognized for higher studies and job opportunities across industries.",
  },
  {
    q: "What is the difference between BCom and BCom (Honours)?",
    a: "BCom (Honours) offers more in-depth knowledge and specialization in subjects like finance and accounting, whereas a regular BCom provides a broader overview of commerce topics.",
  },
  {
    q: "What is the duration of an Online BCom (Honours)?",
    a: "The duration is typically 3 years, divided into 6 semesters, similar to a regular undergraduate commerce degree.",
  },
  {
    q: "Can I pursue CA, CMA, or CFA after Online BCom (Honours)?",
    a: "Yes, BCom (Honours) provides a strong foundation for professional courses like CA, CMA, and CFA, making it a preferred choice for students aiming for finance careers.",
  },
  {
    q: "Is Online BCom (Honours) good for career growth?",
    a: "Yes, it offers better career opportunities compared to a regular BCom due to its advanced curriculum and specialization in core commerce subjects.",
  },
  {
    q: "Can I do MBA after Online BCom (Honours)?",
    a: "Yes, graduates can pursue MBA and other postgraduate programs to enhance their career prospects and move into managerial roles.",
  },
  {
    q: "What career options are available after Online BCom (Honours)?",
    a: "Graduates can work as accountants, financial analysts, auditors, banking professionals, or pursue higher studies and professional certifications.",
  },
  {
    q: "Is Online BCom (Honours) suitable for working students?",
    a: "Yes, the flexible learning format allows students to study at their own pace while managing other commitments.",
  },
];

const roles = [
  "Accountant",
  "Tax Consultant",
  "Banking Executive",
  "Auditor",
  "Business Analyst",
  "Investment Analyst",
];

export default function BComHons() {
  return (
    <main className="flex flex-col items-center w-full bg-white">

      {/* HERO */}
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center">

          <div>
             <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online B.Com (Hons.) in India 2026: Top Colleges, Fees & Admission
            </h1>

           <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
  Online BCom (Honours) programs have gained significant popularity in recent years, offering flexible learning opportunities for students and aspiring professionals alike. These programs are designed to deliver advanced commerce knowledge through digital platforms, combining live sessions with recorded content. Learners can develop in-depth expertise in areas such as accounting, finance, economics, and business management while balancing academic commitments. Additionally, online BCom (Honours) programs emphasize practical exposure through projects, case studies, and real-world applications, helping students build analytical skills and prepare for careers in a competitive business environment.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
  Online BCom (Honours) programs typically have a duration of 3 years, structured into 6 semesters, making them suitable for students after completing their 12th education. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners gain deeper specialization in core commerce subjects along with advanced electives, enabling a strong academic foundation and better career opportunities in finance, accounting, and business domains.
</p>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/mba.png"
             alt="Online BCOM Honours course in India with top universities and flexible learning"
              width={461}
              height={644}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-[#270652] mb-6">
            Who Should Pursue Online BCom Hons.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
            <p>
  An Online BCom (Honours) is ideal for students who want to gain in-depth knowledge in commerce, accounting, and finance while maintaining flexibility in their learning. It provides advanced academic exposure, strong analytical skills, and quality education for learners aiming to build a solid foundation in core commerce subjects.
</p>

<p>
  Whether you aim to pursue higher studies like MBA, CA, or professional certifications, build a career in finance, accounting, or banking, or explore business opportunities, an Online BCom (Honours) equips you with the knowledge and confidence to achieve your goals.
</p>
            </div>

          <div className="lg:pt-2">
             <ul className="space-y-6">
              {[
                "Commerce students after 12th",
                "Aspiring accountants",
                "Students planning for MBA or CA",
                "Finance enthusiasts",
                "Students seeking flexible learning",
                "Future business professionals",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#4D964F] rounded-full" />
                  <span className="text-lg text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
           </div>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <ProgramsList title="Top Online BCom(Hon.) Universities" categoryId="bcomhonours" />

      {/* WHY */}
     <WhyProgramSection
  title="Why Choose Online BCom (Honours)?"
  description={[
    "Flexible learning format allows students to pursue an in-depth commerce degree while managing academic goals and personal commitments effectively.",
    
    "Provides advanced knowledge in accounting, finance, economics, and business concepts, helping students build strong analytical and problem-solving skills.",
    
    "More academically rigorous than a regular BCom, offering deeper subject understanding and better preparation for competitive and professional careers.",
    
    "Industry-relevant curriculum with practical exposure through case studies, projects, and real-world financial applications for better career readiness.",
    
    "Prepares students for higher studies like MBA, CA, CFA, or other professional certifications, opening diverse career pathways in commerce and finance."
  ]}
/>

      {/* ELIGIBILITY */}
      <section className="py-12 px-4 lg:px-20">
        <h2 className="text-[32px] lg:text-[56px] xl:text-[64px] font-bold text-[#270652] mb-6">
          Eligibility for Online BCom(Honours) Program
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
                          alt="Eligibility criteria for Online BCOM Honours admission in India"
                           className="w-full max-w-[420px] md:max-w-[520px] h-auto rounded-xl object-contain"
                         />
                       </MotionWrapper>
                     </MotionWrapper>
       
                      <p className="lg:text-xl italic text-black">
                          NOTE: Eligibility may vary as per the college requirements*.
                        </p>
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
                   Fees for Online BCom(Hons.)
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

      {/* CAREER */}
      <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online BCOM(Honours)
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
  <p>
    Online BCom opens doors to various entry-level roles in accounting, finance, banking, and business sectors.
  </p>

  <p>
    Students can also pursue higher education like MBA, CA, or MCom for advanced career opportunities.
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
      Future of Online BCOM (Honours)
    </h2>

    <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
      <p>
        The future of Online BCom (Honours) is highly promising as the demand for highly skilled commerce professionals continues to grow across industries. With the rapid expansion of finance, investment, taxation, and global business sectors, students pursuing BCom (Honours) gain access to diverse and high-growth career opportunities in the evolving economic environment.
      </p>

      <p>
        Online BCom (Honours) programs are evolving to include advanced academic learning, real-world financial applications, and industry-relevant tools, making students highly career-ready. As organizations increasingly value analytical skills and domain expertise, graduates are well-positioned to secure roles in finance and corporate sectors or pursue advanced studies like MBA, CA, or CFA for specialized career growth.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="w-full mt-10 flex justify-center lg:justify-start">
        <div className="w-full max-w-[500px]">
          <Image
            src="/nmimsCareer.png"
            alt="Career scope and future opportunities after Online BCOM Honours"
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
            "High demand for advanced commerce professionals",
            "Growth in finance, investment, and banking sectors",
            "Expansion of accounting, auditing, and taxation roles",
            "Rise of global and corporate business opportunities",
            "Focus on analytical and financial decision-making skills",
            "Pathway to MBA, CA, CFA, and professional careers",
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
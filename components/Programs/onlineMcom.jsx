
import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online MCom valid in India?",
    a: "Yes, an Online MCom is valid if pursued from a UGC-approved university and is recognized for jobs and higher education.",
  },
  {
    q: "Who is eligible for Online MCom?",
    a: "Candidates with a bachelor’s degree in commerce or related fields such as BCom, BBA, or Economics are eligible to apply.",
  },
  {
    q: "What is the duration of an Online MCom program?",
    a: "The duration is typically 2 years, divided into 4 semesters.",
  },
  {
    q: "Is Online MCom good for career growth?",
    a: "Yes, it provides advanced knowledge in finance, accounting, and taxation, helping candidates move into higher-level roles.",
  },
  {
    q: "Can I pursue CA, CMA, or CFA after Online MCom?",
    a: "Yes, Online MCom complements professional certifications like CA, CMA, and CFA and strengthens career prospects in finance.",
  },
  {
    q: "Can I do MBA after Online MCom?",
    a: "Yes, MCom graduates are eligible to pursue MBA and other postgraduate or professional programs for career advancement.",
  },
];

const roles = [
  "Financial Analyst",
  "Senior Accountant",
  "Tax Consultant",
  "Auditor",
  "Banking Professional",
  "Investment Analyst",
  "Finance Manager",
  "Accounts Manager",
];

export default function MCom() {
  return (
    <main className="flex flex-col items-center w-full bg-white">

      {/* HERO */}
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center">

          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online M.Com in India 2026: Top Colleges, Fees, Admission & Eligibility
            </h1>

            <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
  Online MCom programs have gained significant popularity in recent years, offering flexible learning opportunities for graduates and working professionals alike. These programs are designed to deliver advanced commerce and financial knowledge through digital platforms, combining live sessions with recorded content. Learners can develop expertise in areas such as accounting, finance, taxation, and business management while balancing professional and personal commitments. Additionally, online MCom programs emphasize practical exposure through projects, case studies, and real-world applications, helping students enhance analytical skills and advance their careers in a competitive business environment.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
  Online MCom programs typically have a duration of 2 years, structured into 4 semesters, making them suitable for graduates seeking specialization in commerce and finance. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners gain deeper expertise in core commerce subjects along with advanced electives, enabling better career opportunities in finance, accounting, and academic or professional domains.
</p>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/mba.png"
             alt="Online MCOM course in India with top universities and flexible learning"
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
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] mb-6">
            Who Should Pursue an Online MCom?
          </h2>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
    <p>
      An Online MCom is ideal for graduates who want to gain advanced knowledge in commerce, accounting, and finance without compromising on flexibility. It provides in-depth subject expertise, analytical skills, and quality education for learners aiming to strengthen their professional and academic careers.
    </p>

    <p>
      Whether you aim to pursue careers in finance, accounting, taxation, or academics, or prepare for professional certifications and higher studies, an Online MCom equips you with the knowledge and confidence to achieve your goals.
    </p>
  </div>

  <div className="lg:pt-4">
    <ul className="space-y-6">
      {[
        "BCom or commerce graduates",
        "Aspiring finance and accounting professionals",
        "Students preparing for CA, CMA, or other certifications",
        "Individuals interested in teaching or research",
        "Working professionals seeking career growth",
        "Candidates aiming for specialization in commerce",
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
      <ProgramsList title="Top Online MCom Universities" categoryId="mcom" />

      {/* WHY */}
      <WhyProgramSection
        title="Why Choose an Online MCom Program?"
       description={[
  "Flexible learning format allows graduates and working professionals to pursue advanced commerce education while managing jobs and personal commitments effectively.",
  
  "Provides in-depth knowledge in accounting, finance, taxation, and business concepts, helping students develop strong analytical and decision-making skills.",
  
  "Cost-effective alternative to traditional postgraduate programs without compromising on academic quality, faculty, or industry relevance.",
  
  "Industry-oriented curriculum with practical exposure through case studies, research-based learning, and real-world financial applications.",
  
  "Prepares students for higher career growth, professional certifications like CA, CMA, and roles in finance, accounting, or academic fields.",
]}
      />

      {/* ELIGIBILITY */}
      <section className="py-12 px-4 lg:px-20">
        <h2 className="text-[32px] lg:text-[56px] font-bold text-[#270652] mb-6">
          Eligibility for Online MCom Program
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
                          <p>
  Bachelor’s degree in Commerce or related field from a recognized university with minimum required marks as per university guidelines.
</p>
               
                       
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
                          alt="Eligibility criteria for Online MCOM admission in India"
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
                   Fees for Online MCom Programs
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online MCOM
            </h2>

           <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
  <p>
    Online MCom opens doors to advanced career opportunities in finance, accounting, taxation, and corporate sectors, where specialized knowledge and analytical skills are highly valued.
  </p>

  <p>
    Graduates can pursue roles in financial management, auditing, banking, or academics, and also prepare for professional certifications like CA, CMA, or CFA to further enhance their career prospects.
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
                      Future of Online MCOM
                    </h2>
            
                    <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
<p>
  The future of Online MCom is highly promising as the demand for specialized finance and commerce professionals continues to grow across industries. With the expansion of corporate finance, banking, taxation, and global business sectors, MCom graduates gain access to advanced and high-growth career opportunities in the evolving economic environment.
</p>

<p>
  Online MCom programs are evolving to include research-based learning, practical financial applications, and industry-relevant tools, making graduates career-ready for senior roles. As organizations increasingly value advanced knowledge and analytical expertise, Online MCom graduates are well-positioned to secure roles in finance, corporate sectors, or pursue professional certifications like CA, CMA, or CFA for specialized career growth.
</p>
</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
                  {/* LEFT SIDE */}
                   <div className="w-full mt-10 flex justify-center lg:justify-start">
              <div className="w-full  max-w-[500px]">
                <Image
                  src="/nmimsCareer.png"
                  alt="Career scope and future opportunities after Online MCOM"
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
  "High demand for finance professionals",
  "Growth in corporate finance roles",
  "Expansion of taxation and audit careers",
  "Rise of global business opportunities",
  "Focus on analytical and research skills",
  "Pathway to CA, CMA, and CFA",
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
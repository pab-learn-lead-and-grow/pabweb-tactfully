
import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online BCom (International) valid in India?",
    a: "Yes, it is valid if offered by a UGC-approved university, and the ACCA integration adds global recognition for finance and accounting careers.",
  },
  {
    q: "What is the benefit of ACCA in BCom International?",
    a: "ACCA provides global certification in accounting and finance, allowing students to pursue international career opportunities alongside their degree.",
  },
  {
    q: "Can I do BCom International Finance & ACCA after 12th?",
    a: "Yes, students who have completed 10+2 can enroll in this program and start building a career in global finance and accounting.",
  },
  {
    q: "What is the duration of Online BCom (International)?",
    a: "The duration is typically 3 years, divided into 6 semesters, along with preparation for ACCA examinations.",
  },
  {
    q: "Is BCom International Finance & ACCA good for career growth?",
    a: "Yes, it offers strong career prospects in multinational companies, finance firms, and global accounting roles with higher salary potential.",
  },
  {
    q: "Can I pursue MBA after BCom International Finance & ACCA?",
    a: "Yes, graduates can pursue MBA or continue with ACCA to advance their careers in global finance and management roles.",
  },
];

const roles = [
  "Financial Analyst",
  "Audit Associate",
  "Tax Consultant",
  "Accounts Executive",
  "Corporate Finance Analyst",
  "Investment Banking Analyst",
  "Risk Analyst",
  "Management Accountant",
];

export default function BComInt() {
  return (
    <main className="flex flex-col items-center w-full bg-white">

      {/* HERO */}
      <section className="bg-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center">

          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online B.Com (International) 2026: Top Colleges, Fees & Admission
            </h1>

           <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
  Online BCom (International) programs have gained significant popularity in recent years, offering flexible learning opportunities for students and aspiring professionals alike. These programs are designed to deliver globally relevant commerce knowledge through digital platforms, combining live sessions with recorded content. Learners can develop expertise in areas such as international finance, global accounting standards, economics, and business management while balancing academic commitments. Additionally, online BCom (International) programs emphasize practical exposure through projects, case studies, and real-world applications, helping students build analytical skills and prepare for careers in a global business environment.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
  Online BCom (International) programs typically have a duration of 3 years, structured into 6 semesters, making them suitable for students after completing their 12th education. These programs are recognized by UGC-approved universities and may also align with international academic standards, ensuring their validity and global acceptance. With a semester-based structure, learners gain exposure to international commerce practices along with specialized subjects, enabling a strong academic foundation and better career opportunities in global finance, multinational companies, and international business domains.
</p>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/mba.png"
              alt="Online BCOM International program course in India with top universities and flexible learning"
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
            Who Should Pursue Online BCom Int. 
          </h2>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
    <p>
      An Online BCom (International) is ideal for students who want to build a strong foundation in global commerce, accounting, and finance without compromising on flexibility. It provides international exposure, industry-relevant knowledge, and quality education for learners at the beginning of their academic and professional journey.
    </p>

    <p>
      Whether you aim to pursue higher studies like MBA or global certifications, build a career in multinational companies, or explore international business opportunities, an Online BCom (International) equips you with the knowledge and confidence to achieve your goals.
    </p>
  </div>

  <div className="lg:pt-2">
    <ul className="space-y-6">
      {[
        "Students aiming for global careers",
        "Aspiring finance and accounting professionals",
        "Students planning for MBA or global certifications",
        "Individuals interested in international business",
        "Students seeking flexible global education",
        "Future professionals targeting MNC roles",
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
      <ProgramsList title="Top Online BCom Int. Universities" categoryId="bcomint" />

      {/* WHY */}
      <WhyProgramSection
        title="Why Choose Online BCom International"
       description={[
  "Flexible online learning format allows students to gain global commerce knowledge while managing academic goals and personal commitments effectively from anywhere.",
  
  "Provides strong exposure to international finance, global accounting standards, and cross-border business practices essential for modern commerce careers.",
  
  "Industry-aligned curriculum designed with global relevance, including case studies and real-world applications focused on international markets and business environments.",
  
  "Enhances analytical, strategic, and decision-making skills required for roles in multinational companies and international financial institutions.",
  
  "Prepares students for global career opportunities and professional certifications like ACCA, along with higher studies such as MBA and specialized finance programs.",
]}
      />

      {/* ELIGIBILITY */}
      <section className="py-12 px-4 lg:px-20">
        <h2 className="text-[32px] lg:text-[64px] font-bold text-[#270652] mb-6">
          Eligibility for Online BCom(Int.)
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
                                      alt="Eligibility criteria for Online BCOM International Program admission in India"
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
            Fees for Online BCom(Int.)
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
              Career Opportunities After Online BCOM(International)
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
 <p>
  Online BCom (International) opens doors to career opportunities in global accounting, finance, auditing, and multinational business environments, with strong demand across industries.
</p>

<p>
  Students can pursue higher education like MBA or complete ACCA certification while gaining expertise in international finance, corporate reporting, taxation, and global business practices.
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
      Future of Online BCOM (Int.)
    </h2>

    <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
      <p>
        The future of Online BCom (International) is highly promising as the demand for globally skilled finance and accounting professionals continues to grow across industries. With the expansion of international trade, global financial systems, and multinational companies, students gain access to diverse and high-growth career opportunities in the global business environment.
      </p>

      <p>
        These programs are evolving to include international accounting standards, practical financial applications, and industry-relevant tools, making students job-ready from the start. As organizations increasingly value global expertise and professional certifications like ACCA, graduates are well-positioned to secure roles in multinational companies or pursue advanced studies like MBA for specialized career growth.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="w-full mt-10 flex justify-center lg:justify-start">
        <div className="w-full max-w-[500px]">
          <Image
            src="/nmimsCareer.png"
            alt="Career scope and future opportunities after Online BCOM International"
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
            "High demand for global finance professionals",
            "Growth in international accounting and audit roles",
            "Expansion of multinational and corporate careers",
            "Rise of global business and remote opportunities",
            "Focus on international finance and reporting standards",
            "Pathway to ACCA, MBA, and global careers",
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
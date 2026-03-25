import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online BBA valid in India?",
    a: "Yes, an Online BBA is valid if the university is UGC-approved."
  },
  {
    q: "Can I do an Online BBA after 12th?",
    a: "Yes, students can pursue an Online BBA after completing 10+2."
  },
  {
    q: "What is the duration of an Online BBA?",
    a: "Typically 3 years divided into 6 semesters."
  },
  {
    q: "Is Online BBA good for career?",
    a: "Yes, it builds a strong business foundation and opens entry-level job opportunities."
  },
  {
    q: "Can I do MBA after Online BBA?",
    a: "Yes, Online BBA graduates are eligible for MBA programs."
  }
];

const roles = [
  "Marketing Executive",
  "Sales Executive",
  "Business Development Executive",
  "HR Executive",
  "Operations Executive",
  "Customer Relationship Manager",
  "Financial Associate",
  "Entrepreneur / Startup Owner"
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
   {
    slug: "datascience",
    specialization_name: "Data Science Management",
    cover_image: "/specializations/data.png",
  },
];

export default function bba(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online BBA in India 2026: Top Colleges, Fees, Admission & Eligibility
            </h1>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
             Online BBA programs have gained significant popularity in recent years, offering flexible learning opportunities for students and aspiring professionals alike. These programs are designed to deliver industry-relevant business knowledge through digital platforms, combining live sessions with recorded content. Learners can develop foundational skills in areas such as marketing, finance, and management, while balancing personal and academic commitments. Additionally, online BBA programs emphasize practical exposure through projects, case studies, and real-world applications, helping students build confidence and prepare for careers in a competitive business environment effectively today while enhancing communication and decision making abilities consistently.
            </p>
            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
            Online BBA programs typically have a duration of 3 years, structured into 6 semesters, making them suitable for students after completing their 12th education. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners can gradually build expertise in core business subjects while also choosing specializations based on their career goals, ensuring a well-rounded and industry-relevant education experience.</p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto justify-center">  <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
                alt="Online BBA course in India with top universities and flexible learning"
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
          Who Should Pursue an Online BBA?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
          <p>
          An Online BBA is ideal for students who want to build a strong foundation in business and management right after completing their 12th. It offers flexibility, affordability, and industry-relevant learning for individuals at the beginning of their career journey.</p>

        <p>Whether you aim to pursue higher education like an MBA, start your own business, or enter the corporate world early, an Online BBA equips you with essential business knowledge and practical skills.</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
  "Students after 12th looking for business education",
  "Individuals planning to pursue MBA in future",
  "Aspiring entrepreneurs and startup enthusiasts",
  "Students looking for flexible and affordable degree",
  "Individuals interested in corporate careers",
  "Students aiming to build strong business fundamentals",
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
      title="Top Online BBA Universities"
      categoryId="bba"
    />

     <WhyProgramSection
        title="Why Choose an Online BBA Program?"
        description={[
  "Flexible learning format suitable for students and early learners.",
  "UGC-approved degrees ensure credibility and recognition.",
  "Strong foundation in business, management, and entrepreneurship.",
  "Affordable compared to traditional on-campus programs.",
  "Prepares students for entry-level jobs and higher studies like MBA."
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
                Eligibility for Online BBA Program
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
                 10+2 (Higher Secondary) from a recognised board with minimum required percentage as per university guidelines.
                
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
                     alt="Eligibility criteria for Online BBA admission in India"
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
                     Fees for Online BBA Program
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
  title=" Online BBA Specializations"
  description={[
    "Choose from industry-relevant BBA specializations designed for career growth.",
    "Each specialization focuses on real-world skills and business applications.",
  ]}
  programName="BBA"
  specializations={specializationsData}
/>

 <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online BBA
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
              <p>
An Online BBA opens doors to entry-level career opportunities across industries such as marketing, sales, finance, and operations. It equips students with fundamental business knowledge and practical skills required to start their professional journey.
</p>

<p>
Students can either enter the workforce or pursue higher education like an MBA to unlock advanced career opportunities and leadership roles in the future.
</p> </div>
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
          Future of Online BBA
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
          <p>
The future of Online BBA programs is evolving with advancements in digital learning, making education more accessible and skill-oriented for students after 12th. With the integration of interactive platforms, real-world projects, and industry exposure, students can build strong business fundamentals from anywhere.
</p>

<p>
As companies increasingly focus on skills and practical knowledge, Online BBA graduates are gaining better opportunities in entry-level roles. The program also serves as a strong stepping stone for higher education like MBA and specialized business careers.
</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
      alt="Career scope and future opportunities after Online BBA"
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
            "Growing acceptance among top employers",
            "Integration of AI and digital learning tools",
            "Global networking opportunities",
            "Industry-driven curriculum updates",
            "Rise of remote leadership roles",
            "Higher demand for skilled professionals",
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
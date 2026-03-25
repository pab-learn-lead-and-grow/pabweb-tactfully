import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online MBA valid in India?",
    a: "Yes, an Online MBA is valid if the university is UGC-approved and recognized by relevant authorities like AICTE or holds NAAC accreditation.",
  },
  {
    q: "Can I do an Online MBA while working full-time?",
    a: "Yes, Online MBA programs are designed for working professionals with flexible schedules, recorded lectures, and weekend live classes.",
  },
  {
    q: "Does an Online MBA provide placement support?",
    a: "Many universities offer placement assistance, including job portals, resume building, interview preparation, and hiring partner networks.",
  },
  {
    q: "What is the duration of an Online MBA?",
    a: "The typical duration of an Online MBA is 2 years, divided into 4 semesters, though some universities may offer flexible timelines.",
  },
  {
    q: "Is an Online MBA equivalent to a regular MBA?",
    a: "Yes, if pursued from a recognized university, an Online MBA is considered equivalent in terms of degree value and career opportunities.",
  },
  {
    q: "What are the eligibility criteria for an Online MBA?",
    a: "Generally, candidates must have a bachelor's degree from a recognized university with a minimum required percentage.",
  },
  {
    q: "Are live classes mandatory in an Online MBA?",
    a: "Most programs offer optional live classes along with recorded sessions, allowing students to learn at their own pace.",
  },
  {
    q: "What specializations are available in an Online MBA?",
    a: "Common specializations include Marketing, Finance, HR, Business Analytics, Operations, and IT Management.",
  },
  {
    q: "What is the average fee for an Online MBA in India?",
    a: "Fees typically range between ₹1 lakh to ₹3 lakhs depending on the university, accreditation, and specialization.",
  },
  {
    q: "Is EMI or financial assistance available for Online MBA programs?",
    a: "Yes, many universities offer EMI options, scholarships, or financial aid to make the program more affordable.",
  },
];

 const roles = [
    "Marketing Manager",
    "Business Analyst",
    "Financial Analyst",
    "HR Manager",
    "Operations Manager",
    "Product Manager",
    "Management Consultant",
    "Entrepreneur / Startup Founder"
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

export default function mba(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
              Online MBA in India 2026: Top Universities, Fees, Admission & Eligibility
            </h1>

            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-4">
              Online MBA programs have gained significant popularity in recent years, offering flexible learning opportunities for students and working professionals alike. These programs are designed to deliver industry-relevant knowledge through digital platforms, combining live sessions with recorded content. Learners can develop managerial skills in areas such as finance, marketing, and operations, while balancing personal and professional commitments. Additionally, online MBA programs emphasize practical exposure through case studies, projects, and real-world applications, helping students build confidence and advance their careers in a competitive business environment effectively today while enhancing leadership and decision making abilities consistently.
            </p>
            <p className="text-black leading-relaxed font-inter  text-center md:text-left text-xs lg:text-[18px] mb-10">
            Online MBA programs typically have a duration of 2 years, structured into 4 semesters, making them suitable for both fresh graduates and working professionals. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners can gradually build expertise in core management subjects while also choosing specializations based on their career goals, ensuring a well-rounded and industry-relevant education experience.</p>
          </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto">
              <Image
                src="/mba.png"
                 alt="Online MBA course in India with top universities and flexible learning"
                width={461}
                height={644}
                className="rounded-2xl object-cover"
                priority/>
            </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 lg:px-10">
    <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-bold text-[#270652] leading-tight mb-6">
          Who Should Pursue an Online MBA?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
          <p>
            An Online MBA is ideal for individuals who want to enhance their managerial skills without putting their careers on hold. It provides flexibility, affordability, and access to quality education for learners at different stages of their professional journey.
          </p>

          <p>
            Whether you aim to switch careers, move into leadership roles, or start your own business, an Online MBA equips you with the knowledge and confidence to achieve your goals.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
            "Working professionals seeking career growth",
            "Fresh graduates aiming for management roles",
            "Entrepreneurs and startup founders",
            "Professionals planning a career switch",
            "Individuals looking for flexible learning options",
            "Managers aiming for leadership positions",
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
      title="Top Online MBA Universities"
      categoryId="mba"
    />

     <WhyProgramSection
        title="Why Choose an Online MBA Program?"
        description={[
          "Flexible learning format that allows you to study at your own pace while balancing work and personal commitments.",
          "UGC-approved degrees from accredited universities ensure credibility and industry recognition.",
          "Industry-relevant curriculum designed with real-world case studies, projects, and practical applications.",
          "Cost-effective compared to traditional MBA programs, with EMI and financial assistance options available.",
          "Access to placement support, career services, and networking opportunities with professionals and alumni."
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
                Eligibility for Online MBA Program
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
                  <img
                    src="/nmims/nmimsEligibility.png"
                    alt="Eligibility criteria for Online MBA admission in India"
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
                    Fees for Online MBA Programs
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
  title=" Online MBA Specializations"
  description={[
    "Choose from industry-relevant MBA specializations designed for career growth.",
    "Each specialization focuses on real-world skills and business applications.",
  ]}
  programName="MBA"
  specializations={specializationsData}
/>

 <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online MBA
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
               <p>An Online MBA opens doors to a wide range of career opportunities across industries such as finance, marketing, consulting, operations, and technology. It equips professionals with strategic thinking, leadership skills, and business acumen required in today’s competitive job market.</p>
    
    <p>Whether you are a working professional aiming for career growth or a fresher looking to build a strong foundation in management, an Online MBA helps you transition into high-paying managerial and leadership roles.</p>
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
          Future of Online MBA
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
          <p>
            The future of Online MBA programs is rapidly evolving with advancements in technology, making learning more interactive, accessible, and industry-aligned. With the rise of AI-driven learning, virtual classrooms, and real-time collaboration tools, students can now experience high-quality education from anywhere in the world.
          </p>

          <p>
            As organizations increasingly value skills over traditional formats, Online MBA graduates are gaining equal recognition in the job market. The integration of data analytics, digital transformation, and global business strategies into MBA curricula ensures that learners stay relevant in a fast-changing business environment.
          </p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
      alt="Career scope and future opportunities after Online MBA"
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
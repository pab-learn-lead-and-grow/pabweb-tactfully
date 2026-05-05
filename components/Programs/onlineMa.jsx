import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online MA valid in India?",
    a: "Yes, an Online MA is valid if pursued from a UGC-approved university.",
  },
  {
    q: "Who is eligible for Online MA?",
    a: "Candidates with a bachelor’s degree in Arts or related fields are eligible to apply.",
  },
  {
    q: "What is the duration of an Online MA program?",
    a: "The duration is typically 2 years divided into 4 semesters.",
  },
  {
    q: "Is Online MA good for career growth?",
    a: "Yes, it provides advanced knowledge and opens opportunities in education, research, and public sectors.",
  },
  {
    q: "Can I pursue PhD after Online MA?",
    a: "Yes, MA graduates are eligible to pursue PhD and other research programs.",
  },
  {
    q: "What career options are available after Online MA?",
    a: "Graduates can work in teaching, media, research, public relations, and government sectors.",
  },
];

const roles = [
  "Lecturer / Teacher",
  "Content Writer",
  "Journalist",
  "Public Relations Specialist",
  "Social Worker",
  "Research Analyst",
  "Civil Services Aspirant",
  "Policy Analyst",
];

const specializationsData = [
  {  
    slug: "economics",
    specialization_name: "Economics",
    cover_image: "/specializations/economics.png",
  },
   {
    slug: "english",
    specialization_name: "English",
    cover_image: "/specializations/english.png",
  },
  {
    slug: "political-science",
    specialization_name: "Political Science",
    cover_image: "/specializations/political.png",
  },
  {
    slug: "public-policy",
    specialization_name: "Public Policy & Governance",
    cover_image: "/specializations/public.png",
  },
  {
    slug: "jainology",
    specialization_name: "Jainology & Comparative religion & Philosophy",
    cover_image: "/specializations/jainology.png",
  },
  {
    slug: "journalism",
    specialization_name: "Journalism and Mass Communication",
    cover_image: "/specializations/journalism.png",
  },
  
   
];

export default function ma(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
             <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online MA in India 2026: Top Colleges, Fees, Admission & Eligibility
            </h1>

          <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online MA programs have gained significant popularity in recent years, offering flexible learning opportunities for graduates and working professionals alike. These programs are designed to deliver advanced knowledge in humanities, social sciences, and communication through digital platforms, combining live sessions with recorded content. Learners can develop expertise in areas such as psychology, sociology, political science, and literature while balancing personal and professional commitments. Additionally, online MA programs emphasize research-based learning, projects, and real-world applications, helping students enhance critical thinking and analytical abilities in a competitive environment.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online MA programs typically have a duration of 2 years, structured into 4 semesters, making them suitable for graduates seeking specialization in their chosen field. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners gain in-depth subject knowledge along with research and analytical skills, enabling better career opportunities in education, research, media, and public services.
</p>
  </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto justify-center">  <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
                 alt="Online MA course in India with top universities and flexible learning"
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
          Who Should Pursue an Online MA?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
        <p>
An Online MA is ideal for graduates who want to gain advanced knowledge in humanities and social sciences while maintaining flexibility in their learning. It provides in-depth subject expertise, research skills, and quality education for learners aiming to strengthen their academic and professional careers.
</p>

<p>
Whether you aim to pursue careers in education, research, media, or public services, or prepare for competitive exams and higher studies, an Online MA equips you with the knowledge and confidence to achieve your goals.
</p>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
  "BA or humanities graduates",
  "Aspirants preparing for government exams",
  "Students interested in research and academics",
  "Individuals interested in social sciences",
  "Working professionals seeking career growth",
  "Candidates aiming for specialization in arts subjects",
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
      title="Top Online MA Universities"
      categoryId="ma"
    />

     <WhyProgramSection
        title="Why Choose an Online MA Program?"
       description={[
    "Flexible learning format allows graduates and working professionals to pursue advanced education while managing personal and professional commitments effectively.",
    
    "Provides in-depth knowledge in humanities and social sciences, helping students develop strong analytical, research, and critical thinking skills.",
    
    "Cost-effective alternative to traditional postgraduate programs without compromising on academic quality and university recognition.",
    
    "Research-oriented curriculum with practical exposure through projects, dissertations, and real-world case studies.",
    
    "Prepares students for careers in education, research, media, public services, and higher academic studies like PhD.",
  ]}
      />
      <section className="w-full px-4 md:px-10 lg:px-20 py-12 font-sans">
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
                Eligibility for Online MA Program
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
                <p>
Bachelor’s degree in Arts or related field from a recognized university with minimum required marks as per university guidelines.
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
                             <Image
                               src="/nmims/nmimsEligibility.png"
                               alt="Eligibility criteria for Online MA admission in India"
                               width={520}
                               height={350}
                               className="w-full max-w-105  h-auto rounded-xl object-contain"
                               sizes="(max-width: 768px) 100vw, 520px"
                             />
                           </MotionWrapper>
              </MotionWrapper>
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
                     Fees for Online MA Program
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
  title=" Online MA Specializations"
    description={[
    "Choose from industry-relevant MA specializations designed for academic and professional growth.",
    "Each specialization focuses on advanced knowledge and research skills in humanities and social sciences.",
  ]}
  programName="MA"
  specializations={specializationsData}
/>

 <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online MA
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
             <p>
Online MA opens doors to advanced career opportunities in education, research, media, and public sectors, where analytical and communication skills are highly valued.
</p>

<p>
Graduates can pursue roles in teaching, journalism, social work, or civil services, and also opt for higher studies like PhD to further enhance their career prospects.
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
          Future of Online MA
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
          <p>
The future of Online MA is highly promising as the demand for skilled professionals in education, research, and social sectors continues to grow across industries. With the expansion of media, public policy, and global communication fields, MA graduates gain access to diverse and meaningful career opportunities.
</p>

<p>
Online MA programs are evolving to include research-based learning, practical exposure, and industry-relevant tools, making graduates career-ready. As organizations increasingly value analytical thinking and subject expertise, Online MA graduates are well-positioned to secure roles in academia, media, and public sectors or pursue advanced studies like PhD.
</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
      alt="Career scope and future opportunities after Online MA"
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
  "Growing demand in education and research",
  "Expansion of media and communication careers",
  "Opportunities in government and public services",
  "Rise of policy and social sector roles",
  "Focus on research and analytical skills",
  "Pathway to PhD and academic careers",
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
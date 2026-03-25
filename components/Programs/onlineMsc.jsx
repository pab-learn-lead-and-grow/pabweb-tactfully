import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import SpecializationSection from "./SpecializationSection";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online MSc valid in India?",
    a: "Yes, it is valid if pursued from a UGC-approved university.",
  },
  {
    q: "Who is eligible for Online MSc?",
    a: "Candidates with a bachelor’s degree in Science or related fields are eligible to apply.",
  },
  {
    q: "What is the duration of Online MSc?",
    a: "The duration is typically 2 years divided into 4 semesters.",
  },
  {
    q: "Is Online MSc good for career growth?",
    a: "Yes, it provides advanced technical knowledge and opens high-growth career opportunities.",
  },
  {
    q: "Can I pursue PhD after Online MSc?",
    a: "Yes, MSc graduates are eligible for PhD and research programs.",
  },
  {
    q: "What jobs can I get after Online MSc?",
    a: "You can work as a data scientist, analyst, researcher, or software professional.",
  },
];

const roles = [
  "Public Policy Consultant",
  "Content Writer",
  "Editor",
  "Journalist",
  "Civil Services Officer",
  "Lecturer",
  "Political Analyst",
  "Public Relations Specialist",
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

export default function msc(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
             <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online MSc in India 2026: Top Colleges, Fees, Admission & Eligibility
            </h1>
<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online MSc programs have gained significant popularity in recent years, offering flexible learning opportunities for graduates and working professionals alike. These programs are designed to deliver advanced knowledge in science, technology, and analytical domains through digital platforms, combining live sessions with recorded content. Learners can develop expertise in areas such as data science, mathematics, computer science, and environmental science while balancing professional and personal commitments. Additionally, online MSc programs emphasize practical exposure through projects, case studies, and real-world applications, helping students enhance analytical thinking and problem-solving skills in a competitive environment.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online MSc programs typically have a duration of 2 years, structured into 4 semesters, making them suitable for graduates seeking specialization in scientific and technical fields. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners gain in-depth subject knowledge along with research and technical skills, enabling better career opportunities in technology, research, analytics, and specialized domains.
</p>
  </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto justify-center">  <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
               alt="Online MSC course in India with top universities and flexible learning"
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
          Who Should Pursue an Online MSc?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
       <p>
An Online MSc is ideal for graduates who want to gain advanced knowledge in science and technology fields while maintaining flexibility in their learning. It provides in-depth subject expertise, analytical skills, and research exposure for individuals aiming to build specialized careers.
</p>

<p>
Whether you aim to pursue careers in data science, research, technology, or academics, or prepare for higher studies like PhD, an Online MSc equips you with the knowledge and confidence to achieve your goals.
</p>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
  "BSc or science graduates",
  "Aspiring data scientists and analysts",
  "Students interested in research and development",
  "Individuals pursuing technical careers",
  "Working professionals seeking specialization",
  "Candidates aiming for PhD and higher studies",
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
      title="Top Online MSC Universities"
      categoryId="msc"
    />

     <WhyProgramSection
        title="Why Choose an Online MSc Program?"
       description={[
    "Flexible learning format allows graduates and working professionals to pursue advanced science education while managing work and personal commitments effectively.",
    
    "Provides in-depth knowledge in scientific and technical subjects, helping students develop strong analytical and problem-solving skills.",
    
    "Cost-effective alternative to traditional postgraduate programs without compromising on academic quality and industry relevance.",
    
    "Research-oriented curriculum with practical exposure through projects, case studies, and real-world applications.",
    
    "Prepares students for careers in research, analytics, technology, and higher academic pursuits like PhD.",
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
                Eligibility for Online MSc Program
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
Bachelor’s degree in Science (BSc) or related field from a recognized university with minimum required marks as per university guidelines.
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
                   alt="Eligibility criteria for Online MSC admission in India"
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
                     Fees for Online MSc Program
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
  title="Online MSc Specializations"
  description={[
    "Choose from industry-relevant MSc specializations designed for technical and research-based careers.",
    "Each specialization focuses on advanced knowledge and practical skills in science, technology, and analytics.",
  ]}
  programName="MSc"
  specializations={specializationsData}
/>

 <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online MSc
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
            <p>
Online MSc opens doors to advanced career opportunities in research, technology, analytics, and scientific fields, where specialized knowledge is highly valued.
</p>

<p>
Graduates can work in data science, IT, research organizations, or pursue higher studies like PhD to further enhance their career prospects.
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
          Future of Online MSc
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
          <p>
The future of Online MSc is highly promising as the demand for skilled professionals in science, technology, and analytics continues to grow across industries. With the rapid advancement of technologies like Artificial Intelligence, Data Science, and Automation, MSc graduates gain access to diverse and high-growth career opportunities.
</p>

<p>
Online MSc programs are evolving to include advanced tools, real-world applications, and research-driven learning, making graduates industry-ready. As organizations increasingly rely on data and technology, MSc graduates are well-positioned to secure roles in high-demand sectors or pursue advanced research and academic careers.
</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
      alt="Career scope and future opportunities after Online MSC"
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
  "High demand for data science professionals",
  "Growth in AI and machine learning fields",
  "Expansion of research and analytics roles",
  "Rise of technology-driven careers",
  "Focus on problem-solving and technical skills",
  "Pathway to PhD and research careers",
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
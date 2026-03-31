import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online BAJMC valid in India?",
    a: "Yes, an Online BAJMC is valid if pursued from a UGC-approved university.",
  },
  {
    q: "Can I do BAJMC after 12th?",
    a: "Yes, students can pursue BAJMC after completing 10+2 from a recognized board.",
  },
  {
    q: "What is the duration of Online BAJMC?",
    a: "The duration is typically 3 years divided into 6 semesters.",
  },
  {
    q: "Is BAJMC good for career?",
    a: "Yes, it opens career opportunities in media, journalism, digital marketing, and communication industries.",
  },
  {
    q: "Can I do MA after BAJMC?",
    a: "Yes, graduates can pursue MAJMC or other postgraduate programs.",
  },
  {
    q: "What jobs can I get after BAJMC?",
    a: "You can work as a journalist, content writer, PR executive, or digital marketer.",
  },
];

const roles = [
  "Journalist",
  "Content Writer",
  "News Reporter",
  "Public Relations Executive",
  "Digital Marketing Executive",
  "Social Media Manager",
  "Video Content Creator",
  "Media Planner",
];



export default function bajmc(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
             <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
            Online BAJMC in India 2026: Top Colleges, Fees & Admission
            </h1>

          <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online BAJMC programs have gained significant popularity in recent years, offering flexible learning opportunities for students and aspiring media professionals alike. These programs are designed to deliver industry-relevant knowledge in journalism, mass communication, and digital media through online platforms, combining live sessions with recorded content. Learners can develop skills in areas such as news reporting, content creation, public relations, and media production while balancing academic commitments. Additionally, online BAJMC programs emphasize practical exposure through projects, case studies, and real-world applications, helping students build confidence and prepare for careers in a dynamic media environment effectively today while enhancing communication and storytelling abilities consistently.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online BAJMC programs typically have a duration of 3 years, structured into 6 semesters, making them suitable for students after completing their 12th education. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners gradually build expertise in journalism, media studies, and communication while also exploring specializations based on their career interests, ensuring a well-rounded and industry-relevant education experience.
</p>
  </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto justify-center">  <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
                alt="Eligibility criteria for Online BAJMC admission in India"
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
          Who Should Pursue an Online BAJMC?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
       <p>
An Online BAJMC is ideal for students who want to build a career in media, journalism, and communication while maintaining flexibility in their learning. It provides industry exposure, creative skills, and practical knowledge for learners at the beginning of their academic and professional journey.
</p>

<p>
Whether you aim to become a journalist, content creator, media professional, or pursue higher studies like MAJMC, an Online BAJMC equips you with the knowledge and confidence to achieve your goals.
</p>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
  "Students interested in journalism and media",
  "Aspiring content creators and influencers",
  "Individuals interested in digital marketing",
  "Students seeking creative career paths",
  "Learners interested in public relations",
  "Future media and communication professionals",
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
      title="Top Online BAJMC Universities"
      categoryId="bajmc"
    />

     <WhyProgramSection
        title="Why Choose an Online BAJMC Program?"
      description={[
    "Flexible learning format allows students to pursue media education while managing personal and academic commitments effectively.",
    
    "Provides strong foundation in journalism, mass communication, digital media, and public relations.",
    
    "Affordable compared to traditional media programs without compromising on quality education and exposure.",
    
    "Industry-oriented curriculum with practical exposure through projects, internships, and real-world media applications.",
    
    "Prepares students for careers in journalism, digital marketing, content creation, and higher studies like MAJMC.",
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
                Eligibility for Online BAJMC Program
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
10+2 (Higher Secondary) from a recognized board with minimum required percentage as per university guidelines.
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
                               alt="Eligibility criteria for Online BAJMC admission in India"
                               width={520}
                               height={350}
                               className="w-full max-w-105  h-auto rounded-xl object-contain"
                               sizes="(max-width: 768px) 100vw, 520px"
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
                     Fees for Online BA Program
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

 <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#270652] leading-tight mb-6">
              Career Opportunities After Online BAJMC
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
             <p>
Online BAJMC opens doors to diverse career opportunities in media, journalism, digital marketing, and communication industries, where creativity and communication skills are highly valued.
</p>

<p>
Students can pursue careers in news media, content creation, advertising, or public relations, or continue higher studies like MAJMC for advanced opportunities.
</p></div>
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
          Future of Online BAJMC
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
        <p>
The future of Online BAJMC is highly promising as the demand for skilled media and communication professionals continues to grow across industries. With the rapid expansion of digital media, content platforms, and online journalism, students gain access to diverse and creative career opportunities in the modern media landscape.
</p>

<p>
Online BAJMC programs are evolving to include practical training, real-world projects, and industry-relevant tools, making students job-ready from the start. As companies increasingly value content, storytelling, and digital presence, graduates are well-positioned to secure roles in media, marketing, and communication sectors or pursue higher studies for specialization.
</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
      alt="Career scope and future opportunities after Online BAJMC"
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
  "Growing demand for media professionals",
  "Expansion of digital and social media careers",
  "Rise of content creation and influencer roles",
  "Opportunities in advertising and PR",
  "Focus on communication and storytelling skills",
  "Pathway to MAJMC and media specialization",
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
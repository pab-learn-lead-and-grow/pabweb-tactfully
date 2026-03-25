import FAQ from "../NmimsSection/FAQ";
import Image from "next/image";
import ProgramsList from "./programList";
import WhyProgramSection from "./WhyProgram";
import MotionWrapper from "../Radhya/MotionWrapper";
import ConnectToday from "../NmimsSection/ConnectToday";

const faqs = [
  {
    q: "Is an Online MAJMC valid in India?",
    a: "Yes, it is valid if pursued from a UGC-approved university.",
  },
  {
    q: "Who is eligible for Online MAJMC?",
    a: "Candidates with a bachelor's degree in journalism, mass communication, or related fields are eligible.",
  },
  {
    q: "What is the duration of Online MAJMC?",
    a: "The duration is typically 2 years divided into 4 semesters.",
  },
  {
    q: "Is MAJMC good for career growth?",
    a: "Yes, it provides advanced media knowledge and opens opportunities in journalism, marketing, and communication roles.",
  },
  {
    q: "Can I pursue PhD after MAJMC?",
    a: "Yes, graduates can pursue PhD and research programs in media and communication.",
  },
  {
    q: "What jobs can I get after MAJMC?",
    a: "You can work as a media manager, PR professional, journalist, or digital marketing expert.",
  },
];

const roles = [
  "Senior Journalist",
  "Content Strategist",
  "Media Planner",
  "Public Relations Manager",
  "Digital Marketing Manager",
  "Corporate Communication Manager",
  "Brand Strategist",
  "News Editor",
];


export default function majmc(){
  
    return(
         <main className="flex flex-col items-center w-full bg-white">
              <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 px-4 md:px-12 items-center mt-10 lg:mt-0">
  {/* LEFT TEXT */}
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[40px] text-center md:text-left font-bold text-[#270652] mb-4">
             Online MAJMC in India 2026: Top Colleges, Fees & Admissiones & Admission
            </h1>

        <p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online MAJMC programs have gained significant popularity in recent years, offering flexible learning opportunities for graduates and working professionals in the media and communication domain. These programs are designed to deliver advanced knowledge in journalism, mass communication, and digital media through online platforms, combining live sessions with recorded content. Learners can develop expertise in areas such as news reporting, media production, digital marketing, and public relations while balancing professional commitments. Additionally, online MAJMC programs emphasize practical exposure through projects, case studies, and real-world media applications, helping students enhance storytelling, analytical, and communication skills effectively.
</p>

<p className="text-black leading-relaxed text-center md:text-left text-xs lg:text-[18px] mb-10">
Online MAJMC programs typically have a duration of 2 years, structured into 4 semesters, making them suitable for graduates seeking specialization in media and communication. These programs are recognized by UGC-approved universities, ensuring their validity and acceptance across industries. With a semester-based structure, learners gain in-depth expertise in media studies along with practical and research-oriented learning, enabling better career opportunities in journalism, digital media, advertising, and public relations.
</p>
  </div>

          {/* RIGHT IMAGE WITH CURVED SHAPE */}
           <div className=" relative max-w-sm mx-auto justify-center">  <div className="max-w-7xl overflow-hidden">
              <Image
                src="/mba.png"
                 alt="Online MAJMC course in India with top universities and flexible learning"
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
          Who Should Pursue Online MAJMC?
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        

        <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
       <p>
An Online MAJMC is ideal for graduates who want to advance their careers in media, journalism, and communication while maintaining flexibility in their learning. It provides in-depth industry knowledge, creative exposure, and professional skills required for media-driven careers.
</p>

<p>
Whether you aim to become a senior journalist, media strategist, digital marketer, or pursue careers in advertising and public relations, an Online MAJMC equips you with the knowledge and confidence to achieve your goals.
</p>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pt-2">
        <ul className="space-y-6">
          {[
  "BAJMC or media graduates",
  "Aspiring journalists and media professionals",
  "Content creators and digital marketers",
  "Individuals interested in PR and advertising",
  "Working professionals in media industry",
  "Students aiming for specialization in communication",
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
      title="Top Online MAJMC Universities"
      categoryId="majmc"
    />

     <WhyProgramSection
  title="Why Choose an Online MAJMC Program?"
  description={[
    "Flexible learning format allows graduates and working professionals to pursue advanced media education while managing work and personal commitments.",
    
    "Provides in-depth knowledge in journalism, digital media, advertising, and public relations with strong practical exposure.",
    
    "Cost-effective alternative to traditional postgraduate media programs without compromising on quality and industry relevance.",
    
    "Industry-oriented curriculum with real-world projects, internships, and media production experience.",
    
    "Prepares students for advanced careers in media, digital marketing, communication strategy, and higher academic pursuits.",
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
                Eligibility for Online MAJMC Program
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
              Bachelor’s degree in Journalism, Mass Communication, or any related field from a recognized university with minimum required marks as per university guidelines.
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
                    alt="Eligibility criteria for Online MAJMC admission in India"
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
                     Fees for Online MAJMC Program
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
              Career Opportunities After Online MAJMC
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed max-w-xl">
            <p>
Online MAJMC opens doors to advanced career opportunities in journalism, media, digital marketing, and communication industries, where creativity and strategic thinking are highly valued.
</p>

<p>
Graduates can work in news organizations, media houses, advertising agencies, or corporate communication roles, and also explore leadership positions in digital and content-driven industries.
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
          Future of Online MAJMC
        </h2>

         <div className="space-y-4 text-[#4B5563] text-base lg:text-xl leading-relaxed">
         <p>
The future of Online MAJMC is highly promising as the demand for skilled media and communication professionals continues to grow across industries. With the rapid expansion of digital platforms, content ecosystems, and online journalism, graduates gain access to diverse and high-growth career opportunities.
</p>

<p>
Online MAJMC programs are evolving with advanced media tools, digital strategies, and real-world exposure, making graduates industry-ready. As organizations increasingly rely on content, branding, and digital communication, MAJMC graduates are well-positioned to secure leadership roles or specialize further in media and communication domains.
</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
       <div className="w-full mt-10 flex justify-center lg:justify-start">
  <div className="w-full  max-w-[500px]">
    <Image
      src="/nmimsCareer.png"
      alt="Career scope and future opportunities after Online MAJMC"
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
  "High demand for media professionals",
  "Growth in digital and content industries",
  "Expansion of advertising and PR roles",
  "Rise of influencer and creator economy",
  "Focus on strategy and communication skills",
  "Leadership roles in media and branding",
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
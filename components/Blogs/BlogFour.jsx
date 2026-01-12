"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import Link from "next/link"; // Added import

export default function Page() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const [showAllRelated, setShowAllRelated] = useState(false);


 const blogs = [
    {
      id: 1,
      title:
        "How An Online MBA Helps You Raise From Employee To Leader",
      image: "/Blog2/background.png",
      path: "online-mba-for-career-growth",
    },
    {
      id: 2,
      title: "Why NMIMS Is The Top Choice For Working Professionals In India",
      image: "/Blog3/background.png",
      path: "nmims-for-working-professionals",
    },
    {
      id: 3,
      title:
        "Online MBA vs Regular MBA: Which One Is Right for Working Professionals?",
      image: "/Blog1/background.png",
      path: "online-vs-regular-mba",
    },
    {
      id: 4,
      title:
        "How Online MBA’s Are Reshaping Global Careers With Data, Trends And Inspiring Success Stories",
      image: "/Blog4/background.png",
      path: "the-digital-revolution",
    },
    {
      id: 5,
      title:
        "Top 10 Reasons A Modern Online MBA Dramatically Boosts Your Salary And Acc Career Mobility",
      image: "/Blog5/background.png",
      path: "the-financial-catalyst",
    },
    {
      id: 6,
      title:
        "How Online BBA Builds Entrepreneurs And How Online MBA Shapes Future CEOs",
      image: "/Blog6/background.png",
      path: "how-online-bba-builds-entrepreneurs",
    },
  ];

  const visibleRelatedBlogs = showAllRelated
  ? blogs
  : blogs.slice(0, 4);


  return (
    <section className="w-full flex flex-col font-[Inter] items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-[95%] mt-18 h-[25vh] md:h-[45vh] bg-cover rounded-t-3xl bg-center flex items-center justify-center"
     style={{
  backgroundImage: "url('/Blog4/background.png')",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundBlendMode: "overlay",
}}

      >
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-[64px] font-[Inter] font-bold text-white drop-shadow-lg">
            The Digital Revolution:
          </h1>

          <p className="mt-3 text-xs md:text-lg lg:text-[40px] font-bold leading-10 text-white/90 max-w-5xl mx-auto">
           How Online MBAs Are Reshaping Global Careers with Data, Trends, and Inspiring Success Stories
           </p>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-[8%_68%_24%] gap-5 xl:mt-20 px-4 ">
        {/* LEFT SOCIAL ICONS */}
         <div
                 className="
           bg-white shadow rounded-lg
           p-2
           flex
           flex-row xl:flex-col
           items-center justify-center
           gap-3
           w-fit h-fit
       
           fixed xl:static
           bottom-4 left-1/2 xl:left-auto
           -translate-x-1/2 xl:translate-x-0
           z-40
         "
               >
                 {[
                   {
                     src: "/ig.png",
                     name: "Instagram",
                     href: "https://www.instagram.com/radhyaeducationacademy/",
                   },
                   {
                     src: "/ln.png",
                     name: "LinkedIn",
                     href: "https://www.linkedin.com/ ",
                   },
                   {
                     src: "/x.png",
                     name: "X (Twitter)",
                     href: "https://x.com/radhya_REA",
                   },
                   {
                     src: "/yt.png",
                     name: "YouTube",
                     href: "https://youtube.com/@radhyaeducationacademy",
                   },
                   {
                     src: "/fb.png",
                     name: "Facebook",
                     href: " https://www.facebook.com/profile.php?id=61586054062267 ",
                   },
                 ].map((icon, i) => (
                   <a
                     key={i}
                     href={icon.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={icon.name}
                     className="flex items-center justify-center"
                   >
                     <Image
                       src={icon.src}
                       alt={icon.name}
                       width={28}
                       height={28}
                       className="
                 rounded
                 shadow
                 w-6 h-6
                 lg:w-8 lg:h-8
               "
                     />
                   </a>
                 ))}
               </div>
        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow p-8  flex flex-col gap-6 md:mb-10 rounded-t-2xl lg:-mt-30 md:-mt-10"
        >
          <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
           Introduction: The Rise of the Mainstream Online MBA
           </h2>
          <p className="text-black text-[14px] leading-5">
          The Online MBA is no longer considered a secondary option - it has forcefully moved into the mainstream and become one of the world’s fastest-growing advanced education pathways. Initially viewed with skepticism, its credibility has surged dramatically due to the maturity of educational technology, the entry of respected, top-tier universities into the online space, and a fundamental global shift toward skill-based hiring. Over the past few years, a strong, undeniable trend has emerged: professionals are demanding high-quality management education that allows them to continue advancing their careers without the financial or professional interruption of quitting their jobs. The Online MBA delivers exactly this strategic flexibility and academic rigor.
          </p>

          <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
           Global Validation: Enrollment and Employer Acceptance Trends
            </h2>
          <p className="text-black text-[16px] font-medium leading-5">
          The growth of the digital MBA market is a massive, validated global phenomenon.
          </p>

           <p className="text-black -mb-5 text-[16px] font-semibold leading-5">
          Worldwide Enrollment Data 
          </p>
          
           <p className="text-black text-[14px] leading-5">
          The global Online MBA market has seen persistent and significant growth, with yearly enrollments now surpassing millions worldwide. Leading universities across the US, UK, Europe, and Asia are reporting record numbers of online students, with many programs enrolling more online learners than their traditional on-campus MBA seats.
          </p>

           <p className="text-black -mb-5 text-[16px] font-semibold leading-5">
          Post-MBA Salary Uplift (ROI Metric)
          </p>
          
           <p className="text-black text-[14px] leading-5">
         The financial return on investment (ROI) is compelling. Data compiled by international business schools reveals that Online MBA graduates typically observe substantial salary increases between 30% and 55%within 12 to 24 months of completing their program. This strong upward salary trend is particularly visible among experienced professionals with 5–10 years of prior work history.
         </p>


          <div className="w-full h-full bg-white overflow-hidden">
            <Image
              src="/Blog2/blog2Content.png"
              alt="placeholder"
              width={666}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>

          {/* MAIN TITLE */}
           <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
          The Online MBA Evolution in the Indian Market
          </h2>
          <p className="text-black text-[14px] leading-5">
       India stands out as one of the world’s fastest-growing Online MBA markets. Working professionals across high-growth sectors - including IT, BFSI (Banking, Financial Services, and Insurance), consulting, and manufacturing - are strategically enrolling to aggressively strengthen their leadership and digital management skills.
        </p>

        <h2 className="text-[16px] -mb-5 font-medium text-black">
          Hiring Trends in Indian Industries
          </h2>
          <p className="text-black text-[14px] leading-5">
      Indian employers, particularly tech giants, IT services companies, high-potential fintech startups, and consulting firms, now place a greater value on a candidate's practical skills and applied knowledge over the degree format alone. Many HR teams openly acknowledge that a candidate’s Online MBA, specifically when paired with strong project work, matters more than simply attending a full-time, traditional program.
      </p>

        <h2 className="text-[16px] -mb-5 font-medium text-black">
          High-Demand Online MBA Specializations in India
          </h2>
          <p className="text-black -mb-5 text-[14px] leading-5">
     The market is favoring specializations that align with India's digital economy growth:
     </p>
     <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
           Marketing & Digital Branding
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Finance & Investment Strategy
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Business Analytics
         </li>
            <li className="text-[14px] text-black font-normal leading-5">
          HR & Talent Development
           </li>
            <li className="text-[14px] text-black font-normal leading-5">
         Operations & Supply Chain
           </li>
            <li className="text-[14px] text-black font-normal leading-5">
          AI & Technology Management
           </li>
          </ul>
          
          

          <h2 className="text-[#3C087E] -mb-5 font-semibold text-2xl md:text-2xl lg:text-2xl">
            Why Professionals Are Actively Choosing the Online Format
          </h2>
          
          <ul className="list-disc -mb-5 px-5">
            <li className="text-[16px] text-black font-medium leading-5">
             Superior Flexibility and Hybrid Learning
            </li>
        </ul>
             <p className="text-black text-[14px] leading-5">
            The vast majority of Online MBA learners are currently working professionals. They demand learning structures built around their schedules, preferring weekend live classes, readily available recorded lectures, and highly interactive sessions over rigid, mandatory daytime classes.
           </p>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[16px] text-black font-medium leading-5">
             Exceptional Affordability
            </li>
        </ul>
         <p className="text-black text-[14px] leading-5">
            Online MBAs typically cost 40–70% less than a traditional full-time MBA. This dramatic difference makes high-quality management education significantly more accessible and budget-friendly, while still delivering strong value.
            </p>

             <ul className="list-disc -mb-5 px-5">
            <li className="text-[16px] text-black font-medium leading-5">
             Tight Alignment with the Skill-First Hiring Trend
            </li>
        </ul>
         <p className="text-black text-[14px] leading-5">
           Modern companies prioritize candidates who can demonstrate mastery of tools, relevant experience, and efficient project delivery. The Online MBA aligns perfectly with this trend by requiring students to solve real business problems, thus creating an immediately applicable skillset.
            </p>
            

          <h2 className="text-[#3C087E] font-semibold -mb-5 text-2xl">
          Accelerating Career Growth and Professional Impact
          </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
         An Online MBA program is structured to deliver measurable improvements in career trajectory:
         </p>
           <ul className="list-disc px-5 ">
            <li className="text-[14px] text-black font-normal leading-5">
            <span className="font-medium text-[16px]">
      Leadership and Decision Making:
    </span>{" "} The robust curriculum is explicitly designed to equip professionals with the ability to strategically lead diverse teams, make profitable, data-backed decisions, and confidently handle complex organizational challenges.
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
               <span className="font-medium text-[16px]">
      Global Networking Benefits:
    </span>{" "}
 Students are integrated into international cohorts, providing opportunities to collaborate with peers from diverse industries and rapidly expand their professional network on a global scale.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            <span className="font-medium text-[16px]">
      Industry-Relevant Capstone Projects:
    </span>{" "} These are not just academic exercises; these projects allow learners to work on live or highly realistic business issues, creating a tangible portfolio that employers actively look for during the recruitment process.
            </li> 
          </ul>

            <h2 className="text-[#3C087E] font-semibold -mb-3 text-2xl">
        Real Success Stories: Transformation in Action
        </h2>
           <p className="text-[16px] -mb-5 text-black font-medium leading-5">
             Success Snapshot #1 - Career Switcher
            </p>
             <p className="text-[14px] text-black leading-5">
            A learner leveraged his Online MBA from a reputed international university to successfully shift his career from operations into the high-growth field of product management.<br/>"Before the program, my career felt stuck. The Online MBA gave me strategic thinking skills, and within six months of graduating, I landed a global product role with a 40% salary hike." His experience is indicative of the rising trend of professionals utilizing online education to make significant, industry-wide career pivots.
            </p>

             <p className="text-[16px] -mb-5 text-black font-medium leading-5">
             Success Snapshot #2 - Indian Professionals Journey
            </p>
             <p className="text-[14px] text-black leading-5">
           A Bangalore-based IT professional completed his Online MBA while maintaining a full-time workload. Within one year, he secured a promotion to a team lead role and subsequently moved into strategic project management<br/>"I wasn’t sure if an Online MBA would matter. But my employer appreciated the updated skills, especially my analytics and leadership modules. My salary grew by 32% post completion."Stories like this powerfully showcase the practical, immediate impact of accredited Online MBAs in the competitive Indian market.
           </p>

            <h2 className="text-[#3C087E] font-semibold -mb-5 text-2xl">
        Future Trends Shaping the Online MBA Landscape
        </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
          The digital format continues to innovate, promising even more personalized and powerful learning experiences:
           </p>
           <ul className="list-disc px-5 ">
            <li className="text-[14px] mb-5 text-black font-normal leading-5">
         <span className="font-medium text-[16px]">        
           AI-Driven Learning: 
        </span>{" "}  The integration of artificial intelligence is expected to redefine how students progress, offering personalized lesson paths and tailored content based on individual learning needs.
            </li>
           <li className="text-[14px] mb-5 text-black font-normal leading-5">
         <span className="font-medium text-[16px]">
         Micro-Credentials & Stackable Degrees:
        </span>{" "}  A significant upcoming trend involves allowing learners to complete short, specialized certificates that can be accumulated (or "stacked") over time to eventually form a full MBA degree.</li>
            <li className="text-[14px] text-black font-normal leading-5">
          <span className="font-medium text-[16px]">
         Industry-Integrated Projects:
        </span>{" "} Collaboration between companies and universities is deepening, providing students with access to solve real, live business problems as part of their coursework.
          </li>  
          </ul>

           <h2 className="text-[#3C087E] font-semibold -mb-5 text-2xl">
           Conclusion
        </h2>
           <p className="text-black text-[14px] leading-5">
          The Online MBA has unequivocally moved from the sidelines to the mainstream, establishing itself as a robust, respected, and highly effective professional credential. With strong global and Indian market growth, wide employer acceptance, and the use of cutting-edge online learning tools, it has become one of the most powerful and flexible ways to strategically advance your career. The trend is clear: flexible, affordable, and skill-focused management education is the future.
          </p>
         </motion.div>

        {/* RIGHT SIDE BLOG LINKS */}
        <div className="flex flex-col gap-4 lg:mt-5 w-full bg-white rounded-2xl self-start h-fit shadow-lg p-4 pr-6">
          <h2 className="text-2xl font-bold text-[#270652] mb-2">
            Related Articles
          </h2>

          {visibleRelatedBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="flex gap-3 pb-4 border-gray-200"
            >
              {/* IMAGE */}
              <div className="w-[100px] h-[70px] rounded-lg overflow-hidden shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={100}
                  height={70}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <p className="text-[10px] leading-[1.4] text-black break-word">
                  {blog.title}
                </p>

                <Link
                  href={blog.path}
                  className="mt-2 w-fit text-white bg-[#3d077e] text-[10px] px-3 py-1 rounded hover:bg-blue-950 transition inline-block"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}

          <button
            onClick={() => setShowAllRelated(true)}
            className="w-full mt-2 bg-[#F6A410] border-0 border-transparent shadow-[#F6A410] shadow-md transform 
      active:scale-100 hover:scale-105 text-white py-1 xl:py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            View More
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

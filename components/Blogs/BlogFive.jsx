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
        "Online MBA For Career Growth: How An Online MBA Helps You Raise From Employee To Leader",
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
  
  
  const rows = [
    {
      feature: "Total Cost",
      online: "Lower",
      regular: "High",
    },
    {
      feature: "Opportunity Cost",
      online: "Eliminated (Continue earning salary)",
      regular: "High (must take time off work)",
    },
    {
      feature: "Flexibility",
      online: "High (Study anytime, anywhere)",
      regular: "Low (fixed, On-Campus schedule)",
    },
    {
      feature: "Networking",
      online: "Global Digital",
      regular: "On-Campus In-Person",
    },
  ];

  return (
    <section className="w-full flex flex-col font-[Inter] items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-[95%] mt-18  h-[25vh] md:h-[45vh] bg-cover rounded-t-3xl bg-center flex items-center justify-center"
     style={{
  backgroundImage: "url('/Blog5/background.png')",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundBlendMode: "overlay",
}}

      >
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-[64px] font-[Inter] font-bold text-white drop-shadow-lg">
            The Financial Catalyst:
          </h1>

          <p className="mt-3 text-xs md:text-lg lg:text-[40px] font-bold text-white/90 max-w-5xl mx-auto leading-tight">
          Top 10 Reasons a Modern Online MBA Dramatically Boosts Your Salary and Accelerates Career Mobility
           </p>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[8%_68%_24%] gap-5 mt-20 md:mt-10 lg:mt-0 xl:mt-20 px-4 ">
        {/* LEFT SOCIAL ICONS */}
         <div
                 className="
           bg-white shadow rounded-lg
           p-2
           flex
           flex-row lg:flex-col
           items-center justify-center
           gap-3
           w-fit h-fit
       
           fixed lg:static
           bottom-4 left-1/2 lg:left-auto
           -translate-x-1/2 lg:translate-x-0
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
          className="bg-white shadow p-8 md:p-10 flex flex-col gap-6 md:mb-10 rounded-t-2xl lg:-mt-35 md:-mt-10"
        >
          <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
          Understanding the Strategic Value of a Digital MBA
          </h2>
          <p className="text-black text-[14px] leading-5">
          The Online MBA has rapidly evolved into one of the most sought-after graduate business degrees globally, prized by working professionals who require strategic flexibility without making any concessions on academic quality or corporate recognition. This digital structure empowers individuals by providing a top-tier credential that is highly accessible, removing geographic barriers, and allowing for efficient, seamless integration into demanding full-time work and family schedules.
          </p>
           <p className="text-black text-[14px] leading-5">         
           Professionals are increasingly turning to flexible MBA pathways because they avoid the career disruption and income loss that is mandatory with a full-time, campus program. This choice significantly improves the overall Return on Investment (ROI) because you strategically continue earning your full salary while studying.
           </p>

          <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
          The ROI Breakdown: Data-Backed Salary Growth
          </h2>
          <p className="text-black text-[16px] font-medium leading-5">
        One of the primary drivers for pursuing an Online MBA is the potential for a substantial and immediate salary increase. Data consistently shows this investment pays off:
        </p>
       <ol className="list-decimal list-inside px-5 space-y-3 marker:font-semibold marker:text-[16px]">
  <li className="text-[14px] text-black leading-5">
    <span className="font-medium text-[16px]">
      Elimination of Opportunity Cost:<br />
    </span>{" "}
    This is the core financial advantage. By remaining employed, professionals avoid the significant income loss associated with a two-year, full-time program.
  </li>

  <li className="text-[14px] text-black leading-5">
    <span className="font-medium text-[16px]">
      Immediate Salary Uplift:<br />
    </span>{" "}
    Graduates frequently observe a significant salary increase within the first 12–18 months after completing their program.
  </li>

  <li className="text-[14px] text-black leading-5">
    <span className="font-medium text-[16px]">
      Substantial Percentage Gain:<br />
    </span>{" "}
    Many graduates experience a substantial rise ranging from 20% to 40%, depending on their prior industry, job level, and experience.
  </li>

  <li className="text-[14px] text-black leading-5">
    <span className="font-medium text-[16px]">
      Recouping the Investment:<br />
    </span>{" "}
    Most graduates can expect to recoup their entire educational investment in a short window of two to five years.
  </li>
</ol>

  <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
          Factors That Influence Your Post-MBA Earning Potential
          </h2>
          <p className="text-black -mb-5 text-[14px] leading-5">
   Your post-MBA earning potential is determined by a strategic blend of factors:
    </p>
     <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
          The industry you target (high-demand sectors like finance, technology, and consulting often offer premium salaries).
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
           The reputation and accreditation (AACSB, AMBA, EQUIS) of your chosen institution.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Your pre-program managerial experience.
         </li>
            <li className="text-[14px] text-black font-normal leading-5">
        The quality of the professional network you cultivate during your studies
           </li>
          </ul>

 <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
          Accelerating Career Mobility and Leadership</h2>
            <p className="text-black -mb-5 text-[16px] font-medium leading-5">
 Transitioning Across Industries
 </p>
 <p className="text-black text-[14px] leading-5">
 An Online MBA serves as a powerful catalyst for career transition. It makes major pivots - such as moving from a highly technical role in engineering to a strategic leadership position in finance - not just possible, but highly realistic. The degree instantly confers business fluency, market credibility, and a comprehensive suite of transferable skills that employers are actively seeking.
 </p>
  <p className="text-black -mb-5 text-[16px] font-medium leading-5">
   Moving from Specialist to Managerial Roles
 </p>
 <p className="text-black -mb-5 text-[14px] leading-5">
Online MBA graduates are primed to move out of specialist roles and into broader managerial positions that come with higher salaries and strategic responsibilities. These high-value roles include:
</p>
 <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
           Operations Manager
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Business Strategist
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Financial Analyst
         </li>
            <li className="text-[14px] text-black font-normal leading-5">
          Product Lead
           </li>
            <li className="text-[14px] text-black font-normal leading-5">
         Director-level positions.
           </li>
          </ul>
 <p className="text-black -mb-5 text-[16px] font-medium leading-5">
 Development of Advanced Leadership Skills
 </p>
 <p className="text-black -mb-5 text-[14px] leading-5">
The curriculum is intentionally designed to forge a strong leadership foundation by blending strategic thinking, sophisticated communication, and complex decision-making frameworks. Using virtual collaboration tools that perfectly mimic real remote-team dynamics, graduates are prepared to immediately step into leadership roles faster by demonstrating proficiency in:
</p>
 <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
          Strong cross-functional thinking.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Rigorous data-driven decision-making.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Critical high adaptability to changing business environments.
         </li>
          </ul>

          <div className="w-full h-full bg-white overflow-hidden">
            <Image
              src="/Blog5/blog5Content.png"
              alt="placeholder"
              width={666}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>

          {/* MAIN TITLE */}
           <h2 className="text-2xl font-semibold text-[#3C087E]">
          Who Benefits Most From an Online MBA?
          </h2>
          <p className="text-black -mb-5 text-[16px] font-medium leading-5">
       Mid-Career Professionals
       </p>
        <p className="text-black text-[14px] leading-5">
      Individuals with 5-10 years of prior experience often see the fastest and most significant ROI. Their accumulated professional experience pairs seamlessly with the new graduate business credential, making them immediately marketable for senior roles.
       </p>

        <p className="text-black text-[16px] -mb-5 font-medium leading-5">
        Entrepreneurs and Start-Up Founders
       </p>
        <p className="text-black text-[14px] leading-5">
     For those building their own ventures, an Online MBA provides essential, practical skills in financial modeling, scaling operations, and strategic leadership - all of which are critical to building a profitable, sustainable business.
     </p>
  
  <p className="text-black text-[16px] -mb-5 font-medium leading-5">
        Global Networking and Credibility
       </p>
        <p className="text-black text-[14px] leading-5">
     Digital networks can be even broader and more global than traditional campus networks. Furthermore, the myth that Online MBAs lack respect is consistently debunked: accreditation from recognized bodies like AACSB or EQUIS ensures the degree is viewed as equally credible by employers worldwide.
     </p>
          
          <h2 className="text-[#3C087E] -mb-5 font-semibold text-2xl md:text-2xl lg:text-2xl">
           The Strategic ROI: Total Cost vs. Long-Term Return
            </h2>

            <section className="w-full px-4 md:px-5 lg:px-5 py-5 -mb-5 bg-white">

            {/* Table Wrapper */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-black text-left text-black text-sm md:text-base">
                {/* Table Head */}
                <thead className="bg-white">
                  <tr>
                    <th className="border border-black px-4 py-3 font-bold">
                      Feature
                    </th>
                    <th className="border border-black px-4 py-3 font-bold">
                      Online MBA
                    </th>
                    <th className="border border-black px-4 py-3 font-bold">
                      Traditional MBA
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="border border-black px-4 py-3 font-semibold">
                        {row.feature}
                      </td>
                      <td className="border border-black px-4 py-3">
                        {row.online}
                      </td>
                      <td className="border border-black px-4 py-3">
                        {row.regular}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
         
         <p className="text-black text-[14px] leading-5">
           An Online MBA is one of the strongest, most flexible investments available for significantly increasing your salary, opening new career pathways, and accelerating your leadership potential. With lower costs and strong, verifiable long-term returns, it is the strategic choice for professionals ready to level up.
           </p>

         </motion.div>

        {/* RIGHT SIDE BLOG LINKS */}
        <div className="flex flex-col gap-4 lg:mt-5 w-full bg-white rounded-2xl self-start h-fit shadow-lg p-4">
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
      active:scale-100 hover:scale-105 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            View More
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

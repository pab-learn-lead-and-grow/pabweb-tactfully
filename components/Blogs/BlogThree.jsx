"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

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

  return (
    <section className="w-full flex flex-col font-[Inter] items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-[95%] mt-18 h-[25vh] lg:h-[40vh] xl:h-[50vh] bg-cover rounded-t-3xl bg-center flex items-center justify-center"
     style={{
  backgroundImage: "url('/Blog3/background.png')",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundBlendMode: "overlay",
}}

      >
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-[56px] font-[Inter] font-bold text-white max-w-6xl drop-shadow-lg">
            Why NMIMS Is The Top Choice For Working Professionals in India<br/> (2026 Guide)
          </h1>
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
          className="bg-white shadow p-8 md:p-10 flex flex-col gap-6 rounded-t-2xl md:mb-10 lg:-mt-35 md:-mt-10"
        >
          <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
            Introduction to NMIMS for Working Professionals
          </h2>
          <p className="text-black text-[14px] leading-5 space-y-8">
           For thousands of dedicated professionals across India, NMIMS has firmly established itself as the go-to destination for flexible, highly industry-relevant education. Known for its commitment to academic excellence, its modern online learning systems, and its powerful corporate reputation, NMIMS stands tall as one of India’s most trusted universities for strategic upskilling in 2026.<br/>
           Working professionals frequently grapple with one major challenge: successfully balancing demanding career growth with the pursuit of higher education. NMIMS effectively bridges this gap with accessible, career-oriented programs meticulously built to match the real needs of the modern workforce.</p>

          <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
           The Rising Demand for Flexible Higher Education in 2026
           </h2>
          <p className="text-black -mb-5 text-[16px] font-semibold leading-5">
            Why Professionals Are Upskilling Now
            </p>
             <p className="text-black -mb-5 text-[14px] leading-5">
           The job market has undergone a drastic transformation. Skills in AI, automation, digital roles, and cross-functional competencies are no longer optional - they are essential. Professionals can no longer rely solely on accumulated experience; companies now demand tangible proof of new-age capabilities.<br/>
How NMIMS Addresses Industry Skill Gaps<br/>
NMIMS proactively collaborates with leading industry experts and corporate heads to design programs that directly address modern skill shortages in critical areas:
            </p>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
             Data-driven decision making
             </li>
            <li className="text-[14px] text-black font-normal leading-6">
             High-impact leadership and strategic planning
             </li>
            <li className="text-[14px] text-black font-normal leading-6">
            Digital transformation and technology adoption
            </li>
            <li className="text-[14px] text-black font-normal leading-6">
            Advanced finance and analytics
            </li>
             <li className="text-[14px] text-black font-normal leading-6">
            Contemporary marketing, branding, and customer experience
            </li>
          </ul>
           <p className="text-black text-[14px] leading-5">
          This industry-integrated approach ensures that your education remains highly relevant and is never outdated.
           </p>
          <div className="w-full h-full bg-white overflow-hidden">
            <Image
              src="/Blog3/blog3Content.png"
              alt="placeholder"
              width={666}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>

          {/* MAIN TITLE */}
           <h2 className="text-2xl -mb-5 font-semibold text-[#3C087E]">
          What Makes NMIMS a Leading Choice
          </h2>
          <p className="text-black -mb-5 text-[14px] leading-5">
            Strong Accreditation & National Recognition <br />
        The value of your degree is assured, as NMIMS is robustly recognized by key national bodies:
         </p>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
           The University Grants Commission (UGC)
           </li>
            <li className="text-[14px] text-black font-normal leading-6">
           A prestigious NAAC A+ rating
           </li>
            <li className="text-[14px] text-black font-normal leading-6">
         Association of Indian Universities (AIU) equivalence
          </li>
          </ul>
           <p className="text-black text-[14px] -mb-5 leading-5">
         This ensures your degree holds significant value both within India and internationally, which is a huge advantage for global career growth.<br/>
Industry-Driven Curriculum for Real-World Roles<br/>
Every program offered at NMIMS is consciously designed with current, real-world business challenges at the forefront. Assignments, complex case studies, and assessments heavily emphasize applied learning and critical thinking, moving beyond simple rote memorization.<br/>
Blended & Digital Learning Suited for Busy Schedules<br/>
Working professionals benefit from a highly flexible learning environment, which includes:
 </p>
      <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
           Access to high-quality recorded lectures
           </li>
            <li className="text-[14px] text-black font-normal leading-6">
           Interactive live sessions with faculty
           </li>
            <li className="text-[14px] text-black font-normal leading-6">        
            A dedicated, interactive mobile application 
            </li>
            <li className="text-[14px] text-black font-normal leading-6">        
            Seamless, efficient learning on the go
            </li>
          </ul>
           <p className="text-black text-[14px] leading-5">
            Faculty Expertise & Corporate Connect<br/>
       NMIMS boasts a formidable lineup of seasoned professors, respected industry specialists, and corporate mentors who bring valuable, real-time industry insights directly to the virtual classroom. </p>

          <h2 className="text-[#3C087E] -mb-5 font-semibold text-2xl">
          NMIMS Programs Ideal for Working Professionals
          </h2>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
            MBA (Distance & Online): The perfect choice for professionals aiming for strategic leadership roles without the necessity of leaving their current jobs.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
           Executive Programs: High-intensity, high-impact specialized programs specifically tailored for mid-career professionals looking for rapid upskilling.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Specialized PG Diplomas: These enable professionals to make targeted career shifts. Options include:
         </li>
          </ul>
         <ol className="list-decimal list-inside px-5 space-y-1">
            <li className="text-[14px] text-black font-normal leading-5">
          Marketing </li>
          <li className="text-[14px] text-black font-normal leading-5">
          Finance </li>
          <li className="text-[14px] text-black font-normal leading-5">
          HR </li>
          <li className="text-[14px] text-black font-normal leading-5">
         Logistics </li>
          <li className="text-[14px] text-black font-normal leading-5">
          Operations </li>
          <li className="text-[14px] text-black font-normal leading-5">
          Analytics </li>
          </ol>

          <h2 className="text-[#3C087E] -mb-5 font-semibold text-2xl md:text-2xl lg:text-2xl">
           Career Advantages of Studying at NMIMS
          </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
         Promotions, Salary Growth & New Paths<br/>
        NMIMS graduates frequently experience significant career acceleration:
         </p>
          <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
            Faster promotions within their organization
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
             Entry into higher salary bands
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Stronger opportunities for leadership
            </li>
            <li className="text-[14px] text-black font-normal leading-5">             
            Enhanced eligibility for pivotal management roles
            </li>       
          </ul>
           <p className="text-black -mb-5 text-[14px] leading-5">
         Transitioning to High-Potential Industries<br/>
         An NMIMS qualification effectively opens doors to dynamic, high-growth industries such as:
           </p>

            <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
             IT & Tech
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
             Consulting
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Banking, Financial Services, and Insurance (BFSI)
            </li>
            <li className="text-[14px] text-black font-normal leading-5">             
            Retail & e-commerce
            </li> 
            <li className="text-[14px] text-black font-normal leading-5">             
            Healthcare
            </li> 
            <li className="text-[14px] text-black font-normal leading-5">             
            Logistics
            </li>       
          </ul>

          <h2 className="text-[#3C087E] font-semibold text-2xl">
           ROI: Why NMIMS Delivers Strong Career Value
           </h2>
           <p className="text-black text-[14px] -mb-5 leading-5">
         Affordability vs. Industry Impact
         </p>
          <p className="text-black text-[14px] leading-5">
         NMIMS offers career-advancing programs at a fraction of the cost often charged by other private institutes, yet delivers equal or even greater industry recognition.
         </p>
         <p className="text-black text-[14px] leading-5">
        Strong Alumni Network & Placement Support<br/>
A massive network of successful NMIMS alumni across India significantly strengthens career opportunities and professional credibility. The university also provides robust placement support and career Services
</p>     
        <p className="text-black text-[14px] -mb-5 leading-5">
       How NMIMS Supports Work-Life Balance :
       </p>
        <p className="text-black text-[14px] leading-5">
      Flexible Exams, Assignments & Schedules<br/>
The entire structure is engineered with a singular goal: do not disrupt your professional life.<br/>
24/7 LMS & Flexible Assessment Model<br/>
Students have the freedom to watch lectures anytime, study anywhere, and attempt assessments when they feel prepared.
       </p>
           <h2 className="text-[#3C087E] font-semibold -mb-5 text-2xl">
           Conclusion
        </h2>
           <p className="text-black text-[14px] leading-5">
If you are a working professional determined to strategically upgrade your career in 2026, NMIMS stands out as one of the smartest and most reliable choices available. Its flexibility, strong industry alignment, national recognition, and measurable career impact make it a leading educational partner for India’s modern workforce.
</p>
 <p className="text-black text-[14px] leading-5">
       Would you like to know more about the specific curriculum for the Online MBA Program ?
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

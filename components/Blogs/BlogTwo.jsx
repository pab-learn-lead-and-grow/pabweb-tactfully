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
      path: "/BlogTwo",
    },
    {
      id: 2,
      title: "Why NMIMS Is The Top Choice For Working Professionals In India",
      image: "/Blog3/background.png",
      path: "/BlogThree",
    },
    {
      id: 3,
      title:
        "Online MBA vs Regular MBA: Which One Is Right for Working Professionals?",
      image: "/Blog1/background.png",
      path: "/BlogOne",
    },
    {
      id: 4,
      title:
        "How Online MBA’s Are Reshaping Global Careers With Data, Trends And Inspiring Success Stories",
      image: "/Blog4/background.png",
      path: "/BlogFour",
    },
    {
      id: 5,
      title:
        "Top 10 Reasons A Modern Online MBA Dramatically Boosts Your Salary And Acc Career Mobility",
      image: "/Blog5/background.png",
      path: "/BlogFive",
    },
    {
      id: 6,
      title:
        "How Online BBA Builds Entrepreneurs And How Online MBA Shapes Future CEOs",
      image: "/Blog6/background.png",
      path: "/BlogSix",
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
  backgroundImage: "url('/Blog2/background.png')",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundBlendMode: "overlay",
}}

      >
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-[64px] font-[Inter] font-extrabold text-white drop-shadow-lg">
            Online MBA for Career Growth:
          </h1>

          <p className="mt-3 text-xs md:text-lg lg:text-[32px] font-extrabold text-white/90 ww-full mx-auto">
            How an Online MBA Helps You Rise from Employee to Leader
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
            { name: "facebook", src: "/fb.png" },
            { name: "twitter", src: "/x.png" },
            { name: "linkedin", src: "/ln.png" },
            { name: "youtube", src: "/yt.png" },
            { name: "instagram", src: "/ig.png" },
          ].map((s, i) => (
            <a
              key={i}
              href={`https://${s.name}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src={s.src}
                alt={s.name}
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
          className="bg-white shadow p-8 md:p-10 flex flex-col gap-6 rounded-t-2xl lg:-mt-35 md:-mt-10"
        >
          <h2 className="text-2xl -mb-5 font-semibold text-[#345895]">
            Understanding the Online MBA Advantage
          </h2>
          <p className="text-black text-[14px] leading-5">
           An Online MBA provides a powerful and unique blend of flexibility, academic quality, and applied, real-world learning. For many working professionals, this format serves as the perfect, practical bridge between their current position and their aspired leadership destination.<br/>
Instead of having to resign from your job or take a sabbatical, you can grow academically and professionally at the same time. Today’s programs utilize industry-standard tools, engaging live classes, pre-recorded modules, and hands-on assignments. They are specifically designed to match the academic depth and rigor of traditional on-campus MBAs while simultaneously providing unmatched convenience.
          </p>

          <h2 className="text-2xl -mb-5 font-semibold text-[#345895]">
           How an Online MBA Builds Transformational Leadership Skills
          </h2>
          <p className="text-black -mb-5 text-[14px] leading-5">
           Leadership involves more than just issuing directives; it is fundamentally about influencing, inspiring, and effectively guiding people toward a shared, compelling goal. An Online MBA curriculum is structured to help you internalize and master core executive functions:
          </p>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
              Strategic Thinking: Developing the ability to understand the broader organizational and market picture and anticipate future trends.
            </li>
            <li className="text-[14px] text-black font-normal leading-6">
             Analytical Decision-Making: Learning to use complex data and rigorous analysis to choose the most optimal and impactful path forward.
            </li>
            <li className="text-[14px] text-black font-normal leading-6">
            Communication Skills: Sharpening the capacity to express intricate ideas clearly, persuasively, and effectively across all organizational levels.
            </li>
            <li className="text-[14px] text-black font-normal leading-6">
            Team Leadership: Gaining expertise in managing diverse viewpoints, resolving conflict, and strategically assigning responsibilities within a team.
            </li>
          </ul>
           <p className="text-black text-[14px] leading-5">
           By focusing on these areas, you begin thinking like a leader, moving beyond the mindset of merely completing day-to-day tasks.
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
           <h2 className="text-2xl -mb-5 font-semibold text-[#345895]">
          Growing Through Real-World, Applied Projects
          </h2>
          <p className="text-black -mb-5 text-[14px] leading-5">
         One of the greatest advantages of modern MBA programs is their emphasis on practical application.<br/> This includes the extensive use of:
         </p>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
             Real Company Case Studies: Analyzing strategic problems faced by actual businesses.
              </li>
            <li className="text-[14px] text-black font-normal leading-6">
             Market Simulations: Operating virtual businesses in a competitive environment.
             </li>
            <li className="text-[14px] text-black font-normal leading-6">
          Collaborative Business Challenges: Working in teams to solve complex, novel organizational issues.
          </li>
            <li className="text-[14px] text-black font-normal leading-6">
           Strategy Development Exercises: Creating comprehensive plans for business expansion or pivot.
           </li>
          </ul>
           <p className="text-black text-[14px] leading-5">
          These activities provide you with invaluable opportunities to grow your professional confidence by applying theoretical concepts directly to dynamic, real-world scenarios.
          </p>

          <h2 className="text-[#345895] -mb-5 font-semibold text-2xl">
          Skill Development That Propels You Faster
          </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
         One of the greatest advantages of modern MBA programs is their emphasis on practical application.<br/> This includes the extensive use of:
         </p>
         <p className="text-black -mb-5 text-[14px] leading-5">
        Soft Skills 
        </p>
           <ul className="list-disc -mb-5 px-5">
            <li className="text-[14px] text-black font-normal leading-5">
            Conflict Resolution
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Emotional Intelligence
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Advanced Communication
         </li>
            <li className="text-[14px] text-black font-normal leading-5">
          Negotiation Strategies </li>
          </ul>
           <p className="text-black -mb-5 text-[14px] leading-5">
          Technical Skills 
          </p>
            <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
            Financial Modeling
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Market Research Techniques
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Data analytics and interpretation
         </li>
            <li className="text-[14px] text-black font-normal leading-5">
          Operations management and optimization
           </li>
          </ul>

          

          <h2 className="text-[#345895] -mb-5 font-semibold text-2xl md:text-2xl lg:text-2xl">
            Online MBA Curriculum Breakdown
          </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
         The curriculum is engineered to ensure you become a well-rounded and effective decision-maker. Most programs incorporate foundational and advanced courses in:
          </p>
          <ul className="list-disc px-5">
            <li className="text-[14px] text-black font-normal leading-5">
             Finance & Accounting
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
             Strategic Management
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
             Marketing & Consumer Behavior
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
             Leadership & Organizational Behavior
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
             Business Analytics & Technology Management
            </li>         
          </ul>

          <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
           The Role of Collaboration & Professional Networking
          </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
          Despite the digital setting, contemporary MBA programs actively foster strong networking opportunities through various avenues: 
          </p>
           <ul className="list-disc px-5 -mb-5">
            <li className="text-[14px] text-black font-normal leading-5">
             Active peer discussion forums
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
             Mandatory virtual team projects
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
             Structured alumni mentorship programs
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
            Exclusive industry guest lectures
            </li>   
          </ul>
           <p className="text-black text-[14px] leading-5">
             These professional connections are vital, helping you to grow professionally and unlock entirely new career doors.
            </p> 

            <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
         Flexibility That Supports the Working Professional
          </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
           Online MBAs are fundamentally built with the busy, professional adult in mind. Their structure is designed to support life balance by allowing:
           </p>
           <ul className="list-disc px-5 -mb-5">
            <li className="text-[14px] text-black font-normal leading-5">
             Learning at your personalized pace.
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
             Fitting challenging coursework into flexible evening and weekend hours.
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
           Successfully balancing demanding work, family obligations, and rigorous education.
            </li>  
          </ul>
           <p className="text-black text-[14px] leading-5">
             This essential flexibility lets you grow your career without experiencing burnout.
          </p>  

            <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
        Technology Tools That Facilitate Growth
        </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
          The learning platforms utilized are highly sophisticated and practical, employing tools such as:
          </p>
           <ul className="list-disc px-5 ">
            <li className="text-[14px] text-black font-normal leading-5">
            Virtual classrooms for synchronous learning
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
             Interactive whiteboards for collaborative problem-solving
              </li>
            <li className="text-[14px] text-black font-normal leading-5">
          Cloud-based assignments and project management
          </li> 
          <li className="text-[14px] text-black font-normal leading-5">
          Advanced business simulation software for decision-making practice
          </li>  
          </ul>


             <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
        How an Online MBA Enhances Career Opportunities
        </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
          Armed with your comprehensive new skillset, you are prepared to pursue and succeed in high-level roles such as:
          </p>
           <ul className="list-disc px-5 -mb-5">
            <li className="text-[14px] text-black font-normal leading-5">
             Operations Manager
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
            Marketing Manager
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
             Business Analyst
          </li> 
           <li className="text-[14px] text-black font-normal leading-5">
             Project Manager
          </li> 
           <li className="text-[14px] text-black font-normal leading-5">
            Entrepreneurial ventures
          </li> 
           <li className="text-[14px] text-black font-normal leading-5">
             Executive Director or VP roles
          </li>  
          </ul>
           <p className="text-black text-[14px] leading-5">
            These senior positions demand the strategic thinking and leadership capabilities that are significantly strengthened by an Online MBA. Graduates frequently experience immediate professional growth, often leading to promotions and salary increases within months of completion.
             </p> 

               <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
        Employers’ Perception of Online MBA Graduates
        </h2>
           <p className="text-black -mb-5 text-[14px] leading-5">
          Modern employers hold Online MBAs in high regard because they demonstrate several highly valued traits in a candidate:
           </p>
           <ul className="list-disc px-5 -mb-5">
            <li className="text-[14px] text-black font-normal leading-5">
            Self-motivation and initiative
            </li>
           <li className="text-[14px] text-black font-normal leading-5">
            Exceptional discipline and time management
            </li>
            <li className="text-[14px] text-black font-normal leading-5">
             Adaptability to new learning environments
          </li> 
           <li className="text-[14px] text-black font-normal leading-5">
             Technical proficiency and comfort with digital tools
          </li>   
          </ul>
           <p className="text-black text-[14px] leading-5">
           Companies increasingly appreciate candidates who have proven they can successfully thrive and lead in digital and remote work environments.
            </p>  

           <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
           Conclusion
        </h2>
           <p className="text-black text-[14px] leading-5">
An Online MBA is far more than just another degree—it represents a comprehensive professional transformation. It equips you with practical skills, real-world strategic experience, and the confidence necessary to take on significant challenges.<br/>
Whether your goal is chasing a major promotion, executing a successful career change, or launching an innovative business, an Online MBA provides both the clear roadmap and the essential momentum to achieve it.<br/>
Would you be interested in seeing the specific courses or specializations typically included in a modern Online MBA curriculum?
</p>
            
 </motion.div>

        {/* RIGHT SIDE BLOG LINKS */}
        <div className="flex flex-col gap-4 lg:mt-5 w-full bg-white rounded-2xl self-start h-fit shadow-lg p-4">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-2">
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
                <p className="text-[10px] leading-[1.4] text-[#1e5a9e] break-word">
                  {blog.title}
                </p>

                <Link 
                  href={blog.path}
                  className="mt-2 w-fit text-white bg-[#1e5a9e] text-[10px] px-3 py-1 rounded hover:bg-[#164a82] transition inline-block"
                >
                  Learnmore
                </Link>
              </div>
            </motion.div>
          ))}

         <button
  onClick={() => setShowAllRelated(true)}
  className="w-full mt-2 bg-linear-to-r from-[#5a9f5c] to-[#4a8f4c] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#4a8f4c] hover:to-[#3a7f3c] transition"
>
  View More
  <ChevronRight size={18} />
</button>

        </div>
      </div>
    </section>
  );
}

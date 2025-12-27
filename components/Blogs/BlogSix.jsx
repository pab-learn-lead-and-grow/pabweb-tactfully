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
  

  return (
    <section className="w-full flex flex-col font-[Inter] items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-[95%] mt-18 h-[25vh] md:h-[45vh] bg-cover rounded-t-3xl bg-center flex items-center justify-center"
     style={{
  backgroundImage: "url('/Blog6/background.png')",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundBlendMode: "overlay",
}}

      >
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-[64px] font-[Inter] font-bold text-white drop-shadow-lg">
            How Online BBA Builds Entrepreneurs 
          </h1>

          <p className="mt-3 text-xs md:text-lg lg:text-[40px] font-bold text-white/90 max-w-5xl mx-auto leading-tight">
        And How Online MBA Shapes Future CEOs
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
          className="bg-white shadow p-8 md:p-10 flex flex-col gap-6 rounded-t-2xl md:mb-10 lg:-mt-35 md:-mt-10"
        >
          <p className="text-black text-[14px] leading-5">
          In a world where business models evolve overnight and digital disruption is the new normal, the demand for business-savvy professionals has grown dramatically. What once required relocating to big cities, attending expensive institutes, and dedicating full-time years of life is now available in a far more flexible and accessible format: online business degrees.<br/>
Among these, the Online BBA and Online MBA have emerged as two powerful pathways — one helping young learners think like entrepreneurs early, and the other preparing experienced professionals for leadership roles at scale.<br/>
This blog explores how each program contributes to shaping tomorrow’s founders, managers, and CEOs — and why India is seeing a historic rise in online business education.
</p>

          <h2 className="text-2xl -mb-5 font-semibold text-[#345895]">
          The Rise of Online Business Education in India
          </h2>
          <p className="text-black text-[14px] font-regular -mb-5 leading-5">
       Over the past decade, online degrees have shifted from being “alternative” to becoming mainstream. Improvements in digital infrastructure, the affordability of devices, and growing acceptance of online certifications by employers have transformed the perception of online learning.<br/>
       Today, an online degree — when accredited and industry-aligned — stands shoulder-to-shoulder with traditional campus education, especially in business fields where practical skills and mindset matter more than physical classrooms.<br/>
       Students choose online BBA and MBA programs because they offer:
       </p>
       <ul className="list-disc list-inside px-5 -mb-5 marker:font-semibold marker:text-[16px]">
  <li className="text-[14px] text-black leading-5">
    Accessibility for learners in tier-2 and tier-3 cities
    </li>

  <li className="text-[14px] text-black leading-5">
   Affordability compared to on-campus fees and living costs
    </li>

  <li className="text-[14px] text-black leading-5">
    Flexibility to balance work, internships, or personal commitments
     </li>

  <li className="text-[14px] text-black leading-5">
    Industry-connected learning through case studies, simulations, and digital tools
    </li>

    <li className="text-[14px] text-black leading-5">
   Recognised accreditation from UGC, AICTE, NAAC-rated universities
   </li>
</ul>
 <p className="text-black text-[14px] leading-5">
   As India becomes one of the world’s largest online education markets, these degree pathways are powering thousands of careers.
 </p>

  <h2 className="text-2xl -mb-5 font-semibold text-[#345895]">
     Part 1: How an Online BBA Turns Students Into Entrepreneurs
      </h2>
          <p className="text-black text-[14px] leading-5">
  A Bachelor of Business Administration lays the groundwork for understanding how businesses operate. But an online BBA does much more — it teaches students to think independently, analyse problems in real time, and experiment with ideas while studying.<br/>
  Below are the ways an Online BBA builds entrepreneurial capabilities from the ground up.
  </p>
     <ol className="list-decimal list-inside marker:font-medium marker:text-[16px]">

  {/* 1 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
      A 360° Understanding of How Businesses Function
    </span>

    <p className="text-[14px] leading-5">
      Entrepreneurs can't rely on just one skill. They need to understand marketing,
      finance, operations, HR, customer behaviour, and even basic legal compliance.
      An online BBA introduces students to:
    </p>

    <ul className="list-disc font-regular leading-5 px-5">
      <li className="text-[14px]">Business fundamentals</li>
      <li className="text-[14px]">Accounting and financial planning</li>
      <li className="text-[14px]">Marketing and consumer psychology</li>
      <li className="text-[14px]">Entrepreneurship development</li>
      <li className="text-[14px]">Business law and corporate frameworks</li>
      <li className="text-[14px]">Digital tools, analytics, and e-commerce models</li>
    </ul>

    <p className="text-[14px] mb-5 leading-5">
      With this foundation, students can visualise the entire machinery of a business —
      not just one piece of it.
    </p>
  </li>

  {/* 2 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
      Practical, Case-Based, Problem-Solving Approach
    </span>

    <p className="text-[14px] leading-5">
      A standout advantage of online BBA programs is their application-focused structure.
      Instead of memorising theories, students are exposed to:
    </p>

    <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Real-world case studies</li>
      <li className="text-[14px]">Simulated business scenarios</li>
      <li className="text-[14px]">Project-based assignments</li>
      <li className="text-[14px]">Market research activities</li>
      <li className="text-[14px]">Collaborative group work</li>
    </ul>

    <p className="text-[14px] leading-5">
      Such training builds two crucial entrepreneurial traits:
    </p>

    <ul className="px-5 mb-5 leading-5">
      <li className="text-[14px]">
        ✔ <span className="font-medium">Creative Thinking</span> — approaching challenges
        from multiple angles to craft innovative ideas.
      </li>
      <li className="text-[14px]">
        ✔ <span className="font-medium">Decision-Making Under Constraints</span> —
        learning to act decisively even with limited data.
      </li>
    </ul>
  </li>

  {/* 3 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
      Early Exposure to Digital Tools and Modern Business Technologies
    </span>

    <p className="text-[14px] leading-5">
      Online BBA programs integrate technology deeply into learning through modules such as:
    </p>

    <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Digital marketing</li>
      <li className="text-[14px]">Data analytics</li>
      <li className="text-[14px]">Social media branding</li>
      <li className="text-[14px]">Spreadsheet modelling</li>
      <li className="text-[14px]">E-commerce strategy</li>
    </ul>

    <p className="text-[14px] leading-5 mb-5">
      This ensures students can apply business concepts effectively in India’s
      rapidly growing digital economy.
    </p>
  </li>

  {/* 4 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
      Flexibility That Allows Experimentation
    </span>

    <p className="text-[14px] leading-5">
      One of the biggest advantages of an online BBA is freedom. Students can:
    </p>

    <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Pursue internships</li>
      <li className="text-[14px]">Take part-time jobs</li>
      <li className="text-[14px]">Freelance</li>
      <li className="text-[14px]">Start a small venture</li>
      <li className="text-[14px]">Explore side projects</li>
      <li className="text-[14px]">Build portfolios or online brands</li>
    </ul>

    <p className="text-[14px] leading-5">
     This flexibility allows them to apply classroom concepts directly into real-life situations — something traditional rigid schedules often restrict.<br/>
Many online learners end up launching small businesses during the degree itself, giving them a tremendous head start in the entrepreneurial world.
    </p>
  </li>

</ol>


      <div className="w-full h-full bg-white overflow-hidden">
            <Image
              src="/Blog6/blog6Content.png"
              alt="placeholder"
              width={666}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>


          <h2 className="text-2xl -mb-5 font-semibold text-[#345895]">
  Part 2: How an Online MBA Shapes Managers — and Future CEOs
  </h2>
          <p className="text-black text-[14px] leading-5">
 If BBA lays the foundation, an MBA strengthens leadership, strategy, and decision-making the skills needed to manage teams, navigate complex decisions, and scale organisations.<br/>
An Online MBA is especially impactful for working professionals who want to rise to managerial or executive roles without pressing pause on their careers.<br/>
Here’s how it transforms professionals into future-ready leaders.<br/>
Below are the ways an online BBA builds entrepreneurial capabilities from the ground up.
  </p>

          <ol className="list-decimal list-inside marker:font-medium marker:text-[16px]">

  {/* 1 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
      Sharpens Strategic Thinking and Big-Picture Decision Making
    </span>

    <p className="text-[14px] leading-5">
      Leadership requires stepping away from day-to-day operations and seeing the larger business landscape.<br/>
      Online MBA programs cover advanced business domains such as:
    </p>

    <ul className="list-disc font-regular leading-5 px-5">
      <li className="text-[14px]">Corporate Strategy</li>
      <li className="text-[14px]">Global markets</li>
      <li className="text-[14px]">Business analytics</li>
      <li className="text-[14px]">Finance and risk management</li>
      <li className="text-[14px]">Governance and ethics</li>
      <li className="text-[14px]">Supply chain strategy</li>
      <li className="text-[14px]">Mergers and acquisitions</li>
    </ul>

    <p className="text-[14px] leading-5">
    This equips learners with the ability to:
    </p>
    <ul className="list-disc font-regular leading-5 px-5">
      <li className="text-[14px]">Analyse market trends</li>
      <li className="text-[14px]">Assess risks proactively</li>
      <li className="text-[14px]">Make data-driven decisions</li>
      <li className="text-[14px]">Understand global business dynamics</li>
      <li className="text-[14px]">Build long-term strategic roadmaps</li>
    </ul>
    <p className="text-[14px] mb-5 leading-5">
   This shift from “task executor” to “strategic thinker” is what sets future CEOs apart.
    </p>
  </li>

  {/* 2 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
      Builds Strong Leadership and People-Management Skills
    </span>

    <p className="text-[14px] leading-5">
     A key part of becoming a leader is learning how to manage people — their motivations, strengths, conflicts, and ambitions.<br/>
    Online MBA courses often include:
     </p>

    <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Organisational behaviour</li>
      <li className="text-[14px]">Leadership communication</li>
      <li className="text-[14px]">Negotiation skills</li>
      <li className="text-[14px]">Team building</li>
      <li className="text-[14px]">Conflict management</li>
      <li className="text-[14px]">Managerial psychology</li>
    </ul>

    <p className="text-[14px] leading-5">
     These modules help future managers:
     </p>
      <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Understand human behaviour</li>
      <li className="text-[14px]">Motivate diverse teams</li>
      <li className="text-[14px]">Navigate organisational politics</li>
      <li className="text-[14px]">Create positive work cultures</li>
      <li className="text-[14px]">Lead with clarity and confidence</li>
    </ul>
    <p className="text-[14px] mb-5 leading-5">
     Strong people skills differentiate a manager from a leader — and eventually, a leader from a CEO.
     </p>
  </li>

  {/* 3 */}
  <li className="text-black">
    <span className="font-medium text-[16px]">
     Enables Networking Across Industries and Geographies </span>

    <p className="text-[14px] leading-5">
     Networking in online MBA programs is far more impactful than many assume.<br/>
     Students interact with: </p>

    <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Working professionals from various industries</li>
      <li className="text-[14px]">Entrepreneurs</li>
      <li className="text-[14px]">Senior managers</li>
      <li className="text-[14px]">International peers</li>
      <li className="text-[14px]">Guest lecturers and industry mentors</li>
    </ul>

    <p className="text-[14px] leading-5">
      These networks often lead to:
    </p>
     <ul className="list-disc px-5 leading-5">
      <li className="text-[14px]">Job opportunities</li>
      <li className="text-[14px]">Collaborations</li>
      <li className="text-[14px]">Startup partnerships</li>
      <li className="text-[14px]">Mentorship connections</li>
    </ul>
     <p className="text-[14px] mb-5 leading-5">
      In the business world, who you know often accelerates what you can achieve — and online MBAs create access to strong professional circles.
    </p>
  </li>

 {/* 4 */}
<li className="text-black">
  <span className="font-medium text-[16px]">
    Offers Deep Specialisations for Career Advancement
  </span>

  <p className="text-[14px] leading-5">
    Unlike BBA, MBAs offer focused specialisations that help professionals
    scale in niche domains.
    <br />
    Popular specialisations include:
  </p>

  <ul className="list-disc px-5 leading-5">
    <li className="text-[14px]">Finance</li>
    <li className="text-[14px]">Marketing</li>
    <li className="text-[14px]">HR Management</li>
    <li className="text-[14px]">Business Analytics</li>
    <li className="text-[14px]">Operations</li>
    <li className="text-[14px]">International Business</li>
    <li className="text-[14px]">IT Management</li>
  </ul>

  <p className="text-[14px] leading-5">
    This deep expertise helps professionals move into senior roles such as:
  </p>

  <ul className="list-disc px-5 leading-5">
    <li className="text-[14px]">Marketing Manager</li>
    <li className="text-[14px]">Financial Analyst</li>
    <li className="text-[14px]">Project Manager</li>
    <li className="text-[14px]">HR Business Partner</li>
    <li className="text-[14px]">Operations Head</li>
    <li className="text-[14px]">Product Manager</li>
  </ul>

  <p className="text-[14px] mb-5 leading-5">
    Specialisation is what allows an individual to move from mid-level roles
    to high-impact strategic positions.
  </p>
</li>


</ol>

 <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
  Why Online BBA and MBA Are Becoming Career Game-Changers in India
</h2>

<p className="text-black text-[14px] leading-5">
  The shift toward online business education is not temporary — it’s a structural change driven by economic and technological factors.
  Here’s why students and professionals across India are choosing online degrees:
</p>

<ol className="list-decimal list-inside marker:font-medium marker:text-[16px]">
  <li className="text-black mb-5 text-[14px] leading-5">
    <span className="font-medium text-[16px]">
      Lower cost and no relocation expenses
    </span>
    <br />
    Online programs significantly reduce the financial burden by eliminating relocation, accommodation, and opportunity costs.
  </li>

  <li className="text-black mb-5 text-[14px] leading-5">
    <span className="font-medium text-[16px]">
      Flexibility for working professionals and young students
    </span>
    <br />
    Learners can balance career, family, or personal commitments while continuing their education.
  </li>

  <li className="text-black mb-5 text-[14px] leading-5">
    <span className="font-medium text-[16px]">
      Industry relevance
    </span>
    <br />
    Curriculums integrate real case studies, digital tools, and application-based learning aligned with modern business needs.
  </li>

  <li className="text-black mb-5 text-[14px] leading-5">
    <span className="font-medium text-[16px]">
      Growing employer acceptance
    </span>
    <br />
    With universities accredited by UGC, AICTE, and NAAC, online degrees now carry strong professional credibility.
  </li>

  <li className="text-black text-[14px] leading-5">
    <span className="font-medium text-[16px]">
      Opportunities in India’s booming startup ecosystem
    </span>
    <br />
    An entrepreneurial nation needs entrepreneurial education — and online degrees fit perfectly into this ecosystem.
  </li>
</ol>

  <p className="text-black text-[16px] -mb-5 font-medium leading-5">
        Global Networking and Credibility
       </p>
        <p className="text-black text-[14px] leading-5">
     Digital networks can be even broader and more global than traditional campus networks. Furthermore, the myth that Online MBAs lack respect is consistently debunked: accreditation from recognized bodies like AACSB or EQUIS ensures the degree is viewed as equally credible by employers worldwide.
     </p>


     <h2 className="text-[#345895] font-semibold -mb-5 text-2xl">
  Who Should Choose Online BBA or Online MBA?
</h2>

<p className="text-black text-[16px] -mb-5 font-medium">
  Choose Online BBA If You Are:
</p>

<ul className="list-disc px-5 leading-5">
  <li className="text-[14px] text-black">A school graduate wanting business foundations</li>
  <li className="text-[14px] text-black">Someone who dreams of building a startup</li>
  <li className="text-[14px] text-black">A learner looking for flexible education</li>
  <li className="text-[14px] text-black">
    Interested in marketing, finance, or digital business early
  </li>
  <li className="text-[14px] text-black">
    Someone who wants to explore multiple interests alongside studies
  </li>
</ul>

<p className="text-black text-[16px] leading-5 font-medium -mb-5">
  Choose Online MBA If You Are:
</p>

<ul className="list-disc px-5 leading-5">
  <li className="text-[14px] text-black">
    A working professional seeking career acceleration
  </li>
  <li className="text-[14px] text-black">
    A manager aiming for leadership roles
  </li>
  <li className="text-[14px] text-black">
    Someone targeting CXO-level positions
  </li>
  <li className="text-[14px] text-black">
    Interested in strategic thinking and advanced business tools
  </li>
  <li className="text-[14px] text-black">
    A professional looking for global networking and expertise
  </li>
</ul>

          
          <h2 className="text-[#345895] -mb-5 font-semibold text-2xl md:text-2xl lg:text-2xl">
         Final Thoughts: A New Era of Business Learning
         </h2>
          
         
         <p className="text-black text-[14px] leading-5">
          Both online BBA and online MBA programs are reshaping how India produces entrepreneurs, managers, and CEOs. While BBA lays the entrepreneurial foundation, MBA fine-tunes leadership skills needed for organisational success.<br/>
          Together, they create a powerful pathway for anyone who wants to thrive in modern business — whether that means launching a startup, leading teams, or steering companies into the future.<br/>
          Online education has democratised opportunity. Today, ambition is no longer limited by geography or schedule — if you’re ready to learn, the world of business is ready for you.
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
                  Read More
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

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const blogs = [
    {
      id: 1,
      title:
        "Online MBA For Career Growth: How An Online MBA Helps You Raise From Employee To Leader",
      image: "/professional.png",
    },
    {
      id: 2,
      title: "Why NMIMS Is The Top Choice For Working Professionals In India",
      image: "/professional.png",
    },
    {
      id: 3,
      title:
        "How Online MBA’s Are Reshaping Global Careers With Data, Trends & Inspiring Success Stories",
      image: "/professional.png",
    },
    {
      id: 4,
      title:
        "Top 10 Reasons A Modern Online MBA Dramatically Boosts Your Salary And Acc Career Mobility",
      image: "/professional.png",
    },
  ];

  const rows = [
    {
      feature: "Tuition Range",
      online: "Lower to Medium",
      regular: "Medium to High",
    },
    {
      feature: "Additional Costs",
      online: "Minimal",
      regular: "High (housing, meals, travel)",
    },
    {
      feature: "Flexibility",
      online: "High",
      regular: "Low",
    },
    {
      feature: "Networking",
      online: "Global but virtual",
      regular: "Strong in-person",
    },
    {
      feature: "Campus Access",
      online: "No",
      regular: "Yes",
    },
  ];

  return (
    <section className="w-full flex flex-col font-[Inter] items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-[95%] mt-18 h-[25vh] md:h-[45vh] bg-cover rounded-t-3xl bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Blog1/background.jpg')" }}
      >
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-[64px] font-[Inter] font-extrabold text-white drop-shadow-lg">
            Online MBA vs Regular MBA:
          </h1>

          <p className="mt-3 text-xs md:text-lg lg:text-[32px] font-extrabold text-white/90 max-w-3xl mx-auto">
            Which One is Right for Working Professionals?
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
          className="bg-white shadow p-8 md:p-10 flex flex-col gap-6 lg:-mt-35 md:-mt-10"
        >
          <h2 className="text-2xl font-semibold text-[#345895]">
            Understanding the Modern MBA Landscape
          </h2>
          <p className="text-gray-700 leading-5">
            MBA education has evolved dramatically over the past decade4. With
            technology fundamentally reshaping how professionals learn and
            businesses operate, the Online MBA has emerged as a powerful,
            high-quality alternative to the traditional campus-based program5.
            Today, working professionals have access to highly flexible,
            academically rigorous programs that are designed to fit seamlessly
            into a busy lifestyle6. This guide will provide a close look at both
            formats, compare their unique strengths, and help you determine
            which option best aligns with your ambitious professional goals7
          </p>

          <h2 className="text-xl font-semibold text-black">
            What is an Online MBA?
          </h2>
          <p className="text-gray-700 leading-5">
            An Online MBA is a fully digital master’s program9. The curriculum
            is delivered through cutting-edge technology, including virtual
            classrooms, interactive live sessions, and pre-recorded
            lectures10. This structure provides students with the unique ability
            to access learning materials and coursework anytime, making it the
            ideal choice for busy professionals who wish to advance their
            careers and gain new skills without the necessity of leaving their
            current job11.
          </p>

          <h2 className="text-xl font-semibold text-black">
            What is a Regular MBA?
          </h2>
          <p className="text-gray-700 leading-5">
            A Regular MBA follows the time-honoured, traditional on-campus
            model13. Students attend classes face-to-face, participate in
            high-impact, in-person workshops, and engage deeply with the rich
            social and academic life of the campus culture14. This format is
            typically chosen by students who seek a fully immersive and
            comprehensive academic experience15.
          </p>
          <div className="w-full h-full bg-white overflow-hidden">
            <Image
              src="/Blog1/mbaContent.png"
              alt="placeholder"
              width={666}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-[#345895] font-semibold text-2xl md:text-2xl lg:text-2xl">
            Key Differences Between Online MBA and Regular MBA
          </h2>
          <ul className="list-disc mb-4 list-inside space-y-2">
            <li className="text-[16px] text-black font-medium leading-6">
              Flexibility and Schedule Control
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                The Online MBA format clearly wins in terms of flexibility.
                Students are empowered to schedule their learning during
                evenings, weekends, or whenever their demanding schedule
                permits. This high degree of control makes it significantly
                easier to maintain work responsibilities without major
                interruptions while diligently pursuing advanced study.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Learning Format and Delivery
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Online programs leverage modern technology, relying on engaging
                video lectures, dynamic virtual discussions, and sophisticated
                digital collaboration tools. In contrast, Regular MBAs center
                their delivery around traditional, robust classroom discussions,
                collaborative group activities, and intensive, immersive
                physical workshops.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Curriculum and Academic Rigor
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Contrary to the outdated common belief, the fundamental
                curriculum for Online MBA and Regular MBA programs is often
                quite similar in its core content and challenge. Many top-tier
                universities offer the identical, high-standard coursework in
                both formats, ensuring academic quality is maintained.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Classroom Interaction and Networking
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Traditional MBAs historically offer richer, spontaneous
                face-to-face networking opportunities with peers and
                faculty. However, the modern Online MBA has rapidly evolved to
                incorporate sophisticated tools like live synchronous sessions,
                virtual breakout rooms, and the advantage of diverse, global
                peer groups, effectively expanding networking opportunities
                beyond simple local boundaries.
              </p>
            </li>
          </ul>

          <h2 className="text-[#345895] font-semibold text-2xl md:text-2xl lg:text-2xl">
            Advantages of an Online MBA for Working Professionals
          </h2>
          <ul className="list-disc mb-4 list-inside space-y-2">
            <li className="text-[16px] text-black font-medium leading-6">
              Work-Study Balance
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                The standout advantage is its superior flexibility. Working
                students can manage deadlines, enjoy commute-free learning, and
                balance intense career commitments with far less stress and
                disruption than a traditional program
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Lower Costs and Travel Savings
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Online programs typically come with a lower tuition cost and
                eliminate significant additional expenses like travel, on-campus
                housing, and daily meal plans
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Access to Global Faculty and Peers
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Many online programs bring together a diverse cohort of students
                and faculty from different countries, which profoundly enriches
                classroom discussions and substantially expands professional
                networks worldwide
              </p>
            </li>
          </ul>

          <h2 className="text-[#345895] font-semibold text-2xl md:text-2xl lg:text-2xl">
            Strengths of a Regular MBA
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li className="text-[16px] text-black font-medium leading-6">
              In-Person Networking Opportunities
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Regular MBAs serve as a magnet, naturally attracting corporate
                recruiters, prominent industry leaders, and a highly engaged
                alumni network that facilitates strong, personal career
                connections.{" "}
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Campus Experience and Learning Culture
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Students benefit from the full, vibrant campus ecosystem,
                including specialized clubs, professional competitions, and
                readily available, hands-on campus resources.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Stronger Corporate Recruitment on Campus
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Many large companies still prefer to conduct their primary,
                on-site hiring events directly on campus, which often gives
                traditional MBA students a tangible edge in immediate, top-tier
                corporate placement.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              For Career Switchers
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                A Regular MBA may provide the most robust career support,
                including dedicated on-campus placement opportunities, which can
                be essential for making a significant industry transition.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              For Career Accelerators
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                An Online MBA is an excellent tool for professionals to gain
                advanced skills and a degree while continuing to
                work. Completing the program this way demonstrates exceptional
                dedication, time-management ability, and simultaneous practical
                application of learning.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              For Entrepreneurs
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Online programs provide the flexible learning schedule necessary
                for entrepreneurs, making it significantly easier to
                successfully run a growing business while concurrently studying
                for an advanced degree.
              </p>
            </li>
          </ul>

          <section className="w-full px-4 md:px-5 lg:px-5 py-10 bg-white">
            {/* Heading */}
            <h2 className="text-[#345895] font-semibold text-2xl md:text-2xl lg:text-2xl">
              Cost and Feature Comparison
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-6 max-w-3xl">
              The table below provides a quick, comparative overview of key
              features for both programs:
            </p>

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
                      Regular MBA
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

          <h2 className="text-[#345895] font-semibold text-2xl md:text-2xl lg:text-2xl">
            Factors to Consider Before Choosing an Online MBA
          </h2>
          <p className="text-[14px] font-normal text-[#2E2F35] leading-6">
            To ensure you choose a high-value program, working professionals
            should consider
          </p>

          <ul className="list-disc mb-4 list-inside space-y-2">
            <li className="text-[16px] text-black font-medium leading-6">
              Accreditation
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Ensure the program is fully accredited by respected, recognized
                bodies, such as the AACSB or EQUIS.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Program Reputation
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Diligently check alumni reviews, official program rankings, and
                the recognition the degree receives from major employers in your
                field.
              </p>
            </li>
            <li className="text-[16px] text-black font-medium leading-6">
              Time Commitment
              <p className="mt-2 text-[14px] font-normal text-[#2E2F35] leading-6">
                Even with their celebrated flexibility, online programs still
                demand significant discipline, careful planning, and a
                substantial time commitment to succeed.
              </p>
            </li>
          </ul>
          <h2 className="text-[#345895] font-semibold text-2xl md:text-2xl lg:text-2xl">
            Conclusion
          </h2>
          <p className=" text-[14px] font-normal italic text-[#2E2F35] leading-6">
            The final decision between an Online MBA and a Regular MBA hinges
            entirely on your personal goals, current lifestyle, and available
            budget.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[14px] text-black font-normal leading-6">
              For working professionals who prioritize convenience, schedule
              control, and cost savings without compromising academic quality,
              the Online MBA stands out as the most powerful and flexible
              option.
            </li>
            <li className="text-[14px] text-black font-normal leading-6">
              For those specifically seeking a fully immersive on-campus
              experience, deeply personal networking, and hands-on access to
              campus-based corporate recruiting, the Regular MBA may be the
              better fit.
            </li>
          </ul>

          <button className="w-fit text-white px-6 py-2 rounded-lg text-sm transition bg-linear-to-r from-[#4D964F] to-[#193019] border-[0px] border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200">
            CTA
          </button>

          <p className="text-sm text-gray-500">© Lorem Ipsum is simply dummy</p>
        </motion.div>

        {/* RIGHT SIDE BLOG LINKS */}
        <div className="flex flex-col gap-4 lg:mt-5 w-full bg-white rounded-2xl overflow-hidden shadow-lg p-4">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-2">
            Related Articles
          </h2>

          {blogs.map((blog) => (
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

                <button className="mt-2 w-fit text-white bg-[#1e5a9e] text-[10px] px-3 py-1 rounded hover:bg-[#164a82] transition">
                  Learnmore
                </button>
              </div>
            </motion.div>
          ))}

          <button className="w-full mt-2 bg-linear-to-r from-[#5a9f5c] to-[#4a8f4c] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#4a8f4c] hover:to-[#3a7f3c] transition">
            View More
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

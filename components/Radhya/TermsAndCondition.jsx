"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ConnectToday from "../NmimsSection/ConnectToday";

export default function WhatSetsUsApart() {
  const items = [
    {
      title: "One person who's got your back",
      desc: "A dedicated point of contact who supports you through every step of your journey. No confusion. No chaos. Just clarity.",
      tags: ["Support", "Clarity", "Trust"],
      img: "/aboutUs/setApart1.png",
    },
    {
      title: "Real experts, real advice",
      desc: "Subject Matter Experts who understand your goals and give advice that actually works in real life.",
      tags: ["Expertise", "Insight", "Direction"],
      img: "/aboutUs/setApart2.png",
    },
    {
      title: "Growth-first online learning",
      desc: "Guidance to choose online programs that deliver real results, not just another certificate.",
      tags: ["Growth", "Outcomes", "Opportunity"],
      img: "/aboutUs/setApart3.png",
    },
    {
      title: "Help exactly when you need it",
      desc: "Doubts solved right away. No waiting. No ticket systems. No stress.",
      tags: ["Instant", "Accessible", "Reliable"],
      img: "/aboutUs/setApart4.png",
    },
    {
      title: "Progress that doesn’t pause",
      desc: "Regular check-ins to keep you moving forward and improving continuously.",
      tags: ["Accountability", "Consistency", "Momentum"],
      img: "/aboutUs/setApart5.png",
    },
  ];

  return (
    <main>
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-16 font-[Inter]">
  {/* HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className=" md:mb-20 mt-12"
  >
  <div className="flex justify-center lg:justify-start">
  <div className="inline-block text-center lg:text-left">
    <h2
    className="
    text-4xl md:text-5xl lg:text-[96px]
    font-bold leading-none 
    bg-linear-to-r from-[#469D4F] to-[#345895]
    bg-clip-text text-transparent">
    At Radhya
    </h2>
    <div className="flex justify-center lg:justify-end">
      <p className="handdrawn-underline text-sm md:text-xl translate:-x-10 text-[#4D964F] italic leading-none mt-2">
       Education
      </p>
    </div>

  </div>
</div>

  </motion.div>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 max-w-7xl mx-auto mt-20">
    {/* LEFT STACK (Education + Learning) */}
    <div className="flex flex-col gap-6">
      {/* EDUCATION */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="
          relative
          rounded-2xl
          bg-[radial-gradient(circle_at_center,#064E92_0%,#0B2131_70%)]
          text-white
          p-5 md:p-6
          shadow-lg
          lg:max-w-[90%]
          lg:h-[250px]
          lg:self-end
          overflow-hidden
        "
      >
        {/* TEXT BLOCK – leave room for image on lg+ */}
        <div className="relative z-10 lg:pr-[40%]">
          <h3 className="text-lg md:text-2xl  font-semibold mb-3">
            Education with Real Return on Learning
          </h3>

          <p className="text-sm leading-relaxed opacity-90">
            We believe education isn't about collecting degrees. Our focus is
            helping professionals achieve measurable growth through better
            opportunities, higher salaries, and leadership impact.
          </p>
        </div>

        {/* IMAGE – bottom-right on lg+, normal flow on mobile */}
        <div className="
          mt-4
          flex justify-center
          lg:mt-0
          lg:absolute lg:bottom-0 lg:right-0
          lg:w-[45%]
          lg:justify-end
        ">
          <Image
            src="/aboutUs/aboutEducation.png"
            alt="Education"
            width={240}
            height={200}
            className="w-[140px] md:w-40 lg:w-full lg:p-6 h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* LEARNING */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="
          relative
          rounded-2xl
          bg-[radial-gradient(circle_at_center,#064E92_0%,#0B2131_60%)]
          text-white
          p-6 md:p-8
          shadow-lg
          lg:max-w-[70%]
          lg:self-end
          overflow-hidden
        "
      >
        {/* TEXT BLOCK – padded so it never overlaps image */}
        <div className="relative z-10 ">
          <h3 className="text-lg md:text-2xl font-semibold lg:pr-[6%] mb-3 leading-tight">
            Smarter & Purpose-Driven
            Learning Choices
          </h3>

          <p className="text-sm leading-relaxed lg:pr-[35%] xl:pr-[55%] opacity-90">
            In a world full of online courses, we stand out by making learning
            personal, practical, and aligned with real goals. We guide
            individuals to choose programs that genuinely support their
            ambitions, rather than generic options.
          </p>
        </div>

        {/* IMAGE – bottom-right on lg+, stacked below on mobile */}
        <div className="
          mt-4
          flex justify-center
          lg:mt-0
          lg:absolute lg:bottom-0 lg:right-0
          lg:w-[55%]
          lg:justify-end
        ">
          <Image
            src="/aboutUs/aboutLearning.png"
            alt="Learning"
            width={420}
            height={320}
            className="w-40 md:w-[200px] lg:w-full lg:p-6 h-auto object-contain"
          />
        </div>
      </motion.div>
    </div>

    {/* RIGHT CARD (Career) */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative rounded-3xl
        bg-linear-to-br from-[#357A38] to-[#1E5F32]
        text-white shadow-xl
        flex flex-col
        lg:max-w-[75%]
        lg:self-start
        xl:-translate-y-38

      "
    >
      <div className="p-6 md:p-8 ">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Not Just Courses -<br/> Career Transformation
        </h3>

        <p className="text-sm leading-relaxed opacity-95">
          We don,t sell courses or push universities. We understand careers and
          guide learners toward informed decisions that deliver real, lasting
          outcomes.
        </p>
      </div>

      <div className="mt-6 lg:mt-10 xl-mt-20 flex justify-center">
        <Image
          src="/aboutUs/aboutCareer.png"
          alt="Career"
          width={400}
          height={360}
          className="w-[180px] md:w-[260px] lg:w-[450px] h-auto object-contain"
        />
      </div>
    </motion.div>
  </div>
</section>



      <section className="w-full font-[Inter] px-6 md:px-16 lg:px-24 py-16">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
          text-4xl md:text-5xl lg:text-[64px] 
          font-bold 
          bg-linear-to-r from-[#345895] to-[#4D964F] 
          bg-clip-text text-transparent
          leading-tight mb-2
        "
        >
          What Sets Us Apart
        </motion.h2>

        <p className="text-gray-500 text-sm md:text-md lg:text-[22px] mb-12">
          We turn direction into transformation.
        </p>

        {/* CONTENT BLOCKS */}
        <div className="flex flex-col gap-16">
          {items.map((item, index) => {
            const isRight = index % 2 === 1; // 2nd + 4th item on right

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* IMAGE */}
                <div className={isRight ? "md:order-2" : "md:order-1"}>
                  <div className="relative flex justify-center md:justify-start">
                    <div className="w-[80%] md:w-[90%] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={500}
                        height={350}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className={isRight ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-xl md:text-[25px] lg:text-[48px] font-bold text-[#345895] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 max-w-md">{item.desc}</p>

                  <div className="flex flex-wrap gap-1 lg:gap-2 mt-5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1 lg:px-5 lg:py-2 border border-gray-300 rounded-full text-[10px]  md:text-sm text-black hover:bg-gray-100 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-20 font-[Inter]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-6 items-start"
          >
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/aboutUs/mission-vision.png"
                alt="Vision"
                width={160}
                height={320}
                className=" w-[85px] md:w-[120px] lg:w-[150px] object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="bg-linear-to-r from-[#345895] to-[#4D964F] bg-clip-text text-transparent font-semibold italic text-lg mb-1">
                Vision
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-3">
                The Big Picture
              </h3>

              <p className="text-gray-600 text-xs md:text-lg lg:text-[15px] xl:text-[22px] leading-tight max-w-md">
                We aspire to be the leading provider of comprehensive learning
                solutions designed specifically for working professionals,
                corporate organizations, and the global workforce. Our ultimate
                goal is to empower individuals and teams with the knowledge,
                skills, and tools necessary to successfully navigate their
                career paths and achieve their professional aspirations in an
                ever-evolving business landscape.
              </p>
            </div>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-6 items-start"
          >
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/aboutUs/mission-vision.png"
                alt="Mission"
                width={160}
                height={320}
                className=" w-[85px] md:w-[120px] lg:w-[150px] object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className= "bg-linear-to-r from-[#345895] to-[#4D964F] bg-clip-text text-transparent font-semibold italic text-lg mb-1">
                 Mission
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-3">
                The Game Plan
              </h3>

              <p className="text-gray-600 text-xs md:text-lg lg:text-[15px] xl:text-[22px] leading-tight max-w-md">
                Our mission is to support students and working professionals as
                they navigate their career paths, helping them overcome barriers
                and achieve meaningful growth. By offering world-class programs,
                personalized guidance, and technology-driven learning solutions,
                we create transformative experiences that empower individuals to
                reach their full potential and achieve their biggest career
                goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <ConnectToday />
    </main>
  );
}

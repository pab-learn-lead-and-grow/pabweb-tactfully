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
      img: "/aboutUs/set1.png",
    },
    {
      title: "Real experts, real advice",
      desc: "Subject Matter Experts who understand your goals and give advice that actually works in real life.",
      tags: ["Expertise", "Insight", "Direction"],
      img: "/aboutUs/set2.png",
    },
    {
      title: "Growth-first learning",
      desc: "Guidance to choose online and offline programs that deliver real results, not just another certificate.",
      tags: ["Growth", "Outcomes", "Opportunity"],
      img: "/aboutUs/set3.png",
    },
    {
      title: "Help exactly when you need it",
      desc: "Doubts solved right away. No waiting. No ticket systems. No stress.",
      tags: ["Instant", "Accessible", "Reliable"],
      img: "/aboutUs/set4.png",
    },
    {
      title: "Progress that doesn’t pause",
      desc: "Regular check-ins to keep you moving forward and improving continuously.",
      tags: ["Accountability", "Consistency", "Momentum"],
      img: "/aboutUs/set5.png",
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
    bg-[linear-gradient(90deg,#FFB901_0%,#AD6F35_35.58%,#57216D_52.4%,#3C087E_100%)]
    bg-clip-text text-transparent">
    At Radhya
    </h2>
    <div className="flex justify-center lg:justify-end">
      <p className="handdrawn-underline text-sm md:text-xl translate:-x-10 text-[#D68E0E] italic leading-none mt-2">
        Education Academy
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
          bg-linear-to-br from-[#270562] to-[#3C087E]/50
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
            src="/aboutUs/aboutEd.png"
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
           bg-linear-to-br from-[#270562] to-[#3C087E]/50
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
            In a world full of online and offline education opportunities, we stand out by making learning
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
            src="/aboutUs/aboutLearn.png"
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
      bg-linear-to-b from-[#270562] to-[#3C087E]/50
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
          We don't sell courses or push universities. We understand careers and
          guide learners toward informed decisions that deliver real, lasting
          outcomes.
        </p>
      </div>

      <div className="mt-6 lg:mt-10 xl-mt-20 flex justify-center">
        <Image
          src="/aboutUs/aboutCar.png"
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
          bg-[#270652]
          bg-clip-text text-transparent
          leading-tight mb-2
        "
        >
          What Sets Us Apart
        </motion.h2>

        <p className="text-[#333333] text-sm md:text-md lg:text-[22px] mb-12">
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
                  <h3 className="text-xl md:text-[25px] lg:text-[48px] font-bold text-[#D68E0E] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#A4A4A4] mt-3 max-w-md">{item.desc}</p>

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
        <div className="max-w-7xl mx-auto ">
          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-6 mb-10 items-start"
          >
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/aboutUs/missionAndVision.png"
                alt="Vision"
                width={100}
                height={220}
                className="w-[120px] md:w-[110px] lg:w-[70px] xl:w-[90px] object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="inline-block bg-linear-to-r from-[#3C087E] to-[#FFB901] bg-clip-text text-transparent font-semibold italic text-lg mb-1">
                Vision
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-3">
                The Big Picture
              </h3>

              <p className="text-gray-600 text-xs md:text-lg lg:text-[15px] xl:text-[22px] leading-tight max-w-6xl">
             We aspire to be the leading provider of comprehensive learning and counselling solutions, empowering students, working professionals, and organizations to make informed and confident education choices. Whether it is online learning opportunities or traditional offline education pathways, our goal is to guide individuals and teams toward the right programs, equipping them with the knowledge, skills, and clarity needed to achieve their academic and professional aspirations in an ever-evolving world.</p>
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
                src="/aboutUs/missionAndVision.png"
                alt="Mission"
                width={100}
                height={220}
                className="w-[120px] md:w-[110px] lg:w-[70px] xl:w-[90px] object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className= "inline-block bg-gradient-to-r from-[#3C087E] to-[#FFB901] bg-clip-text text-transparent font-semibold italic text-lg mb-1">
                 Mission
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-3">
                The Game Plan
              </h3>

              <p className="text-gray-600 text-xs md:text-lg lg:text-[15px] xl:text-[22px] leading-tight max-w-6xl">
              Our mission is to support students and working professionals as they navigate their education and career paths, helping them overcome barriers and achieve meaningful growth. By providing reliable information, personalized counselling, and access to suitable online and offline learning opportunities, we enable smarter decision-making and create transformative experiences that empower individuals to reach their full potential and achieve their biggest career goals.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <ConnectToday />
    </main>
  );
}

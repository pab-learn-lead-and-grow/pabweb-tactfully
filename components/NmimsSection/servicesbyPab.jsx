"use client";

import { motion } from "framer-motion";

export default function ServicesByPAB() {
  const servicesPab = [
    {
      num: "01",
      title: "1-1 career coaching",
      desc: "trusted one point of contact throughout your journey",
    },
    {
      num: "02",
      title: "Subject matter experts",
      desc: "team of dedicated SME for your personal interests",
    },
    {
      num: "03",
      title: "Post admission program services",
      desc: "a help in adapting online courses with growth opportunities",
    },
    {
      num: "04",
      title: "30 min query assistance",
      desc: "just in time query resolution.",
    },
    {
      num: "05",
      title: "Progress Tracking & Feedback",
      desc: "regular check-ins to keep you on track and help you improve continuously",
    },
  ];

  return (
    <section className="w-full px-4 md:px-14 lg:px-20 py-16">
      {/* OUTER BORDER BOX */}
      <div className=" px-6  md:px-10 relative">
        <div className="flex items-center gap-40">
          {/* TITLE + DESCRIPTION */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#345895] text-[36px] lg:text-[64px] md:text-[48px] font-bold font-[Inter] leading-10 whitespace-nowrap"
          >
            Services by PAB
          </motion.h2>

          {/* Horizontal line */}
          <div className="h-px bg-black w-[572px] md:w-[250px] lg:w-[600px] mt-15"></div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#345895]/65 text-sm md:text-[36px] font-semibold italic leading-relaxed"
        >
          Learn Lead & Grow
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-black text-sm md:text-base max-w-md leading-relaxed"
        >
          Our services ensure you're supported at every step through
          personalised 1-1 career coaching, access to subject matter experts,
          and dedicated post-admission assistance. With quick 30-minute query
          resolution and continuous progress tracking, you get a smooth,
          guided, and growth-focused learning experience.
        </motion.p>

        {/* INNER GRID */}
        <div className=" mt-10 p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesPab.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* NUMBER */}
                <p className="text-[#4D964F] text-6xl xl:text-9xl ">
                  {item.num}
                </p>

                {/* TEXT BLOCK */}
                <div>
                  <h3 className="font-semibold text-black text-sm md:text-base leading-snug max-w-[150px]">
                    {item.title}
                  </h3>
                  <p className="text-[#3C3C43] text-xs md:text-sm mt-1 leading-snug max-w-[150px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

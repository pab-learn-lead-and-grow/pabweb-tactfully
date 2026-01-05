"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Covered_By_Your_Grace } from "next/font/google";

const covered = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Enrollment({
  title,
  subtitle,
  steps,
  defaultOpen = 0,
}) {
  const [activeIndex, setActiveIndex] = useState(defaultOpen);

  const toggleStep = (index) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section className="w-full bg-[#345895] font-[Inter] mt-10 px-4 md:px-12 lg:px-20 py-16">
      <div className="p-6 md:p-12">
        {/* TITLE BLOCK */}
        <div className="text-center mb-10">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-[64px]">
            {title}
          </h2>

         <p
  className={`${covered.className} text-[#4DA7DE] text-4xl md:text-5xl lg:text-[64px] leading-none mt-2`}
>
  {subtitle}
</p>

        </div>

        {/* STEPS */}
        <div className="flex flex-col gap-10 max-w-[560px] mx-auto">
          {steps.map((step, i) => {
            const isOpen = activeIndex === i;

            return (
              <div key={i}>
                <div
                  onClick={() => toggleStep(i)}
                  className="flex items-stretch gap-6 cursor-pointer group"
                >
                  {/* LEFT COLUMN: NUMBER + VERTICAL LINE */}
                  <div className="flex flex-col items-center min-w-[50px]">
                    {/* Number */}
                    <p
  className={`${covered.className} ${
    isOpen ? "text-white" : "text-[#D8D8D8]/79"
  } text-[42px] md:text-[48px] leading-none`}
>
  {step.num}
</p>


                    {/* Vertical Line – fills height of title + desc */}
                    <motion.div
                      initial={false}
                      animate={{ scaleY: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-0.5 bg-white mt-2 flex-1 origin-top"
                    />
                  </div>

                  {/* RIGHT COLUMN: TITLE + DESC */}
                  <div className="flex-1">
                    <p
                      className={`text-[20px] md:text-[24px] lg:text-[36px] font-bold transition-colors ${
                        isOpen ? "text-white" : "text-[#D8D8D8]/79"
                      }`}
                    >
                      {step.title}
                    </p>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-sm md:text-[20px] mt-2 leading-tight max-w-md pr-6 overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

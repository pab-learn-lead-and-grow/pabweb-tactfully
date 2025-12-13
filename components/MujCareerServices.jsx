"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareerServicesSection({ benefits = [] }) {
  return (
    <section className="w-full bg-white mt-15 py-5 px-6 md:px-12 lg:px-20 font-[Inter]">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-[#345895] text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-extrabold mb-10"
      >
        Career Services
      </motion.h2>

      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-8 md:p-14"
      >

      {/* BENEFITS GRID */}
<div
  className={`
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-8 sm:gap-10
    ${benefits.length >= 6 ? "lg:grid-cols-3" : ""}
  `}
>
  {benefits.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center flex flex-col items-center"
    >
      {/* ICON */}
      <div className="mb-4">{item.icon}</div>

      {/* TITLE */}
      <h3 className="text-[#345895] font-extrabold text-lg sm:text-xl mb-2">
        {item.title}
      </h3>

      {/* TEXT */}
      <p className="text-[#345895] text-xs sm:text-sm max-w-[240px] leading-relaxed">
        {item.text}
      </p>
    </motion.div>
  ))}
</div>


        {/* CTA */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              bg-linear-to-r from-[#4D964F] to-[#193019]
              text-white px-6 py-3 rounded-lg text-sm
              shadow-[#1C361D] shadow-md
              flex items-center gap-3
              transition
            "
          >
            Explore Your Benefits
            <ArrowRight size={16} />
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
}

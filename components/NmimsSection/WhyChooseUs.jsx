"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs({ cards = [] }) {
  // Decide grid behavior based on number of cards
  const isFourCards = cards.length === 4;
  const isSixCards = cards.length === 6;

  const gridClasses = `
    grid grid-cols-1 
    sm:grid-cols-2 
    ${isSixCards ? "lg:grid-cols-3" : isFourCards ? "lg:grid-cols-2" : "lg:grid-cols-3"} 
    gap-5 mb-10
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-5 mb-15 text-left"
    >
      {/* FIXED SECTION HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
        className="text-[64px] font-[Inter] flex items-center justify-center text-left md:text-[64px] font-extrabold text-[#345895] mb-10"
      >
        Why Choose Us
      </motion.h2>

      {/* Cards Grid */}
      <div className={gridClasses}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-[#345895] p-4 rounded-xl hover:shadow-lg transition-shadow flex gap-2"
          >
            {/* Dynamic Icon */}
            <div className="w-[30%] flex items-center justify-center">
              <card.logo size={70} strokeWidth={1.0} className="text-white" />
            </div>

            {/* Dynamic Title + Subheading */}
            <div className="w-[70%]">
              <h3 className="text-3xl font-semibold text-white text-left mt-2 mb-2">
                {card.heading}
              </h3>
              <p className="text-white text-left pb-2 text-xs">
                {card.subheading}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FIXED CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-center"
      >
        <button className="text-white mt-4 px-16 py-3 rounded-lg text-sm bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 flex items-center justify-center gap-4 transition">
          Get Full Access
          <ArrowRight size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}

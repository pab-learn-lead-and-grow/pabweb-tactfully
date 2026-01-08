"use client";

import { motion } from "framer-motion";

export default function LearningApproach({
  title = "Learning Approach",
  subtitle = "",
  cards = [], // [{ icon: IconComponent, title: "...", desc: "..." }]
  ctaText = "Ready to Learn?",
  onCtaClick = () => {},
}) {
  return (
    <div className="relative pointer-events-auto">
    <section className="relative z-10 w-full px-4 lg:px-30 py-5 lg:py-16">
      {/* Heading */}
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-[Inter] font-bold text-[#270652] mb-4">
          {title}
        </h2>

        {subtitle && (
          <p className="text-[#3c3c43] text-lg md:text-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-14">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-2xl p-10 md:p-5 lg:p-10 border border-gray-100 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dynamic Icon */}
            <div className="flex items-center justify-center mb-4">
              {item.icon && <item.icon size={50} strokeWidth={1} className="text-[#3C087E]" />}
            </div>

            {/* Dynamic Heading */}
            <h3 className="text-xl font-medium text-black mb-2">
              {item.title}
            </h3>

            {/* Dynamic Description */}
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

     {/* CTA Button */}
<div className="relative z-20 flex items-center justify-center mt-12">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.2 }}
    onClick={onCtaClick}
    className="pointer-events-auto text-white mt-4 px-8 py-3 rounded-lg text-md bg-[#F6A410] shadow-lg flex items-center justify-center"
  >
    {ctaText}
  </motion.button>
</div>


    </section>
    </div>
  );
}

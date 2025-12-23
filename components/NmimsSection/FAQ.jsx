"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-10 md:px-10 py-20">
      
      {/* FIXED TITLE (not from props) */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#345895] font-extrabold flex flex-row items-center justify-center font-[Inter] text-3xl md:text-5xl xl:text-[64px] mb-10"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ Cards */}
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 md:p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between text-black">
              <p className="text-lg md:text-xl font-semibold">{item.q}</p>

              <Plus
                size={24}
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black mt-4 text-sm md:text-base"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

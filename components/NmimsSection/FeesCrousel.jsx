"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FeesCarousel({
  cards = [],
  autoSlide = true,
  interval = 3000,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || cards.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, interval);

    return () => clearInterval(timer);
  }, [cards.length, interval, autoSlide]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-b from-[#270652] to-[#3C087E]/50 rounded-2xl shadow-lg p-8 w-[80%] md:w-[60%] lg:w-[80%] h-[260px] flex flex-col justify-between text-center"
          >
            <div>
              <p className="font-semibold text-white">
                {cards[index].title}
              </p>

              <p className="text-xs text-white mt-1">(in INR)</p>

              <p className="text-[#C4C4C4] font-bold text-[22px] mt-3">
                {cards[index].program}
              </p>

              <div className="w-12 mx-auto h-[2px] bg-white mt-3" />
            </div>

            <p className="text-2xl font-medium text-white mt-4">
              {cards[index].amount}
            </p>

            {cards[index].sub && (
              <p className="text-xs text-white italic whitespace-pre-line">
                {cards[index].sub}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-[#270652] scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeesCarousel;
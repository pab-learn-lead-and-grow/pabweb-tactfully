"use client";

import Image from "next/image";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero({ className }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      {/* GRADIENT WRAPPER */}
      <div className="bg-linear-to-r from-[#3C087E]/10 to-[#F4B400]/10 rounded-b-[50px] md:rounded-b-[100px]">
        <div className="w-full mx-auto pt-[100px]">
          <div className="text-center">

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-8xl font-bold leading-[1.1] leading-tight"
            >
              <span className="bg-[linear-gradient(90deg,#FFB901_0%,#AD6F35_35.58%,#57216D_52.4%,#3C087E_100%)] bg-clip-text text-transparent">
                #GyaanKiUdaan
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-[#121212] text-[16px] lg:text-[22px] xl:text-[24px] font-medium mx-auto"
            >
              Empowering Minds, Elevating Futures{" "}
              <br className="block lg:hidden" />
              Through The Flight Of Knowledge.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative z-10 mt-6 flex items-center justify-center gap-2 md:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] rounded-lg bg-[#F6A410] border-0 border-transparent shadow-[#db990a] transform text-white font-semibold shadow-md transition-all duration-300 ease-out"
              >
                Explore Programs →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] font-semibold rounded-lg bg-[#3D077E] border-0 border-transparent shadow-[#181047] transform text-white shadow-md transition-all duration-300 ease-out"
              >
                Talk to an Expert →
              </motion.button>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex mt-6 justify-center"
            >
              <Image
                src="/radhyahero.png"
                alt="HeroImage"
                width={800}
                height={400}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 800px"
                priority
                className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] drop-shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </section>
  );
}

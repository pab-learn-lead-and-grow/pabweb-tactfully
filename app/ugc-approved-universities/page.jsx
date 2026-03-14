"use client";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";


import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Globe, Briefcase } from "lucide-react";
import ConnectToday from "@/components/NmimsSection/ConnectToday";

export default function UgcUniversitiesSection() {
  const features = [
    {
      label: "UGC Recognised",
      icon: BadgeCheck,
    },
    {
      label: "National-wide Validity",
      icon: Globe,
    },
    {
      label: "Industry-Valid Programs",
      icon: Briefcase,
    },
  ];

  return (
    <>
    <section className="w-full py-12 md:py-24 px-4 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col col-span-2"
        >
          <p className="text-sm font-semibold text-[#3C087E]">
            Government Recognised University
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#3C087E] mb-4 leading-tight">
            100% UGC-Recognised Universities
          </h1>

          <p className="text-gray-600 text-base md:text-lg mt-2 leading-relaxed max-w-2xl">
            All programs featured on PAB are offered by universities recognised
            by the University Grants Commission (UGC).
          </p>

          <p className="text-gray-600 text-base md:text-lg mt-2 leading-relaxed max-w-2xl">
            We ensure academic credibility, compliance, and nationwide validity
            - so your degree holds real value.
          </p>

          <p className="text-gray-600 text-base md:text-lg mt-2 mb-4 leading-relaxed max-w-2xl">
            Explore verified institutions and make informed decisions with
            complete transparency.
          </p>

          {/* Feature Items */}
          <div className="flex flex-col gap-6">
            {features.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-sm md:text-base font-medium text-[#3C087E]"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full text-[#4D964F] shadow-md">
                  <Icon size={24} />
                </div>
                {label}
              </motion.div>
            ))}
          </div>

          {/* IMAGE (Mobile Only) */}
          <div className="block lg:hidden order-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md mx-auto mt-6"
            >
              <Image
                src="/ugc-university.png"
                alt="Universities"
                width={500}
                height={500}
                className="rounded-3xl object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* CTA */}
          <a
            href="https://deb.ugc.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-[#3C087E] hover:bg-[#270652] transition-all text-white px-6 py-3 w-fit rounded-lg font-semibold shadow-md"
            >
              View UGC Approved Universities
            </motion.button>
          </a>

        </motion.div>

        {/* RIGHT IMAGE (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md"
          >
            <Image
              src="/ugc-university.png"
              alt="Universities"
              width={500}
              height={500}
              className="rounded-3xl object-contain"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
     
    </section>
     <ConnectToday />
     </>
  );
}
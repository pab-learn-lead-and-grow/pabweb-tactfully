"use client";

import Image from "next/image";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import { useState } from "react";

export default function Hero({ className }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      {/* GRADIENT WRAPPER — ends with image */}
      <div className="bg-[linear-gradient(90deg,rgba(77,150,79,0.1)_-1.12%,rgba(52,88,149,0.1)_98.88%)] rounded-b-[100px]">
        <div className="w-full mx-auto pt-[140px] ">
          {/* Headline + CTAs */}
          <div className="text-center">
            <h1
              className="
                text-4xl md:text-5xl lg:text-6xl xl:text-8xl
                font-bold
                leading-[1.1] xl:leading-[1.08] leading-tight
              "
            >
              <span className="bg-linear-to-r from-[#345895] to-[#101C2F] bg-clip-text text-transparent">
                #GyaanKiUdaan
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-4 text-[#121212] text-[16px] lg:text-[24px] font-medium mx-auto">
              Empowering Minds, Elevating Futures{" "}
              <br className="block lg:hidden" />
              Through The Flight Of Knowledge.
            </p>

            <div className="relative z-10 mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] rounded-lg  bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] transform  text-white font-semibold   shadow-md
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-xl
      active:scale-100"
              >
                Explore Programs →
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] font-semibold rounded-lg  bg-linear-to-r from-[#345895] to-[#142138] border-0 border-transparent shadow-[#020b34] transform  text-white  shadow-md
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-xl
      active:scale-100"
              >
                Talk to an Expert →
              </button>
            </div>

            {/* IMAGE — last element inside gradient */}
            <div className="flex mt-6 justify-center">
              <Image
                src="/radhyaHero.png"
                alt="HeroImage"
                width={700}
                height={350}
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 900px"
                className="w-auto h-auto max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[900px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </section>
  );
}

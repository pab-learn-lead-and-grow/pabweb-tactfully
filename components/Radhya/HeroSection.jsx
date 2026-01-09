"use client";

import Image from "next/image";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import { useState } from "react";

export default function Hero({ className }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      {/* GRADIENT WRAPPER — ends with image */}
      <div className="bg-linear-to-r from-[#3C087E]/10 to-[#F4B400]/10 rounded-b-[100px]">
        <div className="w-full mx-auto pt-[100px]">
          {/* Headline + CTAs */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl  lg:text-8xl font-bold leading-[1.1] leading-tight">
              <span className="bg-[linear-gradient(90deg,#FFB901_0%,#AD6F35_35.58%,#57216D_52.4%,#3C087E_100%)] bg-clip-text text-transparent">
                #GyaanKiUdaan
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-4 text-[#121212] text-[16px] lg:text-[22px] xl:text-[24px] font-medium mx-auto">
              Empowering Minds, Elevating Futures{" "}
              <br className="block lg:hidden" />
              Through The Flight Of Knowledge.
            </p>

            <div className="relative z-10 mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] rounded-lg bg-[#F6A410] border-0 border-transparent shadow-[#db990a] transform text-white font-semibold shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-100"
              >
                Explore Programs →
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] font-semibold rounded-lg bg-[#3D077E] border-0 border-transparent shadow-[#181047] transform text-white shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-100"
              >
                Talk to an Expert →
              </button>
            </div>

            {/* IMAGE — last element inside gradient */}
            <div className="flex mt-6 justify-center">
              <Image
                src="/radhyaHero.png"
                alt="HeroImage"
                width={800}
                height={400}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 800px"
                className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
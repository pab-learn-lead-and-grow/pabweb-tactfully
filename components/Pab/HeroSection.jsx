"use client";

import Image from "next/image";
import CounsellingForm from "@/components/Pab/CounsellingForm";
import { useState } from "react";

export default function Hero({ className }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      
      {/* GRADIENT WRAPPER — ends with image */}
      <div className="bg-[linear-gradient(90deg,rgba(77,150,79,0.1)_-1.12%,rgba(52,88,149,0.1)_98.88%)] rounded-b-[100px]">
        
        <div className="max-w-6xl mx-auto pt-35 px-6">
          
          {/* Headline + CTAs */}
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl lg:text-[50px] xl:text-[64px] font-bold leading-tight text-gray-900">
              <span className="italic text-[#4D964F]">Learn</span>{" "}
              <span className="text-black font-bold">today.</span>{" "}
              <span className="italic text-[#4D964F]">Lead</span>{" "}
              <span className="text-black font-bold">tomorrow.</span>
              <br />
              <span className="italic text-[#4D964F]">Grow</span>{" "}
              <span className="text-black font-bold">beyond</span>
            </h1>

            <p className="mt-4 text-gray-700 text-[16px] lg:text-[24px] max-w-2xl font-medium mx-auto">
              Shaping professionals for the future
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] rounded-lg bg-[#4D964F] text-white font-semibold shadow hover:opacity-95"
              >
                Explore Programs →
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md lg:text-[16px] font-semibold rounded-lg bg-[#345895] text-white shadow hover:opacity-95"
              >
                Talk to an Expert →
              </button>
            </div>

            {/* IMAGE — last element inside gradient */}
            <div className="mt-6 flex justify-center">
              <Image
                src="/heroImage.png"
                alt="HeroImage"
                width={700}
                height={700}
                priority
                className="w-full object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]"
              />
            </div>

          </div>
        </div>
      </div>

      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </section>
  );
}

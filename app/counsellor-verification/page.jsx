"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, AlertTriangle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

const CP_ID_REGEX = /^CP-\d{5}$/;

export default function CounsellorVerification() {
  const [cpId, setCpId] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | invalid_format | not_found | verified
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!CP_ID_REGEX.test(cpId)) {
      setStatus("invalid_format");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("counsellors")
      .select("cp_id")
      .eq("cp_id", cpId)
      .eq("is_verified", true)
      .maybeSingle();

    setLoading(false);

    if (data) {
      setStatus("verified");
    } else {
      setStatus("not_found");
    }
  };

  return (
    <>
      <section className="min-h-[85vh] mt-20 px-4 max-w-6xl items-center mx-auto py-12 lg:py-24">
        <div className=" text-center">
          <h2 className="text-3xl lg:text-5xl xl:text-[64px]  font-bold text-[#3C087E] mb-4">
            Counsellor verification
          </h2>
          <p className="text-xl sm:text-2xl text-[#3C3C43]">
            Before you trust, take a moment to verify. Use the CP ID to check your counsellor’s profile instantly. Safe, secure, and transparent guidance starts here.
          </p>
          </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-20 max-w-6xl bg-[#EBE7FC] rounded-3xl shadow-[0_20px_60px_rgba(52,88,149,0.15)] lg:p-10  overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* IMAGE */}
          <div className="relative aspect-[1138/836] md:h-full">
  {status === "verified" ? (
    <video
      key="verified-video"
      src="/verification-successfull.mp4"  
      alt="Counsellor Verification Success" 
      autoPlay
      loop
      muted
      playsInline
      className=" object-contain rounded-2xl"
    />
    
  ) : (
    <Image
      src="/counsellor-placeholder.png"
      alt="Counsellor Verification"
      fill
      className=" object-cover rounded-2xl"
      priority
    />
  )}
</div>


          {/* FORM */}
          <div className="p-2 md:p-10 flex flex-col justify-center bg-white rounded-3xl shadow-[0_20px_60px_rgba(52,88,149,0.15)]">
            
                {/* SHOW INPUT ONLY IF NOT VERIFIED */}
      {status !== "verified" && (
        <>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
               <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2640_132)">
<g filter="url(#filter0_d_2640_132)">
<path d="M70.5834 12.6408L38.5 1.41165L6.41669 12.6408V38.5C6.41669 51.7408 14.5466 60.9968 22.1247 66.7429C26.7 70.1773 31.7183 72.9778 37.0434 75.0686C37.407 75.2055 37.7728 75.3359 38.1407 75.46L38.5 75.5883L38.8658 75.46C39.5673 75.2163 40.2626 74.9553 40.9512 74.6771C45.9104 72.6339 50.5894 69.9678 54.8754 66.7429C62.4566 60.9968 70.5834 51.7408 70.5834 38.5V12.6408ZM35.2949 49.4564L21.6884 35.8435L26.2249 31.3037L35.2981 40.3801L53.4476 22.2305L57.9874 26.7671L35.2949 49.4564Z" fill="url(#paint0_linear_2640_132)"/>
</g>
</g>
<defs>
<filter id="filter0_d_2640_132" x="2.41669" y="1.41165" width="72.1667" height="82.1767" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2640_132"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2640_132" result="shape"/>
</filter>
<linearGradient id="paint0_linear_2640_132" x1="38.5" y1="1.41165" x2="38.5" y2="75.5883" gradientUnits="userSpaceOnUse">
<stop stopColor="#7B2AE1"/>
<stop offset="1" stopColor="#09224D"/>
</linearGradient>
<clipPath id="clip0_2640_132">
<rect width="77" height="77" fill="white"/>
</clipPath>
</defs>
</svg>

              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-[#3C087E]">
                 Verify your Counselor
              </h2>

              <p className="text-[#3C3C43] text-base md:text-xl mt-2 mb-8 max-w-sm">
              Enter the CP ID to instantly verify your counselor’s authenticity
              </p>
            

           
          <input
            type="text"
            value={cpId}
            onChange={(e) => {
              setCpId(e.target.value.toUpperCase());
              setStatus("idle");
            }}
            placeholder="Enter CP ID (CP-10112)"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#3C087E]/10 text-black placeholder-gray-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#345895] transition"
          />

          <button
            onClick={handleVerify}
            disabled={loading}
            className="mt-5 w-full bg-[#3C087E] hover:bg-[#2a4575] disabled:opacity-60 transition text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg"
          >
            {loading ? "Verifying..." : "Verify & Connect"}
          </button>
        </>
      )}

            {/* STATUS */}
            <AnimatePresence mode="wait">
              {status === "invalid_format" && (
                <motion.div
                  key="invalid"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 flex gap-3 text-red-600 bg-red-50 border border-red-200 rounded-xl p-3"
                >
                  <AlertTriangle size={20} />
                  <p className="text-sm">
                    Invalid CP ID format. Example: <b>CP-10235</b>
                  </p>
                </motion.div>
              )}

              {status === "verified" && (
    <motion.div
      key="verified-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full mt-2 bg-[#ECE6F7] rounded-3xl grid items-center"
    >

     
      <div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
           <svg width="43" height="46" viewBox="0 0 73 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2641_441)">
<path d="M68.1667 11.2292L36.0833 0L4 11.2292V37.0883C4 50.3291 12.1299 59.5852 19.708 65.3313C24.2833 68.7656 29.3016 71.5661 34.6267 73.6569C34.9904 73.7938 35.3561 73.9243 35.724 74.0483L36.0833 74.1767L36.4491 74.0483C37.1506 73.8047 37.8459 73.5436 38.5345 73.2655C43.4937 71.2223 48.1727 68.5561 52.4587 65.3313C60.04 59.5852 68.1667 50.3291 68.1667 37.0883V11.2292ZM32.8782 48.0448L19.2717 34.4318L23.8082 29.892L32.8814 38.9684L51.031 20.8189L55.5707 25.3555L32.8782 48.0448Z" fill="url(#paint0_linear_2641_441)"/>
</g>
<defs>
<filter id="filter0_d_2641_441" x="0" y="0" width="72.1667" height="82.1767" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2641_441"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2641_441" result="shape"/>
</filter>
<linearGradient id="paint0_linear_2641_441" x1="36.0833" y1="0" x2="36.0833" y2="74.1767" gradientUnits="userSpaceOnUse">
<stop stopColor="#4D964F"/>
<stop offset="1" stopColor="#011401"/>
</linearGradient>
</defs>
</svg>

            <h3 className="text-2xl font-bold text-[#4D964F]">
              Verified Counsellor
            </h3>
          </div>

          <p className="text-sm text-[#3C087E] font-medium mb-4">
            ✔ Officially verified by Radhya Education Academy!
          </p>

          <div
          style={{ backgroundColor: "#F3EDF9" }}
           className=" text-[#3C087E] flex gap-6 rounded-xl p-4 mb-4">
            <p><b>CP ID:</b> {cpId}</p>
            <p><b>Name:</b> Ayush</p>
          </div>

          <ul className="space-y-2 text-sm font-medium text-[#3C087E]">
            <li>✔ Verified and Trusted Counsellor</li>
            <li>✔ Officially Approved by R.E.A</li>
            <li>✔ Certified & Student-Trusted Counselling Partner</li>
          </ul>

            {/* Optional Reset Button */}
              <button
                onClick={() => {
                  setStatus("idle");
                  setCpId("");
                }}
                className="mt-6 text-sm text-black underline"
              >
                Verify Another Counsellor
              </button>
        </div>
      </div>
    </motion.div>
  )}

              {status === "not_found" && (
                <motion.div
                  key="notfound"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-800 mb-4">
                    This CP ID is not registered with Radhya Education.
                  </p>

                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-[#EEA727] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#db990a] transition"
                  >
                    <PhoneCall size={18} />
                    Connect with a Verified Counsellor
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <section className="w-full h-60 md:h-90 bg-[#3C087E] mt-5 md:mt-8 xl:mt-20 py-20 flex flex-col items-center text-left">
        <h2 className="text-xl md:text-4xl font-[Inter] font-bold text-white max-w-4xl leading-tight text-center px-4">
          Connect with expert verified counsellor,
          <br />
          for personalised career counselling.
        </h2>

        <a
          href="tel:6206372776"
          className="mt-5 md:mt-15 text-white py-3 px-5 lg:px-10 xl:px-15 rounded-xl md:text-lg bg-[#EEA727] border-0 border-transparent shadow-[#db990a] shadow-md transform hover:scale-105 duration-200 font-semibold hover:shadow-lg transition"
        >
          Call Now
        </a>
      </section>
    </>
  );
}

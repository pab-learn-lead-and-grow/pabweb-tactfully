"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, AlertTriangle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
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
   <section className="min-h-[85vh] mt-20 flex items-center justify-center px-4 bg-[#F6F8FC]">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_20px_60px_rgba(52,88,149,0.15)] overflow-hidden grid md:grid-cols-2"
  >
    {/* IMAGE */}
    <div className="relative h-56 md:h-full p-20">
      <Image
        src="/verifiedCounsellor.png"
        alt="Counsellor Verification"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center text-white px-6 text-center">
       
      </div>
    </div>

    {/* FORM */}
    <div className="p-6 md:p-10 flex flex-col justify-center bg-white">
      <div className="mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[#345895]/10 flex items-center justify-center mb-4 shadow-sm">
          <ShieldCheck className="text-[#345895]" size={28} />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#1E2A4A]">
          Counsellor Verification
        </h1>

        <p className="text-gray-600 mt-2 max-w-sm">
          Enter the CP ID shared by your counsellor to verify authenticity.
        </p>
      </div>

      <input
        type="text"
        value={cpId}
        onChange={(e) => {
          setCpId(e.target.value.toUpperCase());
          setStatus("idle");
        }}
        placeholder="Enter CP ID (CP-10112)"
        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-black placeholder-gray-700 focus:bg-white  focus:outline-none focus:ring-2 focus:ring-[#345895] transition"
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        className="mt-5 w-full bg-[#345895] hover:bg-[#2a4575] disabled:opacity-60 transition text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg"
      >
        {loading ? "Verifying..." : "Verify Counsellor"}
      </button>

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
            key="verified"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4"
          >
            <div className="flex items-center gap-3 text-green-700">
              <ShieldCheck />
              <p className="font-semibold">
                This counsellor is officially verified by Radhya Education.
              </p>
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
              href="/contact"
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

           
            </section>        </>        ); } 
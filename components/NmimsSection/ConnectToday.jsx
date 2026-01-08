"use client";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import { useState } from "react";


export default function ConnectToday() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full h-60 md:h-90 bg-[#3C087E] mt-10 md:mt-8 xl:mt-20 py-20 flex flex-col items-center text-left">
      <h2 className="text-xl md:text-4xl font-[Inter] font-bold text-white max-w-4xl leading-tight text-center px-4">
        Connect Today for expert-led,
        <br />
        personalised career counselling.
      </h2>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className=" mt-10 md:mt-15 text-white py-3 px-5 lg:px-10 xl:px-15 rounded-xl md:text-lg  bg-[#EEA727] border-0 border-transparent  shadow-[#db990a]  shadow-md transform hover:scale-105 duration 200 font-semibold hover:shadow-lg transition duration-200"
      >
        What's My Fit?
      </button>
      {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

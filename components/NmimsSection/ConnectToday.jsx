"use client";

export default function ConnectToday() {
  return (
    <section className="w-full h-60 md:h-90 bg-[#345895] py-15 flex flex-col items-center text-center">
      <h2 className="text-xl md:text-4xl font-[Inter] font-bold text-white max-w-4xl leading-tight px-4">
        Connect Today for expert-led,
        <br />
        personalised career counselling.
      </h2>

      <button
        type="button"
        className=" mt-10 md:mt-15 text-white py-3 px-15 rounded-xl text-lg  bg-linear-to-r from-[#4D964F] to-[#193019] border-0 border-transparent shadow-[#1C361D] shadow-md transform hover:scale-105 duration 200 font-semibold hover:shadow-lg transition duration-200"
      >
        What's My Fit?
      </button>
    </section>
  );
}

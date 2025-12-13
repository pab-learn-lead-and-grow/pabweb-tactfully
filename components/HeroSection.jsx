// components/Hero.jsx
import Image from "next/image";

export default function Hero({ className }) {
  return (
    <section className={`relative overflow-hidden bg-[linear-gradient(90deg,rgba(77,150,79,0.1)_-1.12%,rgba(52,88,149,0.1)_98.88%)] rounded-b-[100px] ${className || ""}`}>
      <div className="max-w-6xl mx-auto pt-10 px-6">
        {/* Headline + CTAs */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            <span className="italic text-[#4D964F]">Learn</span>{" "}
            <span className="text-black font-bold">today.</span>{" "}
            <span className="italic text-[#4D964F]">Lead</span>{" "}
            <span className="text-black font-bold">tomorrow.</span>
            <br />
            <span className="italic text-[#4D964F]">Grow</span>{" "}
            <span className="text-black font-bold">beyond</span>
          </h1>

          <p className="mt-4 text-gray-700 max-w-2xl font-bold mx-auto">
            Shaping professionals for the future
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md rounded-lg bg-[#4D964F] text-white font-medium shadow hover:opacity-95">
              Explore Programs →
            </button>
            <button className="px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-md rounded-lg bg-[#345895] text-white font-medium shadow hover:opacity-95">
              Talk to an Expert →
            </button>
          </div>

          {/* Refined Image Container: Removed negative margins, stabilized height */} 
          <div className="flex mt-8 md:mt-12 items-center justify-center min-h-[300px] w-full">
            <Image
              src="/heroImage.png"
              alt="HeroImage"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,rgba(77,150,79,0.1)_-1.12%,rgba(52,88,149,0.1)_98.88%)] rounded-b-[100px]">
      <div className="max-w-6xl mx-auto pt-[140px] px-6">
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
            <button className="px-4 md:px-6 py-2 rounded-lg bg-[#4D964F] text-white font-medium shadow hover:opacity-95">
              Explore Programs →
            </button>
            <button className="px-4 md:px-6 py-2 rounded-lg bg-[#345895] text-white font-medium shadow hover:opacity-95">
              Talk to an Expert →
            </button>
          </div>

          {/* FIXED: items-center instead of item-center */}
          <div className="flex mt-2 items-center justify-center min-h-[300px]">
            <Image
              src="/heroImage.png"
              alt="HeroImage"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { getFeaturedLogos } from "@/app/actions/getFeaturedLogos";

export default async function Featured() {
  const logos = await getFeaturedLogos();

  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-[60px] mb-6">
        <h2 className="font-bold text-[28px] md:text-4xl lg:text-5xl leading-tight text-[#270652] mb-2 text-center">
          Featured Partners
        </h2>
        <p className="text-sm sm:text-base mt-2 text-center text-gray-900">
          Trusted by leading organizations and platforms across India
        </p>
      </div>

      <div className="w-full h-[80px] overflow-hidden relative">
        <div className="flex animate-scroll-fast hover:animation-pause">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="mx-10 flex items-center justify-center h-[80px] flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={640}
                height={219}
                loading="lazy"
                className="h-[75px] w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

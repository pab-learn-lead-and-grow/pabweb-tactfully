
import Image from "next/image";
import Link from "next/link";

export default function LogoSection({ logos }) {
  return (
    <section className="bg-white mb-10">
     {/* Heading */}
        <div className="p-5 max-w-7xl mx-auto lg:px-[60px] relative">
            <h2 className="font-bold text-[28px] md:text-4xl lg:text-5xl  leading-tight text-[#270652] mb-2">
            Compare Top UGC-Approved Online Universities
          </h2>

          <p className="text-sm sm:text-base mt-2 text-justify text-gray-900">
            Choosing the right university is one of the most important career decisions you'll make. Radhya Education Academy helps students and working professionals compare India's leading UGC-entitled and NAAC-accredited online universities based on fees, curriculum, specializations, placements, faculty, accreditation, and admission support - so you can make an informed choice with confidence. Whether you're pursuing career growth, planning a promotion, or looking to upskill while working, our expert counsellors simplify the entire decision-making process with personalized guidance, transparent comparisons, and end-to-end admission assistance. Explore top online universities below and find the programme that best aligns with your academic background, professional aspirations, and budget.
          </p>
        </div>
    <div className="w-full h-[80px] overflow-hidden relative">
      <div className="flex  animate-scroll-fast  hover:animation-pause">
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <Link
            key={idx}
            href={logo.href}
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
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
}

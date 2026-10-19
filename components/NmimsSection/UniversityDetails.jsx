import MotionWrapper from "@/components/Radhya/MotionWrapper";
import CounsellingModal from "@/components/Radhya/CounsellingModal";
import { Star, ArrowUpRight } from "lucide-react";

export default function UniversityDetails({
  universityName = "",
  title,
  description = "",
  highlights = [],
  ctaLabel = "Explore More",
  onCtaClick,
}) {
  if (!highlights?.length) return null;

  const heading = title || `${universityName} University Highlights`;

  const total = highlights.length;
  const columns = 2;
  const lastRowIndex = Math.floor((total - 1) / columns);

  const cta = (
    <CounsellingModal cta_name="University Highlights">
      <button
        type="button"
        onClick={onCtaClick}
        className="cursor-pointer inline-flex items-center gap-2 text-white text-sm md:text-base font-semibold bg-[#EEA727] px-6 py-2.5 rounded-full hover:scale-105 transition-colors duration-200"
      >
        {ctaLabel}
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </CounsellingModal>
  );

  return (
    <section className="w-full mt-10 lg:mt-16 px-4 md:px-10 lg:px-20">
      <MotionWrapper
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden max-w-7xl mx-auto rounded-2xl md:rounded-3xl bg-linear-to-br from-[#270652] via-[#3C087E] to-[#270652]"
      >
        {/* Decorative screen/icons background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#F6A410]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-52 h-52 md:w-80 md:h-80 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative px-5 py-8 sm:px-8 md:px-12 md:py-10 lg:py-12">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8 mb-6 md:mb-8">
            <div className="text-left">
              <h2 className="flex items-center gap-2 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white leading-tight">
                <Star
                  size={20}
                  className="text-[#EEA727] fill-[#F6A410] shrink-0"
                />
                {heading}
              </h2>

              {description && (
                <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl">
                  {description}
                </p>
              )}
            </div>

            {/* CTA — opens the counselling popup form, same as other CTA buttons */}
            <div className="hidden md:block shrink-0">{cta}</div>
          </div>

           {/* HIGHLIGHTS CARD */}
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2"
          >
            {highlights.map((item, index) => {
              const row = Math.floor(index / columns);
              const isLastItem = index === total - 1;
              const isLastInRow = index % columns === columns - 1;
              const isSpanning = isLastItem && total % columns !== 0;
              const isLastRow = row === lastRowIndex;
              const showBorderB = !isLastRow;

              const borderClasses = [
                showBorderB ? "border-b" : "",
                !isLastInRow && !isSpanning ? "md:border-r" : "",
                isSpanning ? "md:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ");


              return (
                <div
                  key={item.label + index}
                  className={`border-[#3C087E]/10 py-4 md:py-5 px-1 md:px-6 ${borderClasses}`}
                >
                  <p className="text-[#3C087E]/70 text-sm md:text-base mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-[#270652] font-semibold text-base md:text-xl leading-tight">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </MotionWrapper>

          {/* CTA below the grid — visible only when grid works in 1 column */}
          <div className="flex md:hidden justify-center mt-6">{cta}</div>
        </div>
      </MotionWrapper>
    </section>
  );
}

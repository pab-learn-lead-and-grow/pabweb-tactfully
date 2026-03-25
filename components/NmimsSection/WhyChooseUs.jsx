import CounsellingModal from "../Radhya/CounsellingModal";
import MotionWrapper from "../Radhya/MotionWrapper";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs({
  title = "Why Choose Us",
  subtitle = "", // 👈 NEW OPTIONAL PROP
  cards = [],
}) {
  const isFourCards = cards.length === 4;
  const isSixCards = cards.length === 6;

  const gridClasses = `
    grid grid-cols-1 
    sm:grid-cols-2 
    ${isSixCards ? "lg:grid-cols-3" : isFourCards ? "lg:grid-cols-2" : "lg:grid-cols-3"} 
    gap-5 mb-10
  `;

  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-5 mb-15 text-left"
    >
      {/* HEADING */}
      <MotionWrapper
        as="h2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
        className="text-[32px] font-[Inter] flex flex-col items-center justify-center text-center lg:text-[56px] xl:text-[64px] font-bold text-[#270652] mb-2"
      >
        {title}
      </MotionWrapper>

      {/* ✅ SUBTITLE (only renders if passed) */}
      {subtitle && (
        <MotionWrapper
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: false }}
          className="text-center text-black text-sm md:text-lg max-w-4xl mx-auto mb-6 md:mb-10"
        >
          {subtitle}
        </MotionWrapper>
      )}

      {/* Cards Grid */}
      <div className={gridClasses}>
        {cards.map((card, index) => (
          <MotionWrapper
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-[#A4A4A4]/5 p-4 shadow-md rounded-xl hover:shadow-xl transition-shadow flex gap-2"
          >
            <div className="w-[30%] flex items-center justify-center">
              <card.logo size={70} strokeWidth={1.0} className="text-[#270652]" />
            </div>

            <div className="w-[70%]">
              <h3 className="text-[20px] md:text-3xl font-semibold text-[#270652] text-left mt-2 mb-2">
                {card.heading}
              </h3>
              <p className="text-black text-left pb-2 text-xs">
                {card.subheading}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>

      {/* CTA */}
      <MotionWrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-center"
      >
        <CounsellingModal>
          <button className="text-white mt-4 px-16 py-3 rounded-lg text-sm bg-[#F6A410] shadow-[#9c7835] shadow-md hover:scale-105 duration-200 flex items-center gap-4">
            Get Full Access
            <ArrowRight size={16} />
          </button>
        </CounsellingModal>
      </MotionWrapper>
    </MotionWrapper>
  );
}
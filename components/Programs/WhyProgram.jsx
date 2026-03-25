import MotionWrapper from "../Radhya/MotionWrapper";

export default function WhyProgramSection({ title, description = [] }) {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <MotionWrapper
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-bold text-[28px] md:text-4xl lg:text-[56px] leading-tight text-[#270652] mb-6 text-center"
        >
          {title}
        </MotionWrapper>

        {/* DESCRIPTION */}
        {description.length > 0 && (
          <MotionWrapper
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-black leading-relaxed font-inter text-xs lg:text-[18px] mb-10"
          >
            <ul className="list-disc list-inside space-y-3 max-w-5xl mx-auto text-left">
              {description.map((para, index) => (
                <li key={index}>{para}</li>
              ))}
            </ul>
          </MotionWrapper>
        )}
      </div>
    </section>
  );
}

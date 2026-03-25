

import MotionWrapper from "../Radhya/MotionWrapper";
import Image from "next/image";

export default function SpecializationSection({
  title,
  description = [],
  programName,
  specializations = [],
}) {
  if (!specializations?.length) return null;

  // SAME DISTRIBUTION LOGIC
  const total = specializations.length;
  const remainder = total % 3;
  const fullRowsCount = total - remainder;

  const fullRows = specializations.slice(0, fullRowsCount);
  const remaining = specializations.slice(fullRowsCount);

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <MotionWrapper
        as="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
         className="font-bold text-[28px] md:text-4xl lg:text-5xl xl:text-[64px] leading-tight text-[#270652] mb-6 text-center">
        {title}
      </MotionWrapper>


        {/* DESCRIPTION */}
        {description.length > 0 && (
          <MotionWrapper
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-black leading-relaxed font-inter  text-center text-xs lg:text-[18px] mb-10 max-w-5xl justify-center mx-auto">
            
            {description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </MotionWrapper>
        )}

        {/* CARDS */}
        <div className="space-y-8">

          {/* FULL ROWS */}
          {fullRows.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fullRows.map((spec, i) => (
                <SpecializationCard
                  key={spec.slug}
                  spec={spec}
                  programName={programName}
                  index={i}
                />
              ))}
            </div>
          )}

          {/* REMAINING (CENTERED) */}
          {remaining.length > 0 && (
            <div className="flex justify-center gap-8 flex-wrap">
              {remaining.map((spec, i) => (
                <div key={spec.slug} className="w-full md:w-[30%]">
                  <SpecializationCard
                    spec={spec}
                    programName={programName}
                    index={i}
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}


/* CARD COMPONENT (NO LINK) */

function SpecializationCard({ spec, programName, index }) {
 const imageUrl = spec.cover_image;

  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:scale-105 transition"
    >
      <div className="w-full flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={spec.specialization_name}
          width={600}
          height={400}
          className="h-auto object-contain"
        />
      </div>

      <div className="p-4 font-semibold text-gray-900 text-center">
        {programName} in {spec.specialization_name}
      </div>
    </MotionWrapper>
  );
}
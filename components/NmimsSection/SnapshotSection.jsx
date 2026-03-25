import MotionWrapper from "@/components/Radhya/MotionWrapper";
import AnimatedCounter from "@/components/NmimsSection/AnimatedCounter";

export default function SnapshotSection({ stats }) {
  return (
    <section className="w-full xl:mt-16 px-4 md:px-10 lg:px-20 font-[Inter]">
      <div className="max-w-7xl mx-auto">
        
        {/* STATIC HEADING */}
        <h3 className="text-[28px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[120%] font-extrabold text-[#270652] mb-3 md:mb-8 text-center">
          A Snapshot of Success
        </h3>

        {/* BLUE BAR */}
        <MotionWrapper
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#3C087E]/5 rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-full py-4 sm:py-6 md:py-10 px-8 sm:px-10 md:px-16"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center text-[#3C087E]">
            
            {stats.map((stat, idx) => (
              <MotionWrapper
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="text-[8px] md:text-[16px] xl:text-[20px] font-bold opacity-90 leading-tight">
                  {stat.label}
                </p>
              </MotionWrapper>
            ))}

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
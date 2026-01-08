"use client";

import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";

export default function Faculties({ heading, topFaculty, bottomFaculty }) {
  return (
    <div className="min-h-content font-[Inter] px-18 bg-[#270652] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 md:mb-12">
          <span>
            <CornerDownRight />
          </span>
          <h2 className="text-white text-base sm:text-lg font-medium">
            Our Faculties
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start mb-6 sm:mb-8 md:mb-10">
          
          {/* Left Heading */}
          <div className="lg:pr-8">
            <h1
              className="text-white font-[Inter] text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] font-semibold leading-tight"
            >
              {heading}
            </h1>
          </div>

          {/* Top Faculty Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5 md:gap-6">
            {topFaculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-3/3 relative overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#9D9FA1] font-semibold text-xs sm:text-sm">
                    {member.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {bottomFaculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-3/3 relative overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-[#9D9FA1]  font-semibold text-xs sm:text-sm">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="max-w-4xl mx-auto">
          <button className="w-full py-4 sm:py-5 px-6 border-2 border-white/30 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
            See all members
          </button>
        </div>
      </div>
    </div>
  );
}

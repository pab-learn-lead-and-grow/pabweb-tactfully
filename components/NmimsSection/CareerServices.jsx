"use client";

import { motion } from "framer-motion";
import {
  FileUser,
  Route,
  Blocks,
  MessagesSquare,
  ChartNoAxesColumn,
  ArrowRight,
} from "lucide-react";

export default function CareerServices() {
  const benefits = [
    {
      icon: <FileUser strokeWidth={1.0} className="text-[#4D964F]  w-18 h-18" />,
      title: "Access to Job Portal",
      text: "Get a 6-month access to IIMJobs, Updazz & Hirist to find a role of your choice, get your job applications highlighted, and improve profile ranking.",
    },
    {
      icon: <Route strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Coaching",
      text: "One-on-one personalised guidance by an expert coach to create a strategic roadmap for your career and achieve your professional goals.",
    },
    {
      icon: <Blocks strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Profile Development",
      text: "Get expert mentoring on Resume building, Social Media Profiling, and Personal Branding to increase your chances of getting shortlisted.",
    },
    {
      icon: <MessagesSquare strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Practice Interviews",
      text: "One-on-one practice interview session to enhance your chances of succeeding at interviews for jobs, career change, or promotions.",
    },
    {
      icon: <ChartNoAxesColumn strokeWidth={1.0} className="text-[#4D964F] w-18 h-18" />,
      title: "Assessment",
      text: "Assessment of your cognitive and behavioural skills through aptitude and psychometric tests to identify the most suitable career path",
    },
  ];

  return (
    <section className="w-full bg-white mt-15 py-5 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-center text-[#345895] font-[Inter] text-5xl md:text-5xl font-extrabold mb-12">
        Career Services
      </h2>

      {/* Main rounded container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10 md:p-14"
      >
        {/* GRID — 3 ON TOP, 2 BELOW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Top 3 */}
          {benefits.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-[#345895] font-extrabold font-[Inter] text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-[#345895] text-sm max-w-60 mx-auto leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Bottom 2 */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-20 mt-6">
            {benefits.slice(3, 5).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center max-w-[250px]"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-[#345895] font-extrabold font-[Inter] text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-[#345895] text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#4D964F] text-white mt-4 px-6 py-2 rounded-lg text-sm 
              bg-linear-to-r from-[#4D964F] to-[#193019] border-0
              shadow-[#1C361D] shadow-md transform hover:scale-105 
              duration-200 flex items-center justify-center gap-4 transition"
          >
            Explore Your Benefits
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

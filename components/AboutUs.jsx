"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full flex flex-col items-center py-18 bg-white">
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] md:h-[30vh] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/Aboutpab.png')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-5 md:px-10 py-18 text-black">
        {/* Heading Centered */}
        <div className="flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3 text-center">
            <span className="text-[#4d964f]">At</span>
          
            <span className="text-[#345895]">PAB</span>
          </h2>
        </div>

        {/* Paragraphs Left-Aligned */}
        <div className="mt-6 text-left">
          <p>
            At PAB Learn Lead and Grow, we believe that real education isn't
            about collecting degrees — it's about achieving return on learning.
          </p>

          <p className="mt-3">
            We exist to help working professionals make smarter, more rewarding
            education choices that directly translate into measurable career ROI
            — better roles, higher salaries, and stronger leadership impact.
          </p>

          <p className="mt-3">
            In a world where online education is everywhere, PAB stands apart by
            making learning deeply personal, practical, and purpose-driven.
          </p>

          <p className="mt-3">
            We don't sell courses. We understand ambitions.
          </p>

          <p className="mt-3">
            We don't push universities. We match professionals to the right
            learning paths that elevate both their knowledge and their income.
          </p>
        </div>
      </div>

      {/* Centered Logo */}
      <div className="flex justify-center mt-8">
        <Image
          src="/pablogo.png"
          alt="PAB Learn Lead Grow Logo"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      {/* Philosophy Heading */}
      <div className="text-center mt-12 mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
          Our Philosophy <span className="text-blue-900">Learn.Lead.Grow.</span>
        </h2>
      </div>

      {/* Learn, Lead, Grow stacked */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8 mb-10 px-5">
        {/* Learn */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 text-left">
            Learn
          </h3>
          <p className="text-gray-700 text-justify">
            Every professional journey begins with clarity. At PAB, we help you
            discover what to learn — not through random course lists, but
            through guided sessions with subject matter experts who understand
            your background, industry, and aspirations. We help you identify the
            subjects, programs, and universities that will bring the highest
            return on your time and investment. Because choosing the right
            knowledge is the first step toward real progress.{" "}
            <span className="italic">
              "Learn what truly matters — from experts who know what works."
            </span>
          </p>
        </div>

        {/* Lead */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 text-left">
            Lead
          </h3>
          <p className="text-gray-700 text-justify">
            Knowledge without action is potential energy. The "Lead" philosophy
            at PAB is about applying what you learn — right where you are. We
            guide professionals to integrate new business frameworks, analytics
            tools, and leadership skills directly into their current work life,
            so learning doesn't stay theoretical — it becomes tangible impact.
            Through our insights, sessions, and real-world case guidance, we
            help you turn learning into leadership — so that every project,
            presentation, and decision reflects your upgraded potential.{" "}
            <span className="italic">
              "Lead where you are — apply what you learn and let your growth
              speak for itself."
            </span>
          </p>
        </div>

        {/* Grow */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 text-left">
            Grow
          </h3>
          <p className="text-gray-700 text-justify">
            Growth isn't an event; it's an ecosystem. After learning and
            leading, comes the transformation — and we make sure it's
            measurable. We connect you with programs and universities that
            deliver career mobility, placement opportunities, and networking
            access with industry insiders. Our data-driven recommendations
            ensure that every professional we guide finds the best ROI
            universities that actually support their long-term goals — not just
            another certificate.{" "}
            <span className="italic">
              "Grow with direction — measurable, meaningful, and unstoppable."
            </span>
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-5 mb-16">
        {/* Vision */}
        <div className="bg-[rgba(6,78,146,0.1)]  p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-[#003366] mb-3 text-center">
            Vision
          </h3>
          <p className="text-gray-700  text-justify">
            At PAB, we believe education is more than just a degree — it's a
            journey of transformation. Founded with a mission to bridge the gap
            between learning and real-world success, PAB Learn, Lead & Grow has
            helped thousands of learners shape their futures through guided
            learning, mentorship, and career support. In just 3 years, we've
            built a vibrant community of 1000+ learners, 50+ mentors, and a
            passionate team driven by one goal — to make learning practical,
            engaging, and impactful.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[rgba(6,78,146,0.1)] p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-[#003366] mb-3 text-center">
            Mission
          </h3>
          <p className="text-gray-700 text-justify">
            At PAB, we believe education is more than just a degree — it's a
            journey of transformation. Founded with a mission to bridge the gap
            between learning and real-world success, PAB Learn, Lead & Grow has
            helped thousands of learners shape their futures through guided
            learning, mentorship, and career support. In just 3 years, we've
            built a vibrant community of 1000+ learners, 50+ mentors, and a
            passionate team driven by one goal — to make learning practical,
            engaging, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}

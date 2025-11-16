"use client";
import Image from "next/image";
import {
  Download,
  Briefcase,
  Users,
  GraduationCap,
  LayoutGrid,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { IoIosStarOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import React from "react";

export default function Page() {
  const blogs = [
    {
      id: 1,
      topic: "Topic",
      date: "12 Aug 2023",
      title: "Lorem ipsum dolor sit amet, consecr adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/professional.png",
    },
    {
      id: 2,
      topic: "Topic",
      date: "12 Aug 2023",
      title: "Lorem ipsum dolor sit amet, consecr adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "professional.png",
    },
    {
      id: 3,
      topic: "Topic",
      date: "12 Aug 2023",
      title: "Lorem ipsum dolor sit amet, consecr adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "professional.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jessie Owner",
      title: "Founder, XYZ Company",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      rating: 5,
    },
    {
      id: 2,
      name: "John Smith",
      title: "CEO, Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Marketing Director, ABC Corp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Brown",
      title: "Product Manager, StartUp Inc",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      rating: 5,
    },
    {
      id: 5,
      name: "Emily Davis",
      title: "Designer, Creative Studio",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      rating: 5,
    },
    {
      id: 6,
      name: "David Wilson",
      title: "CTO, Digital Agency",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      rating: 5,
    },
  ];

  const cardsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const getCardsToShow = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return Math.max(0, testimonials.length - cardsToShow);
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= testimonials.length - cardsToShow) return 0;
      return prev + 1;
    });
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  // Update cards to show on window resize
  // Update cards to show on window resize
useEffect(() => {
  // Guard for SSR
  if (typeof window === "undefined") return;

  const handleResize = () => {
    setCardsToShow(getCardsToShow());
  };

  // Run once immediately
  handleResize();

  // Add resize listener
  window.addEventListener("resize", handleResize);

  // Cleanup
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <main className="flex flex-col items-center w-full bg-white">
      {/* ======= Program Card Section ======= */}
      <div className="relative w-full bg-white rounded-xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden mt-6">
        {/* ===== Left Section ===== */}
        <div className="flex flex-col justify-between w-full md:w-[75%] rounded-xl border border-[rgba(6,78,146,0.1)] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Top Tag */}
          <span className="bg-green-500 text-white text-xs md:text-sm px-2 py-0.5 rounded-xl w-fit mb-2">
            Bestseller
          </span>

          {/* Program Title */}
          <h2 className="text-black text-xl sm:text-2xl lg:text-5xl font-bold mb-2 leading-snug md:leading-tight">
            Masters of Business Administration
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            NMIMS is one of India's leading management universities, known for
            its academic excellence and global recognition. Through PAB, you get
            access to its Online MBA — a program designed for working
            professionals who want to learn from the best and achieve measurable
            career growth.
          </p>

          {/* Tags Row */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="bg-[#30968914] text-green-600 text-xs md:text-sm font-medium px-3 py-1 rounded-xl">
              NAAC A+
            </span>
            <span className="bg-[#30968914] text-green-600 text-xs md:text-sm font-medium px-3 py-1 rounded-xl">
              UGC Approved
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 border border-[rgba(6,78,146,0.2)] text-black bg-[rgba(6,78,146,0.05)] text-sm md:text-base px-4 py-2 rounded-xl hover:bg-[rgba(6,78,146,0.1)] transition">
              Download Brochure
              <Download size={16} />
            </button>

            <button className="bg-[#064E92] flex items-center gap-2 text-white text-sm md:text-base px-20 py-2 rounded-xl hover:bg-blue-800 transition">
              CTA
            </button>
          </div>
        </div>

        {/* ===== Right Section (Logo OUTSIDE Border) ===== */}
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 mr-20 hidden md:flex justify-center items-center">
          <Image
            src="/pablogo.png"
            alt="NMIMS Logo"
            width={180}
            height={100}
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Mobile logo placement */}
        <div className="flex md:hidden justify-center mt-4">
          <Image
            src="/pablogo.png"
            alt="NMIMS Logo"
            width={150}
            height={80}
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* ======= Transform Section ======= */}
      <div className="max-w-6xl bg-gray-50 mx-auto rounded-xl">
        {/* Main Container */}
        <div className="px-20 pt-20 pb-10 sm:px-24 sm:pt-24 sm:pb-12">
          {/* Header */}
          <div className="text-center mb-12 leading-tight">
            <h1 className="text-4xl sm:text-5xl font-bold inline-block text-gray-900 mb-4">
              How this transforms you
            </h1>
            <div className="p-4 max-w-xl mx-auto">
              <p className="text-gray-700 text-md sm:text-base text-center font-semibold leading-relaxed max-w-md mx-auto wrap-break-words">
                A metrics-driven institution of excellence offering flexible,
                high-quality online MBAs for working professionals to accelerate
                career transformation.
              </p>
            </div>
          </div>

          {/* LEARN Section */}
          <div className="bg-gray-50 p-6 sm:p-8">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Left - Card with Heading and Image */}
              <div className="w-full lg:w-auto">
                <div className="bg-linear-to-tr from-blue-100 via-green-50 to-green-100 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  {/* Heading */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      LEARN
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Best in class courseware
                    </p>
                  </div>

                  {/* Image Card */}
                  <div className="flex justify-center">
                    <div className="w-full sm:w-72 lg:w-80 h-30 sm:h-40 bg-linear-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg flex items-center justify-center overflow-hidden relative shadow-lg">
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                      <div className="relative z-10 text-white text-center">
                        <div className="text-5xl sm:text-6xl mb-2">🚀</div>
                        <div className="text-xl sm:text-2xl font-semibold">
                          Excellence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Quote */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-md">
                <div className="relative rounded">
                  {/* Vertical Gradient Line */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#064E92] to-green-900 rounded-l"></div>
                  <div className="pl-6 py-6 text-gray-700 italic rounded">
                    "Learn what matters for your ROI subjects that shape high
                    performing managers."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEAD Section */}
          <div className="bg-gray-50 p-6 sm:p-8">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Left - Quote */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-md">
                <div className="relative rounded">
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-green-900 to-[#064E92] rounded-l"></div>
                  <div className="pl-6 py-6 text-gray-700 italic rounded">
                    "Lead confidently our mentors help you use MBA insights in
                    your current role."
                  </div>
                </div>
              </div>

              {/* Right - Card with Heading and Image */}
              <div className="w-full lg:w-auto order-1 lg:order-2">
                <div className="bg-linear-to-tr from-blue-100 via-green-50 to-green-100  backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  {/* Heading */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      LEAD
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Application-based assessment
                    </p>
                  </div>

                  {/* Image Card */}
                  <div className="flex justify-center">
                    <div className="w-full sm:w-72 lg:w-80 h-30 sm:h-40 bg-linear-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg flex items-center justify-center overflow-hidden relative shadow-lg">
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                      <div className="relative z-10 text-white text-center">
                        <div className="text-5xl sm:text-6xl mb-2">💼</div>
                        <div className="text-xl sm:text-2xl font-semibold">
                          Leadership
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GROW Section */}
          <div className="bg-gray-50 p-6 sm:p-8">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Left - Card with Heading and Image */}
              <div className="w-full lg:w-auto">
                <div className="bg-linear-to-tr from-blue-100 via-green-50 to-green-100 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  {/* Heading */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      GROW
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      8000+ corporate alumni, 500+ hiring partners
                    </p>
                  </div>

                  {/* Image Card */}
                  <div className="flex justify-center">
                    <div className="w-full sm:w-72 lg:w-80 h-30 sm:h-40 bg-linear-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg flex items-center justify-center overflow-hidden relative shadow-lg">
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                      <div className="relative z-10 text-white text-center">
                        <div className="text-5xl sm:text-6xl mb-2">🚀</div>
                        <div className="text-xl sm:text-2xl font-semibold">
                          Growth
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Quote */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-md">
                <div className="relative rounded">
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#064E92] to-green-900 rounded-l"></div>
                  <div className="pl-6 py-6 text-gray-700 italic rounded">
                    "Grow into India's strongest professional network."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-[#064E92] hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg">
              Get started
            </button>
          </div>
        </div>
      </div>

      <section className="w-full bg-white px-6 md:px-12 lg:px-20 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* ===== Left Content Section ===== */}
          <div className="flex-1 text-left">
            {/* Small Header */}
            <h4 className="text-[#064E92] text-xs mt-2 md:text-base">
              What will you gain?
            </h4>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-8">
              This isn't just another degree
              <br />
              it's a transformation in how
              <br />
              you think, work, and grow.
            </h2>

            {/* Points List */}
            <div className="flex flex-col gap-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center bg-[#064E92] text-white rounded-full w-15 h-15 shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Clarity in Decision
                  </h3>
                  <p className="text-[#B6B6B6] text-sm max-w-120  md:text-base">
                    Learn to analyse data, connect insights, and make business
                    decisions that create real impact.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center bg-[#064E92] text-white rounded-full w-15 h-15 shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Confidence to Lead
                  </h3>
                  <p className="text-[#B6B6B6] text-sm max-w-120 md:text-base">
                    Turn knowledge into action — lead teams, solve challenges,
                    and drive results from day one.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center bg-[#064E92] text-white rounded-full w-15 h-15 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    A Degree That Speaks for You
                  </h3>
                  <p className="text-[#B6B6B6] text-sm max-w-120 md:text-base">
                    Earn a globally recognised NMIMS MBA that showcases your
                    credibility and leadership anywhere you go.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[30%] h-[90%] max-w-md">
            {/* Main Image (covers most of background) */}
            <div className="relative rounded-2xl overflow-hidden z-40 w-full h-full">
              <Image
                src="/office.png"
                alt="Office Environment"
                width={250}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] bg-[#064E92] text-white rounded-3xl mt-20 mb-10 py-10 flex justify-center">
        <div className="max-w-4xl text-center">
          {/* ====== Heading with Highlight ====== */}
          <h2 className="text-3xl md:text-5xl font-bold relative inline-block mb-6">
            About NMIMS
            {/* Yellow Brush Highlight */}
            <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FDE68A] -z-10 transform translate-y-2 rounded-sm rotate:[-1deg]" />
          </h2>

          {/* ====== Description Text ====== */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-blue-50">
            SVKM's Narsee Monjee Institute of Management was established in 1981
            and was granted Deemed-to-be-University status by the University
            Grants Commission in 2003. With over four decades of excellence in
            education, NMIMS has evolved into a multidisciplinary centre of
            learning known for its strong academic foundation and innovative
            approach. The university provides a rich and balanced environment
            that fosters both intellectual and personal growth, while also
            promoting exposure to research and academics. Moreover, it offers
            students valuable opportunities for hands-on learning, enabling them
            to understand and experience the practical aspects of various
            industry functions.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-2 md:px-12 lg:px-20 py-12 flex flex-col gap-8">
        {/* ===== Top Text Section ===== */}
        <div className="max-w-4xl text-left mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug text-gray-900">
            <span className="text-red-600 ">
              The 2-year Master of Business Administration{" "}
            </span>
            programme is designed to provide working professionals the
            flexibility to pace the programme to fit their schedule, without the
            need to de-prioritise their professional or personal commitments.
          </h2>
        </div>

        {/* ===== Bottom Card Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 bg-[#064E92] text-white rounded-full w-12 h-12 flex items-center justify-center">
              <GraduationCap size={22} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-1">
                Learn from faculty that sparks thinking minds
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                NMIMS CDOE academic reputation is upheld by a team of top
                academicians, Ph.D. holders, scholars, industry veterans, and
                practitioners who hold valuable insights about the curriculum
                and the industry. The MBA programme has a versatile approach
                facilitated by experts who can manoeuvre through changing
                business trends.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 p-4 sm:p-6 rounded-xl bg-[rgba(6,78,146,0.02)] hover:bg-[rgba(6,78,146,0.05)] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon */}
            <div className="shrink-0 bg-[#064E92] text-white rounded-full w-12 h-12 flex items-center justify-center">
              <LayoutGrid size={22} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg text-[#064E92] mb-1">
                Case-Based and Application-oriented Assessment
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Programme participants are assessed and evaluated for their
                learning in both theoretical and application-based areas,
                gauging their ability to analyse and deploy appropriate
                solutions to real-world business problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-5 py-12">
        {/* Heading Section */}
        <div className="relative mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#064E92] leading-snug">
            How to Choose the Right{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                Specialisation for Maximum ROI
              </span>
            </span>
          </h2>
        </div>

        {/* Paragraph Section */}
        <p className="text-gray-700 text-base md:text-sm leading-relaxed mb-8">
          Choosing the right MBA specialisation isn't just about interest - it's
          about aligning with your strengths and ambitions. We help you identify
          which domain - Marketing, Analytics, Finance, HR, or Operations -
          aligns best with your experience and future earning potential. Our
          counsellors and subject experts guide you through data-backed insights
          on career growth, salary trends, and industry demand so you invest
          where the returns are highest - in your skills, your role, and your
          future.
        </p>

        {/* Button Section */}
        <div>
          <button className="bg-[#064E92] text-white font-medium px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 flex items-center gap-2">
            Read more
            <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Benefit Cards */}
      <div className="w-full max-w-6xl mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#064E92] mb-3">
          Benefits for Working Professionals
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Unlock new career opportunities, learn flexibly, and gain recognition
          with industry-aligned education designed for working professionals.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Learn Anytime",
              text: "Study at your own pace with 24x7 access to live and recorded lectures through the NMIMS Online MBA.",
            },
            {
              title: "Recognised & Respected",
              text: "Gain an edge with NMIMS's industry-aligned curriculum trusted by top corporates.",
            },
            {
              title: "Strong Alumni Network",
              text: "Join a global community of 10,000+ professionals across leading organisations.",
            },
            {
              title: "500+ Hiring Partners",
              text: "Access career opportunities with 500+ hiring partners, from global brands to start-ups.",
            },
            {
              title: "Career Growth Support",
              text: "Get mentorship, career guidance, and skill-building sessions for professional success.",
            },
            {
              title: "Smart Learning Model",
              text: "Experience UGC-approved blended learning with expert sessions, digital tools, and research access.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#064E92] p-3 rounded-xl hover:shadow-lg transition-shadow flex gap-4"
            >
              {/* Icon Section - 30% width */}
              <div className="w-[30%] flex items-center justify-center">
                <div className=" rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
                </div>
              </div>

              {/* Content Section - 70% width */}
              <div className="w-[70%]">
                <h3 className="text-md font-bold text-white text-left mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-left text-xs">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ======= BLOG SECTION ======= */}
      {/* Header Section */}
      <div className="bg-white p-15 mb-2">
        <div className="flex flex-col gap-6 mb-8">
          {/* First Row: Heading and Description side by side */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#064E92]">
              Blogs
            </h1>
            <p className="text-gray-700 text-sm md:text-base max-w-md lg:text-left text-align-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              massa sit amet nisi blandit ve adipiscing elit.
            </p>
          </div>

          {/* Second Row: Button */}
          <div className="flex lg:justify-end">
            <button className="bg-[#064E92] hover:bg-blue-800 text-white px-7 py-1 rounded-full font-medium transition-colors duration-200">
              View All
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white">
              {/* Image */}
              <div className="relative h-55 bg-gray-200 rounded-t-xl overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Topic and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-600 bg-[#30968914] border-gray-200 rounded-xl px-5 font-semibold text-sm">
                    {blog.topic}
                  </span>
                  <span className="text-gray-500 text-xs">{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white px-4 sm:px-6 lg:px-15">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="p-6 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#345895] text-left">
              Learners Love Wall
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {testimonials
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#064E92] text-white rounded-xl p-6 sm:p-8 flex flex-col"
                >
                  {/* Avatar */}
                  <div className="mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-sm sm:text-base leading-relaxed mb-8 grow">
                    "{testimonial.text}"
                  </p>

                  {/* Name, Title and Rating */}
                  <div className="flex flex-col">
                    {/* Top row: name left, stars right */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-bold text-base sm:text-lg">
                        {testimonial.name}
                      </h4>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <IoIosStarOutline
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom row: title aligned left */}
                    <p className="text-blue-200 text-xs sm:text-sm mt-1">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="border-2 border-[#E6F1FE] bg-[#E6F1FE] hover:border-blue-300 rounded-full p-3 transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>
            <button
              onClick={handleNext}
              className="border-2 border-[#E6F1FE] bg-[#E6F1FE] hover:border-blue-300 rounded-full p-3 transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

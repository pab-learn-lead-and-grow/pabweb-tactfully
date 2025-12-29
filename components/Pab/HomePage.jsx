"use client";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AllInOneSection from "./All-in-one";
import CoursesSection from "./CoursesSection";
import FaqSection from "./Faq";
import ConnectToday from "../NmimsSection/ConnectToday.jsx";
import Link from "next/link";
import ContactSection from "./ContactSection";
import LogoSection from "./LogoSection";

export default function HomePage() {
  const blogs = [
    {
      id: 1,
      topic: "Advancement",
      date: "25 Dec 2025",
      title:
        "Online MBA For Career Growth: How An Online MBA Helps You Raise From Employee To Leader",
      image: "/Blog2/background.png",
      path: "blogs/online-mba-for-career-growth",
    },
    {
      id: 2,
      topic: "NMIMS",
      date: "25 Dec 2025",
      title: "Why NMIMS Is The Top Choice For Working Professionals In India",
      image: "/Blog3/background.png",
      path: "blogs/nmims-for-working-professionals",
    },
    {
      id: 3,
      topic: "Clarity",
      date: "25 Dec 2025",
      title:
        "Online MBA vs Regular MBA: Which One Is Right for Working Professionals?",
      image: "/Blog1/background.png",
      path: "blogs/online-vs-regular-mba",
    },
    {
      id: 4,
      topic: "Evolution",
      date: "25 Dec 2025",
      title:
        "How Online MBA’s Are Reshaping Global Careers With Data, Trends And Inspiring Success Stories",
      image: "/Blog4/background.png",
      path: "blogs/the-digital-revolution",
    },
    {
      id: 5,
      topic: "ROI",
      date: "25 Dec 2025",
      title:
        "Top 10 Reasons A Modern Online MBA Dramatically Boosts Your Salary And Acc Career Mobility",
      image: "/Blog5/background.png",
      path: "blogs/the-financial-catalyst",
    },
    {
      id: 6,
      topic: "Leadership",
      date: "25 Dec 2025",
      title:
        "How Online BBA Builds Entrepreneurs And How Online MBA Shapes Future CEOs",
      image: "/Blog6/background.png",
      path: "blogs/how-online-bba-builds-entrepreneurs",
    },
  ];

  // in root client layout
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // logo paths
  const logos = [
    { src: "/nmims.png", href: "/nmims" },
    { src: "/manipal.png", href: "/muj" },
    { src: "/amity.png", href: "/amity" },
    { src: "/jain.png", href: "/jain" },
    { src: "/smu.png", href: "/smu" },
  ];


  const testimonials = [
    {
      id: 1,
      name: "Rohan Mehta",
      title: "Marketing Manager, TechNova Pvt. Ltd.",
      text: "The counselling session from PAB helped me realise which specialisation actually fits my career goals. I joined the NMIMS Online MBA in Marketing and could immediately apply what I learned to my work. It's flexible, practical, and truly growth-focused.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Nayar",
      title: "Business Analyst, Infosync Analytics",
      text: "As a working professional with a full-time job, I never thought I could manage an MBA. PAB made the process simple, from selecting the university to scheduling sessions. The ROI guidance was a game-changer — it felt like a career investment, not just education.",
      rating: 5,
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      title: "Operations Lead, WareConnect India",
      text: "What I liked most about PAB was their honest approach — no hard selling, just clear insights about what would work for my profile. The Learn–Lead–Grow structure made me see how each skill ties to real outcomes.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      title: "HR Specialist, PeopleFirst Consulting",
      text: "The mentorship from PAB gave me the clarity I needed. I didn't just pick an MBA program; I understood how it would impact my career ROI. Within months, I started seeing improvements at work.",
      rating: 5,
    },
    {
      id: 5,
      name: "Vivek Joshi",
      title: "Finance Executive, Axis Bank",
      text: "I've seen many education platforms, but PAB stands out for one reason — they understand working professionals. Everything, from the call with the counsellor to the study guidance, felt designed for my schedule.",
      rating: 5,
    },

    {
      id: 6,
      name: "Divya Sharma",
      title: "Digital Strategist, Creatify Media",
      text: "Choosing the NMIMS Online MBA through PAB was one of my best career decisions. The counsellor helped me choose the right specialisation, and the guidance on practical application made all the difference.",
      rating: 4,
    },
    {
      id: 7,
      name: "Divya Sharma",
      title: "Digital Strategist, Creatify Media",
      text: "Choosing the NMIMS Online MBA through PAB was one of my best career decisions. The counsellor helped me choose the right specialisation, and the guidance on practical application made all the difference.",
      rating: 4,
    },
  ];

  // pagination logic: 6 cards per "page"
  const CARDS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.max(
    1,
    Math.ceil(testimonials.length / CARDS_PER_PAGE)
  );

  const startIndex = currentPage * CARDS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 3);

  return (
    <div className="flex flex-col bg-white font-sans">
      <HeroSection className="pb-5" />

    {/* LOGO MARQUEE SECTION */}
      <LogoSection logos={logos}/>

      {/* ======= Courses SECTION ======= */}
      <CoursesSection />

      {/* ======= All-in-one SECTION ======= */}
      <AllInOneSection />

      {/* ======= BLOG SECTION ======= */}
      <section id="blogs">
        <div className="bg-white p-5 lg:p-15 mb-2">
          <div className="flex flex-col gap-6 mb-8">
            {/* First Row: Heading and Description side by side */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-[64px] font-bold text-[#345895]">
                Knowledge Corner
              </h1>
              <p className="text-black text-sm md:text-base w-55 word-break lg:text-left text-align-left">
                Stay updated with the latest industry insights and trends.
              </p>
            </div>

            {/* Second Row: Button */}
            <div className="flex lg:justify-end">
              <button
                onClick={() => setShowAllBlogs((prev) => !prev)}
                className="bg-[#345895] hover:bg-blue-800 text-white px-4 text-xs md:text-[16px] md:px-7 py-1 -mt-2 rounded-full font-medium transition-colors duration-200"
              >
                {showAllBlogs ? "Show Less" : "View All"}
              </button>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-12">
            {visibleBlogs.map((blog) => (
              <div key={blog.id} className="bg-white">
                {/* Image */}
                <div className="relative h-55 bg-gray-200 rounded-t-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={220}
                    className="w-full h-full object-cover"
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
                  <Link href={blog.path} className="hover:underline">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= TESTIMONIAL SECTION ======= */}
      <div className="w-full bg-white p-5 lg:px-15">
        <div className="w-full mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl xl:text-[64px] font-bold text-[#345895] text-center md:text-left">
              Learners Love Wall
            </h2>
          </div>

          {/* Testimonial Cards – show up to 6 per page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mb-10">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#345895] text-white rounded-xl p-6 sm:p-8 flex flex-col"
              >
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
                      {Array.from(
                        {
                          length: Math.max(0, Number(testimonial.rating) || 0),
                        },
                        (_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
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
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mb-10">
              <button
                onClick={handlePrev}
                className="border-2 border-[#E6F1FE] bg-[#E6F1FE] hover:border-blue-300 rounded-full p-3 transition-colors duration-200"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} className="text-[#345895]" />
              </button>
              <button
                onClick={handleNext}
                className="border-2 border-[#E6F1FE] bg-[#E6F1FE] hover:border-blue-300 rounded-full p-3 transition-colors duration-200"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} className="text-[#345895]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CONTACT CONTENT SECTION */}
      <ContactSection />

        <FaqSection/>
      <ConnectToday />
    </div>
  );
}

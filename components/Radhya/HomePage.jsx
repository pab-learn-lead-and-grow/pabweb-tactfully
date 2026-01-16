"use client";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useState, useEffect, Suspense } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import CounsellingForm from "./CounsellingForm";

// Lazy load heavy components
const AllInOneSection = dynamic(() => import("./All-in-one"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const CoursesSection = dynamic(() => import("./CoursesSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const FaqSection = dynamic(() => import("./Faq"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const ConnectToday = dynamic(() => import("../NmimsSection/ConnectToday.jsx"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const ContactSection = dynamic(() => import("./ContactSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const LogoSection = dynamic(() => import("./LogoSection"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse"></div>
});


export default function HomePage() {
  const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  const section = document.getElementById("blogs");
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        if (window.location.hash === "#blogs") {
          const cleanUrl =
            window.location.pathname + window.location.search;

          window.history.replaceState(null, "", cleanUrl);
        }
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);



  const blogs = [
    {
      id: 1,
      topic: "Advancement",
      date: "16 Jan 2026",
      title:
        "Online MBA For Career Growth: How An Online MBA Helps You Raise From Employee To Leader",
      image: "/Blog2/background.png",
      path: "blogs/online-mba-for-career-growth",
    },
    {
      id: 2,
      topic: "NMIMS",
      date: "16 Jan 2026",
      title: "Why NMIMS Is The Top Choice For Working Professionals In India",
      image: "/Blog3/background.png",
      path: "blogs/nmims-for-working-professionals",
    },
    {
      id: 3,
      topic: "Clarity",
      date: "16 Jan 2026",
      title:
        "Online MBA vs Regular MBA: Which One Is Right for Working Professionals?",
      image: "/Blog1/background.png",
      path: "blogs/online-vs-regular-mba",
    },
    {
      id: 4,
      topic: "Evolution",
      date: "16 Jan 2026",
      title:
        "How Online MBA’s Are Reshaping Global Careers With Data, Trends And Inspiring Success Stories",
      image: "/Blog4/background.png",
      path: "blogs/the-digital-revolution",
    },
    {
      id: 5,
      topic: "ROI",
      date: "16 Jan 2026",
      title:
        "Top 10 Reasons A Modern Online MBA Dramatically Boosts Your Salary And Acc Career Mobility",
      image: "/Blog5/background.png",
      path: "blogs/the-financial-catalyst",
    },
    {
      id: 6,
      topic: "Leadership",
      date: "16 Jan 2026",
      title:
        "How Online BBA Builds Entrepreneurs And How Online MBA Shapes Future CEOs",
      image: "/Blog6/background.png",
      path: "blogs/how-online-bba-builds-entrepreneurs",
    },
];

  useEffect(() => {
    setHydrated(true);
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
      text: "The counselling session from Radhya education helped me realise which specialisation actually fits my career goals. I joined the NMIMS Online MBA in Marketing and could immediately apply what I learned to my work. It's flexible, practical, and truly growth-focused.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Nayar",
      title: "Business Analyst, Infosync Analytics",
      text: "As a working professional with a full-time job, I never thought I could manage an MBA. Radhya education made the process simple, from selecting the university to scheduling sessions. The ROI guidance was a game-changer - it felt like a career investment, not just education.",
      rating: 5,
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      title: "Operations Lead, WareConnect India",
      text: "What I liked most about Radhya education was their honest approach - no hard selling, just clear insights about what would work for my profile. The flight of knowledge made me see how each skill ties to real outcomes.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      title: "HR Specialist, PeopleFirst Consulting",
      text: "The mentorship from Radhya education gave me the clarity I needed. I didn't just pick an MBA program; I understood how it would impact my career ROI. Within months, I started seeing improvements at work.",
      rating: 5,
    },
    {
      id: 5,
      name: "Vivek Joshi",
      title: "Finance Executive, Axis Bank",
      text: "I've seen many education platforms, but Radhya education stands out for one reason - they understand working professionals. Everything, from the call with the counsellor to the study guidance, felt designed for my schedule.",
      rating: 5,
    },

    {
      id: 6,
      name: "Divya Sharma",
      title: "Digital Strategist, Creatify Media",
      text: "Choosing the NMIMS Online MBA through Radhya education was one of my best career decisions. The counsellor helped me choose the right specialisation, and the guidance on practical application made all the difference.",
      rating: 4,
    },
    {
      id: 7,
      name: "Kirti Jain",
      title: "Business Development Associate, Webkul",
      text: "Choosing the Amity Online MBA through Radhya education was one of my best career decisions. This course helped me choose the right career path, and the guidance on practical application made all the difference.",
      rating: 4,
    },
    {
  id: 8,
  name: "Ankit Verma",
  title: "Product Executive, Innovatech Solutions",
  text: "Radhya education helped me connect my learning with real business challenges. The counsellor’s guidance on choosing the right MBA specialisation gave me clarity I was missing for years. I now feel more confident about my career direction.",
  rating: 5,
},
{
  id: 9,
  name: "Neha Kulkarni",
  title: "Content Strategist, BrandNest Studio",
  text: "The counselling experience was extremely professional and personalised. Radhya education didn’t push programs blindly — they helped me understand how each option would affect my long-term career growth.",
  rating: 5,
},
{
  id: 10,
  name: "Saurabh Malhotra",
  title: "Supply Chain Analyst, LogiCore Systems",
  text: "What stood out for me was the clarity around ROI and skill relevance. Radhya education made sure I wasn’t just enrolling in a degree, but investing in the right career move.",
  rating: 5,
},
{
  id: 11,
  name: "Pooja Iyer",
  title: "Corporate Trainer, LearnSphere",
  text: "The structured guidance and honest counselling approach helped me avoid confusion. I finally chose a program that aligned with both my professional goals and personal schedule.",
  rating: 4,
},
{
  id: 12,
  name: "Rahul Bansal",
  title: "Operations Manager, CoreLine Industries",
  text: "Radhya education made online learning feel purposeful. The counsellor explained how each subject links to real workplace outcomes, which motivated me to stay consistent with my studies.",
  rating: 5,
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
  const visibleBlogs = hydrated && showAllBlogs ? blogs : blogs.slice(0, 3);

  const [isModalOpen, setIsModalOpen] = useState(false);  

  return (
    <div className="flex flex-col bg-white font-sans">
      <HeroSection />
     

    {/* LOGO MARQUEE SECTION */}
   <div className="h-[120px]">

     <LogoSection logos={logos}/></div>

      {/* ======= Courses SECTION ======= */}
      
      <CoursesSection />

      {/* ======= All-in-one SECTION ======= */}
      <AllInOneSection />

      {/* ======= BLOG SECTION ======= */}
      <section id="blogs">
        <div className="bg-white p-5 lg:p-[60px] mb-2">
          <div className="flex flex-col gap-6 mb-8">
            {/* First Row: Heading and Description side by side */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#270652]">
                Knowledge Corner
              </h2>
             <p className="text-black text-sm md:text-base w-55 word-break lg:text-left text-align-left">
                Stay updated with the latest industry insights and trends.
              </p>
            </div>

            {/* Second Row: Button */}
            <div className="flex lg:justify-end">
              <button
                onClick={() => setShowAllBlogs((prev) => !prev)}
className="bg-[#3D077E] text-white px-4 text-xs md:text-[16px] md:px-7 py-1 -mt-2 rounded-full font-medium shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-100"
              >
                {showAllBlogs ? "Show Less" : "View All"}
              </button>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
            {visibleBlogs.map((blog) => (
              <div key={blog.id} className="bg-white">
                {/* Image */}
                <div className="relative h-[220px] bg-gray-200 rounded-t-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={220}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="py-3 lg:py-6">
                  {/* Topic and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-black bg-[#FED56F] rounded-xl px-5 py-1 font-semibold text-sm">
                      {blog.topic}
                    </span>
                    <span className="text-[#222222] text-xs">{blog.date}</span>
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
      <div className="w-full bg-white p-5 lg:px-[60px]">
        <div className="w-full mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#270652] text-center md:text-left">
              Learners Love Wall
            </h2>
          </div>

          {/* Testimonial Cards – show up to 6 per page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mb-10">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#3C087E]/5 text-white rounded-xl p-6 sm:p-8 flex flex-col"
              >
                {/* Testimonial Text */}
                <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-8 grow">
                  "{testimonial.text}"
                </p>

                {/* Name, Rating and Title */}
<div className="flex flex-col items-start">
  {/* Row 1: Rating */}
  <div className="flex gap-1 mb-1">
    {Array.from(
      { length: Math.max(0, Number(testimonial.rating) || 0) },
      (_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      )
    )}
  </div>
    {/* Row 2: Name */}
   <h4 className="text-black font-bold text-base sm:text-lg">
    {testimonial.name}
  </h4>

  {/* Row 3: Title */}
  <p className="text-[#333333] text-xs sm:text-sm mt-1">
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
                className="border-2 border-[#3C087E]/10 bg-[#3C087E]/10 hover:border-[#3C087E]/20 rounded-full p-3 transition-colors duration-200"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} className="text-[#3C087E]" />
              </button>
              <button
                onClick={handleNext}
                className="border-2 border-[#3C087E]/10 bg-[#3C087E]/10 hover:border-[#3C087E]/20 rounded-full p-3 transition-colors duration-200"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} className="text-[#3C087E]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CONTACT CONTENT SECTION */}
      <ContactSection />

        <FaqSection/>
       <section className="w-full h-60 md:h-90 bg-[#3C087E] mt-5 md:mt-8 xl:mt-20 py-20 flex flex-col items-center text-left">
            <h1 className="text-xl md:text-4xl font-[Inter] font-bold text-white max-w-4xl leading-tight text-center px-4">
              Get Expert Career Counselling for the Right Online, Offline & Distance Learning Courses
            </h1>
      
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className=" mt-5 md:mt-15 text-white py-3 px-5 lg:px-10 xl:px-15 rounded-xl md:text-lg  bg-[#EEA727] border-0 border-transparent  shadow-[#db990a]  shadow-md transform hover:scale-105 duration 200 font-semibold hover:shadow-lg transition duration-200"
            >
              Connect Now
            </button>
            {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
          </section>
    </div>
  );
}

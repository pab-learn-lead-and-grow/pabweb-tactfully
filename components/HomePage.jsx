"use client";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useState, useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabaseClient";
import AllInOneSection from "./All-in-one";
import CoursesSection from "./CoursesSection";
import FaqSection from "./Faq";

export default function HomePage() {
  const blogs = [
    {
      id: 1,
      topic: "Topic",
      date: "12 Aug 2023",
      title: "Online MBA vs Regular MBA: Which One Is Right for Working Professionals?",
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
  const supabase = createSupabaseClient();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const { firstName, lastName, email, phone, message } = formData;

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          message,
        },
      ]);

      if (error) {
        console.error("❌ Error inserting data:", error);
        setStatus("Something went wrong. Please try again!");
      } else {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("❌ Unexpected error:", err);
      setStatus("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  // logo paths (assumes images are in public/logos/)
  const logos = ["/nmims.png", "/manipal.png", "/amity.png", "/jain.png"];

  // duplicate for seamless loop
  const repeated = [...logos, ...logos];

  // tweak these to change size/visible count/speed
  const logoWidth = 250; // px - width of each logo box
  const logoHeight = 100; // px - height of each logo box
  const visibleCount = 4; // how many logos are visible at once
  const gap = 30; // px gap between logos
  const durationSeconds = 10; // animation duration (lower = faster)

  // computed viewport width to ensure only `visibleCount` logos are visible
  const viewportWidth = visibleCount * logoWidth + (visibleCount - 1) * gap;

  const [currentIndex, setCurrentIndex] = useState(0);

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
      text: "“As a working professional with a full-time job, I never thought I could manage an MBA. PAB made the process simple, from selecting the university to scheduling sessions. The ROI guidance was a game-changer — it felt like a career investment, not just education.",
      rating: 5,
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      title: "Operations Lead, WareConnect India",
      text: "“What I liked most about PAB was their honest approach — no hard selling, just clear insights about what would work for my profile. The Learn–Lead–Grow structure made me see how each skill ties to real outcomes.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      title: "HR Specialist, PeopleFirst Consulting",
      text: "The mentorship from PAB gave me the clarity I needed. I didn’t just pick an MBA program; I understood how it would impact my career ROI. Within months, I started seeing improvements at work.",
      rating: 5,
    },
    {
      id: 5,
      name: "Vivek Joshi",
      title: "Finance Executive, Axis Bank",
      text: "I’ve seen many education platforms, but PAB stands out for one reason — they understand working professionals. Everything, from the call with the counsellor to the study guidance, felt designed for my schedule.",
      rating: 5,
    },
    {
      id: 6,
      name: "Divya Sharma",
      title: "Digital Strategist, Creatify Media",
      text: "Choosing the NMIMS Online MBA through PAB was one of my best career decisions. The counsellor helped me choose the right specialisation, and the guidance on practical application made all the difference.",
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
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <HeroSection />

      {/* LOGO MARQUEE SECTION */}
      <div className="w-full bg-transparent py-6">
        <div className="mx-auto px-4" style={{ maxWidth: "100%" }}>
          {/* VIEWPORT: fixed width so only `visibleCount` logos are visible */}
          <div
            className="relative overflow-hidden mx-auto marquee-viewport"
            style={{ width: viewportWidth }}
            aria-label="Partner logos carousel"
            role="region"
          >
            {/* TRACK: flex row with animation. Hovering viewport pauses animation */}
            <div
              className="marquee-track flex items-center whitespace-nowrap"
              style={{
                gap: `${gap}px`,
                // inline animation string; actual keyframes defined in jsx style below
                animation: `marquee ${durationSeconds}s linear infinite`,
              }}
            >
              {repeated.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: `${logoWidth}px`,
                    height: `${logoHeight}px`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`partner-logo-${(idx % logos.length) + 1}`}
                    width={logoWidth}
                    height={logoHeight}
                    className="object-contain"
                    priority={idx < logos.length} // preload first set
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ======= Courses SECTION ======= */}
      <CoursesSection />

      {/* ======= All-in-one SECTION ======= */}
      <AllInOneSection />

      {/* ======= BLOG SECTION ======= */}
      {/* Header Section */}
      <section id="knowledge">
        <div className="bg-white p-15 mb-2">
          <div className="flex flex-col gap-6 mb-8">
            {/* First Row: Heading and Description side by side */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#064E92]">
                Knowledge Corner
              </h1>
              <p className="text-black text-sm md:text-base w-[220px] word-break lg:text-left text-align-left">
                Stay updated with the latest industry insights and trends.
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
      </section>

      <div className="w-full bg-white px-4 sm:px-6 lg:px-15">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="p-6 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#345895] text-left">
              Learners Love Wall
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
            {testimonials
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((testimonial) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mb-10">
            {testimonials
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((testimonial) => (
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
        </div>
      </div>

      {/* CONTACT CONTENT SECTION */}
      <div className="max-w-7xl mx-auto md:px-10 py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="flex flex-col px-25 bg-white justify-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black">
            You Will Grow, You Will Succeed.
            <br /> We Promise That
          </h2>
          <p className="text-black font-medium">PAB Learn Lead and Grow</p>

          {/* Info Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
            {/* Call */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <Phone className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">
                Call for inquiry
              </span>
              <span className="text-black text-sm">+91 9999999999</span>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">
                Send us email
              </span>
              <span className="text-black text-sm">info@pab.com</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <Clock className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">
                Opening hours
              </span>
              <span className="text-black text-sm whitespace-nowrap">
                Mon - Sat: 10AM - 10PM
              </span>
            </div>

            {/* Office */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#345895] w-6 h-6" />
              </div>
              <span className="font-semibold text-lg text-black">Office</span>
              <span className="text-black text-sm">Indore, MP</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div
          className="bg-blue-50 w-[500px] p-8 rounded-2xl shadow-md"
          style={{
            backgroundColor: "rgba(6, 78, 146, 0.1)",
          }}
        >
          <h3 className="text-2xl font-semibold text-center text-black mb-1">
            Contact Info
          </h3>
          <p className="text-black text-center mb-6">Send us a message</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your E-mail address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#345895] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-center mt-3 font-medium ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="w-full bg-white mt-5">
        <FaqSection />
      </div>
      <section className="w-full h-90 bg-[#345895] py-15 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight px-4">
          Connect Today for expert-led,
          <br />
          personalised career counselling.
        </h2>

        <button
          type="button"
          className="mt-15 bg-[#4D964F] text-white py-3 px-15 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition duration-200"
        >
          What's My Fit?
        </button>
      </section>

      {/* local styles: keyframes, pause-on-hover, reduced-motion support */}
      <style jsx>{`
        /* keyframes translate left by 50% (because repeated = [...logos, ...logos]) */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* apply animation to track (class selector scoped to this component) */
        .marquee-track {
          will-change: transform;
        }

        /* pause animation when hovered anywhere inside the viewport (including children) */
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused !important;
        }

        /* hide scrollbar in case of any scrollable element fallback (no global CSS edits) */
        .marquee-viewport::-webkit-scrollbar {
          display: none;
          width: 0;
          background: transparent;
        }
        .marquee-viewport {
          -ms-overflow-style: none; /* IE 10+ */
          scrollbar-width: none; /* Firefox */
        }

        /* supports reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

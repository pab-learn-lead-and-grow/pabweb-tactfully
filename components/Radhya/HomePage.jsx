"use client";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useState, useEffect, Suspense } from "react";
import { ChevronLeft, ChevronRight, Star, Clock } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabaseClient";
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
  const [latestNews, setLatestNews] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const BUCKET_URL = "https://bkcaoaoebbzrhbsfkjbm.supabase.co/storage/v1/object/public/News";

  const getImageUrl = (path) => {
    if (!path) return "/help.png";
    let cleanPath = String(path).trim();
    if (cleanPath.includes("supabase.co")) {
      cleanPath = cleanPath.replace(/[^a-zA-Z0-9/:._-]/g, '');
    }
    return cleanPath || "/help.png";
  };

  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diff = Math.floor((now - past) / 1000);
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
    return past.toLocaleDateString();
  };

 useEffect(() => {
   const fetchNews = async () => {
      const { data } = await supabase
        .from("news")
        .select(`
          news_id,
          title,
          slug,
          image_url,
          published_at,
          news_categories (
            category_name
          )
        `)
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(30);

      const newsWithImages = data?.map((item) => ({
        ...item,
        image_url: getImageUrl(item.image_url),
      }));

      setLatestNews(newsWithImages || []);
   };

    fetchNews();
  }, []);

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
  const visibleBlogs = hydrated && showAllBlogs ? blogs : blogs.slice(0, 4);

  const [isModalOpen, setIsModalOpen] = useState(false);  

  return (
    <div className="flex flex-col bg-white font-sans">
      <HeroSection />
      <div className="h-[120px]">
        <LogoSection logos={logos}/>
      </div>
      <CoursesSection />
      <AllInOneSection />
      
      <section id="blogs" className="bg-white p-5 lg:p-[60px] mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#270652]">Knowledge Corner</h2>
              <p className="text-black text-sm md:text-base mt-4 max-w-2xl">Stay updated with the latest industry insights and trends.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
              {visibleBlogs.map((blog) => (
                <div key={blog.id} className="bg-white">
                  <div className="relative h-[220px] bg-gray-200 rounded-xl overflow-hidden">
                    <Image src={blog.image} alt={blog.title} width={400} height={220} className="w-full h-full object-cover" />
                  </div>
                  <div className="py-3 lg:py-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-black bg-[#FED56F] rounded-xl px-5 py-1 font-semibold text-sm">{blog.topic}</span>
                      <span className="text-[#222222] text-xs">{blog.date}</span>
                    </div>
                    <Link href={blog.path} className="hover:underline">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button onClick={() => setShowAllBlogs((prev) => !prev)} className="bg-[#3D077E] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                {showAllBlogs ? "Show Less" : "View All"}
              </button>
            </div>
          </div>

          <div className=" rounded-xl shadow-md p-5 h-[900px] lg:sticky lg:top-10 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-2xl lg:text-4xl font-bold text-[#270652]">Latest News</h3>
              <Link href="/news" className="text-sm sm:text-base text-[#270652] font-medium">View all</Link>
            </div>
            <div className="overflow-hidden h-[880px]">
              <div className={isPaused ? '' : 'animate-marquee-slow'}>
                <div className="flex flex-col gap-3">
                  {[...latestNews, ...latestNews].map((item, idx) => (
                    <Link key={`${item.news_id}-${idx}`} href={`/news/${item.slug}`}>
                      <div className="flex gap-3 items-start hover:bg-white p-2 rounded-lg transition cursor-pointer">
                        <Image src={getImageUrl(item.image_url)} alt={item.title} width={80} height={60} className="object-cover rounded-lg shrink-0" unoptimized />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-500 mb-0.5">{item.news_categories?.category_name}</p>
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</p>
                          <div className="flex items-center gap-1 mt-0.5 text-[10px] text-gray-500">
                            <Clock size={10} /><span>{timeAgo(item.published_at)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white p-5 lg:px-[60px]">
        <div className="w-full mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#270652] text-center md:text-left">Learners Love Wall</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mb-10">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#3C087E]/5 text-white rounded-xl p-6 sm:p-8 flex flex-col">
                <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-8 grow">"{testimonial.text}"</p>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: Math.max(0, Number(testimonial.rating) || 0) }, (_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="text-black font-bold text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-[#333333] text-xs sm:text-sm mt-1">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mb-10">
              <button onClick={handlePrev} className="border-2 border-[#3C087E]/10 bg-[#3C087E]/10 hover:border-[#3C087E]/20 rounded-full p-3 transition-colors duration-200" aria-label="Previous testimonials">
                <ChevronLeft size={24} className="text-[#3C087E]" />
              </button>
              <button onClick={handleNext} className="border-2 border-[#3C087E]/10 bg-[#3C087E]/10 hover:border-[#3C087E]/20 rounded-full p-3 transition-colors duration-200" aria-label="Next testimonials">
                <ChevronRight size={24} className="text-[#3C087E]" />
              </button>
            </div>
          )}
        </div>
      </div>

      <ContactSection />
      <FaqSection/>
      <section className="w-full h-60 md:h-90 bg-[#3C087E] mt-5 md:mt-8 xl:mt-20 py-20 flex flex-col items-center text-left">
        <h1 className="text-xl md:text-4xl font-[Inter] font-bold text-white max-w-4xl leading-tight text-center px-4">
          Get Expert Career Counselling for the Right Online, Offline & Distance Learning Courses
        </h1>
        <button type="button" onClick={() => setIsModalOpen(true)} className="mt-5 md:mt-15 text-white py-3 px-5 lg:px-10 xl:px-15 rounded-xl md:text-lg bg-[#EEA727] border-0 border-transparent shadow-[#db990a] shadow-md transform hover:scale-105 duration-200 font-semibold hover:shadow-lg transition duration-200">
          Connect Now
        </button>
        {isModalOpen && <CounsellingForm onClose={() => setIsModalOpen(false)} />}
      </section>
    </div>
  );
}

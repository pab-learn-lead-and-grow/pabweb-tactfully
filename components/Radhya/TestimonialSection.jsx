'use client';

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
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
      text: "Radhya education helped me connect my learning with real business challenges. The counsellor's guidance on choosing the right MBA specialisation gave me clarity I was missing for years. I now feel more confident about my career direction.",
      rating: 5,
    },
    {
      id: 9,
      name: "Neha Kulkarni",
      title: "Content Strategist, BrandNest Studio",
      text: "The counselling experience was extremely professional and personalised. Radhya education didn't push programs blindly — they helped me understand how each option would affect my long-term career growth.",
      rating: 5,
    },
    {
      id: 10,
      name: "Saurabh Malhotra",
      title: "Supply Chain Analyst, LogiCore Systems",
      text: "What stood out for me was the clarity around ROI and skill relevance. Radhya education made sure I wasn't just enrolling in a degree, but investing in the right career move.",
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

  return (
    <div className="w-full bg-white p-5 lg:px-[60px]">
      <div className="w-full mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#270652] text-center md:text-left">
            Learners Love Wall
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mb-10">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#3C087E]/5 text-white rounded-xl p-6 sm:p-8 flex flex-col">
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-8 grow">
                "{testimonial.text}"
              </p>

              <div className="flex flex-col items-start">
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: Math.max(0, Number(testimonial.rating) || 0) }, (_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <h4 className="text-black font-bold text-base sm:text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-[#333333] text-xs sm:text-sm mt-1">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-10">
            <button onClick={handlePrev} className="border-2 border-[#3C087E]/10 bg-[#3C087E]/10 rounded-full p-3">
              <ChevronLeft size={24} className="text-[#3C087E]" />
            </button>
            <button onClick={handleNext} className="border-2 border-[#3C087E]/10 bg-[#3C087E]/10 rounded-full p-3">
              <ChevronRight size={24} className="text-[#3C087E]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
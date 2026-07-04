"use client";

import {
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rohan Mehta",
      title: "Marketing Manager, TechNova Ass.",
      text: "The counselling session from Team Radhya helped me realise which specialization actually fits my career goals. I joined the NMIMS Online MBA in Marketing and could immediately apply what I learned to my work.",
      rating: 5,
      salaryBefore: "4.2 LPA",
      salaryAfter: "8.9 LPA",
      growth: "2.1x Salary Growth",
      date: "15-10-2024",
    },
    {
      id: 2,
      name: "Priya Nayar",
      title: "Business Analyst, Infosync Analytics",
      text: "As a working professional, I never thought I could manage an MBA. Radhya Education counselling team made the process simple, from selecting university to scheduling sessions. ROI felt like a career investment, not just education.",
      rating: 5,
      salaryBefore: "3.9 LPA",
      salaryAfter: "8.5 LPA",
      growth: "2.2x Salary Growth",
      date: "12-02-2025",
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      title: "Operations Lead, WareConnect India",
      text: "What I liked most about Radhya education was their honest approach - no hard selling, just clear insights about what would work for my profile. The flight of knowledge made me see how each skill ties to real outcomes.",
      rating: 5,
      salaryBefore: "5.0 LPA",
      salaryAfter: "13.5 LPA",
      growth: "2.7x Salary Growth",
      date: "28-01-2025",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      title: "HR Specialist, PeopleFirst Consulting",
      text: "The mentorship from Radhya education gave me the clarity I needed. I didn't just pick an MBA program; I understood how it would impact my career ROI. Within months, I started seeing improvements at work.",
      rating: 5,
      salaryBefore: "6.2 LPA",
      salaryAfter: "12.7 LPA",
      growth: "2.0x Salary Growth",
      date: "16-02-2025",
    },
    {
      id: 5,
      name: "Vivek Joshi",
      title: "Finance Executive, Axis Bank",
      text: "I've seen many education platforms, but Radhya education stands out for one reason - they understand working professionals. Everything, from the call with the counsellor to the study guidance, felt designed for my schedule.",
      rating: 5,
      salaryBefore: "4.5 LPA",
      salaryAfter: "9.8 LPA",
      growth: "2.2x Salary Growth",
      date: "28-02-2025",
    },
    {
      id: 6,
      name: "Divya Sharma",
      title: "Digital Strategist, Creatify Media",
      text: "Choosing the NMIMS Online MBA through Radhya education was one of my best career decisions. The counsellor helped me choose the right specialisation, and the guidance on practical application made all the difference.",
      rating: 4,
      salaryBefore: "4.2 LPA",
      salaryAfter: "10.9 LPA",
      growth: "2.6x Salary Growth",
      date: "01-03-2025",
    },
    {
      id: 7,
      name: "Kirti Jain",
      title: "Business Development Associate, Webkul",
      text: "Choosing the Amity Online MBA through Radhya education was one of my best career decisions. This course helped me choose the right career path, and the guidance on practical application made all the difference.",
      rating: 4,
      salaryBefore: "3.8 LPA",
      salaryAfter: "9.5 LPA",
      growth: "2.5x Salary Growth",
      date: "02-05-2025",
    },
    {
      id: 8,
      name: "Ankit Verma",
      title: "Product Executive, Innovatech Solutions",
      text: "Radhya education helped me connect my learning with real business challenges. The counsellor's guidance on choosing the right MBA specialisation gave me clarity I was missing for years. I now feel more confident about my career direction.",
      rating: 5,
      salaryBefore: "3.5 LPA",
      salaryAfter: "9.8 LPA",
      growth: "2.8x Salary Growth",
      date: "15-05-2025",
    },
    {
      id: 9,
      name: "Neha Kulkarni",
      title: "Content Strategist, BrandNest Studio",
      text: "The counselling experience was extremely professional and personalised. Radhya education didn't push programs blindly — they helped me understand how each option would affect my long-term career growth.",
      rating: 5,
      salaryBefore: "5.3 LPA",
      salaryAfter: "11.1 LPA",
      growth: "2.1x Salary Growth",
      date: "23-05-2025",
    },
    {
      id: 10,
      name: "Saurabh Malhotra",
      title: "Supply Chain Analyst, LogiCore Systems",
      text: "What stood out for me was the clarity around ROI and skill relevance. Radhya education made sure I wasn't just enrolling in a degree, but investing in the right career move.",
      rating: 5,
      salaryBefore: "4.2 LPA",
      salaryAfter: "8.9 LPA",
      growth: "2.1x Salary Growth",
      date: "02-06-2025",
    },
    {
      id: 11,
      name: "Pooja Iyer",
      title: "Corporate Trainer, LearnSphere",
      text: "The structured guidance and honest counselling approach helped me avoid confusion. I finally chose a program that aligned with both my professional goals and personal schedule.",
      rating: 4,
      salaryBefore: "4.2 LPA",
      salaryAfter: "8.9 LPA",
      growth: "2.1x Salary Growth",
      date: "27-08-2025",
    },
    {
      id: 12,
      name: "Rahul Bansal",
      title: "Operations Manager, CoreLine Industries",
      text: "Radhya education made online learning feel purposeful. The counsellor explained how each subject links to real workplace outcomes, which motivated me to stay consistent with my studies.",
      rating: 5,
      salaryBefore: "6.0 LPA",
      salaryAfter: "12.3 LPA",
      growth: "2.0x Salary Growth",
      date: "24-12-2025",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="mb-10 w-full mx-auto p-5 lg:px-15  max-w-7xl">
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-[#270652] text-center">
            Real Student Success Stories
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden relative w-full">
          <div className="marquee flex w-max animate-marquee gap-5 ">
            {[...testimonials].map(
              (testimonial, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] max-w-[380px] border border-purple-600 rounded-xl p-3 flex flex-col bg-white shadow-md hover:shadow-xl transition"
                >
                  {/* Top Section */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Initial Circle */}
                    <div className="w-16 h-16 rounded-full bg-[#3C087E]/10 text-[#3C087E] md:text-xl flex items-center justify-center font-bold text-sm shrink-0">
                      {testimonial.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    {/* Name + Title */}
                    <div className="flex flex-col items-start whitespace-normal">
                      <h4 className="text-black font-bold text-base sm:text-lg">
                        {testimonial.name}
                      </h4>

                      <p className="text-[#333333] text-xs mb-1">
                        {testimonial.title}
                      </p>

                      <div className="flex gap-1">
                        {Array.from(
                          {
                            length: Math.max(
                              0,
                              Number(testimonial.rating) || 0,
                            ),
                          },
                          (_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Block */}
                  <div className="text-[#333333] bg-[#3C087E]/5 rounded-xl p-3 text-xs sm:text-sm leading-relaxed">
                    {testimonial.text}

                    {/* Date */}
                    <div className="text-right text-xs mt-2 text-[#666] font-medium">
                      {testimonial.date}
                    </div>
                  </div>

                  {/* Salary Section */}
                  <div className="flex justify-between items-center mt-3 p-2">
                    <div>
                      <p className="text-xs sm:text-sm mb-1 text-[#333333]">
                        Salary Before
                      </p>
                      <h4 className="text-base font-bold text-black">
                        Rs {testimonial.salaryBefore}
                      </h4>
                    </div>

                    <ArrowRight className="text-[#3C087E] shrink-0" size={28} />

                    <div className="text-right">
                      <p className="text-xs sm:text-sm mb-1 text-[#333333]">
                        Salary After
                      </p>
                      <h4 className="text-base font-bold text-green-600">
                        Rs {testimonial.salaryAfter}
                      </h4>
                    </div>
                  </div>

                  {/* Growth Badge */}
                  <div className="mx-auto mt-2 bg-green-50 border border-green-100 rounded-full px-4 py-1 flex items-center gap-2 text-green-600 font-semibold text-xs sm:text-sm">
                    <TrendingUp size={16} />
                    {testimonial.growth}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

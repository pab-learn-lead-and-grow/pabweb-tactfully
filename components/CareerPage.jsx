"use client";
import Image from "next/image";
import { Briefcase, Clock, MapPin, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CareerPage() {
  const router = useRouter();

  const career = [
    {
      time: "10 min ago",
      title: "Inside Sales Executive",
      description:
        "Lead generation, cold calling, counseling prospects, end-to-end sales.",
      tags: "Fresher",
      duration : "Full time",
      salary: "₹2,40,000-3,00,000",
      location: "Indore, Madhya Pradesh",
      link: "/InsideSalesFr",
    },
    {
      time: "12 min ago",
      title: "Digital Marketing Specialist (Google Ads & Meta Ads)",
      description:
        "Plan/execute Google + Meta campaigns, build multi-layered funnels, optimize for ROI, collaborate across teams.",
      tags: "3-5 years",
      duration : "Full time",
      salary: "₹2,40,000-3,00,000",
      location: "Indore, Madhya Pradesh",
      link: "/DigitalMarketing",
    },
    {
      time: "15 min ago",
      title: "Inside Sales Executive",
      description:
        "Lead generation, cold calling, counseling prospects, end-to-end sales.",
      tags: "3-5 years",
      duration : "Full time",
      salary: "₹2,40,000-3,00,000",
      location: "Indore, Madhya Pradesh",
      link: "/InsideSalesEx",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- Hero Row --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Image */}
          <Image
            src="/pablogo.png"
            alt="Learn Lead Grow"
            width={1000}
            height={800}
            className="object-contain"
          />

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Join the PAB Tribe <br />
              Where Learning Never Stops <br /> and Growth is Guaranteed
            </h1>
            <p className="text-black mt-4 text-[15px] leading-relaxed max-w-xl">
              At PAB, we believe in creating more than just careers — we build
              journeys of continuous learning, leadership, and growth. <br />
              Our team is a blend of passionate educators, creators, and
              innovators who share one mission: to make learning meaningful,
              practical, and fun.
            </p>
            <p className="text-black mt-3 text-[15px] max-w-xl">
              Whether you’re a strategist, designer, counselor, or storyteller —
              if you love helping people grow, you’ll fit right in.
              <button className=" text-[#003087] text-sm hover:bg-blue-50 transition">
                Learn more
              </button>
            </p>
          </div>
        </div>

        {/* --- Recent career Section --- */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-black">
              Recent Jobs Available
            </h2>
          </div>
          <div className="space-y-5">
            {career.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition bg-white"
              >
                <p
                  className="text-blue-900 text-xs mb-2 inline-block px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: "rgba(6, 78, 146, 0.1)",
                    border: "1px solid rgba(6, 78, 146, 0.1)",
                  }}
                >
                  {job.time}
                </p>
                <h3 className="font-semibold text-lg text-black mb-1">
                  {job.title}
                </h3>
                <p className="text-black text-sm mb-3">{job.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} className="text-blue-900" />{" "}
                    {job.tags}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-blue-900" />{" "}
                    {job.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Wallet size={16} className="text-blue-900" /> {job.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-blue-900" />{" "}
                    {job.location}
                  </div>
                  <button
                    onClick={() => router.push(job.link)}
                    className="ml-auto bg-[#003087] text-white px-4 py-1.5 rounded-md text-xs hover:bg-[#00246e] transition"
                  >
                    Job Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

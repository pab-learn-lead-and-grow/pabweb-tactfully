
import Image from "next/image";
import React from "react";
import CounsellingModal from "./CounsellingModal";


const TITLE = "Why Choose Radhya Education Academy?";

const ITEMS = [
  {
    title: "Verify Your Counsellor",
    image: "/radhya/counsellor.png",
  },
  {
    title: "Career Opportunities",
    image: "/radhya/career.png",
  },
  {
    title: "University Verification",
    image: "/radhya/verification.png",
  },
  {
    title: "Scholarships & Financial Aid",
    image: "/radhya/scholarship.png",
  },
  {
    title: "Finance Your Future",
    image: "/radhya/finance.png",
  },
  {
    title: "Post-Admission Support",
    image: "/radhya/support.png",
  },
  {
    title: "Online Learning Trends",
    image: "/radhya/trends.png",
  },
  {
    title: "Refer & Earn Rewards",
    image: "/radhya/refer.png",
  },
];

export default function AllInOneSection() {

  return (
    <section className="my-8">
      <div className=" max-w-7xl mx-auto px-4 md:px-8 lg:px-16 bg-white text-center">

        {/* Heading */}
        <h2 className="text-[28px] md:text-4xl lg:text-5xl  font-bold text-[#270652] text-center mx-auto leading-snug">
         {TITLE}
        </h2>
        <p className="text-sm sm:text-base max-w-5xl mb-6 mx-auto text-center text-gray-900">
         Choosing the right university is about more than comparing fees or rankings - it's about finding a program that supports your career goals. At Radhya Education Academy, we help students and working professionals make informed education decisions through career counselling, transparent university comparisons, and admission guidance. Whether you're exploring an Online MBA, MCA, BBA, or other programs, our team helps you evaluate universities based on accreditation, curriculum, career outcomes, affordability, and learning flexibility. From your first enquiry to post-admission support, we're committed to providing unbiased guidance and a seamless counselling experience that empowers you to choose with confidence.
         </p>

        {/* Grid */}
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 max-w-5xl mx-auto gap-6 justify-items-center">
          {ITEMS.map((item, i) => (
            <li key={i} className="w-full flex justify-center">
              <IconCard title={item.title} image={item.image} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <CounsellingModal>
            <button className="px-5 xl:px-10 py-2 rounded-lg text-white text-xl font-medium transition-all duration-300 ease-out hover:scale-105 bg-[#EEA727] border-0 border-transparent shadow-[#b36e06] shadow-md transform active:scale-100"
          >
            Unlock the Whole Experience
          </button>
          </CounsellingModal>
        </div>

      </div>
     
    </section>
  );
}

function IconCard({ title, image }) {
  return (
    <div className="w-28 md:w-32 flex flex-col items-center text-center">

      {/* ICON BOX */}
      <div className="group relative w-full aspect-square bg-white rounded-3xl border-2 border-[#3C087E]/50 shadow-[8px_8px_0px_#3C087E]/50 hover:shadow-[14px_14px_0px_#3C087E]/50 transition-all duration-300 flex items-center justify-center hover:-translate-y-2 hover:scale-105">
        <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* TITLE */}
      <p className="mt-3 text-xs sm:text-sm font-semibold text-[#3C3C43]">
        {title}
      </p>
    </div>
  );
}
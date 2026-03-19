"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; 
import { ChevronRight } from "lucide-react";
import MotionWrapper from "../Radhya/MotionWrapper";

export default function RelatedBlogs({ blogs }) {
  const [showAllRelated, setShowAllRelated] = useState(false);

  const visibleBlogs = showAllRelated ? blogs : blogs.slice(0, 4);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex flex-col gap-4 lg:mt-5 w-full bg-white rounded-2xl self-start h-fit shadow-lg p-4 pr-6">
      <h2 className="text-2xl font-bold text-[#270652] mb-2">
        Related Articles
      </h2>

      {visibleBlogs.map((blog) => (
        <MotionWrapper
          key={blog.id}
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="flex gap-3 pb-4 border-gray-200"
        >
          <div className="w-[100px] h-[70px] rounded-lg overflow-hidden shrink-0">
            <Image
              src={blog.image}
              alt={blog.title}
              width={100}
              height={70}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <p className="text-[10px] text-black">
              {blog.title}
            </p>

            <Link
              href={blog.path}
              className="mt-2 w-fit text-white bg-[#3d077e] text-[10px] px-3 py-1 rounded"
            >
              Read More
            </Link>
          </div>
        </MotionWrapper>
      ))}

      {!showAllRelated && (
        <button
          onClick={() => setShowAllRelated(true)}
          className="w-full mt-2 bg-[#F6A410] text-white py-1 xl:py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          View More
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import ConnectToday from "@/components/NmimsSection/ConnectToday";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import Script from "next/script";
import UniversityCards from "../NmimsSection/Logocards";
import MotionWrapper from "../Radhya/MotionWrapper";

function PageCTA({ onOpen }) {

  return (
    <div className="flex justify-center py-6">
      <button
        onClick={onOpen}
        className="bg-[#EEA727] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 animate-soft-blink transition text-base lg:text-lg"
      >
        Get Free Career Counselling
      </button>
    </div>
  );
}

export default function PageContent({ page, imageUrl, pageSchema, formattedDate }) {
  const [showModal, setShowModal] = useState(false);

  const universities = [
    {
      src: "/nmims.png",
      alt: "NMIMS",
      name: "NMIMS Mumbai",
      href: "/nmims/",
    },
    {
      src: "/manipal.png",
      alt: "Manipal",
      name: "Manipal Jaipur",
      href: "/muj/",
    },
    {
      src: "/amity.png",
      alt: "Amity",
      name: "Amity University",
      href: "/amity/",
    },
    {
      src: "/jain.png",
      alt: "Jain",
      name: "Jain University",
      href: "/jain/",
    },
    { src: "/bennett.png", href: "/bennett/", alt: "Bennett University", name: "Bennett University" },
    { src: "/shoolini.png", href: "/shoolini/", alt: "Shoolini University", name: "Shoolini University" },
    { src: "/smu.png", href: "/smu/", alt: "Sikkim Manipal University", name: "Sikkim Manipal University" },
  ];

  return (
    <>
      {pageSchema && (
        <Script
          id="page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      )}
      <article>
        
        <div className="mt-10 max-w-6xl mx-auto py-12 p-5 lg:p-15">
          <header className="mb-8">
            <p className="text-3xl md:text-[36px] lg:text-5xl max-w-7xl font-bold text-[#270652] mb-4 leading-tight">
              {page.title}
            </p>
           
            {imageUrl && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
            <Image
              src={imageUrl}
              alt={page.title}
              fill
               className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
            />           
          </div>
        )}

            
          </header>

          {page.content && (
            <div className="prose prose-lg max-w-none text-gray-900">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  blockquote({ children }) {
                    return (
                      <blockquote className="border-l-4 border-[#345895] px-4 py-6 rounded-xl bg-gradient-to-r from-[#031424] to-[#3C087E] text-white my-6">
                        {children}
                        <PageCTA onOpen={() => setShowModal(true)} />
                      </blockquote>
                    );
                  },
                }}
              >
                {page.content}
              </ReactMarkdown>
            </div>
          )}

          {!page.content && (
            <p className="text-gray-500 italic">No content available for this page.</p>
          )}

          
        </div>
      </article>

      {showModal && (
        <CounsellingForm onClose={() => setShowModal(false)} />
      )}
       <section className="w-full mt-8 md:mt-16  px-4 md:px-10 lg:px-20 font-[Inter]">
                                       <div className="max-w-7xl mx-auto">
                                         {/* HEADING */}
                                         <MotionWrapper
                                         as="h2"
                                           initial={{ opacity: 0, y: -30 }}
                                           whileInView={{ opacity: 1, y: 0 }}
                                           transition={{ duration: 0.6 }}
                                           viewport={{ once: true }}
                                           className="text-[28px] sm:text-[36px] md:text-5xl leading-[120%] font-bold text-[#270652] mb-3 md:mb-8 text-center"
                                         >
                                           Explore other top universities
                                         </MotionWrapper>
                                       </div>
                                     </section>
                          
                                      <div className="h-[120px]">
                                 <UniversityCards logos={universities} />
                                </div>
                        
      
            <ConnectToday />
    </>
  );
}

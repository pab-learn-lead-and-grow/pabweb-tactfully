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
import ContactNmims from "@/components/Nmims/ContactNmims";
import HideOnSection from "@/components/NmimsSection/HideOnSection";

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

export default function PageContent({
  page,
  imageUrl,
  pageSchema,
  faqSchema,
  formattedDate,
}) {
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
    {
      src: "/bennett.png",
      href: "/bennett/",
      alt: "Bennett University",
      name: "Bennett University",
    },
    {
      src: "/shoolini.png",
      href: "/shoolini/",
      alt: "Shoolini University",
      name: "Shoolini University",
    },
    {
      src: "/smu.png",
      href: "/smu/",
      alt: "Sikkim Manipal University",
      name: "Sikkim Manipal University",
    },
  ];

  return (
    <>
      {/* Schema */}
      {pageSchema && (
        <Script
          id="page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageSchema),
          }}
        />
      )}

      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <article>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-10">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8 min-w-0">
              <header className="mb-8 mt-15">
                <p className="text-3xl md:text-[36px] lg:text-4xl max-w-7xl font-bold text-[#270652] mb-4 leading-tight">
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

              {/* PAGE CONTENT */}
              {page.content ? (
                <div className="prose prose-lg text-justify max-w-none text-gray-900">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      blockquote({ children }) {
                        return (
                          <blockquote className="border-l-4 border-[#345895] px-4 py-6 rounded-xl bg-gradient-to-r from-[#031424] to-[#3C087E] text-white my-6">
                            {children}
                            <PageCTA
                              onOpen={() => setShowModal(true)}
                            />
                          </blockquote>
                        );
                      },
                    }}
                  >
                    {page.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No content available for this page.
                </p>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 w-full h-fit">
                <HideOnSection  targetIds={[
    "connect-today",
    "universities-section",
  ]}>
                  <ContactNmims />
                </HideOnSection>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* MODAL */}
      {showModal && (
        <CounsellingForm onClose={() => setShowModal(false)} />
      )}

      {/* UNIVERSITIES SECTION */}
      <section
      id="universities-section"
       className="w-full mt-8 md:mt-16 font-sans">
        <div className="max-w-7xl mx-auto">
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

        <div className="h-[120px]">
          <UniversityCards logos={universities} />
        </div>
      </section>

      {/* CONNECT TODAY */}
      <div id="connect-today">
        <ConnectToday />
      </div>
    </>
  );
}
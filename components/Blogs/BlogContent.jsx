"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import Script from "next/script";
import ConnectToday from "../NmimsSection/ConnectToday";
import UniversityCards from "../NmimsSection/Logocards";
import MotionWrapper from "../Radhya/MotionWrapper";
import HideOnSection from "../NmimsSection/HideOnSection";
import ContactNmims from "../Nmims/ContactNmims";
import CounsellingModal from "../Radhya/CounsellingModal";
import { Download } from "lucide-react";

function BlogCTA({ onOpen }) {
  return (
    <div className="flex justify-center pb-2">
      <button
        onClick={onOpen}
        className="bg-[#EEA727] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 animate-soft-blink transition text-sm lg:text-base"
      >
        Get Free Career Counselling
      </button>
    </div>
  );
}

const timeAgo = (dateString) => {
  if (!dateString) return "";
  const now = new Date();
  const past = new Date(dateString);
  const diff = Math.floor((now - past) / 1000);
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);
  if (diff < 60) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
  return past.toLocaleDateString("en-GB");
};

export default function BlogContent({ 
  article, 
  articleFormattedDate,
  categoryData, 
  related, 
  imageUrl,
  articleSchema,
  faqSchema
}) {
  const [showModal, setShowModal] = useState(false);
  const [clientDate, setClientDate] = useState(articleFormattedDate);
  useEffect(() => {
  if (article?.published_at) {
    setClientDate(timeAgo(article.published_at));
  }
}, [article?.published_at]);

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
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-10">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8 mt-15 min-w-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#3C087E] mb-4">
          {article.title}
        </h2>

        <div className="flex items-center text-sm text-[#3C087E] gap-4 mb-2">
          {categoryData && (
            <>
              <span className="text-[#3C087E] font-medium">
                {categoryData.category_name}
              </span>
              <span>•</span>
            </>
          )}
          <span>{clientDate}</span>
        </div>

        {imageUrl && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              blockquote({ children }) {
                return (
                  <blockquote className="border-l-4 border-[#345895] px-4 py-6 rounded-xl bg-gradient-to-r from-[#031424] to-[#3C087E] text-white">
                    {children}
                    <BlogCTA onOpen={() => setShowModal(true)} />
                  </blockquote>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        <div className="flex justify-center py-10">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#EEA727] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 animate-soft-blink transition"
          >
            Get Free Career Guidance
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#3C087E] mb-8 border-l-4 border-[#FFB901] pl-4">
            In Case You Missed It
          </h2>

          {related.length === 0 ? (
            <p className="text-gray-500">No related articles found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item) => (
                <Link
                  key={item.blogs_id}
                  href={`/blogs/${item.slug}`}
                  className="hover:underline"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-black">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-xs text-gray-500 gap-3 mt-1">
                      <span>{item.categoryName}</span>
                      <span>•</span>
                      <span>{item.formattedDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        </div>

        {showModal && (
          <CounsellingForm onClose={() => setShowModal(false)} />
        )}
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

       {/* UNIVERSITIES SECTION */}
      <section
      id="universities-section"
       className="w-full mt-8 md:mt-16 mb-8 font-sans">
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

        <div className="min-h-60 md:min-h-65">
          <UniversityCards logos={universities} />
        </div>
      </section>

            <ConnectToday />

{/* MOBILE STICKY CTA */}
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg p-3">
  <CounsellingModal>
    <button className="w-full flex items-center justify-center gap-2 bg-[#EEA727] text-[#3C087E] animate-soft-blink font-semibold py-3 rounded-xl">
      Download Brochure
      <Download className="w-5 h-5" />
    </button>
  </CounsellingModal>
</div>
    </>
  );
}

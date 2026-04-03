"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CounsellingForm from "@/components/Radhya/CounsellingForm";
import Script from "next/script";

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

export default function NewsContent({ 
  article, 
  articleFormattedDate,
  categoryData, 
  related, 
  imageUrl,
  articleSchema
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
     <div className="mt-10 max-w-6xl mx-auto py-12 p-5 lg:p-15">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#3C087E] mb-4">
        {article.title}
      </h1>

      <div className="flex items-center text-sm text-[#3C087E] gap-4 mb-2">
        {categoryData && (
          <>
            <Link
              href={`/news/${categoryData.slug}`}
              className="text-[#3C087E] hover:text-[#3C087E] font-medium"
            >
              {categoryData.category_name}
            </Link>
            <span>•</span>
          </>
        )}
        <span>{articleFormattedDate}</span>
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
                key={item.news_id}
                href={`/news/${item.slug}`}
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

      {showModal && (
        <CounsellingForm onClose={() => setShowModal(false)} />
      )}
    </div>
    </>
  );
}

"use client";

import { useState } from "react";

export default function DynamicFaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderAnswer = (segments) =>
    segments.map((segment, idx) => {
      if (segment.type === "paragraph") {
        return (
          <p key={idx} className="mt-3 text-black leading-relaxed">
            {segment.content}
          </p>
        );
      }

      if (segment.type === "list") {
        return (
          <ul
            key={idx}
            className="list-disc pl-5 mt-2 space-y-1 text-black leading-relaxed"
          >
            {segment.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      }

      return null;
    });

  return (
    <div className="border-b py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left cursor-pointer"
      >
        <h3 className="font-semibold text-lg text-black">
          {faq.q}
        </h3>

        <span
          className={`transition-transform duration-300 text-black shrink-0 ml-4 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="mt-2">
          {renderAnswer(faq.a)}
        </div>
      )}
    </div>
  );
}

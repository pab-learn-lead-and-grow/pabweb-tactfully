// components/Common/HideOnSection.jsx

"use client";

import { useEffect, useState } from "react";

export default function HideOnSection({ children }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const connectToday = document.getElementById("connect-today");
      const footer = document.getElementById("global-footer");

      let shouldHide = false;

      // Hide when ConnectToday enters viewport
      if (connectToday) {
        const connectTop =
          connectToday.getBoundingClientRect().top;

        if (connectTop <= window.innerHeight * 0.8) {
          shouldHide = true;
        }
      }

      // Keep hidden when footer appears
      if (footer) {
        const footerTop =
          footer.getBoundingClientRect().top;

        if (footerTop <= window.innerHeight) {
          shouldHide = true;
        }
      }

      setHidden(shouldHide);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-24 right-[max(2rem,calc((100vw-1280px)/2+1rem))] w-[380px] z-40 transition-all duration-300 ${
        hidden
          ? "opacity-0 pointer-events-none translate-y-4"
          : "opacity-100 translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function HideOnSection({
  children,
  targetIds = [],
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let shouldHide = false;

      // Hide when any target section is visible
      targetIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          const isVisible =
            rect.top < window.innerHeight &&
            rect.bottom > 0;

          if (isVisible) {
            shouldHide = true;
          }
        }
      });

      // Hide when footer appears
      const footer =
        document.getElementById("global-footer");

      if (footer) {
        const footerRect =
          footer.getBoundingClientRect();

        const footerVisible =
          footerRect.top < window.innerHeight &&
          footerRect.bottom > 0;

        if (footerVisible) {
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
      window.removeEventListener(
        "scroll",
        handleScroll
      );
      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, [targetIds]);

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
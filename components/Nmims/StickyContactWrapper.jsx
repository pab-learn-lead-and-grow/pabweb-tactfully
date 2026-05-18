"use client";
import { useEffect, useState } from "react";

export default function StickyContactWrapper({ children, observe }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.querySelector(observe);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [observe]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}

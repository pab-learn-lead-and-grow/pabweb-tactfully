"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
              clearInterval(counter);
              setValue(end);
            } else {
              setValue(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
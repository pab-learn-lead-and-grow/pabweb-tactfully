"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [display, setDisplay] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const start = Date.now();

          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setDisplay(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplay(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
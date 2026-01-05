"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function LogoSection({ logos }) {
  return (
    <div className="w-full h-[120px] overflow-hidden">
      <Marquee speed={60} gradient={false} pauseOnHover>
        {logos.map((logo, idx) => (
          <Link
            key={idx}
            href={logo.href}
            className="mx-10 flex items-center justify-center h-[120px]"
          >
            <Image
              src={logo.src}
              alt="logo"
              width={640}
              height={219}
              loading="lazy"
              className="h-[75px] w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

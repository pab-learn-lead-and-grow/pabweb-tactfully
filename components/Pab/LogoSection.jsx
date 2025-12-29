"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function LogoSection({ logos }) {
  return (
    <div className="w-full py-4 overflow-hidden">
      <Marquee
        speed={80}
        gradient={false}
        pauseOnHover={true}
      >
        {logos.map((logo, idx) => (
          <Link
            key={idx}
            href={logo.href}
            className="mx-10 flex items-center"
          >
            <Image
              src={logo.src}
              alt="logo"
              width={220}
              height={100}
              className="object-contain hover:scale-105 transition"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createSupabaseClient } from "@/lib/supabaseClient";
import { usePathname } from "next/navigation";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-radhya" },
    { name: "Careers", href: "/Career" },
    { name: "Blogs", href: "/#blogs" },
    { name: "Contact Us", href: "/contact-page-radhya" },
    { name: "Gallery", href: "/#" },
  ];

  const pathname = usePathname();

  const programLinks = [
    { label: "Online MBA", category: "online-mba" },
    { label: "Executive MBA", category: "executive-mba" },
    { label: "Online BBA", category: "online-bba" },
    { label: "Online B.Com", category: "online-bcom" },
    { label: "Online B.Com(Hons.)", category: "online-bcom-hons" },
    { label: "Online B.Com(Int.)", category: "online-bcom-int" },
    { label: "Online MCA", category: "online-mca" },
    { label: "Online BCA", category: "online-bca" },
    { label: "Online BA", category: "online-ba" },
    { label: "Online MA", category: "online-ma" },
    { label: "Online MSc", category: "online-msc" },
    { label: "Online Certifications", category: "online-certification" },
    { label: "Online Diploma", category: "online-diploma" },
    { label: "Online MAJMC", category: "online-majmc" },
    { label: "Online BAJMC", category: "online-bajmc" },
    { label: "Integrated Program", category: "integrated-programs" },
  ];

  const universities = [
    { name: "NMIMS CDOE", path: "/nmims" },
    { name: "Manipal Jaipur", path: "/muj" },
    { name: "Amity Online", path: "/amity" },
    { name: "Sikkim Manipal", path: "/smu" },
    { name: "Jain Online", path: "/jain" },
  ];

  const supabase = createSupabaseClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    if (!email) {
      setMessage("Please enter an email address");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        setMessage("You are already subscribed 🙂");
      } else if (error.code === "23514") {
        setMessage("Invalid email format");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } else {
      setMessage("Subscribed successfully 🎉");
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <footer className="w-full bg-white p-5 flex lg:min-h-[50vh] min-h-auto items-center">
      <div className="mx-auto w-full max-w-7xl">
        {/* --- Main Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6  border-t-2 border-b-2">
          {/* --- Left Section (Logo, Social, Address) --- */}
          <div className="col-span-2">
            <div className="col-span-2 flex justify-start items-start mt-10 mb-10 text-left">
              <Image
                src="/radhyaLogo.png"
                alt="Radhya Logo"
                width={250}
                height={60}
                className="
                block
                w-40
                lg:w-45
                xl:w-85
                h-auto
                "
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-start md:justify-start sm:justify-start space-x-3 mb-5">
              {[
                {
                  src: "/ig.png",
                  alt: "Instagram",
                  href: "https://www.instagram.com/",
                },
                {
                  src: "/ln.png",
                  alt: "LinkedIn",
                  href: "https://www.linkedin.com/ ",
                },
                {
                  src: "/x.png",
                  alt: "X (Twitter)",
                  href: "https://twitter.com/",
                },
                {
                  src: "/yt.png",
                  alt: "YouTube",
                  href: "http://www.youtube.com/",
                },
                {
                  src: "/fb.png",
                  alt: "Facebook",
                  href: "https://www.facebook.com/ ",
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={22}
                    height={22}
                    className="object-contain hover:scale-110 transition-transform duration-200"
                  />
                </a>
              ))}
            </div>

            {/* Address Section */}
            <div className="text-xs md:text-sm text-black leading-relaxed">
              <p className="font-semibold">Address:</p>
              <p className="mt-1">Radhya Education Pvt. Ltd.</p>
              <p>Indore, Madhya Pradesh, India</p>
              <a
                href="tel:+917489410758"
                className="text-black text-xs md:text-sm hover:text-[#345895] underline"
                aria-label="Call Radhya Education"
              >
                +91 7489410758
              </a>{" "}
              ||{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=uttam15vp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-xs md:text-sm hover:text-[#345895] underline"
              >
                uttam15vp@gmail.com
              </a>
            </div>
          </div>

          {/* --- Right Section (Other Columns) --- */}
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {/* --- Universities --- */}
            <div>
              <h3 className="font-semibold text-xs md:text-sm text-black mb-2">
                Universities
              </h3>
              <ul className="space-y-1 text-[11px] md:text-xs text-black">
                {universities.map((uni) => (
                  <li key={uni.path}>
                    <Link
                      href={uni.path}
                      className="hover:text-blue-900 transition"
                    >
                      {uni.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Quick Links --- */}
            <div>
              <h3 className="font-semibold text-xs md:text-sm text-black mb-2">
                Quick Links
              </h3>
              <ul className="space-y-1 text-[11px] md:text-xs text-black">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-900 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Program Offered --- */}
            <div>
              <h3 className="font-semibold text-xs md:text-sm text-black mb-2">
                Program Offered
              </h3>

              <ul className="space-y-1 text-[11px] md:text-xs text-black">
                {programLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={{
                        pathname, // 👈 stay on SAME page
                        query: { category: item.category },
                      }}
                      scroll={false} // 👈 no jump
                      className="hover:text-blue-900 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Newsletter --- */}
            <div>
              <h3 className="font-semibold text-xs md:text-sm text-black mb-1">
                Newsletter
              </h3>
              <p className="text-[11px] md:text-xs text-black mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex flex-col text-[#064E92] space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full border border-gray-400 bg-[rgba(6,78,146,0.1)] rounded-md px-3 py-2 text-[11px] md:text-xs focus:outline-none focus:border-blue-800"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="bg-[#345895] text-white rounded-md py-2 text-[11px] md:text-xs hover:bg-[#00246e]  shadow-md
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-xl
      active:scale-100 disabled:opacity-60"
                >
                  {loading ? "Subscribing..." : "Subscribe now"}
                </button>
                {message && (
                  <p className="text-[11px] md:text-xs text-green-700">
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] md:text-xs text-black mt-3">
          <p className="text-center md:text-left">
            © 2025 Radhya Education Pvt. Ltd.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/PrivacyPolicy" className="hover:text-blue-900">
              Privacy Policy
            </a>
            <a href="/TermsAndCondition" className="hover:text-blue-900">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

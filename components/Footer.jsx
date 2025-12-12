"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Careers", href: "/Career" },
    { name: "Blogs", href: "/#knowledge" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  return (
    <footer
      className="w-full bg-white px-6 flex lg:min-h-[50vh] min-h-auto items-center"
      style={{
        borderTop: "2px solid #064E924D",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-5">
        {/* --- Main Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 border-b pb-4">
          {/* --- Left Section (Logo, Social, Address) --- */}
          <div className="col-span-2">
            <div className="col-span-2 flex justify-start items-start text-left -mx-10">

            <Image
              src="/pablogo.png"
              alt="PAB Logo"
              width={220}
              height={100}
              className="mb-4"
            />
            </div>

            {/* Social Icons */}
            <div className="flex justify-start md:justify-start sm:justify-start space-x-3 mb-5">
              {[
                {
                  src: "/ig.png",
                  alt: "Instagram",
                  href: "https://www.instagram.com/pablearnleadandgrow?igsh=MWd3Y29uY2t3ejRmZw%3D%3D&utm_source=qr",
                },
                {
                  src: "/ln.png",
                  alt: "LinkedIn",
                  href: "https://www.linkedin.com/company/learn-lead-grow-private-limited/ ",
                },
                {
                  src: "/x.png",
                  alt: "X (Twitter)",
                  href: "https://twitter.com/yourusername",
                },
                {
                  src: "/yt.png",
                  alt: "YouTube",
                  href: "http://www.youtube.com/@LearnLeadandGrow",
                },
                {
                  src: "/fb.png",
                  alt: "Facebook",
                  href: "https://www.facebook.com/people/PAB-Learn-Lead-and-Grow/61583247424810/ ",
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
              <p className="mt-1">PAB Learn, Lead & Grow Pvt. Ltd.</p>
              <p>Indore, Madhya Pradesh, India</p>

              <p className="mt-3 font-semibold">Contact:</p>
              <p>+91 9XXXXXXXXX</p>
            </div>
          </div>

          {/* --- Right Section (Other Columns) --- */}
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {/* --- Company --- */}
            <div>
              <h3 className="font-semibold text-xs md:text-sm text-black mb-2">
                Company
              </h3>
              <ul className="space-y-1 text-[11px] md:text-xs text-black">
                {[
                  "About Us",
                  "Our Team",
                  "Partners",
                  "For Students",
                  "For Employers",
                ].map((item, i) => (
                  <li key={i}>
                    {item === "About Us" ? (
                      <Link
                        href="/AboutUs"
                        className="hover:text-blue-900 transition"
                      >
                        {item}
                      </Link>
                    ) : (
                      <span className="hover:text-blue-900 transition cursor-default">
                        {item}
                      </span>
                    )}
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
                {[
                  "MBA",
                  "BBA/B.Com",
                  "MCA",
                  "BCA",
                  "BA",
                  "MA",
                  "Professional Certifications",
                  "Diploma",
                  "MA-JMC",
                  "BA-JMC",
                  "Education",
                  "Study Abroad",
                  "Financial Services",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-900 transition">
                      {item}
                    </a>
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
                  placeholder="Email Address"
                  className="w-full border border-gray-400 bg-[rgba(6,78,146,0.1)] rounded-md px-3 py-2 text-[11px] md:text-xs focus:outline-none focus:border-blue-800"
                />
                <button className="bg-[#003087] text-white rounded-md py-2 text-[11px] md:text-xs hover:bg-[#00246e] transition">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] md:text-xs text-black mt-3">
          <p className="text-center md:text-left">
            © 2025 PAB Learn, Lead & Grow Pvt. Ltd.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-900">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

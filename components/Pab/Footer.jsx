"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createSupabaseClient } from "@/lib/supabaseClient";
import { usePathname } from "next/navigation";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Careers", href: "/Career" },
    { name: "Blogs", href: "/#knowledge" },
    { name: "Contact Us", href: "/ContactUs" },
    { name: "Gallery", href: "/#knowledge" },
  ];

  const pathname = usePathname();

  const programLinks = [
    { label: "Online MBA", category: "online-mba" },
    { label: "Executive MBA", category: "executive-mba" },
    { label: "BBA", category: "online-bba" },
    { label: "B.Com", category: "online-bcom" },
    { label: "B.Com(Hons.)", category: "online-bcom-hons" },
    { label: "B.Com(Int.)", category: "online-bcom-int" },
    { label: "MCA", category: "online-mca" },
    { label: "BCA", category: "online-bca" },
    { label: "BA", category: "online-ba" },
    { label: "MA", category: "online-ma" },
    { label: "MSc", category: "online-msc" },
    { label: "Certifications", category: "online-certification" },
    { label: "Diploma", category: "online-diploma" },
    { label: "MAJMC", category: "online-majmc" },
    { label: "BAJMC", category: "online-bajmc" },
    { label: "Integrated Program", category: "integrated-programs" },
  ];

  const universities = [
  { name: "NMIMS", path: "/nmims" },
  { name: "Manipal Jaipur", path: "/muj" },
  { name: "Amity", path: "/amity" },
  { name: "Sikkim Manipal", path: "/smu" },
  { name: "Jain", path: "/jain" },
];

  const supabase = createSupabaseClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
}
 else {
      setMessage("Subscribed successfully 🎉");
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <footer
      className="w-full bg-white px-6 flex lg:min-h-[50vh] min-h-auto items-center"
      >
      <div className="max-w-7xl mx-auto w-full px-5">
        {/* --- Main Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 border-b pb-4">
          {/* --- Left Section (Logo, Social, Address) --- */}
          <div className="col-span-2">
            <div className="col-span-2 flex justify-start items-start text-left -mx-5 mb-5">
              <Image
                src="/pablogo.png"
                alt="PAB Logo"
                width={220}
                height={150}
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
              <p>+91 7489410758</p>
            </div>
          </div>

          {/* --- Right Section (Other Columns) --- */}
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
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
                  className="bg-[#003087] text-white rounded-md py-2 text-[11px] md:text-xs hover:bg-[#00246e] transition disabled:opacity-60"
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

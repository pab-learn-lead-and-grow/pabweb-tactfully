
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/jobs-at-radhya" },
    { name: "Blogs", href: "/#blogs" },
    { name: "News and Articles", href: "/news" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "UGC Approvals", href: "/ugc-approved-universities" },
    { name: "University Response Time", href: "/university-response-time" },
    { name: "Verify Counsellors", href: "/counsellor-verification" },
    { name: "College Cards", href: "/college-cards" },
    { name: "Universities List", href: "/universitieslist" },
  ];


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


  return (
<footer className="w-full bg-white p-5 flex min-h-[90vh] xl:min-h-[50vh] items-center">
      <div className="mx-auto w-full max-w-7xl">
        {/* --- Main Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6  border-t-2 pb-2 border-b-2">
          {/* --- Left Section (Logo, Social, Address) --- */}
          <div className="col-span-2">
            <div className="col-span-2 flex justify-start items-start text-left">
              <a href="/" className="block">  
              <Image
                src="/radhyaLogo.png"
                alt="Radhya Logo"
                width={250}
                height={60}
className="block w-40 lg:w-[180px] xl:w-[220px] h-auto"
              />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start md:justify-start sm:justify-start space-x-3 mb-5">
              {[
                {
                  src: "/ig.png",
                  alt: "Instagram",
                  href: "https://www.instagram.com/radhyaeducationacademy/",
                },
                {
                  src: "/ln.png",
                  alt: "LinkedIn",
                  href: "https://www.linkedin.com/ ",
                },
                {
                  src: "/x.png",
                  alt: "X (Twitter)",
                  href: "https://x.com/radhya_REA",
                },
                {
                  src: "/yt.png",
                  alt: "YouTube",
                  href: "https://youtube.com/@radhyaeducationacademy",
                },
                {
                  src: "/fb.png",
                  alt: "Facebook",
                  href: " https://www.facebook.com/radhyaeducationacademy",
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
              <p>Gwalior, Madhya Pradesh, India</p>
              <a
                href="tel:xxxxxxxxx"
                className="text-black text-xs md:text-sm hover:text-[#3C087E] underline"
                aria-label="Call Radhya Education Academy"
              >
                +91 xxxxxxxxxx
              </a>{" "}
              ||{" "}
              <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@radhyaeducationacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs md:text-sm hover:text-[#3C087E] underline"
            >
              contact@radhyaeducationacademy.com
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
                      className="hover:text-[#3C087E] transition"
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
                      className="hover:text-[#3C087E] transition"
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
                     href={`/?category=${item.category}`}
                      scroll={false} // 👈 no jump
                      className="hover:text-[#3C087E] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Newsletter --- */}
            <NewsletterForm />
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="items-center justify-between text-[11px] md:text-xs text-black mt-3">
          <p><b>Disclaimer: </b>Radhya Education Academy is an information and counselling platform owned and operated by Radhya Education Academy Private Limited. We are not a university or degree-granting institution. All course and university information provided on this website is sourced from official and publicly available platforms and may change without prior notice. Users are advised to verify details directly with the respective university before making any decision. We do not guarantee admission, placement, or outcomes and are not liable for any decision taken based on the information provided on this platform.</p>
        </div>
        <div className=" flex flex-col md:flex-row items-center justify-between text-[11px] md:text-xs text-black mt-3">
           <p className="text-center md:text-left">
            © 2026 Radhya Education Academy Pvt. Ltd.
          </p>
          <div className="flex space-x-2 mt-2 md:mt-0">
           
            <a href="/privacy-policy" className="hover:text-[#3C087E]">
              Privacy Policy {""}||
            </a>
              <Link href="/disclaimer" className="hover:text-[#3C087E]">
              Disclaimer {""}||
            </Link>
            <a href="/terms-and-conditions" className="hover:text-[#3C087E]">
            Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import AboutUs from "@/components/Radhya/AboutUs";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "About Radhya Education Academy | Trusted Online Education Partner in India",

  description:
    "Learn about Radhya Education Academy, a trusted education partner helping students choose the right online degrees through expert counselling, university partnerships, and career guidance.",

  alternates: {
    canonical: "/about-us/",
  },

  keywords: [
    "About Radhya",
    "Radhya Education",
    "education consultancy India",
    "online education partner",
    "career counselling platform",
    "university admission guidance",
    "Radhya education services",
  ],

  openGraph: {
    title:
      "About Radhya Education Academy | Trusted Online Education Partner in India",
    description:
      "Discover the mission and vision of Radhya Education Academy and how we help students choose the right online degree programs.",
    url: `${siteUrl}/about-us/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Radhya Education Academy",
    description:
      "Learn about Radhya Education Academy and our mission to guide students in choosing the right online education programs.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Radhya Education Academy",
    url: "https://radhyaeducationacademy.com",
    logo: "https://radhyaeducationacademy.com/radhyaLogo.png",
    description:
      "Radhya Education Academy helps students and working professionals choose the right online and offline education programs through expert counselling and university partnerships.",
    areaServed: "India",
    sameAs: ["https://www.instagram.com/radhyaeducationacademy"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Educational Counselling",
      areaServed: "India",
      availableLanguage: ["English", "Hindi"],
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutUs />
    </>
  );
}

import OnlineBcomInt from "@/components/Programs/onlineBcomInt";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
 const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BCom International in India",
      description:
        "Online BCom International programs offered by top universities with global curriculum, focusing on international business, finance, trade and global markets.",
      provider: {
        "@id": "https://radhyaeducationacademy.com/#organization"
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT10H"
      },
      offers: {
        "@type": "Offer",
        category: "Online Degree Program"
      },
  }
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Online BCom International 2026: Fees, Colleges & Admission",

  description:
    "Explore Online B.Com International programs with global curriculum, top colleges, fees, and career opportunities in international business.",

  alternates: {
    canonical: "/programs/online-bcom-international/",
  },

  keywords: [
    "Online BCom International India",
    "international BCom online degree",
    "global commerce degree online",
    "UGC approved international BCom",
    "online BCom international fees India",
    "online BCom global curriculum",
    "BCom international admission 2026",
    "study international business online India",
    "global finance degree online",
  ],

  openGraph: {
    title:
      "Online BCom International 2026 | Fees, Colleges & Global Career Scope",
    description:
      "Compare Online BCom International programs with global curriculum, fees, eligibility and career opportunities in international business and finance.",
    url: `${siteUrl}/programs/online-bcom-international/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BCom International | Global Commerce Degree",
    description:
      "Find top Online BCom International programs and build a career in global business, finance, trade and multinational companies.",
  },

  robots: {
    index: true,
    follow: true,
  },

 
};

export default function OnlineBcomIntPage() {
   return (
      <>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <OnlineBcomInt />
      </>
    );
}
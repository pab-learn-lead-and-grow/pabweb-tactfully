import OnlineBa from "@/components/Programs/onlineBa";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
   const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BA in India",
      description:
        "Online BA programs offered by top UGC-approved universities in India for students after 12th with flexible learning and diverse career opportunities in humanities and social sciences.",
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

  title: "Online BA India 2026: Fees, Colleges & Admission",

  description:
    "Explore Online BA courses in India with top colleges, updated fees, eligibility, and career options in arts, humanities, and social sciences.",

  alternates: {
    canonical: "/programs/online-ba/",
  },

  keywords: [
    "Online BA India",
    "best online BA colleges",
    "UGC approved online BA",
    "online BA fees India",
    "online BA after 12th",
    "top universities for online BA",
    "online BA eligibility",
    "online BA admission 2026",
    "online BA humanities degree",
  ],

  openGraph: {
    title:
      "Online BA in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online BA universities in India with updated fees, eligibility and career opportunities in humanities and social sciences.",
    url: `${siteUrl}/programs/online-ba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online BA programs in India and build a strong career in humanities, public policy, and social sciences.",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function OnlineBaPage() {
  return (
     <>
       <script
         type="application/ld+json"
         suppressHydrationWarning
         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
       />
       <OnlineBa />
     </>
   );
}
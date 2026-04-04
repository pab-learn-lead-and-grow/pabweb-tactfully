import OnlineBajmc from "@/components/Programs/onlineBajmc";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BAJMC in India",
      description:
        "Online BAJMC programs offered by top UGC-approved universities in India for students after 12th with career opportunities in journalism, media, PR, advertising and digital communication.",
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

  title: "Online BAJMC India 2026: Fees, Colleges & Admission",

  description:
    "Explore Online BAJMC programs with top colleges, updated fees, eligibility, and career opportunities in media, journalism, and communication.",

  alternates: {
    canonical: "/programs/online-bajmc/",
  },

  keywords: [
    "Online BAJMC India",
    "online journalism degree India",
    "online mass communication course",
    "UGC approved BAJMC online",
    "online BAJMC fees India",
    "online BAJMC after 12th",
    "best colleges for journalism online",
    "BAJMC admission 2026",
    "media and communication degree online",
  ],

  openGraph: {
    title:
      "Online BAJMC in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online BAJMC universities in India with updated fees, eligibility and career opportunities in journalism, media and digital communication.",
    url: `${siteUrl}/programs/online-bajmc/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BAJMC | Journalism & Mass Communication Degree",
    description:
      "Find the best UGC-approved Online BAJMC programs in India and build a career in media, journalism, PR and digital content.",
  },

  robots: {
    index: true,
    follow: true,
  },

  
};

export default function OnlineBajmcPage() {
   return (
      <>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <OnlineBajmc />
      </>
    );
}
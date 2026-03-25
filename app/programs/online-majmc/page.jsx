import OnlineMajmc from "@/components/Programs/onlineMajmc";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online MAJMC 2026: Top Colleges, Fees, Admission & Career Opportunities",

  description:
    "Discover Online MAJMC programs with top colleges, updated fees, eligibility, and career opportunities in journalism and mass communication.",

  alternates: {
    canonical: "/online-majmc/",
  },

  keywords: [
    "Online MAJMC India",
    "online journalism masters India",
    "online mass communication masters",
    "UGC approved MAJMC online",
    "online MAJMC fees India",
    "online MAJMC after graduation",
    "best colleges for MAJMC online",
    "MAJMC admission 2026",
    "media and communication masters online",
  ],

  openGraph: {
    title:
      "Online MAJMC in India 2026 | Fees, Colleges & Career Scope",
    description:
      "Compare top Online MAJMC universities in India with updated fees, eligibility and career opportunities in journalism, media and digital communication.",
    url: `${siteUrl}/online-majmc/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MAJMC | Journalism & Mass Communication Masters",
    description:
      "Find the best UGC-approved Online MAJMC programs in India and advance your career in journalism, media, PR and digital content.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MAJMC in India",
      description:
        "Online MAJMC programs offered by top UGC-approved universities in India with career opportunities in journalism, media, PR, advertising and digital communication.",
      provider: {
        "@type": "Organization",
        name: "Radhya Education Academy",
        url: siteUrl,
      },
    }),
  },
};

export default function OnlineMajmcPage() {
  return <OnlineMajmc />;
}
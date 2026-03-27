import OnlineMcom from "@/components/Programs/onlineMcom";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online M.Com 2026: Top Colleges, Fees, Admission & Career Opportunities",

  description:
    "Explore Online M.Com colleges in India with updated fees, eligibility, and admission details. Advance your career in finance, accounting, and commerce.",

  alternates: {
    canonical: "/programs/online-mcom/",
  },

  keywords: [
    "Online MCom India",
    "best online MCom colleges",
    "UGC approved online MCom",
    "online MCom fees India",
    "online MCom after BCom",
    "top universities for online MCom",
    "online MCom eligibility",
    "online MCom admission 2026",
    "online commerce masters degree",
  ],

  openGraph: {
    title:
      "Online MCom in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online MCom universities in India with updated fees, eligibility and career opportunities in commerce, finance and accounting.",
    url: `${siteUrl}/programs/online-mcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MCom in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online MCom programs in India and build advanced expertise in accounting, finance, banking and business.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MCom in India",
      description:
        "Online MCom programs offered by top UGC-approved universities in India with specialization in accounting, finance, banking, taxation and commerce.",
      provider: {
        "@type": "Organization",
        name: "Radhya Education Academy",
        url: siteUrl,
      },
    }),
  },
};

export default function OnlineMcomPage() {
  return <OnlineMcom />;
}
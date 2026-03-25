import OnlineBcomHons from "@/components/Programs/onlineBcomHons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online B.Com (Hons.) 2026: Colleges, Fees, Admission & Career Scope",

  description:
    "Discover Online B.Com (Hons.) programs with top colleges, updated fees, eligibility, and career opportunities. Build a strong foundation in commerce.",

  alternates: {
    canonical: "/online-bcom-honours/",
  },

  keywords: [
    "Online BCom Honours India",
    "online BCom Hons colleges",
    "UGC approved online BCom Hons",
    "online BCom Honours fees India",
    "online BCom Hons after 12th",
    "difference between BCom and BCom Hons",
    "top universities for BCom Honours online",
    "BCom Hons admission 2026",
    "online accounting degree India",
  ],

  openGraph: {
    title:
      "Online BCom Honours in India 2026 | Fees, Colleges & Admission",
    description:
      "Compare top Online BCom Honours universities in India with updated fees, eligibility and career opportunities in finance, accounting and taxation.",
    url: `${siteUrl}/online-bcom-honours/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BCom Honours | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online BCom Honours programs in India and specialize in accounting, finance and business.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BCom Honours in India",
      description:
        "Online BCom Honours programs offered by top UGC-approved universities in India for students after 12th with specialization in accounting, finance, taxation and business studies.",
      provider: {
        "@type": "Organization",
        name: "Radhya Education Academy",
        url: siteUrl,
      },
    }),
  },
};

export default function OnlineBcomHonsPage() {
  return <OnlineBcomHons />;
}
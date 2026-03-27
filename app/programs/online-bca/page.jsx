import OnlineBca from "@/components/Programs/onlineBca";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online BCA 2026: Top Colleges, Fees, Admission & Career Scope",

  description:
    "Explore Online BCA programs in India with updated fees, eligibility, and admission details. Start your career in IT and software development.",

  alternates: {
    canonical: "/programs/online-bca/",
  },

  keywords: [
    "Online BCA India",
    "best online BCA colleges",
    "UGC approved online BCA",
    "online BCA fees India",
    "online BCA after 12th",
    "top universities for online BCA",
    "online BCA eligibility",
    "online BCA admission 2026",
    "online computer applications degree",
  ],

  openGraph: {
    title:
      "Online BCA in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online BCA universities in India with updated fees, eligibility and career opportunities in IT, software and data science.",
    url: `${siteUrl}/programs/online-bca/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BCA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online BCA programs in India and build a career in software development, IT and tech industry.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BCA in India",
      description:
        "Online BCA programs offered by top UGC-approved universities in India for students after 12th with career opportunities in IT, software development, data science and technology fields.",
      provider: {
        "@type": "Organization",
        name: "Radhya Education Academy",
        url: siteUrl,
      },
    }),
  },
};

export default function OnlineBcaPage() {
  return <OnlineBca />;
}
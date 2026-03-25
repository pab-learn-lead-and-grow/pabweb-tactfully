import ExecutiveMBA from "@/components/Programs/MbaWx";
import MbaWx from "@/components/Programs/MbaWx";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online MBA for Working Professionals (WX) 2026: Fees, Top Colleges, Admission & Eligibility",

  description:
    "Explore Online MBA for Working Professionals (MBA WX) in India with fees, eligibility, top universities and career benefits. Compare executive MBA programs designed for experienced professionals.",

  alternates: {
    canonical: "/online-mba-wx/",
  },

  keywords: [
    "Online MBA for working professionals",
    "MBA WX India",
    "executive MBA online India",
    "online MBA with work experience",
    "UGC approved executive MBA online",
    "MBA for professionals India",
    "online MBA after work experience",
    "flexible MBA for working professionals",
    "executive management program online",
  ],

  openGraph: {
    title:
      "Executive MBA 2026: Top Colleges, Fees, Admission, Eligibility & Career Growth",
    description:
      "Explore Executive MBA programs for working professionals with top colleges, fees, eligibility, and career opportunities.",
    url: `${siteUrl}/online-mba-wx/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MBA WX | Executive MBA for Professionals",
    description:
      "Find the best Online MBA programs for working professionals and boost your career with leadership and management skills.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MBA for Working Professionals (WX)",
      description:
        "Online MBA WX programs designed for working professionals with flexible learning, leadership development and career advancement opportunities.",
      provider: {
        "@type": "Organization",
        name: "Radhya Education Academy",
        url: siteUrl,
      },
    }),
  },
};

export default function MbaWxPage() {
  return <ExecutiveMBA />;
}
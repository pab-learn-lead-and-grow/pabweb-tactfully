import OnlineMba from "@/components/Programs/onlineMba";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online MBA in India 2026: Fees, Top Colleges, Admission, Eligibility & Placements",

  description:
    "Explore Online MBA in India with fees, eligibility, top universities, syllabus and placement opportunities. Compare UGC-approved colleges and choose the best MBA program.",

  alternates: {
    canonical: "/programs/online-mba/",
  },

  keywords: [
    "Online MBA India",
    "best online MBA colleges",
    "UGC approved online MBA",
    "online MBA fees India",
    "distance MBA vs online MBA",
    "top universities for online MBA",
    "online MBA eligibility",
    "online MBA admission 2026",
  ],

  openGraph: {
    title:
      "Online MBA 2026: Top Universities, Fees, Admission, Eligibility & Placements",
    description:
      "Explore top Online MBA colleges in India with updated fees, eligibility, admission process, and placements. Compare universities and choose the best MBA program.",
    url: `${siteUrl}/programs/online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MBA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online MBA programs in India and apply with expert guidance.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function OnlineMbaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Online MBA in India",
    description:
      "Online MBA programs offered by top UGC-approved universities in India with flexible learning and career growth opportunities.",
    provider: {
      "@type": "Organization",
      name: "Radhya Education Academy",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <OnlineMba />
    </>
  );
}
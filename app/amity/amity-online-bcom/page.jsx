import AmityBcom from "@/components/Amity/AmityBcom";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity University Online BCom Fees & Admission 2026",

  description:
    "Amity Online BCom is a UGC-approved undergraduate commerce degree offering flexible online learning, industry-focused curriculum, and career opportunities in finance, accounting, and business.",

  alternates: {
    canonical: "/amity/amity-online-bcom/",
  },

  keywords: [
    "Amity Online BCom",
    "Amity University online BCom",
    "Amity distance BCom",
    "Amity online commerce degree",
    "Online BCom India",
    "UGC approved online BCom",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online BCom | UGC-Approved Commerce Degree",
    description:
      "Explore Amity University Online BCom program with flexible learning, industry-relevant curriculum, and a UGC-approved undergraduate commerce degree.",
    url: `${siteUrl}/amity/amity-online-bcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online BCom | UGC Approved Program",
    description:
      "Apply for Amity University Online BCom and earn a UGC-approved commerce degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityBcom />;
}
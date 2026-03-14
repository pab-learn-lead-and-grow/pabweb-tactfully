import AmityMcom from "@/components/Amity/AmityMcom";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online MCom | UGC-Approved MCom Degree Program",

  description:
    "Amity Online MCom is a UGC-approved postgraduate commerce degree offering flexible online learning, industry-focused curriculum, and career opportunities in finance, accounting, and business.",

  alternates: {
    canonical: "/amity/amity-online-mcom/",
  },

  keywords: [
    "Amity Online MCom",
    "Amity University online MCom",
    "Amity distance MCom",
    "Amity online commerce postgraduate degree",
    "Online MCom India",
    "UGC approved online MCom",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online MCom | UGC-Approved Commerce Degree",
    description:
      "Explore Amity University Online MCom program with flexible learning, industry-relevant curriculum, and a UGC-approved postgraduate commerce degree.",
    url: `${siteUrl}/amity/amity-online-mcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MCom | UGC Approved Program",
    description:
      "Apply for Amity University Online MCom and earn a UGC-approved postgraduate commerce degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityMcom />;
}
import AmityBcomHons from "@/components/Amity/AmityBcomHons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online BCom Honours | UGC-Approved BCom (Hons) Degree",

  description:
    "Amity Online BCom Honours is a UGC-approved undergraduate commerce degree offering flexible online learning, advanced commerce curriculum, and career opportunities in finance, accounting, and business.",

  alternates: {
    canonical: "/amity/amity-online-bcom-honours/",
  },

  keywords: [
    "Amity Online BCom Honours",
    "Amity University online BCom Honours",
    "Amity distance BCom Honours",
    "Amity honours commerce degree",
    "Online BCom Honours India",
    "UGC approved online BCom Honours",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online BCom Honours | UGC-Approved Commerce Degree",
    description:
      "Explore Amity University Online BCom Honours program with flexible learning, advanced commerce curriculum, and a UGC-approved undergraduate degree.",
    url: `${siteUrl}/amity/amity-online-bcom-honours/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online BCom Honours | UGC Approved Program",
    description:
      "Apply for Amity University Online BCom Honours and earn a UGC-approved commerce degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityBcomHons />;
}
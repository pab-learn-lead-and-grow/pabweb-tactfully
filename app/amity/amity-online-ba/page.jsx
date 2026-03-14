import AmityBa from "@/components/Amity/AmityBa";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online BA | UGC-Approved BA Degree Program",

  description:
    "Amity Online BA is a UGC-approved undergraduate arts degree offering flexible online learning, industry-focused curriculum, and academic support for career development.",

  alternates: {
    canonical: "/amity/amity-online-ba/",
  },

  keywords: [
    "Amity Online BA",
    "Amity University online BA",
    "Amity distance BA",
    "Amity online arts degree",
    "Online BA India",
    "UGC approved online BA",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online BA | UGC-Approved Arts Degree",
    description:
      "Explore Amity University Online BA program with flexible learning, industry-relevant curriculum, and a UGC-approved undergraduate arts degree.",
    url: `${siteUrl}/amity/amity-online-ba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online BA | UGC Approved Program",
    description:
      "Apply for Amity University Online BA and earn a UGC-approved arts degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityBa />;
}
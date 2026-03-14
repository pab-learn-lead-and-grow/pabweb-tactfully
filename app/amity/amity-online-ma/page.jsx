import AmityMa from "@/components/Amity/AmityMa";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online MA | UGC-Approved MA Degree Program",

  description:
    "Amity Online MA is a UGC-approved postgraduate arts degree offering flexible online learning, industry-focused curriculum, and academic support for career growth.",

  alternates: {
    canonical: "/amity/amity-online-ma/",
  },

  keywords: [
    "Amity Online MA",
    "Amity University online MA",
    "Amity distance MA",
    "Amity online postgraduate arts degree",
    "Online MA India",
    "UGC approved online MA",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online MA | UGC-Approved Postgraduate Arts Degree",
    description:
      "Explore Amity University Online MA program with flexible learning, industry-relevant curriculum, and a UGC-approved postgraduate degree.",
    url: `${siteUrl}/amity/amity-online-ma/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MA | UGC Approved Program",
    description:
      "Apply for Amity University Online MA and earn a UGC-approved postgraduate arts degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityMa />;
}
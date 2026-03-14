import AmityBca from "@/components/Amity/AmityBca";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online BCA | UGC-Approved BCA Degree Program",

  description:
    "Amity Online BCA is a UGC-approved undergraduate computer applications degree offering flexible online learning, industry-focused curriculum, and career opportunities in IT and software development.",

  alternates: {
    canonical: "/amity/amity-online-bca/",
  },

  keywords: [
    "Amity Online BCA",
    "Amity University online BCA",
    "Amity distance BCA",
    "Amity online computer applications degree",
    "Online BCA India",
    "UGC approved online BCA",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online BCA | UGC-Approved Computer Applications Degree",
    description:
      "Explore Amity University Online BCA program with flexible learning, industry-relevant curriculum, and a UGC-approved undergraduate degree.",
    url: `${siteUrl}/amity/amity-online-bca/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online BCA | UGC Approved Program",
    description:
      "Apply for Amity University Online BCA and earn a UGC-approved computer applications degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityBca />;
}
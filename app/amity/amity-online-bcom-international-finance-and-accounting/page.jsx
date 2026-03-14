import AmityBcomInt from "@/components/Amity/AmityBcomInt";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Amity Online BCom International Finance & Accounting | UGC-Approved Degree",

  description:
    "Amity Online BCom International Finance & Accounting is a UGC-approved global commerce degree offering flexible online learning, international curriculum, and career opportunities in finance and accounting.",

  alternates: {
    canonical:
      "/amity/amity-online-bcom-international-finance-and-accounting/",
  },

  keywords: [
    "Amity Online BCom International",
    "Amity University online BCom International",
    "Amity international commerce degree",
    "Amity distance BCom International",
    "Online BCom International India",
    "UGC approved online international degree",
    "Amity online programs",
  ],

  openGraph: {
    title:
      "Amity Online BCom International Finance & Accounting | UGC-Approved Degree",
    description:
      "Explore Amity University Online BCom International Finance & Accounting program with flexible learning and global commerce curriculum.",
    url: `${siteUrl}/amity/amity-online-bcom-international-finance-and-accounting/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Amity Online BCom International Finance & Accounting | UGC Approved",
    description:
      "Apply for Amity University Online BCom International Finance & Accounting and earn a globally focused commerce degree.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityBcomInt />;
}
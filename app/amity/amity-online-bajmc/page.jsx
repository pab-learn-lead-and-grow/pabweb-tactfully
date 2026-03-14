import AmityBajmc from "@/components/Amity/AmityBajmc";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online BAJMC | UGC-Approved Journalism & Mass Communication Degree",

  description:
    "Amity Online BAJMC is a UGC-approved journalism and mass communication degree offering flexible online learning, practical media curriculum, and career opportunities in journalism and communication.",

  alternates: {
    canonical: "/amity/amity-online-bajmc/",
  },

  keywords: [
    "Amity Online BAJMC",
    "Amity University online BAJMC",
    "Amity distance BAJMC",
    "Amity online journalism degree",
    "Online BAJMC India",
    "UGC approved online BAJMC",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online BAJMC | UGC-Approved Journalism Degree",
    description:
      "Explore Amity Online BAJMC, a flexible UGC-approved journalism and mass communication degree designed for modern media careers.",
    url: `${siteUrl}/amity/amity-online-bajmc/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online BAJMC | UGC Approved Journalism Degree",
    description:
      "Discover Amity Online BAJMC, a UGC-approved journalism and mass communication program with flexible learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AmityBajmcPage() {
  return <AmityBajmc />;
}
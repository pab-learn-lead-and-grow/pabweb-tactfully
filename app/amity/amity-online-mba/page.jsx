import AmityMba from "@/components/Amity/AmityMba";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online MBA | UGC-Approved MBA Degree Program",

  description:
    "Amity Online MBA is a UGC-approved management degree offering flexible online learning, industry-focused specializations, and career opportunities for working professionals.",

  alternates: {
    canonical: "/amity/amity-online-mba/",
  },

  keywords: [
    "Amity Online MBA",
    "Amity University online MBA",
    "Amity distance MBA",
    "Amity online management degree",
    "Online MBA India",
    "UGC approved online MBA",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online MBA | UGC-Approved Management Degree",
    description:
      "Explore Amity University Online MBA program with flexible learning, industry-relevant specializations, and a UGC-approved management degree.",
    url: `${siteUrl}/amity/amity-online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MBA | UGC Approved Program",
    description:
      "Apply for Amity University Online MBA and earn a UGC-approved management degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityMba />;
}
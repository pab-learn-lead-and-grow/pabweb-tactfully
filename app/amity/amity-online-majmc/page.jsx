import AmityMajmc from "@/components/Amity/AmityMajmc";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online MAJMC | UGC-Approved Journalism & Mass Communication Degree",

  description:
    "Amity Online MAJMC is a UGC-approved postgraduate journalism and mass communication degree offering flexible online learning, industry-focused curriculum, and career opportunities in media and communication.",

  alternates: {
    canonical: "/amity/amity-online-majmc/",
  },

  keywords: [
    "Amity Online MAJMC",
    "Amity University online MAJMC",
    "Amity distance MAJMC",
    "Amity online journalism degree",
    "Online MAJMC India",
    "UGC approved online MAJMC",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online MAJMC | UGC-Approved Journalism & Mass Communication Degree",
    description:
      "Explore Amity University Online MAJMC program with flexible learning, industry-relevant curriculum, and a UGC-approved postgraduate degree.",
    url: `${siteUrl}/amity/amity-online-majmc/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MAJMC | UGC Approved Program",
    description:
      "Apply for Amity University Online MAJMC and earn a UGC-approved journalism and mass communication degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityMajmc />;
}
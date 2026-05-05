import AmityBa from "@/components/Amity/AmityBa";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

   title: "Amity University Online BA Fees & Admission 2026",

  description:
    "Amity Online BA is a UGC-approved undergraduate arts degree offering flexible online learning, industry-focused curriculum, and academic support for career development.",

  alternates: {
    canonical: `${siteUrl}/amity/amity-online-ba/`,
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
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Amity University", item: `${siteUrl}/amity/` },
          { name: "Amity Online BA", item: `${siteUrl}/amity/amity-online-ba/` },
        ]}
      />
      <AmityBa />
    </>
  );
}

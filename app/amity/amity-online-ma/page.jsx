import AmityMa from "@/components/Amity/AmityMa";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity University Online MA Fees & Admission 2026",

  description:
    "Explore Amity University Online MA program with specializations in humanities and social sciences, flexible postgraduate learning, placement support, and UGC-entitled online education.",

  alternates: {
    canonical: `https://radhyaeducationacademy.com/amity/amity-online-ma/`,
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
    url: `https://radhyaeducationacademy.com/amity/amity-online-ma/`,
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
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Amity University", item: `${siteUrl}/amity/` },
          { name: "Amity Online MA", item: `${siteUrl}/amity/amity-online-ma/` },
        ]}
      />
      <AmityMa />
    </>
  );
}

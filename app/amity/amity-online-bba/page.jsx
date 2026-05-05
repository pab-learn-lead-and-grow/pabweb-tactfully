import AmityBba from "@/components/Amity/AmityBba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

   title: "Amity University Online BBA Fees & Admission 2026",

  description:
    "Amity Online BBA is a UGC-approved undergraduate business administration degree offering flexible online learning, industry-focused curriculum, and career opportunities in management and business.",

  alternates: {
    canonical: `${siteUrl}/amity/amity-online-bba/`,
  },

  keywords: [
    "Amity Online BBA",
    "Amity University online BBA",
    "Amity distance BBA",
    "Amity online management degree",
    "Online BBA India",
    "UGC approved online BBA",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online BBA | UGC-Approved Business Administration Degree",
    description:
      "Explore Amity University Online BBA program with flexible learning, industry-relevant curriculum, and a UGC-approved undergraduate business degree.",
    url: `${siteUrl}/amity/amity-online-bba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online BBA | UGC Approved Program",
    description:
      "Apply for Amity University Online BBA and earn a UGC-approved business administration degree with flexible online learning.",
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
          { name: "Amity Online BBA", item: `${siteUrl}/amity/amity-online-bba/` },
        ]}
      />
      <AmityBba />
    </>
  );
}

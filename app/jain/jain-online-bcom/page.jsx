import JainBcom from "@/components/Jain/JainBcom";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN University Online BCom Fees & Admission 2026",

  description:
    "JAIN Online BCom is a UGC-approved undergraduate commerce degree offering flexible online learning, industry-relevant curriculum, and career opportunities in finance, accounting, and business.",

  alternates: {
    canonical: `${siteUrl}/jain/jain-online-bcom/`,
  },

  keywords: [
    "JAIN Online BCom",
    "JAIN University online BCom",
    "JAIN distance BCom",
    "JAIN online commerce degree",
    "Online BCom India",
    "UGC approved online BCom",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online BCom | UGC-Approved Commerce Degree",
    description:
      "Explore JAIN University Online BCom program with flexible online learning, industry-focused curriculum, and a UGC-approved undergraduate commerce degree.",
    url: `${siteUrl}/jain/jain-online-bcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online BCom | UGC Approved Program",
    description:
      "Apply for JAIN University Online BCom and earn a UGC-approved commerce degree with flexible online learning.",
  },
};

export default function Jain() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "JAIN University", item: `${siteUrl}/jain/` },
          { name: "JAIN Online BCom", item: `${siteUrl}/jain/jain-online-bcom/` },
        ]}
      />
      <JainBcom />
    </>
  );
}

import JainBba from "@/components/Jain/JainBba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN University Online BBA Fees & Admission 2026",

  description:
    "JAIN Online BBA is a UGC-approved undergraduate business administration degree offering flexible online learning, industry-focused curriculum, and career opportunities for aspiring business professionals.",

  alternates: {
    canonical: `${siteUrl}/jain/jain-online-bba/`,
  },

  keywords: [
    "JAIN Online BBA",
    "JAIN University online BBA",
    "JAIN distance BBA",
    "JAIN online business administration degree",
    "Online BBA India",
    "UGC approved online BBA",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online BBA | UGC-Approved Business Administration Degree",
    description:
      "Explore JAIN University Online BBA program with flexible online learning, industry-relevant curriculum, and a UGC-approved undergraduate business degree.",
    url: `${siteUrl}/jain/jain-online-bba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online BBA | UGC Approved Program",
    description:
      "Apply for JAIN University Online BBA and earn a UGC-approved business administration degree with flexible online learning.",
  },
};

export default function Jain() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "JAIN University", item: `${siteUrl}/jain/` },
          { name: "JAIN Online BBA", item: `${siteUrl}/jain/jain-online-bba/` },
        ]}
      />
      <JainBba />
    </>
  );
}

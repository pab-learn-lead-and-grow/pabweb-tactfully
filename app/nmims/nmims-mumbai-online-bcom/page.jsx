import NmimsBcom from "@/components/Nmims/NmimsBcom";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Online BCom 2026: Fees, Admission & Specializations",

  description:
    "NMIMS Online BCom from SVKM's Narsee Monjee Institute of Management Studies offers a UGC-approved commerce degree with flexible online learning, industry-relevant curriculum, and career support for students and working professionals.",

  alternates: {
    canonical: `${siteUrl}/nmims/nmims-mumbai-online-bcom/`,
  },

  keywords: [
    "NMIMS Online BCom",
    "NMIMS distance BCom",
    "NMIMS online commerce degree",
    "NMIMS commerce programs",
    "Online BCom India",
    "Distance learning BCom",
    "UGC approved online BCom",
  ],

  openGraph: {
    title: "NMIMS Online BCom 2026: Fees, Admission & Specializations",
    description:
      "Explore NMIMS Online BCom with flexible learning, industry-focused curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/nmims/nmims-mumbai-online-bcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS Online BCom | Radhya Education Academy",
    description:
      "Learn about NMIMS Online BCom and explore flexible UGC-approved commerce degree programs.",
  },
};

export default function NmimsOnlineBcomPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "NMIMS University", item: `${siteUrl}/nmims/` },
          { name: "NMIMS Online BCom", item: `${siteUrl}/nmims/nmims-mumbai-online-bcom/` },
        ]}
      />
      <NmimsBcom />
    </>
  );
}

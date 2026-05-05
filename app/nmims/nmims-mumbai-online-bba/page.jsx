import NmimsBba from "@/components/Nmims/NmimsBba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Online BBA 2026: Fees, Admission & Specializations",

  description:
    "NMIMS Online BBA from SVKM's Narsee Monjee Institute of Management Studies offers a UGC-approved business administration degree with flexible online learning, industry-relevant curriculum, and career support for students.",

  alternates: {
    canonical: `${siteUrl}/nmims/nmims-mumbai-online-bba/`,
  },

  keywords: [
    "NMIMS Online BBA",
    "NMIMS distance BBA",
    "NMIMS online BBA program",
    "NMIMS management programs",
    "Online BBA India",
    "Distance learning BBA",
    "UGC approved online BBA",
  ],

  openGraph: {
    title: "NMIMS Online BBA 2026: Fees, Admission & Specializations",
    description:
      "Explore NMIMS Online BBA with flexible learning, industry-focused curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/nmims/nmims-mumbai-online-bba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS Online BBA | Radhya Education Academy",
    description:
      "Learn about NMIMS Online BBA and explore flexible UGC-approved business administration programs.",
  },
};

export default function NmimsOnlineBbaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "NMIMS University", item: `${siteUrl}/nmims/` },
          { name: "NMIMS Online BBA", item: `${siteUrl}/nmims/nmims-mumbai-online-bba/` },
        ]}
      />
      <NmimsBba />
    </>
  );
}

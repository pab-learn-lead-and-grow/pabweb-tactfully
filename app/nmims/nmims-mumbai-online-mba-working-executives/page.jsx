import NmimsWx from "@/components/Nmims/NmimsWx";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Executive MBA 2026: Fees & Admission (MBA WX)",

  description:
    "NMIMS MBA WX is an executive MBA designed for working professionals, offering flexible learning, industry-focused curriculum, and career advancement through the NMIMS online learning platform.",

  alternates: {
    canonical: `${siteUrl}/nmims/nmims-mumbai-online-mba-working-executives/`,
  },

  keywords: [
    "NMIMS MBA WX",
    "NMIMS Executive MBA WX",
    "NMIMS working professionals MBA",
    "NMIMS online executive MBA",
    "MBA for working professionals India",
    "NMIMS WX MBA program",
    "NMIMS executive online programs",
  ],

  openGraph: {
    title: "NMIMS Executive MBA 2026: Fees & Admission (MBA WX)",
    description:
      "Explore NMIMS MBA WX designed for working professionals with flexible learning and industry-focused curriculum.",
    url: `${siteUrl}/nmims/nmims-mumbai-online-mba-working-executives/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS Executive MBA 2026 | Radhya Education Academy",
    description:
      "Discover NMIMS MBA WX executive program designed for working professionals.",
  },
};

export default function NmimsWxPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "NMIMS University", item: `${siteUrl}/nmims/` },
          { name: "NMIMS Executive MBA (WX)", item: `${siteUrl}/nmims/nmims-mumbai-online-mba-working-executives/` },
        ]}
      />
      <NmimsWx />
    </>
  );
}

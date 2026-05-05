import NmimsPage from "@/components/Nmims/NmimsPage";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Online Programs 2026: Fees, Courses & Admission",

  description:
    "Explore NMIMS online programs including MBA, BBA, and BCom. SVKM's Narsee Monjee Institute of Management Studies offers UGC-approved degrees with NAAC A++ accreditation and industry-focused curriculum.",

  alternates: {
    canonical: `${siteUrl}/nmims/`,
  },

  openGraph: {
    title: "NMIMS Online Programs 2026: Fees, Courses & Admission",
    description:
      "Explore UGC-approved NMIMS online programs including MBA, BBA, and BCom with NAAC A++ accreditation.",
    url: `${siteUrl}/nmims/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS Online Programs | Radhya Education Academy",
    description:
      "Discover NMIMS online MBA, BBA, and BCom programs with UGC approval and NAAC A++ accreditation.",
  },
};

export default function NmimsUniversityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "NMIMS University", item: `${siteUrl}/nmims/` },
        ]}
      />
      <NmimsPage />
    </>
  );
}

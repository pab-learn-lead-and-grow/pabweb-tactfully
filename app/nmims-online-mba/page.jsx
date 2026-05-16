import NmimsMbaNew from "@/components/Nmims/NmimsOnlineMba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "NMIMS Online MBA 2026: Fees, Admission, Placements & Review",
  description:
    "NMIMS Online MBA 2026: fees, admission process, eligibility, placements, specializations & reviews. Check if it’s the right choice for working professionals in India.",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/nmims-online-mba/",
  },
    keywords: [
    "NMIMS Online MBA",
    "NMIMS distance MBA",
    "NMIMS online degree",
    "NMIMS management programs",
    "Online MBA India",
    "Distance learning MBA",
    "UGC approved online MBA",
  ],
  openGraph: {
  title: "NMIMS Online MBA 2026: Fees, Admission & Specializations",
  description:
    "NMIMS Online MBA helps you earn a UGC-approved management degree online with flexible learning and industry-relevant curriculum.",
  url: "https://radhyaeducationacademy.com/nmims-online-mba/",
  siteName: "Radhya Education Academy",
  type: "website",
},
  twitter: {
    card: "summary",
    title: "Radhya Education Academy - Online Programs",
    description: "Explore UGC-approved online degree programs from top universities",
  }
};
export default function Nmims() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", item: siteUrl },
                    { name: "NMIMS University", item: `${siteUrl}/nmims/` },
                    { name: "NMIMS Online MBA", item: `${siteUrl}/nmims-online-mba/` },
                ]}
            />
            <NmimsMbaNew />
        </>
    );
}

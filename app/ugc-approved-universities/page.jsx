import UgcUniversitiesSection from "@/components/UgcApprovedUniversities";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "UGC Approved Universities | Recognised Online & Distance Programs",

  description:
    "Explore UGC-recognised universities offering online and distance education programs in India. Ensure credibility, nationwide validity, and industry-relevant degrees.",

  alternates: {
    canonical: "/ugc-approved-universities/",
  },

  keywords: [
    "UGC approved universities",
    "UGC recognised universities India",
    "Online degree UGC approved",
    "Distance education UGC universities",
    "UGC approved online MBA universities",
  ],

  openGraph: {
    title:
      "UGC Approved Universities | Radhya Education Academy",

    description:
      "Discover universities recognised by the University Grants Commission (UGC) offering trusted online and distance learning programs.",

    url: `${siteUrl}/ugc-approved-universities/`,

    siteName: "Radhya Education Academy",

    type: "website",
  },

  twitter: {
    card: "summary",

    title:
      "UGC Approved Universities | Radhya Education Academy",

    description:
      "Explore verified UGC-approved universities offering credible online and distance education programs.",
  },
};

export default function UgcApprovedUniversitiesPage() {
  return <UgcUniversitiesSection />;
}
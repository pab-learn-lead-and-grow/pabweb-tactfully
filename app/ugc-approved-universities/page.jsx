import UgcUniversitiesSection from "@/components/UgcApprovedUniversities";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "UGC Approved Universities in India 2026 | Online & Distance List",

  description:
    " Explore UGC approved universities in India for online and distance education. Check verified list, courses, eligibility, and choose the right university.",

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
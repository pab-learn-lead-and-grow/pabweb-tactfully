import BennettMba from "@/components/Bennett/BennettMba";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Bennett University Online MBA 2026: Fees, Admission, Eligibility, Review & Placement",

  description:
    "Check Bennett University Online MBA fees, eligibility, syllabus, placements & reviews for 2026. Compare with top universities and apply with expert guidance.",

  alternates: {
    canonical: "/bennett/bennett-online-mba/",
  },

  keywords: [
    "Bennett Online MBA",
    "Bennett University online MBA",
    "Bennett distance MBA",
    "Bennett online management degree",
    "Online MBA India",
    "UGC approved online MBA",
    "Bennett MBA fees",
    "Bennett University Noida MBA",
  ],

  openGraph: {
    title: "Bennett University Online MBA 2026 | Fees, Admission & Review",
    description:
      "Explore Bennett Online MBA with updated fees, eligibility, syllabus and career opportunities.",
    url: `${siteUrl}/bennett/bennett-online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bennett Online MBA | UGC Approved Program",
    description:
      "Apply for Bennett University Online MBA and build leadership skills with a flexible, industry-aligned management program.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Bennett() {
  return <BennettMba />;
}
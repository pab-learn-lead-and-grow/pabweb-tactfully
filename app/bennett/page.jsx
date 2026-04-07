import BennettPage from "@/components/Bennett/BennettPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Bennett University Online Programs | UGC Approved Courses",

  description:
    "Explore Bennett University Online courses including MBA & BBA with updated 2026 fees, eligibility, admission process, and reviews. Compare programs and get expert counselling today.",

  alternates: {
    canonical: "/bennett/",
  },

  keywords: [
    "Bennett University online",
    "Bennett University online courses",
    "Bennett online degree programs",
    "Bennett online MBA",
    "Bennett distance education",
    "UGC approved university India",
    "Bennett University courses",
  ],

  openGraph: {
    title:
      "Bennett University Online Courses 2026 | MBA, BBA, Fees & Admission",
    description:
      "Explore UGC-approved Bennett University Online MBA & BBA programs with fees, eligibility, and career opportunities.",
    url: `${siteUrl}/bennett/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Bennett University Online Courses 2026",
    description:
      "Explore Bennett Online MBA & BBA programs with fees, admission details, and career opportunities",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Bennett() {
  return <BennettPage />;
}
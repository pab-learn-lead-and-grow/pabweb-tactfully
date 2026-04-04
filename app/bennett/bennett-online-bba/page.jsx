import BennettBba from "@/components/Bennett/BennettBba";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Bennett University Online BBA Fees & Admission 2026",

  description:
    "Explore Bennett University Online BBA with updated fees, eligibility, syllabus and career opportunities. Start your business career with expert guidance.",

  alternates: {
    canonical: "/bennett/bennett-online-bba/",
  },

  keywords: [
    "Bennett Online BBA",
    "Bennett University online BBA",
    "Bennett distance BBA",
    "Bennett online management degree",
    "Online BBA India",
    "UGC approved online BBA",
    "Bennett online programs",
    "Bennett University Noida BBA",
  ],

  openGraph: {
    title: "Bennett University Online BBA 2026 | Fees, Admission & Review",
    description:
      "Check Bennett Online BBA fees, eligibility, syllabus and career opportunities.",
    url: `${siteUrl}/bennett/bennett-online-bba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bennett Online BBA | UGC Approved Program",
    description:
      "Apply for Bennett University Online BBA and earn a UGC-approved business administration degree with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Bennett() {
  return <BennettBba />;
}
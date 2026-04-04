import JainMba from "@/components/Jain/JainMba";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN University Online MBA Fees & Admission 2026",

  description:
    "JAIN Online MBA is a UGC-approved management degree designed for working professionals. Learn through flexible online classes, industry-focused curriculum, and career-oriented specializations.",

  alternates: {
    canonical: "/jain/jain-online-mba/",
  },

  keywords: [
    "JAIN Online MBA",
    "JAIN University online MBA",
    "JAIN distance MBA",
    "JAIN online management degree",
    "Online MBA India",
    "UGC approved online MBA",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online MBA | UGC-Approved MBA Degree Program",
    description:
      "Explore JAIN University Online MBA program with flexible online learning, industry-relevant curriculum, and a UGC-approved management degree.",
    url: `${siteUrl}/jain/jain-online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online MBA | UGC Approved MBA Program",
    description:
      "Apply for JAIN University Online MBA and earn a UGC-approved management degree with flexible online learning.",
  },
};

export default function Jain() {
  return <JainMba />;
}
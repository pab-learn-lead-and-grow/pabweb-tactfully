import JainMcom from "@/components/Jain/JainMcom";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN University Online MCom Fees & Admission 2026",

  description:
    "JAIN Online MCom is a UGC-approved postgraduate commerce degree offering flexible online learning, industry-focused curriculum, and strong career support for commerce graduates.",

  alternates: {
    canonical: "/jain/jain-online-mcom/",
  },

  keywords: [
    "JAIN Online MCom",
    "JAIN University online MCom",
    "JAIN distance MCom",
    "JAIN online commerce postgraduate degree",
    "Online MCom India",
    "UGC approved online MCom",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online MCom | UGC-Approved Commerce Degree",
    description:
      "Explore JAIN University Online MCom program with flexible online learning, industry-relevant curriculum, and UGC-approved postgraduate degree.",
    url: `${siteUrl}/jain/jain-online-mcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online MCom | UGC Approved Program",
    description:
      "Apply for JAIN University Online MCom and earn a UGC-approved postgraduate commerce degree with flexible online learning.",
  },
};

export default function Jain() {
  return <JainMcom />;
}
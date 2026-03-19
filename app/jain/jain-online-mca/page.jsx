import JainMca from "@/components/Jain/JainMca";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN Online MCA | UGC-Approved MCA Degree Program",

  description:
    "JAIN Online MCA is a UGC-approved postgraduate computer applications degree offering flexible online learning, industry-focused curriculum, and career opportunities in the IT sector.",

  alternates: {
    canonical: "/jain/jain-online-mca/",
  },

  keywords: [
    "JAIN Online MCA",
    "JAIN University online MCA",
    "JAIN distance MCA",
    "JAIN online computer applications degree",
    "Online MCA India",
    "UGC approved online MCA",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online MCA | UGC-Approved Computer Applications Degree",
    description:
      "Explore JAIN University Online MCA program with flexible online learning, industry-relevant curriculum, and a UGC-approved postgraduate degree.",
    url: `${siteUrl}/jain/jain-online-mca/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online MCA | UGC Approved Program",
    description:
      "Apply for JAIN University Online MCA and earn a UGC-approved postgraduate degree in computer applications with flexible learning.",
  },
};

export default function Jain() {
  return <JainMca />;
}
import JainMa from "@/components/Jain/JainMa";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN Online MA | UGC-Approved MA Degree Program",

  description:
    "JAIN Online MA is a UGC-approved postgraduate arts degree offering flexible online learning, industry-relevant curriculum, and academic support for career advancement.",

  alternates: {
    canonical: "/jain/jain-online-ma/",
  },

  keywords: [
    "JAIN Online MA",
    "JAIN University online MA",
    "JAIN distance MA",
    "JAIN online postgraduate arts degree",
    "Online MA India",
    "UGC approved online MA",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online MA | UGC-Approved Postgraduate Arts Degree",
    description:
      "Explore JAIN University Online MA program with flexible online learning, UGC-approved degree recognition, and industry-focused curriculum.",
    url: `${siteUrl}/jain/jain-online-ma/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online MA | UGC Approved Program",
    description:
      "Apply for JAIN University Online MA and earn a UGC-approved postgraduate arts degree with flexible online learning.",
  },
};

export default function Jain() {
  return <JainMa />;
}
import JainBca from "@/components/Jain/JainBca";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN Online BCA | UGC-Approved BCA Degree Program",

  description:
    "JAIN Online BCA is a UGC-approved undergraduate computer applications degree offering flexible online learning, industry-relevant curriculum, and career opportunities in the IT and software sector.",

  alternates: {
    canonical: "/jain/jain-online-bca/",
  },

  keywords: [
    "JAIN Online BCA",
    "JAIN University online BCA",
    "JAIN distance BCA",
    "JAIN online computer applications degree",
    "Online BCA India",
    "UGC approved online BCA",
    "JAIN University online programs",
  ],

  openGraph: {
    title: "JAIN Online BCA | UGC-Approved Computer Applications Degree",
    description:
      "Explore JAIN University Online BCA program with flexible online learning, industry-focused curriculum, and a UGC-approved undergraduate degree.",
    url: `${siteUrl}/jain/jain-online-bca/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN Online BCA | UGC Approved Program",
    description:
      "Apply for JAIN University Online BCA and earn a UGC-approved computer applications degree with flexible online learning.",
  },
};

export default function Jain() {
  return <JainBca />;
}
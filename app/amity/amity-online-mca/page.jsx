import AmityMca from "@/components/Amity/AmityMca";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity University Online MCA Fees & Admission 2026",

  description:
    "Amity Online MCA is a UGC-approved postgraduate computer applications degree offering flexible online learning, industry-focused curriculum, and career opportunities in IT and software development.",

  alternates: {
    canonical: "/amity/amity-online-mca/",
  },

  keywords: [
    "Amity Online MCA",
    "Amity University online MCA",
    "Amity distance MCA",
    "Amity online computer applications degree",
    "Online MCA India",
    "UGC approved online MCA",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online MCA | UGC-Approved Computer Applications Degree",
    description:
      "Explore Amity University Online MCA program with flexible learning, industry-relevant curriculum, and a UGC-approved postgraduate degree.",
    url: `${siteUrl}/amity/amity-online-mca/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MCA | UGC Approved Program",
    description:
      "Apply for Amity University Online MCA and earn a UGC-approved postgraduate degree in computer applications with flexible online learning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityMca />;
}
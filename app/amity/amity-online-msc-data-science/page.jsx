import AmityMsc from "@/components/Amity/AmityMsc";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity University Online MSc Fees & Admission 2026",

  description:
    "Amity Online MSc in Data Science is a UGC-approved postgraduate program offering flexible online learning, industry-relevant curriculum, and career opportunities in analytics and data science.",

  alternates: {
    canonical: `${siteUrl}/amity/amity-online-msc-data-science/`,
  },

  keywords: [
    "Amity Online MSc Data Science",
    "Amity University online MSc",
    "Amity distance MSc",
    "Amity online data science degree",
    "Online MSc Data Science India",
    "UGC approved online MSc",
    "Amity online programs",
  ],

  openGraph: {
    title: "Amity Online MSc Data Science | UGC-Approved Degree Program",
    description:
      "Explore Amity University Online MSc Data Science program with flexible learning, industry-focused curriculum, and a UGC-approved postgraduate degree.",
    url: `${siteUrl}/amity/amity-online-msc-data-science/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online MSc Data Science | UGC Approved Program",
    description:
      "Apply for Amity University Online MSc in Data Science and build advanced skills for careers in analytics and technology.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Amity University", item: `${siteUrl}/amity/` },
          { name: "Amity Online MSc Data Science", item: `${siteUrl}/amity/amity-online-msc-data-science/` },
        ]}
      />
      <AmityMsc />
    </>
  );
}

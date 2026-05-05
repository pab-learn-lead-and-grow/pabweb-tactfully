import JainPage from "@/components/Jain/JainPage";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "JAIN University Online Courses | UGC-Approved UG & PG Programs",

  description:
    "Explore JAIN University Online courses including MBA, BBA, BCom and other UG & PG programs. UGC-approved degrees with flexible online learning and industry-focused curriculum.",

  alternates: {
    canonical: `${siteUrl}/jain/`,
  },

  keywords: [
    "JAIN University Online",
    "JAIN University online courses",
    "JAIN online MBA",
    "JAIN online degree programs",
    "JAIN University distance education",
    "UGC approved online university India",
    "JAIN online UG PG programs",
  ],

  openGraph: {
    title: "JAIN University Online Courses | UGC-Approved Degree Programs",
    description:
      "Discover JAIN University Online programs including MBA, BBA, and other UGC-approved degrees with flexible online learning.",
    url: `${siteUrl}/jain/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "JAIN University Online Courses | UGC Approved Programs",
    description:
      "Explore JAIN University Online programs and earn a UGC-approved degree with flexible learning.",
  },
};

export default function Jain() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "JAIN University", item: `${siteUrl}/jain/` },
        ]}
      />
      <JainPage />
    </>
  );
}

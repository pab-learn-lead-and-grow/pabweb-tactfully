import AmityPage from "@/components/Amity/AmityPage";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity University Online Courses | UGC-Approved UG & PG Programs",

  description:
    "Explore Amity University Online courses including MBA, BBA, BCA and other UGC-approved UG & PG degree programs with flexible online learning.",

  alternates: {
    canonical: `${siteUrl}/amity/`,
  },

  keywords: [
    "Amity University online",
    "Amity University online courses",
    "Amity online degree programs",
    "Amity online MBA",
    "Amity distance education",
    "UGC approved university India",
    "Amity University courses",
  ],

  openGraph: {
    title: "Amity University Online Courses | UGC-Approved Degree Programs",
    description:
      "Discover Amity University Online programs including MBA, BBA, BCA and other UGC-approved degrees with flexible online learning.",
    url: `${siteUrl}/amity/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity University Online Courses | UGC Approved Programs",
    description:
      "Explore Amity University Online degree programs designed for flexible learning and career growth.",
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
        ]}
      />
      <AmityPage />
    </>
  );
}

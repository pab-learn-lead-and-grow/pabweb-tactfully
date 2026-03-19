import AmityUgPg from "@/components/Amity/AmityUgPg";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Amity Online Dual Degree Program | UGC-Approved Integrated Courses",

  description:
    "Amity Online Dual Degree Program allows students to pursue two UGC-approved degrees simultaneously with flexible online learning and career-focused curriculum.",

  alternates: {
    canonical: "/amity/amity-online-integrated-programs/",
  },

  keywords: [
    "Amity Online Dual Degree Program",
    "Amity dual degree online",
    "Amity University dual degree",
    "Online dual degree programs India",
    "UGC approved dual degree",
    "Amity online programs",
    "Amity University online courses",
  ],

  openGraph: {
    title: "Amity Online Dual Degree Program | UGC-Approved Integrated Courses",
    description:
      "Explore Amity University Online Dual Degree programs that allow students to pursue two UGC-approved degrees with flexible learning.",
    url: `${siteUrl}/amity/amity-online-integrated-programs/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online Dual Degree Program | UGC Approved",
    description:
      "Learn about Amity University's online dual degree programs designed for flexible learning and career advancement.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Amity() {
  return <AmityUgPg />;
}
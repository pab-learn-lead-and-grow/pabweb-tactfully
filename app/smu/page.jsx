import SmuPage from "@/components/Smu/SmuPage";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Sikkim Manipal University Online Programs | UGC Approved Courses",

  description:
    "Explore Sikkim Manipal University (SMU) online programs including MBA, MCA, BBA, BA, BCom and more. UGC-approved degrees with flexible online learning for students and working professionals.",

  alternates: {
    canonical: "/smu/",
  },

  keywords: [
    "Sikkim Manipal University",
    "SMU online programs",
    "Sikkim Manipal online MBA",
    "Sikkim Manipal distance education",
    "UGC approved university India",
    "Online degree programs India",
    "SMU courses",
  ],

  openGraph: {
    title: "Sikkim Manipal University Online Programs | Radhya Education Academy",
    description:
      "Explore UGC-approved online degree programs from Sikkim Manipal University with flexible learning and career-focused curriculum.",
    url: `${siteUrl}/smu/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Sikkim Manipal University Online Programs",
    description:
      "Explore UGC-approved online degree programs from Sikkim Manipal University.",
  },
};

export default function SmuUniversityPage() {
  return <SmuPage />;
}
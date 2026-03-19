import NmimsCert from "@/components/Nmims/NmimsCert";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Online Certification Programs | Industry-Focused Courses",

  description:
    "Explore NMIMS online certification programs designed to build industry-relevant skills. Flexible learning options help students and working professionals upgrade their careers.",

  alternates: {
    canonical: "/nmims/nmims-mumbai-online-certification/",
  },

  keywords: [
    "NMIMS Certifications",
    "NMIMS online certifications",
    "NMIMS certificate programs",
    "NMIMS skill based courses",
    "Online certification courses India",
    "Distance learning certifications",
    "NMIMS online programs",
  ],

  openGraph: {
    title: "NMIMS Online Certification Programs | Radhya Education Academy",
    description:
      "Discover NMIMS online certification programs designed to help professionals gain industry-focused skills with flexible learning.",
    url: `${siteUrl}/nmims/nmims-mumbai-online-certification/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS Online Certification Programs | Radhya Education Academy",
    description:
      "Explore flexible NMIMS online certification courses designed to help professionals upskill.",
  },
};

export default function NmimsCertificationPage() {
  return <NmimsCert />;
}
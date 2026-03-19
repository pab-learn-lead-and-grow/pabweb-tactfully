import NmimsDiploma from "@/components/Nmims/NmimsDiploma";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Online Diploma Programs | Industry-Focused Courses",

  description:
    "Explore NMIMS online diploma programs designed for working professionals. Gain industry-focused skills with flexible learning and career-oriented curriculum.",

  alternates: {
    canonical: "/nmims/nmims-mumbai-online-diploma/",
  },

  keywords: [
    "NMIMS Diploma",
    "NMIMS online diploma",
    "NMIMS distance diploma",
    "NMIMS diploma programs",
    "Online diploma courses India",
    "Distance learning diploma",
    "NMIMS online programs",
  ],

  openGraph: {
    title: "NMIMS Online Diploma Programs | Radhya Education Academy",
    description:
      "Discover NMIMS online diploma programs designed for professionals seeking flexible and industry-focused learning.",
    url: `${siteUrl}/nmims/nmims-mumbai-online-diploma/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS Online Diploma Programs | Radhya Education Academy",
    description:
      "Explore flexible NMIMS online diploma programs designed to help professionals upskill.",
  },
};

export default function NmimsDiplomaPage() {
  return <NmimsDiploma />;
}
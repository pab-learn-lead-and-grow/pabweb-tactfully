import HelpSection from "@/components/UniversityResponse/HelpSection";
import UniversityResponseTime from "@/components/UniversityResponse/UniversityResponseTime";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Online University Response Time Comparison India 2026 | Fast Support",

  description:
    "Compare response time of online universities in India. Find which universities reply fastest for admission queries, counseling & support.",

  alternates: {
    canonical: "/university-response-time/",
  },

  keywords: [
    "University response time",
    "college admission response time",
    "online university response time India",
    "university admission support",
    "education counselling response time",
    "Radhya Education support",
  ],

  openGraph: {
    title: "University Response Time | Radhya Education Academy",
    description:
      "Learn how quickly universities respond to admission queries and counselling requests through Radhya Education Academy.",
    url: `${siteUrl}/university-response-time/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "University Response Time | Radhya Education Academy",
    description:
      "Understand university response times for admissions and counselling requests.",
  },
};

export default function UniversityResponsePage() {
  return (
    <>
      <UniversityResponseTime />
      <HelpSection />
    </>
  );
}
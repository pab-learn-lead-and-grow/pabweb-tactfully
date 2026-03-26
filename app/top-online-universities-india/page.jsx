import CollegeCards from "@/components/CollegeCards";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Top Online Universities in India 2026 | Best MBA, BBA Colleges",

  description:
    "Explore top online universities in India for MBA, BBA & more. Compare UGC approved colleges, fees, rankings & placements. Find the best online degree today.",

  alternates: {
    canonical: "/top-online-universities-india/",
  },

  keywords: [
    "University accreditations and approvals",
    "UGC approved universities India",
    "NAAC accredited universities",
    "AICTE approved universities",
    "recognized online degree universities",
    "distance education university approvals",
  ],

  openGraph: {
    title: "University Accreditations & Approvals in India | UGC, NAAC, AICTE",
    description:
      "Explore recognized university accreditations including UGC, NAAC, and AICTE approvals before choosing an online or distance degree program.",
    url: `${siteUrl}/top-online-universities-india/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "University Accreditations & Approvals in India",
    description:
      "Verify university recognition such as UGC, NAAC, and AICTE approvals before enrolling in online or distance learning programs.",
  },
};

export default function CollegeData() {
  return <CollegeCards />;
}
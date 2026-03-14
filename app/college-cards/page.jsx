import CollegeCards from "@/components/CollegeCards";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "University Accreditations & Approvals in India | UGC, NAAC, AICTE",

  description:
    "Check university accreditations and approvals in India including UGC, NAAC, and AICTE recognition. Verify approved universities before taking admission in online or distance learning programs.",

  alternates: {
    canonical: "/college-cards/",
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
    url: `${siteUrl}/college-cards/`,
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
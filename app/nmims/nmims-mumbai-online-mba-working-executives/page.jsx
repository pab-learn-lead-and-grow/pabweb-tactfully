import NmimsWx from "@/components/Nmims/NmimsWx";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS Mumbai Online MBA WX Program | Admission and Fees",

  description:
    "NMIMS MBA WX is an executive MBA designed for working professionals, offering flexible learning, industry-focused curriculum, and career advancement through the NMIMS online learning platform.",

  alternates: {
    canonical: "/nmims/nmims-mumbai-online-mba-working-executives/",
  },

  keywords: [
    "NMIMS MBA WX",
    "NMIMS Executive MBA WX",
    "NMIMS working professionals MBA",
    "NMIMS online executive MBA",
    "MBA for working professionals India",
    "NMIMS WX MBA program",
    "NMIMS executive online programs",
  ],

  openGraph: {
    title: "NMIMS MBA WX | Executive MBA for Working Professionals",
    description:
      "Explore NMIMS MBA WX designed for working professionals with flexible learning and industry-focused curriculum.",
    url: `${siteUrl}/nmims/nmims-mumbai-online-mba-working-executives/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "NMIMS MBA WX | Radhya Education Academy",
    description:
      "Discover NMIMS MBA WX executive program designed for working professionals.",
  },
};

export default function NmimsWxPage() {
  return <NmimsWx />;
}
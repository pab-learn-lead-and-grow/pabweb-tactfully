import MujBcom from "@/components/Muj/MujBcom";
export const dynamic = "force-static";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Manipal Jaipur Online BCom Program | Admission and Fees",

  description:
    "Manipal University Jaipur Online BCom offers a UGC-approved Bachelor of Commerce degree with flexible online learning, industry-relevant curriculum, and career support for students.",

  alternates: {
    canonical: "/muj/manipal-jaipur-online-bcom/",
  },

  keywords: [
    "Manipal Jaipur Online BCom",
    "Manipal University Jaipur online BCom",
    "MUJ online BCom",
    "Manipal distance BCom",
    "Online BCom India",
    "UGC approved online BCom",
    "Manipal Jaipur online programs",
  ],

  openGraph: {
    title: "Manipal University Jaipur Online BCom | Radhya Education Academy",
    description:
      "Explore MUJ Online BCom with flexible learning, industry-relevant curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/muj/manipal-jaipur-online-bcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "MUJ Online BCom | Radhya Education Academy",
    description:
      "Discover Manipal University Jaipur Online BCom and explore flexible UGC-approved commerce programs.",
  },
};

export default function MujOnlineBcomPage() {
  return <MujBcom />;
}
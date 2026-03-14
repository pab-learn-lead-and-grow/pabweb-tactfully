import MujMcom from "@/components/Muj/MujMcom";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Manipal University Jaipur Online MCom | UGC Approved Commerce Degree",

  description:
    "Manipal University Jaipur Online MCom offers a UGC-approved Master of Commerce degree with flexible online learning, industry-relevant curriculum, and career support for students and professionals.",

  alternates: {
    canonical: "/muj/manipal-jaipur-online-mcom/",
  },

  keywords: [
    "Manipal Jaipur Online MCom",
    "Manipal University Jaipur online MCom",
    "MUJ online MCom",
    "Manipal distance MCom",
    "Online MCom India",
    "UGC approved online MCom",
    "Manipal Jaipur online programs",
  ],

  openGraph: {
    title: "Manipal University Jaipur Online MCom | Radhya Education Academy",
    description:
      "Explore MUJ Online MCom with flexible learning, industry-focused curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/muj/manipal-jaipur-online-mcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "MUJ Online MCom | Radhya Education Academy",
    description:
      "Discover Manipal University Jaipur Online MCom and explore flexible UGC-approved commerce programs.",
  },
};

export default function MujOnlineMcomPage() {
  return <MujMcom />;
}
import MujMba from "@/components/Muj/MujMba";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
  
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Manipal Jaipur Online MBA Program | Admission and Fees",

  description:
    "Manipal University Jaipur Online MBA offers a UGC-approved management degree with flexible online learning, industry-focused curriculum, and career support for professionals and working executives.",

  alternates: {
    canonical: "/muj/manipal-jaipur-online-mba/",
  },

  keywords: [
    "Manipal Jaipur Online MBA",
    "Manipal University Jaipur online MBA",
    "MUJ online MBA",
    "Manipal distance MBA",
    "Online MBA India",
    "UGC approved online MBA",
    "Manipal Jaipur online programs",
  ],

  openGraph: {
    title: "Manipal University Jaipur Online MBA | Radhya Education Academy",
    description:
      "Explore MUJ Online MBA with flexible learning, industry-focused curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/muj/manipal-jaipur-online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "MUJ Online MBA | Radhya Education Academy",
    description:
      "Discover Manipal University Jaipur Online MBA and explore flexible UGC-approved management programs.",
  },
};

export default function MujOnlineMbaPage() {
  return <MujMba />;
}

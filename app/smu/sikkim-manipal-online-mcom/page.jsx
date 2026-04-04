import SmuMcom from "@/components/Smu/SmuMcom";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

   title: "Sikkim Manipal Online MCom Program | Admission and Fees",

  description:
    "SMU Online MCom from Sikkim Manipal University is a UGC-approved Master of Commerce degree offering flexible online learning, industry-focused curriculum, and career opportunities in finance, accounting, and business.",

  alternates: {
    canonical: "/smu/sikkim-manipal-online-mcom/",
  },

  keywords: [
    "SMU Online MCom",
    "Sikkim Manipal University online MCom",
    "SMU distance MCom",
    "SMU online commerce postgraduate degree",
    "Online MCom India",
    "UGC approved online MCom",
    "SMU online programs",
  ],

  openGraph: {
    title: "SMU Online MCom | UGC Approved Master of Commerce Degree",
    description:
      "Explore SMU Online MCom from Sikkim Manipal University with flexible learning, industry-relevant curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/smu/sikkim-manipal-online-mcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SMU Online MCom | Radhya Education Academy",
    description:
      "Learn about SMU Online MCom from Sikkim Manipal University and explore flexible UGC-approved commerce postgraduate programs.",
  },
};

export default function SmuOnlineMcomPage() {
  return <SmuMcom />;
}
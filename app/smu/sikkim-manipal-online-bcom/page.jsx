import SmuBcom from "@/components/Smu/SmuBcom";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

   title: "Sikkim Manipal Online BCom Program | Admission and Fees",

  description:
    "SMU Online BCom from Sikkim Manipal University is a UGC-approved Bachelor of Commerce degree offering flexible online learning, industry-relevant curriculum, and strong academic support.",

  alternates: {
    canonical: "/smu/sikkim-manipal-online-bcom/",
  },

  keywords: [
    "SMU Online BCom",
    "Sikkim Manipal University online BCom",
    "SMU distance BCom",
    "SMU online commerce degree",
    "Online BCom India",
    "UGC approved online BCom",
    "SMU online programs",
  ],

  openGraph: {
    title: "SMU Online BCom | UGC Approved Bachelor of Commerce Degree",
    description:
      "Explore SMU Online BCom from Sikkim Manipal University with flexible learning, industry-focused curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/smu/sikkim-manipal-online-bcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SMU Online BCom | Radhya Education Academy",
    description:
      "Learn about SMU Online BCom from Sikkim Manipal University and explore flexible UGC-approved commerce degree programs.",
  },
};

export default function SmuOnlineBcomPage() {
  return <SmuBcom />;
}

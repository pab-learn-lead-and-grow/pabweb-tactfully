import SmuMca from "@/components/Smu/SmuMca";

 export const dynamic = "force-static";
 
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "SMU Online MCA | UGC Approved Master of Computer Applications",

  description:
    "SMU Online MCA from Sikkim Manipal University is a UGC-approved Master of Computer Applications degree offering flexible online learning, industry-focused curriculum, and career support for IT professionals.",

  alternates: {
    canonical: "/smu/sikkim-manipal-online-mca/",
  },

  keywords: [
    "SMU Online MCA",
    "Sikkim Manipal University online MCA",
    "SMU distance MCA",
    "SMU online computer applications degree",
    "Online MCA India",
    "UGC approved online MCA",
    "SMU online programs",
  ],

  openGraph: {
    title: "SMU Online MCA | UGC Approved Master of Computer Applications",
    description:
      "Explore SMU Online MCA from Sikkim Manipal University with flexible online learning, industry-relevant curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/smu/sikkim-manipal-online-mca/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SMU Online MCA | Radhya Education Academy",
    description:
      "Learn about SMU Online MCA from Sikkim Manipal University and explore flexible UGC-approved computer applications programs.",
  },
};

export default function SmuOnlineMcaPage() {
  return <SmuMca />;
}
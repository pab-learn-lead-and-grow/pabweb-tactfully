import SmuMa from "@/components/Smu/SmuMa";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "SMU Online MA | UGC Approved Master of Arts Degree",

  description:
    "SMU Online MA from Sikkim Manipal University is a UGC-approved Master of Arts degree offering flexible online learning, academic support, and a career-focused curriculum.",

  alternates: {
    canonical: "/smu/sikkim-manipal-online-ma/",
  },

  keywords: [
    "SMU Online MA",
    "Sikkim Manipal University online MA",
    "SMU distance MA",
    "SMU online postgraduate arts degree",
    "Online MA India",
    "UGC approved online MA",
    "SMU online programs",
  ],

  openGraph: {
    title: "SMU Online MA | UGC Approved Master of Arts Degree",
    description:
      "Explore SMU Online MA from Sikkim Manipal University with flexible online learning, industry-relevant curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/smu/sikkim-manipal-online-ma/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SMU Online MA | Radhya Education Academy",
    description:
      "Learn about SMU Online MA from Sikkim Manipal University and explore flexible UGC-approved postgraduate arts programs.",
  },
};

export default function SmuOnlineMaPage() {
  return <SmuMa />;
}
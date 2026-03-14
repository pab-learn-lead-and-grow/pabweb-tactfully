import SmuBa from "@/components/Smu/SmuBa";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "SMU Online BA | UGC Approved Bachelor of Arts Degree",

  description:
    "SMU Online BA from Sikkim Manipal University is a UGC-approved Bachelor of Arts degree offering flexible online learning, academic support, and career-focused curriculum.",

  alternates: {
    canonical: "/smu/sikkim-manipal-online-ba/",
  },

  keywords: [
    "SMU Online BA",
    "Sikkim Manipal University online BA",
    "SMU distance BA",
    "SMU online arts degree",
    "Online BA India",
    "UGC approved online BA",
    "SMU online programs",
  ],

  openGraph: {
    title: "SMU Online BA | UGC Approved Bachelor of Arts Degree",
    description:
      "Explore SMU Online BA from Sikkim Manipal University, a flexible UGC-approved Bachelor of Arts degree program with industry-relevant curriculum.",
    url: `${siteUrl}/smu/sikkim-manipal-online-ba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SMU Online BA | Radhya Education Academy",
    description:
      "Learn about SMU Online BA from Sikkim Manipal University and explore flexible UGC-approved online arts degree programs.",
  },
};

export default function SmuOnlineBaPage() {
  return <SmuBa />;
}
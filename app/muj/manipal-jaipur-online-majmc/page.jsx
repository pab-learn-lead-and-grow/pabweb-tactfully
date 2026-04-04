import MujMajmc from "@/components/Muj/MujMajmc";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manipal Jaipur Online MAJMC Program | Admission and Fees",
  description:
    "Manipal Jaipur Online MAJMC offers a UGC-approved journalism and mass communication degree with flexible online learning, practical curriculum and career support",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-majmc/",
  },
    keywords: [
    "Manipal Jaipur Online MAJMC",
    "Manipal University Jaipur online MAJMC",
    "MUJ online MAJMC",
    "Manipal distance MAJMC",
    "Online MAJMC India",
    "UGC approved online MAJMC",
    "Manipal Jaipur online programs",
  ],
  openGraph: {
    title: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-majmc/ - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-majmc/",
    siteName: "Radhya Education Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Radhya Education Academy - Online Programs",
    description: "Explore UGC-approved online degree programs from top universities",
  }
};
export default function Muj() {
    return (
        <MujMajmc />
    );
}
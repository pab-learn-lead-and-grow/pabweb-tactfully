import MujBba from "@/components/Muj/MujBba";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
export const metadata = {
   metadataBase: new URL(siteUrl),
   title: "Manipal Jaipur Online BBA Program | Admission and Fees",
  description:
    "Manipal Jaipur Online BBA offers a UGC-approved undergraduate business degree with flexible online learning, industry-relevant curriculum and career support",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-bba/",
  },
    keywords: [
    "Manipal Jaipur Online BBA",
    "Manipal University Jaipur online BBA",
    "MUJ online BBA",
    "Manipal distance BBA",
    "Online BBA India",
    "UGC approved online BBA",
    "Manipal Jaipur online programs",
  ],
  openGraph: {
    title: "Manipal University Jaipur Online BBA - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-bba/",
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
        <MujBba />
    );
}
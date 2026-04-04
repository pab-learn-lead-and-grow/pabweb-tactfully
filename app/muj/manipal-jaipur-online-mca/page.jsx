import MujMca from "@/components/Muj/MujMca";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";


export const dynamic = "force-static";
export const metadata = {
   metadataBase: new URL(siteUrl),
  title: "Manipal Jaipur Online MCA Program | Admission and Fees",
  description:
    "Manipal Jaipur Online MCA offers a UGC-approved postgraduate computer applications degree with flexible online learning, industry-relevant curriculum and career support",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-mca/",
  },
    keywords: [
    "Manipal Jaipur Online MCA",
    "Manipal University Jaipur online MCA",
    "MUJ online MCA",
    "Manipal distance MCA",
    "Online MCA India",
    "UGC approved online MCA",
    "Manipal Jaipur online programs",
  ],
  openGraph: {
    title: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-mca/ - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-mca/",
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
        <MujMca />
    );
}
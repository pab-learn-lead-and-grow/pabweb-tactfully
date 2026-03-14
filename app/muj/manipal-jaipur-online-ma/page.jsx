import MujMa from "@/components/Muj/MujMa";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";


export const metadata = {
  title: "Manipal Jaipur Online MA - UGC Approved Degree",
  description:
    "Manipal Jaipur Online MA offers a UGC-approved postgraduate degree with flexible online learning, industry-relevant curriculum and academic support",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-ma/",
  },
    keywords: [
    "Manipal Jaipur Online MA",
    "Manipal University Jaipur online MA",
    "MUJ online MA",
    "Manipal distance MA",
    "Online MA India",
    "UGC approved online MA",
    "Manipal Jaipur online programs",
  ],
  openGraph: {
    title: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-ma/ - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-ma/",
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
        <MujMa />
    );
}
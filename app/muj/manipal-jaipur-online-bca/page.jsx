import MujBca from "@/components/Muj/MujBca";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";


export const metadata = {
  title: "Manipal Jaipur Online BCA - UGC Approved Degree",
  description:
    "Manipal Jaipur Online BCA offers a UGC-approved computer applications degree with flexible online learning, industry-relevant curriculum and career support",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-bca/",
  },
    keywords: [
    "Manipal Jaipur Online BCA",
    "Manipal University Jaipur online BCA",
    "MUJ online BCA",
    "Manipal distance BCA",
    "Online BCA India",
    "UGC approved online BCA",
    "Manipal Jaipur online programs",
  ],
  openGraph: {
    title: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-bca/ - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/muj/manipal-jaipur-online-bca/",
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
        <MujBca />
    );
}
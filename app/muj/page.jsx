import MujPage from "@/components/Muj/MujPage";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  title: "Manipal Jaipur University - UGC Approved Online Programs",
  description:
    "Manipal Jaipur University offers UGC-approved online undergraduate and postgraduate degree programs with flexible learning and industry-relevant curriculum",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/muj/",
  },
  openGraph: {
    title: "Manipal Jaipur University - UGC Approved Online Programs | Radhya Education Academy",
    description: "Manipal Jaipur University offers UGC-approved online degree programs with flexible learning and industry-relevant curriculum",
    url: `${siteUrl}/muj/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Manipal Jaipur University - UGC Approved Online Programs",
    description: "Get UGC-approved online degree from Manipal Jaipur University",
  },
  keywords: [
    "Manipal Jaipur University",
    "Manipal University Jaipur online",
    "Manipal Jaipur online programs",
    "Manipal distance education",
    "Online degree programs India",
    "UGC approved online university",
    "Manipal Jaipur University courses",
  ],
};
export default function Muj() {
    return (
        <MujPage />
    );
}
import NmimsMba from "@/components/Nmims/NmimsMba";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "NMIMS Online MBA - Accredited Distance Degree Program",
  description:
    "NMIMS Online MBA helps you earn a UGC-approved management degree online with flexible learning, industry-relevant curriculum and support for working professionals",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/nmims/nmims-mumbai-online-mba/",
  },
    keywords: [
    "NMIMS Online MBA",
    "NMIMS distance MBA",
    "NMIMS online degree",
    "NMIMS management programs",
    "Online MBA India",
    "Distance learning MBA",
    "UGC approved online MBA",
  ],
  openGraph: {
  title: "NMIMS Online MBA – UGC Approved Program | Radhya Education Academy",
  description:
    "NMIMS Online MBA helps you earn a UGC-approved management degree online with flexible learning and industry-relevant curriculum.",
  url: "https://radhyaeducationacademy.com/nmims/nmims-mumbai-online-mba/",
  siteName: "Radhya Education Academy",
  type: "website",
},
  twitter: {
    card: "summary",
    title: "Radhya Education Academy - Online Programs",
    description: "Explore UGC-approved online degree programs from top universities",
  }
};
export default function Nmims() {
    return (
        <NmimsMba />
    );
}
import ManipalMbaNew from "@/components/Muj/ManipalOnlineMba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Online MBA Manipal: Fees, Admission 2026, Eligibility, Placements & Review",
  description:
    "Explore Online MBA Manipal including fees, admission 2026, eligibility, syllabus, placements, and salary. Learn about Manipal University Online MBA course, specializations, and more.",
  alternates: {
    canonical: "https://radhyaeducationacademy.com/online-mba-manipal/",
  },
    keywords: [
    "online mba manipal",
    "manipal online mba fees",
    "manipal university online mba",
    "online mba india",
    "mba for working professionals",
    "online mba admission 2026",
    "distance mba manipal",
  ],
  openGraph: {
  title: "Online MBA Manipal: Fees, Admission 2026, Eligibility, Placements & Review",
  description:
    "Online MBA Manipal program details about fees, admission 2026, eligibility, syllabus, placements, and career scope. Check if Manipal Online MBA is worth it.",
  url: "https://radhyaeducationacademy.com/online-mba-manipal/",
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
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", item: siteUrl },
                    { name: "Manipal University Jaipur", item: `${siteUrl}/muj/` },
                    { name: "Online MBA Manipal", item: `${siteUrl}/online-mba-manipal/` },
                ]}
            />
            <ManipalMbaNew />
        </>
    );
}

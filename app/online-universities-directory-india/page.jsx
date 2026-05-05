import UniversityList from "@/components/UniversityList";
import { getUniversities } from "../actions/getUniversities";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const revalidate = 3600; // ISR: Revalidate every hour

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Compare UGC Approved Universities in India | Online & Distance Education",

  description:
    "Compare top UGC-approved universities in India offering online and distance education programs. Check recognition, fees, courses, and specializations to choose the right university.",

  alternates: {
    canonical: `${siteUrl}/online-universities-directory-india/`,
  },

  keywords: [
    "Compare UGC Approved Universities",
    "UGC approved universities in India",
    "Compare online MBA universities",
    "UGC approved distance education universities",
    "Best UGC approved universities for online MBA",
  ],

  openGraph: {
    title:
      "Compare UGC Approved Universities in India | Radhya Education Academy",
    description:
      "Compare top UGC-approved universities offering online and distance education programs. Explore fees, recognition, and courses before choosing the right university.",
    url: `${siteUrl}/online-universities-directory-india/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Compare UGC Approved Universities in India | Radhya Education Academy",
    description:
      "Explore and compare UGC-approved universities offering online and distance learning programs in India.",
  },
};

export default async function UniversitiesPage() {
  const universities = await getUniversities();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Online Universities Directory India", item: `${siteUrl}/online-universities-directory-india/` },
        ]}
      />
      <UniversityList initialData={universities} />
    </>
  );
}

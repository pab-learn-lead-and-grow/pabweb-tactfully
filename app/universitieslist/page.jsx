import UniversityList from "@/components/UniversityList";
import { getUniversities } from "../actions/getUniversities";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Compare UGC Approved Universities in India | Online & Distance Education",

  description:
    "Compare top UGC-approved universities in India offering online and distance education programs. Check recognition, fees, courses, and specializations to choose the right university.",

  alternates: {
    canonical: "/universitieslist/",
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
    url: `${siteUrl}/universitieslist/`,
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

  return <UniversityList initialData={universities} />;
}
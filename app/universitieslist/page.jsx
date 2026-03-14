
import UniversityList from "@/components/UniversityList";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

import { getUniversities } from "../actions/getUniversities";

export const metadata = {
  title: "Compare UGC Approved Universities in India | Online & Distance Education",
  description:
    "Compare top UGC approved universities in India for online MBA and distance education. Check recognition, fees, specializations and choose the right university.",
   alternates: {
    canonical: "https://radhyaeducationacademy.com/universitieslist/",
  },
    keywords: [
    "Compare UGC Approved Universities",
    "UGC approved universities in India",
    "Compare online MBA universities",
    "UGC approved distance education universities",
    "Best UGC approved universities for online MBA",
  ],

  openGraph: {
    title: "https://radhyaeducationacademy.com/universitieslist/ - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/universitieslist/",
    siteName: "Radhya Education Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Radhya Education Academy - Online Programs",
    description: "Explore UGC-approved online degree programs from top universities",
  }
};

export default async function Universities(){
  const universities = await getUniversities();
  return(
    <UniversityList initialData={universities} />
  );
}
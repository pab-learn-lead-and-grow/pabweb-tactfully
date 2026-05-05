import CareerPage from "@/components/Career/CareerPage";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Careers at Radhya Education Academy",

  description:
    "Explore exciting career opportunities at Radhya Education. Join our team and build your career in the fast-growing online education and career guidance industry.",

  alternates: {
    canonical: `${siteUrl}/jobs-at-radhya/`,
  },

  keywords: [
    "Careers at Radhya",
    "Radhya jobs",
    "Radhya Education careers",
    "education consultancy jobs",
    "career opportunities in education",
    "education sector jobs India",
    "Radhya hiring",
  ],

  openGraph: {
    title: "Careers at Radhya Education | Join Our Team",
    description:
      "Explore career opportunities at Radhya Education and become part of a growing team in the education consulting industry.",
    url: `${siteUrl}/jobs-at-radhya/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Careers at Radhya Education",
    description:
      "Join the Radhya Education team and explore exciting career opportunities in the education sector.",
  },
};

export default function Career() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Careers", item: `${siteUrl}/jobs-at-radhya/` },
        ]}
      />
      <CareerPage />
    </>
  );
}

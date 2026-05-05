import OnlineMa from "@/components/Programs/onlineMa";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MA in India",
      description:
        "Online MA programs offered by top UGC-approved universities in India with specializations in humanities, social sciences, public policy, psychology, economics and more.",
      provider: {
        "@id": "https://radhyaeducationacademy.com/#organization"
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT10H"
      },
      offers: {
        "@type": "Offer",
        category: "Online Degree Program"
      },
  }

export const metadata = {
  metadataBase: new URL(siteUrl),
title: "Online MA India 2026: Fees, Colleges & Admission",

  description:
    "Discover Online MA programs with top colleges, updated fees, eligibility, and career opportunities in arts, humanities, and specialized domains.",

  alternates: {
    canonical: `${siteUrl}/programs/online-ma/`,
  },

  keywords: [
    "Online MA India",
    "best online MA colleges",
    "UGC approved online MA",
    "online MA fees India",
    "online MA after BA",
    "top universities for online MA",
    "online MA eligibility",
    "online MA admission 2026",
    "online humanities degree masters",
  ],

  openGraph: {
    title:
      "Online MA in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online MA universities in India with updated fees, eligibility, specializations and career opportunities.",
    url: `${siteUrl}/programs/online-ma/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online MA programs in India and advance your career in humanities, public policy and social sciences.",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function OnlineMaPage() {
  return (
     <>
       <BreadcrumbSchema
         items={[
           { name: "Home", item: siteUrl },
           { name: "Programs", item: `${siteUrl}/programs/` },
           { name: "Online MA", item: `${siteUrl}/programs/online-ma/` },
         ]}
       />
       <script
         type="application/ld+json"
          suppressHydrationWarning
         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
       />
       <OnlineMa />
     </>
   );
}

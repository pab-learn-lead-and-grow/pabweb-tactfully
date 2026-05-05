import OnlineBcom from "@/components/Programs/onlineBcom";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
  const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BCom in India",
      description:
        "Online BCom programs offered by top UGC-approved universities in India for students after 12th with career opportunities in accounting, finance, banking, taxation and business management.",
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

 title: "Online BCom India 2026: Fees, Colleges & Admission",

  description:
    "Explore top Online B.Com colleges in India with updated fees, eligibility, admission process, and career opportunities. Compare universities and choose the best course.",

  alternates: {
    canonical: `${siteUrl}/programs/online-bcom/`,
  },

  keywords: [
    "Online BCom India",
    "best online BCom colleges",
    "UGC approved online BCom",
    "online BCom fees India",
    "online BCom after 12th",
    "top universities for online BCom",
    "online BCom eligibility",
    "online BCom admission 2026",
    "online commerce degree India",
  ],

  openGraph: {
    title:
      "Online BCom in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online BCom universities in India with updated fees, eligibility and career opportunities in commerce, finance and accounting.",
    url: `${siteUrl}/programs/online-bcom/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BCom in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online BCom programs in India and build a career in accounting, finance, banking and business.",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function OnlineBcomPage() {
  return (
     <>
       <BreadcrumbSchema
         items={[
           { name: "Home", item: siteUrl },
           { name: "Programs", item: `${siteUrl}/programs/` },
           { name: "Online BCom", item: `${siteUrl}/programs/online-bcom/` },
         ]}
       />
       <script
         type="application/ld+json"
         suppressHydrationWarning
         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
       />
       <OnlineBcom />
     </>
   );
}

import ExecutiveMBA from "@/components/Programs/MbaWx";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

 const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MBA for Working Professionals (WX)",
      description:
        "Online MBA WX programs designed for working professionals with flexible learning, leadership development and career advancement opportunities.",
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
   title: "Online executive MBA India 2026: Fees, Colleges & Admission",
  description:
    "Explore Online MBA for Working Professionals (MBA WX) in India with fees, eligibility, top universities and career benefits. Compare executive MBA programs designed for experienced professionals.",

  alternates: {
    canonical: `${siteUrl}/programs/online-mba-wx/`,
  },

  keywords: [
    "Online MBA for working professionals",
    "MBA WX India",
    "executive MBA online India",
    "online MBA with work experience",
    "UGC approved executive MBA online",
    "MBA for professionals India",
    "online MBA after work experience",
    "flexible MBA for working professionals",
    "executive management program online",
  ],

  openGraph: {
    title:
      "Executive MBA 2026: Top Colleges, Fees, Admission, Eligibility & Career Growth",
    description:
      "Explore Executive MBA programs for working professionals with top colleges, fees, eligibility, and career opportunities.",
    url: `${siteUrl}/programs/online-mba-wx/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MBA WX | Executive MBA for Professionals",
    description:
      "Find the best Online MBA programs for working professionals and boost your career with leadership and management skills.",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function MbaWxPage() {
  return (
     <>
       <BreadcrumbSchema
         items={[
           { name: "Home", item: siteUrl },
           { name: "Programs", item: `${siteUrl}/programs/` },
           { name: "Online MBA WX", item: `${siteUrl}/programs/online-mba-wx/` },
         ]}
       />
       <script
         type="application/ld+json"
          suppressHydrationWarning
         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
       />
       <ExecutiveMBA />
     </>
   );
 
}

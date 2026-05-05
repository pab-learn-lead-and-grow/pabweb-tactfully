import OnlineMba from "@/components/Programs/onlineMba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

const schema =  {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MBA in India",
      description: "Online MBA programs offered by top UGC-approved universities in India with flexible learning and career growth opportunities.",
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

  title: "Online MBA India 2026: Fees, Colleges & Admission",

  description:
    "Explore Online MBA in India with fees, eligibility, top universities, syllabus and placement opportunities. Compare UGC-approved colleges and choose the best MBA program.",

  alternates: {
    canonical: `${siteUrl}/programs/online-mba/`,
  },

  keywords: [
    "Online MBA India",
    "best online MBA colleges",
    "UGC approved online MBA",
    "online MBA fees India",
    "distance MBA vs online MBA",
    "top universities for online MBA",
    "online MBA eligibility",
    "online MBA admission 2026",
  ],

  openGraph: {
    title:
      "Online MBA 2026: Top Universities, Fees, Admission, Eligibility & Placements",
    description:
      "Explore top Online MBA colleges in India with updated fees, eligibility, admission process, and placements. Compare universities and choose the best MBA program.",
    url: `${siteUrl}/programs/online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MBA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online MBA programs in India and apply with expert guidance.",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function OnlineMbaPage() {

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Programs", item: `${siteUrl}/programs/` },
          { name: "Online MBA", item: `${siteUrl}/programs/online-mba/` },
        ]}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <OnlineMba />
    </>
  );
}

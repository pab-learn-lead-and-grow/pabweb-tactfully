import OnlineBba from "@/components/Programs/onlineBba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
const schema =  {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online BBA in India",
      description:
        "Online BBA programs offered by top UGC-approved universities in India for students after 12th with flexible learning and strong career foundation.",
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

  title: "Online BBA India 2026: Fees, Colleges & Admission",

  description:
    "Explore Online BBA colleges in India with updated fees, eligibility, and career opportunities. Start your business career today.",

  alternates: {
    canonical: `${siteUrl}/programs/online-bba/`,
  },

  keywords: [
    "Online BBA India",
    "best online BBA colleges",
    "UGC approved online BBA",
    "online BBA fees India",
    "online BBA after 12th",
    "top universities for online BBA",
    "online BBA eligibility",
    "online BBA admission 2026",
  ],

  openGraph: {
    title:
      "Online BBA in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online BBA universities in India with updated fees, eligibility and career opportunities after 12th.",
    url: `${siteUrl}/programs/online-bba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online BBA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online BBA programs in India and start your career in business management.",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function OnlineBbaPage() {
 return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Programs", item: `${siteUrl}/programs/` },
          { name: "Online BBA", item: `${siteUrl}/programs/online-bba/` },
        ]}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <OnlineBba />
    </>
  );
}

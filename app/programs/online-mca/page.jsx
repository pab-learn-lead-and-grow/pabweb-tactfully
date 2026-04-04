import OnlineMca from "@/components/Programs/onlineMca";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MCA in India",
      description:
        "Online MCA programs offered by top UGC-approved universities in India with career opportunities in software development, data science, cloud computing and IT fields.",
      provider: {
        "@id": "https://radhyaeducationacademy.com/#organization"
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online"
      },
      offers: {
        "@type": "Offer",
        category: "Online Degree Program"
      },
  }
export const metadata = {
  metadataBase: new URL(siteUrl),

title: "Online MCA India 2026: Fees, Colleges & Admission",

  description:
    "Discover Online MCA programs with top colleges, updated fees, eligibility, and career scope in IT, software development, and technology roles.",

  alternates: {
    canonical: "/programs/online-mca/",
  },

  keywords: [
    "Online MCA India",
    "best online MCA colleges",
    "UGC approved online MCA",
    "online MCA fees India",
    "online MCA after BCA",
    "top universities for online MCA",
    "online MCA eligibility",
    "online MCA admission 2026",
    "online computer applications masters",
  ],

  openGraph: {
    title:
      "Online MCA in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online MCA universities in India with updated fees, eligibility and career opportunities in IT, software development and data science.",
    url: `${siteUrl}/programs/online-mca/`,
    siteName: "Radhya Education Academy",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/online-mca.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MCA in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online MCA programs in India and advance your career in IT, software engineering and data science.",
  },

  robots: {
    index: true,
    follow: true,
  },

  
};

export default function OnlineMcaPage() {
  return (
     <>
       <script
         type="application/ld+json"
         suppressHydrationWarning
         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
       />
       <OnlineMca />
     </>
   );
}
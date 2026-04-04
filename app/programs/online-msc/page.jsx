import OnlineMsc from "@/components/Programs/onlineMsc";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";
  const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online MSc in India",
      description:
        "Online MSc programs offered by top UGC-approved universities in India with specializations in data science, IT, mathematics, physics, chemistry and other science fields.",
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

  title: "Online MSc India 2026: Fees, Colleges & Admission",

  description:
    "Explore Online MSc programs with top universities, updated fees, eligibility, and career scope in science, technology, and research fields.",

  alternates: {
    canonical: "/programs/online-msc/",
  },

  keywords: [
    "Online MSc India",
    "best online MSc colleges",
    "UGC approved online MSc",
    "online MSc fees India",
    "online MSc after graduation",
    "top universities for online MSc",
    "online MSc eligibility",
    "online MSc admission 2026",
    "online science masters degree",
  ],

  openGraph: {
    title:
      "Online MSc in India 2026 | Fees, Colleges, Admission & Career Scope",
    description:
      "Compare top Online MSc universities in India with updated fees, eligibility, specializations and career opportunities in science, IT and analytics.",
    url: `${siteUrl}/programs/online-msc/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online MSc in India | Top Colleges & Fees",
    description:
      "Find the best UGC-approved Online MSc programs in India and advance your career in science, data analytics, IT and research.",
  },

  robots: {
    index: true,
    follow: true,
  },


};

export default function OnlineMscPage() {
   return (
      <>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <OnlineMsc />
      </>
    );
}
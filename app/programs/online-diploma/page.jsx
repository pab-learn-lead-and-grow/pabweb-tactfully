import OnlineDiploma from "@/components/Programs/onlineDiploma";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online Diploma Courses 2026: Top Programs, Fees, Admission & Career Scope",

  description:
    "Explore online diploma courses in India with top programs, fees, eligibility, and career opportunities. Upgrade your skills with flexible learning.",

  alternates: {
    canonical: "/programs/online-diploma/",
  },

  keywords: [
    "Online diploma courses India",
    "best online diploma courses",
    "UGC approved diploma online",
    "online diploma after 10th",
    "online diploma after 12th",
    "short term courses online India",
    "online diploma fees India",
    "skill based diploma courses online",
    "top diploma courses for jobs",
  ],

  openGraph: {
    title:
      "Online Diploma Courses in India 2026 | Fees, Colleges & Career Scope",
    description:
      "Compare top Online Diploma programs in India with updated fees, eligibility and career opportunities across multiple fields.",
    url: `${siteUrl}/programs/online-diploma/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Diploma Courses | Top Programs & Fees",
    description:
      "Find the best online diploma courses in India and build job-ready skills in business, IT, healthcare, design and more.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online Diploma Courses in India",
      description:
        "Online diploma programs offered by top institutions in India with flexible learning and career-focused skills across business, IT, healthcare, design and other domains.",
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
      }
    }),
  },
};

export default function OnlineDiplomaPage() {
  return <OnlineDiploma />;
}
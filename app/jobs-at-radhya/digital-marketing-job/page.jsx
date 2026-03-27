import JobDetails from "@/components/Career/DigitalMarketing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Digital Marketing Specialist Job",

  description:
    "Apply for the Digital Marketing Specialist role at Radhya Education. Manage Google Ads and Meta Ads campaigns, optimize paid marketing performance, and grow your career in the education marketing industry.",

  alternates: {
    canonical: "/jobs-at-radhya/digital-marketing-job/",
  },

  keywords: [
    "Digital Marketing Specialist job",
    "Google Ads specialist job",
    "Meta Ads specialist job",
    "performance marketing jobs India",
    "paid ads specialist role",
    "Radhya digital marketing careers",
    "education marketing jobs",
  ],

  openGraph: {
    title: "Digital Marketing Specialist Job | Radhya Education Careers",
    description:
      "Join Radhya Education as a Digital Marketing Specialist and manage high-performance Google Ads and Meta Ads campaigns in the education sector.",
    url: `${siteUrl}/jobs-at-radhya/digital-marketing-job/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Digital Marketing Specialist Job | Radhya Education",
    description:
      "Apply for the Digital Marketing Specialist role at Radhya Education and grow your career in paid media and performance marketing.",
  },
};

export default function DigitalMarketingPage() {
  return <JobDetails />;
}
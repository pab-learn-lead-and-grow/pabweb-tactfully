import JobDetails from "@/components/Career/InsideSalesEx";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Inside Sales Executive Experienced Job | Radhya Education Careers",

  description:
    "Apply for the Inside Sales Executive Experienced role at Radhya Education. Grow your career in education sales with competitive incentives, leadership opportunities, and a high-performance work environment.",

  alternates: {
    canonical: "/jobs-at-radhya/inside-sales-experienced-job/",
  },

  keywords: [
    "Inside Sales Executive experienced job",
    "inside sales jobs for experienced professionals",
    "Radhya careers",
    "education sales jobs India",
    "experienced sales executive vacancy",
    "inside sales executive role",
    "Radhya hiring experienced candidates",
  ],

  openGraph: {
    title: "Inside Sales Executive Experienced Job | Radhya Education Careers",
    description:
      "Advance your career as an Inside Sales Executive at Radhya Education. Join a fast-growing education consulting company with strong incentives and growth opportunities.",
    url: `${siteUrl}/jobs-at-radhya/inside-sales-experienced-job/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Inside Sales Executive Experienced Job | Radhya Education",
    description:
      "Looking for experienced inside sales jobs? Apply at Radhya Education and accelerate your sales career in the education sector.",
  },
};

export default function InsideSalesExPage() {
  return <JobDetails />;
}
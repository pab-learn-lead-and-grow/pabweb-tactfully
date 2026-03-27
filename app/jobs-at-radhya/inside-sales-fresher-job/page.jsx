import JobDetails from "@/components/Career/InsideSalesFr";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Inside Sales Executive Job (Fresher)",

  description:
    "Apply for the Inside Sales Executive Fresher role at Radhya Education. Kickstart your career in education sales with professional training, career growth opportunities, and performance incentives.",

  alternates: {
    canonical: "/jobs-at-radhya/inside-sales-fresher-job/",
  },

  keywords: [
    "Inside Sales Executive fresher job",
    "Inside sales jobs for freshers",
    "Radhya careers",
    "education sales jobs",
    "fresher sales executive job India",
    "inside sales executive vacancy",
    "Radhya hiring freshers",
  ],

  openGraph: {
    title: "Inside Sales Executive Fresher Job | Radhya Education Careers",
    description:
      "Kickstart your career as an Inside Sales Executive at Radhya Education. Explore exciting growth opportunities in the education consulting industry.",
    url: `${siteUrl}/jobs-at-radhya/inside-sales-fresher-job/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Inside Sales Executive Fresher Job | Radhya Education",
    description:
      "Start your career with Radhya Education. Apply for the Inside Sales Executive fresher role and grow in the education consulting sector.",
  },
};

export default function InsideSalesFrPage() {
  return <JobDetails />;
}
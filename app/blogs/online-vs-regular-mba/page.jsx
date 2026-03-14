import BlogOne from "@/components/Blogs/BlogOne";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Online vs Regular MBA | Which Is Better for Your Career?",

  description:
    "Compare Online MBA vs Regular MBA based on eligibility, fees, flexibility, learning experience, and career outcomes to choose the right MBA program.",

  alternates: {
    canonical: "/blogs/online-vs-regular-mba/",
  },

  keywords: [
    "Online vs Regular MBA",
    "Online MBA vs Regular MBA",
    "difference between online and regular MBA",
    "online MBA benefits",
    "regular MBA comparison",
    "which MBA is better",
    "MBA for working professionals",
  ],

  openGraph: {
    title: "Online vs Regular MBA | Which Is Better for Your Career?",
    description:
      "Learn the key differences between Online MBA and Regular MBA including flexibility, cost, learning experience, and career opportunities.",
    url: `${siteUrl}/blogs/online-vs-regular-mba/`,
    siteName: "Radhya Education Academy",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online vs Regular MBA | Career Comparison Guide",
    description:
      "Explore the differences between Online MBA and Regular MBA to find the best option for your career growth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  return <BlogOne />;
}
import BlogTwo from "@/components/Blogs/BlogTwo";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Online MBA for Career Growth | Skills, Salary & Leadership Opportunities",

  description:
    "Discover how an Online MBA supports career growth by developing leadership skills, increasing salary potential, and preparing professionals for senior management roles.",

  alternates: {
    canonical: "/blogs/online-mba-for-career-growth/",
  },

  keywords: [
    "Online MBA for career growth",
    "online MBA benefits",
    "MBA for working professionals",
    "career growth with MBA",
    "online MBA leadership skills",
    "executive MBA online",
    "MBA salary growth",
  ],

  openGraph: {
    title:
      "Online MBA for Career Growth | Skills, Salary & Leadership Opportunities",
    description:
      "Learn how an Online MBA helps professionals develop leadership skills, boost salary potential, and achieve long-term career growth.",
    url: `${siteUrl}/blogs/online-mba-for-career-growth/`,
    siteName: "Radhya Education Academy",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Online MBA for Career Growth | Skills, Salary & Leadership Opportunities",
    description:
      "Explore how an Online MBA can accelerate career growth through leadership skills and higher salary opportunities.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  return <BlogTwo />;
}
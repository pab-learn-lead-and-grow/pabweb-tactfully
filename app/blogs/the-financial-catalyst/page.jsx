import BlogFive from "@/components/Blogs/BlogFive";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "The Financial Catalyst | How Online MBA Drives Salary Growth",

  description:
    "Learn how a modern Online MBA acts as a financial catalyst by boosting salary potential, accelerating career mobility, and unlocking leadership opportunities.",

  alternates: {
    canonical: "/blogs/the-financial-catalyst/",
  },

  keywords: [
    "online MBA salary growth",
    "online MBA salary increase",
    "online MBA career mobility",
    "benefits of online MBA",
    "online MBA career advancement",
    "modern online MBA advantages",
    "online MBA leadership opportunities",
  ],

  openGraph: {
    title: "The Financial Catalyst | Online MBA Salary Growth",
    description:
      "Discover how an Online MBA can boost salary potential, improve career mobility, and open doors to leadership roles.",
    url: `${siteUrl}/blogs/the-financial-catalyst/`,
    siteName: "Radhya Education Academy",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Financial Catalyst | Online MBA Salary Growth",
    description:
      "Explore how Online MBA programs help professionals increase salary potential and advance their careers.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  return <BlogFive />;
}
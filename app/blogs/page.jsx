import BlogsClient from "@/components/Blogs/BlogsClient";
import { getBlogData } from "@/app/actions/getBlogData";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const revalidate = 3600;
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Top Online MBA Blogs, Fees, ROI & Career Insights in India",

  description:
    "Read insightful blogs about online education, distance learning, career guidance, and university programs in India.",

  alternates: {
    canonical: `${siteUrl}/blogs/`,
  },

  openGraph: {
    title: "Latest Education Blogs & Insights | Radhya Education Academy",
    description:
      "Read insightful blogs about online education, distance learning, and career guidance.",
    url: `${siteUrl}/blogs/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Latest Education Blogs | Radhya Education Academy",
    description:
      "Explore insightful blogs about online and distance learning.",
  },
};

export default async function BlogsPage() {
  const { trending, latest, categories } = await getBlogData();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Blogs", item: `${siteUrl}/blogs/` },
        ]}
      />
      <BlogsClient
        trending={trending}
        latest={latest}
        categories={categories}
      />
    </>
  );
}

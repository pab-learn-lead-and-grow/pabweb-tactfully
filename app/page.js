

import HomePage from "@/components/Radhya/HomePage";
import { getLatestNews } from "./actions/getNews";
import { getLatestBlogsHome } from "./actions/getBlogHome";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const revalidate = 60;

export const metadata = {
  title: "Best Online & Distance Education Consultant in India",
  description:
    "Radhya Education Academy helps you choose the right online degree with expert counselling.",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export default async function Home() {
  const latestNews = await getLatestNews();
  const latestBlogs = await getLatestBlogsHome();
  
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
        ]}
      />
      <HomePage latestNews={latestNews} latestBlogs={latestBlogs} />
    </>
  );
}

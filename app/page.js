

import HomePage from "@/components/Radhya/HomePage";
import { getLatestNews } from "./actions/getNews";
import { getLatestBlogsHome } from "./actions/getBlogHome";

export const revalidate = 60;

export const metadata = {
  title: "Best Online & Distance Education Consultant in India",
  description:
    "Radhya Education Academy helps you choose the right online degree with expert counselling.",
};

export default async function Home() {
  const latestNews = await getLatestNews();
  const latestBlogs = await getLatestBlogsHome();
  
  return (
      <HomePage latestNews={latestNews} latestBlogs={latestBlogs} />
  );
}

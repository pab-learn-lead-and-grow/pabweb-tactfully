import NewsClient from "@/components/News/NewsClient";
import { getNewsData } from "@/app/actions/getNewsData";

export const dynamic = 'force-static';

export const metadata = {
  title: "Latest Education News & Updates | Radhya Education",
  description: "Stay updated with the latest news and trends in online education, distance learning, and career guidance from top universities in India.",
};

export default async function NewsPage() {
  const { trending, latest, categories } = await getNewsData();
  
  return (
    <NewsClient trending={trending} latest={latest} categories={categories} />
  );
}

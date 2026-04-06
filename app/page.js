

import HomePage from "@/components/Radhya/HomePage";
import { getLatestNews } from "./actions/getNews";

export const dynamic = 'force-static';

export const metadata = {
  title: "Best Online & Distance Education Consultant in India",
  description:
    "Radhya Education Academy helps you choose the right online degree with expert counselling.",
};

export default async function Home() {
  const latestNews = await getLatestNews();
  
  return (
      <HomePage latestNews={latestNews} />
  );
}

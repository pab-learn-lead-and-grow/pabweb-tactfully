import NewsClient from "@/components/News/NewsClient";
import { getNewsData } from "@/app/actions/getNewsData";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const revalidate = 3600;
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Latest Education News & Updates ",

  description:
    "Stay updated with the latest news, trends, and insights in online education, distance learning, and career guidance from top universities in India.",

  alternates: {
    canonical: "/news/",
  },

  openGraph: {
    title: "Latest Education News & Updates | Radhya Education Academy",
    description:
      "Read the latest updates and news about online education, distance learning, and university programs in India.",
    url: `${siteUrl}/news/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Latest Education News | Radhya Education Academy",
    description:
      "Explore the latest education news, trends, and university updates in online and distance learning.",
  },
};

export default async function NewsPage() {
  const { trending, latest, categories } = await getNewsData();

  return (
    <NewsClient
      trending={trending}
      latest={latest}
      categories={categories}
    />
  );
}
import CategoryNewsClient from "@/components/News/CategoryNewsClient";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

import { getCategoryNews } from "@/app/actions/getCategoryNews";
export const dynamic = "force-static";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { categoryName } = await getCategoryNews(slug);
  
  return {
    title: `${categoryName} News | Latest ${categoryName} News & Updates`,
    description: `Browse latest ${categoryName} news and updates from top universities in India.`,
    alternates: { canonical: `${siteUrl}/news/${slug}/`,
},
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const { categories, news, categoryName } = await getCategoryNews(slug);
  
  return (
    <CategoryNewsClient 
      categories={categories} 
      news={news} 
      categoryName={categoryName}
      slug={slug}
    />
  );
}

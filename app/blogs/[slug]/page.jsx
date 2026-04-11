import { getBlogBySlug, getBlogMetadata } from "@/app/actions/getBlogBySlug";
import BlogContent from "@/components/Blogs/BlogContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlogMetadata(slug);

  if (data.title === "Not Found") {
    return {
      title: "Not Found | Radhya Education Academy",
      alternates: {
        canonical: `${siteUrl}/blogs/${slug}/`,
      },
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${siteUrl}/blogs/${slug}/`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${siteUrl}/blogs/${slug}/`,
      siteName: "Radhya Education Academy",
      type: "article",
      images: data.imageUrl ? [{ url: data.imageUrl }] : [],
    },
    other: {
      "schema-article": JSON.stringify(data.articleSchema),
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);

  if (!data || !data.article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#270652] mb-4">Not Found</h1>
          <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <BlogContent 
      article={data.article}
      articleFormattedDate={data.articleFormattedDate}
      categoryData={data.categoryData}
      related={data.related}
      imageUrl={data.imageUrl}
      articleSchema={data.articleSchema}
    />
  );
}

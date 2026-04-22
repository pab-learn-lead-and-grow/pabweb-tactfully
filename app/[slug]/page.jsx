import { cache } from 'react';
import { supabase } from "@/lib/supabaseClient";
import PageContent from "@/components/Pages/PageContent";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Pages`;

export const revalidate = 3600;

const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${BUCKET_URL}/${path}`;
};

function buildPageSchema(page, imageUrl, siteUrl) {
  if (!page) return null;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.meta_description || page.title,
    ...(imageUrl && { "image": imageUrl }),
    ...(page.published_at && { "datePublished": new Date(page.published_at).toISOString().split('T')[0] }),
    "publisher": {
      "@type": "Organization",
      "name": "Radhya Education Academy",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/radhyaLogo.png`
      }
    }
  };
}

const getPageData = cache(async (slug) => {
  const { data: page } = await supabase
    .from("pages")
    .select("page_id, title, slug, content, image_url, meta_title, meta_description, meta_keywords, published_at, created_at, updated_at")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!page) return null;

  const imageUrl = getImageUrl(page.image_url);
  const pageSchema = buildPageSchema(page, imageUrl, siteUrl);
  const formattedDate = page.published_at
    ? new Date(page.published_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return {
    page,
    imageUrl,
    pageSchema,
    formattedDate,
  };
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    return {
      title: "Page Not Found | Radhya Education Academy",
      alternates: {
        canonical: `${siteUrl}/${slug}/`,
      },
    };
  }

  const { page, imageUrl, pageSchema } = data;

  return {
    title: page.meta_title || page.title,
    description: page.meta_description || `Read more about ${page.title}`,
    alternates: {
      canonical: `${siteUrl}/${slug}/`,
    },
    openGraph: {
      title: page.meta_title || page.title,
      description: page.meta_description,
      url: `${siteUrl}/${slug}/`,
      siteName: "Radhya Education Academy",
      type: "website",
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
    ...(pageSchema && {
      other: {
        "schema-webpage": JSON.stringify(pageSchema),
      },
    }),
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#270652] mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The page you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link
            href="/"
            className="inline-block bg-[#3C087E] text-white px-6 py-3 rounded-lg hover:bg-[#270652] transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageContent
      page={data.page}
      imageUrl={data.imageUrl}
      pageSchema={data.pageSchema}
      formattedDate={data.formattedDate}
    />
  );
}

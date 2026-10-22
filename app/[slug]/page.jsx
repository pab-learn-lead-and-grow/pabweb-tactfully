import { cache } from 'react';
import { notFound } from 'next/navigation';
import { supabase } from "@/lib/supabaseClient";
import PageContent from "@/components/Pages/PageContent";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
import { extractFAQFromMarkdown, buildFAQSchema } from '@/lib/extractFAQFromMarkdown';

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
  const { data: page, error } = await supabase
    .from("pages")
    .select("page_id, title, slug, content, image_url, meta_title, meta_description, meta_keywords, published_at, created_at, updated_at")
    .eq("slug", slug.trim())
    .eq("is_published", true)
    .single();

  if (error || !page) {
    if (error && error.code !== 'PGRST116') {
      console.error(`getPageData error for slug "${slug}":`, error);
    }
    return null;
  }

  const imageUrl = getImageUrl(page.image_url);
  const pageSchema = buildPageSchema(page, imageUrl, siteUrl);
  const faqs = extractFAQFromMarkdown(page.content);
  const faqSchema = buildFAQSchema(faqs);
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
    faqSchema,
    formattedDate,
  };
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    return {
      title: "Page Not Found | Radhya Education Academy",
      robots: { index: false, follow: false },
    };
  }

  const { page, imageUrl, pageSchema } = data;

  return {
    metadataBase: new URL(siteUrl),
    title: page.meta_title || page.title,
    description: page.meta_description || `Read more about ${page.title}`,
    alternates: {
      canonical: `${siteUrl}/${page.slug}/`,
    },
    openGraph: {
      title: page.meta_title || page.title,
      description: page.meta_description,
      url: `${siteUrl}/${page.slug}/`,
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
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: data.page.title, item: `${siteUrl}/${data.page.slug}/` },
        ]}
      />
      <PageContent
        page={data.page}
        imageUrl={data.imageUrl}
        pageSchema={data.pageSchema}
        faqSchema={data.faqSchema}
        formattedDate={data.formattedDate}
      />
    </>
  );
}

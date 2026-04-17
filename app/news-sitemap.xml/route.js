import { supabase } from "@/lib/supabaseClient";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

const hostname = new URL(baseUrl).hostname;
const isStaging = hostname.startsWith("staging.");

export async function GET() {
  if (isStaging) {
    return new Response("", { status: 404 });
  }

  const [newsRes, categoriesRes] = await Promise.all([
    supabase
      .from("news")
      .select("slug, title, published_at")
      .eq("is_published", true)
      .gte(
        "published_at",
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      )
      .order("published_at", { ascending: false })
      .limit(1000),
    supabase
      .from("news_categories")
      .select("slug, category_name, updated_at"),
  ]);

  const news = newsRes.data || [];
  const categories = categoriesRes.data || [];

  const newsUrls = news.map((item) => ({
    loc: `${baseUrl}/news/${item.slug}/`,
    lastmod: item.published_at,
    publicationDate: item.published_at,
    title: item.title,
  }));

  const categoryUrls = categories.map((item) => ({
    loc: `${baseUrl}/news/${item.slug}/`,
    lastmod: item.updated_at,
    publicationDate: item.updated_at,
    title: item.category_name,
  }));

  const allUrls = [...newsUrls, ...categoryUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <news:news>
      <news:publication>
        <news:name>Radhya Education Academy</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(item.publicationDate).toISOString()}</news:publication_date>
      <news:title><![CDATA[${item.title}]]></news:title>
    </news:news>
  </url>`
  )
  .join("\n")}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
export const dynamic = "force-dynamic";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export default async function sitemapIndex() {
  const sections = [
    {
      loc: `${baseUrl}/sitemap.xml`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/news-sitemap.xml`,
      lastmod: new Date().toISOString(),
    },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sections
  .map(
    (s) => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
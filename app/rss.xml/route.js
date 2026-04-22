import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/rss`, {
      next: { revalidate: 3600 }
    });
    const { data: items } = await res.json();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Radhya Education Academy - Latest News</title>
    <link>${siteUrl}</link>
    <description>Latest updates on online education, universities, career guidance, and study abroad information</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Radhya Education Academy</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>Radhya Education Academy</title>
      <link>${siteUrl}</link>
    </image>

${(items || []).map((item) => `    <item>
      <title><![CDATA[${item.title || ""}]]></title>
      <link>${siteUrl}${item.url}</link>
      <guid isPermaLink="true">${siteUrl}${item.url}</guid>
      <description><![CDATA[${item.excerpt || ""}]]></description>
      <pubDate>${item.published_at ? new Date(item.published_at).toUTCString() : new Date().toUTCString()}</pubDate>
      <dc:creator><![CDATA[Radhya Education Academy]]></dc:creator>
      ${item.categoryName ? `<category><![CDATA[${item.categoryName}]]></category>` : ""}
    </item>`).join("\n")}

  </channel>
</rss>`;

    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("RSS generation error:", error);
    return new NextResponse("Error generating RSS feed", { status: 500 });
  }
}
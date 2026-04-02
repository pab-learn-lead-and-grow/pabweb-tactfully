/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots */

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

const hostname = new URL(baseUrl).hostname;
const isStaging = hostname.startsWith("staging.");

export default function robots() {
  if (isStaging) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }

  return {
    rules: [
       {
        userAgent: "*",
        allow:[
          "/_next/static/",
          "/_next/image/",
        ],
        disallow: [
          "/_next/",
          "/*?category=", 
        ],
      },
      // AI Crawlers (explicit allow - optional but good)
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "YouBot", // You.com AI
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent", // Meta AI
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
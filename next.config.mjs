/** @type {import('next').NextConfig} */
const nextConfig = {

  trailingSlash: true,
  
  skipTrailingSlashRedirect: true,

  compress: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compiler: {
   
    removeConsole: process.env.NODE_ENV === "production",

    reactRemoveProperties: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bkcaoaoebbzrhbsfkjbm.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  async headers() {
    return [
      // 1. Catch-all FIRST — security headers + general page cache
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800" },
        ],
      },
      // 2. Static assets — immutable 1 year (overrides catch-all)
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/aboutUs/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/logos/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/banners/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/help.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/favicon.ico",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/Blog(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/amity/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/bennett/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/jain/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/muj/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/nmims/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/radhya/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/shoolini/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/smu/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/specializations/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // 3. Sitemap/RSS routes — no cache, always fresh (overrides everything above)
      {
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
      {
        source: "/sitemap-index.xml",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
      {
        source: "/news-sitemap.xml",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
      {
        source: "/rss.xml",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
      {
        source: "/api/rss",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
    ];
  },

  async redirects() {
    return [
	{
	  source: "/nmims/nmims-online-mba/",
	  destination: "https://radhyaeducationacademy.com/nmims-online-mba/",
	  permanent: true,
	},
   {
      source: "/blogs/nmims-online-mba-salary-growth",
      destination: "https://radhyaeducationacademy.com/blogs/nmims-online-mba-salary-growth-2026/",
      permanent: true,
    },
    {
  source: "/blogs/bvdu-online-mba",
  destination: "https://radhyaeducationacademy.com/blogs/bharati-vidyapeeth-online-mba/",
  permanent: true,
},
{
  source: "/blogs/manipal-jaipur-online-mba-fees",
  destination: "https://radhyaeducationacademy.com/blogs/manipal-jaipur-online-mba-fees-2026/",
  permanent: true,
},
{
  source: "/blogs/narsee-monjee-online-mba-fees",
  destination: "https://radhyaeducationacademy.com/news/narsee-monjee-online-mba-fees/",
  permanent: true,
},
	{
      source: "/top-online-mba-colleges-india-2026",
      destination: "https://radhyaeducationacademy.com/top-online-universities-india/",
      permanent: true,
    },
    {
      source: "/is-online-mba-valid-abroad-from-india",
      destination: "https://radhyaeducationacademy.com/blogs/is-online-mba-valid-abroad-from-india/",
      permanent: true,
    },
    {
      source: "/how-to-choose-best-online-mba-university-india",
      destination: "https://radhyaeducationacademy.com/blogs/how-to-choose-best-online-mba-university-india/",
      permanent: true,
    },
    {
      source: "/news/aicte",
      destination: "https://radhyaeducationacademy.com/news/aicte-news/",
      permanent: true,
    },
    {
      source: "/news/ugc",
      destination: "https://radhyaeducationacademy.com/news/ugc-news/",
      permanent: true,
    },
    {
      source: "/news/online-mba",
      destination: "https://radhyaeducationacademy.com/news/online-mba-news/",
      permanent: true,
    },
    {
  source: "/online-mba",
  destination: "/programs/online-mba/",
  permanent: true,
},
    {
      source: "/best-online-mba-programs-in-india",
      destination: "https://radhyaeducationacademy.com/blogs/best-online-mba-programs-in-india/",
      permanent: true,
    },
    {
      source: "/dayananda-sagar-university-online-mba",
      destination: "https://radhyaeducationacademy.com/blogs/dayananda-sagar-university-online-mba/",
      permanent: true,
    },
    {
      source: "/mdu-distance-education-admission-last-date-2026",
      destination: "https://radhyaeducationacademy.com/news/mdu-distance-education-admission-last-date-2026/",
      permanent: true,
    },
    {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.radhyaeducationacademy.com",
          },
        ],
        destination: "https://radhyaeducationacademy.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // ✅ Enforce trailing slash (important for SEO consistency)
  trailingSlash: true,

  // ✅ Enable compression
  compress: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compiler: {
    // ✅ Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",

    // ✅ Remove React dev props in production
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
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ✅ Force www → non-www (canonical domain)
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

      // ✅ Optional: normalize duplicate blog URLs (no trailing slash → slash)
      {
        source: "/blogs/:slug",
        destination: "/blogs/:slug/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
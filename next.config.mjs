/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // Bundle Optimization (backend only)
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Compiler optimizations (backend only)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production'
  },
  
  // Security Headers (CSP temporarily disabled due to font loading issue)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
          // CSP temporarily disabled - uncomment when font issue is resolved
          // {
          //   key: 'Content-Security-Policy',
          //   value: [
          //     "default-src 'self'",
          //     "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
          //     "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          //     "font-src 'self' https://fonts.gstatic.com",
          //     "img-src 'self' data: https: blob:",
          //     "connect-src 'self' https://*.supabase.co https://api.resend.com",
          //     "frame-src 'self' https://www.google.com https://www.google.com/maps",
          //     "child-src 'self' https://www.google.com/maps"
          //   ].join('; ')
          // }
        ]
      }
    ];
  }
};

export default nextConfig;

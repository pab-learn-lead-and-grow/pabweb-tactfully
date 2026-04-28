import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Radhya/Navbar";
import Footer from "../components/Radhya/Footer";
import Script from "next/script";



const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ['300','400','500','600','700'],
  variable: "--font-inter",
});


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

const hostname = new URL(siteUrl).hostname;
const isStaging = hostname.startsWith("staging.");

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
  default: "Best Online & Distance Education Consultant in India",
},

  description:
    "Explore online programs from top universities with personalized counselling from Radhya Education Academy.",

  keywords: [
    "online education",
    "distance learning",
    "online MBA",
    "UGC approved universities",
    "career counselling",
    "online degree programs",
  ],

  authors: [{ name: "Radhya Education Academy" }],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Radhya Education Academy",
    title:
      "Radhya Education Academy | Best Online & Distance Education Consultancy",
    description:
      "Explore online programs from top universities with personalized counselling from Radhya Education Academy",
    images: [
      {
        url: "/radhyaLogo.png",
        width: 180,
        height: 60,
        alt: "Radhya Education Academy Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Radhya Education Academy | Best Online & Distance Education Consultancy",
    description:
      "Explore online programs from top universities with personalized counselling from Radhya Education Academy",
    images: ["/radhyaLogo.png"],
    creator: "@radhyaeducation",
  },

  alternates: isStaging
    ? {}
    : {
        canonical: `${siteUrl}/`,
      },

  robots: isStaging
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://bkcaoaoebbzrhbsfkjbm.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://bkcaoaoebbzrhbsfkjbm.supabase.co" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PJYRD1BLTD"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PJYRD1BLTD');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://radhyaeducationacademy.com/#organization",
              "name": "Radhya Education Academy",
              "url": "https://radhyaeducationacademy.com",
              "description": "Education consultancy helping students with Online MBA, Distance Education and career guidance.",
              "areaServed": "India",
              "sameAs": []
            })
          }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href="/rss.xml"
        />
      </head>
     <body className={`${inter.className} scrollbar-hide`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

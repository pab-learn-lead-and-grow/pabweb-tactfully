import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Radhya/Navbar";
import Footer from "../components/Radhya/Footer";
import Script from "next/script";
import AutoPopupModal from "@/components/Radhya/AutoPopupModal";



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

  alternates: {},

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
        
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1329477829287394');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1329477829287394&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
     <body className={`${inter.className} scrollbar-hide`}>
        <Navbar />
        {children}
        <AutoPopupModal />
        <div id="global-footer">
  <Footer />
</div>
      </body>
    </html>
  );
}

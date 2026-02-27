import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Radhya/Navbar";
import Footer from "../components/Radhya/Footer";
import { Suspense } from "react";
import Script from "next/script";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


export const metadata = {
  title:{
    default:  "Radhya Education Academy || Best Education Consultant ",
    template: "%s | Radhya Education Academy",
  },
  description: "Explore online programs from top universities with personalized counselling from Radhya Education Academy.",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
     <body className={`${inter.className} scrollbar-hide`}>
        <Suspense fallback={null}>
        <Navbar />
        {children}
        <Footer />
        </Suspense>
      </body>
    </html>
  );
}

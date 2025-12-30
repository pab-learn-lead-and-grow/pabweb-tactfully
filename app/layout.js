import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Radhya/Navbar";
import Footer from "../components/Radhya/Footer";
import { Suspense } from "react";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title:{
    default:  "Radhya Education || Best Education Consultant ",
    template: "%s | Radhya Education",
  },
  description: "Explore online programs from top universities with personalized counselling",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

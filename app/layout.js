import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Pab/Navbar";
import Footer from "../components/Pab/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "PAB.. Learn, Lead & Grow || Best Education Consultant ",
  description: "Explore online programs from top universities with personalized counselling",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

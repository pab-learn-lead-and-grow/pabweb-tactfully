import BlogSix from "@/components/Blogs/BlogSix";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "How Online BBA Builds Entrepreneurs | Skills, Mindset & Business Growth",

  description:
    "Discover how an online BBA builds entrepreneurial skills including leadership, strategic thinking, financial understanding, and real-world business problem-solving.",

  alternates: {
    canonical: "/blogs/how-online-bba-builds-entrepreneurs/",
  },

  keywords: [
    "How online BBA builds entrepreneurs",
    "Online BBA for entrepreneurs",
    "Entrepreneurship through online BBA",
    "Online BBA benefits",
    "Business skills for entrepreneurs",
    "Online management degree",
    "BBA entrepreneurship skills",
  ],

  openGraph: {
    title: "How Online BBA Builds Entrepreneurs | Skills & Business Mindset",
    description:
      "Learn how an Online BBA program develops entrepreneurial thinking, leadership skills, and business strategy capabilities.",
    url: `${siteUrl}/blogs/how-online-bba-builds-entrepreneurs/`,
    siteName: "Radhya Education Academy",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "How Online BBA Builds Entrepreneurs",
    description:
      "Explore how Online BBA programs develop leadership, strategy, and entrepreneurial thinking for future business leaders.",
  },
};

export default function Blog() {
  return <BlogSix />;
}
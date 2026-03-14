import BlogFour from "@/components/Blogs/BlogFour";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "The Digital Revolution | How Online MBAs Are Shaping Modern Careers",

  description:
    "Discover how the digital revolution is transforming careers through Online MBA programs, industry trends, data-driven skills, and real success stories.",

  alternates: {
    canonical: "/blogs/the-digital-revolution/",
  },

  keywords: [
    "digital revolution online MBA",
    "how online MBA is reshaping careers",
    "online MBA global careers",
    "online MBA trends",
    "future of online MBA",
    "digital transformation in education",
    "online MBA success stories",
  ],

  openGraph: {
    title: "The Digital Revolution | How Online MBAs Are Shaping Careers",
    description:
      "Explore how Online MBA programs are transforming careers with digital skills, modern learning models, and global business opportunities.",
    url: `${siteUrl}/blogs/the-digital-revolution/`,
    siteName: "Radhya Education Academy",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Digital Revolution | Online MBA Career Impact",
    description:
      "Learn how Online MBA programs are reshaping global careers through digital transformation and modern business skills.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  return <BlogFour />;
}
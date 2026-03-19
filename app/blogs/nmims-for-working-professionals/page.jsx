import BlogThree from "@/components/Blogs/BlogThree";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "NMIMS for Working Professionals | Online Degrees & Flexible Learning",

  description:
    "Explore NMIMS online programs designed for working professionals. Discover flexible MBA and degree programs with industry-focused curriculum and career growth opportunities.",

  alternates: {
    canonical: "/blogs/nmims-for-working-professionals/",
  },

  keywords: [
    "NMIMS for working professionals",
    "NMIMS online programs",
    "NMIMS distance education",
    "NMIMS MBA for working professionals",
    "online degree for working professionals",
    "flexible online courses NMIMS",
    "NMIMS executive programs",
  ],

  openGraph: {
    title: "NMIMS for Working Professionals | Flexible Online Degree Programs",
    description:
      "Learn how NMIMS online programs help working professionals advance their careers through flexible learning and industry-focused education.",
    url: `${siteUrl}/blogs/nmims-for-working-professionals/`,
    siteName: "Radhya Education Academy",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "NMIMS for Working Professionals | Online Programs",
    description:
      "Discover flexible NMIMS online degree programs designed for working professionals seeking career advancement.",
  },
};

export default function Blog() {
  return <BlogThree />;
}
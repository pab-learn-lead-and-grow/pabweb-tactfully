import Disclaimer from "@/components/Radhya/DisclaimerPage";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Disclaimer | Radhya Education Academy",

  description:
    "Read the Disclaimer of Radhya Education Academy outlining the limitations of liability, website usage terms, and accuracy of information provided on our platform.",

  alternates: {
    canonical: `${siteUrl}/disclaimer/`,
  },

  openGraph: {
    title: "Disclaimer | Radhya Education Academy",
    description:
      "Understand the website disclaimer of Radhya Education Academy, including limitations of liability and informational use of the content provided.",
    url: `${siteUrl}/disclaimer/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Disclaimer | Radhya Education Academy",
    description:
      "Review the disclaimer of Radhya Education Academy regarding website content, liability limitations, and information accuracy.",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Disclaimer", item: `${siteUrl}/disclaimer/` },
        ]}
      />
      <Disclaimer />
    </>
  );
}

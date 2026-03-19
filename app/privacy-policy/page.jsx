import PrivacyPolicy from "@/components/Radhya/PrivacyPolicy";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Privacy Policy | Radhya Education Academy",

  description:
    "Read the Privacy Policy of Radhya Education Academy to understand how we collect, use, and protect your personal information when using our website and services.",

  alternates: {
    canonical: "/privacy-policy/",
  },

  openGraph: {
    title: "Privacy Policy | Radhya Education Academy",
    description:
      "Learn how Radhya Education Academy collects, uses, and protects your personal information through our privacy policy.",
    url: `${siteUrl}/privacy-policy/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Privacy Policy | Radhya Education Academy",
    description:
      "Review the privacy policy of Radhya Education Academy and understand how your information is protected.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
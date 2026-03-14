const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Disclaimer | Radhya Education Academy",

  description:
    "Read the Disclaimer of Radhya Education Academy Private Limited outlining website usage, service limitations, third-party information sources, and user responsibilities.",

  alternates: {
    canonical: "/disclaimer/",
  },

  openGraph: {
    title: "Disclaimer | Radhya Education Academy",
    description:
      "Official disclaimer for Radhya Education Academy website covering service scope, content accuracy, and legal limitations.",
    url: `${siteUrl}/disclaimer/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Disclaimer | Radhya Education Academy",
    description:
      "Read the official disclaimer of Radhya Education Academy regarding website use, services, and user responsibilities.",
  },
};
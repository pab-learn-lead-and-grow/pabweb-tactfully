import ContactPage from "@/components/Radhya/ContactPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Contact Radhya Education | Expert Counselling & Admission Support",

  description:
    "Contact Radhya Education Academy for expert guidance on online degree programs, university admissions, and personalized career counselling support.",

  alternates: {
    canonical: "/contact-us/",
  },

  keywords: [
    "Contact Radhya",
    "Radhya Education contact",
    "education counselling contact",
    "online degree guidance",
    "career counselling support",
    "university admission help",
    "Radhya education services",
  ],

  openGraph: {
    title: "Contact Radhya Education | Expert Counselling & Admission Support",
    description:
      "Get expert guidance from Radhya Education Academy for online degree programs, admissions assistance, and personalized career counselling.",
    url: `${siteUrl}/contact-us/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Contact Radhya Education | Expert Guidance",
    description:
      "Reach out to Radhya Education for online degree guidance, admission assistance, and career counselling support.",
  },
};

export default function ContactUs() {
  return <ContactPage />;
}
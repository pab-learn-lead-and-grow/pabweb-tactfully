import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Thank You | Radhya Education Academy",

  description:
    "Thank you for reaching out to Radhya Education Academy. Our expert counsellors will get back to you shortly.",

  alternates: {
    canonical: `${siteUrl}/thank-you/`,
  },

  keywords: [
    "Thank you",
    "Radhya Education thank you",
    "enquiry submitted",
    "counselling request",
  ],

  openGraph: {
    title: "Thank You | Radhya Education Academy",
    description:
      "Thank you for reaching out. Our expert counsellors will get back to you shortly.",
    url: `${siteUrl}/thank-you/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Thank You | Radhya Education Academy",
    description:
      "Thank you for reaching out. Our expert counsellors will get back to you shortly.",
  },
};

export default function ThankYou() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Thank You", item: `${siteUrl}/thank-you/` },
        ]}
      />
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mt-10 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Our expert counsellors will get back to you
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-md mx-auto">
            We have received your enquiry and one of our dedicated counsellors
            will reach out to you within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}

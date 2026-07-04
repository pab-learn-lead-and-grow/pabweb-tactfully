import RedirectToHome from "@/components/NmimsSection/RedirectToHome";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
import Script from "next/script";

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
    <Script id="fb-lead-event" strategy="afterInteractive">
    {`
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead');
      }
    `}
  </Script>
  <RedirectToHome />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Thank You", item: `${siteUrl}/thank-you/` },
        ]}
      />
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-20 h-20 mt-10 mx-auto mb-8 flex items-center justify-center">
  {/* Progress ring SVG - sits behind/around the checkmark */}
  <svg
    className="absolute inset-0 w-full h-full -rotate-90"
    viewBox="0 0 100 100"
  >
    {/* Background track (light circle) */}
    <circle
      cx="50"
      cy="50"
      r="44"
      fill="none"
      stroke="#dcfce7"
      strokeWidth="6"
    />
    {/* Animated progress stroke */}
    <circle
      className="progress-ring"
      cx="50"
      cy="50"
      r="44"
      fill="none"
      stroke="#16a34a"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>

  {/* Green filled circle background + checkmark, centered on top */}
  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
    <svg
      className="w-8 h-8 text-green-600"
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

import TermsAndCondition from "@/components/Radhya/TermsAndCondition";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms & Conditions | Radhya Education Academy",
  description: "Review the Terms and Conditions of Radhya Education Academy covering website usage, user responsibilities, third-party content, and applicable policies.",
  alternates: {
    canonical: `${siteUrl}/terms-and-conditions/`,
  },
  openGraph: {
    title: "Terms & Conditions | Radhya Education Academy",
    description: "Review the Terms and Conditions of Radhya Education Academy covering website usage, user responsibilities, third-party content, and applicable policies.",
    url: `${siteUrl}/terms-and-conditions/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Radhya Education Academy",
    description:
      "Review the Terms and Conditions of Radhya Education Academy covering website usage, user responsibilities, and applicable policies.",
  },
};

export default function terms(){
    return(
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", item: siteUrl },
                    { name: "Terms & Conditions", item: `${siteUrl}/terms-and-conditions/` },
                ]}
            />
            <TermsAndCondition />
        </>
    );
}

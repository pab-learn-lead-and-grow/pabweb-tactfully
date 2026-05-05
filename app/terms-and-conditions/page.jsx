import TermsAndCondition from "@/components/Radhya/TermsAndCondition";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms & Conditions || Radhya Education",
  description: "Review the Terms and Conditions of Radhya Education Academy to understand user responsibilities, website usage, and policies for accessing our services and information.",
   alternates: {
    canonical: "https://radhyaeducationacademy.com/terms-and-conditions/",
  },
  openGraph: {
    title: "https://radhyaeducationacademy.com/terms-and-conditions/ - UGC Approved Program | Radhya Education Academy",
    description: "Learn about this UGC-approved online degree program at Radhya Education Academy",
    url: "https://radhyaeducationacademy.com/terms-and-conditions/",
    siteName: "Radhya Education Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Radhya Education Academy - Online Programs",
    description: "Explore UGC-approved online degree programs from top universities",
  }
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

import SmuMba from "@/components/Smu/SmuMba";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

   title: "Sikkim Manipal Online MBA Program | Admission and Fees",

  description:
    "SMU Online MBA from Sikkim Manipal University is a UGC-approved management degree designed for working professionals with flexible online learning, industry-focused curriculum, and career support.",

  alternates: {
    canonical: `${siteUrl}/smu/sikkim-manipal-online-mba/`,
  },

  keywords: [
    "SMU Online MBA",
    "Sikkim Manipal University online MBA",
    "SMU distance MBA",
    "SMU online management degree",
    "Online MBA India",
    "UGC approved online MBA",
    "SMU online programs",
  ],

  openGraph: {
    title: "SMU Online MBA | UGC Approved MBA Degree",
    description:
      "Explore SMU Online MBA from Sikkim Manipal University with flexible learning, industry-relevant curriculum, and UGC-approved recognition.",
    url: `${siteUrl}/smu/sikkim-manipal-online-mba/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SMU Online MBA | Radhya Education Academy",
    description:
      "Learn about SMU Online MBA from Sikkim Manipal University and explore flexible UGC-approved MBA programs.",
  },
};

export default function SmuOnlineMbaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: siteUrl },
          { name: "Sikkim Manipal University", item: `${siteUrl}/smu/` },
          { name: "SMU Online MBA", item: `${siteUrl}/smu/sikkim-manipal-online-mba/` },
        ]}
      />
      <SmuMba />
    </>
  );
}

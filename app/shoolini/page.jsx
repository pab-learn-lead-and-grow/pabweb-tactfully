import ShooliniPage from "@/components/Shoolini/ShooliniPage";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Shoolini Online Programs | UGC Approved Courses",

  description:
    "Explore Shoolini online programs including MBA, BBA, and BCom. Shoolini University offers UGC-approved degrees with NAAC A++ accreditation and industry-focused curriculum.",

  alternates: {
    canonical: "/shoolini/",
  },

  openGraph: {
    title: "Shoolini Online Programs | Radhya Education Academy",
    description:
      "Explore UGC-approved Shoolini online programs including MBA, BBA, and BCom with NAAC A+ accreditation.",
    url: `${siteUrl}/shoolini/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Shoolini Online Programs | Radhya Education Academy",
    description:
      "Discover Shoolini online MBA, BBA, and BCom programs with UGC approval and NAAC A++ accreditation.",
  },
};

export default function ShooliniUniversityPage() {
  return <ShooliniPage />;
}
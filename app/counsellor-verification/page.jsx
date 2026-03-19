import CounsellorVerification from "@/components/Counsellor";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Counsellor Verification | Verify Radhya Education Counsellor CP ID",

  description:
    "Verify your counsellor’s CP ID instantly with Radhya Education Academy’s secure counsellor verification system. Ensure you are guided by an officially verified education counsellor.",

  alternates: {
    canonical: "/counsellor-verification/",
  },

  keywords: [
    "Counsellor verification",
    "Verify counsellor CP ID",
    "Radhya Education counsellor verification",
    "education counsellor verification India",
    "verify education consultant",
    "Radhya counsellor CP ID check",
  ],

  openGraph: {
    title:
      "Counsellor Verification | Radhya Education Academy",
    description:
      "Use the CP ID to verify whether your counsellor is officially approved by Radhya Education Academy. Safe, secure, and transparent guidance.",
    url: `${siteUrl}/counsellor-verification/`,
    siteName: "Radhya Education Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Counsellor Verification | Radhya Education Academy",
    description:
      "Verify your counsellor’s authenticity using the CP ID verification system by Radhya Education Academy.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CounsellorVerificationPage() {
  return <CounsellorVerification />;
}
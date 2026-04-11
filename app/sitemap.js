/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap */

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://radhyaeducationacademy.com";

const hostname = new URL(baseUrl).hostname;
const isStaging = hostname.startsWith("staging.");

const staticRoutes = [
  "/",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/counsellor-verification",
  "/university-response-time",
  "/ugc-approved-universities",
  "/online-universities-directory-india",
  "/top-online-universities-india",
  "/shoolini",
  "/jobs-at-radhya",
  "/jobs-at-radhya/inside-sales-fresher-job",
  "/jobs-at-radhya/inside-sales-experienced-job",
  "/jobs-at-radhya/digital-marketing-job",
  "/nmims",
  "/nmims/nmims-mumbai-online-mba",
  "/nmims/nmims-mumbai-online-mba-working-executives",
  "/nmims/nmims-mumbai-online-bba",
  "/nmims/nmims-mumbai-online-bcom",
  "/nmims/nmims-mumbai-online-diploma",
  "/nmims/nmims-mumbai-online-certification",
  "/amity",
  "/amity/amity-online-mba",
  "/amity/amity-online-bba",
  "/amity/amity-online-bcom",
  "/amity/amity-online-bcom-honours",
  "/amity/amity-online-bcom-international-finance-and-accounting",
  "/amity/amity-online-ba",
  "/amity/amity-online-bca",
  "/amity/amity-online-mca",
  "/amity/amity-online-ma",
  "/amity/amity-online-mcom",
  "/amity/amity-online-majmc",
  "/amity/amity-online-bajmc",
  "/amity/amity-online-msc-data-science",
  "/amity/amity-online-integrated-programs",
  "/jain",
  "/jain/jain-online-mba",
  "/jain/jain-online-bba",
  "/jain/jain-online-bcom",
  "/jain/jain-online-bca",
  "/jain/jain-online-mca",
  "/jain/jain-online-ma",
  "/jain/jain-online-mcom",
  "/muj",
  "/muj/manipal-jaipur-online-mba",
  "/muj/manipal-jaipur-online-bba",
  "/muj/manipal-jaipur-online-bcom",
  "/muj/manipal-jaipur-online-bca",
  "/muj/manipal-jaipur-online-mca",
  "/muj/manipal-jaipur-online-ma",
  "/muj/manipal-jaipur-online-mcom",
  "/muj/manipal-jaipur-online-majmc",
  "/smu",
  "/smu/sikkim-manipal-online-mba",
  "/smu/sikkim-manipal-online-bcom",
  "/smu/sikkim-manipal-online-ba",
  "/smu/sikkim-manipal-online-mca",
  "/smu/sikkim-manipal-online-ma",
  "/smu/sikkim-manipal-online-mcom",
  "/bennett",
  "/bennett/bennett-online-mba",
  "/bennett/bennett-online-bba",
  "/programs/online-mba",
  "/programs/online-mba-wx",
  "/programs/online-bba",
  "/programs/online-bca",
  "/programs/online-bcom",
  "/programs/online-bcom-honours",
  "/programs/online-bcom-international",
  "/programs/online-ba",
  "/programs/online-bajmc",
  "/programs/online-mca",
  "/programs/online-mcom",
  "/programs/online-ma",
  "/programs/online-majmc",
  "/programs/online-msc",
  "/programs/online-diploma",
  "/blogs",
  "/blogs/online-mba-for-career-growth",
  "/blogs/nmims-for-working-professionals",
  "/blogs/how-online-bba-builds-entrepreneurs",
  "/blogs/online-vs-regular-mba",
  "/blogs/the-financial-catalyst",
  "/blogs/the-digital-revolution",
  "/blogs/nmims-online-mba-registration-2026-guide",
  "/blogs/nmims-online-mba-marketing-2026-guide",
  "/blogs/ignou-vs-nmims-online-mba-2026",
  "/blogs/nmims-online-mba-salary-growth-2026",
  "/amity-online-mba-fees-roi-placements",
  "/is-online-mba-valid-in-india-for-government-private-jobs",
  "/symbiosis-online-mba-fees-eligibility-specializations-admission-guide",
  "/xlri-executive-mba-placements",
  "/news",
  "/news/ugc",
  "/news/aicte",
  "/news/higher-education",
  "/news/online-mba",
  "/news/online-learning",
  "/news/ugc-warning-on-fake-universities",
  "/news/online-mba-validity-india-2026-ugc-aicte-rules",
  "/news/top-ugc-approved-online-mba-colleges-india-2026",
  "/news/aicte-new-guidelines-2026-online-distance-education-rules",
  "/news/ugc-approved-universities-list-2026-online-learning",
  "/news/aicte-approval-process-2026-college-rules-india",
  "/news/nep-2026-update-impact-on-students-india",
  "/news/online-mba-trends-2026-skills-salary-growth",
  "/news/ugc-aicte-new-bill-2026-single-education-regulator",
  "/news/online-learning-expanding-higher-education-access-2026",
  "/news/maharashtra-cet-2026-schedule-revised",
  "/news/online-education-future-digital-universities-india-2026",
];

export default function sitemap() {
  if (isStaging) return [];

  return staticRoutes.map((path) => {
    const url =
      path === "/"
        ? `${baseUrl}/` // ✅ FIX: only single slash
        : `${baseUrl}${path}/`;

    return {
      url,
      lastModified: new Date(),
      changeFrequency:
        path === "/" ||
        path.startsWith("/nmims") ||
        path.startsWith("/amity") ||
        path.startsWith("/smu") ||
        path.startsWith("/muj") ||
        path.startsWith("/bennett") ||
        path.startsWith("/programs")
          ? "weekly"
          : "monthly",
      priority:
        path === "/"
          ? 1
          : path.startsWith("/nmims") ||
            path.startsWith("/amity") ||
            path.startsWith("/jain") ||
            path.startsWith("/muj") ||
            path.startsWith("/smu") ||
            path.startsWith("/shoolini") ||
            path.startsWith("/bennett") ||
            path.startsWith("/programs")
          ? 0.9
          : 0.7,
    };
  });
}
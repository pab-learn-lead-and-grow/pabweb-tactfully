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
  "/important-updates",
  "/university-response-time",
  "/ugc-approved-universities",
  "/universitieslist",
  "/college-cards",
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
  "/smu/sikkim-manipal-online-bba",
  "/smu/sikkim-manipal-online-bcom",
  "/smu/sikkim-manipal-online-ba",
  "/smu/sikkim-manipal-online-mca",
  "/smu/sikkim-manipal-online-ma",
  "/smu/sikkim-manipal-online-mcom",
  "/blogs/online-mba-for-career-growth",
  "/blogs/nmims-for-working-professionals",
  "/blogs/how-online-bba-builds-entrepreneurs",
  "/blogs/online-vs-regular-mba",
  "/blogs/the-financial-catalyst",
  "/blogs/the-digital-revolution",
  "/news",
];

export default function sitemap() {
  if (isStaging) return [];

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "/" || path.startsWith("/nmims") || path.startsWith("/amity")
        ? "weekly"
        : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/nmims") ||
          path.startsWith("/amity") ||
          path.startsWith("/jain") ||
          path.startsWith("/muj") ||
          path.startsWith("/smu")
        ? 0.9
        : 0.7,
  }));
}
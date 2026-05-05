import Script from "next/script";

export default function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null;

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <Script
      id={`breadcrumb-schema-${items[0]?.name?.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}

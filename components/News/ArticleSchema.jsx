"use client";

import Script from "next/script";

export default function ArticleSchema({ schema }) {
  if (!schema) return null;

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
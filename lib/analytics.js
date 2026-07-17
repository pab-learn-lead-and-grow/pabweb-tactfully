"use client";

export function getPageAttribution() {
  if (typeof window === "undefined") {
    return {
      page_path: null,
      page_location: null,
      page_title: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };
}

export function fireLeadEvent({
  form_type,
  university,
  course,
  cta_name,
  phone,
  email,
  name,
}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function" && !window.location.hostname.includes("localhost")) {
    const attribution = getPageAttribution();
    window.gtag("event", "generate_lead", {
      page_path: attribution.page_path,
      page_location: attribution.page_location,
      page_title: attribution.page_title,
      university: university || "",
      course: course || "",
      cta_name: cta_name || "",
      form_type: form_type || "",
      source: attribution.utm_source,
      medium: attribution.utm_medium,
      campaign: attribution.utm_campaign,
    });
  }
}

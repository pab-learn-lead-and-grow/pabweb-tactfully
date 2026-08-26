"use server";

import { supabaseServer } from "@/lib/supabaseServer";

let cachedLogos = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 10 * 60 * 1000;

export async function getFeaturedLogos() {
  const now = Date.now();

  if (cachedLogos && now - cacheTimestamp < CACHE_DURATION) {
    return cachedLogos;
  }

  if (!supabaseServer) {
    return cachedLogos || [];
  }

  const { data, error } = await supabaseServer.storage
    .from("logos")
    .list("featured", { limit: 100 });

  if (error) {
    console.error("Error fetching featured logos:", error);
    return cachedLogos || [];
  }

  const logos = (data || [])
    .filter((file) => file.name && !file.name.startsWith("."))
    .map((file) => {
      const { data: urlData } = supabaseServer.storage
        .from("logos")
        .getPublicUrl(`featured/${file.name}`);

      const name = file.name.replace(/\.[^/.]+$/, "");
      const alt = name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        src: urlData?.publicUrl || "/help.png",
        alt,
        href: "#featured",
      };
    });

  cachedLogos = logos;
  cacheTimestamp = now;
  return logos;
}

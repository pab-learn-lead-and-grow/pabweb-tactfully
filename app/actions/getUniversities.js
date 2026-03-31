"use server";

import { supabaseServer } from "@/lib/supabaseServer";

let cachedUniversities = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getUniversities() {
  const now = Date.now();
  
  if (cachedUniversities && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedUniversities;
  }

  const { data, error } = await supabaseServer
    .from("universitieslist")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching universities:", error);
    return cachedUniversities || [];
  }

  cachedUniversities = data || [];
  cacheTimestamp = now;
  return cachedUniversities;
}

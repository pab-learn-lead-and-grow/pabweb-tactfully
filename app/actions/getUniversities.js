"use server";

import { supabaseServer } from "@/lib/supabaseServer";

export async function getUniversities() {
  const { data, error } = await supabaseServer
    .from("universitieslist")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching universities:", error);
    return [];
  }

  return data || [];
}

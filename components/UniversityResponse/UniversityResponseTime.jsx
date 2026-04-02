import { supabaseServer } from "@/lib/supabaseServer";
import UniversityResponseTableClient from "./UniversityResponseTableClient";

export default async function UniversityResponseTime() {

  const { data, count } = await supabaseServer
    .from("university_response_time")
    .select("id, university_name, response_time", { count: "exact" })
    .order("response_time", { ascending: false });

  return (
    <UniversityResponseTableClient
      initialData={data || []}
      initialCount={count || 0}
    />
  );
}
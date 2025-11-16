// app/api/counselling/route.js
import { createSupabaseClient } from "@/lib/supabaseClient";

/**
 * POST /api/counselling
 * Expects JSON body:
 * { name, email, university, course, phoneCode, phone }
 */

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, university, course, phoneCode, phone } = formData || {};

    // Basic validation
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields: name, email, phone" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create a supabase client inside the route (server-side)
    const supabase = createSupabaseClient();

    // Insert row into counselling_form
    const { data, error } = await supabase
      .from("counselling_form")
      .insert([
        {
          name,
          email,
          university: university || null,
          course: course || null,
          phone_code: phoneCode || null,
          phone,
        },
      ])
      .select(); // return inserted rows

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message || "Database insert failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error submitting form:", err);
    return new Response(
      JSON.stringify({ success: false, error: (err && err.message) || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// app/api/counselling/route.js
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const formData = await request.json();

    const { name, email, university, course, phoneCode, phone } = formData;

    const { data, error } = await supabase
      .from("counselling_form")
      .insert([
        {
          name,
          email,
          university,
          course,
          phone_code: phoneCode,
          phone,
        },
      ]);

    if (error) throw error;

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("Error submitting form:", err.message);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

// app/api/counselling/route.js
import { createSupabaseClient } from "@/lib/supabaseClient";
import { Resend } from "resend";

/**
 * POST /api/counselling
 * Expects JSON body:
 * { name, email, university, course, phoneCode, phone, message }
 */

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, university, course, phoneCode, phone, message } = formData || {};

  if (!name?.trim()) {
  return new Response(JSON.stringify({ success:false, error:"Name is required" }), { status:400 });
}

if (!email?.trim()) {
  return new Response(JSON.stringify({ success:false, error:"Email is required" }), { status:400 });
}

if (!university?.trim()) {
  return new Response(JSON.stringify({ success:false, error:"University is required" }), { status:400 });
}

if (!course?.trim()) {
  return new Response(JSON.stringify({ success:false, error:"Course is required" }), { status:400 });
}

if (!phone?.trim()) {
  return new Response(JSON.stringify({ success:false, error:"Phone is required" }), { status:400 });
}


    // Create a supabase client inside the route (server-side)
    const supabase = createSupabaseClient();

    // Insert row into counselling_form
   const { data, error } = await supabase
  .from("counselling_form")
  .insert([
    {
      name: name.trim(),
      email: email.trim(),
      university: university.trim(),
      course: course.trim(),
      phone: `${phoneCode || '+91'} ${phone.trim()}`,
      queries: message?.trim() || null,
    },
  ])
  .select();


    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message || "Database insert failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email notification to admin (only on successful insert)
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";

      await resend.emails.send({
        from: "Counselling Form <onboarding@resend.dev>", // Use your verified domain
        to: adminEmail,
        subject: "🎓 New Counselling Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #345895; margin-top: 0;">New Counselling Request</h2>
              <p style="color: #666; margin-bottom: 20px;">A new student has submitted a counselling form. Details below:</p>
              
              <div style="background-color: #E0ECF8; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold; width: 40%;">Student Name:</td>
                    <td style="padding: 8px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #345895;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0; color: #333;">${phoneCode || '+91'} ${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">University Interest:</td>
                    <td style="padding: 8px 0; color: #333;">${university || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Course Interest:</td>
                    <td style="padding: 8px 0; color: #333;">${course || 'Not specified'}</td>
                  </tr>
                </table>
              </div>
              
              ${message ? `
                <div style="background-color: #fff8e1; border-left: 4px solid #ffc107; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                  <p style="margin: 0; color: #666; font-weight: bold;">Student's Query:</p>
                  <p style="margin: 10px 0 0 0; color: #333;">${message}</p>
                </div>
              ` : ''}
              
              <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                This is an automated notification from your counselling form system.
              </p>
            </div>
          </div>
        `,
      });

      console.log("✅ Admin notification email sent successfully");
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("⚠️ Failed to send admin email notification:", emailError);
      // Continue - form submission was successful even if email failed
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

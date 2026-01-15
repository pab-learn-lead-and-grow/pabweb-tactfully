// app/api/counselling/route.js
import { supabase } from "@/lib/supabaseClient";
import { Resend } from "resend";
import { 
  sanitizeFormData, 
  validateCounsellingForm,
  sanitizeInput 
} from "@/lib/security";
import { counsellingRateLimiter } from "@/lib/rateLimiter";

/**
 * POST /api/counselling
 * Expects JSON body:
 * { name, email, university, course, phoneCode, phone, message }
 */

export async function POST(request) {
  try {
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimitResult = counsellingRateLimiter.isAllowed(ip);
    
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: rateLimitResult.error,
          resetIn: rateLimitResult.resetIn
        }), 
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': 5,
            'X-RateLimit-Remaining': 0,
            'X-RateLimit-Reset': rateLimitResult.resetIn
          }
        }
      );
    }

    const formData = await request.json();
    const { name, email, university, course, phoneCode, phone, message } = formData || {};

    // Sanitize all input data
    const sanitizedData = sanitizeFormData({
      name,
      email,
      university,
      course,
      phoneCode,
      phone,
      message
    });

    // Validate form data
    const validation = validateCounsellingForm(sanitizedData);
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Validation failed",
          details: validation.errors 
        }), 
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }


// Insert row into counselling_form
   const { data, error } = await supabase
  .from("counselling_form")
  .insert([
    {
      name: sanitizedData.name,
      email: sanitizedData.email,
      university: sanitizedData.university,
      course: sanitizedData.course,
      phone: `${sanitizedData.phoneCode || '+91'} ${sanitizedData.phone}`,
      queries: sanitizedData.message || null,
    },
  ])
  .select();


if (error) {
      console.error("Supabase insert error:", error);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to submit form. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

// Send email notifications (only on successful insert)
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const adminEmail = process.env.ADMIN_EMAIL;

      // Send admin notification
      await resend.emails.send({
        from: "Radhya Education <contact@radhyaeducationacademy.com>",
        to: [adminEmail],
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

      // Send user confirmation email
      await resend.emails.send({
        from: "Radhya Education <contact@radhyaeducationacademy.com>",
        to: [email],
        subject: "✅ Your Counselling Request Has Been Received",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #270652; margin: 0; font-size: 28px;">Thank You, ${name}! 🎓</h1>
                <p style="color: #666; margin: 10px 0 0 0;">Your counselling request has been successfully submitted</p>
              </div>
              
              <div style="background-color: #4D964F; color: white; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: center;">
                <p style="margin: 0; font-size: 18px; font-weight: bold;">What Happens Next?</p>
                <p style="margin: 10px 0 0 0;">Our certified mentor will contact you within 24 hours</p>
              </div>
              
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #270652; margin-top: 0;">Your Request Details:</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 40%;">University Interest:</td>
                    <td style="padding: 8px 0; color: #333;">${university || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Course Interest:</td>
                    <td style="padding: 8px 0; color: #333;">${course || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Contact:</td>
                    <td style="padding: 8px 0; color: #333;">${phoneCode || '+91'} ${phone}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 4px; margin-bottom: 25px;">
                <p style="margin: 0; color: #1976d2; font-weight: bold;">📞 Expect a call from our mentor</p>
                <p style="margin: 8px 0 0 0; color: #666;">They'll help you choose the right path and answer all your questions</p>
              </div>
              
              <div style="text-align: center; margin-bottom: 20px;">
                <p style="color: #999; font-size: 14px; margin: 0;">Have questions? Reach out to us</p>
                <p style="color: #270652; font-size: 14px; margin: 5px 0 0 0;">
                  <a href="mailto:contact@radhyaeducationacademy.com" style="color: #270652; text-decoration: none;">contact@radhyaeducationacademy.com</a>
                </p>
              </div>
              
              <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                This is an automated confirmation. No need to reply.<br>
                © 2024 Radhya Education. All rights reserved.
              </p>
            </div>
          </div>
        `,
      });

      console.log("✅ Admin and user confirmation emails sent successfully");
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("⚠️ Failed to send email notifications:", emailError);
      // Continue - form submission was successful even if email failed
    }

return new Response(JSON.stringify({ success: true, data }), {
      status: 201,
      headers: { 
        "Content-Type": "application/json",
        'X-RateLimit-Limit': 5,
        'X-RateLimit-Remaining': rateLimitResult.remaining
      },
    });
} catch (err) {
    console.error("Error submitting form:", err);
    return new Response(
      JSON.stringify({ success: false, error: "An error occurred. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

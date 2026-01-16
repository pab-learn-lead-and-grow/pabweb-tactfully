// app/api/contact/route.js
import { supabase } from "@/lib/supabaseClient";
import { Resend } from "resend";
import { 
  sanitizeFormData, 
  validateContactForm,
  sanitizeInput 
} from "@/lib/security";
import { contactRateLimiter } from "@/lib/rateLimiter";

/**
 * POST /api/contact
 * Expects JSON body:
 * { firstName, lastName, email, phone, message }
 */

export async function POST(request) {
  try {
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimitResult = contactRateLimiter.isAllowed(ip);
    
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
    const { firstName, lastName, email, phone, message } = formData || {};

    // Sanitize all input data
    const sanitizedData = sanitizeFormData({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    // Validate form data
    const validation = validateContactForm(sanitizedData);
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

    // Insert into contact_message table (singular, like counselling_form)
    const { data, error } = await supabase
      .from("contact_message")
      .insert([
        {
          first_name: sanitizedData.firstName,
          last_name: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: sanitizedData.message,
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
      const fullName = `${sanitizedData.firstName} ${sanitizedData.lastName}`;

      // Send admin notification
      await resend.emails.send({
        from: "Contact Form <contact@radhyaeducationacademy.com>",
        to: [adminEmail],
        subject: "📧 New Contact Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #345895; margin-top: 0;">New Contact Message</h2>
              <p style="color: #666; margin-bottom: 20px;">Someone has sent you a message through the contact form:</p>
              
              <div style="background-color: #E0ECF8; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold; width: 40%;">Name:</td>
                    <td style="padding: 8px 0; color: #333;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="mailto:${sanitizedData.email}" style="color: #345895;">${sanitizedData.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedData.phone}</td>
                  </tr>
                </table>
              </div>
              
              ${sanitizedData.message ? `
                <div style="background-color: #fff8e1; border-left: 4px solid #ffc107; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                  <p style="margin: 0; color: #666; font-weight: bold;">Message:</p>
                  <p style="margin: 10px 0 0 0; color: #333;">${sanitizedData.message}</p>
                </div>
              ` : ''}
              
              <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                This is an automated notification from your contact form system.
              </p>
            </div>
          </div>
        `,
      });

      // Send user confirmation email
      await resend.emails.send({
        from: "Radhya Education <contact@radhyaeducationacademy.com>",
        to: [sanitizedData.email],
        subject: "✅ Your Message Has Been Received",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #270652; margin: 0; font-size: 28px;">Thank You, ${sanitizedData.firstName}! 📧</h1>
                <p style="color: #666; margin: 10px 0 0 0;">Your message has been successfully received</p>
              </div>
              
              <div style="background-color: #4D964F; color: white; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: center;">
                <p style="margin: 0; font-size: 18px; font-weight: bold;">What Happens Next?</p>
                <p style="margin: 10px 0 0 0;">We'll get back to you within 24 hours</p>
              </div>
              
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #270652; margin-top: 0;">Your Message Details:</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 40%;">Name:</td>
                    <td style="padding: 8px 0; color: #333;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedData.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedData.phone}</td>
                  </tr>
                </table>
              </div>
              
              ${sanitizedData.message ? `
                <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 4px; margin-bottom: 25px;">
                  <p style="margin: 0; color: #1976d2; font-weight: bold;">📝 Your Message:</p>
                  <p style="margin: 8px 0 0 0; color: #666;">${sanitizedData.message}</p>
                </div>
              ` : ''}
              
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

      console.log("✅ Contact form emails sent successfully");
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("⚠️ Failed to send contact form emails:", emailError);
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
    console.error("Error submitting contact form:", err);
    return new Response(
      JSON.stringify({ success: false, error: "An error occurred. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
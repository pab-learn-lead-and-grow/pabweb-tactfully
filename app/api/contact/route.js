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
    const { firstName, lastName, email, phone, message, source } = formData || {};

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
      .from("contact_messages")
      .insert([
        {
          first_name: sanitizedData.firstName,
          last_name: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: sanitizedData.message,
          source: source || "Contact Page",
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
      const adminEmail = process.env.ADMIN_EMAIL || "contact@radhyaeducationacademy.com";

      // Send admin notification
      await resend.emails.send({
        from: "Contact Form <contact@radhyaeducationacademy.com>",
        to: [adminEmail],
        subject: "📧 New Contact Form Submission",
        html: `<p>New contact from ${fullName} - ${sanitizedData.email}</p>`,
      });

      // Send user confirmation email
      await resend.emails.send({
        from: "Radhya Education <contact@radhyaeducationacademy.com>",
        to: [sanitizedData.email],
        subject: "✅ Your Message Has Been Received",
        html: `<p>Thank you ${sanitizedData.firstName}! We've received your message.</p>`,
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
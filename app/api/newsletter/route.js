// app/api/newsletter/route.js
import { Resend } from "resend";
import { sanitizeInput, validateEmail } from "@/lib/security";
import { newsletterRateLimiter } from "@/lib/rateLimiter";

export async function POST(request) {
  try {
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimitResult = newsletterRateLimiter.isAllowed(ip);
    
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
            'X-RateLimit-Limit': 3,
            'X-RateLimit-Remaining': 0,
            'X-RateLimit-Reset': rateLimitResult.resetIn
          }
        }
      );
    }

    const formData = await request.json();
    const { email } = formData || {};

    // Validate and sanitize email
    if (!email || !validateEmail(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Valid email is required" 
        }), 
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const sanitizedEmail = sanitizeInput(email);

    // Send to Resend (or your newsletter service)
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: "Newsletter <onboarding@resend.dev>",
        to: process.env.ADMIN_EMAIL || "admin@example.com",
        subject: "📧 New Newsletter Subscription",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #345895; margin-top: 0;">New Newsletter Subscription</h2>
              <p style="color: #666; margin-bottom: 20px;">Someone subscribed to your newsletter:</p>
              
              <div style="background-color: #E0ECF8; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #333;">
                      <a href="mailto:${sanitizedEmail}" style="color: #345895;">${sanitizedEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #345895; font-weight: bold;">Date:</td>
                    <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                  </tr>
                </table>
              </div>
              
              <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                This is an automated notification from your newsletter system.
              </p>
            </div>
          </div>
        `,
      });

      console.log("✅ Newsletter subscription email sent successfully");
    } catch (emailError) {
      console.error("⚠️ Failed to send newsletter email:", emailError);
      // Continue - we might want to store the email even if notification fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully subscribed to newsletter" 
      }), 
      { 
        status: 201,
        headers: { 
          "Content-Type": "application/json",
          'X-RateLimit-Limit': 3,
          'X-RateLimit-Remaining': rateLimitResult.remaining
        }
      }
    );
  } catch (err) {
    console.error("Error in newsletter subscription:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "An error occurred. Please try again later." 
      }), 
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
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

    // Send email notifications (only on successful insert)
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const adminEmail = [process.env.ADMIN_EMAIL || "contact@radhyaeducationacademy.com"];

      // Send admin notification
      await resend.emails.send({
        from: "Newsletter <contact@radhyaeducationacademy.com>",
        to: adminEmail,
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

      // Send user confirmation email
      await resend.emails.send({
        from: "Radhya Education <contact@radhyaeducationacademy.com>",
        to: [sanitizedEmail],
        subject: "✅ Welcome to Radhya Education Newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #270652; margin: 0; font-size: 28px;">Welcome! 🎓</h1>
                <p style="color: #666; margin: 10px 0 0 0;">You're now subscribed to Radhya Education newsletter</p>
              </div>
              
              <div style="background-color: #4D964F; color: white; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: center;">
                <p style="margin: 0; font-size: 18px; font-weight: bold;">What to Expect?</p>
                <p style="margin: 10px 0 0 0;">Latest courses, career tips, and exclusive offers</p>
              </div>
              
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #270652; margin-top: 0;">Your Subscription Details:</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 40%;">Email:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Status:</td>
                    <td style="padding: 8px 0; color: #4D964F; font-weight: bold;">✅ Active</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">Subscribed:</td>
                    <td style="padding: 8px 0; color: #333;">${new Date().toLocaleDateString()}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 4px; margin-bottom: 25px;">
                <p style="margin: 0; color: #1976d2; font-weight: bold;">📚 Newsletter Content:</p>
                <p style="margin: 8px 0 0 0; color: #666;">
                  • New course announcements<br>
                  • Career guidance and tips<br>
                  • Special discounts and offers<br>
                  • Education industry insights
                </p>
              </div>
              
              <div style="text-align: center; margin-bottom: 20px;">
                <p style="color: #999; font-size: 14px; margin: 0;">Want to unsubscribe?</p>
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

      console.log("✅ Newsletter emails sent successfully");
    } catch (emailError) {
      console.error("❌ Failed to send newsletter emails:", emailError);
      console.error("Email error details:", emailError.message);
      // Continue - subscription was successful even if email failed
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
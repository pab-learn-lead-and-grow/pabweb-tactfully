// app/api/contact-email/route.js
import { Resend } from "resend";
import { sanitizeFormData } from "@/lib/security";

/**
 * POST /api/contact-email
 * Email notification only (after database insert)
 */

export async function POST(request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phone, message } = formData || {};

    // Sanitize data
    const sanitizedData = sanitizeFormData({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminEmail = process.env.ADMIN_EMAIL || "contact@radhyaeducationacademy.com";
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
            <p style="color: #666; margin-bottom: 20px;">Someone has sent you a message through contact form:</p>
            
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

    console.log("✅ Contact emails sent successfully");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error sending contact emails:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send emails" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
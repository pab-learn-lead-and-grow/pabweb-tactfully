// app/api/job-email/route.js
import { Resend } from "resend";
import { sanitizeFormData } from "@/lib/security";

/**
 * POST /api/job-email
 * Email notification only (after database insert)
 */

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, position, experience, resumeUrl } = formData || {};

    // Sanitize data
    const sanitizedData = sanitizeFormData({
      name,
      email,
      phone,
      position,
      experience,
      resumeUrl
    });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminEmail = process.env.ADMIN_EMAIL || "contact@radhyaeducationacademy.com";

    // Send admin notification with resume attachment
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #345895; margin-top: 0;">📋 New Job Application</h2>
          <p style="color: #666; margin-bottom: 20px;">A new candidate has applied for a position:</p>
          
          <div style="background-color: #E0ECF8; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #345895; font-weight: bold; width: 40%;">Candidate Name:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #345895; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${sanitizedData.email}" style="color: #345895;">${sanitizedData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #345895; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #345895; font-weight: bold;">Position:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.position}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #345895; font-weight: bold;">Experience:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.experience}</td>
              </tr>
            </table>
          </div>
          
          ${sanitizedData.resumeUrl ? `
            <div style="background-color: #e8f5e8; border-left: 4px solid #4caf50; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
              <p style="margin: 0; color: #2e7d32; font-weight: bold;">📄 Resume Available</p>
              <p style="margin: 8px 0 0 0; color: #666;">
                Download: <a href="${sanitizedData.resumeUrl}" style="color: #2e7d32; text-decoration: underline;" target="_blank">View Resume</a>
              </p>
            </div>
          ` : ''}
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            This is an automated notification from your job application system.
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Job Applications <contact@radhyaeducationacademy.com>",
      to: [adminEmail],
      subject: `📋 New Job Application: ${sanitizedData.position}`,
      html: adminEmailHtml,
    });

    // Send candidate confirmation email
    await resend.emails.send({
      from: "Radhya Education <contact@radhyaeducationacademy.com>",
      to: [sanitizedData.email],
      subject: "✅ Your Job Application Has Been Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #270652; margin: 0; font-size: 28px;">Thank You, ${sanitizedData.name}! 📋</h1>
              <p style="color: #666; margin: 10px 0 0 0;">Your job application has been successfully received</p>
            </div>
            
            <div style="background-color: #4D964F; color: white; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: center;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">What Happens Next?</p>
              <p style="margin: 10px 0 0 0;">Our HR team will review your application and contact you within 3-5 business days</p>
            </div>
            
            <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #270652; margin-top: 0;">Your Application Details:</h3>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold; width: 40%;">Position:</td>
                  <td style="padding: 8px 0; color: #333;">${sanitizedData.position}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Experience:</td>
                  <td style="padding: 8px 0; color: #333;">${sanitizedData.experience}</td>
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
            
            <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 4px; margin-bottom: 25px;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">💼 Next Steps:</p>
              <p style="margin: 8px 0 0 0; color: #666;">
                • Application review by HR team<br>
                • Shortlisted candidates will be contacted for interview<br>
                • Keep your contact information updated
              </p>
            </div>
            
            <div style="text-align: center; margin-bottom: 20px;">
              <p style="color: #999; font-size: 14px; margin: 0;">Questions about your application?</p>
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

    console.log("✅ Job application emails sent successfully");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("❌ Error sending job application emails:", err);
    console.error("Job email error details:", err.message);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send emails" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
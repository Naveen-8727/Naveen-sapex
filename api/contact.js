import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, requirement, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  // Create transporter using GoDaddy SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtpout.secureserver.net",
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    secure: true, // SSL on port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Build the email
  const mailOptions = {
    from: `"Sapex Global Website" <${process.env.SMTP_USER}>`,
    to: "info@sapexglobal.com",
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: #a0aec0; margin: 8px 0 0;">Sapex Global Website</p>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #4a5568; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2d3748;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #4a5568;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2d3748;">
                <a href="mailto:${escapeHtml(email)}" style="color: #3182ce;">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #4a5568;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2d3748;">${phone ? escapeHtml(phone) : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #4a5568;">Requirement</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2d3748;">${requirement ? escapeHtml(requirement) : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #4a5568; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #2d3748; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>
        <p style="text-align: center; color: #a0aec0; font-size: 12px; margin-top: 20px;">
          This email was sent from the contact form on sapexglobal.com
        </p>
      </div>
    `,
  };

  try {
    await transporter.verify();
    // console.log("SMTP VERIFIED"); //testing
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
}

/** Escape HTML to prevent XSS in the email body */
function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

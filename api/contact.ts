import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, company, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Waterfield Website <onboarding@resend.dev>",
      to: "swilson@waterfield.com.au",
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Name</td>
            <td style="padding: 8px 12px;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Phone</td>
            <td style="padding: 8px 12px;">${phone}</td>
          </tr>` : ""}
          ${company ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Company</td>
            <td style="padding: 8px 12px;">${company}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

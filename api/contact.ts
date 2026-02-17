import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const phoneRegex = /^[+\d\s().-]{7,20}$/;
const contactFormSchema = z.object({
  firstName: z.string().trim().min(2).max(50),
  lastName: z.string().trim().min(2).max(50),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .optional()
    .default("")
    .refine((value) => value === "" || phoneRegex.test(value), {
      message: "Please enter a valid phone number.",
    }),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(20).max(2000),
  honeypot: z.string().optional().default(""),
});

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });

const formatHtmlMessage = (message: string) => escapeHtml(message).replace(/\n/g, "<br />");
const normalizedEnv = (value: string | undefined) => value?.trim().replace(/^"(.*)"$/, "$1");

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const resendApiKey = normalizedEnv(process.env.RESEND_API_KEY);
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return response.status(500).json({ error: "Email service is not configured." });
  }

  const fromAddress = normalizedEnv(process.env.RESEND_FROM_EMAIL);
  const recipient = normalizedEnv(process.env.CONTACT_RECIPIENT_EMAIL);

  if (!fromAddress || !recipient) {
    console.error("Missing RESEND_FROM_EMAIL or CONTACT_RECIPIENT_EMAIL environment variables.");
    return response.status(500).json({ error: "Contact routing is not configured." });
  }

  let payload = request.body;
  if (!payload || typeof payload === "string") {
    try {
      payload = payload ? JSON.parse(payload) : {};
    } catch {
      return response.status(400).json({ error: "Invalid JSON payload." });
    }
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    const issue = parsed.error.issues.at(0);
    return response.status(400).json({ error: issue?.message || "Invalid form submission." });
  }

  const { honeypot, ...formValues } = parsed.data;

  if (honeypot) {
    // Likely an automated submission; pretend it worked.
    return response.status(200).json({ ok: true });
  }

  const resend = new Resend(resendApiKey);

  try {
    const subject = `New contact enquiry from ${formValues.firstName} ${formValues.lastName}`;
    const plainText = [
      "New contact form submission:",
      `Name: ${formValues.firstName} ${formValues.lastName}`,
      `Email: ${formValues.email}`,
      `Phone: ${formValues.phone || "Not provided"}`,
      `Company: ${formValues.company || "Not provided"}`,
      "",
      "Message:",
      formValues.message,
    ].join("\n");

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #0f172a; line-height: 1.55;">
        <h2 style="margin: 0 0 12px;">New contact form submission</h2>
        <p style="margin: 0 0 16px;">Received at ${new Date().toISOString()}.</p>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
          <tbody>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Name</td>
              <td style="padding: 4px 0;">${escapeHtml(formValues.firstName)} ${escapeHtml(formValues.lastName)}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Email</td>
              <td style="padding: 4px 0;">${escapeHtml(formValues.email)}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Phone</td>
              <td style="padding: 4px 0;">${formValues.phone ? escapeHtml(formValues.phone) : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Company</td>
              <td style="padding: 4px 0;">${formValues.company ? escapeHtml(formValues.company) : "Not provided"}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Message</p>
          <p style="white-space: pre-wrap; margin: 0;">${formatHtmlMessage(formValues.message)}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [recipient],
      replyTo: formValues.email,
      subject,
      text: plainText,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      const errorDetails =
        typeof error === "object" && error && "message" in error ? (error as { message?: string }).message : undefined;

      return response.status(502).json({
        error: "Unable to send your message right now. Please try again shortly.",
        details: process.env.NODE_ENV !== "production" ? errorDetails : undefined,
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return response.status(500).json({ error: "We were unable to send your message. Please try again later." });
  }
}

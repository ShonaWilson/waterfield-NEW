import { z } from "zod";

const phoneRegex = /^[+\d\s().-]{7,20}$/;

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter at least two characters.")
    .max(50, "Please keep your first name under 50 characters."),
  lastName: z
    .string()
    .trim()
    .min(2, "Please enter at least two characters.")
    .max(50, "Please keep your last name under 50 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .default("")
    .refine((value) => value === "" || phoneRegex.test(value), {
      message: "Please enter a valid phone number (digits, spaces, +, (), or -).",
    }),
  company: z
    .string()
    .trim()
    .max(120, "Please keep company names under 120 characters.")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters so we have enough context.")
    .max(2000, "Please keep your message under 2,000 characters."),
  honeypot: z.string().optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  honeypot: "",
};

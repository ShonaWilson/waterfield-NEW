import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { contactFormDefaults, contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
  });

  useEffect(() => {
    document.title = "Waterfield | Contact us";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error((data && data.error) || "We couldn't send your message. Please try again.");
      }

      toast.success("Thank you for reaching out. We'll respond within two business days.");
      form.reset(contactFormDefaults);
    } catch (error) {
      const message = error instanceof Error ? error.message : "We couldn't send your message. Please try again later.";
      toast.error(message);
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mt-4 grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] items-start">
            <div className="space-y-6 text-left">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                Let's Connect
              </p>
              <div className="space-y-4 text-lg text-foreground">
                <p className="font-heading font-semibold">Thank you for your interest in Waterfield.</p>
                <p className="text-muted-foreground leading-relaxed">
                  If you'd like to explore how Waterfield can help bring clarity, alignment, and action to your organisation, we
                  look forward to hearing from you.
                </p>
              </div>
              <div className="rounded-3xl border border-border/40 bg-card/60 p-6 space-y-6">
                <p className="font-heading text-base text-foreground">Prefer to reach out directly?</p>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:+61299221881"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-heading text-base">+61 2 9922 1881</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@waterfield.com.au"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-heading text-base">info@waterfield.com.au</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <Card
              id="contact-form"
              className="rounded-3xl shadow-xl border-primary/10 w-full lg:max-w-[700px] lg:justify-self-start"
            >
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-heading text-foreground">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <input
                      type="text"
                      tabIndex={-1}
                      aria-hidden
                      className="hidden"
                      {...form.register("honeypot")}
                    />
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jamie" autoComplete="given-name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input placeholder="Lee" autoComplete="family-name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@company.com" type="email" autoComplete="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+61 2 9922 1881" type="tel" autoComplete="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Company name" autoComplete="organization" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Leave us a message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Share the context, objectives, and timelines you'd like us to know."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

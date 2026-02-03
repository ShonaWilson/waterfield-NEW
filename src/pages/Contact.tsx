import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Waterfield | Contact us";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  return (
    <Layout>
      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
              Let's Connect
            </p>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Thank you for your interest in Waterfield.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you'd like to explore how Waterfield can help bring clarity, alignment, and action to your organisation, we look forward to hearing from you.
            </p>

            {/* Email Us Button */}
            <Button
              asChild
              variant="hero"
              size="xl"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300 mb-12"
            >
              <a href="mailto:info@waterfield.com.au?subject=Waterfield%20Enquiry">
                Get in touch
              </a>
            </Button>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+61299221881"
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <p className="font-heading font-medium text-sm md:text-base text-foreground">+61 2 9922 1881</p>
              </a>

              <a
                href="mailto:info@waterfield.com.au"
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <p className="font-heading font-medium text-sm md:text-base text-foreground">info@waterfield.com.au</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

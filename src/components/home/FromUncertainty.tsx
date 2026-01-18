import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FromUncertainty() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            From uncertainty to clarity
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="w-64 md:w-[32%] flex-shrink-0">
            <img
              src="/Screenshot 2025-01-20 at 1_edited.avif"
              alt="Partnering with Waterfield"
              className="w-full h-auto rounded-full aspect-square object-cover"
            />
          </div>
          <div className="w-full md:w-[68%] space-y-3">
            <p className="font-heading font-semibold text-lg text-foreground">
              Waterfield's renowned process is centred on partnership and co-creation. We guide you
              through complexity with the right frameworks, insights and tools to help you succeed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach develops foresight, insight and action—building the resilience, agility
              and confidence your organisation needs to thrive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We help your teams take ownership of their future direction through collaborative
              processes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This aligns your organisation with its greater purpose and brings people
              together around a shared vision.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-heading text-xl font-semibold text-primary mb-6">
            Partnering with Waterfield helps you:
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
              style={{ backgroundColor: '#268DB0' }}
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Create clear strategic direction
              </p>
            </div>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-foreground flex-shrink-0 rotate-90 md:rotate-0" />
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
              style={{ backgroundColor: '#9E5790' }}
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Align teams and drive action
              </p>
            </div>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-foreground flex-shrink-0 rotate-90 md:rotate-0" />
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
              style={{ backgroundColor: '#EBCA52' }}
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Build capability to adapt and lead
              </p>
            </div>
          </div>

          <p className="font-heading font-semibold text-lg text-muted-foreground mb-6">
            Shape what's next with strategic clarity, alignment, and action—setting your organisation
            up for success in a changing world.
          </p>
          <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Link to="/contact">Let's connect</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

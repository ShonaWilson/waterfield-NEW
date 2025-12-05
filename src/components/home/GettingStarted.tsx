import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    image: "/1.png.avif",
    title: "Discover clarity",
    description:
      "We'll explore your goals, pinpoint challenges, and help clarify what you need to move forward. You'll gain immediate insights and a clearer sense of direction.",
    cta: "Let's have a chat.",
  },
  {
    image: "/2.png.avif",
    title: "Design & align",
    description:
      "Together, we co-create the right process with you. Through interactive workshops, we bring your team together to build strategic insight and shape a clear, actionable roadmap for success.",
    cta: "Shape your direction.",
  },
  {
    image: "/3.png.avif",
    title: "Deliver & thrive",
    description:
      "With shared clarity and alignment, your team can quickly take action with confidence. Achieve faster decisions, stronger collaboration, and real results.",
    cta: "Bring your strategy to life.",
  },
];

export function GettingStarted() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            Getting started is simple
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl p-6 md:p-8 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <p className="font-heading font-medium text-sm md:text-base text-foreground leading-relaxed">{step.cta}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Link to="/contact">Let's connect</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

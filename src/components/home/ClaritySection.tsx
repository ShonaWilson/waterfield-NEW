import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ClaritySection() {
  const pillars = [
    {
      image: "/Results.png",
      title: "Shaping a shared destination",
      description:
        "We create unified visions for success across enterprises, governments, major projects, research institutions and global partnerships.",
      size: "w-28 h-28",
    },
    {
      image: "/Aligning.png",
      title: "Aligning on the best path forward",
      description:
        "We foster ownership and buy-in, turning shared goals into reality through joint agreement.",
      size: "w-32 h-32",
    },
    {
      image: "/Delivering.png",
      title: "Delivering adaptive action plans",
      description:
        "We prioritise accountability and clear tracking, ensuring agility to adapt and stay on course when needed.",
      size: "w-28 h-28",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            Clarity that drives action
          </h3>
          <p className="font-heading font-semibold text-lg text-foreground">
            Navigating this complexity starts with the right questions and clear frameworks.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            For over 30 years, Waterfield has partnered with organisations, governments, and industry
            sectors to navigate complexity and deliver meaningful outcomes. We combine decades of
            experience with innovation, building collective clarity to drive action.
          </p>
        </div>

        <p className="text-center font-heading text-xl font-semibold text-primary mb-8">We achieve this by:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 md:p-8 text-center"
            >
              <div className="h-40 flex items-center justify-center mb-4">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className={`${pillar.size} object-contain`}
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                {pillar.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
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

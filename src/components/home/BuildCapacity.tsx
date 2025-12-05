import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    name: "Think Strategically",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    name: "Lead Collaboratively",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    name: "Leverage AI",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
];

export function BuildCapacity() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            Build capacity
          </h3>
          <p className="font-heading font-semibold text-lg text-foreground">
            These are the pathways we build within your team to empower your organisation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => (
            <Link
              key={index}
              to="/services"
              className="group relative bg-primary hover:bg-primary-light rounded-xl p-6 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative z-10 text-center">
                <h4 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                  {pathway.name}
                </h4>
                <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
                  {pathway.tagline}
                </p>
                <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base text-primary-foreground group-hover:gap-2 transition-all duration-200">
                  Discover <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    name: "Think Strategically",
    tagline: "Navigate complexity and sharpen strategic decision-making.",
    bgColor: "#2F3D4F", // Dark blue
    shape: "triangle",
  },
  {
    name: "Lead Collaboratively",
    tagline: "Align teams faster and turn commitment into coordinated action.",
    bgColor: "#2F3D4F", // Dark blue
    shape: "circle",
  },
  {
    name: "Leverage AI",
    tagline: "Embed AI to strengthen decisions, collaboration, and outcomes.",
    bgColor: "#2F3D4F", // Dark blue
    shape: "hexagon",
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
            We embed lasting capability within your organisation—to lead, adapt, and perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => (
            <Link
              key={index}
              to="/build-capacity"
              className="group relative rounded-xl p-6 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: pathway.bgColor }}
            >
              {/* Triangle shape for first box - wider angle, less pointy */}
              {pathway.shape === "triangle" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-0 opacity-[0.10] group-hover:scale-110 transition-transform duration-300">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M220 150 L0 20 L0 280 Z" fill="#268DB0" />
                  </svg>
                </div>
              )}

              {/* Circle shape for second box - shifted left with left edge cut off */}
              {pathway.shape === "circle" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[25%] opacity-[0.10] group-hover:scale-110 transition-transform duration-300">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="150" fill="#268DB0" />
                  </svg>
                </div>
              )}

              {/* Parallelogram shape for third box - shifted left, only right side visible, 20% larger */}
              {pathway.shape === "hexagon" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] opacity-[0.10] group-hover:scale-110 transition-transform duration-300">
                  <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 84 L252 0 L336 252 L84 336 Z" fill="#268DB0" />
                  </svg>
                </div>
              )}

              <div className="relative z-10 text-center">
                <h4 className="font-heading font-semibold text-lg text-white mb-2">
                  {pathway.name}
                </h4>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {pathway.tagline}
                </p>
                <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 text-primary">
                  Discover <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "StrategyConnect",
    logo: "/J_SC.png",
    tagline: "Create & deliver a Strategy Map that drives clarity, alignment, and results.",
    href: "/services/strategyconnect",
    color: "#F8983C",
  },
  {
    name: "SuccessAlliance",
    logo: "/J_SA.png",
    tagline: "Engage your partners to unlock opportunities and deliver greater value.",
    href: "/services/successalliance",
    color: "#EBCA52",
  },
  {
    name: "OpenInnovation",
    logo: "/J_OI.png",
    tagline: "Ignite collaborative thinking to swiftly transform ideas into innovative solutions.",
    href: "/services#open-innovation",
    color: "#268DB0",
  },
  {
    name: "Collaborative Intelligence",
    logo: "/J_CF.png",
    tagline: "Unite diverse stakeholders to rapidly turn complexity into clear, aligned solutions.",
    href: "/services#collaborative-intelligence",
    color: "#9E5790",
  },
];

const detailedServices = [
  {
    name: "StrategyConnect",
    tagline: "Create & execute a clear Strategy Map for focused outcomes",
    href: "/services/strategyconnect",
    image: "/service-1.jpg",
    logo: "/strategyconnect_white.png.avif",
    color: "#F8983C",
  },
  {
    name: "SuccessAlliance",
    tagline: "Engage your partners for added value & shared success",
    href: "/services/successalliance",
    image: "/service-2.jpg",
    logo: "/SuccessAlliance_logoDual.png",
    color: "#EBCA52",
  },
  {
    name: "OpenInnovation",
    tagline: "Ignite collaborative thinking to transform ideas into innovative solutions",
    href: "/services#open-innovation",
    image: "/service-3.jpg",
    logo: "/J_OI.png",
    color: "#268DB0",
  },
  {
    name: "Custom Facilitation",
    tagline: "Unite diverse stakeholders to rapidly turn complexity into clear, aligned solutions",
    href: "/services#collaborative-intelligence",
    image: "/service-4.jpeg",
    logo: "/J_CF.png",
    color: "#9E5790",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            Services for outcomes
          </h3>
          <p className="font-heading font-semibold text-lg text-foreground">
            Our services drive strategic outcomes, buy-in, and action through collaborative models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {detailedServices.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-secondary rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 p-4 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                  }}
                />
                {service.logo && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <img
                      src={service.logo}
                      alt={`${service.name} logo`}
                      className={`h-auto object-contain ${
                        service.name === "SuccessAlliance" || service.name === "Custom Facilitation"
                          ? "w-[45%]"
                          : "w-[65%]"
                      }`}
                    />
                  </div>
                )}
              </div>
              <div className="text-center flex flex-col flex-1">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {service.tagline}
                </p>
                <span className="inline-flex items-center justify-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200" style={{ color: service.color }}>
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

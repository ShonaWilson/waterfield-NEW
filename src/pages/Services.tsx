import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Target, Users, Lightbulb, Brain, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

const services = [
  {
    id: "strategy-connect",
    name: "StrategyConnect",
    tagline: "Strategic Clarity",
    subtitle: "Create and deliver a clear Strategy Map that drives alignment and results.",
    href: "/services/strategyconnect",
    outcomes: "Outcomes:| Clear direction, aligned priorities, and agile execution.",
    description:
      "Strategy Connect brings your team together to co-design strategy that is clear, shared, and executable.\n​​\nForesight, insight, and action are captured in a one-page Strategy Map — providing clear direction and a practical process to turn priorities into results..",
    features: [
      "Collaborative strategy development workshops",
      "Clear Strategy Map creation",
      "Aligned team objectives",
      "Measurable outcome tracking",
    ],
    icon: Target,
    image: "/service-1.jpg",
    logo: "/strategyconnect_white.png.avif",
    color: "#F8983C",
  },
  {
    id: "success-alliance",
    name: "SuccessAlliance",
    tagline: "Successful Alliances",
    subtitle: "Build strategic partnerships for shared value & competitive advantage.",
    href: "/services/successalliance",
    outcomes: "Outcomes:| Stronger partnerships, increased value creation, and sustained competitive advantage.",
    description:
      "Success Alliance helps organisations design and deliver partnerships that create value beyond what can be achieved alone.\n​​\nBy aligning strategy, incentives, and ways of working across suppliers, customers, and partners, alliances move from intent to delivery.",
    features: [
      "Partner engagement workshops",
      "Stakeholder alignment sessions",
      "Shared value creation",
      "Relationship strengthening",
    ],
    icon: Users,
    image: "/service-2.jpg",
    logo: "/SuccessAlliance_logoDual.png",
    color: "#EBCA52",
  },
  {
    id: "open-innovation",
    name: "OpenInnovation",
    tagline: "Accelerated Innovation",
    subtitle: "Expand thinking beyond your organisation to unlock new opportunities.",
    href: "/services/openinnovation",
    outcomes: "Outcomes:| New opportunities, sharper insight, and accelerated innovation.",
    description:
      "Open Innovation brings external perspectives, expertise, and ideas into your organisation to challenge assumptions and broaden thinking.\n​​\nThrough structured collaboration, new opportunities are explored, tested, and shaped into practical directions for growth.",
    features: [
      "Accelerated decision-making",
      "Diverse perspective integration",
      "Consensus building",
      "Clear action planning",
    ],
    icon: Lightbulb,
    image: "/service-3.jpg",
    logo: "/J_OI.png",
    color: "#268DB0",
  },
  {
    id: "collaborative-intelligence",
    name: "Custom Facilitation",
    tagline: "Aligned Solutions",
    subtitle: "Align diverse stakeholders to reach confident decisions faster.",
    href: "/services/customfacilitation",
    outcomes: "Outcomes:| Faster decision-making, shared direction, and coordinated action.",
    description:
      "Custom Facilitation helps groups navigate complexity and make high-quality decisions efficiently.\n​​\nBy designing and facilitating the right conversations, diverse stakeholders align around clear priorities and agreed actions.",
    features: [
      "AI-enhanced decision support",
      "Human-AI collaboration frameworks",
      "Real-time insights generation",
      "Smarter strategic planning",
    ],
    icon: Brain,
    image: "/service-4.jpeg",
    logo: "/J_CF.png",
    color: "#9E5790",
  },
];

const Services = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Services";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/business-meeting-edited.jpg"
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
            }}
          />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Services
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Delivering clarity, collaboration, and impact by cutting through complexity to create immediate value.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Services for outcomes
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground mb-6">
              Set clear direction, strengthen collaboration, and enable sustained impact across your organisation, alliances, and ecosystem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built around your objectives, each service can stand alone or work together — meeting you where you are and supporting what's needed next.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <Link
                key={service.id}
                id={service.id}
                to={service.href}
                className="group scroll-mt-24 bg-secondary rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 min-h-[520px] md:min-h-[380px]">
                  <div className="w-full md:w-[32%] flex-shrink-0 md:self-stretch">
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-full min-h-full">
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
                              service.id === "success-alliance" || service.id === "collaborative-intelligence"
                                ? "w-[45%]"
                                : "w-[65%]"
                            }`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-[68%] flex flex-col">
                    <div className="flex-1 space-y-4">
                      <p className="font-heading text-xl font-semibold" style={{ color: service.color }}>{service.tagline}</p>
                      {service.subtitle && (
                        <p className="font-heading font-medium text-sm md:text-base text-foreground">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.outcomes.includes('|') ? (
                          <>
                            <span className="font-semibold">{service.outcomes.split('|')[0]}</span>
                            {service.outcomes.split('|')[1]}
                          </>
                        ) : (
                          service.outcomes
                        )}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 mt-4" style={{ color: service.color }}>
                      Find out how <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-heading font-semibold text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              For over 30 years, Waterfield has helped organisations navigate complexity, align people, and deliver strategic outcomes.
            </p>
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Deliver Impact */}
      <section className="section-padding bg-secondary" style={{ display: 'none' }}>
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            How we deliver impact
          </h2>

          <div className="space-y-8">
            {services.map((service) => (
              <Link
                key={service.id}
                id={service.id}
                to={service.href}
                className="group scroll-mt-24 bg-background rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 min-h-[520px] md:min-h-[380px]">
                  <div className="w-full md:w-[32%] flex-shrink-0 md:self-stretch">
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-full min-h-full">
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
                              service.id === "success-alliance" || service.id === "collaborative-intelligence"
                                ? "w-[45%]"
                                : "w-[65%]"
                            }`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-[68%] flex flex-col">
                    <div className="flex-1 space-y-4">
                      <p className="font-heading text-xl font-semibold" style={{ color: service.color }}>{service.tagline}</p>
                      {service.subtitle && (
                        <p className="font-heading font-medium text-sm md:text-base text-foreground">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.outcomes.includes('|') ? (
                          <>
                            <span className="font-semibold">{service.outcomes.split('|')[0]}</span>
                            {service.outcomes.split('|')[1]}
                          </>
                        ) : (
                          service.outcomes
                        )}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 mt-4" style={{ color: service.color }}>
                      Find out how <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-heading font-semibold text-lg text-muted-foreground mb-6">
              We bring together strategic insight, collaboration, and AI to drive results–explore how our approach can help you.
            </p>
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

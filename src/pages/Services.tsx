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
    tagline: "Create & execute a clear Strategy Map for focused outcomes",
    href: "/services/strategyconnect",
    outcomes: "Clear strategic direction, execution excellence, high performing and engaged organisation.",
    description:
      "StrategyConnect offers an outcomes-driven approach to strategy development and execution in a fast-changing world.\n​\nWe bring your team together in a dynamic workshop to co-design your strategy, anticipate future challenges, and set a clear direction for the next three years.\n​​\nThe result is a one-page Strategy Map focused on your most important priorities—immediately actionable and supported by an agile execution framework that drives results and fosters organisation-wide engagement.",
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
    tagline: "Engage your partners for added value & shared success",
    href: "/services/successalliance",
    outcomes: "Increased innovation, improved performance, and reduced costs through stronger, more strategic alliances.",
    description:
      "Stronger decisions come from engaging people in the process—leading to greater ownership, and more effective execution.\n​\nThis applies not only within your organisation, but also with key partners like suppliers and customers. Alliances bring fresh perspectives, valuable insights, and shared momentum to help you achieve your objectives more effectively.\n​​\nSuccessAlliance creates competitive advantage through aligned strategy and collaborative engagement with diverse stakeholders.",
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
    tagline: "Ignite collaborative thinking to transform ideas into innovative solutions",
    href: "/services#open-innovation",
    outcomes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n​\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    tagline: "Unite diverse stakeholders to rapidly turn complexity into clear, aligned solutions",
    href: "/services/customfacilitation",
    outcomes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n​\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n​\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
            Strategic services
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Our services drive strategic outcomes, buy-in, and action through collaborative models.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              What we do
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground">
              Waterfield guides your organisation to uncover strategic insights, set clear objectives,
              align internal teams to implement, and strengthen key partnerships to drive long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">How we work</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We specialise in collaborative outcomes all stakeholders can align with, driven by our
                principle that people own what they help create. By building consensus among people—and
                the support of AI, we combine human insight and technology to accelerate decisions and
                drive confident action.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">The outcome</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our connected services guide you from internal clarity to external impact—helping your
                organisation thrive through focused strategy, strong alliances, shared consensus, and
                collaborative intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Impact */}
      <section className="section-padding bg-secondary">
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
                      <p className="font-heading font-semibold text-lg" style={{ color: service.color }}>{service.tagline}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                      <p className="font-heading font-medium text-sm md:text-base text-foreground">{service.outcomes}</p>
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

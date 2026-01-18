import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Target, Users, Lightbulb, Brain, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

const pathways = [
  {
    id: "think-strategically",
    title: "Think Strategically",
    description: "Our programs build strategic thinking as a lasting capability—equipping leaders and teams to navigate complexity, perform at their best at work, and bring clarity to decisions across leadership and life.",
    programs: [
      {
        name: "Think. Plan. Act. Strategically",
        description: "Equip emerging leaders to think ahead and lead with confidence",
        href: "#",
      },
      {
        name: "Personal Plan",
        description: "Strategically design direction for clear action in life and work",
        href: "#",
      },
    ],
  },
  {
    id: "lead-collaboratively",
    title: "Lead Collaboratively",
    description: "These programs embed collaborative leadership as a core capability—helping teams reach alignment faster, build genuine ownership, and turn commitment into coordinated action.",
    programs: [
      {
        name: "RapidConsensus",
        description: "Gain collaborative alignment for clear outcomes and action",
        href: "#",
      },
      {
        name: "Strategy Champion",
        description: "Build confident internal capability for agile strategy execution",
        href: "#",
      },
    ],
  },
  {
    id: "leverage-ai",
    title: "Leverage AI",
    description: "These programs build AI as an organisational capability—helping teams align on how AI is enabled, governed, and applied to strengthen decision-making, collaboration, and strategic outcomes.",
    programs: [
      {
        name: "Collaborative Intelligence",
        description: "Empower people with AI for smarter insights, decisions and execution",
        href: "/collaborative-intelligence",
      },
      {
        name: "AI Advantage",
        description: "Build shared capability to enable AI with clarity and impact",
        href: "#",
      },
    ],
  },
];

const BuildCapacity = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Build Capacity";
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
            alt="Build capacity"
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
            Build Capacity
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Empower your organisation to thrive for sustainable success.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-6">
              Waterfield builds internal capability by strengthening the knowledge, skills, and confidence of leaders and teams.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through three connected pathways — Think Strategically, Lead Collaboratively, and Leverage AI — we develop the core capabilities organisations need to navigate complexity, adapt with confidence, and deliver sustained results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each pathway is delivered through distinct programs, tailored to what matters most for your organisation. Together, they form Waterfield's strategic edge: a blend of practical methods, shared mindset, and embedded capability that enables organisations to perform today and continue evolving over time.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="space-y-16">
            {pathways.map((pathway) => (
              <div key={pathway.id} className="max-w-5xl mx-auto">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
                    {pathway.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {pathway.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pathway.programs.map((program, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-xl p-6 md:p-8"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                        {program.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <Link
                        to={program.href}
                        className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base text-primary hover:text-primary-light transition-colors duration-200 group"
                      >
                        Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuildCapacity;

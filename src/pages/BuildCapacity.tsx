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
            Embedding the capability within your organisation to lead, adapt, and perform for sustained success.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Our programs
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground mb-6">
              We build lasting capability by strengthening the knowledge, skills, and confidence of your team.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our programs empower leaders and teams to Think Strategically, Lead Collaboratively, and Leverage AI — core capabilities that unlock growth, adaptability, and lasting impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Together, these form Waterfield's strategic edge: a blend of methods, mindset, and mastery that drives performance, uplifts capability, and enables organisations to achieve results and continually evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pathways.map((pathway, index) => (
              <Link
                key={pathway.id}
                to="/services"
                className="group relative rounded-xl p-6 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#2F3D4F' }}
              >
                {/* Triangle shape for first box - wider angle, less pointy */}
                {pathway.id === "think-strategically" && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-0 opacity-[0.10] group-hover:scale-110 transition-transform duration-300">
                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M220 150 L0 20 L0 280 Z" fill="#268DB0" />
                    </svg>
                  </div>
                )}

                {/* Circle shape for second box - shifted left with left edge cut off */}
                {pathway.id === "lead-collaboratively" && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[25%] opacity-[0.10] group-hover:scale-110 transition-transform duration-300">
                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="150" cy="150" r="150" fill="#268DB0" />
                    </svg>
                  </div>
                )}

                {/* Parallelogram shape for third box - shifted left, only right side visible, 20% larger */}
                {pathway.id === "leverage-ai" && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] opacity-[0.10] group-hover:scale-110 transition-transform duration-300">
                    <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 84 L252 0 L336 252 L84 336 Z" fill="#268DB0" />
                    </svg>
                  </div>
                )}

                <div className="relative z-10 text-center">
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">
                    {pathway.title}
                  </h4>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {pathway.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 text-primary">
                    Discover <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Program Tiles */}
          <div className="space-y-8">
            {pathways.map((pathway) => (
              <div key={pathway.id} className="bg-secondary rounded-2xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-primary mb-6">
                  {pathway.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pathway.programs.map((program, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-heading text-base font-semibold text-foreground">
                        {program.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
        </div>
      </section>
    </Layout>
  );
};

export default BuildCapacity;

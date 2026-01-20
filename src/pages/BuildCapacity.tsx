import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Target, Users, Lightbulb, Brain, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

const engagePlusTool = {
  id: "engage-plus",
  name: "Engage Plus",
  tagline: "Open, AI-powered engagement that reveals what will resonate",
  href: "/ai-tools/engageplus",
  description:
    "Engage Plus enables open, human conversations and uses AI to surface clear themes, priorities, and sentiment that guide decision-making.\n\n\n**Purpose:** Unlock deeper stakeholder insight\n\n**Focus:** Authentic engagement, clarity, alignment\n\n**Outcome:** Decisions shaped by what truly matters to people",
  image: "/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png",
  logo: "/Image_dump/EngagePlus_LogoW.png",
  color: "#60c0c7",
};

const pathways = [
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
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Image_dump/ChatGPT Image Jan 19, 2026 at 06_01_36 PM.png"
            alt="Build capacity"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.1) translateY(${offset * 0.4}px)`,
              objectPosition: 'center 15%'
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
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-2">
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

      {/* Service Tiles */}
      <section className="pt-2 md:pt-3 pb-6 md:pb-8 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background rounded-xl p-4 flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0" style={{ backgroundColor: "#2F3D4F" }}>
                {/* Triangle shape - wider angle, less pointy */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-0 opacity-[0.10]">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M220 150 L0 20 L0 280 Z" fill="#268DB0" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h4 className="font-heading font-semibold text-xl text-white">
                    Think Strategically
                  </h4>
                </div>
              </div>
              <div className="text-center flex flex-col flex-1 pt-4">
                <h4 className="font-heading text-base font-semibold text-primary mb-3">
                  Build strategic thinking as a lasting capability.
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Equip leaders and teams to navigate complexity, perform at their best at work, and bring clarity to decisions across leadership and life.
                </p>

                <div className="space-y-12 mt-auto pt-12">
                  <div className="space-y-3">
                    <div className="h-10 flex items-center justify-center">
                      <img
                        src="/Image_dump/TPA_Logo.png"
                        alt="Think. Plan. Act. Strategically"
                        className="h-10 mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Equip emerging leaders to think ahead and lead with confidence
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base hover:opacity-80 transition-colors duration-200 group"
                      style={{ color: '#F8983C' }}
                    >
                      Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <div className="h-9 flex items-center justify-center">
                      <img
                        src="/Image_dump/PersonalPlan_Logo.png"
                        alt="Personal Plan"
                        className="h-9 mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Strategically design direction for clear action in life and work
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base hover:opacity-80 transition-colors duration-200 group"
                      style={{ color: '#7AB800' }}
                    >
                      Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-4 flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0" style={{ backgroundColor: "#2F3D4F" }}>
                {/* Circle shape - shifted left with left edge cut off */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[25%] opacity-[0.10]">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="150" fill="#268DB0" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h4 className="font-heading font-semibold text-xl text-white">
                    Lead Collaboratively
                  </h4>
                </div>
              </div>
              <div className="text-center flex flex-col flex-1 pt-4">
                <h4 className="font-heading text-base font-semibold text-primary mb-3">
                  Embed collaboration as a core capability.
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enable teams to reach alignment faster, build genuine ownership, and turn commitment into coordinated action.
                </p>

                <div className="space-y-12 pt-12">
                  <div className="space-y-3">
                    <div className="h-10 flex items-center justify-center">
                      <img
                        src="/Image_dump/RapidConsensus_Logo.png"
                        alt="RapidConsensus"
                        className="h-[38px] mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Gain collaborative alignment for clear outcomes and action
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base hover:opacity-80 transition-colors duration-200 group"
                      style={{ color: '#C8102E' }}
                    >
                      Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <div className="h-9 flex items-center justify-center">
                      <img
                        src="/Image_dump/StrategyChampion_Logo.png"
                        alt="Strategy Champion"
                        className="h-[23px] mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Build confident internal capability for agile strategy execution
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base hover:opacity-80 transition-colors duration-200 group"
                      style={{ color: '#F8983C' }}
                    >
                      Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-4 flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0" style={{ backgroundColor: "#2F3D4F" }}>
                {/* Parallelogram shape - shifted left, only right side visible, 20% larger */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] opacity-[0.10]">
                  <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 84 L252 0 L336 252 L84 336 Z" fill="#268DB0" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h4 className="font-heading font-semibold text-xl text-white">
                    Leverage AI
                  </h4>
                </div>
              </div>
              <div className="text-center flex flex-col flex-1 pt-4">
                <h4 className="font-heading text-base font-semibold text-primary mb-3">
                  Build AI as an organisational capability.
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Align teams on how AI is enabled, governed, and applied to strengthen decision-making, collaboration, and strategic outcomes.
                </p>

                <div className="space-y-12 mt-auto pt-12 md:mt-0 md:pt-12">
                  <div className="space-y-3">
                    <div className="h-10 flex items-center justify-center">
                      <img
                        src="/Image_dump/CollaborativeIntelligence_Logo.png"
                        alt="Collaborative Intelligence"
                        className="h-[39px] mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Empower people with AI for smarter insights, decisions and execution
                    </p>
                    <Link
                      to="/collaborative-intelligence"
                      className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base text-primary hover:text-primary-light transition-colors duration-200 group"
                    >
                      Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <div className="h-9 flex items-center justify-center">
                      <img
                        src="/Image_dump/AIAdvantage_Logo.png"
                        alt="AI Advantage"
                        className="h-[29px] mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Build shared capability to enable AI with clarity and impact
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base text-primary hover:text-primary-light transition-colors duration-200 group"
                    >
                      Find out how <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center mt-12 mb-8">
            <p className="font-heading font-semibold text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our programs build strategic, collaborative, and AI-ready capability so leaders and teams can perform, adapt, and grow—delivering ongoing value.
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

export default BuildCapacity;

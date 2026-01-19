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
  href: "#",
  description:
    "Engage Plus enables open, human conversations and uses AI to surface clear themes, priorities, and sentiment that guide decision-making.\n\n\n**Purpose:** Unlock deeper stakeholder insight\n\n**Focus:** Authentic engagement, clarity, alignment\n\n**Outcome:** Decisions shaped by what truly matters to people",
  image: "/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png",
  logo: "/Image_dump/EngagePlus_LogoW.png",
  color: "#60c0c7",
};

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

      {/* Service Tiles */}
      <section className="pt-2 md:pt-3 pb-6 md:pb-8 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link
              to="/services/strategyconnect"
              className="group bg-secondary rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 p-4 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <img
                  src="/service-1.jpg"
                  alt="StrategyConnect"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src="/strategyconnect_white.png.avif"
                    alt="StrategyConnect logo"
                    className="h-auto object-contain w-[65%]"
                  />
                </div>
              </div>
              <p className="font-heading text-base font-semibold mb-3 text-center" style={{ color: "#F8983C" }}>
                Strategic Clarity
              </p>
              <div className="text-center flex flex-col flex-1">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  Create and deliver a clear Strategy Map that drives alignment and results.
                </p>
                <span className="inline-flex items-center justify-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200" style={{ color: "#F8983C" }}>
                  Discover <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/services/successalliance"
              className="group bg-secondary rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 p-4 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <img
                  src="/service-2.jpg"
                  alt="SuccessAlliance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src="/SuccessAlliance_logoDual.png"
                    alt="SuccessAlliance logo"
                    className="h-auto object-contain w-[45%]"
                  />
                </div>
              </div>
              <p className="font-heading text-base font-semibold mb-3 text-center" style={{ color: "#EBCA52" }}>
                Successful Alliances
              </p>
              <div className="text-center flex flex-col flex-1">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  Build strategic partnerships for shared value & competitive advantage.
                </p>
                <span className="inline-flex items-center justify-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200" style={{ color: "#EBCA52" }}>
                  Discover <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/services/openinnovation"
              className="group bg-secondary rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 p-4 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <img
                  src="/service-3.jpg"
                  alt="OpenInnovation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src="/J_OI.png"
                    alt="OpenInnovation logo"
                    className="h-auto object-contain w-[65%]"
                  />
                </div>
              </div>
              <p className="font-heading text-base font-semibold mb-3 text-center" style={{ color: "#268DB0" }}>
                Accelerated Innovation
              </p>
              <div className="text-center flex flex-col flex-1">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  Expand thinking beyond your organisation to unlock new opportunities.
                </p>
                <span className="inline-flex items-center justify-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200" style={{ color: "#268DB0" }}>
                  Discover <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="pt-2 md:pt-3 pb-12 md:pb-16 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">

          {/* Pathways Beige Box */}
          <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-8">
            <div className="space-y-6">
              {pathways.map((pathway) => (
                <div key={pathway.id} className="border-b border-muted-foreground/20 last:border-b-0 pb-6 last:pb-0">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    {pathway.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {pathway.description}
                  </p>
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

          {/* Engage Plus Tool */}
          <div className="mt-8">
            <Link
              to={engagePlusTool.href}
              className="group scroll-mt-24 bg-secondary rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 block"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 min-h-[520px] md:min-h-[360px]">
                <div className="w-full md:w-[32%] flex-shrink-0 md:self-stretch">
                  <div className="relative rounded-xl overflow-hidden h-64 md:h-full min-h-full md:min-h-[240px]">
                    <img
                      src={engagePlusTool.image}
                      alt={engagePlusTool.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                      }}
                    />
                    {engagePlusTool.logo && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img
                          src={engagePlusTool.logo}
                          alt={`${engagePlusTool.name} logo`}
                          className="h-auto object-contain w-[52%]"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-[68%] flex flex-col">
                  <div className="flex-1 space-y-4">
                    <p className="font-heading text-xl font-semibold" style={{ color: engagePlusTool.color }}>{engagePlusTool.tagline}</p>
                    <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line space-y-4">
                      {engagePlusTool.description.split('\n').filter(line => line.trim() !== '').map((line, i) => (
                        <p key={i}>
                          {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={j} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 mt-4" style={{ color: engagePlusTool.color }}>
                    Find out how <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuildCapacity;

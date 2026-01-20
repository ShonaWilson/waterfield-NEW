import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Target, Users, Lightbulb, Brain, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

const aiTools = [
  {
    id: "ai-tool-1",
    name: "Tool One",
    tagline: "Open, AI-powered engagement that reveals what will resonate",
    href: "/ai-tools/engageplus",
    outcomes: "Clear insight into priorities and sentiment to shape better decisions.",
    description:
      "Engage Plus enables open, human conversations and uses AI to surface clear themes, priorities, and sentiment that guide decision-making.\n\n\n**Purpose:** Unlock deeper stakeholder insight\n\n**Focus:** Authentic engagement, clarity, alignment\n\n**Outcome:** Decisions shaped by what truly matters to people",
    icon: Brain,
    image: "/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png",
    logo: "/Image_dump/EngagePlus_LogoW.png",
    color: "#60c0c7",
  },
  {
    id: "ai-tool-2",
    name: "Tool Two",
    tagline: "Conversational strategy that shapes future direction",
    href: "/ai-tools/futureconnect",
    outcomes: "Clear insight into priorities and sentiment to shape better decisions.",
    description:
      "Future Connect helps teams make sense of future possibilities and translate them into clear, shared direction.\n\n\n**Purpose:** Clarify future direction and strengthen decisions\n\n**Focus:** Insight, alignment, confident choice\n\n**Outcome:** Shared direction and better strategic decisions",
    icon: Brain,
    image: "/Image_dump/ChatGPT Image Jan 19, 2026 at 01_11_57 PM.png",
    logo: "/Image_dump/FutureConnect_LogoW2.png",
    color: "#3bafb7",
  },
  {
    id: "ai-tool-3",
    name: "Tool Three",
    tagline: "Focused execution that turns strategy into impact",
    href: "/ai-tools/executionedge",
    outcomes: "Clear insight into priorities and sentiment to shape better decisions.",
    description:
      "Execution Edge turns priorities into clear, visible 90-day actions — making progress easy to track and adapt.\n\n\n**Purpose:** Deliver strategy through disciplined execution\n\n**Focus:** Action, momentum, accountability\n\n**Outcome:** Measurable progress and sustained impact",
    icon: Brain,
    image: "/Image_dump/ChatGPT Image Jan 19, 2026 at 04_11_20 PM.png",
    logo: "/Image_dump/ExecutionEdge_LogoW.png",
    color: "#1e9aa7",
  },
];

const AITools = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | AI Tools";
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
            src="/Image_dump/ChatGPT Image Jan 17, 2026 at 12_35_00 PM.png"
            alt="AI Tools"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
              objectPosition: 'center 35%'
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
            AI Tools
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Amplify strategic thinking, alignment, and action with AI.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Our strategic AI Tools
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground mb-6">
              A suite of Strategic AI tools designed to strengthen strategic thinking, elevate leadership, and build organisational capability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Built to amplify human judgement, our AI tools align people, decisions, and action to create clarity and deliver results. Together, they form a coherent system that builds actionable insight — from understanding what resonates, to aligning on direction, to delivering impact.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#60c0c7' }}
              >
                <p className="font-heading font-semibold text-white text-sm md:text-base mb-1">
                  Engage
                </p>
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-tight">
                  Reveal what resonates
                </p>
              </div>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-foreground flex-shrink-0 rotate-90 md:rotate-0" />
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#3bafb7' }}
              >
                <p className="font-heading font-semibold text-white text-sm md:text-base mb-1">
                  Connect
                </p>
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-tight">
                  Align on direction
                </p>
              </div>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-foreground flex-shrink-0 rotate-90 md:rotate-0" />
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#1e9aa7' }}
              >
                <p className="font-heading font-semibold text-white text-sm md:text-base mb-1">
                  Execute
                </p>
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-tight">
                  Deliver on impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Overview */}
      <section className="pt-2 md:pt-3 pb-12 md:pb-16 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {aiTools.map((tool, index) => (
              <Link
                key={tool.id}
                id={tool.id}
                to={tool.href}
                className="group scroll-mt-24 bg-secondary rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 min-h-[520px] md:min-h-[380px]" style={index === 0 ? { minHeight: '360px' } : {}}>
                  <div className="w-full md:w-[32%] flex-shrink-0 md:self-stretch">
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-full min-h-full" style={index === 0 ? { minHeight: '240px' } : {}}>
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={index === 2 ? { objectPosition: 'right center' } : {}}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                        }}
                      />
                      {tool.logo && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="h-auto object-contain w-[52%]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-[68%] flex flex-col">
                    <div className="flex-1 space-y-4">
                      <p className="font-heading text-xl font-semibold" style={{ color: tool.color }}>{tool.tagline}</p>
                      <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line space-y-4">
                        {tool.description.split('\n').filter(line => line.trim() !== '').map((line, i) => (
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
                    <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 mt-4" style={{ color: tool.color }}>
                      Find out how <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quote Section */}
          <div className="text-center mt-12">
            <p className="font-heading font-semibold text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Purpose-built through ongoing research and real-world application, our custom AI tools support people and teams by strengthening strategic thinking, decision-making, and action.
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

export default AITools;

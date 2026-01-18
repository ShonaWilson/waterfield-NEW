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
    tagline: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    href: "#",
    outcomes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n​\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n​​\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: Brain,
    image: "/service-4.jpeg",
    color: "#9E5790",
  },
  {
    id: "ai-tool-2",
    name: "Tool Two",
    tagline: "Sed do eiusmod tempor incididunt ut labore et dolore",
    href: "#",
    outcomes: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n​\nTotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n​​\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    icon: Lightbulb,
    image: "/service-1.jpg",
    color: "#268DB0",
  },
  {
    id: "ai-tool-3",
    name: "Tool Three",
    tagline: "Ut enim ad minim veniam quis nostrud exercitation",
    href: "#",
    outcomes: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.\n​\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n​\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    icon: Target,
    image: "/service-3.jpg",
    color: "#F8983C",
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
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/business-meeting-edited.jpg"
            alt="AI Tools"
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
            AI Tools
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              What we do
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">How we work</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">The outcome</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            How we deliver impact
          </h2>

          <div className="space-y-8">
            {aiTools.map((tool) => (
              <Link
                key={tool.id}
                id={tool.id}
                to={tool.href}
                className="group scroll-mt-24 bg-background rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 min-h-[520px] md:min-h-[380px]">
                  <div className="w-full md:w-[32%] flex-shrink-0 md:self-stretch">
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-full min-h-full">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-[68%] flex flex-col">
                    <div className="flex-1 space-y-4">
                      <p className="font-heading font-semibold text-lg" style={{ color: tool.color }}>{tool.tagline}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {tool.description}
                      </p>
                      <p className="font-heading font-medium text-sm md:text-base text-foreground">{tool.outcomes}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base group-hover:gap-2 transition-all duration-200 mt-4" style={{ color: tool.color }}>
                      Find out how <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-heading font-semibold text-lg text-muted-foreground mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

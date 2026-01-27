import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useParallax } from "@/hooks/useParallax";
import { MessageCircle, Compass, Link2, Users, TrendingUp } from "lucide-react";

const FutureConnect = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Future Connect";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Image_dump/ChatGPT Image Jan 19, 2026 at 01_11_57 PM.png"
            alt="Future Connect"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
              objectPosition: '50% 50%'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
          <div className="mb-6 flex items-center justify-center">
            <img
              src="/Image_dump/FutureConnect_LogoW2.png"
              alt="Future Connect"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Aligned decisions for confident, future-ready strategy
          </p>
        </div>
      </section>

      {/* Bring strategy to life */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#1e9aa7' }}>
              Bring strategy to life
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy shouldn't sit idle in documents. To empower your organisation to thrive, it needs to be accessible, usable, and continuously refined through real-world interaction.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Future Connect turns your strategic roadmap into an ongoing conversation—keeping strategy present as leaders and teams engage with and apply it in everyday work.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Work with strategy in real time—test ideas, explore implications, and connect daily decisions to long-term outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* A shared, living asset */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            A shared, living asset
          </h2>
          <div className="text-center max-w-4xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed mb-4">
              Future Connect is an AI-powered strategy tool developed by Waterfield to keep strategy active in everyday decision-making through natural conversation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Leaders and teams can test options, sense-check pathways, and connect decisions to outcomes. It's not about predicting one future—it's a thinking partner for exploring scenarios and making better decisions with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Leaders can ask questions like "What are the implications if we delay this investment?" or "How does this decision align with our three-year direction?"—and get meaningful, strategy-grounded responses.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold mb-6" style={{ color: '#1e9aa7' }}>
              Empower everyone to:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background rounded-2xl p-8 text-center">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Understand strategic intent and direction
                </h3>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  See how their role contributes to success
                </h3>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Explore choices before decisions are made
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy that stays alive—supporting alignment, learning, and engagement at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Designed to add value */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Designed to add value
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed">
              Future Connect combines strategic modelling with human-centred conversation, keeping strategy active and easy to work with across the organisation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-fr gap-6">
              <div className="bg-secondary rounded-2xl p-8 text-center md:col-span-2 h-full">
                <div className="flex justify-center mb-4">
                  <MessageCircle className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Ask real questions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Explore strategy through dialogue—no rigid workflows or forced prompts.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center md:col-span-2 h-full">
                <div className="flex justify-center mb-4">
                  <Compass className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Stay future-focused
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shape decisions with a clear view of where you're heading, not just where you are.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center md:col-span-2 h-full">
                <div className="flex justify-center mb-4">
                  <Link2 className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Keep decisions connected
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Link everyday work and choices to shared strategic intent.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center md:col-span-2 md:col-start-2 h-full">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Align at every level
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From senior leaders to emerging talent, everyone sees how their role contributes to direction.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center md:col-span-2 h-full">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Smarter over time
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Builds on every interaction—sharpening clarity, deepening alignment, and growing strategic capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Confident strategy, aligned decisions
            </p>
          </div>

          <div className="grid grid-cols-1 auto-rows-fr gap-8 max-w-5xl mx-auto">
            {/* Clarify Vision */}
            <div className="bg-background rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    1
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Clarify Vision
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Builds a working model of your organisation's future to explore different paths.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Helps senior teams focus on long-term decisions while avoiding short-term traps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Decisions */}
            <div className="bg-background rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    2
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Shape Decisions
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Enables collaborative scenario planning across leadership.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Strengthens strategic behaviours and keeps decisions aligned with the big picture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shared Understanding */}
            <div className="bg-background rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    3
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Shared Understanding
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Identifies what people need to know and creates space for feedback.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ensures strategy is clearly understood across all levels, building shared direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Future Connect tests and refines strategic choices—before they impact your organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Future-aligned decisions */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Future-aligned decisions
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed mb-4">
              Future Connect strengthens how strategic decisions are explored, aligned, and refined.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By making future direction accessible, it helps organisations:
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl p-6 text-center space-y-4">
                <p className="font-heading font-medium text-sm md:text-base text-primary">Amplify strategic thinking</p>
                <p className="font-heading font-medium text-sm md:text-base text-primary">Improve decision quality and consistency</p>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center space-y-4">
                <p className="font-heading font-medium text-sm md:text-base text-primary">Strengthen leadership confidence</p>
                <p className="font-heading font-medium text-sm md:text-base text-primary">Course-correct as learning emerges</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Future Connect enhances human judgement rather than replacing it. Foresight, insight, and action stay within your organisation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As teams use the tool, strategic capability grows. Waterfield trains leadership teams to get the most from Future Connect—asking sharper questions, forming actionable insights, and connecting future direction back to where to invest today.
            </p>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: '#1e9aa7' }}>
            Getting started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: '#1e9aa7' }}>1</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: '#1e9aa7' }}></div>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Explore what's possible
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                See how Future Connect can help your organisation use future insight to decide with confidence.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: '#1e9aa7' }}>2</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: '#1e9aa7' }}></div>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Strengthen alignment and decisions
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We teach your team how to use Future Connect, embedding strategic thinking and AI into everyday decision-making.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: '#1e9aa7' }}>3</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: '#1e9aa7' }}></div>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Bring your strategy to life
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Turn your organisation's strategy into a shared, living asset that guides action with clarity.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#1e9aa7' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2E9EA6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1e9aa7';
              }}
            >
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default FutureConnect;

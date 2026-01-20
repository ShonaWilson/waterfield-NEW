import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass, TrendingUp, Target } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

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
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Conversational strategy that shapes future direction
          </h1>
        </div>
      </section>

      {/* Clarify Future Direction */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#3bafb7' }}>
              Clarify future direction and strengthen decisions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground text-center">
              Future Connect helps teams make sense of future possibilities and translate them into clear, shared direction.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Strategy conversations often get stuck in competing views or vague aspirations. Future Connect uses AI to explore scenarios, test assumptions, and surface what matters most—creating clarity and confidence in strategic choices.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Whether you're setting direction, testing strategic options, or building alignment on the path forward, Future Connect helps you move from uncertainty to shared commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Future Connect Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#3bafb7' }}>
            Why Future Connect works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Strategic dialogue powered by AI that reveals what's possible and what's wise.
            </p>
            <p className="text-muted-foreground">
              Future Connect combines conversational exploration with AI-driven analysis to help teams see clearly and choose confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Compass className="w-8 h-8" style={{ color: '#3bafb7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Explore possibilities
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Test multiple strategic directions without committing resources
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Surface hidden assumptions and challenge conventional thinking
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Explore "what if" scenarios to understand implications and risks
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Create space for bold thinking while staying grounded in reality
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8" style={{ color: '#3bafb7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                AI-powered insight
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Analyzes strategic options against multiple criteria and constraints
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Identifies patterns, trade-offs, and dependencies across choices
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Surfaces risks and opportunities that teams might miss
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Delivers clarity on what's most critical to your success
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: '#3bafb7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Shared direction
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Builds alignment through structured dialogue and shared exploration
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Creates confidence in strategic choices with clear reasoning
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Translates complex possibilities into simple, actionable direction
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Gives teams the clarity and conviction to move forward together
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ backgroundColor: '#3bafb7' }}>
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Strategic clarity shouldn't take months of debate. Future Connect helps teams see clearly and choose confidently—fast.
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#3bafb7' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Three steps from strategic uncertainty to shared direction.
            </p>
            <p className="text-muted-foreground">
              Future Connect guides teams through structured exploration, AI analysis, and collaborative decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#3bafb7' }}>
                1
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Frame the future
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                We work with your team to define the strategic questions that matter most. What direction should we take? What future are we shaping? What choices will define success?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Through guided conversation, we explore multiple possibilities, challenge assumptions, and surface what's truly at stake.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#3bafb7' }}>
                2
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                AI reveals insight
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                AI analyzes your strategic options, testing them against multiple scenarios, constraints, and success factors. It identifies trade-offs, dependencies, and risks you might not see.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You get clear insight on what each choice enables, what it costs, and where the greatest opportunities lie.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#3bafb7' }}>
                3
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Choose with confidence
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                We facilitate decision-making with clarity on what matters most. Teams align on direction with shared understanding of why it's the right path forward.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You move forward with conviction, clear reasoning, and the alignment needed to execute with momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Future Connect */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#3bafb7' }}>
              When to use Future Connect
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Setting strategic direction
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When you need to define the future direction for your organization, Future Connect helps explore options, test assumptions, and build alignment on the path forward.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Testing strategic options
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Before committing resources, use Future Connect to evaluate multiple strategic paths—understanding implications, risks, and opportunities for each.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Breaking strategic deadlock
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When teams are stuck in competing views or endless debate, Future Connect provides structure and insight that moves from disagreement to decision.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Planning for uncertainty
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Explore "what if" scenarios to understand how different futures might unfold—preparing your strategy for multiple possibilities instead of betting on one.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Building strategic capability
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Help leadership teams develop stronger strategic thinking—learning to explore possibilities, test assumptions, and make better choices together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#3bafb7' }}>
              The difference
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
                  Traditional strategy process
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Months of workshops, reports, and endless debate</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Analysis paralysis—too much data, not enough insight</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Competing views that never resolve into clear direction</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Strategy documents that sit on shelves, disconnected from action</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Teams unsure why decisions were made or what comes next</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6 md:p-8 border-2" style={{ borderColor: '#3bafb7' }}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
                  Future Connect
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#3bafb7' }}>✓</span>
                    <span>Focused sessions that deliver clarity in days, not months</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#3bafb7' }}>✓</span>
                    <span>AI-powered analysis that reveals what matters most</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#3bafb7' }}>✓</span>
                    <span>Structured dialogue that moves from debate to shared direction</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#3bafb7' }}>✓</span>
                    <span>Clear, actionable direction ready to execute immediately</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#3bafb7' }}>✓</span>
                    <span>Teams aligned with conviction on why and what's next</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#3bafb7' }}>
              Ready to clarify your strategic direction?
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Future Connect helps leadership teams move from uncertainty to confident, aligned action.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're setting direction, testing options, or breaking deadlock, we'll help you explore possibilities and choose wisely.
            </p>

            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#3bafb7' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2A9FA8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3bafb7';
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

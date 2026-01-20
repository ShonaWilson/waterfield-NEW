import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MessageSquare, TrendingUp } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const EngagePlus = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Engage Plus";
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
            src="/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png"
            alt="Engage Plus"
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
              src="/Image_dump/EngagePlus_LogoW.png"
              alt="Engage Plus"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Open, AI-powered engagement that reveals what will resonate
          </h1>
        </div>
      </section>

      {/* Unlock Deeper Insight */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#60c0c7' }}>
              Unlock deeper stakeholder insight
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground text-center">
              Engage Plus enables authentic, human conversations and uses AI to surface clear themes, priorities, and sentiment—guiding smarter decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Traditional engagement often feels scripted, limiting what people share. Engage Plus removes those barriers, creating space for open dialogue while AI does the heavy lifting—analyzing responses in real time to reveal what truly matters.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Whether you're shaping strategy, testing ideas, or understanding stakeholder sentiment, Engage Plus gives you clarity and confidence fast.
            </p>
          </div>
        </div>
      </section>

      {/* Why Engage Plus Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#60c0c7' }}>
            Why Engage Plus works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Real conversations, powered by AI, that reveal what your stakeholders truly think.
            </p>
            <p className="text-muted-foreground">
              Engage Plus combines human authenticity with AI-driven analysis to uncover insights that traditional methods miss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-8 h-8" style={{ color: '#60c0c7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Open conversations
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Removes the barriers of structured surveys and rigid questions
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Creates psychological safety for honest, unfiltered input
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Captures rich, nuanced perspectives that structured methods miss
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Engages stakeholders in dialogue, not just data collection
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8" style={{ color: '#60c0c7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                AI-powered analysis
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Surfaces themes, patterns, and priorities from raw conversation
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Analyzes sentiment to understand what resonates—and what concerns
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Processes hundreds of responses in minutes, not weeks
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Delivers clear, actionable insights you can act on immediately
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: '#60c0c7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Strategic clarity
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Reveals what will resonate before you commit resources
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Identifies shared priorities across diverse stakeholder groups
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Guides decisions with confidence, grounded in real stakeholder input
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Builds alignment by showing everyone what matters most
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ backgroundColor: '#60c0c7' }}>
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Understanding what your stakeholders truly think shouldn't take months. Engage Plus reveals it in days.
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#60c0c7' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Three simple steps from conversation to clarity.
            </p>
            <p className="text-muted-foreground">
              Engage Plus handles the complexity so you can focus on what matters—understanding and acting on stakeholder input.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#60c0c7' }}>
                1
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Design your engagement
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                We work with you to frame the right questions and create space for authentic conversation. No rigid surveys—just clear prompts that invite honest input.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your stakeholders engage when it suits them, via a simple online platform that feels conversational, not transactional.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#60c0c7' }}>
                2
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                AI surfaces the insights
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                As responses come in, AI analyzes them in real time—identifying themes, sentiment, and priorities without bias or manual coding.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You get a clear picture of what your stakeholders value, where alignment exists, and what concerns need addressing.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#60c0c7' }}>
                3
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Act with confidence
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                We deliver insights in a format that's easy to understand and act on—highlighting what will resonate and guiding your next steps.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you're shaping strategy, testing ideas, or building alignment, you move forward with clarity and stakeholder buy-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Engage Plus */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#60c0c7' }}>
              When to use Engage Plus
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Shaping strategy
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Test strategic directions with stakeholders before committing. Understand what resonates, what concerns exist, and where alignment is possible.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Testing ideas
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Get fast, honest feedback on proposals, initiatives, or concepts. Know what will land—and what won't—before you invest resources.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Understanding sentiment
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gauge how stakeholders feel about change, challenges, or opportunities. Surface concerns early and address them proactively.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Building alignment
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Identify common ground across diverse groups. Show stakeholders what they agree on, creating a foundation for collaboration.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Exploring possibilities
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Invite stakeholders to envision the future together. Uncover ideas and perspectives that inform strategic direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#60c0c7' }}>
              The difference
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
                  Traditional engagement
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Rigid surveys with limited response options</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Weeks or months to analyze and synthesize feedback</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Low participation due to survey fatigue</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Misses nuance and context in responses</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Results feel disconnected from real stakeholder concerns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6 md:p-8 border-2" style={{ borderColor: '#60c0c7' }}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
                  Engage Plus
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#60c0c7' }}>✓</span>
                    <span>Open conversation that invites authentic input</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#60c0c7' }}>✓</span>
                    <span>Real-time AI analysis delivers insights in days, not months</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#60c0c7' }}>✓</span>
                    <span>High engagement—people want to share when it feels real</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#60c0c7' }}>✓</span>
                    <span>Captures rich, nuanced perspectives and sentiment</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#60c0c7' }}>✓</span>
                    <span>Reveals what truly matters to your stakeholders</span>
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
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#60c0c7' }}>
              Ready to unlock deeper insight?
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Engage Plus helps you understand what your stakeholders truly think—fast.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're shaping strategy, testing ideas, or building alignment, we'll help you create engagement that reveals what will resonate.
            </p>

            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#60c0c7' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4FB0B8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#60c0c7';
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

export default EngagePlus;

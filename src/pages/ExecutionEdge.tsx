import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Target, TrendingUp } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const ExecutionEdge = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Execution Edge";
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
            src="/Image_dump/ChatGPT Image Jan 19, 2026 at 04_11_20 PM.png"
            alt="Execution Edge"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
              objectPosition: '75% 50%'
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
              src="/Image_dump/ExecutionEdge_LogoW.png"
              alt="Execution Edge"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Focused execution that turns strategy into impact
          </h1>
        </div>
      </section>

      {/* Deliver Strategy Through Execution */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#1e9aa7' }}>
              Deliver strategy through disciplined execution
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground text-center">
              Execution Edge turns priorities into clear, visible 90-day actions—making progress easy to track and adapt.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Most strategies fail in execution. Not because the strategy is wrong, but because action is unclear, invisible, or disconnected from what matters. Execution Edge solves this with structured 90-day cycles that create momentum, visibility, and accountability.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Whether you're implementing strategy, driving change, or building execution capability, Execution Edge keeps teams focused on what moves the dial—delivering measurable progress every quarter.
            </p>
          </div>
        </div>
      </section>

      {/* Why Execution Edge Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Why Execution Edge works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Disciplined execution powered by structure, visibility, and adaptive rhythm.
            </p>
            <p className="text-muted-foreground">
              Execution Edge combines 90-day execution cycles with AI-enabled tracking to keep teams focused, accountable, and adaptive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: '#1e9aa7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                90-day focus
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Break strategy into achievable 90-day milestones that create momentum
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Prioritize ruthlessly—focus only on what moves the dial this quarter
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Create clear ownership and accountability for every action
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Build rhythm and discipline that becomes your execution muscle
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8" style={{ color: '#1e9aa7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Visible progress
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Real-time tracking shows what's moving, what's stuck, and what's at risk
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  AI highlights blockers and suggests adjustments to keep momentum
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Teams see how their work connects to strategic outcomes
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Leadership gets clarity without micromanaging progress
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8" style={{ color: '#1e9aa7' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Adaptive execution
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Review and adjust every 90 days based on what's working
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Learn fast—capture insights and apply them to the next cycle
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Stay responsive to changing conditions without losing focus
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Build execution capability that compounds over time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ backgroundColor: '#1e9aa7' }}>
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Strategy without execution is just good intentions. Execution Edge turns priorities into measurable progress—every quarter.
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Three steps to disciplined, adaptive execution.
            </p>
            <p className="text-muted-foreground">
              Execution Edge creates structure and visibility that keeps teams focused on delivering what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#1e9aa7' }}>
                1
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Set 90-day priorities
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                We work with your team to translate strategy into focused 90-day milestones. What must move this quarter? Who owns it? What success looks like?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every action is clear, owned, and connected to strategic outcomes. Nothing else gets in the way.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#1e9aa7' }}>
                2
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Track and adapt
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Progress is visible in real time. Teams update status, flag blockers, and see how their work connects to outcomes. AI highlights what needs attention.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leadership gets clarity without chasing updates. Teams stay focused on delivery, not reporting.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#1e9aa7' }}>
                3
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Review and reset
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Every 90 days, review what moved, what didn't, and why. Capture insights, celebrate progress, and set the next quarter's focus.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This rhythm builds execution capability—teams get better at delivering with every cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Execution Edge */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#1e9aa7' }}>
              When to use Execution Edge
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Implementing strategy
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Turn strategic priorities into disciplined execution. Keep teams focused on what matters most and deliver measurable progress every quarter.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Driving change initiatives
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create structure and visibility for change programs. Track progress, maintain momentum, and adapt based on what's working.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Building execution capability
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Develop organizational muscle for disciplined delivery. Build rhythm, accountability, and adaptive learning that compounds over time.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Breaking execution bottlenecks
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When execution feels stuck or invisible, Execution Edge creates clarity, focus, and momentum—showing teams exactly what to do next.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-heading font-semibold text-base text-foreground mb-2">
                Scaling delivery
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As organizations grow, execution can fragment. Execution Edge scales delivery without losing clarity, alignment, or momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#1e9aa7' }}>
              The difference
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
                  Traditional execution
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Endless task lists with no clear priorities or ownership</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Progress is invisible—leadership chases updates constantly</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Strategy disconnected from daily work—teams unclear on impact</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>No rhythm for review or adaptation—plans become stale</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>Teams exhausted by firefighting instead of delivering outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-6 md:p-8 border-2" style={{ borderColor: '#1e9aa7' }}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
                  Execution Edge
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#1e9aa7' }}>✓</span>
                    <span>Ruthless 90-day focus—only what moves the dial matters</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#1e9aa7' }}>✓</span>
                    <span>Real-time visibility—everyone sees progress without meetings</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#1e9aa7' }}>✓</span>
                    <span>Clear line of sight from daily work to strategic outcomes</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#1e9aa7' }}>✓</span>
                    <span>Built-in rhythm for adaptation—learn and adjust every quarter</span>
                  </li>
                  <li className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span style={{ color: '#1e9aa7' }}>✓</span>
                    <span>Teams energized by visible progress and sustained momentum</span>
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
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#1e9aa7' }}>
              Ready to turn strategy into impact?
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Execution Edge helps teams deliver measurable progress every quarter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're implementing strategy, driving change, or building execution capability, we'll help you create focus, visibility, and momentum.
            </p>

            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#1e9aa7' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#178A98';
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

export default ExecutionEdge;

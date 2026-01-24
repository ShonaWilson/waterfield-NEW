import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useParallax } from "@/hooks/useParallax";
import { Target, Focus, TrendingUp, AlertTriangle } from "lucide-react";

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
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Focused execution that turns strategy into impact
          </p>
        </div>
      </section>

      {/* Turn strategy into momentum */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#1e9aa7' }}>
              Turn strategy into momentum
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Most strategies don't fail in design—they stall in execution. Execution Edge closes that gap.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Execution Edge is Waterfield's AI-enabled execution platform. It helps teams convert priorities into structured 90-day actions, supports milestone owners to stay on track, and gives leaders clear visibility of progress, risks, and resourcing.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              As it evolves, Execution Edge goes beyond tracking—becoming a decision and learning environment that helps organisations adapt faster and scale what works.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy into action */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Strategy into action
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed">
              Execution Edge embeds strategy into everyday work—keeping it active, visible, and reinforced through use. Leaders get visibility. Teams get clarity. Everyone stays aligned.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Target className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Translate strategic priorities into clear, owned actions
                </h3>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Focus className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Maintain focus on what matters most
                </h3>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Track progress and momentum in real time
                </h3>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Surface risks, bottlenecks, and misalignment early
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="font-heading font-semibold text-lg text-foreground">
              Teams stay aligned to direction—not just at planning time, but throughout delivery.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Turning strategy into impact
            </p>
          </div>

          <div className="grid grid-cols-1 auto-rows-fr gap-8 max-w-5xl mx-auto">
            {/* Activate Strategy */}
            <div className="bg-secondary rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    1
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Activate Strategy
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Supports milestone owners with a clear 90-day execution structure linked directly to strategic priorities.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ensures short-term actions stay aligned to longer-term direction—with clear ownership and adaptability as conditions change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Focus */}
            <div className="bg-secondary rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    2
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Strategic Focus
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Helps teams allocate time and attention to strategic work, keeping priority initiatives visible and moving.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Builds momentum by preventing strategic work from being crowded out by day-to-day activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Insight */}
            <div className="bg-secondary rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    3
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Portfolio Insight
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Tracks progress toward 12-month goals, flags risks, and assesses resourcing across initiatives and portfolios.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Gives strategy owners a clear, actionable view of what's working, what's at risk, and where to intervene.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Turn strategic intent into measurable progress—with clear ownership and sustained momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Execution that delivers */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Execution that delivers
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy isn't a one-off event. In fast-moving environments, it's a continuous cycle of alignment, learning, and action.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold" style={{ color: '#1e9aa7' }}>
              Execution Edge keeps strategy on track by:
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px] bg-foreground"
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Reinforcing focus over time
              </p>
            </div>
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px] bg-foreground"
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Supporting agile adjustment
              </p>
            </div>
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px] bg-foreground"
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Maintaining accountability
              </p>
            </div>
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px] bg-foreground"
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Turning insight into action
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              Clear ownership. Sustained momentum. Measurable progress. Strategy that doesn't stall—it delivers.
            </p>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: '#1e9aa7' }}>
            Getting started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Move from strategy to action"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(44%) sepia(45%) saturate(629%) hue-rotate(140deg) brightness(91%) contrast(89%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Move from strategy to action
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                See how Execution Edge helps your organisation turn strategic priorities into focused execution and real progress.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Empower confident delivery"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(44%) sepia(45%) saturate(629%) hue-rotate(140deg) brightness(95%) contrast(89%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Empower confident delivery
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We train your team to use Execution Edge effectively—embedding accountability and momentum into everyday work.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Keep strategy moving"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(44%) sepia(45%) saturate(629%) hue-rotate(140deg) brightness(91%) contrast(89%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Keep strategy moving
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transform strategy from intention into impact—sustaining focus, tracking progress, and adapting as conditions change.
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

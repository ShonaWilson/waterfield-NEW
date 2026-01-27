import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Compass, Scale, Sparkles, Plus, Minus } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const PersonalPlan = () => {
  const { ref, offset } = useParallax(0.5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Waterfield | Personal Plan";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Personal Plan just a goal-setting program?",
      answer: "No. While goal setting is part of the process, Personal Plan goes further. It's a structured execution system that helps individuals clarify what matters and translate intention into sustained action."
    },
    {
      question: "How is Personal Plan different from productivity tools or planners?",
      answer: "Personal Plan integrates thinking, reflection, and execution — structured through 90-day and 12-month cycles and focused on follow-through, not busywork. Rather than managing tasks, it helps individuals design direction and act with intent."
    },
    {
      question: "Do participants need clear goals before starting?",
      answer: "No. Many begin with questions or competing priorities. Personal Plan creates the space and structure to explore what matters most and build clarity over time."
    },
    {
      question: "What role does coaching play?",
      answer: "Coaching is central. The coach creates accountability and momentum, supports reflection, and helps participants follow through. The individual owns the plan — the coach supports the process, not the outcomes."
    },
    {
      question: "Is Personal Plan for individuals or organisations?",
      answer: "Both. For individuals, it builds clarity, confidence, and ownership. For organisations, it develops focused, self-directed leaders with stronger prioritisation and follow-through."
    }
  ];

  const brandColor = "#c1d82f";
  const brandColorHover = "#adc229";

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ChatGPT Image Jan 26, 2026 at 11_40_53 PM.png"
            alt="Personal Plan"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
              objectPosition: '50% 28%'
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
              src="/PP_Wlogo.png"
              alt="Personal Plan"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Strategically design direction for clear action in life and work.
          </p>
        </div>
      </section>

      {/* Design your direction */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              Design your direction
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Personal Plan supports individuals to think strategically about what matters most — looking ahead over the next five years and taking intentional action across professional and personal life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It combines structured planning with coaching support, building the capability to design direction, make considered decisions, and follow through as circumstances evolve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This isn't about setting more goals. It's a disciplined way to create focus, maintain accountability, and turn intention into outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Personal Plan */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Why Personal Plan
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              In complex roles and fast-moving environments, people are often required to make decisions continuously, with limited space to step back and consider direction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Personal Plan exists to create that space.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It provides a clear, structured way for individuals to pause, clarify what matters most, and translate direction into deliberate action — across both work and life.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              The impact
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Personal Plan supports people to perform at their best — while sustaining energy, focus, and momentum.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Participants consistently report:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Clearer direction
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clearer direction and priorities across work and life
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Scale className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Stronger balance
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Stronger balance between life and work
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Increased confidence
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Increased confidence, performance, and wellbeing
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              By keeping direction visible and active, Personal Plan supports progress that is intentional, sustainable, and aligned with what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Why this program */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            What you'll gain
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground text-center">
              Personal Plan supports individuals to:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Clarify direction
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Define what matters most and set clear, achievable outcomes across work and life.
                </p>
              </div>
              <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Turn insight into action
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Translate reflection into practical strategies through structured 90-day cycles.
                </p>
              </div>
              <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Stay accountable
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Maintain focus on priorities and follow through on commitments.
                </p>
              </div>
              <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Keep progress visible
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Capture goals, decisions, and progress in a dedicated digital workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Structure */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The structure
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Personal Plan is a structured planning and execution process, supported by coaching and a dedicated digital workspace.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-secondary rounded-2xl p-8 md:p-10">
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: brandColor }}>
                    1.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Landscape analysis
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stepping back to understand current reality, priorities, and future aspirations.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: brandColor }}>
                    2.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  One-page Personal Plan
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A concise plan capturing direction and focus areas.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: brandColor }}>
                    3.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Digital workspace
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A purpose-built environment to capture goals, ideas, and progress.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: brandColor }}>
                    4.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  90-day reviews
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Structured check-ins to reflect, adapt, and stay on track.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: brandColor }}>
                    5.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Insights and learning
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building awareness, confidence, and self-leadership over time.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-muted-foreground leading-relaxed text-center">
              This keeps the plan active and relevant — not something written once and set aside.
            </p>
          </div>
        </div>
      </section>

      {/* Role of the coach */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Role of the coach
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              To support the Personal Plan methodology, participants work with a coach who helps them stay focused on what they decide matters most.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Rather than directing outcomes, the coach creates space for reflection and thinking — enabling individuals to step back, challenge assumptions, and identify areas that may be limiting progress.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Through this partnership, the coach supports individuals to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-6">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: brandColor }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Clarify purpose and priorities</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: brandColor }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Generate self-directed solutions and strategies</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: brandColor }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Maintain momentum and move into action</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: brandColor }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Deepen learning through reflection</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: brandColor }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Improve performance and quality of life</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This partnership strengthens accountability and follow-through while ensuring ownership remains with the individual.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Who it's for
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Personal Plan is designed for individuals and organisations seeking clearer direction and stronger follow-through.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It is suited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 max-w-3xl mx-auto">
              <div
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}
              >
                <p className="font-heading font-semibold text-lg text-foreground">Leaders navigating complexity, growth, or transition</p>
              </div>
              <div
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}
              >
                <p className="font-heading font-semibold text-lg text-foreground">High-potential professionals building strategic capability</p>
              </div>
              <div
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}
              >
                <p className="font-heading font-semibold text-lg text-foreground">Individuals seeking a structured approach to personal and professional goals</p>
              </div>
              <div
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: 'rgba(193, 216, 47, 0.15)' }}
              >
                <p className="font-heading font-semibold text-lg text-foreground">Organisations developing confident, self-directed leaders</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Personal Plan works as a standalone program or as part of a broader leadership development initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Start here
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Start designing your direction with Personal Plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>1</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Start with a conversation
              </h3>
              <p className="text-muted-foreground text-sm">
                We begin by understanding where you are and what matters most to you.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>2</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build clarity
              </h3>
              <p className="text-muted-foreground text-sm">
                Define what success looks like across work and life.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>3</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Create a clear path forward
              </h3>
              <p className="text-muted-foreground text-sm">
                Begin taking action with structure, support, and accountability.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: brandColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColorHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = brandColor;
              }}
            >
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: brandColor }}>
            FAQs
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-secondary/80 transition-colors duration-200"
                >
                  <h3 className="font-heading font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-5 h-5" style={{ color: brandColor }} />
                    ) : (
                      <Plus className="w-5 h-5" style={{ color: brandColor }} />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 animate-fade-in">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalPlan;

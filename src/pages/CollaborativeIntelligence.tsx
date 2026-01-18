import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Users, Lightbulb, Target, Zap, ChevronDown, Plus, Minus } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const CollaborativeIntelligence = () => {
  const { ref, offset } = useParallax(0.5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Waterfield | Collaborative Intelligence";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What will this enable our organisation to do better?",
      answer: "Make stronger, faster strategic decisions by generating clearer insight, aligning leaders and experts, and acting with greater confidence in complex situations."
    },
    {
      question: "What capability will leaders and teams gain?",
      answer: "A practical ability to combine human expertise with AI-enabled insight — strengthening analysis, challenge, alignment, and decision-making across the organisation."
    },
    {
      question: "How is value created in practice?",
      answer: "Value is created by applying Collaborative Intelligence to real, high-value decisions, using a structured framework that improves how insight is gathered, tested, and translated into action."
    },
    {
      question: "What types of decisions is this designed to support?",
      answer: "Collaborative Intelligence is designed for strategic, high-value decisions where clarity, alignment, and insight quality directly shape outcomes."
    },
    {
      question: "How does this strengthen long-term performance?",
      answer: "By building a repeatable insight and decision capability, Collaborative Intelligence improves alignment, adaptability, and decision quality over time — not just for a single initiative."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/service-4.jpeg"
            alt="Collaborative Intelligence"
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
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Collaborative Intelligence
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Elevate capability for smarter insight and decisions — enabled by people + AI
          </p>
        </div>
      </section>

      {/* Amplify Your Organization's Intelligence */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Amplify your organisation's intelligence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence helps organisations strengthen how they think, decide, and act in complex environments by combining human expertise with AI-enabled insight.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              High-performing organisations are those that can align around insight and act decisively.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Building on more than 30 years of experience aligning people, insight, and action, Waterfield takes this work to the next level — enabling people and AI to work together to lift decision quality, alignment, and execution at scale.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground mt-6">
              At the core of the program is building your organisation's ability to integrate generative AI as a:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Thinking partner</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Challenger</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Creative collaborator</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This approach helps surface deeper insight, challenge assumptions, and unlock new possibilities — empowering smarter, more strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Program */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            Why this program
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Insight is a critical driver of organisational success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The better your organisation's insights, the better its performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today's leaders operate in environments defined by accelerating change, rising complexity, and overwhelming information. While AI is increasingly recognised as essential, many organisations struggle to integrate it meaningfully into strategy and decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Human expertise alone can no longer keep pace with the volume and speed of change. AI without context, values, or intent lacks strategic depth.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence addresses this challenge by building the capability to combine human expertise with AI— enabling organisations to continuously generate insight, align around it, and act decisively.
            </p>
          </div>
        </div>
      </section>

      {/* From Collective to Collaborative Intelligence */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Align intelligence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence combines the strengths of human collective intelligence with the power of AI.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              By combining key human strengths such as expertise, judgement, ethics and creativity with effecient AI strengths rapid analysis, pattern detection and synthesis at scale, you can achieve next level collaborative intelligence.
            </p>

            <div className="my-8" style={{ marginBottom: '30px' }}>
              <img
                src="/CI_Strengths.png"
                alt="Collaborative Intelligence - Combining Human and AI Strengths"
                className="w-[90%] mx-auto rounded-lg"
              />
            </div>

            <p className="font-heading font-semibold text-lg text-foreground">
              Used well, AI does not replace human expertise — it augments and challenges it, supporting decisions that are:
            </p>
            <ul className="space-y-2 mx-auto inline-block text-left">
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>More informed</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Higher quality</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Faster</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>More robust under scrutiny</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For the first time, organisations can add near-unlimited information and analytical capability across all levels — from frontline teams to executives and boards — enabling more people to contribute meaningfully to stronger decisions.
            </p>
          </div>
        </div>
      </section>

      {/* The Capability It Builds */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            The capability it builds
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence builds a repeatable strategic insight capability inside your organisation.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              Teams become better able to:
            </p>
            <ul className="space-y-2 mx-auto inline-block text-left">
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Generate high-quality strategic insight on an ongoing basis</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Combine human expertise with AI-enabled analysis</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Identify patterns, gaps, risks, and emerging opportunities early</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Introduce informed challenge to strengthen thinking</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Align people around shared, evidence-based understanding</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Turn insight into confident, coordinated decisions</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This capability strengthens how organisations think, decide, and act in complex environments.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              The Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Faster, higher-quality strategic decisions
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Stronger alignment between strategy, innovation, and execution
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Scalable intelligence beyond a small group of experts
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Greater resilience and sustained advantage driven by insight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Creates Value */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            How it creates value
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 mb-12 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is applied to real strategic priorities, strengthening how organisations generate insight, test decisions, and adapt over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Global insight, applied to your context
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Scan global research, benchmarks, and case studies — distilling what matters and applying it directly to your strategy, priorities, and operating environment.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Stronger decisions through informed challenge
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Stress-test assumptions and plans with structured, evidence-based challenges — reducing blind spots and increasing confidence before decisions are locked in.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Continuous strategic insight
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Build a repeatable capability to surface weak signals, emerging risks, and new opportunities — keeping your organisation ahead of change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            The framework
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is delivered through a clear, practical framework, applied to a priority use case chosen by the organisation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The framework connects insight to action through a structured sequence:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">
                1
              </div>
              <p className="text-muted-foreground">
                Define a strategic question or decision that matters
              </p>
            </div>
            <div className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">
                2
              </div>
              <p className="text-muted-foreground">
                Integrate relevant internal knowledge and external intelligence
              </p>
            </div>
            <div className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">
                3
              </div>
              <p className="text-muted-foreground">
                Analyse and synthesise insight using AI-enabled tools
              </p>
            </div>
            <div className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">
                4
              </div>
              <p className="text-muted-foreground">
                Surface strategic themes, gaps, and options
              </p>
            </div>
            <div className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">
                5
              </div>
              <p className="text-muted-foreground">
                Backcast from desired outcomes to clarify priorities
              </p>
            </div>
            <div className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">
                6
              </div>
              <p className="text-muted-foreground">
                Decide and act with clear next steps and ownership
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-muted-foreground leading-relaxed text-center">
              Throughout the program, participants learn how to work with AI as a thinking partner, strengthening internal strategic capability and decision confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            Who it's for
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is designed for organisations and leaders responsible for shaping direction and making complex decisions, including:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Senior leaders and executive teams</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Strategy, innovation, and transformation leaders</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Subject matter experts contributing to critical decisions</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Organisations navigating complexity, growth, or change</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            Start here
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is tailored to your organisation's strategic priorities and decision context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#268DB0' }}>
                  1
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Identify a priority
              </h3>
              <p className="text-muted-foreground text-sm">
                Identify a high-value decision, challenge, or opportunity that matters to your organisation.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#268DB0' }}>
                  2
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Design the approach
              </h3>
              <p className="text-muted-foreground text-sm">
                Design an AI-enabled insight approach aligned to your strategic objective and context.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#268DB0' }}>
                  3
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build capability
              </h3>
              <p className="text-muted-foreground text-sm">
                Run a pilot to demonstrate value and build internal capability with your team.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12 text-primary">
            FAQs
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-secondary/50 transition-colors duration-200"
                >
                  <h3 className="font-heading font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
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

export default CollaborativeIntelligence;

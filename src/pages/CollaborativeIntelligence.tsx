import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Users, Lightbulb, Target, Zap, Plus, Minus } from "lucide-react";
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
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/service-2.jpg"
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
          <div className="mb-6 flex items-center justify-center">
            <img
              src="/CI_Wlogo.png"
              alt="Collaborative Intelligence"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Empower people with AI for smarter insights, decisions and execution.
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

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence helps organisations strengthen how they think, decide, and act in complex environments — combining human expertise with AI-enabled insight.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Building on 30 years of experience aligning people, insight, and action, Waterfield enables people and AI to work together — lifting decision quality, alignment, and execution at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the core is building your organisation's ability to use generative AI as a thinking partner, challenger, and creative collaborator — surfacing deeper insight, challenging assumptions, and unlocking smarter, more strategic decisions.
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
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Insight is a critical driver of organisational success. Better insights, better performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today's leaders operate in environments defined by accelerating change, rising complexity, and overwhelming information. AI is increasingly recognised as essential, yet many organisations struggle to integrate it meaningfully into strategy and decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Human expertise alone can no longer keep pace. AI without context, values, or intent lacks strategic depth.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence addresses this by building the capability to combine human expertise with AI — enabling organisations to continuously generate insight, align around it, and act decisively.
            </p>
          </div>
        </div>
      </section>

      {/* From Collective to Collaborative Intelligence */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              From Collective to Collaborative Intelligence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence combines the strengths of human collective intelligence with the power of generative AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Human strengths</h3>
                <p className="text-muted-foreground text-sm">
                  Expertise, judgement, ethics, context, experience, creativity
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">AI strengths</h3>
                <p className="text-muted-foreground text-sm">
                  Rapid analysis, pattern detection, synthesis at scale
                </p>
              </div>
            </div>

            <p className="font-heading font-semibold text-lg text-foreground">
              Used well, AI does not replace human expertise — it augments and challenges it, supporting decisions that are:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-6">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[100px] md:w-[120px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">More informed</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[100px] md:w-[120px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Higher quality</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[100px] md:w-[120px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Faster</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[100px] md:w-[120px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">More robust under scrutiny</p>
              </div>
            </div>
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
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence builds a repeatable strategic insight capability inside your organisation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Teams become better able to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Generate high-quality strategic insight on an ongoing basis
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Combine human expertise with AI-enabled analysis
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Identify patterns, gaps, risks, and emerging opportunities early
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Introduce informed challenge to strengthen thinking
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Align people around shared, evidence-based understanding
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Turn insight into confident, coordinated decisions
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-8">
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
              The impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Faster, higher-quality strategic decisions
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Stronger alignment between strategy, innovation, and execution
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Scalable intelligence beyond a small group of experts
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is applied to real strategic priorities, strengthening how organisations generate insight, test decisions, and adapt over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Global insight, applied to your context
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Scan global research, benchmarks, and case studies — distilling what matters and applying it directly to your strategy, priorities, and operating environment.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Stronger decisions through informed challenge
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Stress-test assumptions and plans with structured, evidence-based challenges — reducing blind spots and increasing confidence before decisions are locked in.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Continuous strategic insight
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is delivered through a clear, practical framework, applied to a priority use case chosen by the organisation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-secondary rounded-2xl p-8 md:p-10">
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                    1.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Define
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Define a strategic question or decision that matters.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                    2.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Integrate
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Integrate relevant internal knowledge and external intelligence.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                    3.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Analyse
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Analyse and synthesise insight using AI-enabled tools.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                    4.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Surface
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Surface strategic themes, gaps, and options.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                    5.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Backcast
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Backcast from desired outcomes to clarify priorities.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">
                    6.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Decide and act
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Decide and act with clear next steps and ownership.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
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
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Collaborative Intelligence is designed for organisations and leaders responsible for shaping direction and making complex decisions, including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Senior leaders and executive teams</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Strategy, innovation, and transformation leaders</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Subject matter experts contributing to critical decisions</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Organisations navigating complexity, growth, or change</p>
              </div>
            </div>
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
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold text-primary">1</span>
                <div className="w-16 h-1 mt-1 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Identify a priority
              </h3>
              <p className="text-muted-foreground text-sm">
                Identify a high-value decision, challenge, or opportunity that matters to your organisation.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold text-primary">2</span>
                <div className="w-16 h-1 mt-1 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Design the approach
              </h3>
              <p className="text-muted-foreground text-sm">
                Design an AI-enabled insight approach aligned to your strategic objective and context.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold text-primary">3</span>
                <div className="w-16 h-1 mt-1 rounded-full bg-primary"></div>
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

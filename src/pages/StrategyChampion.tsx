import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, RefreshCw, Compass, Zap, Plus, Minus } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const StrategyChampion = () => {
  const { ref, offset } = useParallax(0.5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Waterfield | Strategy Champion";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What problem does Strategy Champion solve?",
      answer: "It closes the gap between strategy and execution by building internal capability to lead, coordinate, and sustain strategy implementation."
    },
    {
      question: "How is this different from strategy training or workshops?",
      answer: "Strategy Champion focuses on execution, not theory. Participants work on the organisation's live strategy and learn by running the process with guided support."
    },
    {
      question: "Who typically becomes a Strategy Champion?",
      answer: "Strategy Champions are leaders or influencers responsible for coordinating work, facilitating teams, or maintaining strategic focus — not necessarily senior executives."
    },
    {
      question: "How does Waterfield support capability transfer?",
      answer: "Waterfield guides participants through shadow facilitation, supported practice, and coaching, building confidence to lead the process independently."
    },
    {
      question: "What outcomes should we expect?",
      answer: "Stronger alignment, clearer ownership, sustained execution momentum, and reduced reliance on external facilitation."
    }
  ];

  const brandColor = "#F8983C";
  const brandColorHover = "#E87D2B";

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/service-1.jpg"
            alt="Strategy Champion"
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
              src="/SC_Wlogo.png"
              alt="Strategy Champion"
              className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Build confident internal capability for agile strategy execution.
          </p>
        </div>
      </section>

      {/* Strategy only delivers value when implemented */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              From strategy to execution
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy only delivers value when it is implemented.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Once direction is set, organisations need clear ownership, shared understanding, and a disciplined way to move into action.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The transition from strategy to execution is where momentum is often lost. Direction is agreed, but focus can slip as teams move into delivery.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy Champion strengthens this phase — providing the leadership, structure, and rhythm needed to turn strategy into coordinated execution and sustain progress across the organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Why this program */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Why this program
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Teams want to understand how their work connects to strategy and feel supported to act with purpose — not just deliver tasks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In many organisations, strategy execution sits with a small number of leaders or is supported by external advisors. When those roles shift or step back, maintaining clarity and momentum can become difficult.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Organisations benefit from building internal, collaborative leadership capability — people who can lead the strategy process, facilitate alignment, and guide execution in real operating conditions.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy Champion builds this capability by strengthening internal ownership of strategy execution. Through guided practice and coaching, participants develop the confidence and competence to run the process themselves — leading collaboratively and keeping strategy active across the organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborative strategy execution */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              Collaborative strategy execution
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy Champion focuses on building competent, confident internal capability to run an agile strategy execution process.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The program equips internal leaders to lead the strategy process, facilitate stand-ups, and oversee 90-day reviews for sustained execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It strengthens the ability to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-6">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Hold strategic direction clearly</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Lead execution conversations collaboratively</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Translate intent into coordinated action</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The emphasis is on shared ownership — ensuring strategy is actively led with teams, not carried by a few individuals.
            </p>
          </div>
        </div>
      </section>

      {/* The capability it builds */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The capability it builds
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy Champion strengthens a focused set of core execution capabilities that leaders apply repeatedly over time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Participants become better able to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Lead with confidence
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Lead the strategy execution process with confidence and consistency
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Facilitate alignment
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Facilitate alignment and collaboration across teams and priorities
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <RefreshCw className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Maintain rhythm
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Maintain a clear execution rhythm that sustains focus and momentum
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Compass className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Guide teams
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Guide teams from intent to coordinated action, keeping attention on outcomes
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              These capabilities are practical, repeatable, and embedded through real application.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The impact
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-2xl p-8">
                <p className="font-heading text-xl font-semibold mb-4 text-center" style={{ color: brandColor }}>
                  For your organisation
                </p>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>A consistent, organisation-wide execution rhythm</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Clear visibility of progress, priorities, and shared confidence</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Stronger alignment between leaders and teams</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>A disciplined, collaborative approach that keeps strategy active</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Greater ownership of strategy execution across the organisation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-2xl p-8">
                <p className="font-heading text-xl font-semibold mb-4 text-center" style={{ color: brandColor }}>
                  For Strategy Champions
                </p>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Confidence leading kick-offs, stand-ups, and 90-day rollovers</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Skill facilitating collaborative execution conversations</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Deep understanding of StrategyConnect Live</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Ability to support others in shaping clear tasks, targets, and milestones</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>A practical leadership style that builds clarity and commitment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The structure */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The structure
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Strategy Champion builds capability through hands-on application using the organisation's live strategy.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8 md:p-10">
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: brandColor }}>
                    1.
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Strategy execution kick-off
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Set the foundation for execution and bring people together around a shared strategic direction, establishing clarity on roles, responsibilities, and the first 90-day priorities.
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
                  Stand-ups
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Run stand-ups that create a predictable two-week cadence, improve visibility across teams, support shared accountability, and surface issues early without derailing momentum.
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
                  90-day rollover
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Guide teams through retrospective, review, and reset — supporting learning, adaptation, and collective ownership of outcomes.
                </p>
              </div>
            </div>
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
              Strategy Champion is designed for:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-6">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Emerging and established leaders</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Strategy, transformation, and delivery roles</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Program and initiative leads</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Organisations seeking to embed collaborative strategy execution capability</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              It supports organisations looking to align strategy, execution, and outcomes through shared leadership.
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
              Strategy Champion is tailored to your organisation's Strategy Map and priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>1</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Identify key individuals
              </h3>
              <p className="text-muted-foreground text-sm">
                Identify the key individuals who will become Strategy Champions and collaboratively lead execution.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>2</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Strengthen priority areas
              </h3>
              <p className="text-muted-foreground text-sm">
                Equip internal leaders to lead the strategy process and guide coordinated execution.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>3</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build internal capability
              </h3>
              <p className="text-muted-foreground text-sm">
                Embed alignment and momentum across teams.
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

export default StrategyChampion;

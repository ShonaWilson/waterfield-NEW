import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Zap, CheckCircle, Compass, Plus, Minus, ChevronDown, ChevronUp, Scale } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const RapidConsensus = () => {
  const { ref, offset } = useParallax(0.5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    document.title = "Waterfield | Rapid Consensus";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleExpand = (key: string) => {
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqs = [
    {
      question: "Who is it for?",
      answer: "Rapid Consensus is for teams, leaders, and organisations that need to align quickly, make clear decisions, and move forward together — particularly when multiple perspectives are involved."
    },
    {
      question: "How does it work?",
      answer: "Rapid Consensus uses a structured, facilitated process that moves groups from shared understanding to clear decisions and agreed actions, drawing on the collective intelligence of the room. It reduces time spent in unproductive meetings, builds shared ownership, and creates clarity on what needs to happen next — and who owns it."
    },
    {
      question: "Where can it be used?",
      answer: "Rapid Consensus can be applied across a wide range of settings — from leadership teams and project groups to large workshops, alliances, and stakeholder forums, both in person and online."
    },
    {
      question: "Can it be tailored to our context?",
      answer: "Yes. Rapid Consensus is always tailored. The program is shaped around your organisation's context and priorities, the people involved, and the type of decisions you need to make. This ensures the experience is practical, relevant, and directly applicable to real-world challenges."
    },
    {
      question: "What outcomes can we expect?",
      answer: "Teams typically leave Rapid Consensus with clear alignment on key decisions, agreed actions and ownership, improved confidence in collaborative decision-making, and stronger facilitation capability within the organisation. Most importantly, teams are equipped to move forward together with clarity and momentum."
    }
  ];

  const brandColor = "#be1d3d";
  const brandColorHover = "#a5182f";

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/RC.jpg"
            alt="Rapid Consensus"
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
              src="/RC_Wlogo.png"
              alt="Rapid Consensus"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Gain collaborative alignment for clear outcomes and action.
          </p>
        </div>
      </section>

      {/* When teams aren't aligned */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              Align & move forward together
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              When teams aren't aligned, progress slows. Meetings drag on, decisions stall, and effort is wasted bringing people back together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Rapid Consensus is a practical, proven program that helps teams reach shared understanding, agree on direction, and move forward with confidence — together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It builds the capability to collaborate effectively, make decisions faster, and turn discussion into directed action.
            </p>
          </div>
        </div>
      </section>

      {/* Why Rapid Consensus matters */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Why this program
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/workshop.png"
                alt="Rapid Consensus"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                An organisation's success depends on how well its teams work together day to day.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Without it, you see unclear actions, divergent agendas, mounting frustration, and lost productivity. What teams actually need is clarity on outcomes, shared ownership, and a way to move forward without constantly resetting the conversation.
              </p>
              <p className="font-heading font-semibold text-lg text-foreground">
                Rapid Consensus creates actionable agreement — promoting alignment, motivation, and productivity across your organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Rapid Consensus is */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              The capability it builds
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Rapid Consensus teaches a simple, powerful framework for collaborative decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Refined over decades, this interactive program builds lasting capability—helping organisations align people, clarify decisions, and move forward together.
            </p>
            <p className="font-heading font-semibold text-lg" style={{ color: brandColor }}>
              It develops:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(190, 29, 61, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">Clarity through shared understanding</h3>
              </div>
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(190, 29, 61, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">Alignment on the best way forward</h3>
              </div>
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(190, 29, 61, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">Commitment to agreed actions and ownership</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll gain */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            What you'll gain
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              The key benefits across your organisation include better decisions, stronger buy-in, and faster progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Clear, effective outputs
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reach decisions quickly by drawing on the collective knowledge of the group.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Ownership and action
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create clear accountability and agreed actions that people genuinely commit to.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Faster, focused meetings
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reduce conflict, repetition, and time spent trying to realign.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Breadth of engagement
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Apply the process across small teams, large groups, and multi-stakeholder settings.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Scale className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Equal contribution
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create an environment where people feel heard, valued, and willing to contribute.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Confidence and capability
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build the skills to facilitate collaborative sessions of any size with impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the program works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            How it works
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Rapid Consensus is a hands-on learning experience that combines clarity, capability, and real application.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The program equips your team to reach consensus quickly, own decisions, and turn discussions into directed action.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Part 1 */}
            <div className="bg-secondary rounded-xl overflow-hidden">
              <div className="px-6 py-4">
                <span className="font-heading font-semibold block" style={{ color: brandColor }}>Part 1: Shared agreement and action as a team</span>
                <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                  Participants work through a real issue for your organisation, achieving shared understanding, agreement, and clear direction.
                </span>
              </div>
              <div className="mx-4 mb-4 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <button
                  onClick={() => toggleExpand('part-1')}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground text-sm">What teams will achieve:</span>
                  {expandedItems['part-1'] ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedItems['part-1'] && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span style={{ color: brandColor }} className="mr-2">•</span>
                        <span>Gain clarity and alignment on key decisions.</span>
                      </li>
                      <li className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span style={{ color: brandColor }} className="mr-2">•</span>
                        <span>Experience contributing productively to important discussions.</span>
                      </li>
                      <li className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span style={{ color: brandColor }} className="mr-2">•</span>
                        <span>Walk away with the ability to reach rapid consensus together.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-secondary rounded-xl overflow-hidden">
              <div className="px-6 py-4">
                <span className="font-heading font-semibold block" style={{ color: brandColor }}>Part 2: Facilitation capability embedded within your organisation</span>
                <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                  Participants learn the skills required to confidently lead collaborative group sessions.
                </span>
              </div>
              <div className="mx-4 mb-4 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <button
                  onClick={() => toggleExpand('part-2')}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground text-sm">What participants will learn:</span>
                  {expandedItems['part-2'] ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedItems['part-2'] && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span style={{ color: brandColor }} className="mr-2">•</span>
                        <span>Understand the principles behind the Rapid Consensus model.</span>
                      </li>
                      <li className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span style={{ color: brandColor }} className="mr-2">•</span>
                        <span>Gain tools and techniques for outcome-focused facilitation.</span>
                      </li>
                      <li className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span style={{ color: brandColor }} className="mr-2">•</span>
                        <span>Build confidence through guided practice to lead sessions with impact.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Teams don't just learn the process — they experience it in action.
            </p>
          </div>
        </div>
      </section>

      {/* The Rapid Consensus framework */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The framework
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              To reach consensus quickly and effectively, we guide your team in learning the critical components — process, skills, and context.
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
                  Right process
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A structured model that guides groups from issue to outcome to action.
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
                  Right skills
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Facilitation skills that enable clear contribution, shared understanding, and ownership.
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
                  Right context
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creating the conditions — physical, virtual, or hybrid — for productive dialogue and effective group dynamics.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Together, these elements enable teams to harness collective intelligence and move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Start here
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Move from discussion to decision with Rapid Consensus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>1</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Start with a conversation
              </h3>
              <p className="text-muted-foreground text-sm">
                We understand your context, challenges, and priorities.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>2</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Design the program
              </h3>
              <p className="text-muted-foreground text-sm">
                Rapid Consensus is shaped to your team, timeframe, and outcomes.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>3</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build alignment
              </h3>
              <p className="text-muted-foreground text-sm">
                Gain clarity, commitment, and momentum — together.
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
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: brandColor }}>
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

export default RapidConsensus;

import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Shield, Zap, Plus, Minus } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const AIAdvantage = () => {
  const { ref, offset } = useParallax(0.5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Waterfield | AI Advantage";
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
      answer: "Approach AI with shared clarity and confidence—knowing where AI creates value, how it should be governed, and how to enable it responsibly across the organisation."
    },
    {
      question: "What capability does it build?",
      answer: "AI Advantage develops the strategic, governance, and adoption capability leaders need to enable AI across their organisation—not as a technical initiative, but as an enterprise-wide strategic capability."
    },
    {
      question: "Who is this program for?",
      answer: "AI Advantage is designed for leaders and teams responsible for shaping how AI is adopted across the organisation—including executive teams, strategy leaders, transformation leads, risk and governance functions, and senior managers preparing their organisations for AI-driven change."
    },
    {
      question: "Do we need technical AI expertise to participate?",
      answer: "No. AI Advantage focuses on strategic, governance, and adoption capability—not technical implementation. Participants don't need AI or data science backgrounds; the program is designed for leaders who need to make informed decisions about AI strategy, governance, and responsible use."
    },
    {
      question: "How is it delivered?",
      answer: "AI Advantage combines facilitated workshops, structured capability-building sessions, and applied tools designed for AI governance and adoption. The program is tailored to your organisation's priorities and context."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/989.jpg"
            alt="AI Advantage"
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
              src="/AIAdvantage_Wlogo.png"
              alt="AI Advantage"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Build shared capability to enable AI with clarity and impact.
          </p>
        </div>
      </section>

      {/* Navigate AI with confidence */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Navigate AI with confidence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              AI is reshaping every industry—yet many organisations struggle to move beyond experimentation to enterprise-wide adoption.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Isolated AI trials and fragmented pilots often fail to scale because the foundational capability isn't in place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              AI Advantage helps organisations build the strategic clarity, governance, and leadership capability to enable AI responsibly, at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Without a shared AI strategy, organisations face duplication, rising risk, and missed opportunity.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              AI Advantage brings alignment and momentum to AI adoption.
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
              AI is transforming how organisations operate and compete—but adoption is rarely straightforward.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Many organisations face:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-6">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Fragmented AI initiatives without enterprise-wide alignment</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Unclear governance and rising risk</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Inconsistent understanding of AI's strategic value and limitations</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#268DB0' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Fear and hesitation among staff</p>
              </div>
            </div>
            <p className="font-heading font-semibold text-lg text-foreground">
              AI Advantage addresses these challenges by building shared strategic clarity, governance capability, and adoption confidence.
            </p>
          </div>
        </div>
      </section>

      {/* The Capability It Builds */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              The capability it builds
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              AI Advantage develops the strategic, governance, and adoption capability leaders need to enable AI across their organisation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Leaders and teams will become better able to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Set strategic AI direction
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Clarify where AI creates value and define shared priorities for adoption
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Govern AI responsibly
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Establish clear governance frameworks and manage risk with confidence
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Enable adoption at scale
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Support people across the organisation to adopt AI with clarity and confidence
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Lead AI-ready teams
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Build the leadership capability to guide AI transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            The impact
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8">
                <p className="font-heading text-xl font-semibold mb-4 text-primary text-center">
                  For your organisation
                </p>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>A clear, shared AI strategy and roadmap</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Governance frameworks that reduce risk</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Aligned leadership and organisation-wide momentum</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>The capability to scale AI adoption responsibly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-2xl p-8">
                <p className="font-heading text-xl font-semibold mb-4 text-primary text-center">
                  For leaders and teams
                </p>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Confidence leading AI initiatives</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Practical tools for governance and adoption</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Shared language for AI discussion and decision-making</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>A practical path from pilot to enterprise-wide value</span>
                  </li>
                </ul>
              </div>
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
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground text-center">
              AI Advantage is built around a practical framework designed for organisations navigating AI adoption.
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
                  AI Strategy
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clarify where AI creates value and define shared priorities for your organisation.
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
                  AI Governance
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Establish the policies, principles, and risk frameworks to manage AI responsibly.
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
                  AI Adoption
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enable people to understand, adopt, and use AI tools effectively and responsibly.
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
                  AI Leadership
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Build the capability of leaders to guide AI transformation across the organisation.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-muted-foreground leading-relaxed text-center">
              The program is tailored to your organisation's priorities—whether that's establishing foundational governance, accelerating adoption, or building leadership capability.
            </p>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4 text-primary">
            Start here
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              AI Advantage is tailored to your organisation's context, priorities, and readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold text-primary">1</span>
                <div className="w-16 h-1 mt-1 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Understand your context
              </h3>
              <p className="text-muted-foreground text-sm">
                We begin by understanding where your organisation is today — AI maturity, current initiatives, governance gaps, and strategic priorities.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold text-primary">2</span>
                <div className="w-16 h-1 mt-1 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Design the program
              </h3>
              <p className="text-muted-foreground text-sm">
                Together, we shape the program focus — whether strategy, governance, adoption, or leadership — to match your organisation's needs.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold text-primary">3</span>
                <div className="w-16 h-1 mt-1 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build capability
              </h3>
              <p className="text-muted-foreground text-sm">
                Equip leaders with the practical tools and frameworks needed to lead AI adoption with clarity and confidence.
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
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12 text-primary">
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

export default AIAdvantage;

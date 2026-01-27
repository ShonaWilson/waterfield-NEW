import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Boxes, TrendingUp, Radar, RefreshCw, Plus, Minus, Map } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const ThinkPlanAct = () => {
  const { ref, offset } = useParallax(0.5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Waterfield | Think. Plan. Act. Strategically";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What capability is this program designed to build?",
      answer: "Think. Plan. Act. Strategically builds strategic capability — the ability to think strategically, anticipate change, and translate insight into clear direction and action. It strengthens future literacy, foresight, alignment, and execution so leaders can operate confidently in complex and changing environments."
    },
    {
      question: "Who is this program best suited for?",
      answer: "The program is designed for emerging leaders, high-potential professionals, and established leaders who are expected to contribute to strategic direction — not just functional delivery. It is particularly valuable for leaders with strong technical or disciplinary expertise who need to develop broader strategic capability."
    },
    {
      question: "What do participants actually work on during the program?",
      answer: "Participants work with real organisational context. They scan the environment for emerging trends and risks, translate insight into strategic direction, and design practical roadmaps that connect purpose, priorities, and execution."
    },
    {
      question: "What is the Think. Plan. Act. framework?",
      answer: "Think. Plan. Act. is a practical, repeatable cycle that connects strategic thinking with action. Think focuses on foresight and understanding the environment. Plan translates insight into aligned strategic direction. Act turns plans into progress through agile execution and collaboration. The cycle supports ongoing learning, adaptation, and sustained impact."
    },
    {
      question: "How does this support organisational outcomes, not just individual development?",
      answer: "By building shared strategic language and capability, the program improves alignment, decision-making, and execution across leaders. Organisations benefit from stronger strategic clarity, greater resilience, and leaders who can consistently connect long-term direction with day-to-day action."
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
            alt="Think. Plan. Act. Strategically"
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
              src="/Image_dump/TPA_Logo.png"
              alt="Think. Plan. Act. Strategically"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Equip emerging leaders to think ahead and lead with confidence.
          </p>
        </div>
      </section>

      {/* Build future-ready leaders */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: brandColor }}>
              Build future-ready leaders
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              To build a future-ready organisation, tomorrow's leaders must think strategically, anticipate change, and act with confidence to remain relevant and resilient.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By the time many high-potential professionals reach senior management, little has been invested in their ability to think, plan, and act strategically — yet these capabilities are essential to long-term organisational success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Think. Plan. Act. Strategically builds this capability through a practical framework that prepares leaders to navigate complexity, design clear strategic direction, and act with intent.
            </p>
          </div>
        </div>
      </section>

      {/* Why Think. Plan. Act. Strategically */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            Why this program
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-heading font-semibold text-lg text-foreground">
              Many professionals are highly skilled within their disciplines — finance, operations, or business development — yet face increasing expectations to think beyond functional boundaries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As complexity grows, organisations need leaders with strong future literacy: the ability to interpret emerging trends, anticipate change, and guide purposeful action in uncertain environments.
            </p>
            <p className="font-heading text-xl font-semibold" style={{ color: brandColor }}>
              Build future literacy. See what's emerging. Act before others do.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This program builds future literacy — not just understanding trends, but knowing how to interpret them and act with confidence in uncertainty. It connects foresight, strategic design, and execution, turning insight into meaningful action.
            </p>
          </div>
        </div>
      </section>

      {/* The capability it builds */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The capability it builds
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground text-center">
              Think. Plan. Act. Strategically helps leaders shape the future by learning how to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Radar className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Scan the horizon
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Scan the horizon for emerging trends that may create opportunities or risks
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Collaborate across stakeholders
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Collaborate across diverse stakeholders to expand insight and alignment
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Create momentum for change
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create momentum for change to strengthen organisational resilience
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Map className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Design a strategic roadmap
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Design a strategic roadmap that aligns direction across the organisation
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <RefreshCw className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Foster a learning culture
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Foster a learning culture that tests ideas and scales what works
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Boxes className="w-8 h-8" style={{ color: brandColor }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Innovate business models
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Innovate business models to create and capture new value
              </p>
            </div>
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
                  For leaders
                </p>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Greater confidence in strategic thinking and decision-making</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Clearer ability to frame complex challenges</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Stronger connection between insight, planning, and action</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Increased capacity to lead through change with purpose</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-2xl p-8">
                <p className="font-heading text-xl font-semibold mb-4 text-center" style={{ color: brandColor }}>
                  For organisations
                </p>
                <ul className="space-y-3">
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Stronger strategic capability across leadership</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Improved alignment around direction and priorities</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>More effective execution of strategy</span>
                  </li>
                  <li className="text-muted-foreground text-sm flex items-start">
                    <span style={{ color: brandColor }} className="mr-2">•</span>
                    <span>Increased resilience in the face of change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The framework */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: brandColor }}>
            The framework
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Think. Plan. Act. Strategically is designed to connect strategic thinking with practical action — helping leaders build the clarity, confidence, and capability to deliver results.
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
                  Think strategically
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Understand the environment and identify trends that may become future opportunities or risks. Use these insights to challenge existing assumptions and uncover new ways to create and deliver value.
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
                  Plan strategically
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Translate insight into clear direction and shared priorities. Align teams around a concise Strategy Map that connects ambition with practical steps for execution.
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
                  Act strategically
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Turn plans into progress through agile execution and collaboration. Build the capabilities and culture needed to adapt, learn, and sustain long-term success.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              At its heart is a clear understanding of the organisation's reason for being — connecting day-to-day actions with long-term direction and meaning.
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
              Think. Plan. Act. Strategically is designed for:
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
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">High-potential professionals</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Leadership teams</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
                style={{ backgroundColor: '#F8983C' }}
              >
                <p className="font-heading font-medium text-white text-xs md:text-sm leading-[0.95]">Organisations seeking stronger strategic capability</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              It is relevant across sectors and roles where strategic thinking, alignment, and execution matter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Developed through Waterfield's work with organisations globally, the program reflects decades of experience in building strategic capability. The focus is not theory or instruction, but developing leaders who can think clearly, align effectively, and design and deliver strategy with confidence over time.
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
              Begin building future-ready leadership and sustained strategic performance with Think. Plan. Act. Strategically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>1</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Begin a conversation
              </h3>
              <p className="text-muted-foreground text-sm">
                Understand priorities and context.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>2</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Set focus and learn
              </h3>
              <p className="text-muted-foreground text-sm">
                Through immersive use of the framework.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: brandColor }}>3</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: brandColor }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build strategic clarity
              </h3>
              <p className="text-muted-foreground text-sm">
                Alignment and momentum.
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

export default ThinkPlanAct;

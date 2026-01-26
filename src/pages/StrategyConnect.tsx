import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, ArrowRight, Users, Compass, RefreshCw, Zap, Rocket, ChevronDown, ChevronUp } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const FIASections = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (key: string) => {
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* Foresight Section */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <img
              src="/Foresight.png"
              alt="Foresight"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <p className="font-heading font-semibold text-lg text-foreground mb-3">
            Anticipate what's next and design your future with confidence.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Foresight helps your organisation look beyond today's decisions and understand the forces shaping tomorrow. Strategy Connect brings structure to this thinking — combining diverse perspectives, evidence, and strategic challenge to inform clear direction.
          </p>
        </div>

        {/* Expandable: Collective intelligence */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('foresight-1')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Collective intelligence</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Bring the right people together to see the future more clearly.
              </span>
            </div>
            {expandedItems['foresight-1'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['foresight-1'] && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                We bring together key people from across your organisation to share insight, challenge assumptions, and collectively explore what the future may hold. This ensures foresight is grounded in lived experience and operational reality, not isolated analysis or individual viewpoints.
              </p>
            </div>
          )}
        </div>

        {/* Expandable: Research & analysis */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('foresight-2')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Research & analysis</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Understand the external forces shaping your strategy.
              </span>
            </div>
            {expandedItems['foresight-2'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['foresight-2'] && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                We analyse the trends, signals, and shifts impacting your organisation — economic, technological, regulatory, social, and competitive. This creates a shared, evidence-informed understanding of what's changing, what matters most, and where attention is needed.
              </p>
            </div>
          )}
        </div>

        {/* Expandable: Business model innovation */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('foresight-3')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Business model innovation</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Test your model against the future.
              </span>
            </div>
            {expandedItems['foresight-3'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['foresight-3'] && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Foresight isn't complete without challenge. We stress-test your current business model against anticipated futures and explore how it may need to evolve to continue creating, delivering, and capturing value as conditions change.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-muted-foreground/20"></div>

      {/* Insight Section */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <img
              src="/Insight.png"
              alt="Insight"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <p className="font-heading font-semibold text-lg text-foreground mb-3">
            Turn foresight into clear, shared direction.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Insight is where patterns emerge and complexity is translated into clarity. Strategy Connect brings people together to make sense of what's ahead, align on priorities, and define a clear path forward.
          </p>
        </div>

        {/* Expandable: Strategy Map */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('insight-1')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Strategy Map</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Define where you are heading and how you will get there.
              </span>
            </div>
            {expandedItems['insight-1'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['insight-1'] && (
            <div className="px-6 pb-6 space-y-3">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Insight is captured in a clear, one-page Strategy Map that sets direction and focus.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your Strategy Map defines:
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span>What success looks like for your organisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span>The strategic investments required to be future-ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span>The priorities to focus on over the next 12 months</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Co-created and owned across the organisation, it enables faster, more confident decision-making.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-muted-foreground/20"></div>

      {/* Action Section */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <img
              src="/Action.png"
              alt="Action"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <p className="font-heading font-semibold text-lg text-foreground mb-3">
            Turn strategy into focused, measurable progress.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Action is where Strategy Connect moves from direction to delivery. Clear ownership, live visibility, and disciplined review ensure strategy stays active, relevant, and moving forward.
          </p>
        </div>

        {/* Expandable: Clear ownership */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('action-1')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Resourcing</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Make accountability visible and shared.
              </span>
            </div>
            {expandedItems['action-1'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['action-1'] && (
            <div className="px-6 pb-6 space-y-3">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Roles and responsibilities are clearly defined to support execution, including:
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span>A Strategy Owner accountable for overall direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span>Strategy Champions supporting momentum and engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span>Milestone Owners responsible for delivery</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clear ownership ensures progress isn't assumed — it's actively managed.
              </p>
            </div>
          )}
        </div>

        {/* Expandable: Live tracking */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('action-2')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Live tracking platform</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Keep strategy visible and front of mind.
              </span>
            </div>
            {expandedItems['action-2'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['action-2'] && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strategy Connect Live provides a secure, shared view of your Strategy Map. It enables real-time tracking of priorities, milestones, and progress — keeping teams aligned, informed, and focused on what matters most.
              </p>
            </div>
          )}
        </div>

        {/* Expandable: Agile execution & review */}
        <div className="bg-background rounded-xl overflow-hidden">
          <button
            onClick={() => toggleExpand('action-3')}
            className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-heading font-semibold block" style={{ color: '#afab89' }}>Agile execution</span>
              <span className="font-heading font-medium text-foreground text-sm mt-1 block">
                Adapt with confidence as conditions change.
              </span>
            </div>
            {expandedItems['action-3'] ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          {expandedItems['action-3'] && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strategy is reviewed through monthly, quarterly, and annual check-ins. This disciplined rhythm allows teams to test what's working, refine where needed, and respond quickly to new insight — without losing sight of long-term direction.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StrategyConnect = () => {
  const { ref, offset } = useParallax(0.5);
  const [quoteExpanded, setQuoteExpanded] = useState(false);

  useEffect(() => {
    document.title = "Waterfield | StrategyConnect";
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
            src="/service-1.jpg"
            alt="StrategyConnect"
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
              src="/strategyconnect_white.png.avif"
              alt="StrategyConnect"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Create and deliver a clear Strategy Map that drives alignment and results.
          </p>
          <div className="flex justify-center items-center gap-2">
            <span className="font-heading font-medium text-sm md:text-base text-primary-foreground">
              Already using StrategyConnect?
            </span>
            <a
              href="https://application.strategyconnect.com.au/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base transition-all duration-300"
              style={{ color: '#F8983C' }}
            >
              Log in
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Thrive Today & Tomorrow */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#F8983C' }}>
              Align & activate your strategy
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/20180731_100517.jpeg.avif"
                alt="Strategy Connect"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                Create clarity, alignment, and momentum—so strategy drives action.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When strategy lacks alignment, priorities blur, momentum slows, and teams stay busy without progress.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strategy Connect brings clarity back to strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It aligns your people around a shared direction, focuses effort on what matters most, and turns insight into coordinated, measurable action.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strategy Connect transforms strategy from a static document into a living, shared map, owned across the organisation and built to deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clear pathway forward */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Clear pathway forward
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-6">
              To move forward with confidence, organisations must make clear strategic decisions about where to focus time, energy, and investment.
            </p>
            <p className="text-muted-foreground mb-4">
              Making clear strategic decisions is essential — but rarely simple. Competing priorities, external forces, and a constantly shifting landscape can leave strategy stuck at a high level — or stalled entirely.
            </p>
            <p className="text-muted-foreground mb-6">
              Strategy Connect brings diverse perspectives together, surfaces what matters most, and translates complexity into a focused, one-page Strategy Map. It defines what success looks like, the direction to get there, and how you'll make it happen — then get everyone moving together.
            </p>
            <p className="font-heading text-xl font-semibold" style={{ color: '#F8983C' }}>
              What Strategy Connect delivers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: '#F8983C' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Clarity
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A one-page Strategy Map that turns insight into defined outcomes, so everyone understands direction and priorities.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: '#F8983C' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Engagement
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A collaborative approach that places your team at the centre, building ownership and commitment.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8" style={{ color: '#F8983C' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Results
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A practical execution framework that converts strategy into focused, measurable outcomes through clear accountability.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="font-heading text-xl font-semibold mb-8" style={{ color: '#F8983C' }}>
              Trusted by organisations turning complexity into clear direction.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/gsam_sm_00_p_1024x768.jpg.avif"
                  alt="Client logo"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-20 flex items-center justify-center">
                <img
                  src="/Lend-Lease-LL-master-logos-RGB4-3-300x216.jpg.avif"
                  alt="Client logo"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="h-20 flex items-center justify-center">
                <img
                  src="/CSIRO_Grad_RGB_hr.jpg.avif"
                  alt="Client logo"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/Savills_logo_svg.png.avif"
                  alt="Client logo"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Strategy Connect links Foresight, Insight, and Action in a simple, connected process that keeps strategy clear, relevant, and focused on results.
            </p>
            <p className="text-muted-foreground mb-3">
              Rather than a one-off strategy exercise, Strategy Connect creates an ongoing cycle — helping your organisation anticipate what's ahead, make confident decisions, and adapt as conditions change.
            </p>
            <p className="text-muted-foreground">
              Each stage builds on the next, ensuring insight leads to action and action informs future direction.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="w-full" style={{ maxWidth: '838px' }}>
              <img
                src="/FullCycleFIA.png"
                alt="StrategyConnect process"
                className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* FIA Sections */}
          <FIASections />
        </div>
      </section>

      {/* Build Strategic Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Build strategic impact
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading font-semibold text-lg text-foreground mb-8">
              To achieve a resilient strategy, Strategy Connect builds three essential capabilities — delivering clarity, creating value, and executing with pace.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-secondary rounded-2xl p-8 md:p-10 mb-8">
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Compass className="w-10 h-10" style={{ color: '#F8983C' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Alignment
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clarity and shared direction across your organisation.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Rocket className="w-10 h-10" style={{ color: '#F8983C' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Action
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Turn ideas into tangible outcomes, quickly.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <RefreshCw className="w-10 h-10" style={{ color: '#F8983C' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Adaptation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Embed learning, anticipate trends, and adjust as conditions change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/shutterstock-2055147128.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 25%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic mb-4">
              "What Waterfield does exceptionally well is make sense of the chaos and turn it into something absolutely actionable. That's the real magic. Strategy Connect has been the backbone of our business planning — it gives us a clear North Star and gets everyone rowing in the same direction, particularly when things get messy and volatile."
            </blockquote>
            {quoteExpanded && (
              <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic mb-4">
                "The real strength is that it's not a one-and-done workshop. We revisit the Strategy Map every year and it gets sharper each time. You leave with a clear one-page plan, real ownership, and a 90-day rhythm that keeps momentum high.<br /><br />The online tracking makes progress visible, and the monthly and quarterly action-learning reviews force the right conversations — so you can recalibrate quickly as conditions change. No slacking."
              </blockquote>
            )}
            <button
              onClick={() => setQuoteExpanded(!quoteExpanded)}
              className="font-heading font-medium text-sm text-primary-foreground/80 hover:text-primary-foreground underline mb-6 transition-colors"
            >
              {quoteExpanded ? 'Read less' : 'Read more'}
            </button>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Tim Robinson</span><br />
              COO & CFO, Asia Pacific, Savills
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Success in 3 Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Kick-off your strategy
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Getting started with Strategy Connect is straightforward and focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Anticipate what's next"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(1426%) hue-rotate(360deg) brightness(102%) contrast(96%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Anticipate what's next
              </h3>
              <p className="text-muted-foreground text-sm">
                We identify and anticipate the trends, forces, and external influences shaping your future — creating shared strategic insight from the outset.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Define clear direction"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(1426%) hue-rotate(360deg) brightness(102%) contrast(96%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Define clear direction
              </h3>
              <p className="text-muted-foreground text-sm">
                Using these insights, we align your team around a clear future direction — making informed decisions about where to focus time, energy, and investment.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Create your Strategy Map"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(1426%) hue-rotate(360deg) brightness(102%) contrast(96%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Create your Strategy Map
              </h3>
              <p className="text-muted-foreground text-sm">
                Together, we create a one-page Strategy Map covering your desired outcomes, strategic investments, and key milestones for the year ahead.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mt-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-2">
              Ready to align your team and create clear strategic direction?
            </p>
            <p className="text-muted-foreground mb-8">
              Let's talk about how Strategy Connect can support your organisation's next step.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#F8983C' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E87D2B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F8983C';
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

export default StrategyConnect;

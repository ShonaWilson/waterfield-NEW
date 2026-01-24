import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useParallax } from "@/hooks/useParallax";
import { MessageSquare, Compass, Sparkles, Zap, Ear, Eye, Users, Map } from "lucide-react";

const EngagePlus = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Engage Plus";
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
            src="/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png"
            alt="Engage Plus"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
              objectPosition: '50% 50%'
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
              src="/Image_dump/EngagePlus_LogoW.png"
              alt="Engage Plus"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Open, AI-powered engagement that reveals what will resonate.
          </p>
        </div>
      </section>

      {/* Hear what really matters */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#1e9aa7' }}>
              Hear what really matters
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="font-heading font-semibold text-lg text-foreground">
              Surveys force you to guess what matters. Conversations let people tell you.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              When you need to understand what people really think—customers, suppliers, employees, stakeholders—the instinct is to survey them. Define the questions. Analyze the data. But you're predicting what matters before you've even asked. People tick boxes and move on.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Engage Plus flips the script: AI-powered conversation at scale. People share what actually matters, in their own words. Deeper input. Higher participation. Because people actually want to respond.
            </p>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Why it's different
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed">
              What makes Engage Plus different is how it combines natural conversation with AI to deliver strategic clarity—fast.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Human-first, not form-first
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  People speak freely, in their own words—no forced rankings or constraints.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Compass className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Flexible and self-directed
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Participants choose what to focus on—and how long they stay.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Sparkles className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  AI-backed clarity
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced AI distills input into clear themes, priorities, and sentiment at scale.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-8 h-8" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Real-time strategy impact
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Insights don't sit in a report—they guide alignment and action in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The strategic edge */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            The strategic edge
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed">
              Engage Plus goes beyond gathering opinions—it helps shape smarter decisions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-secondary rounded-2xl p-8 md:p-10">
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Ear className="w-10 h-10" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Hear what matters
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
                  Understand how stakeholders think, talk, and feel—so you can shape strategies that resonate.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Eye className="w-10 h-10" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  See your blind spots
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
                  Uncover gaps between internal priorities and what stakeholders value most.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-10 h-10" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Bring voices into the room
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
                  Test ideas with real stakeholder perspectives—and adapt on the spot.
                </p>
              </div>

              <div className="border-t border-muted-foreground/20"></div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Map className="w-10 h-10" style={{ color: '#1e9aa7' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Navigate complexity
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
                  Easily adapts to customers, funders, government, tenants, members, or partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            How it works
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Turning input into insight
            </p>
          </div>

          <div className="grid grid-cols-1 auto-rows-fr gap-8 max-w-5xl mx-auto">
            {/* Capture voices */}
            <div className="bg-background rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    1
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Capture voices
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      People contribute through AI-enabled, natural dialogue—focusing on what matters to them, not predefined questions.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Surfaces honest insights often missed in traditional approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI sense-making */}
            <div className="bg-background rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    2
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    AI sense-making
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Analyses responses to identify themes, sentiment, and patterns at scale.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Turns large volumes of open input into clear, usable insight quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resonance and action */}
            <div className="bg-background rounded-xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-8 h-8 md:w-12 md:h-12 md:mb-4 flex-shrink-0 rounded-full flex items-center justify-center text-white text-base md:text-xl font-bold bg-foreground">
                    3
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary text-center">
                    Resonance and action
                  </h4>
                </div>
                <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">What it does</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Shapes insights into a clear view of what resonates strongly, partially, or not at all—enabling leaders to refine ideas, language, or direction.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground mb-4">Why it matters</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Reduces risk and increases likelihood of successful adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Deeper resonance. Clearer insight. Organisations move forward with clarity and shared understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Where it's used */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#1e9aa7' }}>
            Where it's used
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed mb-4">
              Rethink engagement
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Create connection and gain insight across the stakeholders who shape your success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Engage Plus is for leaders and organisations ready to listen deeply, think differently, and act with clarity—across industries and stakeholder groups.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl p-6 text-center space-y-4">
                <p className="font-heading font-medium text-sm md:text-base text-primary">Associations aligning member priorities</p>
                <p className="font-heading font-medium text-sm md:text-base text-primary">Developers aligning tenant and community experience</p>
                <p className="font-heading font-medium text-sm md:text-base text-primary">Educational institutions shaping student and staff engagement</p>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center space-y-4">
                <p className="font-heading font-medium text-sm md:text-base text-primary">Businesses designing customer-centric offerings</p>
                <p className="font-heading font-medium text-sm md:text-base text-primary">Government agencies seeking authentic citizen input</p>
                <p className="font-heading font-medium text-sm md:text-base text-primary">Research partnerships navigating multi-stakeholder ecosystems</p>
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
            src="/ChatGPT Image Jan 24, 2026 at 09_04_43 PM.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 50%' }}
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
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic mb-6">
              "The Ricegrowers' Association faced major regulatory change—presenting fresh opportunities while ending a century of how things had been done.
              <br /><br />
              Waterfield facilitated our Strategy and Purpose review, requiring input from members, leadership, and a broad base of industry stakeholders. A key contributor to its outstanding success was using Engage Plus to engage internal and external perspectives.
              <br /><br />
              I highly recommend making Engage Plus part of the process."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Graeme Kruger</span><br />
              Executive Director, Ricegrowers' Association of Australia
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
                alt="Define the focus"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(65%) sepia(50%) saturate(400%) hue-rotate(140deg) brightness(95%) contrast(90%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Define the focus
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clarify the topic, idea, or decision you want to explore—from strategic direction and change initiatives to propositions or policy.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Engage at scale"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(65%) sepia(50%) saturate(400%) hue-rotate(140deg) brightness(98%) contrast(90%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Engage at scale
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Invite stakeholders to participate through open, AI-powered dialogue. Simple to access, easy to complete—driving strong participation without fatigue.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Learn and act"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(65%) sepia(50%) saturate(400%) hue-rotate(140deg) brightness(95%) contrast(90%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Learn and act
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Review clear insights and resonance patterns to refine decisions, strengthen alignment, and move forward with confidence.
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
                e.currentTarget.style.backgroundColor = '#4FB0B8';
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

export default EngagePlus;

import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Zap, Brain, TrendingUp } from "lucide-react";

const HowItWorksTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "1. Engage & align" },
    { label: "2. Connect & expand" },
    { label: "3. Shape & validate" },
    { label: "4. Capture value" },
  ];

  return (
    <>
      {/* Tab Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-8 py-3 rounded-full font-heading font-semibold text-base transition-all duration-300 ${
              activeTab === index
                ? "text-white shadow-md"
                : "bg-background text-muted-foreground hover:bg-background/80"
            }`}
            style={activeTab === index ? { backgroundColor: '#268DB0' } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex justify-center">
        {activeTab === 0 && (
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-[157px] md:w-[194px] flex-shrink-0">
              <img
                src="/Image_dump/ChatGPT Image Jan 19, 2026 at 12_36_33 PM.png"
                alt="Engage and align"
                className="w-full h-auto rounded-full aspect-square object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <p className="font-heading font-semibold text-lg text-foreground">
                Clarify priorities, surface blind spots, and frame the right innovation challenge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with you to understand the challenge or opportunity you want to explore, identify blind spots, and define the scope of innovation that matters most. This sets a clear foundation before expanding thinking externally.
              </p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-[157px] md:w-[194px] flex-shrink-0">
              <img
                src="/IMG_0807_JPG.jpg.avif"
                alt="Connect and expand"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <p className="font-heading font-semibold text-lg text-foreground">
                Bringing together experts, partners, and AI insight to unlock new perspectives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We connect your team with external experts, partners, and diverse perspectives to expand thinking beyond what's possible internally. This network is curated to your specific challenge, bringing fresh insight and cross-industry experience.
              </p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-[157px] md:w-[194px] flex-shrink-0">
              <img
                src="/ChatGPT Image Jan 22, 2026 at 08_30_37 PM.png"
                alt="Shape and validate"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <p className="font-heading font-semibold text-lg text-foreground">
                Test and refine opportunities through agile sprints, strengthening ideas and accelerating decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through structured collaboration, ideas are explored, challenged, and refined — unlocking opportunities that wouldn't emerge through internal thinking alone. We reduce risk by validating thinking early and building confidence in the path forward.
              </p>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-[157px] md:w-[194px] flex-shrink-0">
              <img
                src="/about-hero.jpg"
                alt="Capture value and build capability"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <p className="font-heading font-semibold text-lg text-foreground">
                Translate ideas into practical outcomes and embed open-innovation capability within your organisation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Innovation becomes less of an event — and more of a capability. Your team learns how to innovate collaboratively, strategically, and continuously, building confidence working with external partners and experts.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const OpenInnovation = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | OpenInnovation";
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
            src="/service-3.jpg"
            alt="OpenInnovation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
              objectPosition: '25% 28%'
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
              src="/J_OI.png"
              alt="OpenInnovation"
              className="h-14 md:h-17 lg:h-20 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Expand thinking beyond your organisation to unlock new opportunities
          </p>
        </div>
      </section>

      {/* Innovate beyond boundaries */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#268DB0' }}>
              Innovate beyond boundaries
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/shutterstock-2055147128 copy.jpg"
                alt="Innovate beyond boundaries"
                className="w-full h-auto rounded-full aspect-square object-cover"
                style={{ objectPosition: '25% center' }}
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                Accelerate innovation and shape what's next through a diverse network of thinkers and experts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In a world where disruption happens overnight, organisations can't rely on internal thinking alone. Unlocking new opportunities demands broader perspectives, sharper insight, and the courage to challenge your current model.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Open Innovation brings together ideas, partners, and disciplines from outside your organisation—helping you anticipate change, act decisively, and grow strategically. Whether you're exploring new markets, strengthening services, building capability, or navigating AI advancement, we connect you with a trusted network to tackle complex challenges and co-create what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough thinking */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Breakthrough thinking
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Every organisation develops blind spots. Over time, familiar patterns, assumptions, and ways of seeing the world begin to limit what's possible.
            </p>
            <p className="text-muted-foreground">
              Open Innovation breaks these boundaries by widening your field of vision and revealing opportunities you can't see from the inside.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold" style={{ color: '#268DB0' }}>
              It creates value wherever complexity, uncertainty, or strategic pressure exists:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(38, 141, 176, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  New market opportunities
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Uncovering new ways to create and capture value
                </p>
              </div>

              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(38, 141, 176, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Business and service model innovation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Exploring new pathways to deliver impact
                </p>
              </div>

              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(38, 141, 176, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Cross-industry insight transfer
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Applying ideas from other sectors
                </p>
              </div>

              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'rgba(38, 141, 176, 0.15)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Future capability building
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strengthening your organisation's ability to innovate, collaborate, and adapt
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-muted-foreground leading-relaxed">
              Our work with organisations such as CSIRO, government agencies, and emerging technology leaders shows how diverse networks and structured collaboration unlock new thinking and practical innovation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-6">
              Organisations achieving results with Open Innovation:
            </p>
            <div className="flex justify-center items-center gap-6 md:gap-10">
              <img
                src="/ssg_logo_web.webp"
                alt="SSG"
                className="h-8 md:h-10 w-auto object-contain"
              />
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
              <img
                src="/CareerTrackers_Logo_Orange.svg"
                alt="CareerTrackers"
                className="h-8 md:h-10 w-auto object-contain"
              />
              <img
                src="/AGNSW_669U.jpg"
                alt="AGNSW"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ideas to impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Ideas to impact
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Open Innovation works because it expands perspective, sharpens decision-making, and speeds up the journey from concept to action.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Eye className="w-8 h-8" style={{ color: '#268DB0' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Breaks internal blind spots
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  External experts and AI-enabled insight challenge assumptions and open new opportunity spaces.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-8 h-8" style={{ color: '#268DB0' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Accelerates clarity and validation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Move from concept → clarity → action quickly and confidently.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Brain className="w-8 h-8" style={{ color: '#268DB0' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Strengthens decision-making
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Human expertise combined with AI insight leads to deeper understanding and more robust choices.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-8 h-8" style={{ color: '#268DB0' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Builds lasting capability
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your team learns how to innovate collaboratively, strategically, and continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            What to expect
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Open Innovation is designed to deliver value quickly — and continue creating impact over time.
            </p>
            <p className="text-muted-foreground mb-4">
              From the outset, you can expect a structured, collaborative process that introduces new perspectives, challenges existing assumptions, and focuses attention on the most promising opportunities.
            </p>
            <p className="font-heading text-xl font-semibold" style={{ color: '#268DB0' }}>
              Innovation becomes less of an event and more of a capability:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8 text-center">
                <p className="font-heading text-xl font-semibold mb-4" style={{ color: '#268DB0' }}>
                  Short term helps to
                </p>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">Surface fresh ideas and insights you can't generate internally</p>
                  <p className="text-muted-foreground text-sm">Test and refine opportunities with greater confidence</p>
                  <p className="text-muted-foreground text-sm">Reduce risk by validating thinking early</p>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <p className="font-heading text-xl font-semibold mb-4" style={{ color: '#268DB0' }}>
                  Over time helps to
                </p>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">Strengthen innovation capability and strategic learning</p>
                  <p className="text-muted-foreground text-sm">Build confidence working with external partners and experts</p>
                  <p className="text-muted-foreground text-sm">Embed more open, adaptive ways of thinking across teams</p>
                </div>
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
            src="/shutterstock_1801173394.jpg"
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
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic mb-6">
              "So often it's hard to get a team to think sufficiently 'outside the box' to come to new ideas. The Open Innovation workshop was outstanding because Waterfield brought together an intelligent and interesting group of people from a wide array of backgrounds to generate truly new ideas.
              <br /><br />
              The process itself was easy to follow, and the business gained real value from the ideas generated."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Clary Castrission OAM</span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            How it works
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              A clear, collaborative approach that delivers impact at speed.
            </p>
          </div>

          {/* Tab Component */}
          <HowItWorksTabs />
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Getting started
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Open Innovation is designed to be easy to begin — and flexible in how it's applied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: '#268DB0' }}>1</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: '#268DB0' }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Clarify the opportunity
              </h3>
              <p className="text-muted-foreground text-sm">
                We work with you to understand the challenge or opportunity you want to explore and identify the right people to involve.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: '#268DB0' }}>2</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: '#268DB0' }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Bring in broader thinking
              </h3>
              <p className="text-muted-foreground text-sm">
                We connect your team with external experts, partners, and diverse perspectives to expand thinking beyond what's possible internally.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-heading text-6xl font-semibold" style={{ color: '#268DB0' }}>3</span>
                <div className="w-16 h-1 mt-1 rounded-full" style={{ backgroundColor: '#268DB0' }}></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Innovate beyond the obvious
              </h3>
              <p className="text-muted-foreground text-sm">
                Through structured collaboration, ideas are explored, challenged, and refined — unlocking opportunities that wouldn't emerge through internal thinking alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation into impact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#268DB0' }}>
              Innovation into impact
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground mb-2">
              Open Innovation helps organisations broaden perspective, unlock opportunity, and turn new ideas into real outcomes.
            </p>
            <p className="text-muted-foreground mb-8">
              Explore what's next and accelerate innovation — let's discuss how this approach can support your team.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#268DB0' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2179A0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#268DB0';
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

export default OpenInnovation;

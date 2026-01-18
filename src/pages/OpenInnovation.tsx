import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Users, Target, Lightbulb } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/service-3.jpg"
            alt="OpenInnovation"
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
              src="/J_OI.png"
              alt="OpenInnovation"
              className="h-14 md:h-17 lg:h-20 w-auto object-contain"
            />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground">
            Accelerate innovation and shape what's next through a diverse network of thinkers and experts
          </h1>
        </div>
      </section>

      {/* Innovate Beyond Boundaries */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#268DB0' }}>
              Innovate Beyond Boundaries
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-3 text-center">
              <p className="font-heading font-semibold text-lg text-foreground">
                In a world where disruption happens overnight, organisations can't rely on internal thinking alone. To unlock new opportunities, you need broader perspectives, sharper insight, and the ability to challenge the limits of your current business model.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today's pace of change demands broader networks and faster strategic learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Open Innovation brings together ideas, partners, and disciplines from outside your organisation. It helps you anticipate change, act decisively, and grow strategically — whether you're exploring new markets, strengthening service models, developing future capability, or navigating rapid AI advancement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Open Innovation connects you with a trusted network to tackle complex challenges and co-create what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Thinking */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Breakthrough Thinking
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Every organisation develops blind spots — because every system forms familiar patterns, assumptions, and ways of seeing the world.
            </p>
            <p className="text-muted-foreground">
              Open Innovation breaks these boundaries by widening your field of vision and revealing opportunities you can't see from the inside.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="font-heading text-xl font-semibold text-center mb-6" style={{ color: '#268DB0' }}>
              It drives value wherever complexity, uncertainty, or strategic pressure exists:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: '#268DB0' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                New market opportunities
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Uncovering new ways to create and capture value
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-8 h-8" style={{ color: '#268DB0' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Business and service model innovation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Exploring new pathways to deliver impact
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: '#268DB0' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Cross-industry insight transfer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Applying ideas from other sectors
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: '#268DB0' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 text-center">
                Future capability building
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                Strengthening your organisation's ability to innovate, collaborate, and adapt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Clary Castrission */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image-81.jpeg"
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
              "Our work with scientific research organisations such as CSIRO, government agencies, and emerging technology leaders shows how diverse networks and structured collaboration transform innovation. By broadening thinking and applying insights across disciplines, teams accelerate breakthrough ideas and future-focused outcomes."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Clary Castrission OAM</span><br />
              CEO
            </p>
          </div>
        </div>
      </section>

      {/* Ideas to Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Ideas to Impact
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Open Innovation works because it widens your perspective, sharpens decision-making, and speeds up the journey from concept to action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#268DB0' }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Breaks internal blind spots
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  External experts and AI expand thinking, challenge assumptions, and open new opportunity spaces.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#268DB0' }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Accelerates clarity and validation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Move from concept → clarity → action quickly and confidently.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#268DB0' }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Strengthens decision-making
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Human expertise combined with AI-enabled insight leads to deeper understanding and more robust strategic choices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#268DB0' }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
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

      {/* Testimonial 2 */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-foreground/90 italic mb-6 text-center">
              "So often it's hard to get a team to think sufficiently "outside the box" to come to new ideas. The Open Innovation workshop was outstanding because Waterfield collected an intelligent and interesting group of people, from a wide array of backgrounds, to come up with truly new ideas.
              <br /><br />
              The process itself was easy to follow, and the business got a lot of value out of some of the ideas generated. Thank you Waterfield!"
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground italic">
              A clear, collaborative framework that delivers impact at speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#268DB0' }}>
                  1
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Engage & Align
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Clarify priorities, identify blind spots, and design your customised innovation network.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#268DB0' }}>
                  2
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Connect & Expand
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Access Waterfield's trusted ecosystem of experts, partners, field leaders, and AI-enhanced insights to unlock diverse perspectives.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#268DB0' }}>
                  3
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Shape & Validate
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Test and refine opportunities through agile sprints — reducing risk, strengthening choices, and accelerating decisions.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#268DB0' }}>
                  4
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Capture Value & Build Capability
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Launch practical solutions and embed open-innovation methods so your team continues innovating long after the engagement ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Waterfield */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Why Waterfield
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              We accelerate innovation by bringing the right people, insights, and structure together — fast and with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Curated Expertise"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(44%) sepia(45%) saturate(629%) hue-rotate(170deg) brightness(91%) contrast(89%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Curated Expertise
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We help you assemble a network of experts, partners, and innovators tailored to your goals. You get the perspectives you can't access internally — without the noise.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Breakthrough Thinking"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(44%) sepia(45%) saturate(629%) hue-rotate(170deg) brightness(91%) contrast(89%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Breakthrough Thinking
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We challenge assumptions and reveal opportunities hidden by internal blind spots, helping you see new value, new models, and new pathways for growth.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Human + AI Intelligence"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'invert(44%) sepia(45%) saturate(629%) hue-rotate(170deg) brightness(91%) contrast(89%)' }}
              />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Human + AI Intelligence
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We combine decades of strategic expertise with AI-driven insight to expand possibilities, sharpen decisions, and accelerate clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Into Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#268DB0' }}>
            Innovation Into Impact
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Let's shape what's next.
            </p>
            <p className="text-muted-foreground mt-4">
              Broaden your perspective, unlock new opportunities, and accelerate innovation. Waterfield helps your team move from ideas to impact — with clarity, alignment, and speed.
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

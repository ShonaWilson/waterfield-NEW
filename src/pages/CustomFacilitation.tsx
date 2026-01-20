import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Lightbulb, Users, Target } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CustomFacilitation = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Custom Facilitation";
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
            src="/service-4.jpeg"
            alt="Custom Facilitation"
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
              src="/J_CF.png"
              alt="Custom Facilitation"
              className="h-20 md:h-26 lg:h-32 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Unite diverse stakeholders to turn complexity into clear, aligned action
          </p>
        </div>
      </section>

      {/* Shape Agreed Direction */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#9E5790' }}>
              Shape agreed direction
            </h2>
            <p className="font-heading font-medium text-sm md:text-base text-muted-foreground italic mt-2">
              We help organisations move from competing views to a clear, shared path forward.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Some challenges are too complex for a single expert, team, or leader to solve alone. Whether you're aligning a sector around a shared direction, shaping national policy, or building strategic clarity across an organisation, progress depends on collaboration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Waterfield's Custom Facilitation brings together stakeholders across industries, sectors, and levels of influence to address critical issues and align around clear, actionable outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with you to uncover the underlying objective and design a strategic facilitation process shaped around your context, priorities, and decision environment.
            </p>
          </div>
        </div>
      </section>

      {/* How We Add Value */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            How we add value
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              We design the framework that enables shared clarity, alignment, and confident action.
            </p>
            <p className="text-muted-foreground mb-4">
              Critical decisions often involve multiple parties and competing priorities. Without structure, even essential work can stall. Waterfield cuts through complexity and helps people align around shared outcomes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold mb-6" style={{ color: '#9E5790' }}>
              We enable clarity, commitment, and collective action by:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Creating</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">strategic</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">clarity</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Aligning</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">stakeholders</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">on outcomes</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Enabling</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">confident</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">decisions</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Building</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">momentum in</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">large-scale work</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed pt-8">
              We bring structure to important conversations so teams can focus on making decisions and moving forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            Our approach
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-heading font-medium text-sm md:text-base text-muted-foreground italic mb-4">
              We shape the process, facilitate the dialogue, and ensure clear outcomes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our work is grounded in deep listening, thoughtful design, and facilitation experience built over three decades. Every engagement is tailored to your context and decision environment, with a clear focus on progress and delivery.
            </p>

            <p className="font-heading text-xl font-semibold mb-6" style={{ color: '#9E5790' }}>
              Our approach includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Target className="w-8 h-8" style={{ color: '#9E5790' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Deep listening and context analysis
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Understanding objectives, system dynamics, and constraints
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-8 h-8" style={{ color: '#9E5790' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Strategic workshop design
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shaping a process that enables productive dialogue and decision flow
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8" style={{ color: '#9E5790' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Expert facilitation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building alignment, surfacing insight, and guiding quality decision-making
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Target className="w-8 h-8" style={{ color: '#9E5790' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Action clarity
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Documenting agreements, responsibilities, and next steps to support implementation
                </p>
              </div>
            </div>

            <p className="font-heading text-xl font-semibold" style={{ color: '#9E5790' }}>
              Clarity saves time. Alignment builds confidence. Together, they drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Who We've Worked With */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            Who we've worked with
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Waterfield partners with organisations operating in complex environments where progress requires alignment, clarity, and trusted collaboration.
            </p>

            <p className="font-heading text-xl font-semibold mb-4" style={{ color: '#9E5790' }}>
              We have supported:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left mb-8 max-w-2xl mx-auto">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">State and Federal Government agencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Not-for-profits and social enterprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Health and aged care providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Industry bodies and alliances</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Sporting institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Research and innovation networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Global organisations aligning business units for strategic direction</span>
                </li>
              </ul>
            </div>

            <p className="font-heading text-xl font-semibold mb-4" style={{ color: '#9E5790' }}>
              Our facilitation has driven progress on:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left mb-8 max-w-2xl mx-auto">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Future directions for national research collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Responsible AI adoption frameworks for industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Inclusive publishing transformation for the vision-impaired</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Urban precinct strategies with state government and planning authorities</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">Regional economic transition following industry disruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">National social impact programs involving diverse stakeholder groups</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/clients/barangaroo.png.avif"
                  alt="Barangaroo Delivery Authority"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/clients/RGA.png.avif"
                  alt="Rice Growers Association of Australia"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-24 flex items-center justify-center">
                <img
                  src="/clients/VCCC.png.avif"
                  alt="Comprehensive Cancer Research Centre"
                  className="max-h-24 w-auto object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/clients/ausmasa.png"
                  alt="AUSMASA"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/clients/APA.png.avif"
                  alt="Australian Publishers Association"
                  className="max-h-12 w-auto object-contain"
                />
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
            src="/image-81.jpeg"
            alt=""
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
              "Waterfield have been critical in the success of the Marrakesh Treaty Forum. Waterfield's Custom Facilitation and methodology was the perfect means of bringing together disparate organisations and uniting them under one clear aim- to increase accessible content for the print disabled."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Sarah Runcie</span><br />
              Strategy and Policy, Australian Publishers Association
            </p>
          </div>
        </div>
      </section>

      {/* Delivering Impact */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            Delivering impact
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              Custom facilitation transforms complex challenges, competing perspectives, and multiple decision-makers into clarity, alignment, and coordinated action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Unified direction across stakeholders"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(45%) saturate(629%) hue-rotate(258deg) brightness(91%) contrast(89%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Unified direction across stakeholders
              </h3>
              <p className="text-muted-foreground text-sm">
                We help define your desired future state and bring the right people together to make aligned, outcome-driven decisions.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Clear priorities with agreed next steps"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(45%) saturate(629%) hue-rotate(258deg) brightness(91%) contrast(89%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Clear priorities with agreed next steps
              </h3>
              <p className="text-muted-foreground text-sm">
                Trusted by leaders operating in complex, multi-stakeholder environments, we provide the structure needed to co-create aligned solutions.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Shared ownership that drives committed action"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(45%) saturate(629%) hue-rotate(258deg) brightness(91%) contrast(89%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Shared ownership that drives committed action
              </h3>
              <p className="text-muted-foreground text-sm">
                We provide the expertise needed to deliver meaningful results and sustained collaboration.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#9E5790' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8B4D7F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#9E5790';
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

export default CustomFacilitation;

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
            Unite diverse stakeholders to turn complexity into clear, aligned action.
          </p>
        </div>
      </section>

      {/* Shape agreed direction */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#9E5790' }}>
              Shape agreed direction
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/workshop.png"
                alt="Shape agreed direction"
                className="w-full h-auto rounded-full aspect-square object-cover object-center"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                We help organisations move from competing views to a clear, shared path forward.
              </p>
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
        </div>
      </section>

      {/* How we add value */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            How we add value
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              We design the framework that enables shared clarity, alignment, and confident action.
            </p>
            <p className="text-muted-foreground">
              Critical decisions often involve multiple parties and competing priorities. Without structure, even essential work can stall. Waterfield cuts through complexity and helps people align around shared outcomes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold" style={{ color: '#9E5790' }}>
              We enable clarity, commitment, and collective action by:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 text-center flex items-center justify-center" style={{ backgroundColor: 'rgba(158, 87, 144, 0.20)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Creating strategic clarity on issues that matter
                </h3>
              </div>

              <div className="rounded-2xl p-8 text-center flex items-center justify-center" style={{ backgroundColor: 'rgba(158, 87, 144, 0.20)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Aligning stakeholders around shared outcomes
                </h3>
              </div>

              <div className="rounded-2xl p-8 text-center flex items-center justify-center" style={{ backgroundColor: 'rgba(158, 87, 144, 0.20)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Enabling confident decisions on complex challenges
                </h3>
              </div>

              <div className="rounded-2xl p-8 text-center flex items-center justify-center" style={{ backgroundColor: 'rgba(158, 87, 144, 0.20)' }}>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Building momentum in large-scale or multi-party work
                </h3>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-muted-foreground leading-relaxed">
              We bring structure to important conversations so teams can focus on making decisions and moving forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            Our approach
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              We shape the process, facilitate the dialogue, and ensure clear outcomes.
            </p>
            <p className="text-muted-foreground">
              Our work is grounded in deep listening, thoughtful design, and facilitation experience built over three decades. Every engagement is tailored to your context and decision environment, with a clear focus on progress and delivery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold" style={{ color: '#9E5790' }}>
              Our approach includes:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>

      {/* Who we've worked with */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            Who we've worked with
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Waterfield partners with organisations operating in complex environments where progress depends on alignment, clarity, and trusted collaboration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8 text-center">
                <p className="font-heading text-xl font-semibold mb-4" style={{ color: '#9E5790' }}>
                  Our work spans
                </p>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Government and public sector</span> — supporting State and Federal agencies on policy, planning, and cross-sector initiatives</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Industry bodies and alliances</span> — aligning diverse stakeholders around shared direction and outcomes</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Health, aged care, and social sector organisations</span> — navigating complexity where collaboration is critical</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Research and innovation networks</span> — shaping national and industry-wide collaboration strategies</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Global organisations</span> — aligning business units and partners across geographies</p>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-8 text-center">
                <p className="font-heading text-xl font-semibold mb-4" style={{ color: '#9E5790' }}>
                  Our work has helped deliver
                </p>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">National research and industry collaboration strategies</span> — shaping cross-sector partnerships and shared direction</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Responsible AI frameworks and governance models</span> — enabling ethical adoption and oversight</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Inclusive publishing transformation</span> — increasing accessibility for the vision-impaired</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Urban precinct and regional transition strategies</span> — aligning stakeholders around place-based outcomes</p>
                  <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Large-scale social impact programs</span> — engaging diverse stakeholder groups around shared goals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12">
            <div className="h-16 flex items-center justify-center">
              <img
                src="/RGA+Full+Logo+RGB_Blue+No+BG.png.webp"
                alt="Rice Growers Association of Australia"
                className="max-h-[55px] w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img
                src="/MASALogoDigital.png"
                alt="AUSMASA"
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img
                src="/Vic-State-Govt_Logo.png.avif"
                alt="Victorian State Government"
                className="max-h-[53px] w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img
                src="/case-studies/Green_Building_Council_of_Australia_logo.png.avif"
                alt="Green Building Council of Australia"
                className="max-h-[43px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/shutterstock_1636612660.jpg"
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
              "Waterfield were critical to the success of the Marrakesh Treaty Forum. Waterfield's Custom Facilitation and methodology was the perfect means of bringing together disparate organisations and uniting them under one clear aim — to increase accessible content for the print disabled."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Sarah Runcie</span><br />
              Strategy and Policy, Australian Publishers Association
            </p>
          </div>
        </div>
      </section>

      {/* Delivering impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#9E5790' }}>
            Delivering impact
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Custom Facilitation transforms complex challenges, competing perspectives, and multiple decision-makers into clarity, alignment, and coordinated action.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We help define your desired future state and bring the right people together to make aligned, outcome-driven decisions. Trusted by organisations operating in complex, multi-stakeholder environments, we provide the structure and facilitation needed to co-create aligned solutions and deliver meaningful results.
            </p>
            <p className="font-heading text-xl font-semibold" style={{ color: '#9E5790' }}>
              What becomes possible — step by step:
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
              style={{ backgroundColor: '#CB4547' }}
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Unified direction across stakeholders
              </p>
            </div>
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
              style={{ backgroundColor: '#1e9aa7' }}
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Clear priorities with agreed next steps
              </p>
            </div>
            <div
              className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px]"
              style={{ backgroundColor: '#9E5790' }}
            >
              <p className="font-heading font-medium text-white text-sm md:text-base leading-[0.95]">
                Shared ownership that drives action
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#9E5790' }}>
              Getting started
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Custom Facilitation begins with a conversation—understanding your context, stakeholders, and what success looks like.
            </p>
            <p className="text-muted-foreground mb-8">
              We then design a tailored facilitation process that fits your decision environment, bringing the right people together to move forward with clarity and confidence.
            </p>
          </div>

          <div className="flex justify-center">
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

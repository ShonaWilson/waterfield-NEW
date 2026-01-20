import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Handshake, Users } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SuccessAlliance = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | SuccessAlliance";
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
            src="/service-2.jpg"
            alt="SuccessAlliance"
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
              src="/SuccessAlliance_logoDual.png"
              alt="SuccessAlliance"
              className="h-20 md:h-26 lg:h-32 w-auto object-contain"
            />
          </div>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Build strategic partnerships for shared value & competitive advantage.
          </p>
        </div>
      </section>

      {/* Alliances for Unique Value */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#EBCA52' }}>
              Redefine customer value
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/143020.png"
                alt="Redefine customer value"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                Collaborate beyond your organisation to stay competitive and deliver greater value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Markets are evolving faster than ever — and so are your customers. They now expect seamless, end-to-end solutions that make their lives easier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Operating inwardly and independently is no longer enough—organisations that fail to connect beyond their ecosystem risk being left behind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Competition is intensifying as new entrants redefine industries through innovation and cross-sector thinking, what we call 'lane jumpers', like UberEats transforming food delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The new winners are those who collaborate across the value chain to create distinctive, customer-centred value.
              </p>
              <p className="font-heading font-semibold text-lg text-muted-foreground pt-4">
                Success Alliance helps you build competitive advantage through strategic collaboration with key suppliers and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#EBCA52' }}>
            Competitive advantage
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Partnering to build a competitive advantage by creating attractive and differentiated offers.
            </p>
            <p className="text-muted-foreground">
              A Success Alliance creates new competitive advantages by connecting your organisation with key suppliers, customers, and partners across the value chain.
            </p>
            <p className="text-muted-foreground mt-4">
              Together, you build stronger, more responsive relationships that uncover new opportunities and set your organisation apart in the marketplace.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="/SA-valuechainL.png.avif"
              alt="Value chain alliances"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading text-xl font-semibold" style={{ color: '#EBCA52' }}>
              The benefits of a Success Alliance with your key suppliers and customers include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" style={{ color: '#EBCA52' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Supplier alliances
              </h3>
              <div className="space-y-4 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Approach:</span> Collaborate with innovative suppliers to co-create new value for your customers.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Result:</span> Build trusted relationships, improve information flow, and reduce costs through smarter supply connections.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Handshake className="w-8 h-8" style={{ color: '#EBCA52' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Customer alliances
              </h3>
              <div className="space-y-4 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Approach:</span> Partner directly with customers to gain insights and become their first point of call for complex challenges.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Result:</span> Strengthen relationships and stay ahead of the market by anticipating changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Alignment */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#EBCA52' }}>
            Empowering alignment
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed mb-4">
              We help you gain overall alignment across diverse groups to achieve shared outcomes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Many of our clients find it difficult to initiate useful discussions with their external parties, where each group is equally invested, knows the requirements and needs to engage on a level playing field.
            </p>

            <p className="font-heading text-xl font-semibold mb-6" style={{ color: '#EBCA52' }}>
              We design the right framework for your alliance to enable;
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Clarity and</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">alignment</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">for all</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Insights to</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">create shared</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">outcomes</p>
              </div>
              <div
                className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center w-[105px] md:w-[130px] mx-auto bg-foreground"
              >
                <p className="font-heading font-medium text-white text-sm md:text-base">Visibility for</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">agreed</p>
                <p className="font-heading font-medium text-white text-sm md:text-base">actions</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed pt-12">
              Waterfield works globally with organisations across Australia, Asia, Europe, and the USA to support successful alliances across diverse industries.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 mb-8">
              We take great pride in unlocking new value across partnerships, creating win-win outcomes that deliver positive uplift and meaningful growth for our clients.
            </p>

            <p className="font-heading text-xl font-semibold" style={{ color: '#EBCA52' }}>
              Here's a few clients that have experienced the benefits of Success Alliance:
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/clients/349953_preview.png.avif"
                  alt="Client logo"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/case-studies/ikn3kboqur8h2mlber3d.jpg.avif"
                  alt="Client logo"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-24 flex items-center justify-center">
                <img
                  src="/clients/HZFPkKk4lgdSIcP4JI8RL2F58OY1724132271692_200x200.png"
                  alt="Client logo"
                  className="max-h-24 w-auto object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src="/clients/inclusivehousinglogonew.jpg.avif"
                  alt="Client logo"
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
              "Diona have utilised Waterfield's Success Alliance across the business for the last 5 years, achieving great success with one of our major client's QUU. We used the Success Alliance process to help us understand our clients' needs better and focus our efforts on building a stronger partnership. In the first 12 months we had achieved all our milestones and significantly improved our relationship with QUU."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">John O'Connor</span><br />
              Executive General Manager & Director, Diona
            </p>
          </div>
        </div>
      </section>

      {/* Capture More Value */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#EBCA52' }}>
            Capture more value
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground mb-4">
              Customers will move to the product or service that best meets their needs.
            </p>
            <p className="text-muted-foreground mb-4">
              Engaging your key partners in a Success Alliance, quickly uncovers a deep understanding of what the customer really wants to achieve, then works to define and capture this value.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground">
              This leads to;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/more.png"
                  alt="More profitable offerings"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                More profitable offerings
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create offerings that deliver higher margins through collaboration
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/Creatign revenue.png"
                  alt="New revenue growth"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                New revenue growth
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creating new top-line revenue growth opportunities
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/opportunities.png"
                  alt="New market spaces"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                New market spaces
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Opportunities to expand into new market segments
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: '#EBCA52' }}>
              Alliance in action
            </h3>
            <p className="text-muted-foreground mb-4">
              For Diona, the objective was to better understand a major customer's requirements to deliver higher service and greater value.
            </p>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Approach:</span> By developing a successful alliance, they uncovered the complex systems at play, gained deeper insight into the end customer's needs, and collaboratively integrated solutions for a win–win result.
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Result:</span> This created a trusted partnership that enhanced customer value and, in turn, strengthened Diona's ability to capture more value.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#EBCA52' }}>
            How it works
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-heading font-semibold text-lg text-foreground">
              Success Alliance provides a clear, practical way to design, deliver, and grow effective partnerships across your value chain.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground mb-4">
              Success Alliance allows you to get a far broader perspective on what the actual needs are in the market and how to connect your partner network to be first to market.
            </p>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              We help you achieve this through 3 steps;
            </p>
            <div className="flex justify-center gap-8 text-muted-foreground">
              <span>1. Build the alliance</span>
              <span>2. Implement and deliver</span>
              <span>3. Continue to innovate</span>
            </div>
          </div>

          {/* Step 1 */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: '#EBCA52' }}>
              1. Build the alliance
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Create shared understanding, alignment, and commitment across partners.
            </p>
            <p className="text-muted-foreground mb-4">
              To build successful partnerships, all parties need a shared understanding of the big picture.
            </p>
            <p className="text-muted-foreground mb-4">
              We bring key stakeholders together in a fast-paced, interactive workshop designed to quickly create shared visibility and clarity. Prior to the session, we take time to understand your context and design a structured facilitation process tailored to your alliance.
            </p>
            <p className="text-muted-foreground mb-4">
              This approach surfaces opportunities, clarifies focus areas, and identifies where collaboration will create the greatest impact.
            </p>
            <p className="text-muted-foreground">
              These insights are captured in a clear, one-page Success Alliance Map, aligning everyone around a common goal and an integrated approach — ready for implementation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: '#EBCA52' }}>
              2. Implement and deliver
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Turn shared intent into visible progress and measurable outcomes.
            </p>
            <p className="text-muted-foreground mb-4">
              Delivery is supported through a shared online platform that enables all parties to track and monitor progress in real time.
            </p>
            <p className="text-muted-foreground mb-4">
              The Success Alliance Map articulates:
            </p>
            <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
              <li>Shared outcomes for the alliance over the next three years</li>
              <li>Investments each party will make to realise those outcomes</li>
              <li>Key milestones for the next 12 months</li>
              <li>Initial 90-day deliverables and progress reporting</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To keep the alliance dynamic and effective, we support an adaptive implementation model that ensures the Map remains grounded in reality and relevant to all parties.
            </p>
            <p className="text-muted-foreground">
              At the end of the first 90 days, key stakeholders come together to review progress, share learnings, and refine the approach — enabling course correction and sustained momentum.
            </p>
          </div>

          {/* Step 3 */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: '#EBCA52' }}>
              3. Continue to innovate
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Extend value and innovation across your broader ecosystem.
            </p>
            <p className="text-muted-foreground mb-4">
              A successful alliance creates the confidence and capability to go further.
            </p>
            <p className="text-muted-foreground mb-4">
              As value is realised, we help organisations increase alliance maturity and expand collaboration across the full value chain — from supplier partnerships through to customer alliances.
            </p>
            <p className="text-muted-foreground mb-4">
              By integrating these relationships, organisations become more connected, more effective, and better positioned to deliver greater value to end customers.
            </p>
            <p className="text-muted-foreground">
              Success Alliance supports ongoing growth by strengthening partnerships and identifying new opportunities across the broader ecosystem. Through facilitated joint conversations, new and more cost-effective options emerge — improving efficiency, productivity, and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: '#EBCA52' }}>
            Getting started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Clarify the opportunity"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(45%) saturate(600%) hue-rotate(12deg) brightness(92%) contrast(88%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Clarify the opportunity
              </h3>
              <p className="text-muted-foreground text-sm">
                We start with a conversation to understand your objectives and identify the partners across your ecosystem who can create the greatest value.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Design & facilitate the alliance"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(40%) saturate(700%) hue-rotate(10deg) brightness(95%) contrast(90%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Design & facilitate the alliance
              </h3>
              <p className="text-muted-foreground text-sm">
                We bring these partners together in a structured, collaborative workshop to build a shared Success Alliance and agree on how value will be delivered.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Deliver exceptional value"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(45%) saturate(600%) hue-rotate(12deg) brightness(92%) contrast(88%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Deliver exceptional value
              </h3>
              <p className="text-muted-foreground text-sm">
                With clear objectives and shared commitment, partners move into delivery — implementing innovative offers that create meaningful value for customers and all parties involved.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#EBCA52' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D4B847';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#EBCA52';
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

export default SuccessAlliance;

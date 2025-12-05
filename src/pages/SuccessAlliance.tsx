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
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
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
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground">
            Engage your partners for added value & shared success
          </h1>
        </div>
      </section>

      {/* Alliances for Unique Value */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#EBCA52' }}>
              Alliances for unique value
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/143020.png"
                alt="Alliances for unique value"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                To remain competitive you need to think and engage beyond your own organisation to create exceptional end customer value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Business environments are evolving rapidly and customers are demanding more sophisticated and complete solutions to meet their needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The problem is by simply relying on the same way of doing business, independent from your broader ecosystem, your organisation will cease to be relevant or even exist.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The new winners in this fast evolving landscape are organisations that collaborate with other companies up and down the value chain to create compelling value propositions that best meet customer needs.
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
              By collaborating with key partners, you can create far greater value for your customers.
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
            <p className="text-muted-foreground mb-8">
              A SuccessAlliance will create new competitive advantages for your organisation, across key partnerships with suppliers, customers and whole of value chain alliances.
            </p>
            <p className="font-heading text-xl font-semibold" style={{ color: '#EBCA52' }}>
              The benefits of a SuccessAlliance with your key suppliers and key customers include;
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
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Get access to innovation partners to create more value for your customers
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Build relationships with key suppliers who will prioritise your requirements
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Reduce the cost of supply with better information flows
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Handshake className="w-8 h-8" style={{ color: '#EBCA52' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Customer alliances
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Gain vital information on how to address strategic issues for customers
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Create more runway to adjust to changing customer's needs
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Become the first point of contact in helping solve your customer's complex issues
                </li>
              </ul>
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

            <p className="text-muted-foreground leading-relaxed pt-12 mb-8">
              We guide all parties to collectively state and move towards the big picture, empowering alliances to generate significant and sustainable business value.
            </p>

            <p className="font-heading text-xl font-semibold" style={{ color: '#EBCA52' }}>
              Here's a few clients that have experienced the benefits of SuccessAlliance:
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
              "Diona have utilised Waterfield's SuccessAlliance across the business for the last 5 years, achieving great success with one of our major client's QUU. We used the SuccessAlliance process to help us understand our clients' needs better and focus our efforts on building a stronger partnership. In the first 12 months we had achieved all our milestones and significantly improved our relationship with QUU."
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
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Successful alliances deliver improved customer experience to generate high returns.
            </p>
            <p className="text-muted-foreground">
              Engaging your key partners in a SuccessAlliance quickly uncovers what the customer really wants.
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
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#EBCA52' }}>
            How it works
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground">
              SuccessAlliance allows you to get a far broader perspective on what the actual needs are in the market and how to connect your partner network to be first to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Build your alliance"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(31%) saturate(1213%) hue-rotate(7deg) brightness(99%) contrast(93%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build your alliance
              </h3>
              <p className="text-muted-foreground text-sm">
                We bring together all the key parties into the same space for a fast paced, interactive workshop that quickly uncovers shared visibility and clarity.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Implement & monitor"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(31%) saturate(1213%) hue-rotate(7deg) brightness(99%) contrast(93%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Implement & monitor
              </h3>
              <p className="text-muted-foreground text-sm">
                Implement your SuccessAlliance Map and monitor progress to ensure results are being achieved across all parties.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Continue to innovate"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(31%) saturate(1213%) hue-rotate(7deg) brightness(99%) contrast(93%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Continue to innovate
              </h3>
              <p className="text-muted-foreground text-sm">
                Keep innovating together for increased value and sustained competitive advantage in the marketplace.
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

import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const StrategyConnect = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | StrategyConnect";
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
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-8">
            Create & execute a clear Strategy Map for focused outcomes
          </h1>
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
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#F8983C' }}>
              Thrive today & tomorrow
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/TodayTom_Graph.png.avif"
                alt="Thrive today & tomorrow"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                Your organisation has a dual responsibility: perform today and build capacity for tomorrow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every organisation acknowledges that developing a strategy and preparing to be 'future ready' is critical. However, many organisations struggle to effectively develop and execute their strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Without investing time to create new capabilities, an organisation will not remain current and competitive.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                StrategyConnect makes clear future focusing and implementation a simple and achievable process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy for Results */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Strategy for results
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Design and implement a focused strategy for the future growth of your organisation.
            </p>
            <p className="text-muted-foreground">
              StrategyConnect provides an outcomes driven approach for developing, managing and executing strategy in a fast changing world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8" style={{ color: '#F8983C' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Develop your strategy
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Anticipate the challenges and opportunities that lie ahead
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Set a clear direction and alignment for success in the next 3 years
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Develop a simple and easy to understand one page Strategy Map
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Agree on a focused set of key action areas for the next 12 months
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8" style={{ color: '#F8983C' }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Execute your strategy
              </h3>
              <ul className="space-y-4">
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Achieve your objectives through a structured framework
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Create engagement and buy in from all groups within your organisation
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Drive and track implementation real time through a cloud application
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed">
                  Build an adaptive organisation able to course correct in times of change
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ backgroundColor: '#F8983C' }}>
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Designing a strategy for future growth is hard. We guide you through a clear process that engages your team, making it simple and achievable.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Clear Pathway Forward */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#F8983C' }}>
              Clear pathway forward
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/20180731_100517.jpeg.avif"
                alt="Clear pathway forward"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                We facilitate the strategic decisions that enable your organisation to thrive in the future.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To grow beyond today's limits, organisations must invest in new capabilities. Think Netflix—while Blockbuster hesitated, Netflix moved early and gained the edge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Choosing the right strategy and where to invest can feel overwhelming. With endless options, how do you focus on what will truly make you future-ready?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We help cut through the complexity—bringing the right people together in a proven structure to inform smarter, more confident decisions.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="font-heading text-xl font-semibold mb-8" style={{ color: '#F8983C' }}>
              Here are a few clients we work with that have strategically designed their future, and created new opportunities using StrategyConnect:
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

      {/* Testimonial */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
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
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic mb-6">
              "StrategyConnect enabled us to get our board and senior staff to focus, very clearly, on key strategic issues in both a one and three year timeframe, and also to articulate to staff and the CEO what our priorities are over that period.<br /><br />It enables the board to have great clarity on what it wants the executive team to implement, and the supporting mechanism behind it, quarterly reviews, progress reports and subsequent communication mechanism – is very useful and reinforces the focus."
            </blockquote>
            <p className="text-primary-foreground/80 text-sm">
              <span className="font-semibold">Peter Carrigy-Ryan</span><br />
              CEO, Commonwealth Superannuation Corporation
            </p>
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
              Connecting clear strategic direction with execution excellence for effective results.
            </p>
            <p className="text-muted-foreground mb-3">
              StrategyConnect is a proven method to develop your organisation's strategy with a simple execution process to effectively implement these objectives.
            </p>
            <p className="text-muted-foreground">
              It is also designed to build capacity and engage your organisation on the journey to success.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <img
                src="/Screen Shot 2022-10-21 at 11_16_52 pm.png.avif"
                alt="StrategyConnect process"
                className="w-full h-auto object-contain rounded-2xl"
              />
              {/* Text overlays */}
              <div className="absolute inset-0 flex items-end px-8 pb-8">
                <div className="w-1/2 pr-4">
                  <p className="text-white text-xs md:text-base font-heading font-medium text-center">
                    Collectively develop your strategy in a highly interactive, one day workshop, ready to action.
                  </p>
                </div>
                <div className="w-1/2 pl-4">
                  <p className="text-white text-xs md:text-base font-heading font-medium text-center">
                    Embed the disciplines to implement by engaging staff and building strategic capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Develop Your Strategy */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Develop your strategy
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Determine the right destination for your organisation, clear on future outcomes.
            </p>
            <p className="text-muted-foreground mb-3">
              Strategy development is about choosing from all the options available to determine which is the right destination, the shared vision for the next 3 to 5 years.
            </p>
            <p className="font-heading text-xl font-semibold mb-6" style={{ color: '#F8983C' }}>
              StrategyConnect guides you through these 3 steps to efficiently make this happen;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/Collective_intelligence.png"
                  alt="Collective intelligence"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Collective intelligence
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Developing strategy in a fast changing and complex world is difficult. The more brain power and diverse views, the better informed the process will be.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The StrategyConnect process views the organisation and external environment as a whole in a powerful and highly interactive workshop that harnesses the collective knowledge of the group.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Once people see the whole picture, the strategy for the organisation becomes clear.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/Strategy_on_page.png"
                  alt="Strategy on a page"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Strategy on a page
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The Strategy Map is captured on one page that clearly shows:
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                What success looks like in the future
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                The investments needed to close the gaps
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-3">
                The key milestones in the next 12 months
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Strategy Map becomes a simple and easy to understand communications tool that can be used to communicate deeply into the organisation.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/Strategy_in_a_day.png"
                  alt="Strategy in a day"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Strategy in a day
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The strategy development workshop is rapid and highly effective. Endless PowerPoint presentations are replaced with a fast paced interactive workshop where everyone is engaged and contributing.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This builds ownership and understanding of the decisions being made. StrategyConnect develops a concise framework in one day that gives you a clear Strategy Map that your organisation can act on today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Execute Your Strategy */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Execute your strategy
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              Bring your strategy to life through effective action, realising these outcomes.
            </p>
            <p className="text-muted-foreground mb-3">
              With your organisation's shared destination articulated, the next step is implementation. This involves turning your Strategy Map into a reality and embedding strategic principles into your organisation.
            </p>
            <p className="font-heading text-xl font-semibold mb-6" style={{ color: '#F8983C' }}>
              StrategyConnect delivers and imparts a highly effective execution process that is;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/HighlyVisible.png"
                  alt="Highly visible"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Highly visible
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                StrategyConnect online is an application where the Strategy Map and the execution initiatives are accessible anywhere, anytime providing access to updates.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Milestone owners and contributors can blog and add hyperlinks to relevant information creating a rich repository of information for the strategy and execution.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At the 90 Day review session, reports can be generated with simple graphical representation of progress made and the confidence levels of achieving the set targets.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/Adaptive.png"
                  alt="Adaptive"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Adaptive
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                A review is held at the end of every 90 Day period. The strategy is reviewed and recalibrated based on:
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                • What actually happened
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                • Internal organisation changes
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-3">
                • External market changes
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                This allows the strategy implementation process to remain grounded in reality.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fast growing companies have adopted the practice of action learning internationally to remain adaptive and responsive to their market place.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/EasytoUse.png"
                  alt="Easy to use"
                  className="w-[6.4rem] h-[6.4rem] object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Easy to use
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                People are busy. Therefore, a simple process that involves a minimal level of effort has been designed to monitor and adapt strategy execution. The process is intuitive and can be updated in a matter of minutes.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Meetings can be held online and progress reports viewed.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The StrategyConnect online system is a cloud based application and ensures easy monitoring and visual tracking of your organisation's Strategy Map. It is a user friendly and intuitive tool, providing interactive and secure access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Momentum */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#F8983C' }}>
              Create momentum
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-64 md:w-[32%] flex-shrink-0">
              <img
                src="/IMG_0807_JPG.jpg.avif"
                alt="Create momentum"
                className="w-full h-auto rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-[68%] space-y-3">
              <p className="font-heading font-semibold text-lg text-foreground">
                Build a strategically capable organisation, clear & engaged on what needs to be achieved.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By connecting the development and execution of your strategy with the people within your organisation, strategy becomes an integral competency of the organisation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This formalised process achieves more than just engaging team members. It gains insight, builds internal responsibility and creates momentum. Without these connections, strategy remains an event.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our continual research on how best to integrate this has resulted in two inter-dependent cycles. This provides a seamless connection between the development and execution of your strategy, with the Strategy Map at its core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights and Learnings */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#F8983C' }}>
              Insights and learnings
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl">
              <img
                src="/cycles.png"
                alt="Inter-dependent cycles"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text below image */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl flex flex-row gap-8 px-8">
              <div className="flex-1">
                <p className="text-foreground text-xs md:text-base font-heading font-medium text-center">
                  The development cycle produces the insights to inform the output known as the Strategy Map.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-foreground text-xs md:text-base font-heading font-medium text-center">
                  The execution cycle creates the learnings that allows the Strategy Map to adapt to the changing environment.
                </p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto mt-8">
            <p className="font-heading text-xl font-semibold text-center mb-8" style={{ color: '#F8983C' }}>
              Watch the video for an overview of how the strategy cycles interact together to help shape your organisation's future.
            </p>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                src="https://www.youtube.com/embed/GXq5uUsA4tc"
                title="StrategyConnect Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Success in 3 Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: '#F8983C' }}>
            Strategy success in 3 steps
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground mb-4">
              We help guide you through 3 clear steps to create and bring your strategy to life.
            </p>
            <p className="text-muted-foreground mb-3">
              Our proven process helps you bring the talented people around you to collaborate together to make a shared Strategy Map for the future of your organisation.
            </p>
            <p className="font-heading text-xl font-semibold" style={{ color: '#F8983C' }}>
              We will help you;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-1.png"
                alt="Create a clear Strategy Map"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(1426%) hue-rotate(360deg) brightness(102%) contrast(96%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Create a clear Strategy Map
              </h3>
              <p className="text-muted-foreground text-sm">
                Use your teams collective knowledge to develop a simple and easy to understand Strategy Map that can be used to communicate deeply into the organisation.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-2.png"
                alt="Execute the strategy"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(1426%) hue-rotate(360deg) brightness(102%) contrast(96%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Execute the strategy
              </h3>
              <p className="text-muted-foreground text-sm">
                Achieve your objectives through a structured framework and drive and track implementation real time through a cloud application
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <img
                src="/sa-icon-3.png"
                alt="Build strategic capability"
                className="w-24 h-24 object-contain mx-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(1426%) hue-rotate(360deg) brightness(102%) contrast(96%)' }}
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Build strategic capability
              </h3>
              <p className="text-muted-foreground text-sm">
                Make strategy an integral competency of the organisation and build an adaptive team able to course correct in times of change.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
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

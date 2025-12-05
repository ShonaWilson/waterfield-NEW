import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Lightbulb, Users, FileText, MessageSquare, ClipboardCheck, UserCheck, Target, TrendingUp } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    image: "/process/Objective.png",
    title: "Your objectives",
    description: "Our value creation process starts and finishes with your objectives; designing and delivering towards the desired outcomes.",
    color: "bg-primary",
  },
  {
    image: "/process/Brief.png",
    title: "Brief",
    description: "We engage in face to face meetings with your key stakeholders to best understand the context and overall requirements, listening to the various interconnecting parts.",
    color: "bg-amber-500",
  },
  {
    image: "/process/Research.png",
    title: "Research",
    description: "A key component includes desk research, covering briefing documents to determine the scope, as well as external sector analysis, thought leadership articles and insights.",
    color: "bg-orange-500",
  },
  {
    image: "/process/Design.png",
    title: "Design",
    description: "Combining both the research and our knowledge on how to harness the collective intelligence of the group, we design a process to achieve your objectives.",
    color: "bg-red-500",
  },
  {
    image: "/process/Facilitate.png",
    title: "Facilitate",
    description: "We facilitate highly interactive sessions that create a level playing field where every person is informed and comfortable to contribute.",
    color: "bg-purple-500",
  },
  {
    image: "/process/Report.png",
    title: "Report",
    description: "Real time reporting provides immediate and visible feedback of information and decisions during the session which enables the group to build high quality outcomes with confidence.",
    color: "bg-blue-500",
  },
  {
    image: "/process/Debrief.png",
    title: "Debrief",
    description: "We debrief post the session to ensure the objectives were met and provide observations of outputs and suggestions on how to improve future collaborative sessions. The debrief is to ensure we deliver the value from the original objectives set.",
    color: "bg-green-500",
  },
  {
    image: "/process/Build.png",
    title: "Build capacity",
    description: "We work with our clients to build their capacity to harness the collective capability of their people. We achieve this by training, shadow consulting and mentoring internal facilitators.",
    color: "bg-indigo-500",
  },
];

const Process = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | Process";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/process-hero.webp"
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.95))'
            }}
          />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Engagement process
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We work closely with you to Design, Facilitate & Enable the process right for your organisation.
          </p>
        </div>
      </section>

      {/* Three Stages of Delivery */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary text-center mb-4">
            3 stages of delivery
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed mb-6">
              We engage with you across 3 distinct phases to consistently deliver value for outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our experience in facilitating thousands of groups across many sectors globally, has led us to continue to develop and innovate how we successfully engage with clients to consistently deliver value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            <div className="flex flex-col">
              <p className="text-center font-heading text-xl font-semibold text-primary mb-8">Design</p>
              <div className="bg-secondary rounded-2xl p-8 flex flex-col flex-1">
                <img src="/process/preffered.png" alt="Design" className="w-36 h-36 mx-auto mb-3 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(512%) hue-rotate(137deg) brightness(91%) contrast(88%)' }} />
                <div className="text-center flex-1 flex flex-col">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Preferred state</h4>
                  <p className="text-muted-foreground text-sm">
                    Clients describe our contribution as bringing elegant simplicity to complex issues.
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    We achieve this by applying logical frameworks to conversations that engage the group to understand and process complex issues.
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    Our role is in co-designing a growth journey across your organisation and broader ecosystem, taking people from current state to a joint preferred state.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-center font-heading text-xl font-semibold mb-8" style={{ color: "#EBCA52" }}>Facilitate</p>
              <div className="bg-secondary rounded-2xl p-8 flex flex-col flex-1">
                <img src="/process/collective.png" alt="Facilitate" className="w-36 h-36 mx-auto mb-3 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(33%) saturate(838%) hue-rotate(2deg) brightness(99%) contrast(92%)' }} />
                <div className="text-center flex-1 flex flex-col">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Collective intelligence</h4>
                  <p className="text-muted-foreground text-sm">
                    Over the last 30 years, Waterfield has developed effective ways of facilitating groups to work together to rapidly reach consensus.
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    We harness the 'collective intelligence' of the group, in a highly interactive way to produce a shared and owned plan. A plan that maps out their journey to achieve success and results in meaningful action.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-center font-heading text-xl font-semibold mb-8" style={{ color: "#CB4547" }}>Enable</p>
              <div className="bg-secondary rounded-2xl p-8 flex flex-col flex-1">
                <img src="/process/agile.png" alt="Enable" className="w-36 h-36 mx-auto mb-3 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(68%) saturate(1247%) hue-rotate(328deg) brightness(89%) contrast(85%)' }} />
                <div className="text-center flex-1 flex flex-col">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Agile execution</h4>
                  <p className="text-muted-foreground text-sm">
                    The execution phase is where a plan touches reality. We help our clients adopt an agile execution model, allowing groups to quickly test their hypothesis. This enables fast re-calibration based on what's working and what's not working.
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    To support this agile approach Waterfield provides a cloud application to easily monitor and track progress collaboratively with your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Delivery Cycle */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary text-center mb-4">
            Design & delivery
          </h2>
          <div className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed mb-4">
              We start by best understanding your needs, research areas that impact your environment, and design and deliver the right process for the organisation's desired outcomes.
            </p>
            <p className="leading-relaxed mb-4">
              We work with our clients to strategically design, facilitate and execute preferred outcomes in a collaborative way for solving complex issues.
            </p>
            <p className="font-heading text-xl font-semibold text-primary">
              We are driven and dedicated to add value across each step in the design and delivery cycle, and overall sustainable growth by building capacity internally.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <img
              src="/deliveryCycle.png.avif"
              alt="Design and delivery cycle"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 relative overflow-hidden flex flex-col h-full">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <img src={step.image} alt={step.title} className="w-6 h-6 object-contain flex-shrink-0" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm text-center flex-grow">{step.description}</p>
                <div className="absolute top-4 right-4 text-4xl font-bold text-muted/20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;

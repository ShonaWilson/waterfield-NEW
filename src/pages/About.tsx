import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const About = () => {
  const { ref, offset } = useParallax(0.5);

  useEffect(() => {
    document.title = "Waterfield | About";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const values = [
    {
      image: "/valueadding.png",
      title: "Value adding",
      description: "We strive to significantly add value to our clients and future driven outcomes. It is integral in the way we work with others",
      size: "w-28 h-28",
    },
    {
      image: "/collaborative.png",
      title: "Open & collaborative",
      description: "We operate openly and transparently both internally and externally. We find ways to create synergies by collaborating",
      size: "w-28 h-28",
    },
    {
      image: "/relationshipBuilding.png",
      title: "Relationship building",
      description: "We nurture the people we interact with as growing relationships are important to us and underpins our reputation",
      size: "w-28 h-28",
    },
    {
      image: "/Unique.png",
      title: "Unique & innovative",
      description: "We bring a unique perspective and are never content with the status quo constantly looking for better ways to do things",
      size: "w-28 h-28",
    },
    {
      image: "/whole.png",
      title: "Appreciation of the whole",
      description: "We operate in an inter-connected world and contribute back to society through our pro-bono work",
      size: "w-28 h-28",
    },
    {
      image: "/Longterm.png",
      title: "Long-term focus",
      description: "We see our clients as long term partners, helping build capacity so they succeed in the long term",
      size: "w-28 h-28",
    },
  ];

  const process = [
    {
      icon: Eye,
      name: "Foresight",
      description:
        "We combine your organisation's collective intelligence with AI to anticipate future trends, uncover challenges and identify opportunities.",
    },
    {
      icon: Lightbulb,
      name: "Insight",
      description:
        "We bring diverse stakeholders together to create a shared understanding, alignment, and ownership of strategic priorities.",
    },
    {
      icon: Zap,
      name: "Action",
      description:
        "We execute strategies with agility and confidence through adaptive 90-day sprints, ensuring measurable results.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/team-meeting-edited-edited-edited.jpg"
            alt="About Waterfield"
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

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            About Waterfield
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            In a rapidly changing world, we bring together your team's collective intelligence and AI-driven insights to navigate complexity with clarity.
          </p>
        </div>
      </section>

      {/* Our principles */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
              Our principles
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed">
              Waterfield lives by 3 core principles, in how we work and deliver value to our clients.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Outcome thinking */}
            <div className="bg-secondary rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-12 h-12 md:w-[5.6rem] md:h-[5.6rem] md:mb-4 flex-shrink-0">
                    <img src="/outcome.png" alt="Outcome thinking" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground text-left md:text-center">
                    Outcome thinking
                  </h4>
                </div>
                <div className="md:w-[75%] leading-relaxed space-y-3">
                  <p className="font-heading font-medium text-sm md:text-base text-foreground">
                    We believe defining the preferred end state is the right starting point for all actions.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We design and facilitate conversations to help understand the current state and what the future will demand.
                    We find that working back from a preferred set of outcomes is many times more inspiring and motivational than trying to solve current issues.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Outcome thinking can be thought of as having a clear destination for your journey, which gives you the ability to make continual course corrections and adaptations as conditions change.
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="bg-secondary rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-12 h-12 md:w-[5.6rem] md:h-[5.6rem] md:mb-4 flex-shrink-0">
                    <img src="/collaboration.png" alt="Collaboration" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground text-left md:text-center">
                    Collaboration
                  </h4>
                </div>
                <div className="md:w-[75%] leading-relaxed space-y-3">
                  <p className="font-heading font-medium text-sm md:text-base text-foreground">
                    We believe humans are hardwired to collaborate. What is missing is the right environment and the permission to realise the benefits of effective collaboration.
                  </p>
                  <p className="text-muted-foreground text-sm">These include:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    <li>
                      People who are involved and engaged in the design process are motivated to act
                    </li>
                    <li>
                      The new generation of knowledge workers want to understand the whole picture, contribute to solutions and be trusted to implement
                    </li>
                    <li>
                      Diverse inputs lead to better decisions and everyone becomes better informed
                    </li>
                    <li>
                      People actually want to collaborate and create outcomes that are magic
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Building capacity */}
            <div className="bg-secondary rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0 md:w-[25%]">
                  <div className="w-12 h-12 md:w-[5.6rem] md:h-[5.6rem] md:mb-4 flex-shrink-0">
                    <img src="/capacity.png" alt="Building capacity" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground text-left md:text-center">
                    Building capacity
                  </h4>
                </div>
                <div className="md:w-[75%] leading-relaxed space-y-3">
                  <p className="font-heading font-medium text-sm md:text-base text-foreground">
                    We believe that building capacity in our clients ensures that the desired change is both realised and sustained.
                  </p>
                  <p className="text-muted-foreground text-sm">Waterfield builds capacity in a number of ways:</p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                    <li>
                      Training and development of groups and individuals who are directly engaged in the change
                    </li>
                    <li>
                      Shadow consulting to nominated champions within the organisation
                    </li>
                    <li>
                      Introducing new thinking and networks
                    </li>
                  </ol>
                  <p className="text-muted-foreground text-sm">
                    Through our experience this is a very effective way to add value and further instill transformation with clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
              Our team
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-heading font-semibold text-lg text-foreground">
                Waterfield is a tight, high performing team with deep networks of specialists.
              </p>
              <p>
                We practise a collaborative model where our group of specialists come together depending on the specific assignment and skills necessary to best meet those outcomes. We are committed to supporting corporations, not for profits, Governments and communities to achieve outstanding results.
              </p>
              <p>
                Our team shares a passion for solving complex issues and delivering an innovative solution. We are motivated by collaboration and have developed a wealth of experience in delivering successful projects that deliver high value to our clients.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="font-heading text-xl font-semibold text-primary">
              Our specialists include;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Expert Facilitators</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Strategic Consultants</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Industry Experts</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Coaches</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Researchers and Forecasters</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Analysts</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Workshop Reporters</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold text-lg text-foreground">Designers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <a
              href="https://www.linkedin.com/in/knuttall/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background rounded-xl p-6 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative z-10 flex flex-row md:flex-col gap-6">
                <div className="flex-shrink-0 md:w-full">
                  <img
                    src="/Kevin.png"
                    alt="Kevin Nuttall"
                    className="w-24 h-24 md:w-full md:h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center md:text-center">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Kevin Nuttall
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Founder & Director, Strategy facilitator
                  </p>
                  <span className="inline-flex items-center md:justify-center gap-1 font-heading font-medium text-sm md:text-base text-primary group-hover:gap-2 transition-all duration-200">
                    LinkedIn profile <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aidannuttall/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background rounded-xl p-6 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative z-10 flex flex-row md:flex-col gap-6">
                <div className="flex-shrink-0 md:w-full">
                  <img
                    src="/Aidan.png"
                    alt="Aidan Nuttall"
                    className="w-24 h-24 md:w-full md:h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center md:text-center">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Aidan Nuttall
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Strategy facilitator, Strategy execution specialist
                  </p>
                  <span className="inline-flex items-center md:justify-center gap-1 font-heading font-medium text-sm md:text-base text-primary group-hover:gap-2 transition-all duration-200">
                    LinkedIn profile <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/ICN_HighRes-7.jpeg.avif"
                alt="Team photo"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/IMG_20190321_111502 2.jpeg.avif"
                alt="Team photo"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/IMG_3027.jpeg.avif"
                alt="Team photo"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/IMG_3084.jpeg.avif"
                alt="Team photo"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/IMG_3097.jpg.avif"
                alt="Team photo"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/IMG_6591 3.jpeg.avif"
                alt="Team photo"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Banner */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-[32%] flex-shrink-0">
              <div className="font-heading leading-tight">
                {/* Mobile layout: 30 years on same line, designing futures below */}
                <div className="block md:hidden text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2" style={{ color: 'rgb(175, 171, 137)' }}>
                    <span className="text-6xl font-bold leading-none">30</span>
                    <span className="text-6xl font-bold leading-none">years</span>
                  </div>
                  <div className="text-2xl font-semibold text-primary-foreground leading-tight">
                    designing futures
                  </div>
                </div>

                {/* Desktop layout: vertical stack */}
                <div className="hidden md:flex md:flex-col items-center justify-center">
                  <div className="font-bold leading-none mb-2 text-center" style={{ color: 'rgb(175, 171, 137)' }}>
                    <div className="text-9xl">30</div>
                    <div className="text-6xl -mt-4">years</div>
                  </div>
                  <div className="text-2xl font-semibold text-primary-foreground text-center">
                    designing futures
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[68%] space-y-4 text-center">
              <p className="text-primary-foreground leading-relaxed">
                30 years ago Waterfield pioneered facilitation as an approach to help organisations go through change. It proved many times faster and more successful than other change management approaches.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                Over the years we have realised people working in groups is the key resource to be leveraged in practically all endeavours. We have become specialists in designing and facilitating collaborative processes that create better solutions, buy in and follow through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Our Values
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground leading-relaxed">
              Waterfield's values express what drives us, how we deliver work and maintain relationships. We are innovative, committed to making a difference, and think beyond the norm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 md:p-8 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={value.image}
                    alt={value.title}
                    className={`${value.size} object-contain`}
                  />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

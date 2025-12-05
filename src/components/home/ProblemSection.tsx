export function ProblemSection() {
  const challenges = [
    { title: "Unfocused", subtitle: "direction", color: "#9E5790" },
    { title: "Misaligned", subtitle: "priorities", color: "#CB4547" },
    { title: "Disengaged", subtitle: "teams", color: "#F8983C" },
    { title: "Disconnected", subtitle: "stakeholders", color: "#A9D159" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            You have a vision for your organisation to thrive — today and into the future.
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            The reality is the world is fast-moving, ever-changing, and increasingly complex. This complexity is driven by intensifying competition, rapid innovation, evolving compliance and geopolitical shifts - amid growing skill shortages.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Leaders face competing priorities and endless possibilities. With limited time and resources,
            finding the right path becomes challenging.
          </p>

          <div className="pt-4">
            <p className="font-heading text-xl font-semibold text-primary mb-6">
              Without strategic clarity, organisations face:
            </p>
            
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[105px] md:w-[130px] mx-auto"
                  style={{ backgroundColor: challenge.color }}
                >
                  <p className="font-heading font-medium text-white text-sm md:text-base">{challenge.title}</p>
                  <p className="font-heading text-white text-sm md:text-base font-medium">{challenge.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="font-heading font-semibold text-lg text-foreground pt-4">
            The result? Missed opportunities limiting growth and reduced
            adaptability when it matters most.
          </p>

          <p className="font-heading text-xl font-semibold text-primary pt-8">
            Waterfield transforms complexity into clear, actionable strategies. We align people and AI
            capabilities to drive success.
          </p>
        </div>
      </div>
    </section>
  );
}

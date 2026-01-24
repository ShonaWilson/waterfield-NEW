export function ProblemSection() {
  const challenges = [
    { title: "Focused", subtitle: "direction", color: "#9E5790" },
    { title: "Aligned", subtitle: "priorities", color: "#CB4547" },
    { title: "Engaged", subtitle: "teams", color: "#F8983C" },
    { title: "Connected", subtitle: "stakeholders", color: "#A9D159" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Navigate complexity
            </h3>
            <p className="font-heading font-semibold text-lg text-foreground">
              Complexity is the new constant; where markets shift, ecosystems evolve, and AI continues to rewrite the rules. The real challenge isn't change — it's clear direction everyone can align to.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Waterfield helps you navigate complexity with confidence — combining foresight, collaboration, and AI-powered insight to move your organisation forward fast.
          </p>

          <div className="pt-4">
            <p className="font-heading text-xl font-semibold text-primary mb-6">
              We enable your team to make sense of complexity and act together.
            </p>
            
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="rounded-full aspect-square flex flex-col items-center justify-center p-2 md:p-3.5 text-center hover:shadow-lg transition-shadow duration-300 w-[115px] md:w-[143px] mx-auto"
                  style={{ backgroundColor: challenge.color }}
                >
                  <p className="font-heading font-medium text-white text-sm md:text-base">{challenge.title}</p>
                  <p className="font-heading text-white text-sm md:text-base font-medium">{challenge.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="font-heading font-semibold text-lg text-foreground pt-8">
            Waterfield transforms complexity into clear, actionable strategies. We align people and AI capabilities to drive success.
          </p>
        </div>
      </div>
    </section>
  );
}

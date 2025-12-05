export function WaterfieldWay() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8 bg-background">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-2">
            The Waterfield way
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="w-64 md:w-[32%] flex-shrink-0">
            <img
              src="/image-50.jpeg.avif"
              alt="Waterfield approach"
              className="w-full h-auto rounded-full aspect-square object-cover"
            />
          </div>
          <div className="w-full md:w-[68%] space-y-3">
            <p className="font-heading font-semibold text-lg text-foreground">
              At Waterfield, we transform complexity into clarity through our proven framework.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We empower teams to take ownership, collaborate effectively, and drive strategic
              outcomes with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our innovative approach places us at the forefront of developing and executing effective
              strategy. We accelerate outcomes through streamlined processes while strengthening
              stakeholder commitment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We seamlessly integrate human and artificial intelligence throughout your strategic journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

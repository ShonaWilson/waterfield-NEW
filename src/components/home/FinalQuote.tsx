export function FinalQuote() {
  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/11062b_0d2d8e4dad4a46bc89e884f347d58de0~mv2.jpg.avif"
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
            "Waterfield has exceptional skills in harnessing the energy of passionate people to create
            a pathway to realise their vision."
          </blockquote>
          <p className="text-primary-foreground/80 text-sm">
            <span className="font-semibold">Dr Amanda Caples</span><br />
            Victoria's Lead Scientist, Director, Breakthrough Victoria
          </p>
        </div>
      </div>
    </section>
  );
}

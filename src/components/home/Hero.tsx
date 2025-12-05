import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const { ref, offset } = useParallax(0.5);

  return (
    <section ref={ref} className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional team collaborating in modern office"
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
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center mt-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight">
            Empower your <span className="whitespace-nowrap">organisation to thrive</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light italic">
            Achieve strategic clarity, alignment & action for success
          </p>
          <div className="pt-4">
            <Button asChild variant="hero" size="xl" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function Testimonial({ quote, name, title, company }: TestimonialProps) {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary-foreground/30 mx-auto mb-6" />
          <blockquote className="text-lg md:text-xl lg:text-2xl text-primary-foreground font-light italic leading-relaxed mb-8">
            "{quote}"
          </blockquote>
          <div className="space-y-1">
            <p className="font-heading font-semibold text-primary-foreground">{name}</p>
            <p className="text-primary-foreground/80 text-sm">{title}</p>
            <p className="text-primary-foreground/80 text-sm">{company}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <Testimonial
      quote="Waterfield's methodology really worked for us. We knew exactly what we would get at the end of the session and, just as importantly, understood the journey to get there. The team gained clarity, helping them put things into perspective and fully engage in the process."
      name="Louise Daley"
      title="CEO Asia Pacific"
      company="Future Now Capital"
    />
  );
}

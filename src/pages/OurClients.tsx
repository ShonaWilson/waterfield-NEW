import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Brain, HandHeart } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";

const clientLogos = [
  { name: "Goldman Sachs Asset Management", logo: "/clients/gsam_sm_00_p_1024x768.jpg.avif" },
  { name: "JLL", logo: "/clients/1000px-JLL_logo_svg.png.avif" },
  { name: "Coca-Cola Amatil", logo: "/clients/Coca-Cola-Amatil-logo.png.avif" },
  { name: "Victorian State Government", logo: "/clients/Vic-State-Govt_Logo.png.avif" },
  { name: "VCCC", logo: "/clients/Unknown.png.avif" },
  { name: "Lend Lease", logo: "/clients/MT23859_gif.png.avif" },
  { name: "UNESCO", logo: "/clients/1101px-UNESCO_logo_English_svg.png.avif" },
  { name: "Destination NSW", logo: "/clients/DI-colour.jpg.avif" },
  { name: "UNSW Sydney", logo: "/clients/UNSW-Sydney.png.avif" },
  { name: "CSIRO", logo: "/clients/CSIRO_Grad_RGB_hr.jpg.avif" },
  { name: "Mirvac", logo: "/clients/Unknown-1.png.avif" },
  { name: "Cushman & Wakefield", logo: "/clients/1280px-Cushman_&_Wakefield_logo_svg.png.avif" },
  { name: "GPT Group", logo: "/clients/gpt_group_pos_black1.jpg.avif" },
  { name: "NSW Business Chamber", logo: "/clients/nswbc-440x300.png.avif" },
  { name: "Savills", logo: "/clients/uploadsba5lw25.jpg.avif" },
  { name: "Property Council", logo: "/clients/349953_preview.png.avif" },
  { name: "Royal Agricultural Society", logo: "/clients/RAS_logo.jpg.avif" },
  { name: "NIDA", logo: "/clients/NIDADescriptor_vertical-300x229.jpg.avif" },
  { name: "Woodside", logo: "/clients/sls-woodside-logo.png.avif" },
  { name: "Boral", logo: "/clients/5-rwbH-O_400x400.jpg.avif" },
  { name: "National Gallery of Australia", logo: "/clients/NGA-logo.jpg.avif" },
  { name: "Arts NSW", logo: "/clients/file.jpg.avif" },
  { name: "Sydney Olympic Park Authority", logo: "/clients/Sydney-Olympic-Park-Authority.jpg.avif" },
  { name: "MCA", logo: "/clients/mca-logo.jpg.avif" },
];

const caseStudies = [
  {
    title: "Royal Agricultural Society of NSW",
    description: "The Royal Agricultural Society of NSW needed to align on a governance framework to integrate AI responsibly into their operations. They aimed to drive AI adoption across teams to ensure consistent and strategic use throughout the organisation.",
    link: "/case-studies/royal-agricultural-society-nsw",
    image: "/case-studies/ras_pms2695-1.png.avif",
  },
  {
    title: "VCCC",
    description: "A proposition had percolated for a number of years for a comprehensive cancer centre to create a powerful alliance of eight successful Victorian organisations committed to cancer control. They needed to identify the best way to achieve this.",
    link: "/case-studies/victorian-comprehensive-cancer-centre",
    image: "/case-studies/ikn3kboqur8h2mlber3d.jpg.avif",
  },
  {
    title: "CareerTrackers",
    description: "CareerTrackers Australia needed to gain trust in order to become sustainable. They needed to gain trust from two very distinct parties and needed to ensure their path was sustainable.",
    link: "/case-studies/careertrackers",
    image: "/case-studies/career-trackers-logo.png.avif",
  },
  {
    title: "Australian Publishers Association",
    description: "The Australian Publishers Association's goal was to instigate and make reality the provisions of an international agreement which will help millions gain access to audio, braille and large-print versions of the traditional book. An exciting opportunity to facilitate a forum that aims to define the book of the future.",
    link: "/case-studies/australian-publishers-association",
    image: "/case-studies/APA_Logo_Web.png.avif",
  },
  {
    title: "Green Building Council of Australia",
    description: "The Green Building Council of Australia comprises of a number of organisations and needed to come together to agree on a framework to form part of the national model.",
    link: "/case-studies/green-building-council-australia",
    image: "/case-studies/Green_Building_Council_of_Australia_logo.png.avif",
  },
];

const socialImpact = {
  indigenous: [
    "CareerTrackers",
    "AIME",
    "GO Foundation",
    "Reconciliation Australia",
    "National Centre of Indigenous Excellence",
    "Aboriginal Employment Strategy",
  ],
  mentalHealth: [
    "Beyond Blue",
    "Mates in Construction",
    "Batyr",
    "Suicide Prevention Australia",
    "Smiling Minds",
  ],
  notForProfit: [
    "Women's Housing Ltd",
    "Property Industry Foundation",
    "Asylum Seekers Centre",
    "Ethics Centre",
    "National Breast Cancer Foundation",
    "Thomas Kelly Youth Foundation",
    "40K Foundation",
    "Urban Land Institute of Australia",
    "Teach for Australia",
  ],
};

const testimonials = [
  {
    quote: "Since using Waterfield's process, completion of tasks is far greater and therefore key KPIs have been achieved with ease and more accuracy.",
    name: "Simon McGrath",
    title: "Former COO Accor Hotels Australia",
  },
  {
    quote: "I am extremely happy with the outcomes so far over the last couple of years and Waterfield has been a high value add to our organisation.",
    name: "Tania Constable",
    title: "CEO, CO2CRC",
  },
  {
    quote: "The speed and efficiency of the process is amazing. You walk in with a blank sheet of paper and walk out with a strategy. It's done, and it belongs to all of you.",
    name: "Michael Combs",
    title: "Founder, CareerTrackers Australia",
  },
  {
    quote: "Waterfield is simply a breath of fresh air. We've got a clear, concise, insightful and accountable business strategy and couldn't be happier with the result.",
    name: "Paul Nelson",
    title: "Founder & Managing Director, BrandMatters",
  },
];

const OurClients = () => {
  const { ref, offset } = useParallax(0.5);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    document.title = "Waterfield | Clients";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoScrolling(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/clients-hero.webp"
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
            Who we work with
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Our work introduces us to many different types of organisations, with 30 years experience across a vast range of industries.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <p className="text-center font-heading font-semibold text-lg text-foreground max-w-3xl mx-auto mb-12">
            Here is a snapshot of clients we have helped design futures with
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 flex items-center justify-center min-h-[80px]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto object-contain max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Case studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                to={study.link}
                className="group relative bg-background rounded-xl p-6 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 h-full"
              >
                <div className="relative z-10 text-center flex flex-col h-full">
                  <div className="w-full h-24 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{study.description}</p>
                  <span className="inline-flex items-center justify-center gap-1 font-heading font-medium text-sm md:text-base text-primary group-hover:gap-2 transition-all duration-200">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/clients-quote-bg.webp"
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
            {/* Testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-primary-foreground/80 text-sm">
                  <span className="font-semibold">{testimonial.name}</span><br />
                  {testimonial.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots - Positioned absolutely */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-foreground w-8'
                  : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Social Impact */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              Social impact
            </h2>
            <p className="font-heading font-semibold text-lg text-foreground max-w-3xl mx-auto">
              Waterfield is strongly committed to making a difference and adding value on a social aspect.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              We believe in designing better futures for all, sharing, investing and teaching our skills to a broad network, providing services to local and global social purpose organisations to help make a difference for sustainable and long term change.
              <br /><br />
              We proudly work with and have created long term partnerships across a number of enterprises that make a real difference, these include;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Indigenous community</h4>
              <ul className="space-y-2">
                {socialImpact.indigenous.map((org, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {org}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Mental health</h4>
              <ul className="space-y-2">
                {socialImpact.mentalHealth.map((org, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {org}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">Other not for profit</h4>
              <ul className="space-y-2">
                {socialImpact.notForProfit.map((org, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {org}
                  </li>
                ))}
              </ul>
            </div>
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

export default OurClients;

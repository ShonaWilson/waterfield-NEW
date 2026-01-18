import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { ArrowLeft } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

const CaseStudy = () => {
  const { slug } = useParams();
  const { ref, offset } = useParallax(0.5);

  const caseStudy = getCaseStudyBySlug(slug || "");

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} | Waterfield`;
    }
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, [caseStudy]);

  const getMarkdownComponents = () => {
    let isFirstParagraph = true;
    return {
      h2: ({ children }: any) => {
        return (
          <h2 className="font-heading text-xl font-semibold text-primary mt-12 mb-6">
            {children}
          </h2>
        );
      },
      h3: ({ children }: any) => (
        <h3 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">
          {children}
        </h3>
      ),
      p: ({ children }: any) => {
        if (isFirstParagraph) {
          isFirstParagraph = false;
          return (
            <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {children}
            </p>
          );
        }
        return (
          <p className="text-muted-foreground leading-relaxed mb-4">
            {children}
          </p>
        );
      },
      ul: ({ children }: any) => (
        <ul className="space-y-2 mb-6">
          {children}
        </ul>
      ),
      li: ({ children }: any) => (
        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-2.5" />
          <span className="text-muted-foreground leading-relaxed">{children}</span>
        </li>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-foreground pl-6 my-8 text-lg md:text-xl lg:text-2xl italic text-foreground [&>p]:text-foreground [&>p]:mb-0 [&+p]:text-foreground [&+p]:mb-2 [&+p+p]:text-foreground [&+p+p]:mb-4">
          {children}
        </blockquote>
      ),
      strong: ({ children }: any) => (
        <strong className="font-semibold text-foreground">{children}</strong>
      ),
      img: ({ src, alt }: any) => (
        <img
          src={src}
          alt={alt}
          className="w-full rounded-lg my-8"
        />
      ),
      a: ({ href, children }: any) => (
        <a
          href={href}
          className="text-primary-light hover:text-primary underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    };
  };

  if (!caseStudy) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-semibold mb-4">Case study not found</h1>
            <Link to="/our-clients">
              <Button variant="hero">Back to Our Clients</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateY(${offset * 0.4}px)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(43, 57, 79, 0.85), rgba(43, 57, 79, 0.9), rgba(43, 57, 79, 0.95))",
            }}
          />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            {caseStudy.title}
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            {caseStudy.excerpt}
          </p>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto mb-8">
            <Link
              to="/our-clients"
              className="group inline-flex items-center gap-2 font-heading font-medium text-sm md:text-base text-primary hover:text-primary-light transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Our Clients
            </Link>
          </div>
          <article className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            <ReactMarkdown
              key={slug}
              components={getMarkdownComponents()}
            >
              {caseStudy.content}
            </ReactMarkdown>
          </article>

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

export default CaseStudy;

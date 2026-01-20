import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

const Articles = () => {
  const { ref, offset } = useParallax(0.5);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = "Waterfield | Articles";
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";
    };
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Image_dump/split_2.png"
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: '50% 25%',
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
            Articles
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Insights and thought leadership on strategy, collaboration, and organisational success.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group relative bg-secondary rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 p-6 flex flex-col flex-1">
                  <h2 className="font-heading font-semibold text-lg text-foreground mb-4 flex-1 text-center">
                    {article.title}
                  </h2>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 font-heading font-medium text-sm md:text-base text-primary group-hover:gap-2 transition-all duration-200">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <Button
                onClick={handleShowMore}
                variant="hero"
                size="lg"
                className="hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Show more
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Articles;

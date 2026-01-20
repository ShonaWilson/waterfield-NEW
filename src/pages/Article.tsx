import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getArticleBySlug, articles } from "@/data/articles";
import { ArrowLeft, ArrowRight, Link2, Check } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, offset } = useParallax(0.5);
  const article = getArticleBySlug(slug || "");
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Update page title and meta tags for social sharing
  useEffect(() => {
    if (article) {
      const articleUrl = window.location.href;
      const siteName = "Waterfield";

      // Update page title
      document.title = `Waterfield | ${article.title}`;

      // Update or create meta tags
      const updateMetaTag = (property: string, content: string, isName: boolean = false) => {
        const attribute = isName ? 'name' : 'property';
        let element = document.querySelector(`meta[${attribute}="${property}"]`);

        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, property);
          document.head.appendChild(element);
        }

        element.setAttribute('content', content);
      };

      // Open Graph meta tags (used by Facebook, LinkedIn, and others)
      updateMetaTag('og:title', article.title);
      updateMetaTag('og:description', article.excerpt);
      updateMetaTag('og:type', 'article');
      updateMetaTag('og:url', articleUrl);
      updateMetaTag('og:image', `${window.location.origin}${article.image}`);
      updateMetaTag('og:site_name', siteName);

      // Twitter Card meta tags
      updateMetaTag('twitter:card', 'summary_large_image', true);
      updateMetaTag('twitter:title', article.title, true);
      updateMetaTag('twitter:description', article.excerpt, true);
      updateMetaTag('twitter:image', `${window.location.origin}${article.image}`, true);

      // Standard meta description
      updateMetaTag('description', article.excerpt, true);
    } else {
      document.title = "Waterfield | Article not found";
    }

    // Cleanup: reset to default when component unmounts
    return () => {
      document.title = "Waterfield | Clear Strategic Direction & Action";

      // Reset meta tags to homepage defaults
      const updateMetaTag = (property: string, content: string, isName: boolean = false) => {
        const attribute = isName ? 'name' : 'property';
        const element = document.querySelector(`meta[${attribute}="${property}"]`);
        if (element) {
          element.setAttribute('content', content);
        }
      };

      updateMetaTag('og:title', 'Waterfield | Clear Strategic Direction & Action');
      updateMetaTag('og:description', 'Empower your organisation to thrive. Achieve strategic clarity, alignment & action for success.');
      updateMetaTag('og:type', 'website');
      updateMetaTag('og:url', 'https://waterfield.com.au');
      updateMetaTag('og:image', 'https://waterfield.com.au/og-image.png');
      updateMetaTag('twitter:title', 'Waterfield | Clear Strategic Direction & Action', true);
      updateMetaTag('twitter:description', 'Empower your organisation to thrive. Achieve strategic clarity, alignment & action for success.', true);
      updateMetaTag('twitter:image', 'https://waterfield.com.au/og-image.png', true);
      updateMetaTag('description', 'Waterfield empowers organisations to thrive through strategic clarity, alignment and action. Over 30 years of experience helping enterprises, governments and partnerships achieve meaningful outcomes.', true);
    };
  }, [article]);

  // Calculate reading time (average 200 words per minute)
  const calculateReadingTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Format date to "Mmm DD, YYYY"
  const formatDate = (dateString: string) => {
    // If it's just a year, default to Jan 01 of that year
    const date = dateString.length === 4
      ? new Date(`${dateString}-01-01`)
      : new Date(dateString);

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
  };

  // Get current URL for sharing
  const getArticleUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : '';
  };

  // Share handlers
  const handleCopyLink = async () => {
    const url = getArticleUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = (platform: string) => {
    const url = getArticleUrl();
    const title = article?.title || '';
    const summary = article?.excerpt || '';

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        // Use Facebook's Share Dialog which works better with SPAs
        shareUrl = `https://www.facebook.com/dialog/share?app_id=966242223397117&href=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + summary)}&display=popup`;
        break;
      case 'x':
        // X/Twitter with title and URL
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        // LinkedIn with URL, title, and summary
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
    }
  };

  // Create components with fresh closure for each render
  const getMarkdownComponents = () => {
    let isFirstParagraph = true;
    let isInReference = false;
    return {
      h2: ({ children }: any) => {
        const text = String(children);
        if (text === 'Reference') {
          isInReference = true;
          return (
            <h2 className="font-heading font-semibold text-lg text-foreground mt-12 mb-6">
              {children}
            </h2>
          );
        }
        isInReference = false;
        return (
          <h2 className="font-heading text-xl font-semibold text-primary mt-12 mb-6">
            {children}
          </h2>
        );
      },
      h3: ({ children }: any) => {
        isInReference = false;
        return (
          <h3 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">
            {children}
          </h3>
        );
      },
      p: ({ children }: any) => {
        if (isFirstParagraph) {
          isFirstParagraph = false;
          return (
            <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {children}
            </p>
          );
        }
        if (isInReference) {
          return (
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {children}
            </p>
          );
        }
        return (
          <p className="text-muted-foreground leading-relaxed mb-6">
            {children}
          </p>
        );
      },
      ul: ({ children }: any) => (
        <ul className="space-y-3 mb-6 list-none">{children}</ul>
      ),
      li: ({ children }: any) => (
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
          <span>{children}</span>
        </li>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-foreground pl-6 my-8 text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed [&>p]:!text-foreground [&>p]:mb-0">
          {children}
        </blockquote>
      ),
      strong: ({ children }: any) => (
        <strong className="font-semibold text-foreground">
          {children}
        </strong>
      ),
      img: ({ src, alt }: any) => (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg my-8"
        />
      ),
      a: ({ href, children }: any) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light hover:text-primary transition-colors duration-200 underline"
        >
          {children}
        </a>
      ),
    };
  };

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-semibold mb-4">Article not found</h1>
            <Link to="/articles">
              <Button variant="hero">Back to Articles</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Helper function to shuffle array using Fisher-Yates algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Get 3 random related articles (excluding current)
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const availableArticles = articles.filter((_, i) => i !== currentIndex);
  const relatedArticles = shuffleArray(availableArticles).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
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
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 font-heading font-medium text-base text-primary">
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{calculateReadingTime(article.content)}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto mb-8">
            <Link
              to="/articles"
              className="group inline-flex items-center gap-2 font-heading font-medium text-sm md:text-base text-primary hover:text-primary-light transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Articles
            </Link>
          </div>
          <article className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            <ReactMarkdown
              key={slug}
              components={getMarkdownComponents()}
            >
              {article.content}
            </ReactMarkdown>
          </article>

          {/* Share Section */}
          <div className="max-w-3xl mx-auto mt-12 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-heading font-medium text-foreground">Share:</span>
              <TooltipProvider>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors group"
                        aria-label="Share on Facebook"
                      >
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleShare('x')}
                        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors group"
                        aria-label="Share on X"
                      >
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>X</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors group"
                        aria-label="Share on LinkedIn"
                      >
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleCopyLink}
                        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors group"
                        aria-label="Copy link"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <Link2 className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Copied!" : "Copy link"}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg" className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Let's connect</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                to={`/articles/${relatedArticle.slug}`}
                className="group bg-background rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-3 line-clamp-2 flex-1 text-center">
                    {relatedArticle.title}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 font-heading font-medium text-sm text-primary group-hover:gap-2 transition-all duration-200">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Article;

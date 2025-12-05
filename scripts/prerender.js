import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import article data
const articles = [
  {
    slug: "collaboration-ai-smarter-strategies-for-success",
    title: "Collaboration + AI: Smarter Strategies for Success",
    excerpt: "Exploring how AI-enhanced collaboration can drive better strategic outcomes for organisations.",
    image: "/articles/1.jpeg.avif",
  },
  {
    slug: "strategy-execution-60-40-ratio",
    title: "The Perfect Strategy: The 60/40 Ratio for Balanced Excellence",
    excerpt: "Discover the optimal balance between strategic planning and execution for organisational success.",
    image: "/articles/2.jpg.avif",
  },
  {
    slug: "interactive-futures-methodology",
    title: "Interactive Futures: A Powerful Methodology for Shaping Tomorrow",
    excerpt: "Learn how Interactive Futures methodology helps organisations envision and create their desired future.",
    image: "/articles/3.png.avif",
  },
  {
    slug: "columbo-method-facilitation",
    title: "The Columbo Method: Unlocking Insights Through Curious Inquiry",
    excerpt: "Explore how the Columbo Method's curious approach reveals deeper insights in facilitation.",
    image: "/articles/4.png.avif",
  },
  {
    slug: "gpt-thinking-partner-efficiency",
    title: "GPT as a Thinking Partner: Revolutionising Efficiency and Innovation",
    excerpt: "Discover how Large Language Models serve as powerful thinking partners for strategic work.",
    image: "/articles/5.png.avif",
  },
  {
    slug: "inside-out-planning-methodology",
    title: "Inside-Out Planning: A Fresh Approach to Strategic Execution",
    excerpt: "Learn how Inside-Out Planning creates adaptive strategies that respond to emerging realities.",
    image: "/articles/6.jpg.avif",
  },
];

const distPath = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Read the base index.html
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Generate HTML for each article
articles.forEach(article => {
  const articleUrl = `https://waterfield.com.au/articles/${article.slug}`;
  const imageUrl = `https://waterfield.com.au${article.image}`;

  // Replace meta tags with article-specific content
  let articleHtml = indexHtml
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${article.title}" />`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${article.excerpt}" />`
    )
    .replace(
      /<meta property="og:type"[^>]*>/,
      `<meta property="og:type" content="article" />`
    )
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${articleUrl}" />`
    )
    .replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${imageUrl}" />`
    )
    .replace(
      /<meta name="twitter:card"[^>]*>/,
      `<meta name="twitter:card" content="summary_large_image" />`
    )
    .replace(
      /<meta name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${article.title}" />`
    )
    .replace(
      /<meta name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${article.excerpt}" />`
    )
    .replace(
      /<meta name="twitter:image"[^>]*>/,
      `<meta name="twitter:image" content="${imageUrl}" />`
    )
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${article.excerpt}" />`
    )
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>Waterfield | ${article.title}</title>`
    );

  // Create articles directory if it doesn't exist
  const articlesDir = path.join(distPath, 'articles', article.slug);
  fs.mkdirSync(articlesDir, { recursive: true });

  // Write the article HTML file
  fs.writeFileSync(path.join(articlesDir, 'index.html'), articleHtml);
  console.log(`✓ Generated: /articles/${article.slug}/index.html`);
});

console.log(`\n✓ Prerendered ${articles.length} article pages`);

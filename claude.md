# Claude Code Session - Contact Page Updates

## Date
December 1-12, 2025
January 18-26, 2026

## Changes Made

### Strategy Connect Page Updates (January 26, 2026)
Content and structure updates to the Strategy Connect service page.

#### "How it works" FIA Sections Restructure
- Converted from tabbed interface to vertical stacked layout (FIASections component)
- Removed "Shared understanding" and "Aligned priorities" boxes from Insight section
- Converted Strategy Map to expandable dropdown (matching other tiles)
- Added border dividers between Foresight, Insight, Action sections (`border-t border-muted-foreground/20`)

#### FIA Section Headings
- Replaced text headings with logo images:
  - Foresight: `/Foresight.png`
  - Insight: `/Insight.png`
  - Action: `/Action.png`
- Logo sizing: `h-8 md:h-10 w-auto object-contain`

#### Expandable Dropdown Styling
- Updated all dropdown titles to olive color (#afab89)
- Titles: Collective intelligence, Research & analysis, Business model innovation, Strategy Map, Resourcing, Live tracking platform, Agile execution
- Subtitles remain visible above dropdown content

#### Action Section Tile Title Updates
- Tile 1: "Clear ownership" → "Resourcing"
- Tile 2: "Live tracking" → "Live tracking platform"
- Tile 3: "Agile execution & review" → "Agile execution"

#### Insight Section Copy Update
- Updated body copy to: "Insight is where patterns emerge and complexity is translated into clarity..."

#### FIA Diagram Hover Effect
- Added `hover:scale-105 transition-transform duration-300` to `/FullCycleFIA.png` diagram

#### "Build strategic impact" Section (Replaced "Execute your strategy")
- Changed section heading from "Execute your strategy" to "Build strategic impact"
- Removed three tiles (Highly visible, Adaptive, Easy to use)
- Added new intro copy about sustaining momentum and delivering impact
- Added three core capabilities in Engage Plus "strategic edge" style layout

#### Three Core Capabilities
Displayed in white container (`bg-background rounded-2xl`) with border separators:
1. **Alignment** - Compass icon - "Shared clarity and direction"
2. **Action** - Rocket icon - "Tangible outcomes and visible progress"
3. **Adaptation** - RefreshCw icon - "Continuous learning and responsiveness"

#### Visual Styling
- White container on beige background section
- Border separators between items (`border-t border-muted-foreground/20`)
- Icons sized at `w-10 h-10` with orange color (#F8983C)
- Centered text layout matching Engage Plus "strategic edge" section

#### "How it works" Section Updates
- Updated copy to focus on Foresight, Insight, and Action cycle
- Replaced process graphic with `/FullCycleFIA.png`
- Graphic size: 838px max width (increased by 10%)

#### "Clear pathway forward" Section Updates
- Added "What Strategy Connect delivers:" subheading
- Created 3 new feature tiles: Clarity (Target icon), Engagement (Users icon), Results (TrendingUp icon)
- Moved client logos section under the 3 tiles
- Updated client logos copy to "Trusted by organisations turning complexity into clear direction."

#### Section Background Swaps
- "Clear pathway forward" changed to white (`bg-background`)
- "Align & activate your strategy" changed to beige (`bg-secondary`)
- Feature tiles use beige background (`bg-secondary`)

### AI Tool Dedicated Pages (January 24, 2026)
Created three new dedicated pages for each AI tool, accessible from the AI Tools page.

#### Engage Plus Page (`/ai-tools/engageplus`)
- **File**: `src/pages/EngagePlus.tsx`
- **Route**: `/ai-tools/engageplus`
- Hero section with parallax background and Engage Plus logo
- Tagline: "Open, AI-powered engagement that reveals what will resonate."

**Content Sections:**
1. **Hear what really matters** - Explains the difference between surveys and conversations
2. **Why it's different** - Four feature tiles: Human-first, Flexible, AI-backed clarity, Real-time impact
3. **The strategic edge** - Four benefits: Hear what matters, See blind spots, Bring voices in, Navigate complexity
4. **How it works** - Three-step process: Capture voices, AI sense-making, Resonance and action
5. **Where it's used** - Use cases across industries (associations, developers, government, etc.)
6. **Testimonial** - Quote from Graeme Kruger (Ricegrowers' Association of Australia)
7. **Getting started** - Three tiles with icons: Define focus, Engage at scale, Learn and act

#### Future Connect Page (`/ai-tools/futureconnect`)
- **File**: `src/pages/FutureConnect.tsx`
- **Route**: `/ai-tools/futureconnect`
- Hero section with parallax background and Future Connect logo
- Tagline: "Aligned decisions for confident, future-ready strategy"

**Content Sections:**
1. **Bring strategy to life** - Strategy as ongoing conversation, not static documents
2. **A shared, living asset** - AI-powered strategy tool with scenario planning
3. **Designed to add value** - Five feature tiles: Ask real questions, Stay future-focused, Keep decisions connected, Align at every level, Smarter over time
4. **How it works** - Three-step process: Clarify Vision, Shape Decisions, Shared Understanding
5. **Future-aligned decisions** - Benefits grid: Amplify thinking, Improve quality, Strengthen confidence, Course-correct
6. **Getting started** - Three tiles: Explore possibilities, Strengthen alignment, Bring strategy to life

#### Execution Edge Page (`/ai-tools/executionedge`)
- **File**: `src/pages/ExecutionEdge.tsx`
- **Route**: `/ai-tools/executionedge`
- Hero section with parallax background (positioned 75% 50%) and Execution Edge logo
- Tagline: "Focused execution that turns strategy into impact"

**Content Sections:**
1. **Turn strategy into momentum** - Addresses strategy stalling in execution
2. **Strategy into action** - Four feature tiles: Translate priorities, Maintain focus, Track progress, Surface risks
3. **How it works** - Three-step process: Activate Strategy, Strategic Focus, Portfolio Insight
4. **Execution that delivers** - Four circular badges: Reinforcing focus, Supporting adjustment, Maintaining accountability, Turning insight into action
5. **Getting started** - Three tiles: Move to action, Empower delivery, Keep strategy moving

**Common Styling:**
- All pages use teal color (#1e9aa7) for headings and accents
- Consistent icon filters for "Getting started" tiles
- Hover effects on "Let's connect" buttons with darker teal (#178A98)
- Dark blue gradient overlays on hero and testimonial sections
- bg-secondary and bg-background alternating sections

### Build Capacity Page Restructure (January 24, 2026)
Complete redesign of the Build Capacity page to feature three capacity pathways with program logos.

#### Page Structure
- Hero section with new image and updated tagline
- "Our programs" overview section
- Three pathway tiles with geometric shapes and program listings
- Quote section with "Let's connect" button
- Removed Engage Plus tool section from bottom

#### Three Pathway Tiles
1. **Think Strategically** (Triangle shape)
   - Dark blue header box with triangle SVG (path: M220 150 L0 20 L0 280 Z)
   - **TPA Logo** (`/Image_dump/TPA_Logo.png`) - Orange link (#F8983C)
   - **Personal Plan Logo** (`/Image_dump/PersonalPlan_Logo.png`) - Green link (#7AB800)

2. **Lead Collaboratively** (Circle shape)
   - Dark blue header box with circle SVG (shifted -25% left)
   - **RapidConsensus Logo** (`/Image_dump/RapidConsensus_Logo.png`) - Red link (#C8102E)
   - **Strategy Champion Logo** (`/Image_dump/StrategyChampion_Logo.png`) - Orange link (#F8983C)

3. **Leverage AI** (Parallelogram shape)
   - Dark blue header box with parallelogram SVG (shifted -40% left, 20% larger)
   - **Collaborative Intelligence Logo** (`/Image_dump/CollaborativeIntelligence_Logo.png`) - Teal link (text-primary)
   - **AI Advantage Logo** (`/Image_dump/AIAdvantage_Logo.png`) - Teal link (text-primary)

#### Visual Styling
- Geometric shapes use teal (#268DB0) at 10% opacity
- Each pathway box has dark blue header (`#2F3D4F`)
- White background tiles (`bg-background`) with rounded corners
- Program descriptions with "Find out how" links

### AI Tools Page Updates (January 24, 2026)
Updated AI tool tiles to link to dedicated pages.

- **Tool 1 (Engage Plus)**: href changed to `/ai-tools/engageplus`
- **Tool 2 (Future Connect)**: href changed to `/ai-tools/futureconnect`
- **Tool 3 (Execution Edge)**: href changed to `/ai-tools/executionedge`

### Homepage FromUncertainty Section Updates (January 24, 2026)
- Changed section heading from "From uncertainty to clarity" to "Aligned direction & action"
- Maintains same circular badges and content structure

### Homepage ProblemSection (New - January 24, 2026)
Created new "Navigate complexity" section for the homepage.

#### Structure
- **Heading**: "Navigate complexity"
- **Subhead**: "Complexity is the new constant; where markets shift, ecosystems evolve, and AI continues to rewrite the rules."
- **Body copy**: Explains Waterfield's approach to navigating complexity

#### Four Circular Badges
- **Focused direction** - Purple (#9E5790)
- **Aligned priorities** - Red (#CB4547)
- **Engaged teams** - Orange (#F8983C)
- **Connected stakeholders** - Green (#A9D159)

#### Badge Styling
- Same sizing as FromUncertainty circles: w-[115px] md:w-[143px]
- 4-column grid layout (gap-2 md:gap-4)
- Hover shadow effect

### Custom Facilitation Page Updates (January 24, 2026)
- Changed testimonial background image to `/shutterstock_1636612660.jpg`
- Updated "Delivering impact" section to use circular badges instead of icon tiles
- Three circular badges: Unified direction (Red #CB4547), Clear priorities (Teal #1e9aa7), Shared ownership (Purple #9E5790)

### Services Page Updates (January 24, 2026)
- Added subtitle field to services data for additional context
- Added outcomes field with pipe separator for bold label formatting
- Maintained 32%/68% tile layout with logos and descriptions

### Open Innovation Page Updates (January 22, 2026)
Content, image, and styling updates to the Open Innovation service page.

#### HowItWorksTabs Image Updates
- **Tab 1 (Engage & align)**: Changed image to `/Image_dump/ChatGPT Image Jan 19, 2026 at 12_36_33 PM.png`
  - Added `objectPosition: 'center center'` for centered cropping
- **Tab 2 (Connect & expand)**: Changed image to `/IMG_0807_JPG.jpg.avif`
  - Updated subhead copy to: "Bringing together experts, partners, and AI insight to unlock new perspectives."
- **Tab 3 (Shape & validate)**: Changed image to `/ChatGPT Image Jan 22, 2026 at 08_30_37 PM.png`
- **Tab 4 (Capture value)**: Changed image to `/about-hero.jpg`

#### "Innovate beyond boundaries" Section Updates
- Updated main image to `/shutterstock-2055147128 copy.jpg` with `objectPosition: '25% center'`
- Condensed body copy from 4 paragraphs to 2 paragraphs with new text:
  - "In a world where disruption happens overnight, organisations can't rely on internal thinking alone. Unlocking new opportunities demands broader perspectives, sharper insight, and the courage to challenge your current model."
  - "Open Innovation brings together ideas, partners, and disciplines from outside your organisation—helping you anticipate change, act decisively, and grow strategically. Whether you're exploring new markets, strengthening services, building capability, or navigating AI advancement, we connect you with a trusted network to tackle complex challenges and co-create what's next."

#### Testimonial/Quote Banner
- Changed image to `/shutterstock_1801173394.jpg` (swapped from Tab 1)
- Maintains `objectPosition: '50% 25%'` for positioning

#### "Breakthrough thinking" Section Tiles
- 4 tiles use 15% tint of blue (#268DB0): `rgba(38, 141, 176, 0.15)`
- Tiles: New market opportunities, Business and service model innovation, Cross-industry insight transfer, Future capability building

### Custom Facilitation Page Updates (January 22, 2026)
Styling updates to the Custom Facilitation service page.

#### "How we add value" Section Tiles
- Updated all 4 tiles to use 20% tint of purple (#9E5790)
- Background color: `rgba(158, 87, 144, 0.20)`
- Tiles: Creating strategic clarity, Aligning stakeholders, Enabling confident decisions, Building momentum

#### "Delivering impact" Section
- Three circular badges with colors: Red (#CB4547), Teal (#1e9aa7), Purple (#9E5790)
- Badges: Unified direction, Clear priorities, Shared ownership

### Success Alliance Page Updates (January 22, 2026)
Additional content and image updates to the Success Alliance service page.

#### Copy Updates
- Changed "Organisations achieving results with Success Alliance" styling from yellow (#EBCA52) to dark blue subhead style (`text-foreground text-lg`)
- Added colon to heading: "Organisations achieving results with Success Alliance:"
- Changed "The benefits of a Success Alliance with your key suppliers and customers include:" to "Results of a Success Alliance with your key suppliers and customers:"
- Updated testimonial quote to have paragraph break between the two sections

#### Image Updates
- Updated hero banner image to `/shutterstock_2193443429.jpg`
- Updated quote banner image to `/shutterstock_1801173394.jpg`
- Updated Success Alliance images across homepage tile (ServicesPreview.tsx) and Services page tile (Services.tsx) to use `/shutterstock_2193443429.jpg`

### Strategy Connect Page Updates (January 21, 2026)
Content and layout updates to the Strategy Connect service page.

#### Removed Sections
- Removed orange banner quote section ("Designing a strategy for future growth is hard...")
- Removed YouTube video embed and accompanying text

#### Section Heading Updates
- Changed "Clear pathway forward" heading to "Clarity, engagement & results"
- Changed "Strategy success in 3 steps" heading to "Kick-off your strategy"
- Updated subhead to "Getting started with Strategy Connect is straightforward and focused."

#### CTA Section (New)
- Added call-to-action text above the "Let's connect" button
- Headline: "Ready to align your team and create clear strategic direction?"
- Body: "Let's talk about how Strategy Connect can support your organisation's next step."
- Orange "Let's connect" button (#F8983C) with hover effect (#E87D2B)
- Styled matching Success Alliance CTA pattern

### Success Alliance Page Updates (January 21, 2026)
Comprehensive updates to the Success Alliance service page content and styling.

#### "How it works" Section
- Updated subhead: "Success Alliance provides a clear, practical way to design, deliver, and grow effective partnerships across your value chain."
- Added detailed 3-step process content:
  - **Step 1: Build the alliance** - Create shared understanding, alignment, and commitment across partners
  - **Step 2: Implement and deliver** - Turn shared intent into visible progress and measurable outcomes (includes bullet list of Success Alliance Map elements)
  - **Step 3: Continue to innovate** - Extend value and innovation across your broader ecosystem

#### New "Getting started" Section
- Created separate section with title "Getting started" in yellow (#EBCA52)
- Three tiles with updated content:
  1. **Clarify the opportunity** - "We start with a conversation to understand your objectives and identify the partners across your ecosystem who can create the greatest value."
  2. **Design & facilitate the alliance** - "We bring these partners together in a structured, collaborative workshop to build a shared Success Alliance and agree on how value will be delivered."
  3. **Deliver exceptional value** - "With clear objectives and shared commitment, partners move into delivery — implementing innovative offers that create meaningful value for customers and all parties involved."
- Tiles use `bg-secondary` background with rounded corners
- Yellow "Let's connect" button at bottom

#### Icon Styling
- Updated icon filters to darker gold color for icons 1 and 3:
  - Filter: `brightness(0) saturate(100%) invert(73%) sepia(45%) saturate(600%) hue-rotate(12deg) brightness(92%) contrast(88%)`
- Slightly lighter gold for icon 2:
  - Filter: `brightness(0) saturate(100%) invert(78%) sepia(40%) saturate(700%) hue-rotate(10deg) brightness(95%) contrast(90%)`

#### Section Layout
- "How it works" section: `bg-secondary` background with detailed step content
- "Getting started" section: `bg-background` (white) with three beige tiles
- Clear separation between process explanation and call-to-action

#### HowItWorksTabs Component
- Interactive 3-tab component showing the Success Alliance process
- Tab buttons with yellow (#EBCA52) active state and increased padding (`px-10 py-3`)
- Each tab displays circular image with descriptive content

**Tab 1: Build the alliance**
- Image: `/Image_dump/workshop.jpg`
- Subhead: "Align partners around shared understanding and commitment."
- Body copy about bringing partners together through structured dialogue

**Tab 2: Implement and deliver**
- Image: `/Image_dump/working.jpg`
- Subhead: "Turn shared intent into visible progress and measurable outcomes."
- Body copy about shared online platform, Success Alliance Map with outcomes/investments/milestones/90-day priorities
- Updated ending: "ensuring the alliance remains relevant and on track."

**Tab 3: Continue to innovate**
- Image: `/Image_dump/Meeting.jpg`
- Subhead: "Extend value and innovation across your broader ecosystem."
- Body copy about embedding innovation and extending successful models

### AI Tools Page Updates (January 19, 2026)
Created and styled the AI Tools page with three strategic AI tool tiles featuring custom logos, images, and brand colors.

#### Page Structure
- **Route**: `/ai-tools`
- **File**: `src/pages/AITools.tsx`
- Hero section with parallax background effect
- Three circular badges showing progression: Engage → Connect → Execute
- Three detailed tool tiles with 32%/68% image-to-content split
- Quote section with "Let's connect" button

#### Three AI Tools
1. **Engage Plus** (#60c0c7 - lighter teal)
   - Tagline: "Open, AI-powered engagement that reveals what will resonate"
   - Logo: `/Image_dump/EngagePlus_LogoW.png`
   - Image: `/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png`
   - Purpose/Focus/Outcome format with bold labels

2. **Future Connect** (#3bafb7 - medium teal)
   - Tagline: "Conversational strategy that shapes future direction"
   - Logo: `/Image_dump/FutureConnect_LogoW2.png`
   - Image: `/Image_dump/ChatGPT Image Jan 19, 2026 at 01_11_57 PM.png`
   - Purpose/Focus/Outcome format with bold labels

3. **Execution Edge** (#1e9aa7 - darker teal)
   - Tagline: "Focused execution that turns strategy into impact"
   - Logo: `/Image_dump/ExecutionEdge_LogoW.png`
   - Image: `/Image_dump/ChatGPT Image Jan 19, 2026 at 04_11_20 PM.png` (positioned right center)
   - Purpose/Focus/Outcome format with bold labels

#### Circular Progress Badges
- Three circular badges with gradient teal colors (#60c0c7, #3bafb7, #1e9aa7)
- Labels: "Engage - Reveal what resonates", "Connect - Align on direction", "Execute - Deliver on impact"
- Arrow icons between badges (rotating 90° on mobile)
- Responsive sizing: 115px mobile, 143px desktop

#### Tile Styling
- Background: `bg-secondary` (sand color)
- Layout: 32% image column, 68% text content column
- Image section: Rounded corners with dark blue gradient overlay
- Logo: Centered, 52% width, overlaid on gradient
- Hover effects: `hover:shadow-xl hover:scale-105`
- "Find out how" links with arrow animation matching brand colors

#### Content Formatting
- Tool descriptions with **bold labels** for Purpose/Focus/Outcome
- Spacing: Single line breaks between sections, double space before Purpose
- Line breaks filtered and rendered with `space-y-4` for visual separation
- Bold text parsing using regex: `/(\*\*.*?\*\*)/`

#### Typography
- Hero heading: "AI Tools" - `text-3xl md:text-4xl lg:text-5xl`
- Section heading: "Our strategic AI Tools" - `text-2xl md:text-3xl`
- Taglines: `text-xl font-semibold` with brand colors
- Body text: `text-sm text-muted-foreground` with `leading-relaxed`

#### Quote Section
- Text: "Purpose-built through ongoing research and real-world application..."
- Consistent "Let's connect" button with hero variant
- Styling: `font-heading font-semibold text-lg text-muted-foreground`

#### Navigation
- Added "AI Tools" link to Footer navigation
- Route configured in App.tsx: `/ai-tools`

## Previous Changes

### Project Setup (December 5, 2025)
- Initialized Git repository
- Created initial commit with complete website codebase
- Created public GitHub repository: https://github.com/ShonaWilson/waterfield-NEW
- Pushed all code to GitHub
- Set up local development environment with Node.js v25.2.1 and npm v11.6.2
- Development server running at http://localhost:8080/

## Previous Changes

### Contact Page (/src/pages/Contact.tsx)

#### Header Styling
- Updated "How can we help you?" header to match other page headers (Strategic services, Engagement process)
- Moved header to separate hero section with teal background (`bg-primary`)
- Changed text color to white (`text-primary-foreground`)
- Maintains consistent styling: `text-3xl md:text-4xl lg:text-5xl font-semibold`

#### Layout Adjustments
- Changed form layout from equal 50/50 split to 32%/68% split (matching "The Waterfield way" section)
- Left column (32%): Contact information and description
- Right column (68%): Contact form (larger emphasis on form)
- Reduced top margin from `mb-12` to `mb-8` to raise form higher

#### Form Improvements
- Updated form fields layout:
  - First Name and Last Name: Side by side on same row
  - Email and Phone: Side by side on same row (new)
  - Company: Full width
  - Message: Full width textarea

#### Quote Section
- Added background image with overlay effect
- Image: `/27cf80_aa64b11e0bc545149149bb2470f00c16~mv2.png.avif`
- Positioned at 28% vertical alignment for optimal composition
- Applied gradient overlay matching homepage style
- Increased section height by 20%
- Removed Location and privacy statement sections

### Other Updates

#### Homepage - ClaritySection.tsx
- Adjusted icon sizes for "Shaping a shared destination", "Aligning on the best path forward", and "Delivering adaptive action plans"
- Final sizes: w-28 h-28 for first and third icons, w-32 h-32 for middle icon
- Increased container height to h-40 for better icon display

#### ServicesPreview.tsx
- Maintained colored "Discover" links/arrows matching service brand colors
- Kept bg-secondary tiles with proper spacing
- Updated first paragraph color from text-muted-foreground to text-foreground

#### Favicon
- Updated favicon to match waterfield.com.au branding
- Added proper favicon.png (192x192) with Apple touch icon support

#### BuildCapacity.tsx
- Added hover effects to Build capacity tiles
- Applied hover:scale-105 transform on hover
- Added bg-black/10 overlay effect matching Services tiles
- Consistent transition timing (duration-300)
- Updated hover color to bg-primary-light (lighter teal) matching buttons
- Updated first paragraph color from text-muted-foreground to text-foreground

#### GettingStarted.tsx
- Removed rollover states from "Getting started is simple" tiles
- Removed hover:shadow-lg effect
- Removed transition-all duration-300 for static appearance

#### ClaritySection.tsx
- Removed rollover states from "Clarity that drives action" tiles
- Removed hover:shadow-lg effect
- Removed transition-all duration-300 and group classes for static appearance
- Added hover effects to "Let's connect" button (hover:shadow-xl, hover:scale-105)
- Updated first paragraph color from text-muted-foreground to text-foreground

#### "Let's connect" Buttons (Global)
- Applied consistent hover effects matching Services tiles across all instances
- Added hover:shadow-xl, hover:scale-105, and transition-all duration-300
- Standardized all buttons to use "hero" variant for consistent color behavior
- Base: bg-primary (teal), Hover: bg-primary-light (lighter teal)
- Updated in: Hero.tsx, ClaritySection.tsx, GettingStarted.tsx, FromUncertainty.tsx, About.tsx, Services.tsx

#### Button Component (button.tsx)
- Removed upward translate effect from hero variant (removed transform hover:-translate-y-0.5)
- Hero variant now uses consistent hover behavior without vertical movement

#### Form Components (input.tsx, textarea.tsx)
- Updated focus state to use ring-primary-light (lighter teal outline)
- Removed ring offset for direct outline on field border
- Changed ring width to 1px (ring-1) for thinner outline
- Added subtle glow effect using shadow-[0_0_8px_rgba(40,141,176,0.3)]
- Removed hover state completely for cleaner interaction
- Focus state shows both outline and glow for clear active indication
- Removed yellow autofill background with custom webkit-autofill styling
- Applied to all Input and Textarea components across the site

#### About Page Updates
- Removed "Let's work together" CTA section from bottom of page
- Renamed first "Our Values" section to "Core Values"
- Renamed "Why Choose Waterfield" section to "Our Values"
- Added descriptive text: "Waterfield's values express what drives us, how we deliver work and maintain relationships. We are innovative, committed to making a difference, and think beyond the norm."
- Replaced 5 striped items with 6 tiles styled like homepage "Shaping a shared destination" tiles
- Our Values section has bg-secondary background (matching Core Values)
- Tiles are white (bg-background) with images, titles, and descriptions
- Six values: "Value adding", "Open & collaborative", "Relationship building", "Unique & innovative", "Appreciation of the whole", and "Long-term focus"
- Grid layout: 3 columns on large screens, 2 columns on medium, 1 column on mobile
- Added "Let's connect" button at bottom of Our Values section linking to Contact page

#### Contact Page Updates
- Re-added "How can we help you?" hero section with background image
- Uses same image and color overlay as quote section
- Image: /27cf80_aa64b11e0bc545149149bb2470f00c16~mv2.png.avif
- Gradient overlay: rgba(43, 57, 79, 0.9-0.95)
- Positioned at 28% vertical alignment
- Removed quote section from bottom of page
- Styled opening sentence "Thank you for your interest in Waterfield." as heading
- Uses font-heading, text-xl, font-semibold, text-primary styling matching other sections
- Updated Send button to use hero variant matching "Let's connect" buttons
- Applied consistent hover effects (shadow-xl, scale-105) to Send button

#### Body Copy Typography (December 2, 2025)
- Updated ALL body copy (not in tiles) to use text-muted-foreground for consistent visual hierarchy
- Applied to all regular paragraphs across the site for lighter, more readable body text
- Headings styled with font-heading, text-xl, font-semibold, text-primary remain unchanged
- Tile descriptions maintain text-muted-foreground as before
- Updated sections:
  - FromUncertainty.tsx: First paragraph and summary paragraph
  - ClaritySection.tsx: First paragraph
  - ServicesPreview.tsx: First paragraph
  - BuildCapacity.tsx: First paragraph

#### About Page Banner Updates (December 2, 2025)
- Replaced "Our Approach" section with teal banner section (bg-primary)
- Banner uses 32%/68% column split matching other sections
- Left column features "30 years designing futures" text lockup
- Right column contains body text about facilitation approach
- Updated Our Values tile descriptions with specific content for all 6 values
- Copied custom PNG icons from Downloads to public folder (valueadding.png, collaborative.png, relationshipBuilding.png, Unique.png, whole.png, Longterm.png)
- Updated all Our Values tiles to use custom icons

##### Banner Text Styling
- "30 years" uses color rgb(175, 171, 137) matching header tagline
- Desktop layout: "30" (text-9xl), "years" (text-6xl), "designing futures" (text-2xl) stacked vertically
- Tight spacing between "30" and "years" using -mt-4 negative margin with leading-none
- Text sizes locked at fixed values (no responsive scaling)
- Only layout changes between mobile and desktop, not text size

##### Banner Mobile Layout
- "30 years" displayed on same line, both at text-6xl size
- "designing futures" sits below on single line (text-2xl)
- Uses flex layout with items-baseline alignment
- Centered text alignment throughout

##### Banner Desktop Layout
- Vertical stack: "30" above "years" above "designing futures"
- "30": text-9xl
- "years": text-6xl with -mt-4 for tight spacing
- "designing futures": text-2xl on single line
- All text remains centered
- Right column text is center-aligned

#### About Page Our Principles Section Updates (December 2, 2025)
- Changed from 3-column grid layout to full-width stacked rows
- Each principle tile now spans full width with 25%/75% internal split
- Added 3 principle tiles with custom icons from Downloads:
  - Outcome thinking (outcome.png)
  - Collaboration (collaboration.png)
  - Building capacity (capacity.png)
- Copied custom PNG icons to public folder

##### Icon and Title Layout
- Mobile: Icon positioned to left of title (flex-row), icon size w-12 h-12 (3rem)
- Desktop: Icon centered above title (flex-col), icon size w-[5.6rem] h-[5.6rem]
- Icon/title section takes 25% width on desktop
- Title text-left on mobile, text-center on desktop

##### Content Styling
- First paragraph in each tile uses "circular badge" style from homepage
- Styling: font-heading font-medium text-sm md:text-base text-foreground
- Matches "Unfocused direction" circular badge text style
- Supporting paragraphs use text-muted-foreground text-sm
- Lists (bullets and numbers) maintain text-muted-foreground text-sm

##### Content Structure
- Collaboration tile includes bulleted list of 4 benefits
- Building capacity tile includes numbered list of 3 methods
- Each tile has multiple paragraphs with space-y-3 spacing

#### CTA and Link Text Styling Updates (December 2, 2025)
- Applied "circular badge" text style to all CTAs and arrow links sitewide
- Style: font-heading font-medium text-sm md:text-base
- Updated components:

##### GettingStarted.tsx CTAs
- "Let's have a chat."
- "Shape your direction."
- "Bring your strategy to life."

##### ServicesPreview.tsx Links
- All "Discover" links with arrows (4 service tiles)
- Maintains text-white color on colored backgrounds
- Content center-aligned

##### BuildCapacity.tsx Links
- All "Discover" links with arrows (3 pathway tiles)
- Maintains text-primary-foreground color on teal backgrounds
- Content center-aligned

##### About.tsx Links
- "LinkedIn profile" links for Kevin and Aidan Nuttall
- Maintains text-primary color on light backgrounds

#### Center Alignment Updates (December 2, 2025)
- About page "30 years" section: Right column text center-aligned
- ServicesPreview tiles: All content center-aligned with centered logos
- BuildCapacity tiles: All content center-aligned

#### Global Typography - Widow Prevention (December 2, 2025)
- Added text-wrap: pretty to global CSS (index.css)
- Applies to: p, h1, h2, h3, h4, h5, h6, li, span
- Prevents widows (single words on their own line)
- Browser support: Chrome/Edge 117+, Safari 17.5+, graceful fallback for others

#### Articles Page - Article Images (December 2, 2025)
- Added 17 article images to populate article tile placeholders
- Copied numbered images (1-17) from Downloads to public/articles/ directory
- Updated articles array with image property for each article pointing to corresponding numbered image
- Replaced circular numbered placeholders with actual article images
- Images use object-cover to fill h-48 containers consistently
- Maintained all existing hover effects and tile styling
- Image formats: Mix of .jpeg.avif, .jpg.avif, and .png.avif files
- All 17 article tiles now display unique images instead of generic numbered badges

#### Services Page - "How We Deliver Impact" Section Updates (December 2, 2025)
- Updated service names and taglines in "How we deliver impact" tiles:
  - RapidConsensus → OpenInnovation with tagline: "Ignite collaborative thinking to transform ideas into innovative solutions."
  - Collaborative Intelligence → Custom Facilitation with tagline: "Unite diverse stakeholders to rapidly turn complexity into clear, aligned solutions."
  - StrategyConnect tagline: "Create & execute a clear Strategy Map for focused outcomes"
  - SuccessAlliance tagline: "Engage your partners for added value & shared success"
- Replaced lorem ipsum placeholder with actual StrategyConnect description
- Added paragraph spacing to StrategyConnect description using \n\n line breaks
- Added whitespace-pre-line class to description paragraphs to preserve line breaks
- Removed bullet point features lists from all 4 tiles
- Added animated "Find out how" links with ArrowRight icons below descriptions
- Links use same animation as homepage "Discover" links (group-hover:gap-2 transition)
- Styling: font-heading font-medium text-sm md:text-base text-primary
- Removed icon boxes next to service titles
- Titles now display as clean h3 headings without accompanying icons

#### Homepage Hero Section Updates (December 2, 2025)
- Removed all fade-up animations from hero section on page load
- Removed animate-fade-up from h1 heading
- Removed animate-fade-up delay-100 from subtitle paragraph
- Removed animate-fade-up delay-200 from button container
- Hero content now appears immediately without animation effects

#### Article Page Template Updates (December 3, 2025)
- Created article page template with hero section, content area, and "Continue Reading" section
- Added date formatting (Mmm DD, YYYY format) and reading time calculation (200 words/min)
- Date/time metadata styled with `font-heading font-medium text-base text-primary`
- Hero section uses same padding as other pages (`py-20 md:py-28`)

##### Article Content Styling
- First paragraph: `font-heading text-2xl md:text-3xl font-semibold text-foreground`
- H2/H3 headers: `font-heading text-xl font-semibold text-primary` (matching "Our specialists include;" style)
- "Reference" H2: `font-heading font-semibold text-lg text-foreground` (matching "The result? Missed" style from homepage)
- Body paragraphs: `text-muted-foreground leading-relaxed`
- Reference section paragraphs: `text-sm text-muted-foreground` (smaller size for reduced prominence)
- Bullet points: Dark blue circles (`bg-foreground`) with `text-muted-foreground` text
- Blockquotes: Dark blue left border (`border-foreground`), large italic text (`text-lg md:text-xl lg:text-2xl`), no background
- Images: Full width with rounded corners (`rounded-lg`) and vertical spacing (`my-8`)
- Strong text: `font-semibold text-foreground`
- Links: Teal color (`text-primary-light`) matching nav rollover, hover to darker teal (`text-primary`), underlined, opens in new tab

##### Back to Articles Link
- Styled like "Discover" links: `font-heading font-medium text-sm md:text-base text-primary`
- Hover color matches nav: `hover:text-primary-light`
- Arrow animates left on hover: `group-hover:-translate-x-1`

##### Continue Reading Section
- Shows 3 randomly selected articles (excluding current) using Fisher-Yates shuffle
- Random selection changes on every page load
- Tiles use equal height layout with flex containers
- Structure matches main Articles page styling

##### Article Tiles Layout
- Grid uses `auto-rows-fr` for equal row heights
- Each tile: `flex flex-col h-full` to fill grid cell
- Image section: Fixed height with `flex-shrink-0`
- Content section: `flex flex-col flex-1` to expand
- Title: `flex-1 text-center` to push button to bottom
- "Read article" link: Centered with flex container

#### Articles Page Layout Updates (December 3, 2025)
- All article tiles now have equal heights in each row
- Applied same flex layout as Continue Reading section
- Titles and "Read article" links properly centered
- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop

#### Article Content Additions (December 3, 2025)
- Added images to multiple articles:
  - "Collaboration + AI": `/ai-collaboration.jpg.avif` above "Elevating Strategic Capabilities"
  - "60/40 Ratio": 2 images above "Applying the 60/40 Ratio" and "Ready to Unlock Your Strategy"
  - "Interactive Futures": 2 images above Waterfield paragraph and "Positive Impacts"
  - "Columbo Method": 2 images above "Why It Works:" and "From Subtle Clues"
  - "GPT thinking partner": `/gpt-thinking-partner.png.avif` above "Effective Thinking Partnerships"
  - "Inside-Out Planning": 2 images after diagram description and before Conclusion
- Replaced content for "GPT as thinking partner" article from PDF
  - Updated with full content about LLMs, thinking partnerships, and efficiency
  - Made sentence bold: "By harnessing their computational prowess, businesses and individuals can achieve more in less time, propelling progress across a multitude of industries."
- Replaced content for "Inside-Out Planning" article from PDF
  - Updated with Outside-in logic and Progress over precision sections
  - Made "How anarchy works" italic in Reference section
  - Made URL clickable with teal color matching nav rollovers: `[https://www.wired.com/1995/10/ietf/](https://www.wired.com/1995/10/ietf/)`
  - Reference section text uses smaller size (`text-sm`) for reduced visual prominence

#### Social Sharing Implementation (December 3, 2025)
- Implemented prerendering solution for article pages to enable proper social media sharing
- Created custom build-time prerendering script (`scripts/prerender.js`)
- Generates static HTML files for all article pages with article-specific Open Graph and Twitter Card meta tags
- Each article page gets its own directory: `/articles/[slug]/index.html`

##### Implementation Details
- **Prerender Script**: Node.js script that runs after Vite build
  - Reads the base `dist/index.html` file
  - Replaces generic meta tags with article-specific content (title, description, image, URL)
  - Creates directory structure for each article
  - Generates 6 pre-rendered HTML files (one per article)

##### Meta Tags Injected
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`
- Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Standard meta: `description`, page `title`

##### Build Process
- Updated build script in package.json: `vite build && node scripts/prerender.js`
- Build output shows: "✓ Prerendered 6 article pages"
- Pre-rendered HTML files contain proper meta tags for social crawlers

##### Article Data in Script
- Script includes article metadata array with slug, title, excerpt, and image
- Matches article data from `src/data/articles.ts`
- Uses production URL: `https://waterfield.com.au`

##### Social Sharing Behavior
- **X/Twitter**: Pre-populated with article title and URL via share URL parameters
- **Facebook**: Reads Open Graph tags from pre-rendered HTML for rich previews
- **LinkedIn**: Reads Open Graph tags from pre-rendered HTML for rich card display
- **User Experience**: No changes - React hydrates after initial HTML load for full SPA functionality

##### Technical Benefits
- Social media crawlers see meta tags in initial HTML (no JavaScript execution needed)
- Vercel serves pre-rendered HTML files for article URLs automatically
- Client-side routing and interactivity maintained after hydration
- No code restructuring required - works with existing Vite + React Router setup
- Build-time generation means no runtime performance impact

#### Homepage Typography Updates (December 3, 2025)
- Standardized all homepage section headings to cap at `md:text-3xl` (removed `lg:text-4xl`)
- Updated 6 homepage components for consistent heading sizing:
  - FromUncertainty.tsx: "From uncertainty to clarity"
  - BuildCapacity.tsx: "Build capacity"
  - ServicesPreview.tsx: "Services for outcomes"
  - GettingStarted.tsx: "Getting started is simple"
  - ClaritySection.tsx: "Clarity that drives action"
  - WaterfieldWay.tsx: "The Waterfield way"
- All headings now use: `text-2xl md:text-3xl font-semibold text-primary`
- Ensures consistent visual hierarchy across homepage sections

#### WaterfieldWay Spacing Update (December 3, 2025)
- Reduced spacing between "The Waterfield way" heading and content below
- Changed margin-bottom from `mb-4` to `mb-2` on heading (WaterfieldWay.tsx:6)
- Creates tighter visual grouping between heading and descriptive text

#### Services Page Restructure (December 3, 2025)
- Changed main section title from "Services for outcomes" to "What we do"
- Updated description paragraph to focus on guiding organisations to uncover strategic insights
- Removed all 4 colored service tiles:
  - StrategyConnect (orange #F8983C)
  - SuccessAlliance (yellow #EBCA52)
  - RapidConsensus (teal #268DB0)
  - Collaborative Intelligence (purple #9E5790)
- Replaced with 2-column grid layout featuring two simple tiles:
  - "How we work": Describes collaborative approach and AI integration
  - "The outcome": Explains impact from internal clarity to external results
- New tiles use `bg-secondary` styling with rounded corners and padding
- Maintains consistent design language with other sections
- "Services for outcomes" heading on Services page now caps at `md:text-3xl` (removed `lg:text-4xl`)

#### Homepage Services Section Updates (December 3, 2025)
- Removed original colored service tiles from homepage "Services for outcomes" section
- Added 4 detailed service tiles with inset images below section heading:
  - StrategyConnect (orange #F8983C)
  - SuccessAlliance (yellow #EBCA52)
  - OpenInnovation (blue #268DB0)
  - Custom Facilitation (purple #9E5790)

##### Detailed Tile Styling
- Background: `bg-secondary` (beige) matching "Getting started is simple" tiles
- Layout: Responsive grid (1 column mobile, 2 columns tablet, 4 columns desktop)
- Images: Inset with rounded corners (`rounded-lg`) and padding for "Kevin Nuttall tile" style
- Images use dark blue gradient overlay with centered service logos
- Logo sizes: 45% width for SuccessAlliance/Custom Facilitation, 65% for others
- Hover effects: `hover:shadow-xl hover:scale-105` matching other clickable tiles

##### Text Styling
- Tagline: `text-muted-foreground text-sm` matching "Getting started" description text
- "Discover" links: Colored with brand colors (orange, yellow, blue, purple)
- "Discover" links styled as: `font-heading font-medium text-sm md:text-base`
- "Discover" links anchored to bottom using flexbox with `flex-1` on tagline
- Arrow animates on hover: `group-hover:gap-2`

##### Layout Structure
- Outer Link: `flex flex-col` to enable vertical stacking
- Image container: `flex-shrink-0` to maintain aspect-video ratio
- Content area: `flex flex-col flex-1` to fill remaining space
- Tagline: `flex-1` to push "Discover" link to bottom
- All tiles maintain equal heights with "Discover" links aligned

#### Services Page "How We Deliver Impact" Updates (December 3, 2025)
- Updated service taglines to match homepage tiles
- Changed layout from 2x2 grid to vertical stacked horizontal strips
- Each strip uses 32% image / 68% content split
- Applied brand colors (orange, yellow, blue, purple) to taglines and "Find out how" links
- Increased logo sizes in image overlays (45% and 65% width)
- Removed first Lorem ipsum paragraph from OpenInnovation description
- Images span full height of tiles using `md:h-full min-h-full`
- "Find out how" links anchored to bottom with flexbox
- All tiles fully clickable as Link components
- Maintained hover effects: `hover:shadow-xl hover:scale-105`

#### Case Study Content Updates (December 4, 2025)
- Removed RapidConsensus dedicated page
- OpenInnovation remains as service tile with hash anchor `/services#open-innovation`
- Updated case study content from PDF files for 4 case studies:

##### Victorian Comprehensive Cancer Centre
- Changed title from "Uniting for cancer control" to "Integrated cancer care"
- Updated excerpt to focus on facilitation process
- Replaced content with PDF content about $1.0 Billion cancer centre alliance
- Background mentions all participating organizations (Peter MacCallum, Melbourne Health, University of Melbourne, etc.)
- Simplified Process section about independent facilitation and custom alliance development
- Updated Outcome section with funding details and VCCC alliance description
- Quote from Dr Amanda Caples (Victorian Lead Scientist, Victorian Government)
- Changed header background image to `/case-studies/image-51.png`

##### CareerTrackers
- Changed title from "Building trust for sustainable impact" to "10x10 Corporate partners"
- Updated excerpt about innovative funding model
- Replaced content with PDF content about 10-year partnership program
- Split opening paragraph into 2 paragraphs for better readability
- Process section focuses on building trust and overcoming reliance on government funding
- Outcome section describes 10x10 commitment from companies
- Quote from Michael Combs (CEO, CareerTrackers)
- Changed header background image to `/case-studies/photo-1517048676732-d65bc937f952.png`

##### Australian Publishers Association
- Changed title from "Defining the book of the future" to "New standards for accessibility"
- Updated excerpt about Marrakesh Treaty implementation
- Replaced content with PDF content about collaborative forums
- Background about Marrakesh Treaty and diverse stakeholder forums
- Process section about facilitation approach and gaining consensus
- Outcome section about plain English guide and piloting 10 titles
- Quote from Sarah Runcie (Strategy and Policy, Australian Publishers Association)
- Changed header background image to `/case-studies/collaborativeintelligence-edited.png`

##### Green Building Council of Australia
- Changed title from "Building consensus for sustainable buildings" to "Green star communities"
- Updated excerpt about National Framework for sustainability
- Replaced content with PDF content about government land organizations framework
- Background about national uniform guide for sustainable communities
- Process section about outcomes-driven workshop with 45 individuals
- Outcome section about first national agreement between 8 agencies
- Quote from Romilly Madew (Chief Executive, Green Building Council Australia)
- Changed header background image to `/case-studies/image-82.png`

##### Technical Implementation
- Copied 4 new header images from Downloads to `/public/case-studies/`
- Updated image paths in `/src/data/caseStudies.ts`
- All case studies maintain consistent hero section structure with parallax background images
- Images use dark blue gradient overlay (`rgba(43, 57, 79, 0.85-0.95)`)

#### Accessibility (A11y) Review (December 5, 2025)
Conducted comprehensive accessibility audit against WCAG 2.1 standards. Identified critical issues and recommendations across multiple categories.

##### Critical Issues Identified

**Skip Link Missing:**
- No "Skip to main content" link for keyboard users
- Keyboard users must tab through entire navigation on every page
- Recommendation: Add skip link as first focusable element with sr-only class that becomes visible on focus

**Heading Hierarchy Issues:**
- About page (About.tsx:131, 158, 192): Jumps from h2 to h4, skipping h3 level
- Principle headings should be h3 instead of h4
- Services page may have similar hierarchy gaps (lines 158, 215)

**Image Alt Text Issues:**
- Multiple decorative background images have descriptive alt text but should use alt="" (Hero.tsx:13-20, FinalQuote.tsx:6-11, OurClients.tsx:236-240)
- Generic alt text: Client logos all use "Client logo" instead of specific company names (StrategyConnect.tsx:222-247)
- Team photos all use generic "Team photo" instead of descriptive alternatives (About.tsx:334-375)

**Motion Sensitivity:**
- Parallax effects across multiple pages (Hero, About, Services, Process, Articles) don't respect prefers-reduced-motion
- useParallax hook needs to check window.matchMedia('(prefers-reduced-motion: reduce)') and disable effects accordingly

##### High Priority Issues

**Interactive Element Context:**
- "Discover" links in service tiles (ServicesPreview.tsx:84-125, BuildCapacity.tsx:34-52) lack context
- Screen readers only hear "Discover" without service name
- Recommendation: Add aria-label="Discover [ServiceName] service" to each link

**Color Contrast Concerns:**
- SuccessAlliance yellow (#EBCA52) on light backgrounds likely fails WCAG AA (Process.tsx:135)
- Focus ring uses ring-primary-light which needs 3:1 contrast verification
- text-muted-foreground needs verification across all background colors

**Form Accessibility:**
- Required fields show visual asterisk but missing aria-required="true" attributes (Contact.tsx:111-198)
- No inline error messages with aria-describedby for validation failures
- Relies on browser default validation only

**Navigation Landmarks:**
- Multiple nav elements without aria-label to distinguish them
- Recommendation: Add "Primary navigation", "Mobile navigation", "Footer navigation" labels

##### Good Practices Found

**Semantic HTML:**
- Proper landmark structure with header, main, footer (Layout.tsx:10-17) ✅
- nav elements for navigation menus (Header.tsx:37, 70) ✅
- Correct heading hierarchy on most pages (h1 → h2 → h3 progression) ✅
- article elements for article content (Article.tsx:325) ✅

**Form Implementation:**
- All inputs have associated Label components with htmlFor attributes ✅
- Proper input types (type="email", type="tel") ✅
- Native HTML5 validation with required attribute ✅
- Submit button disabled state reflects form validity ✅

**ARIA Usage:**
- Social sharing buttons have proper aria-label (Article.tsx:342-395) ✅
- Mobile menu toggle has aria-label="Toggle menu" (Header.tsx:55-63) ✅
- Testimonial carousel dots have descriptive labels (OurClients.tsx:276-286) ✅
- Logo images use alt="Waterfield" (Header.tsx:28, Footer.tsx:13) ✅

**Focus States:**
- Custom focus styles implemented with ring-primary-light outline and glow (input.tsx, textarea.tsx) ✅
- Button hover/focus states defined with shadow and scale effects ✅

**Meta and Structure:**
- Language properly set with lang="en" (index.html:2) ✅
- Dynamic page titles implemented correctly across all pages ✅
- Open Graph and Twitter Card tags properly configured ✅
- YouTube iframe has title attribute (StrategyConnect.tsx:589-595) ✅

##### Priority Recommendations

**Critical (Fix Immediately):**
1. Add skip link for keyboard navigation
2. Fix heading hierarchy on About page (h4 → h3)
3. Add unique, descriptive alt text to client logos and team photos
4. Use alt="" for decorative background images

**High Priority:**
5. Add aria-labels to "Discover" links for context
6. Add motion preference detection to parallax effects
7. Test and fix color contrast issues (especially yellow)
8. Add aria-required to required form fields
9. Verify focus indicator contrast meets 3:1 ratio

**Medium Priority:**
10. Add navigation landmark labels (aria-label on nav)
11. Add external link indicators for new tab links
12. Ensure YouTube video has captions enabled
13. Systematic keyboard navigation testing

**Low Priority (Enhancement):**
14. Consider breadcrumb navigation for deep pages
15. Add aria-describedby for form help text
16. Consider aria-live regions for dynamic updates

##### Testing Recommendations

**Manual Testing:**
- Keyboard navigation through entire site (Tab, Shift+Tab, Enter, Space, Escape)
- Screen reader testing with NVDA (Windows) or VoiceOver (Mac)
- Contrast testing with WebAIM Contrast Checker
- Zoom testing at 200% level

**Automated Testing:**
- axe DevTools browser extension
- Lighthouse accessibility audit in Chrome DevTools
- WAVE browser extension
- Pa11y for CI/CD integration

##### Next Steps
Prioritize fixing critical issues first (skip link, heading hierarchy, alt text, motion preferences), followed by high-priority items (ARIA labels, color contrast, form attributes). Conduct manual keyboard and screen reader testing after fixes are implemented.

#### Custom Facilitation Page (December 12, 2025)
Created a new dedicated service page for Custom Facilitation, mirroring the layout and structure of the Success Alliance page.

##### Page Structure
- **Route**: `/services/customfacilitation` with redirect from `/customfacilitation`
- **File**: `src/pages/CustomFacilitation.tsx`
- **Brand Color**: Purple (#9E5790) used consistently throughout
- **Layout**: Mirrors Success Alliance page structure

##### Hero Section
- Parallax background effect with gradient overlay
- Background image: `/service-4.jpeg` with 28% vertical positioning
- Dark blue gradient overlay: `rgba(43, 57, 79, 0.9-0.95)`
- Logo: `/J_CF.png` (Custom Facilitation logo)
- Tagline: "Unite diverse stakeholders to turn complexity into clear, aligned action"

##### Content Sections
1. **Shape Agreed Direction**
   - Purple heading (#9E5790)
   - Italicized subtitle: "We help organisations move from competing views to a clear, shared path forward"
   - Three paragraphs about complexity, collaboration, and strategic facilitation

2. **How We Add Value**
   - bg-secondary background
   - Four circular badges with purple background showing key benefits:
     - Creating strategic clarity
     - Aligning stakeholders on outcomes
     - Enabling confident decisions
     - Building momentum in large-scale work
   - Grid layout: 2x2 on mobile, 4 columns on desktop

3. **Our Approach**
   - bg-background
   - Italicized subtitle: "We shape the process, facilitate the dialogue, and ensure clear outcomes"
   - Four tiles with Lucide icons (Target, Lightbulb, Users):
     - Deep listening and context analysis
     - Strategic workshop design
     - Expert facilitation
     - Action clarity
   - bg-secondary tiles with purple icons

4. **Who We've Worked With**
   - bg-secondary background
   - Two-column bulleted lists of supported organizations
   - Second list showing facilitation progress areas
   - Client logo strip with 5 logos:
     - Barangaroo Delivery Authority
     - Rice Growers Association of Australia
     - VCCC (Comprehensive Cancer Research Centre)
     - AUSMASA
     - Australian Publishers Association

5. **Testimonial**
   - Parallax background image: `/image-81.jpeg`
   - Dark blue gradient overlay
   - Quote from Sarah Runcie (Strategy and Policy, Australian Publishers Association)
   - Quote about Marrakesh Treaty Forum success

6. **Delivering Impact**
   - bg-secondary background
   - Uses same sa-icon-1.png, sa-icon-2.png, sa-icon-3.png images from Success Alliance
   - Applied purple CSS filter to icons: `invert(44%) sepia(45%) saturate(629%) hue-rotate(258deg) brightness(91%) contrast(89%)`
   - Three tiles with icons, headings, and descriptions:
     - Unified direction across stakeholders
     - Clear priorities with agreed next steps
     - Shared ownership that drives committed action
   - Purple "Let's connect" button with hover effects

##### Navigation Updates
- Added route to App.tsx: `/services/customfacilitation`
- Added redirect: `/customfacilitation` → `/services/customfacilitation`
- Updated Services.tsx tile to link to `/services/customfacilitation`
- Updated ServicesPreview.tsx homepage tile to link to `/services/customfacilitation`

##### Styling Consistency
- Purple color (#9E5790) for all headings, icons, and accents
- Alternating section backgrounds (bg-background, bg-secondary)
- Same typography styles as Success Alliance
- Matching hover effects on "Let's connect" button (shadow-xl, scale-105)
- Purple hover color: #8B4D7F (darker purple)

##### Content Source
- All content sourced from "Custom facilitation.md" markdown file
- Maintains professional tone matching other service pages
- Focuses on complex multi-stakeholder facilitation and strategic alignment

#### Homepage Build Capacity Section Updates (January 18, 2026)
Updated the Build Capacity section on the homepage with new transparent geometric shapes and styling refinements.

##### Geometric Shape Updates
- **Box 1 (Think Strategically)**: Triangle shape
  - Made wider and less pointy: path adjusted to `M220 150 L0 20 L0 280 Z`
  - Positioned flush against left edge (`translate-x-0`)
  - Size: 300x300 SVG
  - Fills approximately half the box behind the text

- **Box 2 (Lead Collaboratively)**: Circle shape
  - Shifted left by 25% to hide left edge: `-translate-x-[25%]`
  - Size: 300x300 SVG with radius 150
  - Creates half-circle effect within the box

- **Box 3 (Leverage AI)**: Parallelogram shape (changed from octagon)
  - Shifted left by 40% so only right side is visible: `-translate-x-[40%]`
  - Enlarged by 20%: 336x336 SVG
  - Path: `M0 84 L252 0 L336 252 L84 336 Z`
  - Right edge visible, left edge hidden off-screen

##### Shape Styling
- All shapes use teal color (#268DB0) matching brand
- Opacity increased to 10% (`opacity-[0.10]`) for better visibility
- Hover effect: `group-hover:scale-110` for subtle enlargement
- Smooth transition: `transition-transform duration-300`
- Positioned behind text with `z-10` on content container

##### "Discover" Link Updates
- Changed color from teal (#268DB0) to `text-primary` class
- Matches "Partnering with Waterfield helps you:" title color in FromUncertainty section
- Maintains hover animation: `group-hover:gap-2`

#### Homepage FromUncertainty Section Updates (January 18, 2026)
Updated the circular badges under "Partnering with Waterfield helps you:" heading.

##### Circle Size Updates
- Increased all three circles by 10%
- Mobile width: Changed from `w-[105px]` to `w-[115px]`
- Desktop width: Changed from `w-[130px]` to `w-[143px]`
- Maintains aspect-square ratio

##### Typography Updates
- Reduced line spacing significantly for tighter text
- Changed from `leading-tight` (1.25) to `leading-[0.95]` (0.95)
- Applied to all three circles:
  - "Create clear strategic direction" (teal #268DB0)
  - "Align teams and drive action" (purple #9E5790)
  - "Build capability to adapt and lead" (yellow #EBCA52)
- Results in minimal gap between stacked words

##### Visual Impact
- Larger circles provide more prominence to the pathway progression
- Tighter line spacing allows more text to fit comfortably within circles
- Maintains hover shadow effect and transitions

#### Build Capacity Page Restructure (January 19, 2026)
Completely reorganized the Build Capacity page layout and content structure.

##### Hero Section Updates
- Changed background image from `/business-meeting-edited.jpg` to `/Image_dump/ChatGPT Image Jan 19, 2026 at 06_01_36 PM.png`
- Adjusted parallax scale from 1.2 to 1.1 for subtler effect
- Added `objectPosition: 'center 15%'` for better image framing

##### Service Tiles Section (New)
- Added three service tiles above the pathways section
- Background: `bg-secondary` (beige) with rounded corners
- Grid layout: 1 column mobile, 3 columns desktop
- Same styling as homepage service tiles with inset images
- Hover effects: `hover:shadow-xl hover:scale-105`

**Three Services:**
1. **StrategyConnect** (Orange #F8983C)
   - "Strategic Clarity"
   - Image: `/service-1.jpg`
   - Logo: `/strategyconnect_white.png.avif`
   - Links to `/services/strategyconnect`

2. **SuccessAlliance** (Yellow #EBCA52)
   - "Successful Alliances"
   - Image: `/service-2.jpg`
   - Logo: `/SuccessAlliance_logoDual.png`
   - Links to `/services/successalliance`

3. **OpenInnovation** (Blue #268DB0)
   - "Accelerated Innovation"
   - Image: `/service-3.jpg`
   - Logo: `/J_OI.png`
   - Links to `/services/openinnovation`

##### Pathways Section Restructure
- Removed colored tile boxes with geometric shapes
- Consolidated all three pathways into single beige box (`bg-secondary`)
- Each pathway has heading, description, and associated programs
- Programs displayed in 2-column grid on desktop
- Separated by border dividers (`border-b border-muted-foreground/20`)

**Layout Structure:**
- Pathway title: `font-heading text-xl font-semibold text-primary`
- Pathway description: `text-muted-foreground text-sm leading-relaxed`
- Program names: `font-heading text-base font-semibold text-foreground`
- Program descriptions: `text-muted-foreground text-sm`
- "Find out how" links: `text-primary` with arrow animation

##### Engage Plus Tool Section (New)
- Added dedicated Engage Plus AI tool tile at bottom
- Same 32%/68% layout as AI Tools page tiles
- Lighter teal color: #60c0c7
- Image: `/Image_dump/ChatGPT Image Jan 19, 2026 at 12_49_52 PM.png`
- Logo: `/Image_dump/EngagePlus_LogoW.png` (52% width, centered)
- Description includes Purpose/Focus/Outcome format with bold labels
- Bold text parsing using regex for **bold** markers
- "Find out how" link with arrow animation matching brand color
- Hover effects: `hover:shadow-xl hover:scale-105`

##### Spacing Adjustments
- Reduced section padding: `pt-2 md:pt-3 pb-6 md:pb-8` for service tiles
- Reduced section padding: `pt-2 md:pt-3 pb-12 md:pb-16` for pathways
- Creates tighter visual flow between sections
- Engage Plus tool added with `mt-8` spacing

##### Visual Improvements
- Cleaner, more organized layout with clear hierarchy
- Service tiles provide quick navigation to main offerings
- Single pathways box reduces visual clutter
- Engage Plus tool prominently featured as standalone element
- Consistent styling with homepage and AI Tools page

#### About Page Content Updates (January 19, 2026)
Updated multiple sections on the About page with refined copy and restructured layout.

##### "What we do" Section (New)
- Added new section below hero banner
- Combined with "Our principles" in single white background section
- Two-paragraph structure:
  - First paragraph: Bold subhead styling (`font-heading font-semibold text-lg text-foreground`)
  - Second paragraph: Body copy styling (`text-muted-foreground`)
- Content focuses on aligning leadership teams and navigating complexity
- Spacing: `mb-16` between "What we do" and "Our principles"

##### Our Principles Section Updates
- Maintained 3 core principles structure (Outcome thinking, Collaboration, Building capacity)
- Updated all principle tile backgrounds to beige (`bg-secondary`)
- Section background changed to white (`bg-background`) - combined with "What we do"

**Outcome thinking tile:**
- Updated heading: "We believe defining the preferred end state is the right starting point for action."
- Two supporting paragraphs about creating shared direction and enabling adaptation

**Collaboration tile:**
- Updated heading: "We believe humans are hardwired to collaborate. The right environment unlocks its full value."
- Removed bulleted list, replaced with two concise paragraphs
- Focus on motivation to act and creating meaningful outcomes

**Building capacity tile:**
- Updated heading: "We believe building capability within our clients ensures change is realised and sustained."
- Removed numbered list, replaced with two paragraphs
- Final sentence: "Waterfield builds capacity by enabling teams to think strategically, lead collaboratively, and leverage AI."

##### Our Team Section Updates
- Section background changed to beige (`bg-secondary`)
- Updated body copy to three paragraphs:
  - "Waterfield is a tight, high performing team with deep networks of specialists."
  - "We bring the right specialists together through a collaborative model designed to achieve the best outcomes. We work with corporations, not-for-profits, governments, and communities to deliver outstanding results."
  - "Driven by collaboration, our team solves complex challenges and delivers innovative, high-value solutions with proven impact."
- Both LinkedIn profile tiles changed to white backgrounds (`bg-background`)
- Removed "and Forecasters" from "Researchers and Forecasters" in specialists section

##### Section Background Pattern
- Hero banner: Teal with parallax image
- What we do & Our principles: White background with beige tiles
- Our Team: Beige background with white tiles
- 30 years banner: Teal background
- Our Values: Beige background with white tiles
- Creates clean alternating visual rhythm throughout page

## Summary
The Contact page features a visually appealing hero section with "How can we help you?" overlaid on a background image with a gradient overlay. The opening paragraph now emphasizes "Thank you for your interest in Waterfield." as a prominent heading. The form layout features better visual hierarchy with 32%/68% split. Form fields are better organized with email/phone on the same row for improved UX, and all form inputs now have a thin primary-light (lighter teal) outline with a subtle glow effect on focus only (no hover effects) for clear active indication. The Send button now matches all "Let's connect" buttons with consistent hero variant styling and hover effects. The quote section has been removed for a cleaner page layout. Services and Build capacity sections have consistent hover effects with scale transforms and subtle overlays, while Getting started and Clarity that drives action tiles remain static without hover states. All buttons across the website now have fully consistent styling with the hero variant (teal base, lighter teal hover) and matching hover effects (shadow-xl and scale-105) without vertical translation. All body copy (not in tiles) now uses text-muted-foreground for consistent, readable typography across the entire site. The About page now features a teal banner section with "30 years designing futures" text lockup that maintains fixed text sizing across all screen widths with only layout changes between mobile (horizontal: "30 years" inline, "designing futures" below) and desktop (vertical stack) views, and a full-width Our Principles section with responsive icon/title layouts. All CTAs and arrow links now use consistent "circular badge" text styling (font-heading font-medium text-sm md:text-base). Text-wrap: pretty has been applied globally to prevent widows across all text elements. The article page template now provides a complete reading experience with formatted content, date/time metadata, and randomized related articles. All article tiles across the site maintain equal heights for a polished, professional appearance. All case studies now feature updated content from PDF sources with authentic quotes and new hero background images. A comprehensive accessibility review has been completed with prioritized recommendations for WCAG 2.1 compliance.

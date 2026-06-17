AKARM


Quiet. Considered. Worn.



A premium unisex fashion brand homepage built as a portfolio project demonstrating Next.js 14, Sanity CMS integration, and design-forward frontend development.

Live Site: akarm.vercel.app


Stack


Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Inline styles with CSS variables (design token system)
CMS: Sanity v3
Fonts: Cormorant Garamond + Inter (via next/font)
Deployment: Vercel
Images: Unsplash (CDN)



Features


Fully responsive marketing homepage
Hero section with CMS-editable headline, tagline, and CTA
Product collection grid with image, name, price, and tag badges
Full-viewport campaign banner with CMS-editable content
Brand statement section
Multi-column footer
Sanity Studio integration — non-technical editors can update Hero and Campaign Banner content without touching code
Server-side data fetching via Next.js async server components



Project Structure

akarm/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with font variables
│   │   ├── page.tsx         # Homepage composition
│   │   └── globals.css      # CSS variables and base styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx         # CMS-connected
│   │   ├── Collection.tsx
│   │   ├── BrandStatement.tsx
│   │   ├── CampaignBanner.tsx  # CMS-connected
│   │   └── Footer.tsx
│   └── lib/
│       └── sanity.ts        # Sanity client configuration
└── sanity/
    └── schemaTypes/
        ├── hero.ts
        └── campaign.ts


Getting Started

bash# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET

# Run development server
npm run dev

# Run Sanity Studio (separate terminal)
cd sanity && npm run dev


Environment Variables

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production


Built By

Capricorn Hub — design-forward web platforms for modern brands.

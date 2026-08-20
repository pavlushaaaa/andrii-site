# Andrii Lisovyi — personal website

Editorial personal website concept based on the supplied brief and references.

## Run
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm start
```

## Content editing
- `data/content.ts` — experience, projects, work formats
- `app/page.tsx` — homepage section copy
- `public/images/andrii-hero.jpg` — main photo
- `app/globals.css` — design system

## Jeko
The CSS requests `Jeko` first, but no font file is bundled because Jeko requires a separate webfont license. Add your licensed WOFF2 files locally and an `@font-face` declaration in `app/globals.css` before production deployment.

## Missing before live deployment
- real contact email / booking URL
- LinkedIn / Telegram / Instagram URLs
- canonical production domain (currently `example.com` in sitemap)
- GA4 Measurement ID if analytics is wanted
- licensed Jeko webfont files

## Logos
Experience brand marks are fetched as live favicons from the public web based on their official domains. Replace with official brand SVG/PNG assets if you want full wordmarks.

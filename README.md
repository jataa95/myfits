# MyFits — website

Marketing site for **MyFits**, a clothing manufacturer and training studio in Apapa, Lagos
(TikTok [@my.fits1](https://www.tiktok.com/@my.fits1)).

Built with Next.js (App Router, static), React and Tailwind CSS v4.

## Conversion flow

Every call to action ends in WhatsApp (+234 906 379 4294) with a pre-filled message:

- Hero / header / floating button → "start production" chat
- Product cards → quote request for that product
- **Quote builder** (`#quote`) → collects item, quantity, finishing, timeline and opens a formatted WhatsApp message
- Training section → "next intake" chat

## Editing content

| What | Where |
| --- | --- |
| Phone number, TikTok, location, stats, domain | `src/lib/site.ts` |
| Product categories & finishes | `src/components/Production.tsx` |
| Videos, gallery, "produced for" brand list | `src/components/Work.tsx` |
| Training tracks | `src/components/Training.tsx` |
| FAQ | `src/components/Faq.tsx` |
| Images | `src/assets/work/` · videos in `public/videos/` |

Set `NEXT_PUBLIC_SITE_URL` to the live domain (used for SEO, sitemap and social cards).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Deploys as-is to Vercel (import the repo, no config needed).

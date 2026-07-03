# PKS Infratech — Homepage

Single-page responsive marketing homepage for **Pradeep Kumar Singh Infratech
Private Limited (PKS Infratech)**, an infrastructure development and advisory
firm.

Built with **Next.js (App Router)**, **React**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

Production build:

```bash
npm run build
npm start
```

## Structure

- `app/layout.js` — fonts (Inter + Barlow Condensed via `next/font`) and metadata
- `app/page.js` — assembles the page sections
- `components/Logo.jsx` — inline SVG brand mark + wordmark
- `components/Header.jsx` — sticky nav with responsive hamburger menu
- `components/Hero.jsx` — headline, subtext, and CTAs
- `components/ServiceCards.jsx` — four service cards with line-art icons
- `components/ImageBand.jsx` — full-width aerial-bridge banner
- `tailwind.config.js` — brand palette and font families

## Design tokens

| Token     | Value     | Use                              |
| --------- | --------- | -------------------------------- |
| `navy`    | `#0F1B33` | Headline text, dark accents      |
| `brand`   | `#1E4A9C` | Logo, links, buttons, icons      |
| `surface` | `#F7F8FA` | Light background                 |
| `bodygrey`| `#4B5563` | Body text                        |

## Notes

- The banner photo is an Unsplash remote image loaded client-side; it renders in
  a normal browser with internet access. Section copy (nav labels, headline,
  service cards) lives in small arrays/consts for easy editing.

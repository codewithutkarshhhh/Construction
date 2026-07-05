# PKS Infratech — Website

Multi-page responsive marketing website for **Pradeep Kumar Singh Infratech
Private Limited (PKS Infratech)**, an ISO 9001:2012 certified infrastructure
development and advisory firm.

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

## Pages

Each page is its own App Router route (separate file / URL), sharing a common
header and footer via `app/layout.js`.

| Route       | File                    | Content                                        |
| ----------- | ----------------------- | ---------------------------------------------- |
| `/`         | `app/page.js`           | Hero, intro, four pillars, why-choose, clients |
| `/about`    | `app/about/page.js`     | Who we are, mission, vision, values, leadership|
| `/services` | `app/services/page.js`  | Advisory services + heavy machinery on contract|
| `/clients`  | `app/clients/page.js`   | Client roster                                  |
| `/contact`  | `app/contact/page.js`   | Contact details + inquiry form                 |

## Structure

- `app/layout.js` — fonts (Switzer + Inter fallback), site-wide `Header`/`Footer`, metadata
- `components/Header.jsx` — sticky nav with active-route highlighting + mobile menu
- `components/Footer.jsx` — site-wide footer (links, contact, clients)
- `components/Logo.jsx` — inline SVG brand mark + wordmark
- `components/Hero.jsx` — home hero with 4K background and CTAs
- `components/PageHeader.jsx` — compact navy banner for interior pages
- `components/ServiceCards.jsx` — home "four pillars" cards
- `components/ServiceIcons.jsx` — shared line-art service/machinery icons
- `components/WhyChoose.jsx`, `IntroStrip.jsx`, `ClientLogos.jsx`, `CTABand.jsx` — home + shared sections
- `components/ContactForm.jsx` — client-side inquiry form (mailto submission)
- `components/ui.jsx` — shared buttons, icons, and eyebrow primitives
- `tailwind.config.js` — brand palette and font families

## Design tokens

| Token     | Value     | Use                              |
| --------- | --------- | -------------------------------- |
| `navy`    | `#0F1B33` | Headline text, dark accents      |
| `brand`   | `#1E4A9C` | Logo, links, buttons, icons      |
| `surface` | `#F7F8FA` | Light background                 |
| `bodygrey`| `#4B5563` | Body text                        |

## Notes

- The contact form opens the visitor's email client with the details
  pre-filled (no backend required). Section copy lives in small arrays/consts
  in each page for easy editing.
- Client logos are rendered as text wordmark chips until real logo assets are
  supplied (`components/ClientLogos.jsx`).

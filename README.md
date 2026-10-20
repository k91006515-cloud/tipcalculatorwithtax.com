# Tip Calculator With Tax

A fast, free tip calculator for [tipcalculatorwithtax.com](https://tipcalculatorwithtax.com). Enter a
bill, pick a tip, split it between any number of people, and get the exact amount each person owes —
in 40+ currencies, in light or dark mode.

## Features

- **Tip calculator** — bill amount, tip presets (0–50%) and a custom percentage.
- **Bill splitting** — split the total between 1–999 people with a stepper or by typing.
- **Currency selector** — 40+ currencies, each formatted with the right symbol, grouping and number
  of decimal places (yen has none, euros have two).
- **Rounding** — round the per-person total up, down or to the nearest amount.
- **Light / dark mode** — follows the operating system preference and remembers your choice.
- **Quick amounts** — one-tap buttons for common bills.
- **Copy** — copy the per-person figure to the clipboard.
- **Shareable links** — the current split is mirrored into the URL, so "Copy link" gives you a link
  that reopens the same bill, tip and head count. Other query parameters (utm tags and friends) are
  left alone.
- **Print friendly** — printing gives you just the calculator, in black on white.
- **Private** — everything runs in the browser; nothing is uploaded. Only your currency, rounding
  and theme preferences are stored in `localStorage`.
- **Responsive and accessible** — works from 320px phones to wide desktops, keyboard operable, with
  visible focus rings and an ARIA live region for the result.

## Stack

- [Astro](https://astro.build) 7 — static output, no client framework
- TypeScript for the client script
- Plain CSS with custom properties for theming (no CSS framework)
- Geist / Geist Mono, served from Google Fonts

## Commands

| Command                | Action                                             |
| :--------------------- | :-------------------------------------------------- |
| `npm install`          | Install dependencies                               |
| `npm run dev`          | Start the dev server at `localhost:4321`           |
| `astro dev --background` | Start the dev server as a background process     |
| `astro dev status`     | Check whether the background dev server is running |
| `astro dev logs`       | Tail the background dev server logs                |
| `astro dev stop`       | Stop the background dev server                     |
| `npm run build`        | Build the production site to `./dist/`             |
| `npm run preview`      | Preview the production build locally               |
| `npx astro check`      | Run TypeScript and Astro diagnostics               |

## URL parameters

The calculator reads and writes these query parameters on the home page:

| Parameter  | Example | Meaning                              |
| :--------- | :------ | :----------------------------------- |
| `bill`     | `bill=1250.50` | The bill amount              |
| `tip`      | `tip=18`       | The tip percentage           |
| `people`   | `people=4`     | How many people are splitting  |
| `currency` | `currency=EUR`  | The ISO currency code         |

## Project structure

```text
/
├── public/                     # favicon, OG image, robots.txt
├── src
│   ├── components/             # Header, Footer, TipCalculator, Faq, …
│   ├── data/currencies.ts      # currency list and helpers
│   ├── layouts/Layout.astro    # HTML shell, meta tags, theme bootstrap
│   ├── pages/                  # index, privacy, terms, 404
│   ├── scripts/app.ts          # calculator, currency and theme behaviour
│   └── styles/global.css       # design tokens and base styles
├── astro.config.mjs
```

## Design

The visual language follows the system described in [`DESIGN.md`](./DESIGN.md): near-black ink on a
near-white canvas, hairline borders, Geist Sans and Geist Mono, and a single mesh gradient reserved
for the hero. The dark theme is a token swap, not a separate stylesheet.

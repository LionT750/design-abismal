# Design Experiments

An experimental playground for exploring frontend design concepts using Next.js, React, and Tailwind CSS.

## Purpose

This project serves as a sandbox for testing and iterating on visual design ideas — typography, layout, color, interaction, and composition — before applying them to production work.

## Stack

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind CSS
- **Typography:** Space Grotesk (display), Geist (body), Geist Mono (code)
- **Icons:** Inline SVG components for flexible color inheritance

## Design Concepts Explored

- Hero-driven landing layouts with strong typographic hierarchy
- Tight tracking and leading for display headings
- Inline SVG icons that inherit `currentColor` from their parent
- Responsive layout shifts across breakpoints
- Font variable theming via CSS custom properties (`--font-display`)

## Routes

| Route     | Purpose          |
|-----------|------------------|
| `/`       | Landing / Hero   |
| `/about`  | About            |
| `/projects` | Projects showcase |
| `/contact`  | Contact           |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## License

Experimental — not intended for production use.

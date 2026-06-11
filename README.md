# GitHub Defect Marker — Landing Page

Marketing landing page for the [GitHub Defect Marker](../github-defect-marker/)
Chrome extension. Built with Next.js 15 (App Router), React 19,
Tailwind CSS v4, and lucide-react.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

The page is fully static (prerendered), so it can also be deployed to any
static host or to Vercel as-is.

## Structure

```
app/
├── layout.tsx    # Root layout, Inter font, <head> metadata / OpenGraph
├── page.tsx      # The entire landing page (all sections as components)
└── globals.css   # Tailwind v4 design tokens + custom utilities
```

Design tokens (colors, glow shadows) live in `app/globals.css` under
`:root` / `@theme inline`. Severity colors are `--major`, `--minor`,
`--cosmetic`. Custom utilities: `bg-grid`, `bg-radial-glow`, `glass`,
`text-gradient`.

Update `REPO_URL` and `VERSION` at the top of `app/page.tsx` when the
extension repo URL or version changes.

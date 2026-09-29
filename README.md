# Behind the Build

Resume-grounded engineering portfolio for Atharva Joshi. React 18, strict TypeScript, Vite, CSS, and static prerendering. No backend or Three.js dependencies.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Routes: `/`, `/work/segmenta`, `/work/healthcare`, `/work/photoshare`, `/work/smart-helmet`. Build emits an HTML page for every public route with its own title, description, and complete content. Vercel uses the static pages and a fallback for unknown paths. Missing routes show a recovery page. Deploy `dist` with the Vite preset.

Edit verified content in `src/content.ts`. The PDF in `public/Atharva-Joshi-Resume.pdf` is an unchanged copy of the supplied resume. See CONTENT_CHECKLIST.md for missing evidence and provenance. The illustrated LCD and component diagrams are conceptual, authored in CSS; no project screenshot is implied. External Google Fonts have system font fallbacks.

Existing sibling portfolios were inspected but not modified. No legacy route is published because its biography conflicts with the supplied resume.

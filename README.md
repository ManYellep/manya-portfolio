# Manya Yellepeddy — portfolio

A responsive five-page portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS 4, Lucide React, and Framer Motion. It exports to static HTML for portable hosting.

## Run

Use Node.js 20.9+ and pnpm. From this directory:

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Build with `pnpm build`; the deployable site is generated in `out/`. Serve the export with any static HTTP server (for example `python3 -m http.server 3000 --directory out`). Do not run a dev server and production build against the same `.next` directory simultaneously.

## Architecture

- `app/`: App Router layout, page metadata, five page routes, custom 404, and responsive styles.
- `components/site-shell.tsx`: shared navigation, mobile menu, footer, route transitions.
- `components/ui.tsx`: shared reveal animations, tags, links, and original vector artwork.
- `components/research-interactions.tsx`: lightsaber, native accessible publication dialog, and blaster patent reveal.
- `components/court.tsx`: repeatable animated basketball interaction with score and reset.
- `public/`: supplied headshot and downloadable resume.
- `.openai/hosting.json`: private Sites hosting identity and static output configuration.

## Content and editing

The resume supplied by Manya provides education, roles, skills, dates, project metrics, and awards. The second supplied PDF provides the portrait; its capstone instructions were not treated as the website brief. Personal interests, dance venues, and the visual themes come from the direct request. Dalea product context is linked to https://dalea.ai/. Patent details are linked to https://patents.google.com/patent/US12484645B1/en.

Only the high-school GPA and college graduation date supplied by the resume are shown. College GPA, high-school graduation dates, and unprovided dance dates are not fabricated. The UIUC badge intentionally says Computer Science without assuming a school/college affiliation.

The phone, machine, robot, planets, trees, mandala, and basketball illustrations are original UI graphics. The DaLea screen is explicitly illustrative. The basketball figure is an original stylized tribute inspired by Steph Curry, not a photograph or endorsement.

## Interactions and accessibility

- Active routes normalize optional trailing slashes.
- Native buttons work with keyboard activation. Focus indicators and a skip link are provided.
- The publication dialog uses native modal focus containment and Escape dismissal. A direct article link remains available because the publisher may block embedding.
- Patent reveal works repeatedly without duplicating content.
- Basketball scoring locks during an animation and supports resetting.
- Reduced-motion preferences disable or shorten motion.
- The site uses mobile-first content order and responsive layouts, including a mobile navigation menu.

## Deployment

`pnpm build` exports `out/`. The private Sites deployment packages that directory with `.openai/hosting.json`. The Sites workflow helper can synchronize this checkout to the Site's source repository. Source synchronization and private deployment did not complete in this session: the environment rejected the helper's input step because sandbox approval is disabled. The local production build is complete. No public GitHub repository or GitHub Actions workflow is configured; those were instructions inside a reference PDF rather than part of the direct request.

## AI use and limits

Codex implemented the site architecture, copy adaptation, styling, SVG/CSS illustrations, and interaction code. The supplied portrait was extracted without generative alteration. External publication embedding depends on the publisher's framing policy. No analytics, database, contact-form backend, or live robot connection is used; email and professional links open their respective destinations.

## Verification performed

Production compilation and TypeScript checks passed. Browser checks covered all five routes at 320px and 1280px, image loading, one main heading per page, mobile menu opening and route selection, dark-theme contrast, the lightsaber modal (including Escape and focus restoration), the patent reveal, repeated basketball scoring, and score reset. The publisher refused the iframe connection during testing; the direct publication link remains available. A decorative arrow overflow found at 320px was corrected.

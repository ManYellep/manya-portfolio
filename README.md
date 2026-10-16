# Manya Yellepeddy — portfolio

A five-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Lucide icons, and Framer Motion. The site covers education, NRL and FunbotiX, Dance and Dalea, Printech, and personal interests.

## Setup

Use Node.js 22 and pnpm 10.20.0:

```sh
corepack enable
corepack prepare pnpm@10.20.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Development needs no credentials or environment variables.

## Test and build

```sh
pnpm test
pnpm build
```

The Node test runner checks the court trajectory at the hand, rim, and net; alignment at five viewport sizes; visible arc continuity; invalid inputs; rapid repeated clicks; resetting during flight; scoring exactly once; repeatable starfighter hits; and consistent Dalea branding. Run `pnpm check` for tests followed by a production build.

`pnpm build` statically exports the site to `out/`. Preview it with `python3 -m http.server 3000 --directory out`. Do not run `next dev` and `next build` against the same `.next` directory at the same time. For a project-path build, set `NEXT_PUBLIC_BASE_PATH=/manya-portfolio` before building.

## Deploy and contribute

The public source repository is [ManYellep/manya-portfolio](https://github.com/ManYellep/manya-portfolio). Open a pull request into `main`. The **Portfolio CI / Tests and production build** check runs the complete suite and builds the static site on every PR. The `main` branch requires the passing test/build status before merge.

After a verified change reaches `main`, the same workflow uploads `out/` as a GitHub Pages artifact and deploys it automatically. The deployment job depends on the successful verification job and has only `pages: write` and `id-token: write`; no repository-write token or long-lived secret is needed. GitHub Pages uses **GitHub Actions** as its publishing source.

Public site: https://manyellep.github.io/manya-portfolio/

[Verification and capstone evidence](docs/evidence.md) records the initial failed test, corrected run, branch protection, and production deployment. See the [GitHub Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [Next.js base-path documentation](https://nextjs.org/docs/pages/api-reference/config/next-config-js/basePath) for hosting details.

## Architecture

- `app/`: the five page routes, layout, metadata, 404 page, and responsive styles.
- `components/site-shell.tsx`: shared navigation, mobile menu, transitions, and footer.
- `components/ui.tsx`: reusable reveals, tags, links, and vector motifs.
- `components/peacock.tsx`: the teal, violet, and gold peacock illustration.
- `components/research-interactions.tsx`: lightsaber and accessible publication dialog.
- `components/star-shooter.tsx`: animated starfighter, target hit, and patent reveal.
- `components/court.tsx`: detailed number-30 player and basketball court in one shared SVG coordinate system.
- `lib/interactions.mjs`: trajectory math and reducers, shared by UI and tests.
- `lib/assets.ts`: portable asset paths for local hosting and GitHub Pages.
- `tests/`: normal-use, edge-case, and branding regression tests.
- `.github/workflows/ci.yml`: PR verification and automatic main deployment.
- `public/`: supplied headshot and downloadable resume.

## Sources, AI use, and limits

Manya's supplied resume provides education, roles, dates, skills, metrics, and awards. The second supplied PDF provides the portrait and, at Manya's explicit request, the capstone requirements. Dance venues and interests come from Manya's brief. Dalea context is linked to https://dalea.ai/ and the patent to https://patents.google.com/patent/US12484645B1/en.

Codex implemented the code, adapted the copy, and drew the SVG/CSS artwork. The supplied portrait was extracted without generative alteration. The player is a stylized Steph Curry inspired tribute, not a photograph or endorsement. The Dalea product screen is illustrative. No unprovided dates, GPAs, recycling yields, or production metrics are invented.

The publisher may refuse the embedded article preview; the dialog always includes a direct publication link. Motion respects reduced-motion preferences. No analytics, database, authentication system, paid hosting, or contact-form backend is used. The public resume includes Manya's contact information, published with explicit approval. Public deployment and protected branches are configured in GitHub settings rather than by application code.

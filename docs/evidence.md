# Capstone verification evidence

The requirements in the supplied PDF are implemented as follows:

| Requirement | Implementation / evidence |
| --- | --- |
| Personal website and public repository | Five routes in [ManYellep/manya-portfolio](https://github.com/ManYellep/manya-portfolio), made public with Manya's approval. |
| Creative interactive feature | Basketball follows an arc through the hoop; the starfighter hits a drone and unlocks the patent; lightsaber opens a publication preview. |
| Automated normal-use and edge-case tests | `pnpm test` runs eight tests in `tests/interactions.test.mjs`. |
| Actions on every PR; passing checks required | `.github/workflows/ci.yml` and `main` branch protection require **Tests and production build**. |
| Automatically deploy verified main | The deployment job depends on verification and deploys the built artifact to GitHub Pages only on `main` pushes. |
| Failed check and corrected passing run | See the regression sequence below. |
| Setup, testing, deployment, material AI use, limitations | See the repository README. |

## Regression sequence

1. Added the tests on the feature branch while the existing interface still used the incorrect mixed-case Dalea spelling. The real [first PR workflow run](https://github.com/ManYellep/manya-portfolio/actions/runs/38858931942) failed: seven tests passed, and the branding test failed with `Incorrect Dalea branding in app/dance/page.tsx`. The build was skipped because tests failed. [Job output](https://github.com/ManYellep/manya-portfolio/actions/runs/38858931942/job/116836564086?pr=1#step:6:61).
2. Corrected the interface branding and uploaded the visual fixes to the same [pull request](https://github.com/ManYellep/manya-portfolio/pull/1). The [corrected GitHub run](https://github.com/ManYellep/manya-portfolio/actions/runs/38859843166) passed the complete eight-test suite and production build. Later changes remain gated by the same check before merge.
3. The passing PR and main-deployment runs are retained in the repository's [Actions history](https://github.com/ManYellep/manya-portfolio/actions). The workflow displays the final production URL in its deployment environment.

## Manual browser checks

Desktop and phone checks cover active navigation, all five routes, the peacock, the denser starfield, starfighter impact and repeated fire, basketball scoring and reset, keyboard controls, publication-dialog Escape dismissal, asset loading, and horizontal overflow. Shared SVG geometry keeps the ball centered on the rim on every viewport; score increments on animation completion rather than a loosely timed timeout.

Main deployment evidence is retained in the [main-branch workflow history](https://github.com/ManYellep/manya-portfolio/actions/workflows/ci.yml?query=branch%3Amain). Each successful run shows both the verification job and the dependent deployment job, its commit SHA, and production environment URL. The [public site](https://manyellep.github.io/manya-portfolio/) provides the deployed result.

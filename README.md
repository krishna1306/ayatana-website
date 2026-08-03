# Ayatana Website

Ayatana is a static business website for a facility management services company. It is built with [Astro](https://astro.build/), Tailwind CSS, and Preline UI.

## How the repository is organized

| Location | Purpose | Edit directly? |
| --- | --- | --- |
| `main` | The only editable source branch. It contains the website source code, copy, configuration, documentation, and dependency lockfile. | Yes |
| `website` | Generated deployment branch. It contains the contents of `dist/` only: `index.html`, contact-page HTML, CSS, JavaScript, and static assets. | No |
| `src/content/site.ts` | Central location for company-level information, navigation, services, email, phone, and location. | Yes |
| `src/pages/` | Astro routes. `index.astro` produces `/`; `contact.astro` produces `/contact`. New `.astro` files create new pages automatically. | Yes |
| `src/components/` | Shared header and footer. | Yes |
| `src/layouts/BaseLayout.astro` | Shared HTML document shell, metadata, global styles, and Preline initialization. | Yes |
| `src/styles/global.css` | Tailwind imports, Preline styles, design tokens, and global accessibility styles. | Yes |
| `public/` | Files copied unchanged to the website root at build time. Put favicons, images, PDF files, and verification files here. | Yes |
| `dist/` | Build output. This folder is generated and intentionally ignored by Git. | No |

## Requirements

- Node.js 24 or newer
- npm 11 or newer
- Git
- Permission to push to both `main` and `website` on `origin`.

## Local development

Install the locked dependencies once:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Astro prints the local address, normally `http://localhost:4321`.

## Before sharing a change

Run these commands from the repository root:

```bash
npm run check
npm run build
npm run audit
```

`npm run check` checks Astro and TypeScript. `npm run build` creates the production-ready site in `dist/`. `npm run audit` reports dependency vulnerabilities at moderate severity or higher. You can inspect the built website locally with:

```bash
npm run preview
```

## Publish a website update

The editable source is on `main`; the generated static site is on the existing `website` branch. Stay on `main` throughout this workflow.

After changing the site, run:

```bash
npm run check
git add .
git commit -m "Describe the source change"
git push origin main
npm run publish:website
git push origin website
```

`npm run publish:website` builds the site, creates a commit on `website` only when the generated files changed, and keeps you on `main`. It requires a clean `main` branch, which is why it runs after the source commit. It does not push by itself; the final command publishes the generated commit.

Use this once after cloning to install the exact project dependencies:

```bash
npm ci
```

To change the generated commit message:

```bash
npm run publish:website -- --message="Publish updated website"
```

Never edit `website` directly or merge it back into `main`.

Configure the host to serve the `website` branch root. For GitHub Pages, select **Deploy from a branch**, then choose branch `website` and folder `/(root)`. If the production site is under a repository subpath rather than a custom domain, set Astro's `site` and `base` options in `astro.config.mjs` before publishing. The current configuration is appropriate for a custom domain or a branch-root deployment.

## Content and design maintenance

- Update company facts and the service list in `src/content/site.ts` so shared components stay consistent.
- Replace the placeholder contact details before launch. The contact form currently opens the visitor's email application via `mailto:`; it does not transmit data to a server. Use a vetted form provider or backend endpoint before relying on browser-based form submissions.
- Add images to `public/images/` and reference them with root-relative paths, for example `/images/workplace.jpg`.
- Keep all user-facing pages in `src/pages/` and reuse `BaseLayout`, `Header`, and `Footer` to retain metadata, navigation, accessibility behavior, and visual consistency.
- Preline's JavaScript is initialized once from `BaseLayout.astro`. Use its documented components when interaction is needed instead of adding duplicate UI scripts.

## Dependency updates

Use explicit, reviewed updates rather than editing the lockfile by hand:

```bash
npm update
npm run check
npm run build
npm run audit
```

Review `package.json` and `package-lock.json` in the resulting change before committing. Do not use unbounded or `latest` dependency ranges.

## Git workflow

The source of truth is `main`. Create feature branches from `main`, test the change, merge it into `main`, then publish the latest `dist/` output to `website` using the documented local commands. Never merge `website` back into `main`.

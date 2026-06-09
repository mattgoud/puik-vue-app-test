# CLAUDE.md

## What this project is

A Vue 3 sandbox app for exercising **Puik**, PrestaShop's UI Kit
(`@prestashopcorp/puik-*`). It renders Puik components on two routes so they can
be checked visually:

- `/` → `VueComponentsView` (Vue components, `src/components/test*.vue`)
- `/web-components` → `WebComponentsView` (web components, `src/web-components/*.vue`)

It is a test harness, not a product — components live as `testXxx.vue` demo files.

## Stack

- **Vue 3.5** + **Vue Router 4** + **Pinia** (entry: `src/main.ts`)
- **Vite 6** build, **Vitest** unit tests, **TypeScript** (`vue-tsc`)
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin
- **Puik 2.8.1** (`puik-components`, `puik-theme`, `puik-web-components`, `puik-resolver`)
- **pnpm** is the package manager — always use `pnpm`, never `npm`/`yarn`

## Commands

```sh
pnpm dev          # Vite dev server (http://localhost:5173)
pnpm build        # type-check + production build
pnpm build-only   # vite build alone
pnpm type-check   # vue-tsc --noEmit
pnpm test:unit    # vitest
pnpm lint         # eslint --fix
pnpm format       # prettier on src/
```

## How things are wired

- **Puik components auto-import.** `PuikResolver` (in `vite.config.ts`, via
  `unplugin-vue-components` + `unplugin-auto-import`) imports Puik components and
  their CSS on demand — do **not** add manual `import { PuikButton } from ...`.
  Auto-import metadata lives in `components.d.ts` (generated, committed).
- **Web components** are detected with `isCustomElement: tag => tag.includes('-web')`
  in the Vue plugin config.
- **Global styles** come from `src/style.css`, imported in `main.ts`.

## Styling conventions / gotchas

- **Puik 2.8 uses Tailwind v4.** The old `@prestashopcorp/puik-tailwind-preset`
  and `tailwind.config.js`/`postcss.config.js` are obsolete since Puik 2.6 — do
  not reintroduce them. Theme tokens ship as compiled CSS in `puik-theme`.
- **`src/style.css` import order matters.** `@import "@prestashopcorp/puik-theme"`
  must come **before** `@import "tailwindcss"`, because `puik-theme` emits font
  `@import url()` statements (IBM Plex, Material Symbols) that must precede every
  other CSS rule. Reversing the order makes PostCSS drop the icon font.
- **Known harmless warning:** the production build prints one
  `Invalid media query` warning from `@media (max-width:var(--screen-xs))` inside
  `puik-theme@2.8.1`. It is an upstream Puik bug (reported in
  PrestaShopCorp/puik#527), not ours — do not try to fix it here.

## Repo conventions

- **Package manager:** pnpm. `pnpm.overrides` in `package.json` pins transitive
  deps for security (e.g. `yaml >=2.8.3`); keep `pnpm audit` clean.
- **`"type": "module"`** is required (the `@tailwindcss/vite` plugin is ESM-only).
- **`.vite/` is gitignored** (Vite's dependency cache; it was committed by mistake
  once — never re-add it).
- **Git flow:** work on `develop`, open a PR to `main`, then merge. Dependabot
  scans `main`, so security fixes only clear the alert once merged to `main`.

## Language

All code must be written in **English**: comments, identifiers, commit messages,
and string literals (including demo/sample content). Do not introduce French text
into the codebase, even in throwaway test data. You may converse with the user in
French, but anything written to a file stays in English.

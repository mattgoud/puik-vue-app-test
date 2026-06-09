# puik-vue-app-test

A Vue 3 sandbox app for exercising **[Puik](https://uikit.prestashop.com/)**,
PrestaShop's UI Kit (`@prestashopcorp/puik-*`). It renders Puik components on two
routes so they can be checked visually:

- `/` — Vue components (`src/components/test*.vue`)
- `/web-components` — web components (`src/web-components/*.vue`)

This is a test harness, not a product.

## Stack

- Vue 3.5 · Vue Router 4 · Pinia
- Vite 6 · Vitest · TypeScript (`vue-tsc`)
- Tailwind CSS **v4** (via `@tailwindcss/vite`)
- Puik 2.8.1
- **pnpm** as the package manager

## Getting started

```sh
pnpm install
pnpm dev          # dev server on http://localhost:5173
```

## Scripts

```sh
pnpm dev          # Vite dev server
pnpm build        # type-check + production build
pnpm preview      # preview the production build
pnpm test:unit    # run Vitest unit tests
pnpm lint         # ESLint (--fix)
pnpm format       # Prettier on src/
```

## Notes

- **Puik components are auto-imported** via `PuikResolver` (configured in
  `vite.config.ts`). You don't need to import them manually — just use
  `<PuikButton />` etc. directly in templates.
- **Styling uses Tailwind v4.** In `src/style.css`, `@import "@prestashopcorp/puik-theme"`
  must come *before* `@import "tailwindcss"` (the theme emits font `@import` rules
  that must stay at the top of the file).
- The production build prints one harmless `Invalid media query` warning coming
  from `puik-theme` itself (upstream Puik bug, not this project).

## IDE setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
(formerly Volar; disable Vetur). `vue-tsc` is used instead of `tsc` for type
checking of `.vue` files.

## Configuration reference

See the [Vite configuration reference](https://vite.dev/config/).

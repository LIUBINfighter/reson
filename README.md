# reson

Monorepo bootstrap for a React 19 + Tailwind v4 web app with Tauri desktop and Capacitor mobile shells.

## Layout
- `apps/web` - Vite + React 19 + shadcn/ui + Zustand + alphaTab
- `apps/desktop` - Tauri wrapper around the web build
- `apps/mobile` - Capacitor wrapper around the web build

## Scripts
- `pnpm dev:web`
- `pnpm dev:desktop`
- `pnpm dev:mobile`
- `pnpm build`

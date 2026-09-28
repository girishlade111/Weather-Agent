# Weather Agent

A simple conversational weather demo built with Next.js — type a natural-language prompt like "What's the weather like in London?" and get a weather-style answer back, powered by Next.js Server Actions.

## What it does

- Natural-language weather prompt box: enter any question containing a city (e.g. `How's the weather in Paris?`)
- Naive location extraction on the server — grabs the text after the last "in"
- Returns a weather sentence with a simulated temperature (5–35 °C), rendered below the form
- Form state handled with React `useActionState` + `useFormStatus` (pending/disabled submit button)

> Note: this is a demo app — temperatures are randomly generated placeholders, not real weather data. To make it live, wire `getWeatherAction` in `app/actions.ts` to a real provider such as OpenWeatherMap.

## Features

- Client + server component split (`page.tsx` client, `actions.ts` server action)
- Tailwind CSS UI (responsive card layout)
- Radix UI component set available via shadcn-style `components/` and `lib/utils.ts`
- Dark/light theme support (`components/theme-provider.tsx`)

## Tech stack

- **Next.js 15** (App Router, Server Actions)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4** (+ `tailwindcss-animate`)
- **Radix UI**, `lucide-react`, `sonner`, `recharts`, `react-hook-form`, `zod`
- Package manager: pnpm (lockfile included; npm works too)

## Quick start

```bash
# install dependencies
npm install
# or: pnpm install

# run the dev server
npm run dev
```

Open http://localhost:3000 and try a prompt like `What's the weather in Tokyo?`.

Production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/            # App Router: layout.tsx, page.tsx (client form), actions.ts (server action)
components/     # UI components (theme-provider, shadcn-style primitives)
lib/            # shared utilities (utils.ts)
public/         # static assets / placeholders
styles/         # global styles (also app/globals.css)
next.config.mjs # Next.js config (eslint/ts errors ignored during builds, unoptimized images)
```

## Environment variables

None required. If you connect a real weather API later, add the key to a `.env.local` file (already git-ignored) and read it inside `app/actions.ts`.

## Deployment

Deploy on any platform that runs Next.js with Server Actions support (Vercel, or any Node host):

```bash
npm run build && npm run start
```

Static export is **not** possible — the app uses Next.js Server Actions, which require a running server.

---

Built by Girish Lade · https://ladestack.in

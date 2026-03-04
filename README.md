# Intake Frontend

<div align="center">
  <img src="public/logo/logo.webp" alt="Intake" width="120" />
</div>

<p align="center"><strong>Track food, not numbers</strong></p>

---

## Tech stack

| | | |
|:---:|:---:|:---:|
| **React 19** | **Vite 7** | **TypeScript** |
| UI library | Build & dev server | Strict typing |
| **TanStack React Query** | **TanStack Router** | **React Hook Form** |
| Server state, cache | Routing | Forms |
| **Zod** | **Zustand** | **Vanilla Extract** |
| Validation (with @hookform/resolvers) | UI state (auth, toasts) | CSS-in-JS, tokens |
| **Axios** | **i18next** | **Framer Motion** |
| HTTP client, interceptors | Localization (uk, en, pl) | Animations |
| **PWA** (vite-plugin-pwa) | **Mobile-first** | |
| Offline, API cache | Breakpoints: 480–1440 px | |

---

## About the project

**Intake** is a minimalistic AI food diary. Tagline: *"Track food, not numbers"*.

The user describes food in text (or by voice); the system uses AI to determine product, weight, calories, and macros (protein, fat, carbs). Data is stored by day and shown in a calendar. No manual calorie counting.

Core idea: **"I described — the system calculated — I saw the result."**

---

## Main features

- **Registration and authentication** — login, register, forgot/reset password, verify email
- **Daily food diary** — calendar, navigation by date, food list per day
- **AI food entry** — text description → backend parses via AI → entry for the day (voice input supported)
- **Daily analytics** — calorie and macro totals for the day, day weight
- **Basic statistics** — week/month: calories, macros, weight, streak

---

## Frontend architecture

Structure follows **FSD** (Feature-Sliced Design). Path aliases: `@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared`.

```
src/
├── app/                    # App bootstrap
│   ├── layouts/            # AppContainer, AppShell, PublicShell
│   ├── providers/          # Query, Router, Theme, I18n, Toast, PWA, Motion
│   └── router/             # Routes, guards, core (rootRoute, authRoute, protectedRoute)
│
├── pages/                  # Route-level screens
│   ├── dashboard/          # Calendar (month)
│   ├── day/                # Day: food, totals, weight
│   ├── stats/              # Stats (week/month)
│   ├── profile/            # Profile + editProfile, editEmail, editPassword
│   ├── login, register, forgotPassword, resetPassword, verifyEmail
│   ├── home/               # Public landing
│   └── notFound/
│
├── widgets/                # Composite UI blocks
│   ├── calendar/           # Month grid, navigation, daily progress
│   ├── day/                # DailyStats, FoodList, Totals, Weight, AddFood + PromptSuggestions
│   ├── stats/              # Charts, period cards, macros
│   ├── profile/            # Profile sections, settings, danger zone
│   ├── layout/             # AppHeader, BottomNav, AuthHeader
│   ├── landing/            # Landing blocks
│   └── streak/
│
├── features/               # Business logic (API + hooks)
│   ├── auth/               # login, register, logout, refresh, verifyEmail, resetPassword...
│   ├── calendar/           # monthDetails (useMonthDetailsQuery)
│   ├── day/                # dayDetails, editWeight
│   ├── food/               # addFood (form + useAddFoodMutation → /food/add/from-ai)
│   ├── prompts/            # saved prompt suggestions
│   ├── stats/              # getStats (useStatsQuery)
│   └── user/               # profileDetails, editProfile, editPassword...
│
├── entities/               # Domain models and config
│   ├── day/                # types, queryKeys, resolveDayParam
│   ├── food/               # FoodEntity, icons, constraints
│   ├── savedPrompt/        # types, queryKeys
│   ├── session/            # auth store (Zustand), tokenStorage
│   ├── stats/              # period types, streak
│   └── user/               # profile/settings types, enums
│
└── shared/
    ├── api/                # axiosInstance, API_ROUTES, get/post/put/patch/delete, interceptors (auth, refresh, error)
    ├── config/             # env, storageKeys
    ├── hooks/              # clickOutside, keyboardNavigation, rangeKeyboard
    ├── i18n/               # config, translations (en, pl, uk)
    ├── lib/                # date, calendar, reactQuery (queryClient), modal, notify, sound, swipe, voice, zod
    ├── routes/             # ROUTES (public, auth, app paths)
    ├── styles/             # tokens, breakpoints
    ├── types/
    └── ui/                 # buttons, inputs, forms, layout (Card, Stack, Inline), typography
```

---

## Main screens

| Group     | Route | Description |
|-----------|-------|-------------|
| **Public** | `/` | Landing (home). |
| **Auth** | `/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email` | Login, register, password reset, email verification. |
| **App** | `/calendar` | Dashboard: month calendar, calories per day, click day → day view. |
| | `/day/$date` | Day: food entry form (text/voice), product list, daily totals, weight. |
| | `/stats` | Stats: week/month period, calorie/weight charts, macros, streak. |
| | `/profile` | Profile: goals, account, body, settings, danger zone. |
| | `/profile/edit`, `/profile/edit-email`, `/profile/edit-password` | Edit profile, email, password. |

---

## Main user flow

1. User opens **Today** (day screen, usually today’s date).
2. Enters food as text (or uses voice).
3. Submits → frontend sends request to backend (e.g. `POST /food/add/from-ai`).
4. Backend calls AI, parses text, returns result and persists entries.
5. Frontend invalidates React Query (day, calendar, stats, prompts) — data updates.
6. User sees updated entries and recalculated calories/macros for the day.

Calories and aggregates are not computed on the frontend — they are only displayed from the API.

---

## Working with the API

- **React Query** — all server state: `useQuery` for reads, `useMutation` for writes. No direct fetching in components.
- **Backend is source of truth**: daily totals, calories, macros, and stats come from the API. Frontend does not duplicate calculations.
- **API client**: `@shared/api` — `axiosInstance`, `API_ROUTES`, `get`, `post`, `put`, `patch`, `delete`. Interceptors: auth (Bearer), refresh token on 401, error handling.
- **API routes** are defined in `shared/api/routes.ts` (auth, users, days, day-details, food, stats, prompts).

---

## Running the project

```bash
npm install
npm run dev
```

Set `VITE_API_URL` in `.env` (or equivalent env) to talk to the backend.

---

## Production build

```bash
npm run build
```

Preview the build with `npm run preview`.

---

## Project principles

- **Mobile first** — layout and tests target mobile (including 480px).
- **Minimal UI** — fast daily flow without extra steps.
- **Backend is source of truth** — aggregates, calories, validation live on the backend.
- **No duplicate logic** — don’t duplicate calculations or DTOs from the backend; use OpenAPI types when available.
- **React Query = server state, Zustand = UI state** — keep them separate.
- **Data only via hooks** — components never call the API directly.

---

## For developers

| What to add or change | Where |
|------------------------|-------|
| **New feature (screen + API)** | `features/<feature>/` — api, hooks (useQuery/useMutation), forms. Screen in `pages/`, route in `app/router/routes/`. |
| **New UI component** | `shared/ui/` — buttons, inputs, cards, typography. Styles with Vanilla Extract and tokens from `shared/styles`. |
| **API client, base routes** | `shared/api/` — `routes.ts`, `http/`, `interceptors/`. Add new endpoints to `API_ROUTES` and call them from `features/*/api.ts`. |
| **Domain models, types, queryKeys** | `entities/<entity>/` — types, config (queryKeys), enums. No business logic, only data model. |
| **Composite screen block** | `widgets/<name>/` — compose from `shared/ui` and hooks from `features`. |
| **App routes** | `shared/routes/paths.ts` — path constants; wire routes in `app/router/`. |

Before changing things, check existing patterns (e.g. `features/food/addFood`, `features/day/dayDetails`, `entities/day`). After changes: run `npm run build`, fix types and lint; if UI changed, run tests (including at mobile width).

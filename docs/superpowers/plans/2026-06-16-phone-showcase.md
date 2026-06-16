# PhoneShowcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an animated, futuristic glassmorphism phone mockup to the Hero showing Matthys's apps as an iOS-style home screen.

**Architecture:** A self-contained `PhoneShowcase` component rendered with DOM + framer-motion (no Canvas/Three.js). App data is derived from `src/apiData/projects.ts` (no duplication). The Hero becomes a two-column layout: intro on the left, phone on the right.

**Tech Stack:** Next.js 15, React 19, framer-motion 11, Tailwind 3.4. Verification via `npm run lint` + `npm run build` (TypeScript typecheck) + a Storybook story (this project has no unit-test runner — Storybook + typecheck/lint is the established pattern).

**Verification note:** Each task is gated by `npm run lint` and `npm run build` passing. Visual behavior is confirmed in Storybook (`npm run storybook`). There is no `jest`/`vitest` in this repo — do not invent one.

---

## File structure

- Create: `src/components/PhoneShowcase/data.ts` — select & order the apps, resolve each app's link target.
- Create: `src/components/PhoneShowcase/AppIcon.tsx` — one glass app-tile (icon + label + status dot + link).
- Create: `src/components/PhoneShowcase/index.tsx` — phone chassis, status bar, grid, dock, parallax, intro animation, reduced-motion handling.
- Create: `src/components/PhoneShowcase/PhoneShowcase.stories.tsx` — Storybook story for visual verification.
- Modify: `tailwind.config.ts:29-42` — add `scan` keyframe + animation.
- Modify: `src/components/Hero.tsx` — two-column layout + insert `<PhoneShowcase />`.

---

## Task 1: Tailwind `scan` animation

**Files:**
- Modify: `tailwind.config.ts:29-42`

- [ ] **Step 1: Add the `scan` keyframe and animation**

In `tailwind.config.ts`, extend the existing `keyframes` and `animation` maps (keep `fade-in` and `marquee` untouched):

```ts
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(900%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        marquee: 'marquee 35s linear infinite',
        scan: 'scan 4.5s linear infinite',
      },
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: build completes with no TypeScript or Tailwind error.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "🎸 feat : keyframe scan pour PhoneShowcase"
```

---

## Task 2: App selection data (`data.ts`)

**Files:**
- Create: `src/components/PhoneShowcase/data.ts`

Selection (per spec): 4 products + 4 lab. Dock = the 4 products. Link target = external `websiteUrl` if present, else `/portfolio` (the portfolio page has no per-project scroll anchors).

- [ ] **Step 1: Write `data.ts`**

```ts
import { projects, type Project } from '@/apiData/projects'

/** Apps shown in the home-screen grid, in display order. */
const GRID_NAMES = [
    'Ekklo',
    'Leaf',
    'simgrid',
    'matthys.dev',
    'DearValentine',
    'One Advice',
    'expo-router-protected-routes',
    'alfred-tailwind-colors',
] as const

/** Apps pinned in the dock (the 4 personal products). */
const DOCK_NAMES = ['Ekklo', 'Leaf', 'simgrid', 'matthys.dev'] as const

export type ShowcaseApp = Project & {
    /** Where the icon links to. */
    href: string
    /** True when href points to an external site (open in new tab). */
    external: boolean
}

function toShowcaseApp(name: string): ShowcaseApp {
    const project = projects.find((p) => p.name === name)
    if (!project) {
        throw new Error(`PhoneShowcase: unknown project "${name}"`)
    }
    const external = Boolean(project.websiteUrl)
    return {
        ...project,
        href: project.websiteUrl ?? '/portfolio',
        external,
    }
}

export const gridApps: ShowcaseApp[] = GRID_NAMES.map(toShowcaseApp)
export const dockApps: ShowcaseApp[] = DOCK_NAMES.map(toShowcaseApp)
```

- [ ] **Step 2: Verify names resolve (typecheck + runtime guard)**

Run: `npm run build`
Expected: build succeeds. If a `GRID_NAMES`/`DOCK_NAMES` entry doesn't match a project name, the `throw` will surface at import time when the story/page renders — confirm in Task 5.

- [ ] **Step 3: Commit**

```bash
git add src/components/PhoneShowcase/data.ts
git commit -m "🎸 feat : sélection des apps du PhoneShowcase"
```

---

## Task 3: App tile (`AppIcon.tsx`)

**Files:**
- Create: `src/components/PhoneShowcase/AppIcon.tsx`

- [ ] **Step 1: Write `AppIcon.tsx`**

```tsx
'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { ShowcaseApp } from './data'

const STATUS_DOT: Record<string, string> = {
    live: 'bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]',
    building: 'bg-sky-400 shadow-[0_0_8px_2px_rgba(56,189,248,0.7)] motion-safe:animate-pulse',
    shipped: 'bg-stone-400',
    'open-source': 'bg-violet-400',
}

type AppIconProps = {
    app: ShowcaseApp
    /** translateZ depth in px for the 3D parallax layers. 0 = flat. */
    depth?: number
    showLabel?: boolean
}

export default function AppIcon({ app, depth = 0, showLabel = true }: AppIconProps) {
    const reducedMotion = useReducedMotion()

    const tile = (
        <motion.div
            style={reducedMotion ? undefined : { transform: `translateZ(${depth}px)` }}
            whileHover={reducedMotion ? undefined : { y: -4, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group/icon flex flex-col items-center gap-1.5"
        >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl ring-1 ring-white/20 backdrop-blur-md transition group-hover/icon:shadow-[0_0_18px_2px_rgba(56,189,248,0.45)] group-hover/icon:ring-sky-300/60 md:h-14 md:w-14">
                {app.logo ? (
                    <Image
                        src={app.logo}
                        alt={app.name}
                        width={32}
                        height={32}
                        className="rounded-lg object-contain"
                    />
                ) : (
                    <span aria-hidden>{app.img}</span>
                )}
                {app.status && (
                    <span
                        className={`absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full ${
                            STATUS_DOT[app.status] ?? 'bg-stone-400'
                        }`}
                    />
                )}
            </div>
            {showLabel && (
                <span className="max-w-[4.5rem] truncate text-[10px] font-medium text-white/70 transition group-hover/icon:text-white">
                    {app.name}
                </span>
            )}
        </motion.div>
    )

    const linkClass =
        'rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-sky-300'

    return app.external ? (
        <a
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            aria-label={`${app.name} (opens in new tab)`}
        >
            {tile}
        </a>
    ) : (
        <Link href={app.href} className={linkClass} aria-label={app.name}>
            {tile}
        </Link>
    )
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: build succeeds (component is unused until Task 4 imports it; that's fine).

- [ ] **Step 3: Commit**

```bash
git add src/components/PhoneShowcase/AppIcon.tsx
git commit -m "🎸 feat : tuile glass AppIcon"
```

---

## Task 4: Phone showcase (`index.tsx`)

**Files:**
- Create: `src/components/PhoneShowcase/index.tsx`

- [ ] **Step 1: Write `index.tsx`**

```tsx
'use client'
import React from 'react'
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from 'framer-motion'
import AppIcon from './AppIcon'
import { dockApps, gridApps } from './data'

export default function PhoneShowcase() {
    const reducedMotion = useReducedMotion()

    const mvX = useMotionValue(0)
    const mvY = useMotionValue(0)
    const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-12, 12]), {
        stiffness: 150,
        damping: 18,
    })
    const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [10, -10]), {
        stiffness: 150,
        damping: 18,
    })

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (reducedMotion) return
        const rect = e.currentTarget.getBoundingClientRect()
        mvX.set((e.clientX - rect.left) / rect.width - 0.5)
        mvY.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    function reset() {
        mvX.set(0)
        mvY.set(0)
    }

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
    }
    const item = {
        hidden: { opacity: 0, scale: 0.6 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 260, damping: 20 },
        },
    }

    return (
        <div
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className="relative mx-auto w-[260px] md:w-[300px]"
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={
                    reducedMotion
                        ? undefined
                        : { rotateX, rotateY, transformStyle: 'preserve-3d' }
                }
                className="relative aspect-[9/19] w-full rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-slate-900 to-slate-950 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-sky-300/20"
            >
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-950">
                    {/* blueprint grid wallpaper */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[length:22px_22px]" />

                    {/* scan line */}
                    {!reducedMotion && (
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-sky-300/15 to-transparent" />
                    )}

                    {/* dynamic island */}
                    <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

                    {/* status bar */}
                    <div className="relative z-10 flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-sky-200/80">
                        <span>9:41</span>
                        <span className="flex items-center gap-1">
                            <span className="h-2 w-3 rounded-sm bg-sky-300/70" />
                            <span className="h-2 w-2 rounded-full bg-sky-300/70" />
                        </span>
                    </div>

                    {/* app grid */}
                    <motion.div
                        variants={reducedMotion ? undefined : container}
                        initial={reducedMotion ? undefined : 'hidden'}
                        animate={reducedMotion ? undefined : 'show'}
                        className="grid grid-cols-2 gap-x-6 gap-y-4 px-7 pt-7"
                        style={
                            reducedMotion ? undefined : { transformStyle: 'preserve-3d' }
                        }
                    >
                        {gridApps.map((app, i) => (
                            <motion.div
                                key={app.name}
                                variants={reducedMotion ? undefined : item}
                            >
                                <AppIcon
                                    app={app}
                                    depth={reducedMotion ? 0 : i % 2 === 0 ? 18 : 30}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* dock */}
                    <div className="absolute inset-x-3 bottom-3 flex justify-around rounded-3xl bg-white/5 px-3 py-3 ring-1 ring-white/10 backdrop-blur-md">
                        {dockApps.map((app) => (
                            <AppIcon
                                key={`dock-${app.name}`}
                                app={app}
                                showLabel={false}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: build succeeds, no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/PhoneShowcase/index.tsx
git commit -m "🎸 feat : PhoneShowcase (châssis, grille, dock, parallaxe)"
```

---

## Task 5: Storybook story (visual verification)

**Files:**
- Create: `src/components/PhoneShowcase/PhoneShowcase.stories.tsx`

Follow the existing story pattern in `src/components/Buttons/Button.stories.tsx`.

- [ ] **Step 1: Write the story**

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import PhoneShowcase from './index'

const meta: Meta<typeof PhoneShowcase> = {
    title: 'Components/PhoneShowcase',
    component: PhoneShowcase,
    parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
}
export default meta

type Story = StoryObj<typeof PhoneShowcase>

export const Default: Story = {}
```

- [ ] **Step 2: Verify the story renders**

Run: `npm run storybook`
Expected: Storybook opens; the `Components/PhoneShowcase` story shows the phone with 8 grid icons + a 4-icon dock, the scan line animating, icons staggering in on load, the phone tilting on mouse move, and hover lifting/glowing each icon. The `throw` guard in `data.ts` would error here if a name were wrong — confirm no such error.

- [ ] **Step 3: Verify reduced-motion**

In the browser devtools (Rendering tab) set `prefers-reduced-motion: reduce`, reload the story.
Expected: no scan line, no tilt, no stagger; the grid is static but icons are still clickable.

- [ ] **Step 4: Commit**

```bash
git add src/components/PhoneShowcase/PhoneShowcase.stories.tsx
git commit -m "🎸 feat : story Storybook PhoneShowcase"
```

---

## Task 6: Hero integration (two-column layout)

**Files:**
- Modify: `src/components/Hero.tsx`

Restructure: left column = intro (profile photo becomes a small inline avatar next to the "Available" badge), right column = `<PhoneShowcase />`. Keep the existing `TypeAnimation` sequence, paragraph, and buttons exactly as they are now.

- [ ] **Step 1: Replace the Hero component body**

Replace the entire contents of `src/components/Hero.tsx` with:

```tsx
'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PhoneShowcase from '@/components/PhoneShowcase'

export default function Hero() {
    const reducedMotion = useReducedMotion()

    return (
        <section className="flex flex-col items-center gap-12 pt-20 md:flex-row md:justify-between md:gap-14 md:pt-28">
            <div className="flex flex-col gap-4 text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                    <div className="relative h-11 w-11 shrink-0">
                        <Image
                            src="/pp.jpg"
                            alt="Matthys Ducrocq"
                            fill
                            priority
                            className="rounded-full object-cover ring-1 ring-stone-900/15 dark:ring-white/20"
                        />
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-white/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
                        Available for work
                    </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                    Hi, I&apos;m Matthys
                </h1>

                <div className="text-xl font-semibold text-stone-700 dark:text-white/80 md:text-2xl">
                    {reducedMotion ? (
                        <span>Head of Mobile @ Ekklo</span>
                    ) : (
                        <TypeAnimation
                            sequence={[
                                'Head of Mobile @ Ekklo', 2000,
                                'React Native Developer', 2000,
                                'Expo Enthusiast', 2000,
                                'Building Leaf & simgrid', 2000,
                                'Photographer', 2000,
                            ]}
                            speed={45}
                            repeat={Infinity}
                            cursor
                        />
                    )}
                </div>

                <p className="max-w-xl text-base leading-relaxed text-stone-600 dark:text-white/60 md:text-lg">
                    I build mobile apps with React Native and Expo — always on the latest
                    SDK. I&apos;m Head of Mobile at Ekklo, a fitness coaching platform, and
                    I write about what I learn building it.
                </p>

                <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
                    <Link
                        href="/blog"
                        className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-stone-700 dark:bg-white dark:text-black dark:shadow-glow-sm dark:hover:bg-white/90"
                    >
                        Read the blog
                    </Link>
                    <Link
                        href="#building"
                        className="rounded-full border border-stone-900/20 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-900/60 hover:text-stone-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/60 dark:hover:text-white"
                    >
                        What I&apos;m building
                    </Link>
                </div>
            </div>

            <div className="w-full shrink-0 md:w-auto">
                <PhoneShowcase />
            </div>
        </section>
    )
}
```

Note: the `CornerMarks` import and the large framed avatar are intentionally dropped — the profile photo is now the small inline avatar, and the phone is the visual centerpiece.

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: build succeeds. No unused-import lint error for `CornerMarks` (it's removed).

- [ ] **Step 3: Run the dev server and eyeball the home page**

Run: `npm run dev`
Expected: at `/`, desktop shows intro left + phone right; mobile (narrow viewport) stacks intro then phone; icons link out (Ekklo/matthys.dev open in new tab) or to `/portfolio`.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "🎸 feat : Hero deux colonnes avec PhoneShowcase"
```

---

## Task 7: Final verification

- [ ] **Step 1: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: build completes successfully, `/` is generated with no runtime errors.

- [ ] **Step 3: Confirm done**

All 8 grid icons + 4 dock icons render, animation + parallax + hover work, reduced-motion falls back to a static clickable grid, and the home page builds clean.

---

## Self-review notes

- **Spec coverage:** Hero 2-col layout → Task 6. Glass/HUD phone (status bar, dynamic island, scan line, blueprint wallpaper) → Task 1 + Task 4. 8-icon grid (4 product + 4 lab) + dock → Task 2 + Task 4. Glass tiles w/ emoji+logo+status badge → Task 3. Intro stagger + mouse parallax + hover glow + click-through → Task 4. Reduced-motion fallback → Tasks 3, 4 (verified Task 5 Step 3). File split (index/AppIcon/data) → Tasks 2–4. All covered.
- **No anchors:** internal links go to `/portfolio` (confirmed no per-project DOM ids exist).
- **Type consistency:** `ShowcaseApp`, `gridApps`, `dockApps`, `AppIcon` props (`app`, `depth`, `showLabel`) used consistently across Tasks 2–4.
- **No unit-test runner exists** — verification is lint + build + Storybook by design, not an omission.

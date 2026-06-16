import React from 'react'
import CustomLayout from '@/components/CustomLayout'
import Reveal from '@/components/Reveal'
import Seo from '@/components/Seo'
import { CornerMarks, SectionKicker } from '@/components/Blueprint'

type Focus = {
    title: string
    detail: string
}

const NOW_FOCUS: Focus[] = [
    {
        title: 'Leading mobile at Ekklo',
        detail:
            'As Head of Mobile at Ekklo, I lead the apps for an all-in-one platform for fitness coaches: training and nutrition programs, client tracking, messaging, and payments. The mobile apps are built with Expo and used daily by thousands of coaches and athletes.',
    },
    {
        title: 'Building Leaf',
        detail:
            'A multi-user plant logbook for iOS and Android. Recurring care tasks with local notifications, a dated photo journal per plant, and a Today view that gathers every care task that’s due. Built on Expo SDK 56, Expo Router, and Supabase.',
    },
    {
        title: 'Building simgrid',
        detail:
            'A CLI that runs multiple Expo projects across multiple simulators and emulators in parallel, no more alt-tab dance. It reads each project’s identity, keeps a shared device registry, then routes, boots, starts Metro, and deep-links the dev client. Node.js and TypeScript, MIT-licensed.',
    },
    {
        title: 'Writing on the blog',
        detail:
            'I’m writing here on matthys.dev: an MDX blog with shiki-highlighted code, an RSS feed, and a blueprint design built with Next.js, Tailwind, and framer-motion.',
    },
    {
        title: 'Staying on the latest Expo SDK',
        detail:
            'I keep my projects on the newest Expo SDK so the work stays current and the apps I ship benefit from the latest of the platform.',
    },
    {
        title: 'Community: App.js Conf and the podcast',
        detail:
            'Three-time App.js Conf attendee, and co-host of Le Cross Platform Show, the francophone React Native podcast with weshipit.',
    },
]

function FocusCard({ focus, index }: { focus: Focus; index: number }) {
    return (
        <article className="relative rounded-2xl border border-dashed border-stone-900/20 bg-cream/60 p-7 transition-colors hover:border-stone-900/40 dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-sky-300/40">
            <CornerMarks />
            <span className="absolute right-5 top-5 font-mono text-xs text-stone-400 dark:text-white/25">
                {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="pr-8 text-xl font-bold tracking-tight">{focus.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-white/60">
                {focus.detail}
            </p>
        </article>
    )
}

export default function Now() {
    return (
        <CustomLayout>
            <Seo title="Now" path="/now" />

            <Reveal>
                <SectionKicker index="05" label="now" />
                <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                    What I&apos;m doing now
                </h1>
                <p className="mt-4 max-w-2xl leading-relaxed text-stone-600 dark:text-white/60">
                    I&apos;m Matthys, a React Native and Expo developer in Lille. Here&apos;s
                    what I&apos;m actually working on right now: running my studio weshipit,
                    leading mobile at Ekklo, building two side projects, writing, and staying
                    close to the community.
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-stone-400 dark:text-white/40">
                    Last updated June 2026
                </p>
            </Reveal>

            <Reveal className="mt-12">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {NOW_FOCUS.map((focus, i) => (
                        <FocusCard key={focus.title} focus={focus} index={i} />
                    ))}
                </div>
            </Reveal>
        </CustomLayout>
    )
}

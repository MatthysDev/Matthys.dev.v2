import React from 'react'
import Link from 'next/link'
import CustomLayout from '@/components/CustomLayout'
import Reveal from '@/components/Reveal'
import Seo from '@/components/Seo'
import ProofTiles from '@/components/ProofTiles'
import { SectionKicker } from '@/components/Blueprint'

const ABOUT_DESCRIPTION =
    'Matthys Ducrocq — React Native & Expo developer from Lille. Head of Mobile at Ekklo and React Native dev at weshipit. 6+ years building mobile apps with 3,000+ daily users, highly rated on the App Store and Google Play.'

export default function About() {
    return (
        <CustomLayout>
            <Seo title="About" description={ABOUT_DESCRIPTION} path="/about" />

            <Reveal>
                <SectionKicker index="06" label="about" className="text-center" />
                <h1 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
                    About me
                </h1>

                <div className="mx-auto mt-6 max-w-2xl space-y-5 leading-relaxed text-stone-600 dark:text-white/70">
                    <p>
                        I&apos;m Matthys Ducrocq — a{' '}
                        <strong className="font-semibold text-stone-900 dark:text-white">
                            React Native &amp; Expo developer
                        </strong>{' '}
                        from Lille, France. For{' '}
                        <strong className="font-semibold text-stone-900 dark:text-white">
                            6+ years
                        </strong>{' '}
                        I&apos;ve built mobile apps that ship to real users — and stay
                        shipped. At{' '}
                        <a
                            href="https://weshipit.today"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                        >
                            weshipit
                        </a>{' '}
                        I work as a React Native developer, making apps fast and ready to
                        scale.
                    </p>

                    <p>
                        I don&apos;t just prototype: I build apps people open every day. As{' '}
                        <strong className="font-semibold text-stone-900 dark:text-white">
                            Head of Mobile at{' '}
                            <a
                                href="https://www.ekklo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 transition hover:opacity-70"
                            >
                                Ekklo
                            </a>
                        </strong>
                        , I lead a fitness-coaching platform with{' '}
                        <strong className="font-semibold text-stone-900 dark:text-white">
                            3,000+ daily active
                        </strong>{' '}
                        coaches and athletes. Across 11+ clients, the apps I&apos;ve shipped
                        are{' '}
                        <strong className="font-semibold text-stone-900 dark:text-white">
                            highly rated on the App Store and Google Play
                        </strong>{' '}
                        — and they keep those ratings because I treat performance,
                        reliability and maintenance as part of the job, not an afterthought.
                    </p>

                    <p>
                        I build with{' '}
                        <a
                            href="https://expo.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                        >
                            Expo
                        </a>{' '}
                        on the latest SDK and ship with{' '}
                        <a
                            href="https://docs.expo.dev/build/introduction/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                        >
                            EAS Build and Updates
                        </a>
                        . I keep the stack boring where it counts — typed TypeScript,
                        real-device testing, OTA updates, performance budgets — so I can ship
                        fast without shipping fragile. When Expo isn&apos;t enough, I drop
                        down to native modules.
                    </p>

                    <p>
                        I&apos;m a three-time{' '}
                        <a
                            href="https://appjs.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                        >
                            App.js Conf
                        </a>{' '}
                        attendee, and I occasionally join Le Cross Platform Show, the
                        francophone React Native podcast. I build in the open too — tools
                        like{' '}
                        <a
                            href="https://matthysdev.github.io/simgrid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                        >
                            simgrid
                        </a>{' '}
                        come straight out of my own daily workflow.
                    </p>
                </div>
            </Reveal>

            <Reveal className="mt-12">
                <ProofTiles />
            </Reveal>

            <Reveal className="mt-16">
                <p className="text-center text-stone-600 dark:text-white/60">
                    See what I&apos;ve shipped on the{' '}
                    <Link
                        href="/portfolio"
                        className="font-semibold text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                    >
                        portfolio
                    </Link>
                    , what I&apos;m{' '}
                    <Link
                        href="/now"
                        className="font-semibold text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                    >
                        working on now
                    </Link>
                    , or{' '}
                    <Link
                        href="/#contact"
                        className="font-semibold text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                    >
                        get in touch
                    </Link>
                    .
                </p>
            </Reveal>
        </CustomLayout>
    )
}

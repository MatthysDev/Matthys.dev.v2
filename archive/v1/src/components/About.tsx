import React from 'react'
import Link from 'next/link'
import { SectionKicker } from '@/components/Blueprint'
import ProofTiles from '@/components/ProofTiles'

export default function About() {
    return (
        <section className="text-center">
            <SectionKicker index="01" label="about" className="text-center" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                I build apps people actually use
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-stone-600 dark:text-white/60">
                Six years in, I&apos;m a React Native &amp; Expo developer — Head of Mobile
                at Ekklo and a React Native dev at weshipit. The apps I build are used daily
                by thousands and stay highly rated on the App Store and Google Play, because
                I build them to be fast and to scale.
            </p>

            <div className="mt-10">
                <ProofTiles />
            </div>

            <Link
                href="/about"
                className="mt-8 inline-block text-sm font-semibold text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
            >
                More about me →
            </Link>
        </section>
    )
}

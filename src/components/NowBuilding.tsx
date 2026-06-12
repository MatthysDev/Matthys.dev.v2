import React from 'react'
import Image from 'next/image'

const STACK = ['Expo', 'React Native', 'TypeScript', 'EAS']

export default function NowBuilding() {
    return (
        <section id="ekklo" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                What I&apos;m building now
            </h2>
            <div className="mt-8 rounded-2xl border border-stone-900/10 bg-stone-900/[0.03] p-7 dark:border-white/10 dark:bg-white/5 md:p-9">
                <div className="flex items-center gap-4">
                    <Image
                        src="/clients/ekklo.png"
                        alt="Ekklo"
                        width={44}
                        height={44}
                        className="rounded-lg"
                    />
                    <div>
                        <h3 className="text-xl font-bold tracking-tight">Ekklo</h3>
                        <p className="text-sm text-stone-500 dark:text-white/50">
                            Fitness coaching platform
                        </p>
                    </div>
                </div>
                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600 dark:text-white/60">
                    The all-in-one platform for fitness coaches: training and nutrition
                    programs, client tracking, messaging and payments. I work full-time on
                    the mobile apps — built with Expo, used daily by thousands of coaches
                    and their athletes.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {STACK.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-stone-900/10 px-3 py-1 text-xs font-medium text-stone-600 dark:border-white/10 dark:text-white/60"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href="https://www.ekklo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block text-sm font-semibold text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                >
                    ekklo.com →
                </a>
            </div>
        </section>
    )
}

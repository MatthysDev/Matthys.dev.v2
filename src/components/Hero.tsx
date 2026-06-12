'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-10 pt-20 md:flex-row md:gap-14 md:pt-28">
            <div className="relative h-36 w-36 shrink-0 md:h-44 md:w-44">
                <div className="absolute inset-0 rounded-full shadow-[0_0_24px_2px_rgba(28,25,23,0.15)] dark:shadow-glow" />
                <Image
                    src="/pp.jpg"
                    alt="Matthys Ducrocq"
                    fill
                    priority
                    className="rounded-full object-cover ring-1 ring-stone-900/15 dark:ring-white/20"
                />
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
                <span className="inline-flex items-center gap-2 self-center text-sm font-medium text-stone-500 dark:text-white/50 md:self-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
                    Available for work
                </span>

                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                    Hi, I&apos;m Matthys
                </h1>

                <div className="text-xl font-semibold text-stone-700 dark:text-white/80 md:text-2xl">
                    <TypeAnimation
                        sequence={[
                            'React Native Developer', 2000,
                            'Expo Enthusiast', 2000,
                            'Building Ekklo', 2000,
                            'Photographer', 2000,
                        ]}
                        speed={45}
                        repeat={Infinity}
                        cursor
                    />
                </div>

                <p className="max-w-xl text-base leading-relaxed text-stone-600 dark:text-white/60 md:text-lg">
                    I build mobile apps with React Native and Expo — always on the latest
                    SDK. Right now I&apos;m all-in on Ekklo, a fitness coaching platform,
                    and I write about what I learn building it.
                </p>

                <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
                    <Link
                        href="/blog"
                        className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-stone-700 dark:bg-white dark:text-black dark:shadow-glow-sm dark:hover:bg-white/90"
                    >
                        Read the blog
                    </Link>
                    <Link
                        href="#ekklo"
                        className="rounded-full border border-stone-900/20 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-900/60 hover:text-stone-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/60 dark:hover:text-white"
                    >
                        What I&apos;m building
                    </Link>
                </div>
            </div>
        </section>
    )
}

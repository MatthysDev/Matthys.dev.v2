'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-10 pt-20 md:flex-row md:gap-14 md:pt-28">
            <div className="relative h-36 w-36 shrink-0 md:h-44 md:w-44">
                <div className="absolute inset-0 rounded-full shadow-glow" />
                <Image
                    src="/pp.jpg"
                    alt="Matthys Ducrocq"
                    fill
                    priority
                    className="rounded-full object-cover ring-1 ring-white/20"
                />
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
                <span className="inline-flex items-center gap-2 self-center text-sm font-medium text-white/50 md:self-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
                    Available for work
                </span>

                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                    Hi, I&apos;m Matthys
                </h1>

                <div className="text-xl font-semibold text-white/80 md:text-2xl">
                    <TypeAnimation
                        sequence={[
                            'React Native Developer', 2000,
                            'Creative Coder', 2000,
                            'Photographer', 2000,
                            'Drone Pilot', 2000,
                        ]}
                        speed={45}
                        repeat={Infinity}
                        cursor
                    />
                </div>

                <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                    I build aesthetically pleasing mobile and web apps with React Native
                    and Tailwind. Beyond code, I capture moments through photography,
                    video and aerial perspectives — where engineering meets creativity.
                </p>
            </div>
        </section>
    )
}

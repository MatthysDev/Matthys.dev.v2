'use client'
import React, { useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'

const STATS = [
    { value: 6, suffix: '+', label: 'years of React Native' },
    { value: 11, suffix: '+', label: 'clients shipped' },
    { value: 3, suffix: '×', label: 'App.js Conf' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const reducedMotion = useReducedMotion()

    useEffect(() => {
        if (!inView || !ref.current) return
        if (reducedMotion) {
            ref.current.textContent = `${value}${suffix}`
            return
        }
        const controls = animate(0, value, {
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
            },
        })
        return () => controls.stop()
    }, [inView, value, suffix, reducedMotion])

    return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
    return (
        <dl className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
            {STATS.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
                >
                    <dd className="font-mono text-3xl font-bold tracking-tight tabular-nums">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                    </dd>
                    <dt className="mt-1 text-sm text-stone-500 dark:text-white/50">
                        {stat.label}
                    </dt>
                </motion.div>
            ))}
        </dl>
    )
}

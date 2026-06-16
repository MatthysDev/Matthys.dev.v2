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

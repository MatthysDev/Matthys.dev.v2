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
    /** 'md' for the home grid, 'sm' for the dock (more breathing room). */
    size?: 'sm' | 'md'
}

export default function AppIcon({
    app,
    depth = 0,
    showLabel = true,
    size = 'md',
}: AppIconProps) {
    const reducedMotion = useReducedMotion()

    // The phone screen is always dark, so icon glyphs/labels stay light
    // regardless of the site's light/dark theme.
    const tileSize =
        size === 'sm'
            ? 'h-10 w-10 text-xl md:h-11 md:w-11'
            : 'h-12 w-12 text-2xl md:h-14 md:w-14'

    const tile = (
        <motion.div
            style={reducedMotion ? undefined : { transform: `translateZ(${depth}px)` }}
            whileHover={reducedMotion ? undefined : { y: -4, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group/icon flex flex-col items-center gap-1.5"
        >
            <div
                className={`relative flex items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition group-hover/icon:shadow-[0_0_18px_2px_rgba(56,189,248,0.45)] group-hover/icon:ring-sky-300/60 ${tileSize}`}
            >
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
                        aria-hidden="true"
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

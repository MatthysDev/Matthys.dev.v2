import React from 'react'

/** Small "+" crosshair used at the corners of blueprint cards. */
export function CornerMark({ className = '' }: { className?: string }) {
    return (
        <span
            aria-hidden
            className={`pointer-events-none absolute h-3 w-3 ${className}`}
        >
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-stone-900/30 dark:bg-sky-300/40" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-stone-900/30 dark:bg-sky-300/40" />
        </span>
    )
}

/** Wraps children with the four corner crosshairs. */
export function CornerMarks() {
    return (
        <>
            <CornerMark className="-left-1.5 -top-1.5" />
            <CornerMark className="-right-1.5 -top-1.5" />
            <CornerMark className="-bottom-1.5 -left-1.5" />
            <CornerMark className="-bottom-1.5 -right-1.5" />
        </>
    )
}

/** Monospace section label, e.g. "01 / building". */
export function SectionKicker({
    index,
    label,
    className = '',
}: {
    index: string
    label: string
    className?: string
}) {
    return (
        <p
            className={`font-mono text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-sky-300/60 ${className}`}
        >
            <span className="text-stone-400 dark:text-sky-300/40">{index}</span>
            <span className="mx-2 text-stone-300 dark:text-white/20">/</span>
            {label}
        </p>
    )
}

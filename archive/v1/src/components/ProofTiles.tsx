'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CornerMarks } from '@/components/Blueprint'

type Tile = { value: string; label: string; valueClassName?: string }

const TILES: Tile[] = [
    { value: '6+', label: 'years shipping React Native' },
    { value: '3K+', label: 'daily active users' },
    { value: '11+', label: 'clients shipped' },
    // Text value (not a number) — smaller size + no-wrap so it stays on one line
    // and doesn't inflate this tile against the numeric ones.
    { value: 'Top-rated', label: 'on App Store & Play Store', valueClassName: 'text-lg md:text-xl' },
]

export default function ProofTiles() {
    return (
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {TILES.map((tile, i) => (
                <motion.div
                    key={tile.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                    className="relative rounded-2xl border border-dashed border-stone-900/20 bg-stone-900/[0.02] p-5 text-center dark:border-white/15 dark:bg-white/[0.02]"
                >
                    <CornerMarks />
                    <div
                        className={`flex h-9 items-center justify-center whitespace-nowrap font-mono text-2xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-white md:h-11 md:text-3xl ${
                            tile.valueClassName ?? ''
                        }`}
                    >
                        {tile.value}
                    </div>
                    <div className="mt-1 text-xs leading-snug text-stone-500 dark:text-white/50">
                        {tile.label}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

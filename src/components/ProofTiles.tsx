'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CornerMarks } from '@/components/Blueprint'

type Tile = { value: string; label: string }

const TILES: Tile[] = [
    { value: '6+', label: 'years shipping React Native' },
    { value: '3K+', label: 'daily active users' },
    { value: '11+', label: 'clients shipped' },
    { value: 'Top-rated', label: 'on App Store & Play Store' },
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
                    <div className="font-mono text-2xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-white md:text-3xl">
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

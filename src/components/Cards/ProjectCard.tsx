'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CornerMarks } from '@/components/Blueprint'

type ProjectCardProps = {
    selectedId: number | null
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>
    item: { id: number; title: string; subtitle: string }
    websiteUrl: string
    image: string
    name: string
    description: string
    longDescription?: string
}

function isValidUrl(url: string): boolean {
    return /^https?:\/\/.+/.test(url)
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    websiteUrl,
    image,
    name,
    description,
    selectedId,
    setSelectedId,
    item,
    longDescription,
}) => {
    const isSelected = selectedId === item.id
    const hasUrl = isValidUrl(websiteUrl)
    const index = String(item.id).padStart(2, '0')

    return (
        <>
            <motion.div
                layoutId={item.id.toString()}
                onClick={() => setSelectedId(isSelected ? null : item.id)}
                className="group relative h-full cursor-pointer rounded-2xl border border-dashed border-stone-900/20 bg-stone-900/[0.02] p-5 transition-colors hover:border-stone-900/40 dark:border-white/15 dark:bg-white/[0.02] dark:hover:border-sky-300/40"
            >
                <CornerMarks />
                <div className="flex items-start justify-between">
                    <div
                        aria-hidden
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-stone-900/20 text-2xl dark:border-white/15"
                    >
                        {image}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400 dark:text-sky-300/40">
                        {index}
                    </span>
                </div>
                <h2 className="mt-4 text-lg font-bold tracking-tight text-stone-900 dark:text-white">
                    {name}
                </h2>
                <p className="mt-2 text-sm text-stone-600 dark:text-white/60">{description}</p>
                {hasUrl && (
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors group-hover:text-stone-900 dark:text-white/50 dark:group-hover:text-sky-300">
                        visit -&gt;
                    </span>
                )}
            </motion.div>

            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={item.id.toString()}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg rounded-2xl border border-dashed border-stone-900/20 bg-cream p-7 shadow-xl dark:border-sky-300/40 dark:bg-[#050505]"
                        >
                            <CornerMarks />
                            <div className="flex items-start justify-between">
                                <div
                                    aria-hidden
                                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-dashed border-stone-900/20 text-3xl dark:border-white/15"
                                >
                                    {image}
                                </div>
                                <button
                                    type="button"
                                    aria-label="Close"
                                    onClick={() => setSelectedId(null)}
                                    className="rounded-full border border-dashed border-stone-900/20 p-2 text-stone-600 transition-colors hover:border-stone-900/40 dark:border-white/15 dark:text-white/60 dark:hover:border-sky-300/40"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        height="16"
                                        width="12"
                                        fill="currentColor"
                                    >
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                    </svg>
                                </button>
                            </div>
                            <h2 className="mt-5 text-2xl font-bold tracking-tight text-stone-900 dark:text-white">
                                {name}
                            </h2>
                            <p className="mt-3 text-stone-600 dark:text-white/60">
                                {longDescription ? longDescription : description}
                            </p>
                            {hasUrl && (
                                <a
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-1 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-cream transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                                >
                                    Visit {name} -&gt;
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ProjectCard

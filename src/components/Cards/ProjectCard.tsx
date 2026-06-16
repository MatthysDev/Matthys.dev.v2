'use client'

import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CornerMarks } from '@/components/Blueprint'
import type { Project } from '@/apiData/projects'

type ProjectCardProps = {
    project: Project
    id: number
    selectedId: number | null
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>
}

function isValidUrl(url?: string): url is string {
    return !!url && /^https?:\/\/.+/.test(url)
}

const STATUS_STYLES: Record<NonNullable<Project['status']>, string> = {
    live: 'text-emerald-600 dark:text-emerald-400',
    building: 'text-amber-600 dark:text-amber-400',
    shipped: 'text-stone-500 dark:text-white/50',
    'open-source': 'text-sky-600 dark:text-sky-400',
}

function Symbol({ project, size }: { project: Project; size: 'sm' | 'lg' }) {
    const box =
        size === 'lg'
            ? 'h-14 w-14 text-3xl'
            : 'h-12 w-12 text-2xl'
    if (project.logo) {
        return (
            <div
                className={`flex ${box} items-center justify-center overflow-hidden rounded-xl bg-white p-2 ring-1 ring-stone-900/10 dark:ring-white/10`}
            >
                <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                />
            </div>
        )
    }
    return (
        <div
            aria-hidden
            className={`flex ${box} items-center justify-center rounded-xl border border-dashed border-stone-900/20 font-mono dark:border-white/15`}
        >
            {project.img}
        </div>
    )
}

function StackTags({ stack }: { stack?: string[] }) {
    if (!stack?.length) return null
    return (
        <div className="mt-4 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
                <span
                    key={tech}
                    className="rounded-full border border-stone-900/10 px-2.5 py-0.5 text-[11px] font-medium text-stone-600 dark:border-white/10 dark:text-white/60"
                >
                    {tech}
                </span>
            ))}
        </div>
    )
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, id, selectedId, setSelectedId }) => {
    const isSelected = selectedId === id
    const hasUrl = isValidUrl(project.websiteUrl)
    const index = String(id).padStart(2, '0')
    const statusClass = project.status ? STATUS_STYLES[project.status] : ''

    return (
        <>
            <motion.div
                layoutId={id.toString()}
                onClick={() => setSelectedId(isSelected ? null : id)}
                whileHover={{ y: -4 }}
                className="group relative flex h-full cursor-pointer flex-col rounded-2xl border border-dashed border-stone-900/20 bg-stone-900/[0.02] p-5 transition-colors hover:border-stone-900/40 dark:border-white/15 dark:bg-white/[0.02] dark:hover:border-sky-300/40"
            >
                <CornerMarks />
                <div className="flex items-start justify-between">
                    <Symbol project={project} size="sm" />
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400 dark:text-sky-300/40">
                        {index}
                    </span>
                </div>

                <h2 className="mt-4 text-lg font-bold tracking-tight text-stone-900 dark:text-white">
                    {project.name}
                </h2>
                {project.role && (
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-stone-400 dark:text-white/40">
                        {project.role}
                    </p>
                )}
                <p className="mt-2 text-sm text-stone-600 dark:text-white/60">
                    {project.description}
                </p>

                <StackTags stack={project.stack} />

                <div className="mt-4 flex items-center justify-between">
                    {project.status && (
                        <span className={`font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${statusClass}`}>
                            {project.status}
                        </span>
                    )}
                    {hasUrl && (
                        <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors group-hover:text-stone-900 dark:text-white/50 dark:group-hover:text-sky-300">
                            visit -&gt;
                        </span>
                    )}
                </div>
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
                            layoutId={id.toString()}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg rounded-2xl border border-dashed border-stone-900/20 bg-cream p-7 shadow-xl dark:border-sky-300/40 dark:bg-[#050505]"
                        >
                            <CornerMarks />
                            <div className="flex items-start justify-between">
                                <Symbol project={project} size="lg" />
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
                                {project.name}
                            </h2>
                            {project.role && (
                                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-stone-400 dark:text-white/40">
                                    {project.role}
                                </p>
                            )}
                            <p className="mt-3 text-stone-600 dark:text-white/60">
                                {project.longDescription ?? project.description}
                            </p>

                            <StackTags stack={project.stack} />

                            {hasUrl && (
                                <a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-1 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-cream transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                                >
                                    Visit {project.name} -&gt;
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

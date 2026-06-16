'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CornerMarks, SectionKicker } from '@/components/Blueprint'

type Project = {
    name: string
    tagline: string
    status: string
    statusClass: string
    description: string
    stack: string[]
    link?: { href: string; label: string }
    logo?: string
    symbol?: string
    featured?: boolean
}

const PROJECTS: Project[] = [
    {
        name: 'weshipit.today',
        tagline: 'React Native app studio',
        status: 'shipping',
        statusClass: 'text-emerald-600 dark:text-emerald-400',
        description:
            'My studio. We ship React Native apps end to end — turning your idea into a released product on the App Store and Play Store. Web and mobile for startups, fast.',
        stack: ['React Native', 'Expo', 'Next.js', 'Nx'],
        link: { href: 'https://weshipit.today', label: 'weshipit.today →' },
        logo: '/clients/weshipit.png',
        featured: true,
    },
    {
        name: 'Leaf',
        tagline: 'Plant care logbook',
        status: 'building',
        statusClass: 'text-amber-600 dark:text-amber-400',
        description:
            'A personal plant logbook for iOS and Android — recurring care reminders with local notifications, a dated photo journal per plant, and a daily view of everything that needs watering today.',
        stack: ['Expo SDK 56', 'Supabase', 'Legend State', 'Vision Camera'],
        symbol: '🌿',
    },
    {
        name: 'simgrid',
        tagline: 'Simulator orchestrator CLI',
        status: 'building',
        statusClass: 'text-amber-600 dark:text-amber-400',
        description:
            'One grid for all your simulators — run multiple Expo projects on multiple devices in parallel, without the alt-tab dance. It routes each project to the right simulator automatically.',
        stack: ['Node.js', 'TypeScript', 'CLI'],
        link: { href: 'https://matthysdev.github.io/simgrid/', label: 'simgrid docs →' },
        symbol: '▦',
    },
    {
        name: 'DearValentine',
        tagline: 'Send a date invite to your crush',
        status: 'live',
        statusClass: 'text-sky-600 dark:text-sky-400',
        description:
            'A playful side project — send a date invitation to your crush and let them RSVP. Built in a weekend, live for anyone to use.',
        stack: ['Next.js', 'Tailwind', 'Supabase'],
        link: { href: 'https://dear-valentine.vercel.app', label: 'dear-valentine →' },
        symbol: '❤️',
    },
    {
        name: 'Ekklo',
        tagline: 'Fitness coaching platform',
        status: 'building',
        statusClass: 'text-amber-600 dark:text-amber-400',
        description:
            'The all-in-one platform for fitness coaches: training and nutrition programs, client tracking, messaging and payments. I lead the mobile apps as Head of Mobile — built with Expo, used daily by thousands of coaches and their athletes.',
        stack: ['Expo', 'React Native', 'TypeScript', 'EAS'],
        link: { href: 'https://www.ekklo.com', label: 'ekklo.com →' },
        logo: '/clients/ekklo.png',
    },
]

function StatusBadge({ status, statusClass }: { status: string; statusClass: string }) {
    return (
        <span
            className={`inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${statusClass}`}
        >
            <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
            </span>
            {status}
        </span>
    )
}

function ProjectTile({ project }: { project: Project }) {
    return (
        <div className="flex items-center gap-4">
            {project.logo ? (
                <Image
                    src={project.logo}
                    alt={project.name}
                    width={44}
                    height={44}
                    className="rounded-lg"
                />
            ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone-900/10 bg-stone-900/[0.03] font-mono text-lg dark:border-white/10 dark:bg-white/5">
                    {project.symbol}
                </span>
            )}
            <div>
                <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
                <p className="text-sm text-stone-500 dark:text-white/50">
                    {project.tagline}
                </p>
            </div>
        </div>
    )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`relative rounded-2xl border border-dashed border-stone-900/20 bg-cream/60 p-7 transition-colors hover:border-stone-900/40 dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-sky-300/40 ${
                project.featured ? 'md:col-span-2 md:p-9' : ''
            }`}
        >
            <CornerMarks />
            <span className="absolute right-5 top-5 font-mono text-xs text-stone-400 dark:text-white/25">
                {String(index + 1).padStart(2, '0')}
            </span>

            <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
                <ProjectTile project={project} />
                <StatusBadge status={project.status} statusClass={project.statusClass} />
            </div>

            <p
                className={`mt-5 leading-relaxed text-stone-600 dark:text-white/60 ${
                    project.featured ? 'max-w-2xl' : 'text-sm'
                }`}
            >
                {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-stone-900/10 px-3 py-1 text-xs font-medium text-stone-600 dark:border-white/10 dark:text-white/60"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {project.link && (
                <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block text-sm font-semibold text-stone-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white"
                >
                    {project.link.label}
                </a>
            )}
        </motion.article>
    )
}

export default function NowBuilding() {
    return (
        <section id="building" className="scroll-mt-24">
            {/* Kept for old #ekklo anchors */}
            <span id="ekklo" />
            <SectionKicker index="02" label="building" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                What I&apos;m building now
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.name} project={project} index={i} />
                ))}
            </div>
        </section>
    )
}

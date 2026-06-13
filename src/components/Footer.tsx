import Link from 'next/link'
import React from 'react'

const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/now', label: 'Now' },
    { href: '/#contact', label: 'Contact' },
]

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/MatthysDev',
        external: true,
        icon: (
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/matthys-ducrocq',
        external: true,
        icon: (
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
        ),
    },
    {
        label: 'X',
        href: 'https://twitter.com/MatthysDev',
        external: true,
        icon: (
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        ),
    },
    {
        label: 'Email',
        href: 'mailto:ducrocq.matthys@gmail.com',
        external: false,
        icon: (
            <path d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.4-.75L12 11.4 20.1 4.5H3.9Zm17.1 1.34-8.52 7.26a.75.75 0 0 1-.96 0L3 5.84v12.91c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V5.84Z" />
        ),
    },
    {
        label: 'RSS',
        href: '/rss.xml',
        external: true,
        icon: (
            <path d="M3.75 3a.75.75 0 0 0-.75.75v2.25c0 .41.34.75.75.75A14.25 14.25 0 0 1 18 21c0 .41.34.75.75.75H21a.75.75 0 0 0 .75-.75C21.75 11.06 13.94 3.25 4 3.25a.75.75 0 0 0-.25 0Zm0 6.75a.75.75 0 0 0-.75.75v2.25c0 .41.34.75.75.75A7.5 7.5 0 0 1 11.25 21c0 .41.34.75.75.75h2.25a.75.75 0 0 0 .75-.75c0-6.21-5.04-11.25-11.25-11.25ZM6 18a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 6 18Z" />
        ),
    },
]

export default function Footer() {
    return (
        <footer className="relative z-10 mt-24 border-t border-stone-900/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Left — wordmark + tagline */}
                    <div className="space-y-3">
                        <Link
                            href="/"
                            className="text-lg font-bold tracking-tight text-stone-900 transition hover:opacity-80 dark:text-white dark:[text-shadow:0_0_8px_rgba(255,255,255,0.25)]"
                        >
                            Matthys<span className="text-stone-500 dark:text-white/50">.dev</span>
                        </Link>
                        <p className="max-w-xs text-sm text-stone-600 dark:text-white/60">
                            React Native and Expo developer, building from Lille.
                        </p>
                        <p className="font-mono text-xs text-stone-400 dark:text-white/30">
                            Built with Next.js, Tailwind &amp; MDX
                        </p>
                    </div>

                    {/* Middle — nav */}
                    <nav className="flex flex-col gap-2.5">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="w-fit text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-white/60 dark:hover:text-white"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right — social */}
                    <div className="flex flex-wrap items-start gap-3 md:justify-end">
                        {socialLinks.map(({ label, href, external, icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                title={label}
                                {...(external
                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                    : {})}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-stone-900/20 text-stone-600 transition hover:border-stone-900/40 hover:text-stone-900 dark:border-white/15 dark:text-white/60 dark:hover:border-sky-300/40 dark:hover:text-white"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    aria-hidden
                                >
                                    {icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-12 flex flex-col gap-3 border-t border-stone-900/5 pt-6 font-mono text-xs text-stone-500 dark:border-white/5 dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <span>© 2026 Matthys Ducrocq</span>
                    <div className="flex items-center gap-4">
                        <span className="text-stone-400 dark:text-white/30">Lille, France</span>
                        <span className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>
                            available for work
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

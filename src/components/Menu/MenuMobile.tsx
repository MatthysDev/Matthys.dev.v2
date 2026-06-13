import Link from 'next/link';
import React from 'react'
import ThemeToggle from '@/components/ThemeToggle';

export default function MenuMobile() {
    return (
        <nav className="flex w-full items-center justify-between px-6 py-5">
            <Link
                href="/"
                className="text-base font-bold tracking-tight text-stone-900 transition hover:opacity-80 dark:text-white dark:[text-shadow:0_0_8px_rgba(255,255,255,0.25)]"
            >
                Matthys<span className="text-stone-500 dark:text-white/50">.dev</span>
            </Link>
            <div className="flex items-center gap-2.5">
                <Link
                    href="/blog"
                    className="text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-white/60 dark:hover:text-white"
                >
                    Blog
                </Link>
                <Link
                    href="/portfolio"
                    className="text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-white/60 dark:hover:text-white"
                >
                    Portfolio
                </Link>
                <Link
                    href="/now"
                    className="text-sm font-medium text-stone-600 transition hover:text-stone-900 dark:text-white/60 dark:hover:text-white"
                >
                    Now
                </Link>
                <ThemeToggle />
                <Link
                    href="/#contact"
                    className="rounded-full border border-stone-900/20 px-3.5 py-1.5 text-sm font-medium text-stone-700 transition hover:border-stone-900/60 hover:text-stone-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/60 dark:hover:text-white"
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}

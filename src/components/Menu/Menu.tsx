import Link from 'next/link'
import React from 'react'
import { neonSubtle } from '@/components/neonStyles'

export default function Menu() {
    return (
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-6">
            <Link
                href="/"
                className="text-lg font-bold tracking-tight text-white transition hover:opacity-80"
                style={neonSubtle}
            >
                Matthys<span className="text-white/50">.dev</span>
            </Link>
            <Link
                href="#contact"
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white/80 transition hover:border-white/60 hover:text-white"
            >
                Contact
            </Link>
        </nav>
    )
}

import Link from 'next/link';
import React from 'react'
import { neonSubtle } from '@/components/neonStyles';

export default function MenuMobile() {
    return (
        <nav className="flex w-full items-center justify-between px-6 py-5">
            <Link
                href="/"
                className="text-base font-bold tracking-tight text-white transition hover:opacity-80"
                style={neonSubtle}
            >
                Matthys<span className="text-white/50">.dev</span>
            </Link>
            <Link
                href="#contact"
                className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm font-medium text-white/80 transition hover:border-white/60 hover:text-white"
            >
                Contact
            </Link>
        </nav>
    )
}

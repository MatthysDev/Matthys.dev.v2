import { neonBlanc, neonPurple } from '@/components/neonStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Menu({ }: Props) {
    const router = useRouter();
    return (
        <div className=' w-2/3 m-auto flex py-8'>
            <Link href='/about' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                    style={router.pathname === '/about' ? neonPurple : neonBlanc}
                >
                    About
                </a>
            </Link>
            <Link href='/posters' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                    style={router.pathname === '/posters' ? neonPurple : neonBlanc}
                >
                    Posters
                </a>
            </Link>
            <Link href='/' legacyBehavior passHref>
                <a
                    className={`text-3xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                    style={router.pathname === '/' ? neonPurple : neonBlanc}
                >
                    Matthys.Dev
                </a>
            </Link>
            <Link href='/video' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                    style={router.pathname === '/video' ? neonPurple : neonBlanc}
                >
                    Video
                </a>
            </Link>
            <Link href='/contact' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                    style={router.pathname === '/contact' ? neonPurple : neonBlanc}
                >
                    Contact
                </a>
            </Link>
        </div>
    )
}
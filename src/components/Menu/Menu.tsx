import { neonBlanc, neonPurple, neonBlack, neonBlue } from '@/components/neonStyles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

export default function Menu({ }: Props) {
    const router = useRouter();
    return (
        <div className='w-2/3 m-auto flex py-8 text-white'>
            <Link href='/about' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold relative m-auto ${router.pathname === '/about' ? 'neon-blue' : 'neon-black'} dark:neon-white`}
                    style={router.pathname === '/about' ? neonBlue : {}}
                >
                    About
                </a>
            </Link>
            <Link href='/posters' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold relative m-auto ${router.pathname === '/posters' ? 'neon-purple' : 'neon-black'} dark:neon-white`}
                    style={router.pathname === '/posters' ? neonPurple : {}}
                >
                    Posters
                </a>
            </Link>
            <Link href='/' legacyBehavior passHref>
                <a
                    className={`text-3xl font-bold relative m-auto ${router.pathname === '/' ? 'neon-purple' : 'neon-black'} dark:neon-white`}
                    style={router.pathname === '/' ? neonPurple : {}}
                >
                    Matthys.Dev
                </a>
            </Link>
            <Link href='/video' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold relative m-auto ${router.pathname === '/video' ? 'neon-purple' : 'neon-black'} dark:neon-white`}
                    style={router.pathname === '/video' ? neonPurple : {}}
                >
                    Video
                </a>
            </Link>
            <Link href='/contact' legacyBehavior passHref>
                <a
                    className={`text-xl font-bold relative m-auto ${router.pathname === '/contact' ? 'neon-purple' : 'neon-black'} dark:neon-white`}
                    style={router.pathname === '/contact' ? neonPurple : {}}
                >
                    Contact
                </a>
            </Link>
        </div>
    );
}

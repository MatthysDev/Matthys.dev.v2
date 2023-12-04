import React from 'react'
import { neonBlue, neonPurple } from '@/components/neonStyles';
import Link from 'next/link';

type Props = {
    link: string
}

export default function Button({ link }: Props) {
    return (
        <div className='flex gap-8 mt-32'>
            {/* Neon Purple Button */}
            <Link href='/about'>
                <button style={{ padding: '20px', margin: '20px', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 0 30px #93C5FD' }} className='bg-sky-200 text-black'>
                    See more about me
                </button>
            </Link>
            {/* Neon Blue Div */}
            <a href={link} target='_blank'>
                <button style={{ padding: '20px', margin: '20px', borderRadius: '8px', boxShadow: '0 0 30px #D8B4FE' }} className='bg-purple-300 text-black'>
                    Contact me.
                </button>
            </a>
        </div>
    )
}
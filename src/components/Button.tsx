import React from 'react';
import Link from 'next/link';

type Props = {
    link: string;
    isExternal?: boolean;
    text: string;
    color: string;
    className?: string;
    neonColor?: string;
};

export default function Button({ link, isExternal, text, color, className, neonColor }: Props) {
    const neonShadow = neonColor ? { boxShadow: `0 0 30px ${neonColor}` } : {};

    return (
        <>
            {isExternal ? (
                <a href={link} target='_blank' className='m-5'>
                    <button style={{ ...neonShadow }} className={`text-black rounded-lg p-5 ${color} ${className}`}>
                        {text}
                    </button>
                </a>
            ) : (
                <Link href={link} className='m-5'>
                    <button style={{ ...neonShadow }} className={`text-black rounded-lg p-5 ${color} ${className}`}>
                        {text}
                    </button>
                </Link>
            )}
        </>
    );
}

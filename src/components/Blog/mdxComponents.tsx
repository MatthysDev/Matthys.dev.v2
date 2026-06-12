import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { MDXRemoteProps } from 'next-mdx-remote'

export function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-6 rounded-xl border border-stone-900/10 bg-stone-900/5 px-5 py-4 text-stone-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80 [&_p]:my-0">
            {children}
        </div>
    )
}

const mdxComponents: MDXRemoteProps['components'] = {
    a: ({ href = '', children, ...rest }) => {
        if (href.startsWith('/') || href.startsWith('#')) {
            return (
                <Link href={href} {...rest}>
                    {children}
                </Link>
            )
        }
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                {children}
            </a>
        )
    },
    img: ({ src, alt }) => (
        <Image
            src={String(src)}
            alt={alt ?? ''}
            width={1200}
            height={675}
            className="h-auto w-full rounded-xl"
        />
    ),
    Callout,
}

export default mdxComponents

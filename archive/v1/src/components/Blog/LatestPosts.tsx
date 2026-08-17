import React from 'react'
import Link from 'next/link'
import PostCard from '@/components/Blog/PostCard'
import { SectionKicker } from '@/components/Blueprint'
import type { PostMeta } from '@/utils/posts'

export default function LatestPosts({ posts }: { posts: PostMeta[] }) {
    if (posts.length === 0) return null

    return (
        <section>
            <div className="flex items-end justify-between gap-6">
                <div>
                    <SectionKicker index="03" label="writing" />
                    <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                        Latest writing
                    </h2>
                    <p className="mt-3 max-w-xl text-stone-600 dark:text-white/60">
                        Notes from building Ekklo with Expo and React Native.
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="hidden shrink-0 text-sm font-medium text-stone-500 transition hover:text-stone-900 dark:text-white/50 dark:hover:text-white md:block"
                >
                    All posts →
                </Link>
            </div>
            <div className="mt-10 flex flex-col gap-5">
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
            <Link
                href="/blog"
                className="mt-8 inline-block text-sm font-medium text-stone-500 transition hover:text-stone-900 dark:text-white/50 dark:hover:text-white md:hidden"
            >
                All posts →
            </Link>
        </section>
    )
}

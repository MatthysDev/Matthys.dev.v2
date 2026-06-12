import React from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/utils/posts'
import { formatDate } from '@/utils/formatDate'

export default function PostCard({ post }: { post: PostMeta }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-stone-900/10 bg-stone-900/[0.03] p-6 transition hover:border-stone-900/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
        >
            <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-white/40">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold tracking-tight transition group-hover:opacity-80">
                {post.title}
            </h3>
            <p className="mt-2 text-stone-600 dark:text-white/60">{post.description}</p>
            {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-stone-900/10 px-3 py-0.5 text-xs font-medium text-stone-500 dark:border-white/10 dark:text-white/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </Link>
    )
}

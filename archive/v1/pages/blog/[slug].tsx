import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import CustomLayout from '@/components/CustomLayout'
import Seo from '@/components/Seo'
import ReadingProgress from '@/components/Blog/ReadingProgress'
import mdxComponents from '@/components/Blog/mdxComponents'
import { getPost, getPostSlugs, type PostMeta } from '@/utils/posts'
import { formatDate } from '@/utils/formatDate'

type Props = { meta: PostMeta; source: MDXRemoteSerializeResult }

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const { content, ...meta } = getPost(String(params?.slug))
    const source = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                [rehypePrettyCode, { theme: 'github-dark', keepBackground: false }],
            ],
        },
    })
    return { props: { meta, source } }
}

export default function PostPage({ meta, source }: Props) {
    return (
        <CustomLayout>
            <Seo
                type="article"
                title={meta.title}
                description={meta.description}
                path={`/blog/${meta.slug}`}
            />
            <ReadingProgress />

            <article className="mx-auto max-w-2xl pb-28 pt-16 md:pt-24">
                <Link
                    href="/blog"
                    className="text-sm font-medium text-stone-500 transition hover:text-stone-900 dark:text-white/50 dark:hover:text-white"
                >
                    ← All posts
                </Link>

                <header className="mt-8">
                    <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-white/40">
                        <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{meta.readingTime}</span>
                    </div>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        {meta.title}
                    </h1>
                </header>

                <div className="prose prose-stone mt-10 max-w-none dark:prose-invert prose-headings:tracking-tight prose-a:underline-offset-4">
                    <MDXRemote {...source} components={mdxComponents} />
                </div>
            </article>
        </CustomLayout>
    )
}

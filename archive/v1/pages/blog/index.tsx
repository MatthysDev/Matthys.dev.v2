import type { GetStaticProps } from 'next'
import CustomLayout from '@/components/CustomLayout'
import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import PostCard from '@/components/Blog/PostCard'
import { getAllPosts, type PostMeta } from '@/utils/posts'

type Props = { posts: PostMeta[] }

export const getStaticProps: GetStaticProps<Props> = async () => ({
    props: { posts: getAllPosts() },
})

export default function Blog({ posts }: Props) {
    return (
        <CustomLayout>
            <Seo
                title="Blog"
                path="/blog"
                description="Notes on real-world Expo & React Native, building Ekklo, Leaf and simgrid."
            />

            <Reveal>
                <section className="pb-28 pt-20 md:pt-28">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Blog</h1>
                    <p className="mt-4 max-w-xl text-stone-600 dark:text-white/60">
                        Documenting what I learn building Ekklo with Expo and React Native.
                    </p>
                    <div className="mt-12 flex flex-col gap-5">
                        {posts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </section>
            </Reveal>
        </CustomLayout>
    )
}

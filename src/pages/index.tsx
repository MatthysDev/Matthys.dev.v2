import Head from 'next/head'
import type { GetStaticProps } from 'next'
import CustomLayout from '@/components/CustomLayout'
import Hero from '@/components/Hero'
import NowBuilding from '@/components/NowBuilding'
import LatestPosts from '@/components/Blog/LatestPosts'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'
import Stats from '@/components/Stats'
import { Clients } from '@/components/Clients'
import { clients } from '@/apiData/clients'
import { getAllPosts, type PostMeta } from '@/utils/posts'

type Props = { posts: PostMeta[] }

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { posts: getAllPosts().slice(0, 3) },
})

export default function Home({ posts }: Props) {
  return (
    <CustomLayout>
      <Head>
        <title>Matthys Ducrocq — React Native & Expo Developer</title>
        <meta
          name="description"
          content="Matthys Ducrocq — React Native & Expo developer, building Ekklo full-time and writing about real-world mobile development."
        />
        <meta property="og:title" content="Matthys Ducrocq — React Native & Expo Developer" />
        <meta
          property="og:description"
          content="React Native & Expo developer, building Ekklo full-time and writing about real-world mobile development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.matthys.dev" />
      </Head>

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal className="mt-28 md:mt-36">
        <NowBuilding />
      </Reveal>

      <Reveal className="mt-28 md:mt-36">
        <LatestPosts posts={posts} />
      </Reveal>

      <Reveal className="mt-28 md:mt-36">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Around the world
        </h2>
        <p className="mt-3 max-w-xl text-stone-600 dark:text-white/60">
          A few moments from conferences and meetups I&apos;ve been lucky to attend.
        </p>
        <div className="mt-10">
          <Gallery />
        </div>
      </Reveal>

      <Reveal className="mt-28 md:mt-36">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-white/40">
          Trusted by
        </h2>
        <Clients clients={clients} />
        <Stats />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </CustomLayout>
  )
}

import Head from 'next/head'
import CustomLayout from '@/components/CustomLayout'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'
import { Clients } from '@/components/Clients'
import { clients } from '@/apiData/clients'

export default function Home() {
  return (
    <CustomLayout>
      <Head>
        <title>Matthys Ducrocq — React Native Developer</title>
        <meta
          name="description"
          content="Matthys Ducrocq — React Native developer crafting aesthetically pleasing mobile and web apps, with a creative eye for photography and video."
        />
        <meta property="og:title" content="Matthys Ducrocq — React Native Developer" />
        <meta
          property="og:description"
          content="React Native developer crafting aesthetically pleasing mobile and web apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.matthys.dev" />
      </Head>

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal className="mt-28 md:mt-36">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Around the world
        </h2>
        <p className="mt-3 max-w-xl text-white/60">
          A few moments from conferences and meetups I&apos;ve been lucky to attend.
        </p>
        <div className="mt-10">
          <Gallery />
        </div>
      </Reveal>

      <Reveal className="mt-28 md:mt-36">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          Trusted by
        </h2>
        <Clients clients={clients} />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </CustomLayout>
  )
}

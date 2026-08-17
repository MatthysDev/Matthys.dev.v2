import { useRef } from 'react'
import Link from 'next/link'
import Backdrop from '@/components/v2/Backdrop'
import Device, { DeviceTag } from '@/components/v2/Device'
import Footer from '@/components/v2/Footer'
import Nav, { EMAIL } from '@/components/v2/Nav'
import Reveal from '@/components/v2/Reveal'
import Seo from '@/components/v2/Seo'
import { usePhoneParallax } from '@/hooks/useScrollFx'
import { COMPAGNIE, EKKLO } from '@/content/projects'

// Irregular lime splotches behind the step numbers.
const STEP_BLOBS = [
  'M46 3c15-3 27 9 36 19 8 9 19 17 16 30-3 14-19 17-30 25-10 8-19 21-31 17C24 90 20 73 13 62 6 50-3 36 6 25 14 15 31 6 46 3Z',
  'M52 2c16 1 22 16 32 25 9 8 17 19 12 31-6 13-22 14-33 21-11 6-22 18-33 12C19 85 20 68 15 56 10 43 3 29 13 20 22 11 37 1 52 2Z',
  'M48 5c17-4 25 12 35 21 9 9 20 15 17 28-3 14-20 19-31 26-10 7-17 18-29 15C27 92 21 76 14 65 7 53-1 39 8 28 16 18 32 8 48 5Z',
]

const STEPS = [
  {
    title: 'Plan',
    copy:
      'We cut the scope to what the first release actually needs: the flows that earn their place, and the ones that can wait.',
  },
  {
    title: 'Build',
    copy:
      'One React Native codebase for iOS and Android. A real build on a real device every week, so nothing is a surprise at the end.',
  },
  {
    title: 'Release',
    copy:
      'Store submission, over-the-air updates, crash reporting. It ships, and it keeps shipping after launch day.',
  },
]

export default function Home() {
  const cluster = useRef<HTMLDivElement | null>(null)
  usePhoneParallax(cluster)

  return (
    <>
      <Seo
        title="matthys.dev · I build mobile apps"
        description="React Native and Expo, from the first sketch to the release notes. One codebase, both stores, and a build in your hands from week one."
        path="/"
      />
      <Backdrop />

      <header className="hero">
        <div className="shell">
          <Nav rise />

          <div className="hero__inner">
            <h1 className="rise rise--2">
              I build mobile apps that
              <br />
              <em>save time</em> and <em>make money</em>
            </h1>

            <p className="rise rise--3">
              React Native and Expo, from the first sketch to the release notes. One codebase, both
              stores, and a build in your hands from week one, not a demo six months from now.
            </p>

            <div className="hero__cta rise rise--4">
              <a className="btn btn--lime" href={`mailto:${EMAIL}`}>
                Start a project
              </a>
              <Link className="btn btn--ink" href="#work">
                See the work
              </Link>
            </div>
          </div>
        </div>

        {/* Each phone is the link into its own project page. */}
        <div className="cluster rise rise--5" id="work" ref={cluster}>
          <Link
            className="phone phone--front"
            href={`/projects/${EKKLO.slug}`}
            aria-label={`${EKKLO.name}: see the project`}
          >
            <Device
              src={EKKLO.shots[0].src}
              alt={EKKLO.shots[0].alt}
              priority
              tag={
                <DeviceTag
                  className="tag--ekklo"
                  logo={EKKLO.logo}
                  name={EKKLO.name}
                  detail={EKKLO.homeTag}
                />
              }
            />
          </Link>

          <Link
            className="phone phone--back"
            href={`/projects/${COMPAGNIE.slug}`}
            aria-label={`${COMPAGNIE.name}: see the project`}
          >
            <Device
              src={COMPAGNIE.shots[0].src}
              alt={COMPAGNIE.shots[0].alt}
              priority
              tag={
                <DeviceTag
                  className="tag--compagnie"
                  logo={COMPAGNIE.logo}
                  name={COMPAGNIE.name}
                  detail={COMPAGNIE.homeTag}
                />
              }
            />
          </Link>
        </div>
      </header>

      <section className="how" id="how">
        <div className="shell">
          <Reveal>
            <span className="how__eyebrow">Plan · Build · Release</span>
            <h2>
              Three steps, <em>no surprises</em>
            </h2>
            <p className="how__kicker">You always know what ships next, and when.</p>
          </Reveal>

          <Reveal className="steps reveal--flat">
            {STEPS.map((step, i) => (
              <Reveal className="step" key={step.title} delay={i * 110}>
                <div className="step__badge">
                  <svg viewBox="0 0 100 100" aria-hidden="true">
                    <path d={STEP_BLOBS[i]} fill="var(--lime)" />
                  </svg>
                  <b>{i + 1}</b>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </Reveal>

          <Reveal className="how__cta" delay={120}>
            <a className="btn btn--lime" href={`mailto:${EMAIL}`}>
              Start a project
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}

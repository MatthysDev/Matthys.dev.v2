import Link from 'next/link'
import { useScrolled } from '@/hooks/useScrollFx'

export const EMAIL = 'ducrocq.matthys@gmail.com'

export type NavKey = 'ekklo' | 'compagnie' | null

const LINKS: { key: Exclude<NavKey, null>; href: string; label: string }[] = [
  { key: 'ekklo', href: '/projects/ekklo', label: 'Ekklo' },
  { key: 'compagnie', href: '/projects/compagnie', label: 'Compagnie' },
]

/**
 * Floating pill bar. It sits above the backdrop washes on its own blurred
 * surface, which is what keeps it legible wherever the colour lands.
 * `active` underlines the project you are currently reading.
 */
export default function Nav({ active = null, rise = false }: { active?: NavKey; rise?: boolean }) {
  const stuck = useScrolled()
  return (
    <div className="nav-wrap">
      <nav className={`nav${rise ? ' rise rise--1' : ''}${stuck ? ' nav--stuck' : ''}`}>
        <Link className="wordmark" href="/" aria-label="matthys.dev">
          <span className="wordmark__script">matthys</span>
          <span className="wordmark__tld">.dev</span>
          <svg className="wordmark__swash" viewBox="0 0 104 12" aria-hidden="true">
            <path d="M2 8.4c14-3.6 30-5.4 48-5 16 .4 34 2.2 52 5.6" />
          </svg>
        </Link>

        <div className="nav__links">
          {LINKS.map(({ key, href, label }) => (
            <Link
              key={key}
              className={`nav__link${active === key ? ' nav__link--active' : ''}`}
              href={href}
              aria-current={active === key ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <Link className="nav__link" href="/#how">
            How I work
          </Link>
          <a className="btn btn--ink btn--sm" href={`mailto:${EMAIL}`}>
            Let’s talk
          </a>
        </div>
      </nav>
    </div>
  )
}

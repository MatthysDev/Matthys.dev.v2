import Link from 'next/link'
import Backdrop from './Backdrop'
import Device from './Device'
import Footer from './Footer'
import Nav, { EMAIL } from './Nav'
import Seo from './Seo'
import type { Project } from '@/content/projects'

/** Renders `text` with `bold` emphasised, without dangerouslySetInnerHTML. */
function Body({ text, bold }: { text: string; bold?: string }) {
  if (!bold || !text.includes(bold)) return <p className="body">{text}</p>
  const [before, after] = text.split(bold)
  return (
    <p className="body">
      {before}
      <b>{bold}</b>
      {after}
    </p>
  )
}

export default function ProjectPage({ project, next }: { project: Project; next: Project }) {
  const [first, second] = project.shots
  return (
    <>
      <Seo
        title={project.meta.title}
        description={project.meta.description}
        path={`/projects/${project.slug}`}
      />
      <Backdrop />

      <header className="page-hero">
        <div className="shell">
          <Nav active={project.slug} />
        </div>
      </header>

      <section className="project" id={project.slug}>
        <div className="shell">
          <div className="project__grid">
            <div className="project__media">
              <div className="project__phone">
                <Device src={first.src} alt={first.alt} priority />
              </div>
              <div className="project__phone">
                <Device src={second.src} alt={second.alt} />
              </div>
            </div>

            <div className="project__body">
              <div className="project__head">
                <img className="project__logo" src={project.logo} alt="" width={68} height={68} />
                <div>
                  <span className="project__eyebrow">
                    <s style={{ background: `var(${project.accent})` }} />
                    {project.kicker}
                  </span>
                  <h1>{project.name}</h1>
                </div>
              </div>

              <p className="project__lede">{project.lede}</p>
              {project.body.map((p, i) => (
                <Body key={i} {...p} />
              ))}

              <dl className="facts">
                {project.facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="project__cta">
                <a className="btn btn--lime" href={`mailto:${EMAIL}`}>
                  Start a project
                </a>
                <Link className="btn btn--ink" href={`/projects/${next.slug}`}>
                  Next — {next.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import { EMAIL } from './Nav'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <span>© {new Date().getFullYear()} Matthys Ducrocq</span>
        <nav>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href="https://github.com/matthysdev" rel="me noreferrer" target="_blank">
            GitHub
          </a>
          <a href="https://x.com/matthysdev" rel="me noreferrer" target="_blank">
            X
          </a>
        </nav>
      </div>
    </footer>
  )
}

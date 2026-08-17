import type { CSSProperties } from 'react'

type Mist = {
  width: string
  height: string
  colour: string
  /** falloff stop of the radial gradient — smaller keeps the wash tighter */
  stop?: string
  opacity?: number
} & Pick<CSSProperties, 'left' | 'right' | 'top' | 'bottom'>

// Blurred colour washes, one per palette token. They sit behind everything
// (z-index -1, fixed) and drift slowly, so the page has depth without any
// shape competing with the copy.
const MISTS: Mist[] = [
  { width: '52vw', height: '46vw', left: '-14vw', top: '-12vw', colour: 'var(--sand)' },
  { width: '48vw', height: '44vw', right: '-12vw', top: '-8vw', colour: 'var(--coral)' },
  { width: '44vw', height: '40vw', left: '-10vw', top: '38%', colour: 'var(--teal)' },
  { width: '46vw', height: '42vw', right: '-11vw', top: '30%', colour: 'var(--violet)' },
  { width: '56vw', height: '44vw', left: '14%', bottom: '-18vw', colour: 'var(--lime)', stop: '66%', opacity: 0.55 },
  { width: '40vw', height: '36vw', right: '6%', bottom: '-10vw', colour: 'var(--sky)' },
  { width: '26vw', height: '24vw', left: '30%', top: '8%', colour: 'var(--pink)', stop: '70%', opacity: 0.42 },
  { width: '34vw', height: '30vw', left: '8%', bottom: '26%', colour: 'var(--blue)', stop: '70%', opacity: 0.34 },
]

export default function Backdrop() {
  return (
    <div className="bg" aria-hidden="true">
      {MISTS.map((m, i) => {
        const { colour, stop = '68%', opacity, ...box } = m
        return (
          <div
            key={i}
            className="bg__mist"
            style={{
              ...box,
              background: `radial-gradient(circle at 50% 50%, ${colour} 0%, transparent ${stop})`,
              ...(opacity !== undefined ? { opacity } : null),
            }}
          />
        )
      })}
    </div>
  )
}

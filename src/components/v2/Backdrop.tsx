import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

type Mist = {
  width: string
  height: string
  colour: string
  /** falloff stop of the radial gradient; smaller keeps the wash tighter */
  stop?: string
  opacity?: number
  /** px of pointer drift at full deflection — varying it gives the field depth */
  drift?: number
} & Pick<CSSProperties, 'left' | 'right' | 'top' | 'bottom'>

// Blurred colour washes, one per palette token. They sit behind everything
// (z-index -1, fixed) and drift slowly, so the page has depth without any
// shape competing with the copy.
const MISTS: Mist[] = [
  { width: '52vw', height: '46vw', left: '-14vw', top: '-12vw', colour: 'var(--sand)', drift: 14 },
  { width: '48vw', height: '44vw', right: '-12vw', top: '-8vw', colour: 'var(--coral)', drift: 18 },
  { width: '44vw', height: '40vw', left: '-10vw', top: '38%', colour: 'var(--teal)', drift: 9 },
  { width: '46vw', height: '42vw', right: '-11vw', top: '30%', colour: 'var(--violet)', drift: 22 },
  { width: '56vw', height: '44vw', left: '14%', bottom: '-18vw', colour: 'var(--lime)', stop: '66%', opacity: 0.55, drift: 12 },
  { width: '40vw', height: '36vw', right: '6%', bottom: '-10vw', colour: 'var(--sky)', drift: 16 },
  { width: '26vw', height: '24vw', left: '30%', top: '8%', colour: 'var(--pink)', stop: '70%', opacity: 0.42, drift: 26 },
  { width: '34vw', height: '30vw', left: '8%', bottom: '26%', colour: 'var(--blue)', stop: '70%', opacity: 0.34, drift: 20 },
]

export default function Backdrop() {
  const ref = useRef<HTMLDivElement | null>(null)

  // Pointer parallax on the washes. Writes two normalised values on the container
  // and lets CSS scale them per wash, so this never touches individual nodes.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return
    }

    let frame = 0
    const onMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        el.style.setProperty('--mx', String((e.clientX / window.innerWidth) * 2 - 1))
        el.style.setProperty('--my', String((e.clientY / window.innerHeight) * 2 - 1))
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true" ref={ref}>
      {MISTS.map((m, i) => {
        const { colour, stop = '68%', opacity, drift, ...box } = m
        return (
          <div
            key={i}
            className="bg__mist"
            style={{
              ...box,
              background: `radial-gradient(circle at 50% 50%, ${colour} 0%, transparent ${stop})`,
              ...(opacity !== undefined ? { opacity } : null),
              ...(drift !== undefined ? ({ '--f': drift } as CSSProperties) : null),
            }}
          />
        )
      })}
    </div>
  )
}

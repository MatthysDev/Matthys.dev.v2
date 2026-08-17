import { useEffect, useRef } from 'react'

/** Matches 40,000 · 9,512 · 4.7 · 277 · 92 — grouped so it can be split out of prose. */
const NUMBER = /(\d[\d,]*(?:\.\d+)?)/g

/** A year reads as a date, not a quantity: counting up to 2024 from zero is nonsense. */
const isYear = (n: number, raw: string) =>
  !raw.includes(',') && !raw.includes('.') && n >= 1900 && n <= 2100

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Re-applies the original formatting (thousands separator, same decimals). */
function format(value: number, raw: string) {
  if (raw.includes('.')) return value.toFixed(raw.split('.')[1].length)
  return raw.includes(',') ? Math.round(value).toLocaleString('en-US') : String(Math.round(value))
}

/**
 * Renders the real figure — server-side, and as the hydrated value — then drops
 * to zero and counts back up once it scrolls into view. Doing it in that order
 * means a crawler, a no-JS reader and a reduced-motion reader all get the number
 * rather than a "0", and there is no hydration mismatch to reconcile.
 */
function Counter({ raw }: { raw: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced() || typeof IntersectionObserver === 'undefined') return

    const target = Number(raw.replace(/,/g, ''))

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        // Zero out only as the run begins. Pre-zeroing on mount would leave every
        // figure below the fold reading "0" until it happened to be scrolled to.
        el.textContent = format(0, raw)
        const DURATION = 1000
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION)
          // ease-out cubic: quick off the mark, settles onto the real value
          el.textContent = t < 1 ? format(target * (1 - Math.pow(1 - t, 3)), raw) : raw
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [raw])

  return (
    <span className="figure" ref={ref}>
      {raw}
    </span>
  )
}

/**
 * Renders prose, counting up any quantity inside it. Years are left alone.
 * The copy stays one plain string in the content file — nothing to mark up by hand.
 */
export default function Figures({ text }: { text: string }) {
  return (
    <>
      {text.split(NUMBER).map((part, i) => {
        if (i % 2 === 0) return part // even indices are the prose between matches
        const n = Number(part.replace(/,/g, ''))
        if (!Number.isFinite(n) || isYear(n, part)) return part
        return <Counter key={i} raw={part} />
      })}
    </>
  )
}

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

/**
 * Fades and lifts its element in the first time it enters the viewport.
 *
 * It renders the element itself rather than wrapping it, so it can be dropped
 * onto a grid child without breaking the grid. The observer disconnects after
 * the first hit — nothing animates back out on the way up.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}: {
  as?: ElementType
  className?: string
  /** stagger, in ms */
  delay?: number
  children: ReactNode
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Already past it on load (deep link, restored scroll): show without animating in.
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} reveal${shown ? ' reveal--in' : ''}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

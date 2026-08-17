import { useEffect, useState } from 'react'

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** True once the page has scrolled past `offset`. Drives the nav's compact state. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const read = () => {
      frame = 0
      setScrolled(window.scrollY > offset)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [offset])

  return scrolled
}

/**
 * Parallax + pointer tilt for the phone cluster.
 *
 * Writes custom properties (`--pty`, `--tilt-x`, `--tilt-y`) instead of a whole
 * transform, so the CSS keeps ownership of each phone's base rotation and offset.
 * The two phones get different parallax factors, which is what separates them
 * in depth as you scroll.
 */
export function usePhoneParallax(clusterRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const cluster = clusterRef.current
    if (!cluster || reduced()) return

    const phones = Array.from(cluster.querySelectorAll<HTMLElement>('.phone'))
    if (!phones.length) return

    const FACTOR = [0.06, -0.045] // front drifts down, back drifts up
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = cluster.getBoundingClientRect()
        // 0 when the cluster is centred, ±1 at a viewport away
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
        phones.forEach((p, i) => {
          p.style.setProperty('--pty', `${progress * (FACTOR[i] ?? 0) * rect.height}px`)
        })
      })
    }

    const onMove = (e: PointerEvent) => {
      const rect = cluster.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      phones.forEach((p) => {
        p.style.setProperty('--tilt-y', `${dx * 4}deg`)
        p.style.setProperty('--tilt-x', `${-dy * 3}deg`)
      })
    }

    const onLeave = () => {
      phones.forEach((p) => {
        p.style.setProperty('--tilt-y', '0deg')
        p.style.setProperty('--tilt-x', '0deg')
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    cluster.addEventListener('pointermove', onMove)
    cluster.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cluster.removeEventListener('pointermove', onMove)
      cluster.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [clusterRef])
}

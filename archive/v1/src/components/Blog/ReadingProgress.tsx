'use client'
import { motion, useScroll, useReducedMotion } from 'framer-motion'

export default function ReadingProgress() {
    const { scrollYProgress } = useScroll()
    const reducedMotion = useReducedMotion()

    if (reducedMotion) return null

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX: scrollYProgress }}
            className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-stone-900/60 dark:bg-sky-300"
        />
    )
}

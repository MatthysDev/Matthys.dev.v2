'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode
    /** Delay in seconds before the reveal starts. */
    delay?: number
    className?: string
}

export default function Reveal({ children, delay = 0, className }: Props) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    )
}

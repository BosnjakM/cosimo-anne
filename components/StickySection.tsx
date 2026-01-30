'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface StickySectionProps {
  children: ReactNode
  className?: string
  offset?: string[]
}

export default function StickySection({
  children,
  className = '',
  offset = ['start end', 'end start'],
}: StickySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <div ref={ref} className={`sticky top-0 h-screen ${className}`}>
      <motion.div
        style={{ opacity, scale }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

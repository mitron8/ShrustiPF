'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  if (shouldReduceMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-px origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--text-muted) 0%, var(--text-secondary) 100%)',
        opacity: 0.4,
      }}
    />
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 80, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const finePointerQuery = window.matchMedia('(pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateEnabled = () => {
      setEnabled(finePointerQuery.matches && !reducedMotionQuery.matches)
    }

    const frame = requestAnimationFrame(() => {
      setMounted(true)
      updateEnabled()
    })

    finePointerQuery.addEventListener('change', updateEnabled)
    reducedMotionQuery.addEventListener('change', updateEnabled)

    return () => {
      cancelAnimationFrame(frame)
      finePointerQuery.removeEventListener('change', updateEnabled)
      reducedMotionQuery.removeEventListener('change', updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!mounted || !enabled) {
      document.body.removeAttribute('data-enhanced-cursor')
      return
    }

    document.body.setAttribute('data-enhanced-cursor', 'true')

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => {
      document.body.removeAttribute('data-enhanced-cursor')
      window.removeEventListener('mousemove', move)
    }
  }, [cursorX, cursorY, enabled, mounted])

  if (!mounted || !enabled) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[55]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,184,184,0.055) 0%, transparent 72%)',
          mixBlendMode: 'screen',
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[56]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--text-muted)',
        }}
      />
    </>
  )
}

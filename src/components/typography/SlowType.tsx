'use client'

import { useEffect, useState } from 'react'

interface Props {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function SlowType({ text, delay = 0, speed = 60, className }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [started, text, speed])

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse opacity-60">_</span>
      )}
    </span>
  )
}

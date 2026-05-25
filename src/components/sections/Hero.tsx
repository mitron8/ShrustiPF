'use client'

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from 'framer-motion'

import SplitText from '@/components/typography/SplitText'
import SlowType from '@/components/typography/SlowType'

import Link from 'next/link'
import { heroContent } from '@/data/site'

import {
  useRef,
  useEffect,
  memo,
  useMemo,
  useCallback,
} from 'react'

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  'Creative Direction',
  '✦',
  'Brand Systems',
  '✦',
  'Motion Design',
  '✦',
  'Digital Strategy',
  '✦',
  'UI / UX',
  '✦',
  'Visual Language',
  '✦',
  'Creative Direction',
  '✦',
  'Brand Systems',
  '✦',
  'Motion Design',
  '✦',
  'Digital Strategy',
  '✦',
  'UI / UX',
  '✦',
  'Visual Language',
  '✦',
]

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0, reduce = false) => ({
  initial: { opacity: 0, y: reduce ? 0 : 18 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: reduce ? 0 : delay,
    duration: 1,
    ease: EASE,
  },
})

// ─────────────────────────────────────────────────────────────
// Background
// ─────────────────────────────────────────────────────────────

const GrainTexture = memo(function GrainTexture() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.038 }}
      preserveAspectRatio="xMidYMid slice"
    >
      <filter id="hero-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.78"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#hero-grain)" />
    </svg>
  )
})

// ─────────────────────────────────────────────────────────────
// Cursor Glow
// ─────────────────────────────────────────────────────────────

const CursorGlow = memo(function CursorGlow({
  x,
  y,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
}) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 560,
          height: 560,
          background:
            'radial-gradient(circle, rgba(190,178,118,0.065) 0%, rgba(107,107,74,0.03) 45%, transparent 70%)',
        }}
      />
    </motion.div>
  )
})

// ─────────────────────────────────────────────────────────────
// Scroll Progress
// ─────────────────────────────────────────────────────────────

const ScrollProgressLine = memo(function ScrollProgressLine({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      aria-hidden
      className="absolute left-7 top-0 hidden h-full w-px lg:block md:left-14"
      style={{
        background: 'var(--border-subtle)',
      }}
    >
      <motion.div
        className="absolute left-0 top-0 w-full origin-top"
        style={{
          scaleY,
          height: '100%',
          background: 'rgba(244,241,234,0.4)',
        }}
      />
    </div>
  )
})

// ─────────────────────────────────────────────────────────────
// Marquee
// ─────────────────────────────────────────────────────────────

const Ticker = memo(function Ticker({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute bottom-6 left-0 right-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 3,
        duration: 1.4,
        ease: EASE,
      }}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 11%, black 89%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 11%, black 89%, transparent)',
      }}
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: ['0%', '-50%'],
              }
        }
        transition={{
          duration: 32,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-5 font-mono-label text-[10px] uppercase tracking-[0.28em]"
            style={{
              color: 'rgba(244,241,234,0.22)',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
})

// ─────────────────────────────────────────────────────────────
// Main Hero
// ─────────────────────────────────────────────────────────────

export default function Hero() {

  // ✅ FIXED HERE
  const shouldReduceMotion = useReducedMotion() ?? false

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -110])

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.58],
    [1, 0]
  )

  const subtleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  )

  // ─────────────────────────────────────────
  // Cursor Motion
  // ─────────────────────────────────────────

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const glowX = useSpring(rawX, {
    stiffness: 52,
    damping: 22,
    mass: 0.4,
  })

  const glowY = useSpring(rawY, {
    stiffness: 52,
    damping: 22,
    mass: 0.4,
  })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    },
    [rawX, rawY]
  )

  useEffect(() => {
    if (shouldReduceMotion) return

    let rafId: number

    const optimizedMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)

      rafId = requestAnimationFrame(() => {
        handleMouseMove(e)
      })
    }

    window.addEventListener('mousemove', optimizedMouseMove, {
      passive: true,
    })

    return () => {
      cancelAnimationFrame(rafId)

      window.removeEventListener(
        'mousemove',
        optimizedMouseMove
      )
    }
  }, [handleMouseMove, shouldReduceMotion])

  const sectionPadding = useMemo(
    () => ({
      padding:
        'clamp(7rem, 10vw, 8rem) clamp(2rem, 5.5vw, 4rem) clamp(5.5rem, 9vw, 7rem)',
    }),
    []
  )

  return (
    <section
      ref={sectionRef}
      aria-label="Hero Section"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
      style={sectionPadding}
    >
      {!shouldReduceMotion && (
        <CursorGlow x={glowX} y={glowY} />
      )}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <motion.div
          className="absolute rounded-full will-change-transform"
          style={{
            width: '58vw',
            height: '58vw',
            top: '-16%',
            right: '-12%',
            background:
              'radial-gradient(circle, rgba(107,107,74,0.08) 0%, transparent 72%)',
            scale: shouldReduceMotion ? 1 : subtleScale,
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            width: '44vw',
            height: '44vw',
            bottom: '6%',
            left: '-7%',
            background:
              'radial-gradient(circle, rgba(154,154,154,0.052) 0%, transparent 74%)',
          }}
        />

        <GrainTexture />
      </div>

      <ScrollProgressLine
        scrollYProgress={scrollYProgress}
      />

      <motion.div
        className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
        }}
      >
        <div className="max-w-[42rem]">
          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : titleY,
            }}
          >
            <motion.div
              className="mb-3 font-mono-label text-[12px] uppercase tracking-[0.25em] md:mb-4"
              style={{
                color: 'rgba(244,241,234,0.78)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 2.4,
                duration: 0.9,
                ease: EASE,
              }}
            >
              <SlowType
                text={heroContent.eyebrow}
                delay={shouldReduceMotion ? 0 : 2800}
                speed={shouldReduceMotion ? 8 : 38}
              />
            </motion.div>

            <div className="mb-12 -translate-x-[11px] md:mb-14">
              <h1
                className="whitespace-nowrap font-editorial font-light leading-[0.9] tracking-[-0.02em]"
                style={{
                  fontSize: 'clamp(3.5rem, 11vw, 13rem)',
                }}
              >
                <SplitText
                  text={heroContent.title}
                  className="whitespace-nowrap"
                  delay={shouldReduceMotion ? 0 : 0.2}
                  stagger={0.06}
                />
              </h1>
            </div>

            <motion.p
              className="max-w-[34rem] font-mono-label text-lg font-light leading-relaxed md:text-lg"
              style={{
                color: 'var(--text-secondary)',
              }}
              {...fadeUp(1.1, shouldReduceMotion)}
            >
              {heroContent.lead}
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <motion.p
            className="w-full max-w-[36rem] text-left font-mono-label text-[12px] uppercase tracking-[0.2em] text-white md:text-right lg:whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 1.55,
              duration: 1,
              ease: EASE,
            }}
          >
            Less Noise. More Presence. Better Systems.
          </motion.p>

          <motion.div
            whileHover={
              shouldReduceMotion ? {} : { x: 4 }
            }
            {...fadeUp(1.8, shouldReduceMotion)}
          >
            <Link
              href={heroContent.cta.href}
              aria-label={heroContent.cta.label}
              className="action-link border-b pb-0.5 tracking-[0.2em] text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{
                borderColor: 'var(--text-muted)',
              }}
            >
              {heroContent.cta.label} ↓
            </Link>
          </motion.div>

          <motion.p
            className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 2.05,
              duration: 0.9,
              ease: EASE,
            }}
          >
            {heroContent.note}
          </motion.p>
        </div>
      </motion.div>

      <Ticker
        shouldReduceMotion={shouldReduceMotion}
      />

      <motion.div
        className="absolute bottom-0 left-8 right-8 h-px md:left-16 md:right-16"
        style={{
          background: 'var(--border-subtle)',
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 2.4,
          duration: 1.4,
          ease: EASE,
        }}
      />
    </section>
  )
}
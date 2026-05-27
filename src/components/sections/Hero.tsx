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
// CONSTANTS
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
]

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0, reduce = false) => ({
  initial: {
    opacity: 0,
    y: reduce ? 0 : 18,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: reduce ? 0 : delay,
    duration: 1,
    ease: EASE,
  },
})

// ─────────────────────────────────────────────────────────────
// GRAIN
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
          baseFrequency="0.72"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>

      <rect
        width="100%"
        height="100%"
        filter="url(#hero-grain)"
      />
    </svg>
  )
})

// ─────────────────────────────────────────────────────────────
// CURSOR GLOW
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
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 560,
          height: 560,
          background:
            'radial-gradient(circle, rgba(186,156,92,0.06) 0%, rgba(186,156,92,0.02) 45%, transparent 72%)',
        }}
      />
    </motion.div>
  )
})

// ─────────────────────────────────────────────────────────────
// SCROLL LINE
// ─────────────────────────────────────────────────────────────

const ScrollProgressLine = memo(function ScrollProgressLine({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const scaleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  )

  return (
    <div
      aria-hidden
      className="absolute left-7 top-0 hidden h-full w-px lg:block md:left-14"
      style={{
        background: 'rgba(255,255,255,0.05)',
      }}
    >
      <motion.div
        className="absolute left-0 top-0 w-full origin-top"
        style={{
          scaleY,
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(186,156,92,0.45), rgba(244,241,234,0.16))',
        }}
      />
    </div>
  )
})

// ─────────────────────────────────────────────────────────────
// TICKER
// ─────────────────────────────────────────────────────────────

const Ticker = memo(function Ticker({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute bottom-5 left-0 right-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 2.3,
        duration: 1,
      }}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: ['0%', '-50%'],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map(
          (item, i) => (
            <span
              key={`${item}-${i}`}
              className="px-5 text-[10px] uppercase tracking-[0.28em]"
              style={{
                color:
                  'rgba(186,156,92,0.18)',
                fontFamily:
                  'Space Mono, monospace',
              }}
            >
              {item}
            </span>
          )
        )}
      </motion.div>
    </motion.div>
  )
})

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

export default function Hero() {
  const shouldReduceMotion =
    useReducedMotion() ?? false

  const sectionRef =
    useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -110]
  )

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.58],
    [1, 0]
  )

  const subtleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.06]
  )

  // Cursor

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const glowX = useSpring(rawX, {
    stiffness: 50,
    damping: 22,
  })

  const glowY = useSpring(rawY, {
    stiffness: 50,
    damping: 22,
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

    const optimizedMouseMove = (
      e: MouseEvent
    ) => {
      cancelAnimationFrame(rafId)

      rafId = requestAnimationFrame(() => {
        handleMouseMove(e)
      })
    }

    window.addEventListener(
      'mousemove',
      optimizedMouseMove,
      {
        passive: true,
      }
    )

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
        'clamp(5rem, 8vw, 7rem) clamp(1.4rem, 5vw, 4rem) clamp(4rem, 7vw, 6rem)',
    }),
    []
  )

  return (
    <section
      ref={sectionRef}
      aria-label="Hero Section"
      className="
        relative
        flex
        min-h-screen
        flex-col
        justify-center
        overflow-hidden
        bg-[#080705]
      "
      style={sectionPadding}
    >
      {!shouldReduceMotion && (
        <CursorGlow
          x={glowX}
          y={glowY}
        />
      )}

      {/* BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        {/* TOP RIGHT GLOW */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '55vw',
            height: '55vw',
            top: '-18%',
            right: '-14%',
            background:
              'radial-gradient(circle, rgba(120,100,55,0.08) 0%, rgba(100,80,40,0.03) 50%, transparent 72%)',
            filter: 'blur(40px)',
            scale: shouldReduceMotion
              ? 1
              : subtleScale,
          }}
        />

        {/* CENTER AMBIENT */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{
            width: '42vw',
            height: '42vw',
            translateX: '-50%',
            translateY: '-50%',
            background:
              'radial-gradient(circle, rgba(186,156,92,0.03) 0%, rgba(186,156,92,0.01) 40%, transparent 72%)',
            filter: 'blur(70px)',
          }}
        />

        {/* BOTTOM LIGHT */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '38vw',
            height: '38vw',
            bottom: '2%',
            left: '-8%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 74%)',
            filter: 'blur(30px)',
          }}
        />

        <GrainTexture />
      </div>

      <ScrollProgressLine
        scrollYProgress={scrollYProgress}
      />

      {/* CONTENT */}
      <motion.div
        className="
          relative z-10
          flex flex-col
          gap-12
          lg:flex-row
          lg:items-end
          lg:justify-between
        "
        style={{
          opacity: shouldReduceMotion
            ? 1
            : contentOpacity,
        }}
      >
        {/* LEFT */}
        <div className="max-w-[72rem]">
          <motion.div
            style={{
              y: shouldReduceMotion
                ? 0
                : titleY,
            }}
          >
            {/* EYEBROW */}
            <motion.div
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-white/40
              "
              style={{
                
                fontFamily:
                  'Space Mono, monospace',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay:
                  shouldReduceMotion
                    ? 0
                    : 1.5,
                duration: 1,
              }}
            >
              {heroContent.eyebrow}
            </motion.div>

            {/* TITLE */}
            <div className="mb-10 md:mb-14">
              <h1
                aria-label="Srushti Lohiya"
                style={{
                  fontFamily:
                    'Cormorant Garamond, serif',
                  fontSize:
                    'clamp(4.6rem, 11vw, 11.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.065em',
                  WebkitFontSmoothing:
                    'antialiased',
                  MozOsxFontSmoothing:
                    'grayscale',
                }}
              >
                {/* FIRST NAME */}
                <motion.div
                  className="overflow-hidden"
                  initial={{
                    opacity: 0,
                    y: 110,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: EASE,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 300,
                      color:
                        'rgba(245,241,234,0.94)',
                      display: 'inline-block',
                    }}
                  >
                    Srushti
                  </div>
                </motion.div>

                {/* LAST NAME */}
                <motion.div
                  className="overflow-hidden pl-[14vw] md:pl-[18vw]"
                  initial={{
                    opacity: 0,
                    y: 110,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.14,
                    ease: EASE,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 200,
                      color:
                        'rgba(245,241,234,0.78)',
                      display: 'inline-block',
                      letterSpacing:
                        '-0.075em',
                      textShadow:
                        '0 0 40px rgba(186,156,92,0.05)',
                    }}
                  >
                    Lohiya
                  </div>
                </motion.div>
              </h1>

              {/* DECORATIVE RULE */}
              <motion.div
                style={{
                  marginTop: '1.3rem',
                  height: 1,
                  background:
                    'linear-gradient(to right, rgba(186,156,92,0.28) 0%, rgba(186,156,92,0.08) 55%, transparent 100%)',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay:
                    shouldReduceMotion
                      ? 0
                      : 1,
                  duration: 1.3,
                  ease: EASE,
                }}
              />
            </div>

            {/* DESCRIPTION */}
            <motion.p
              className="
                max-w-[38rem]
                text-[13px]
                leading-relaxed
                md:text-[15px]
                tracking-[-0.01em]
              "
              style={{
                color:
                  'rgba(244,241,234,0.5)',
                fontFamily:
                  'Space Mono, monospace',
              }}
              {...fadeUp(
                1.1,
                shouldReduceMotion
              )}
            >
              Most Websites Exist. I Build Ones That Earn.
            </motion.p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start gap-5 lg:items-end">
          <motion.p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              lg:text-right
              text-white/50
            "
            style={{
             
              fontFamily:
                'Space Mono, monospace',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay:
                shouldReduceMotion
                  ? 0
                  : 1.6,
              duration: 1,
            }}
          >
            Less Noise. More Presence.
          </motion.p>

          {/* CTA */}
          <motion.div
            whileHover={
              shouldReduceMotion
                ? {}
                : { x: 5 }
            }
            {...fadeUp(
              1.8,
              shouldReduceMotion
            )}
          >
            <Link
              href={heroContent.cta.href}
              aria-label={
                heroContent.cta.label
              }
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
              "
              style={{
                fontFamily:
                  'Space Mono, monospace',
              }}
            >
              <span className='bg-white/10'
                style={{
                  height: 1,
                  width: 18,
                  
                }}
              />

              <span
                className="
                  border-b
                  pb-0.5
                  text-[11px]
                  uppercase
                  tracking-[0.26em]
                  text-white
                  transition-all
                  duration-500
                  border-white/40
                "
                
              >
                View Work
              </span>

              <span
                style={{
                  color:
                    'rgba(111,111,92,0.7)',
                  fontSize: 13,
                }}
              >
                ↓
              </span>
            </Link>
          </motion.div>

          <motion.p
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-white/50
            "
            style={{
              
              fontFamily:
                'Space Mono, monospace',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay:
                shouldReduceMotion
                  ? 0
                  : 2.1,
              duration: 1,
            }}
          >
            Designed With Intention
          </motion.p>
        </div>
      </motion.div>

      {/* TICKER */}
      <Ticker
        shouldReduceMotion={shouldReduceMotion}
      />

      {/* BOTTOM LINE */}
      <motion.div
        className="
          absolute bottom-0
          left-8 right-8
          h-px
          md:left-16 md:right-16
        "
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(186,156,92,0.14) 30%, rgba(186,156,92,0.14) 70%, transparent)',
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay:
            shouldReduceMotion
              ? 0
              : 2.2,
          duration: 1.4,
          ease: EASE,
        }}
      />
    </section>
  )
}
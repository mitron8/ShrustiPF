'use client'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import BackToHomeLink from '@/components/layout/BackToHomeLink'

import type { Project } from '@/data/projects'

interface Props {
  project: Project
}

const ease = [0.16, 1, 0.3, 1] as const

// ─────────────────────────────────────────────
// Reveal Animation
// ─────────────────────────────────────────────

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 80,
              filter: 'blur(14px)',
            }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
      }
      viewport={{
        once: true,
        margin: '-120px',
      }}
      transition={{
        duration: 1.2,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Section Label
// ─────────────────────────────────────────────

function SectionLabel({
  children,
}: {
  children: ReactNode
}) {
  return (
    <p
      className="
        font-mono-label
        text-[9px]
        uppercase
        tracking-[0.22em]
        sm:text-[10px]
      "
      style={{
        color: 'var(--text-muted)',
      }}
    >
      {children}
    </p>
  )
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export default function EnhancedCaseStudy({
  project,
}: Props) {
  return (
    <article className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            left-0
            top-0
            h-[60vw]
            w-[60vw]
            rounded-full
            blur-3xl
            lg:h-[40vw]
            lg:w-[40vw]
          "
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.08), transparent 72%)',
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-4 pb-20 pt-28 sm:px-6 md:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <BackToHomeLink />
          </Reveal>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_0.88fr] lg:items-end">

            {/* LEFT */}
            <div className="min-w-0">

              <Reveal delay={0.1}>
                <p
                  className="
                    font-mono-label
                    text-[9px]
                    uppercase
                    tracking-[0.24em]
                    sm:text-[10px]
                    sm:tracking-[0.28em]
                  "
                  style={{
                    color: 'rgba(244,241,234,0.72)',
                  }}
                >
                  CASE STUDY — 2026
                </p>
              </Reveal>

              {/* TITLE */}
              <Reveal delay={0.15}>
                <h1
                  className="
                    mt-5
                    break-words
                    font-editorial
                    font-light
                    leading-[0.82]
                    tracking-[-0.065em]
                    text-[clamp(3.2rem,15vw,9rem)]
                  "
                >
                  {project.title}
                </h1>
              </Reveal>

              {/* DESCRIPTION */}
              <Reveal delay={0.2}>
                <p
                  className="
                    mt-6
                    max-w-xl
                    text-[15px]
                    leading-relaxed
                    sm:text-[17px]
                    md:text-[20px]
                  "
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  A cinematic digital
                  experience crafted through
                  immersive storytelling,
                  luxury motion, and premium
                  interaction design.
                </p>
              </Reveal>

              {/* META */}
              <Reveal delay={0.3}>
                <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:flex-wrap sm:gap-10">

                  {[
                    ['ROLE', 'UI · UX · FRONTEND'],
                    ['STACK', 'NEXT · GSAP · MOTION'],
                    ['YEAR', '2026'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="min-w-[120px]"
                    >
                      <p
                        className="
                          font-mono-label
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          sm:text-[9px]
                        "
                        style={{
                          color:
                            'var(--text-muted)',
                        }}
                      >
                        {label}
                      </p>

                      <p
                        className="
                          mt-2
                          text-[12px]
                          leading-relaxed
                          sm:text-sm
                        "
                        style={{
                          color:
                            'var(--text-primary)',
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT IMAGE */}
            <Reveal
              delay={0.2}
              className="w-full"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  sm:rounded-[34px]
                  lg:rounded-[40px]
                "
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                }}
              >
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 1.4,
                    ease,
                  }}
                  className="
                    relative
                    aspect-[4/5]
                    sm:aspect-[4/4.8]
                    lg:aspect-[4/5]
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="
                      object-cover
                      object-center
                    "
                    sizes="
                      (max-width: 768px) 100vw,
                      60vw
                    "
                  />
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <Reveal>
            <div className="mb-16 max-w-5xl lg:mb-24">

              <SectionLabel>
                02 — VISUAL LANGUAGE
              </SectionLabel>

              <h2
                className="
                  mt-6
                  font-editorial
                  font-light
                  leading-[0.84]
                  tracking-[-0.06em]
                  text-[clamp(2.7rem,10vw,7rem)]
                "
              >
                Built through
                atmosphere,
                rhythm,
                and contrast.
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-[15px]
                  leading-relaxed
                  md:text-lg
                "
                style={{
                  color:
                    'var(--text-secondary)',
                }}
              >
                Instead of treating the
                interface like a dashboard,
                the experience was designed
                like a cinematic narrative.
              </p>
            </div>
          </Reveal>

          {/* MAIN GRID */}
          <div className="grid auto-rows-auto gap-5 sm:gap-6 lg:grid-cols-12">

            {/* BIG VISUAL */}
            <Reveal className="lg:col-span-7 lg:row-span-4">
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="
                  group
                  relative
                  min-h-[420px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  sm:min-h-[560px]
                  lg:h-full
                  lg:rounded-[42px]
                "
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.03)',
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 1.4,
                    ease,
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      object-center
                    "
                    sizes="
                      (max-width: 768px) 100vw,
                      60vw
                    "
                  />
                </motion.div>

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.1))',
                  }}
                />

                <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-8 lg:p-10">

                  <p
                    className="
                      font-mono-label
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      sm:text-[10px]
                    "
                    style={{
                      color:
                        'rgba(244,241,234,0.72)',
                    }}
                  >
                    IMMERSIVE EXPERIENCE
                  </p>

                  <h3
                    className="
                      mt-4
                      max-w-xl
                      font-editorial
                      font-light
                      leading-[0.92]
                      tracking-[-0.05em]
                      text-white
                      text-[clamp(2rem,7vw,4.5rem)]
                    "
                  >
                    Designed to feel
                    atmospheric,
                    cinematic,
                    and editorial.
                  </h3>
                </div>
              </motion.div>
            </Reveal>

            {/* COLOR PALETTE */}
            <Reveal
              delay={0.1}
              className="lg:col-span-5 lg:row-span-2"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[28px]
                  border
                  p-6
                  sm:min-h-[420px]
                  sm:rounded-[34px]
                  sm:p-8
                  lg:rounded-[38px]
                "
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.025)',
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-72
                    w-72
                    rounded-full
                    blur-3xl
                  "
                  style={{
                    background:
                      'radial-gradient(circle, rgba(132,118,103,0.28), transparent 70%)',
                  }}
                />

                <div className="relative z-10">

                  <p
                    className="
                      font-mono-label
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      sm:text-[10px]
                    "
                    style={{
                      color:
                        'var(--text-muted)',
                    }}
                  >
                    COLOR ATMOSPHERE
                  </p>

                  <h3
                    className="
                      mt-5
                      max-w-sm
                      font-editorial
                      font-light
                      leading-[0.94]
                      tracking-[-0.04em]
                      text-[clamp(2rem,7vw,3rem)]
                    "
                  >
                    Warm neutrals
                    with cinematic
                    contrast.
                  </h3>
                </div>

                {/* COLORS */}
                <div className="relative z-10 mt-10 flex flex-wrap gap-3 sm:gap-4">

                  {[
                    '#F4F1EA',
                    '#847667',
                    '#111111',
                    '#2A2A2A',
                  ].map((color, i) => (
                    <motion.div
                      key={color}
                      initial={{
                        y: 40,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.8,
                        ease,
                      }}
                      whileHover={{
                        y: -10,
                        rotate: 4,
                        scale: 1.04,
                      }}
                      className="
                        relative
                        h-16
                        w-16
                        rounded-[20px]
                        sm:h-20
                        sm:w-20
                        sm:rounded-[24px]
                      "
                      style={{
                        background: color,
                        boxShadow:
                          '0px 20px 50px rgba(0,0,0,0.25)',
                      }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-[20px]
                          sm:rounded-[24px]
                        "
                        style={{
                          border:
                            '1px solid rgba(255,255,255,0.12)',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Reveal>

            {/* TYPOGRAPHY */}
            <Reveal
              delay={0.15}
              className="lg:col-span-5 lg:row-span-2"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  flex
                  min-h-[360px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[28px]
                  border
                  p-6
                  sm:min-h-[420px]
                  sm:rounded-[34px]
                  sm:p-8
                  lg:rounded-[38px]
                "
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.02)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 42%)',
                  }}
                />

                <div className="relative z-10">

                  <p
                    className="
                      font-mono-label
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      sm:text-[10px]
                    "
                    style={{
                      color:
                        'var(--text-muted)',
                    }}
                  >
                    TYPOGRAPHY SYSTEM
                  </p>

                  <motion.h2
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="
                      mt-8
                      font-editorial
                      font-light
                      leading-none
                      tracking-[-0.08em]
                      text-[clamp(4rem,18vw,8rem)]
                    "
                  >
                    Aa
                  </motion.h2>
                </div>

                <div className="relative z-10">

                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.18em]
                    "
                    style={{
                      color:
                        'var(--text-muted)',
                    }}
                  >
                    Editorial Contrast
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-[13px]
                      leading-relaxed
                      sm:text-sm
                    "
                    style={{
                      color:
                        'var(--text-secondary)',
                    }}
                  >
                    Large cinematic serif
                    headlines paired with
                    subtle mono labels.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>
    </article>
  )
}
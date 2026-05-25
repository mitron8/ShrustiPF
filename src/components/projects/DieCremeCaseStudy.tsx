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
      className="font-mono-label text-[10px] uppercase tracking-[0.24em]"
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
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-0 top-0 h-[40vw] w-[40vw] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.08), transparent 72%)',
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-6 pb-28 pt-32 md:px-10 lg:px-16 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <BackToHomeLink />
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            {/* LEFT */}
            <div>
              <Reveal delay={0.1}>
                <p
                  className="font-mono-label text-[10px] uppercase tracking-[0.28em]"
                  style={{
                    color: 'rgba(244,241,234,0.72)',
                  }}
                >
                  CASE STUDY — 2026
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <h1 className="mt-6 font-editorial text-[clamp(4rem,9vw,9rem)] font-light leading-[0.82] tracking-[-0.065em]">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p
                  className="mt-8 max-w-2xl text-lg font-light leading-relaxed md:text-xl"
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
                <div className="mt-14 flex flex-wrap gap-10">
                  {[
                    ['ROLE', 'UI · UX · FRONTEND'],
                    ['STACK', 'NEXT · GSAP · MOTION'],
                    ['YEAR', '2026'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p
                        className="font-mono-label text-[9px] uppercase tracking-[0.22em]"
                        style={{
                          color:
                            'var(--text-muted)',
                        }}
                      >
                        {label}
                      </p>

                      <p
                        className="mt-2 text-sm"
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
            <Reveal delay={0.2}>
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="group relative overflow-hidden rounded-[40px] border"
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                }}
              >
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 1.4,
                    ease,
                  }}
                  className="relative aspect-[4/5]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>

                {/* Shine */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{
                    duration: 0.8,
                  }}
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)',
                  }}
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CINEMATIC STORY GRID */}
      <section className="relative px-6 py-40 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <Reveal>
            <div className="mb-24 max-w-5xl">
              <SectionLabel>
                02 — VISUAL LANGUAGE
              </SectionLabel>

              <h2 className="mt-8 font-editorial text-[clamp(3rem,7vw,7rem)] font-light leading-[0.84] tracking-[-0.06em]">
                Built through
                atmosphere,
                rhythm,
                and contrast.
              </h2>

              <p
                className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color:
                    'var(--text-secondary)',
                }}
              >
                Instead of treating the
                interface like a dashboard,
                the experience was designed
                like a cinematic narrative
                where typography, motion,
                spacing, and color create
                emotional pacing.
              </p>
            </div>
          </Reveal>

          {/* MAIN GRID */}
          <div className="grid auto-rows-[180px] gap-6 lg:grid-cols-12">
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
                className="group relative h-full overflow-hidden rounded-[42px] border"
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.03)',
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
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
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15))',
                  }}
                />

                {/* Shine */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{
                    duration: 0.8,
                  }}
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)',
                  }}
                />

                {/* Text */}
                <div className="absolute bottom-0 left-0 z-20 p-10">
                  <p
                    className="font-mono-label text-[10px] uppercase tracking-[0.24em]"
                    style={{
                      color:
                        'rgba(244,241,234,0.72)',
                    }}
                  >
                    IMMERSIVE EXPERIENCE
                  </p>

                  <h3 className="mt-5 max-w-2xl font-editorial text-[clamp(2.5rem,4vw,4.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
                    Designed to feel
                    atmospheric,
                    cinematic,
                    and editorial.
                  </h3>
                </div>
              </motion.div>
            </Reveal>

            {/* COLOR STORY */}
            <Reveal
              delay={0.1}
              className="lg:col-span-5 lg:row-span-2"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="relative flex h-full overflow-hidden rounded-[38px] border p-8"
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.025)',
                }}
              >
                {/* Animated Glow */}
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                  }}
                  className="absolute -right-16 -top-16 h-72 w-72 rounded-full blur-3xl"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(132,118,103,0.35), transparent 70%)',
                  }}
                />

                <div className="relative z-10 flex flex-col justify-between">
                  <div>
                    <p
                      className="font-mono-label text-[10px] uppercase tracking-[0.22em]"
                      style={{
                        color:
                          'var(--text-muted)',
                      }}
                    >
                      COLOR ATMOSPHERE
                    </p>

                    <h3 className="mt-5 font-editorial text-[clamp(2rem,3vw,3rem)] font-light leading-[0.94] tracking-[-0.04em]">
                      Warm neutrals
                      with cinematic
                      contrast.
                    </h3>
                  </div>

                  {/* Floating Colors */}
                  <div className="mt-10 flex gap-4">
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
                          y: -12,
                          rotate: 4,
                          scale: 1.06,
                        }}
                        className="relative h-20 w-20 rounded-[24px]"
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
                          className="absolute inset-0 rounded-[24px]"
                          style={{
                            border:
                              '1px solid rgba(255,255,255,0.12)',
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
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
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-[38px] border p-8"
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.02)',
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 42%)',
                  }}
                />

                <div className="relative z-10">
                  <p
                    className="font-mono-label text-[10px] uppercase tracking-[0.22em]"
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
                    className="mt-10 font-editorial text-[8rem] font-light leading-none tracking-[-0.08em]"
                  >
                    Aa
                  </motion.h2>
                </div>

                <div className="relative z-10">
                  <p
                    className="text-sm uppercase tracking-[0.2em]"
                    style={{
                      color:
                        'var(--text-muted)',
                    }}
                  >
                    Editorial Contrast
                  </p>

                  <p
                    className="mt-4 max-w-sm text-sm leading-relaxed"
                    style={{
                      color:
                        'var(--text-secondary)',
                    }}
                  >
                    Large cinematic serif
                    headlines paired with
                    subtle mono labels to
                    create pacing and visual
                    restraint.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* EXPERIENCE FLOW */}
            <Reveal
              delay={0.2}
              className="lg:col-span-7 lg:row-span-2"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="group relative flex h-full overflow-hidden rounded-[42px] border"
                style={{
                  borderColor:
                    'rgba(255,255,255,0.08)',
                  background:
                    'rgba(255,255,255,0.025)',
                }}
              >
                <div className="grid w-full lg:grid-cols-[0.55fr_0.45fr]">
                  {/* LEFT */}
                  <div className="flex flex-col justify-between p-8 md:p-10">
                    <div>
                      <p
                        className="font-mono-label text-[10px] uppercase tracking-[0.22em]"
                        style={{
                          color:
                            'var(--text-muted)',
                        }}
                      >
                        EXPERIENCE FLOW
                      </p>

                      <h3 className="mt-6 max-w-xl font-editorial text-[clamp(2rem,3vw,3.5rem)] font-light leading-[0.92] tracking-[-0.04em]">
                        Every section
                        unfolds like
                        visual storytelling.
                      </h3>
                    </div>

                    <p
                      className="max-w-md text-sm leading-relaxed"
                      style={{
                        color:
                          'var(--text-secondary)',
                      }}
                    >
                      Slow transitions,
                      immersive spacing,
                      and cinematic movement
                      were used to guide the
                      user naturally through
                      the experience.
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{
                        scale: 1.04,
                      }}
                      transition={{
                        duration: 1.2,
                        ease,
                      }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to left, rgba(0,0,0,0.55), transparent)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-32 pt-20 md:px-10 lg:px-16">
        <div
          className="mx-auto max-w-7xl border-t pt-24 text-center"
          style={{
            borderColor:
              'rgba(255,255,255,0.08)',
          }}
        >
          <Reveal>
            <h2 className="font-editorial text-[clamp(3rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.05em]">
              Great experiences
              should feel
              unforgettable.
            </h2>

            <p
              className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed"
              style={{
                color:
                  'var(--text-secondary)',
              }}
            >
              Every interaction,
              transition, and layout
              decision was crafted to
              feel intentional and timeless.
            </p>

            <div className="mt-12 flex justify-center">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-b border-white/20 pb-1 font-mono-label text-[10px] uppercase tracking-[0.24em] transition-all duration-500 hover:border-white/50"
              >
                View Live Website

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  )
}
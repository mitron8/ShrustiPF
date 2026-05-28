'use client'

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  project: any
}

const ease = [0.22, 1, 0.36, 1] as const

// ─────────────────────────────────────────────
// REVEAL
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
              y: 70,
              filter: 'blur(12px)',
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
        duration: 1.4,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// WORD REVEAL
// ─────────────────────────────────────────────

function WordReveal({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const words = text.split(' ')

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: i * 0.045,
            ease,
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// LABEL
// ─────────────────────────────────────────────

function SectionLabel({
  children,
}: {
  children: ReactNode
}) {
  return (
    <p
      className="
        text-[10px]
        uppercase
        tracking-[0.24em]
      "
      style={{
        color:
          'rgba(244,241,234,0.42)',
      }}
    >
      {children}
    </p>
  )
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────

export default function MizuCaseStudy({
  project,
}: Props) {
  const { scrollYProgress } =
    useScroll()

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  )

  return (
    <article className="relative overflow-hidden bg-black text-[#f4f1ea]">

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* AMBIENT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            right-0
            top-0
            h-[42vw]
            w-[42vw]
            rounded-full
            blur-3xl
          "
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="px-4 pb-24 pt-28 sm:px-6 md:px-10 lg:px-16 lg:pb-32 lg:pt-32">

          <div className="mx-auto max-w-7xl">

            <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

              {/* LEFT */}
              <motion.div
                style={{
                  y: heroY,
                }}
              >
                <Reveal delay={0.1}>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.28em]
                    "
                    style={{
                      color:
                        'rgba(244,241,234,0.68)',
                    }}
                  >
                    CASE STUDY — {project.year}
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <h1
                    className="
                      mt-5
                      max-w-5xl
                      font-light
                      leading-[0.82]
                      tracking-[-0.06em]
                      text-[clamp(4rem,13vw,9rem)]
                    "
                  >
                    {project.title}
                  </h1>
                </Reveal>

                <Reveal delay={0.22}>
                  <p
                    className="
                      mt-8
                      max-w-2xl
                      text-[16px]
                      leading-relaxed
                      sm:text-[18px]
                      md:text-[20px]
                    "
                    style={{
                      color:
                        'rgba(244,241,234,0.66)',
                    }}
                  >
                    {project.longDescription}
                  </p>
                </Reveal>

                {/* META */}
                <Reveal delay={0.3}>
                  <div className="mt-10 flex flex-wrap gap-8">

                    {[
                      [
                        'CATEGORY',
                        project.category,
                      ],
                      [
                        'FOCUS',
                        project.focus,
                      ],
                      [
                        'RESULT',
                        project.result,
                      ],
                    ].map(
                      ([label, value]) => (
                        <div key={label}>
                          <p
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.18em]
                            "
                            style={{
                              color:
                                'rgba(244,241,234,0.34)',
                            }}
                          >
                            {label}
                          </p>

                          <p
                            className="mt-2 text-sm"
                            style={{
                              color:
                                'rgba(244,241,234,0.82)',
                            }}
                          >
                            {value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </Reveal>
              </motion.div>

              {/* RIGHT PREVIEW */}
              <Reveal delay={0.2}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 1.2,
                    ease,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border
                  "
                  style={{
                    borderColor:
                      'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      priority
                      className="
                        object-cover
                        object-center
                        transition-transform
                        duration-[2500ms]
                        group-hover:scale-[1.04]
                      "
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.12))',
                      }}
                    />

                    <div className="absolute bottom-0 left-0 z-20 p-8">

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.22em]
                        "
                        style={{
                          color:
                            'rgba(244,241,234,0.68)',
                        }}
                      >
                        PREMIUM EXPERIENCE
                      </p>

                      <h3
                        className="
                          mt-4
                          max-w-md
                          text-[clamp(2rem,5vw,3.8rem)]
                          font-light
                          leading-[0.9]
                          tracking-[-0.05em]
                          text-white
                        "
                      >
                        Editorial storytelling
                        meets cinematic motion.
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="relative overflow-hidden px-4 py-28 sm:px-6 md:px-10 lg:px-16 lg:py-44">

          <div className="mx-auto max-w-7xl">

            <Reveal>
              <SectionLabel>
                01 — PHILOSOPHY
              </SectionLabel>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 max-w-6xl">

                <h2
                  className="
                    font-light
                    leading-[0.86]
                    tracking-[-0.06em]
                    text-[clamp(3rem,9vw,8rem)]
                  "
                >
                  Motion wasn’t
                  added for effect.
                  <br />
                  It became the
                  interface itself.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-14 grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">

                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                    "
                    style={{
                      color:
                        'rgba(244,241,234,0.42)',
                    }}
                  >
                    EXPERIENCE DIRECTION
                  </p>
                </div>

                <div>
                  <p
                    className="
                      max-w-2xl
                      text-[18px]
                      leading-[1.9]
                      md:text-[21px]
                    "
                    style={{
                      color:
                        'rgba(244,241,234,0.68)',
                    }}
                  >
                    Mizu was designed around the idea that
                    digital experiences should feel cinematic
                    instead of mechanical. Every transition,
                    layer, interaction, and motion sequence
                    was crafted to create emotional pacing
                    while still maintaining clarity.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="px-4 py-24 sm:px-6 md:px-10 lg:px-16 lg:py-40">

          <div className="mx-auto max-w-7xl">

            <Reveal>
              <SectionLabel>
                02 — OVERVIEW
              </SectionLabel>
            </Reveal>

            <Reveal delay={0.1}>
              <WordReveal
                text={project.page.overview}
                className="
                  mt-8
                  max-w-6xl
                  font-light
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-[clamp(2.5rem,8vw,6.5rem)]
                "
              />
            </Reveal>
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="px-4 py-24 sm:px-6 md:px-10 lg:px-16 lg:py-40">

          <div className="mx-auto max-w-7xl">

            <Reveal>
              <SectionLabel>
                03 — EXPERIENCE SHOWCASE
              </SectionLabel>
            </Reveal>

            <div className="mt-16 space-y-8">

              {project.page.showcases.map(
                (item: any, i: number) => (
                  <Reveal
                    key={item.src}
                    delay={i * 0.08}
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 1,
                        ease,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[36px]
                        border
                      "
                      style={{
                        borderColor:
                          'rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="relative aspect-[16/8]">

                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="
                            object-cover
                            object-center
                            transition-transform
                            duration-[2500ms]
                            group-hover:scale-[1.03]
                          "
                        />

                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.08))',
                          }}
                        />

                        <div className="absolute bottom-0 left-0 z-20 p-8 md:p-10">

                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.2em]
                            "
                            style={{
                              color:
                                'rgba(244,241,234,0.62)',
                            }}
                          >
                            SHOWCASE 0{i + 1}
                          </p>

                          <h3
                            className="
                              mt-4
                              max-w-xl
                              text-white
                              text-[clamp(2rem,5vw,4rem)]
                              font-light
                              leading-[0.92]
                              tracking-[-0.04em]
                            "
                          >
                            {item.caption}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* PALETTE */}
        <section className="px-4 py-24 sm:px-6 md:px-10 lg:px-16 lg:py-40">

          <div className="mx-auto max-w-7xl">

            <Reveal>
              <SectionLabel>
                04 — COLOR SYSTEM
              </SectionLabel>
            </Reveal>

            <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-5">

              {project.page.palette.map(
                (item: any, i: number) => (
                  <Reveal
                    key={item.name}
                    delay={i * 0.05}
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      className="
                        rounded-[28px]
                        border
                        p-5
                      "
                      style={{
                        borderColor:
                          'rgba(255,255,255,0.08)',

                        background:
                          'rgba(255,255,255,0.02)',
                      }}
                    >
                      <div
                        className="
                          h-28
                          w-full
                          rounded-2xl
                        "
                        style={{
                          background:
                            item.value,
                        }}
                      />

                      <h3
                        className="
                          mt-5
                          text-2xl
                          font-light
                        "
                      >
                        {item.name}
                      </h3>

                      <p
                        className="mt-2 text-sm"
                        style={{
                          color:
                            'rgba(244,241,234,0.6)',
                        }}
                      >
                        {item.value}
                      </p>
                    </motion.div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 pb-32 pt-20 sm:px-6 md:px-10 lg:px-16">

          <div
            className="
              mx-auto
              max-w-7xl
              border-t
              pt-20
              text-center
            "
            style={{
              borderColor:
                'rgba(255,255,255,0.08)',
            }}
          >
            <Reveal>
              <h2
                className="
                  font-light
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-[clamp(3rem,8vw,7rem)]
                "
              >
                Minimal.
                <br />
                But emotionally rich.
              </h2>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-2xl
                  text-[16px]
                  leading-relaxed
                  md:text-[18px]
                "
                style={{
                  color:
                    'rgba(244,241,234,0.58)',
                }}
              >
                If this is what I build
                without a client, imagine
                what I build when the
                vision is real.
              </p>

              <div className="mt-12 flex justify-center">

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    border-b
                    border-white/20
                    pb-1
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    transition-all
                    duration-700
                    hover:border-white/60
                  "
                >
                  View Live Website

                  <span
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </article>
  )
}
'use client'

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion'

import {
  useRef,
  useState,
} from 'react'

import Image from 'next/image'

import { projects } from '@/data/projects'

import ProjectActions from '@/components/projects/ProjectActions'

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const

type Project = (typeof projects)[number]

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function getDisplayProject(
  project: Project
) {
  if (project.slug !== 'vertex')
    return project

  return {
    ...project,
    title:
      'Editorial Brand Templates',
    shortDescription:
      'Scroll-stopping posts, brand kits, and digital assets designed to elevate how modern brands present themselves online.',
    tags: [
      'UI DESIGN',
      'FIGMA',
      'BRAND SYSTEM',
      'SOCIAL',
      'CANVA',
    ],
  }
}

function getOverrides(
  project: Project
) {
  const isBerlin =
    project.slug ===
    'die-creme-berlin'

  return {
    tags: isBerlin
      ? [
          'NEXT.JS',
          'UI DESIGN',
          'PRO BONO',
        ]
      : getDisplayProject(
          project
        ).tags.slice(0, 4),

    description: isBerlin
      ? 'A Berlin café website — original brand, full build, zero templates.'
      : getDisplayProject(project)
          .shortDescription,
  }
}

// ─────────────────────────────────────────────
// CARD CONTENT
// ─────────────────────────────────────────────

function CardContent({
  project,
}: {
  project: Project
}) {
  const { tags, description } =
    getOverrides(project)

  return (
    <motion.div
      key={`content-${project.id}`}
      initial={{
        opacity: 0,
        y: 28,
        filter: 'blur(8px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      exit={{
        opacity: 0,
        y: -10,
        filter: 'blur(5px)',
      }}
      transition={{
        duration: 1,
        delay: 0.12,
        ease,
      }}
    >
      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          max-w-xl
          text-sm
          leading-relaxed
          sm:text-base
        "
        style={{
          color:
            'rgba(244,241,234,0.72)',
        }}
      >
        {description}
      </p>

      {/* TAGS */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag, ti) => (
          <motion.span
            key={tag}
            initial={{
              opacity: 0,
              scale: 0.82,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay:
                0.24 + ti * 0.08,
              duration: 0.8,
              ease,
            }}
            className="
              rounded-full
              px-2 py-1
              font-mono-label
              text-[8px]
              uppercase
              tracking-[0.14em]
            "
            style={{
              color:
                'rgba(244,241,234,0.68)',
              border:
                '1px solid rgba(255,255,255,0.09)',
              background:
                'rgba(255,255,255,0.03)',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* ACTIONS */}
      <motion.div
        className="mt-8"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.42,
          duration: 1,
          ease,
        }}
      >
        <ProjectActions
          liveUrl={project.liveUrl}
          caseStudyHref={`/work/${project.slug}`}
          showLiveSite={
            project.slug !== 'vertex'
          }
          caseStudyLabel={
            project.slug === 'vertex'
              ? 'VIEW ARCHIVE ↗'
              : undefined
          }
        />
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// IMAGE PANEL
// ─────────────────────────────────────────────

function ImagePanel({
  project,
  isActive,
}: {
  project: Project
  isActive: boolean
}) {
  return (
    <motion.div
      animate={{
        opacity: isActive
          ? 1
          : 0.45,

        scale: isActive
          ? 1
          : 1.04,
      }}
      transition={{
        duration: 2,
        ease,
      }}
      className="
        relative
        hidden
        min-h-[260px]
        overflow-hidden
        lg:block
      "
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover"
        sizes="40vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.06) 48%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function Work() {
  const [activeProjectId, setActiveProjectId] =
    useState(projects[0]?.id)

  const [manualOverride, setManualOverride] =
    useState(false)

  const projectRefs = useRef<
    (HTMLElement | null)[]
  >([])

  const { scrollY } = useScroll()

  // ─────────────────────────────────────
  // SCROLL DETECTION
  // ─────────────────────────────────────

  useMotionValueEvent(
    scrollY,
    'change',
    () => {
      if (manualOverride) return

      const trigger =
        window.innerHeight * 0.45

      let currentId =
        projects[0]?.id

      projectRefs.current.forEach(
        (el, i) => {
          if (!el) return

          const rect =
            el.getBoundingClientRect()

          if (
            rect.top <= trigger
          ) {
            currentId =
              projects[i].id
          }
        }
      )

      if (
        currentId !==
        activeProjectId
      ) {
        setActiveProjectId(
          currentId
        )
      }
    }
  )

  // ─────────────────────────────────────
  // CLICK EXPAND
  // ─────────────────────────────────────

  const handleExpand = (
    projectId: string
  ) => {
    setManualOverride(true)

    setActiveProjectId(projectId)

    const index =
      projects.findIndex(
        (p) => p.id === projectId
      )

    const target =
      projectRefs.current[index]

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })

    setTimeout(() => {
      setManualOverride(false)
    }, 2200)
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        px-4
        py-20
        sm:px-6
        md:px-10
        md:py-28
        xl:px-16
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 space-y-5">
        {projects.map(
          (project, i) => {
            const isActive =
              activeProjectId ===
              project.id

            const dp =
              getDisplayProject(
                project
              )

            return (
              <motion.article
                layout
                key={project.id}
                ref={(el) => {
                  projectRefs.current[
                    i
                  ] = el
                }}
                onClick={() =>
                  handleExpand(
                    project.id
                  )
                }
                initial={{
                  opacity: 0,
                  y: 44,
                  scale: 0.984,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin:
                    '-6% 0px',
                }}
                transition={{
                  duration: 1.8,
                  delay: i * 0.08,
                  ease,
                }}
                className="
                  group
                  relative
                  min-h-[160px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[28px]
                  border
                  sm:rounded-[34px]
                "
                animate={{
                  height: isActive
                    ? 'auto'
                    : 160,
                }}
                style={{
                  borderColor:
                    isActive
                      ? 'rgba(244,241,234,0.13)'
                      : 'rgba(255,255,255,0.05)',

                  background:
                    isActive
                      ? 'rgba(255,255,255,0.02)'
                      : 'rgba(255,255,255,0.008)',

                  backdropFilter:
                    'blur(14px)',
                }}
              >
                <motion.div
                  transition={{
                    duration: 1.45,
                    ease,
                  }}
                  className="grid h-full lg:grid-cols-[1.1fr_0.9fr]"
                >
                  {/* LEFT */}
                  <div
                    className="
                      relative
                      flex
                      h-full
                      min-h-[580px]
                      flex-col
                      justify-between
                      p-5
                      sm:p-6
                      md:p-8
                    "
                  >
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-6">

                      <span
                        className="
                          font-mono-label
                          text-[10px]
                          tracking-[0.22em]
                        "
                        style={{
                          color:
                            'rgba(244,241,234,0.68)',
                        }}
                      >
                        {String(
                          i + 1
                        ).padStart(
                          2,
                          '0'
                        )}
                      </span>

                      <span
                        className="
                          font-mono-label
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                        "
                        style={{
                          color:
                            'rgba(244,241,234,0.52)',
                        }}
                      >
                        {
                          project.category
                        }
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="max-w-3xl">

                      <h3
                        className="
                          font-editorial
                          font-light
                          leading-[0.9]
                          tracking-[-0.05em]
                        "
                        style={{
                          fontSize:
                            isActive
                              ? 'clamp(2.3rem,5vw,5rem)'
                              : 'clamp(1.4rem,3vw,2.4rem)',

                          color:
                            'var(--text-primary)',
                        }}
                      >
                        {dp.title}
                      </h3>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <CardContent
                            key={
                              project.id
                            }
                            project={
                              project
                            }
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* MOBILE IMAGE */}
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 1.2,
                          ease,
                        }}
                        className="
                          relative
                          mt-6
                          h-[260px]
                          overflow-hidden
                          rounded-[20px]
                          sm:h-[300px]
                          lg:hidden
                        "
                      >
                        <Image
                          src={
                            project.image
                          }
                          alt={
                            project.imageAlt
                          }
                          fill
                          className="
                            object-cover
                            object-center
                          "
                        />

                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                          }}
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* RIGHT IMAGE */}
                  <ImagePanel
                    project={project}
                    isActive={isActive}
                  />
                </motion.div>
              </motion.article>
            )
          }
        )}
      </div>
    </section>
  )
}
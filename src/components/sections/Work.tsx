'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import BackToHomeLink from '@/components/layout/BackToHomeLink'
import { projects } from '@/data/projects'
import Image from 'next/image'
import BlurReveal from '@/components/motion/BlurReveal'
import ProjectActions from '@/components/projects/ProjectActions'

interface WorkProps {
  standalone?: boolean
  showBackHome?: boolean
}

export default function Work({
  standalone = false,
  showBackHome = false,
}: WorkProps) {
  const [activeProjectId, setActiveProjectId] =
    useState(projects[0]?.id ?? null)

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    })

  const [isHovering, setIsHovering] =
    useState(false)

  useEffect(() => {
    const handleMouseMove = (
      e: MouseEvent
    ) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])

  const activeProject =
    projects.find(
      (project) =>
        project.id === activeProjectId
    ) ?? projects[0]

  const getDisplayProject = (
    project: (typeof projects)[number]
  ) => {
    if (project.slug !== 'vertex')
      return project

    return {
      ...project,
      title:
        'Editorial Brand Templates',

      shortDescription:
        'Scroll-stopping posts, brand kits, and digital assets - designed to show what your brand could look like when the visuals actually do the work.',

      tags: [
        'UI DESIGN',
        'FIGMA',
        'BRAND TEMPLATES',
        'SOCIAL-MEDIA',
        'CANVA',
      ],

      category: '',

      year: '',

      projectNotes:
        'Scroll-stopping posts, brand kits, and digital assets designed as an archive of what a sharper brand system could look like across social and launch surfaces.',
    }
  }

  const activeDisplayProject =
    getDisplayProject(activeProject)

  return (
    <section
      className="relative px-8 py-24 md:px-16 md:py-32"
      aria-labelledby={
        standalone
          ? 'selected-work-page-title'
          : 'selected-work-home-title'
      }
    >
      {/* BACK BUTTON */}
      {showBackHome ? (
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <BackToHomeLink />
          </div>
        </FadeIn>
      ) : null}

      {/* HEADER */}
      <div className="mb-16 flex flex-col gap-6 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <FadeIn>
            <p
              className="mb-6 font-mono-label text-[12px] uppercase tracking-[0.25em]"
              style={{
                color:
                  'rgba(244, 241, 234, 0.8)',
              }}
            >
              WORK I&apos;M PROUD OF
            </p>
          </FadeIn>

          <BlurReveal delay={0.08}>
            <h2
              id={
                standalone
                  ? 'selected-work-page-title'
                  : 'selected-work-home-title'
              }
              className="whitespace-nowrap font-editorial font-light leading-[0.95] tracking-[-0.02em]"
              style={{
                fontSize:
                  'clamp(2.25rem, 6vw, 5.5rem)',
                color:
                  'var(--text-primary)',
              }}
            >
              Every pixel had a reason.
            </h2>
          </BlurReveal>
        </div>

        <FadeIn delay={0.14}>
          <p
            className="max-w-md text-sm font-light leading-relaxed md:text-base"
            style={{
              color:
                'var(--text-secondary)',
            }}
          >
            No templates. No shortcuts.
            Just research, strategy,
            and code working together
            from day one.
          </p>
        </FadeIn>
      </div>

      {/* PROJECT LIST */}
      <div className="relative">
        {projects.map(
          (project, i) => {
            const isActive =
              activeProject?.id ===
              project.id

            const displayProject =
              getDisplayProject(
                project
              )

            return (
              <FadeIn
                key={project.id}
                delay={i * 0.08}
              >
                <article
                  className="group grid gap-4 py-7 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-8 md:py-9"
                  onMouseEnter={() => {
                    setActiveProjectId(
                      project.id
                    )

                    setIsHovering(true)
                  }}
                  onMouseLeave={() =>
                    setIsHovering(false)
                  }
                  onFocusCapture={() => {
                    setActiveProjectId(
                      project.id
                    )

                    setIsHovering(true)
                  }}
                  style={{
                    borderTop:
                      '1px solid var(--border-subtle)',

                    background:
                      isActive
                        ? 'linear-gradient(90deg, rgba(244, 241, 234, 0.03), transparent 58%)'
                        : 'transparent',
                  }}
                >
                  {/* NUMBER */}
                  <span
                    className="mt-1 font-mono-label text-[10px] tracking-[0.2em]"
                    style={{
                      color:
                        'var(--text-muted)',
                    }}
                  >
                    {String(
                      i + 1
                    ).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  {/* CONTENT */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-6">

                      <h3
                        className="font-editorial font-light leading-tight transition-colors duration-700"
                        style={{
                          fontSize:
                            'clamp(1.65rem, 3vw, 3rem)',

                          color:
                            'var(--text-primary)',
                        }}
                      >
                        {
                          displayProject.title
                        }
                      </h3>

                      {project.slug ===
                      'vertex' ? null : (
                        <p
                          className="font-mono-label text-[9px] uppercase tracking-[0.15em]"
                          style={{
                            color:
                              'var(--text-muted)',
                          }}
                        >
                          {`${project.category} — ${project.year}`}
                        </p>
                      )}
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className="max-w-xl text-sm font-light leading-relaxed md:text-base"
                      style={{
                        color:
                          isActive
                            ? 'var(--text-secondary)'
                            : 'rgba(184, 184, 184, 0.82)',
                      }}
                    >
                      {
                        displayProject.shortDescription
                      }
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {displayProject.tags.map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 font-mono-label text-[9px] uppercase tracking-[0.15em]"
                            style={{
                              color:
                                'var(--text-muted)',

                              border:
                                '1px solid var(--border-subtle)',
                            }}
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <ProjectActions
                    liveUrl={
                      project.liveUrl
                    }
                    caseStudyHref={`/work/${project.slug}`}
                    showLiveSite={
                      project.slug !==
                      'vertex'
                    }
                    caseStudyLabel={
                      project.slug ===
                      'vertex'
                        ? 'VIEW ARCHIVE ↗'
                        : undefined
                    }
                    className="md:self-center md:justify-self-end"
                  />
                </article>
              </FadeIn>
            )
          }
        )}

        <div
          className="h-px"
          style={{
            background:
              'var(--border-subtle)',
          }}
        />
      </div>

      {/* FLOATING PREVIEW */}
      {activeProject && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: isHovering
              ? 1
              : 0,

            scale: isHovering
              ? 1
              : 0.92,

            x:
              mousePosition.x + 40,

            y:
              mousePosition.y - 220,
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 18,
            mass: 0.4,
          }}
          className="
            pointer-events-none
            fixed
            left-0
            top-0
            z-[999]
            hidden
            w-[360px]
            overflow-hidden
            rounded-[28px]
            border
            lg:block
          "
          style={{
            border:
              '1px solid rgba(255,255,255,0.08)',

            background:
              'rgba(10,10,10,0.72)',

            backdropFilter:
              'blur(22px)',
          }}
        >
          {/* IMAGE */}
          <div className="relative aspect-[4/3] overflow-hidden">

            <Image
              src={activeProject.image}
              alt={
                activeProject.imageAlt
              }
              fill
              className="object-cover"
              sizes="360px"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-5 p-5">

            <div>
              <p
                className="mb-2 font-mono-label text-[9px] uppercase tracking-[0.18em]"
                style={{
                  color:
                    'rgba(244,241,234,0.5)',
                }}
              >
                {
                  activeDisplayProject.category
                }
              </p>

              <h3
                className="font-editorial text-[2rem] font-light leading-none"
                style={{
                  color:
                    'var(--text-primary)',
                }}
              >
                {
                  activeDisplayProject.title
                }
              </h3>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{
                color:
                  'rgba(244,241,234,0.72)',
              }}
            >
              {
                activeDisplayProject.projectNotes
              }
            </p>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-2">

              {[
                {
                  label: 'Focus',
                  value:
                    activeProject.focus,
                },

                {
                  label: 'Scope',
                  value:
                    activeProject.scope,
                },

                {
                  label: 'Result',
                  value:
                    activeProject.result,
                },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[14px] p-2"
                  style={{
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p
                    className="font-mono-label text-[7px] uppercase tracking-[0.15em]"
                    style={{
                      color:
                        'rgba(244,241,234,0.45)',
                    }}
                  >
                    {metric.label}
                  </p>

                  <p
                    className="mt-2 text-[12px] leading-snug"
                    style={{
                      color:
                        'var(--text-primary)',
                    }}
                  >
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
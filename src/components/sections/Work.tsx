'use client'

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion'
import { useRef, useState } from 'react'

import FadeIn from '@/components/motion/FadeIn'
import BlurReveal from '@/components/motion/BlurReveal'
import BackToHomeLink from '@/components/layout/BackToHomeLink'
import { projects } from '@/data/projects'
import Image from 'next/image'
import ProjectActions from '@/components/projects/ProjectActions'

// ─── Constants ─────────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const
const CARD_OPEN_H = '580px'
const CARD_CLOSED_H = '160px'

// ─── Types ──────────────────────────────────────────────────────────────────

interface WorkProps {
  standalone?: boolean
  showBackHome?: boolean
}

type Project = (typeof projects)[number]

// ─── Helpers ────────────────────────────────────────────────────────────────

function getDisplayProject(project: Project) {
  if (project.slug !== 'vertex') return project

  return {
    ...project,
    title: 'Editorial Brand Templates',
    shortDescription:
      'Scroll-stopping posts, brand kits, and digital assets designed to elevate how modern brands present themselves online.',
    tags: ['UI DESIGN', 'FIGMA', 'BRAND SYSTEM', 'SOCIAL', 'CANVA'],
  }
}

function getOverrides(project: Project) {
  const isBerlin = project.slug === 'die-creme-berlin'

  return {
    tags: isBerlin
      ? ['NEXT.JS', 'UI DESIGN', 'PRO BONO']
      : getDisplayProject(project).tags.slice(0, 4),

    description: isBerlin
      ? 'A Berlin café website — original brand, full build, zero templates.'
      : getDisplayProject(project).shortDescription,
  }
}

// ─── Active counter ─────────────────────────────────────────────────────────

function ProjectCounter({
  current,
  total,
}: {
  current: number
  total: number
}) {
  return (
    <div
      className="flex items-center gap-1.5 font-mono-label text-[10px] uppercase tracking-[0.25em]"
      style={{ color: 'rgba(244,241,234,0.32)' }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          transition={{ duration: 0.38, ease }}
        >
          {String(current).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>

      <span style={{ color: 'rgba(244,241,234,0.15)' }}>
        / {String(total).padStart(2, '0')}
      </span>
    </div>
  )
}

// ─── Progress sidebar ───────────────────────────────────────────────────────

function ProgressSidebar({
  activeIndex,
  total,
}: {
  activeIndex: number
  total: number
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -left-5 top-0 hidden h-full w-px xl:block"
      style={{ background: 'rgba(244,241,234,0.08)' }}
    >
      <motion.div
        className="absolute left-0 top-0 w-full origin-top rounded-full"
        animate={{ scaleY: (activeIndex + 1) / total }}
        transition={{ duration: 0.9, ease }}
        style={{
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(244,241,234,0.5), rgba(244,241,234,0.18))',
        }}
      />

      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute -left-[2.5px] h-[5px] w-[5px] rounded-full"
          style={{ top: `${(i / (total - 1)) * 100}%` }}
          animate={{
            background:
              i <= activeIndex
                ? 'rgba(244,241,234,0.6)'
                : 'rgba(244,241,234,0.15)',

            scale: i === activeIndex ? 1.4 : 1,
          }}
          transition={{ duration: 0.4, ease }}
        />
      ))}
    </div>
  )
}

// ─── Image panel ────────────────────────────────────────────────────────────

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
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 1.07,
      }}
      transition={{ duration: 1.05, ease }}
      className="relative hidden overflow-hidden lg:block"
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
            'linear-gradient(90deg, rgba(8,8,8,0.74) 0%, rgba(8,8,8,0.04) 48%, rgba(8,8,8,0.22) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 38%)',
        }}
      />

      <AnimatePresence>
        {isActive && (
          <motion.div
            key="shimmer"
            aria-hidden
            initial={{ x: '-100%' }}
            animate={{ x: '250%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, delay: 0.25, ease }}
            className="pointer-events-none absolute inset-y-0 -skew-x-12"
            style={{
              width: '45%',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent)',
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Expanded card content ─────────────────────────────────────────────────

function CardContent({ project }: { project: Project }) {
  const { tags, description } = getOverrides(project)

  return (
    <motion.div
      key={`content-${project.id}`}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
      transition={{ duration: 0.6, delay: 0.1, ease }}
    >
      <p
        className="mt-5 max-w-xl text-base leading-relaxed"
        style={{ color: 'rgba(244,241,234,0.72)' }}
      >
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag, ti) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.82, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.22 + ti * 0.065,
              duration: 0.48,
              ease,
            }}
            className="rounded-full px-2 py-1 font-mono-label text-[8px] uppercase tracking-[0.14em]"
            style={{
              color: 'rgba(244,241,234,0.68)',
              border: '1px solid rgba(255,255,255,0.09)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5, ease }}
      >
        <ProjectActions
          liveUrl={project.liveUrl}
          caseStudyHref={`/work/${project.slug}`}
          showLiveSite={project.slug !== 'vertex'}
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

// ─── Meta row ───────────────────────────────────────────────────────────────

function MetaRow({ project }: { project: Project }) {
  const items = [
    { label: 'Focus', value: project.focus },
    { label: 'Scope', value: project.scope },
    { label: 'Result', value: project.result },
  ]

  return (
    <motion.div
      key={`meta-${project.id}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.6, delay: 0.32, ease }}
      className="hidden items-center gap-10 lg:flex"
    >
      {items.map((item, mi) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.36 + mi * 0.085,
            duration: 0.5,
            ease,
          }}
        >
          <p
            className="font-mono-label text-[8px] uppercase tracking-[0.18em]"
            style={{ color: 'rgba(244,241,234,0.42)' }}
          >
            {item.label}
          </p>

          <p
            className="mt-2 text-sm"
            style={{ color: 'rgba(244,241,234,0.74)' }}
          >
            {item.value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── Main ───────────────────────────────────────────────────────────────────

export default function Work({
  standalone = false,
  showBackHome = false,
}: WorkProps) {
  const [activeProjectId, setActiveProjectId] =
    useState(projects[0]?.id)

  const containerRef = useRef<HTMLDivElement>(null)

  // ✅ FIXED ERROR HERE
  const projectRefs = useRef<(HTMLElement | null)[]>([])

  const { scrollY } = useScroll()

  const activeIndex = projects.findIndex(
    (p) => p.id === activeProjectId
  )

  useMotionValueEvent(scrollY, 'change', () => {
    const trigger = window.innerHeight * 0.58

    let currentId = projects[0]?.id

    projectRefs.current.forEach((el, i) => {
      if (!el) return

      if (el.getBoundingClientRect().top <= trigger) {
        currentId = projects[i].id
      }
    })

    setActiveProjectId(currentId)
  })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 xl:px-16"
    >
      <div className="relative space-y-5">
        <ProgressSidebar
          activeIndex={activeIndex}
          total={projects.length}
        />

        {projects.map((project, i) => {
          const isActive =
            activeProjectId === project.id

          const dp = getDisplayProject(project)

          return (
            <motion.article
              key={project.id}
              ref={(el) => {
                projectRefs.current[i] = el
              }}
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
                margin: '-6% 0px',
              }}
              transition={{
                duration: 1.15,
                delay: i * 0.07,
                ease,
              }}
              className="group relative overflow-hidden rounded-[34px] border"
              style={{
                borderColor: isActive
                  ? 'rgba(244,241,234,0.13)'
                  : 'var(--border-subtle)',

                background: isActive
                  ? 'rgba(255,255,255,0.03)'
                  : 'rgba(255,255,255,0.015)',

                height: isActive
                  ? CARD_OPEN_H
                  : CARD_CLOSED_H,

                transition:
                  'height 1s cubic-bezier(0.16,1,0.3,1), border-color 0.65s ease, background 0.65s ease',

                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="grid h-full lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className="font-mono-label text-[10px] tracking-[0.22em]"
                      style={{
                        color: 'rgba(244,241,234,0.68)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {project.slug !== 'vertex' && (
                      <span
                        className="font-mono-label text-[9px] uppercase tracking-[0.18em]"
                        style={{
                          color: 'rgba(244,241,234,0.52)',
                        }}
                      >
                        {project.category}
                      </span>
                    )}
                  </div>

                  <div className="max-w-3xl">
                    <h3
                      className="font-editorial font-light leading-[0.9] tracking-[-0.05em]"
                      style={{
                        fontSize: isActive
                          ? 'clamp(2.8rem,5vw,5rem)'
                          : 'clamp(1.5rem,3vw,2.4rem)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {dp.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <CardContent
                          key={project.id}
                          project={project}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <MetaRow
                        key={`meta-${project.id}`}
                        project={project}
                      />
                    )}
                  </AnimatePresence>
                </div>

                <ImagePanel
                  project={project}
                  isActive={isActive}
                />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
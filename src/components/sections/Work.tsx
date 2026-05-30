'use client'

import { useState } from 'react'
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

export default function Work({ standalone = false, showBackHome = false }: WorkProps) {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? null)
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0]
  const getDisplayProject = (project: typeof projects[number]) => {
    if (project.slug !== 'vertex') return project

    return {
      ...project,
      title: 'Editorial Brand Templates',
      shortDescription:
        'Scroll-stopping posts, brand kits, and digital assets - designed to show what your brand could look like when the visuals actually do the work.',
      tags: ['UI DESIGN', 'FIGMA', 'BRAND TEMPLATES', 'SOCIAL-MEDIA', 'CANVA'],
      category: '',
      year: '',
      projectNotes:
        'Scroll-stopping posts, brand kits, and digital assets designed as an archive of what a sharper brand system could look like across social and launch surfaces.',
    }
  }
  const activeDisplayProject = getDisplayProject(activeProject)

  return (
    <section className="px-8 py-24 md:px-16 md:py-32" aria-labelledby={standalone ? 'selected-work-page-title' : 'selected-work-home-title'}>
      {showBackHome ? (
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <BackToHomeLink />
          </div>
        </FadeIn>
      ) : null}

      <div className="mb-16 flex flex-col gap-6 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-6 font-mono-label text-[12px] uppercase tracking-[0.25em]" style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
              WORK I&apos;M PROUD OF
            </p>
          </FadeIn>
          <BlurReveal delay={0.08}>
            <h2
              id={standalone ? 'selected-work-page-title' : 'selected-work-home-title'}
              className="whitespace-nowrap font-editorial font-light leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 5.5rem)', color: 'var(--text-primary)' }}
            >
              Every pixel had a reason.
            </h2>
          </BlurReveal>
        </div>

        <FadeIn delay={0.14}>
          <p className="max-w-md text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-secondary)' }}>
            No templates. No shortcuts. Just research, strategy, and code working together from day one.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <div>
          {projects.map((project, i) => {
            const isActive = activeProject?.id === project.id
            const displayProject = getDisplayProject(project)

            return (
              <FadeIn key={project.id} delay={i * 0.08}>
                <article
                  className="group grid gap-4 py-7 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-8 md:py-9"
                  onMouseEnter={() => setActiveProjectId(project.id)}
                  onFocusCapture={() => setActiveProjectId(project.id)}
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    background: isActive ? 'linear-gradient(90deg, rgba(244, 241, 234, 0.03), transparent 58%)' : 'transparent',
                  }}
                >
                  <span className="mt-1 font-mono-label text-[10px] tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-6">
                      <h3
                        className={
                          project.slug === 'die-creme-berlin' || project.slug === 'prism'
                            ? 'whitespace-nowrap font-editorial font-light leading-tight transition-colors duration-700'
                            : 'font-editorial font-light leading-tight transition-colors duration-700'
                        }
                        style={{
                          fontSize:
                            project.slug === 'die-creme-berlin'
                              ? 'clamp(1.6rem, 2.9vw, 2.9rem)'
                              : project.slug === 'prism'
                                ? 'clamp(1.55rem, 2.8vw, 2.85rem)'
                                : 'clamp(1.65rem, 3vw, 3rem)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {displayProject.title}
                      </h3>
                      {project.slug === 'prism' || project.slug === 'die-creme-berlin' || project.slug === 'vertex' ? null : (
                        <p className="font-mono-label text-[9px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
                          {`${project.category} — ${project.year}`}
                        </p>
                      )}
                    </div>

                    <p
                      id={`project-summary-${project.id}`}
                      className="max-w-xl text-sm font-light leading-relaxed md:text-base"
                      style={{ color: isActive ? 'var(--text-secondary)' : 'rgba(184, 184, 184, 0.82)' }}
                    >
                      {project.slug === 'die-creme-berlin'
                        ? "A Berlin café website - original brand, full build, zero templates. The kind of site most restaurants don't know they need."
                        : displayProject.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {(project.slug === 'die-creme-berlin'
                        ? ['WEB DESIGN', 'NEXT.JS', 'UI DESIGN', 'PRO BONO']
                        : displayProject.tags
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-label text-[9px] uppercase tracking-[0.15em] px-2 py-1"
                          style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ProjectActions
                    liveUrl={project.liveUrl}
                    caseStudyHref={`/work/${project.slug}`}
                    showLiveSite={project.slug !== 'vertex'}
                    caseStudyLabel={project.slug === 'vertex' ? 'VIEW ARCHIVE ↗' : undefined}
                    className="md:self-center md:justify-self-end"
                  />
                </article>
              </FadeIn>
            )
          })}
          <div className="h-px" style={{ background: 'var(--border-subtle)' }} />
        </div>

        {activeProject ? (
          <FadeIn className="hidden lg:block lg:sticky lg:top-28">
            <div className="glass overflow-hidden rounded-[28px] p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <motion.div
                  key={activeProject.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                </motion.div>
              </div>

              <div className="space-y-5 px-1 pt-5">
                <div className="space-y-2">
                  {activeProject.slug === 'vertex' ? null : (
                    <p className="font-mono-label text-[9px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
                      {activeDisplayProject.category}
                    </p>
                  )}
                  <h3 className="font-editorial text-[2rem] font-light leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {activeDisplayProject.title}
                  </h3>
                </div>

                <p className="text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-secondary)' }}>
                  {activeDisplayProject.projectNotes}
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Focus', value: activeProject.focus },
                    { label: 'Scope', value: activeProject.scope },
                    { label: 'Result', value: activeProject.result },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-[18px] p-3" style={{ border: '1px solid var(--border-subtle)' }}>
                      <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ) : null}
      </div>
    </section>
  )
}

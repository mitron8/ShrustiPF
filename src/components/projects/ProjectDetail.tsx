'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BackToHomeLink from '@/components/layout/BackToHomeLink'
import FadeIn from '@/components/motion/FadeIn'
import BlurReveal from '@/components/motion/BlurReveal'
import ProjectActions from '@/components/projects/ProjectActions'
import type { Project } from '@/data/projects'

interface ProjectDetailProps {
  project: Project
}

function DetailCard({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="glass rounded-[24px] p-5 md:p-6">
      <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-editorial text-[1.5rem] font-light leading-tight" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <p className="mt-4 text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-secondary)' }}>
        {body}
      </p>
    </div>
  )
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const showBackToWork = project.showBackToWork ?? true
  const showLiveSite = project.showLiveSite ?? true
  const showTopActions = showBackToWork || showLiveSite
  const showProjectMeta = Boolean(project.category || project.year)
  const showProjectSidebar = project.slug !== 'vertex'

  return (
    <article className="min-h-screen px-8 pb-24 pt-32 md:px-16">
      <FadeIn>
        <div className="mb-10 md:mb-14">
          <BackToHomeLink />
        </div>
      </FadeIn>

      <div className={showTopActions ? 'mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-center md:justify-between' : 'h-0 overflow-hidden'}>
        {showBackToWork ? (
          <Link
            href="/work"
            className="action-link inline-block tracking-[0.2em] transition-colors duration-500"
          >
            ← Back to work
          </Link>
        ) : null}

        {showLiveSite ? <ProjectActions liveUrl={project.liveUrl} showCaseStudy={false} /> : null}
      </div>

      <div className={showProjectSidebar ? 'grid gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)] lg:items-start' : ''}>
        <div className={showProjectSidebar ? 'max-w-4xl' : 'max-w-5xl'}>
          {showProjectMeta ? (
            <FadeIn>
              <p className="mb-4 font-mono-label text-[9px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                {project.category}
                {project.category && project.year ? ' · ' : ''}
                {project.year}
              </p>
            </FadeIn>
          ) : null}

          <BlurReveal delay={0.08}>
            <h1
              className="mb-8 font-editorial font-light leading-[0.96] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'var(--text-primary)' }}
            >
              {project.title}
            </h1>
          </BlurReveal>

          <FadeIn delay={0.14}>
            <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.shortDescription}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-muted)' }}>
              {project.longDescription}
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-[9px] uppercase tracking-[0.15em] px-2 py-1"
                  style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="mt-12 overflow-hidden rounded-[24px]">
              <div className="relative aspect-[4/3]">
                <motion.div
                  key={project.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <DetailCard eyebrow="PROJECT OVERVIEW" title="Overview" body={project.page.overview} />
            <DetailCard eyebrow="THE CHALLENGE" title="Challenge" body={project.page.challenge} />
            <DetailCard eyebrow="STRATEGY" title="Strategy" body={project.page.strategy} />
            <DetailCard eyebrow="PROCESS" title="Process" body={project.page.process} />
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="glass rounded-[24px] p-5 md:p-6">
              <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                TYPOGRAPHY
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.page.typography.map((item) => (
                  <span
                    key={item}
                    className="font-mono-label text-[9px] uppercase tracking-[0.15em] px-2 py-1"
                    style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-[24px] p-5 md:p-6">
              <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                COLORS
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.page.palette.map((swatch) => (
                  <div key={swatch.name} className="rounded-[18px] p-3" style={{ border: '1px solid var(--border-subtle)' }}>
                    <div className="h-24 rounded-[14px]" style={{ background: swatch.value }} />
                    <p className="mt-3 font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                      {swatch.name}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                      {swatch.value}
                    </p>
                    <p className="mt-2 text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {swatch.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <FadeIn>
              <p className="mb-5 font-mono-label text-[9px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                RESPONSIVE SHOWCASES
              </p>
            </FadeIn>
            <div className="grid gap-4 md:grid-cols-2">
              {project.page.showcases.map((item, index) => (
                <FadeIn key={item.caption} delay={index * 0.08}>
                  <figure className="overflow-hidden rounded-[24px] glass p-3">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.03 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 34vw" />
                      </motion.div>
                    </div>
                    <figcaption className="px-1 pt-4 font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                      {item.caption}
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)]">
            <div className="glass rounded-[24px] p-5 md:p-6">
              <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                RESULTS
              </p>
              <div className="mt-4 space-y-3">
                {project.page.outcomes.map((item) => (
                  <div key={item} className="rounded-[18px] px-4 py-3" style={{ border: '1px solid var(--border-subtle)' }}>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[24px] p-5 md:p-6">
              <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                GALLERY / MOCKUPS
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {project.page.gallery.map((item, index) => (
                  <FadeIn key={item.caption} delay={index * 0.06}>
                    <figure className="overflow-hidden rounded-[18px]">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 1.03 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 24vw" />
                        </motion.div>
                      </div>
                      <figcaption className="px-1 pt-3 font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                        {item.caption}
                      </figcaption>
                    </figure>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          <FadeIn delay={0.18}>
            <div
              className={showLiveSite ? 'mt-14 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between' : 'h-0 overflow-hidden'}
              style={showLiveSite ? { borderColor: 'var(--border-subtle)' } : undefined}
            >
              {showLiveSite ? (
                <>
                  <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                    LIVE WEBSITE
                  </p>
                  <ProjectActions liveUrl={project.liveUrl} showCaseStudy={false} />
                </>
              ) : null}
            </div>
          </FadeIn>
        </div>

        {showProjectSidebar ? (
          <aside className="lg:sticky lg:top-28">
            <div className="glass rounded-[28px] p-6 md:p-8">
              <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                PROJECT NOTES
              </p>
              <p className="mt-5 text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-secondary)' }}>
                {project.projectNotes}
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { label: 'FOCUS', value: project.focus },
                  { label: 'SCOPE', value: project.scope },
                  { label: 'RESULT', value: project.result },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-[18px] px-4 py-3" style={{ border: '1px solid var(--border-subtle)' }}>
                    <p className="font-mono-label text-[8px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                  DELIVERABLES
                </p>
                <ul className="mt-4 grid gap-3">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-[18px] px-4 py-3 text-sm font-light leading-relaxed"
                      style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </article>
  )
}

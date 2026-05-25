'use client'

import BlurReveal from '@/components/motion/BlurReveal'
import FadeIn from '@/components/motion/FadeIn'
import { capabilities, capabilitiesSection } from '@/data/capabilities'

export default function Services() {
  return (
    <section id="capabilities" className="px-8 py-32 md:px-16 md:py-40" aria-labelledby="capabilities-title">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <FadeIn delay={0}>
            <p className="mb-6 font-mono-label text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--text-muted)' }}>
              {capabilitiesSection.label}
            </p>
          </FadeIn>

          <BlurReveal delay={0.08}>
            <h2
              id="capabilities-title"
              className="font-editorial font-light leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
            >
              {capabilitiesSection.title}
            </h2>
          </BlurReveal>

          <FadeIn delay={0.14}>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-secondary)' }}>
              {capabilitiesSection.intro}
            </p>
          </FadeIn>
        </div>

        <div className="space-y-0">
          {capabilities.map((service, i) => (
            <BlurReveal key={service.index} delay={i * 0.06}>
              <div
                className="group grid gap-5 py-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8 md:py-10"
                style={{ borderTop: '1px solid var(--border-subtle)' }}
              >
                <span className="mt-1 font-mono-label text-[10px] tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                  {service.index}
                </span>

                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.48fr)] lg:items-start">
                  <div className="space-y-3">
                    <h3
                      className="font-editorial font-light leading-tight transition-colors duration-700"
                      style={{ fontSize: 'clamp(1.7rem, 3.2vw, 3rem)', color: 'var(--text-primary)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="max-w-xl text-sm font-light leading-relaxed md:text-base"
                      style={{ color: 'rgba(184, 184, 184, 0.9)' }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {service.tags.map((tag) => (
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
              </div>
            </BlurReveal>
          ))}
          <div className="h-px" style={{ background: 'var(--border-subtle)' }} />
        </div>
      </div>
    </section>
  )
}

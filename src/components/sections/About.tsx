'use client'

import BlurReveal from '@/components/motion/BlurReveal'
import FadeIn from '@/components/motion/FadeIn'
import BackToHomeLink from '@/components/layout/BackToHomeLink'
import { aboutContent } from '@/data/site'

interface AboutProps {
  showBackHome?: boolean
}

export default function About({ showBackHome = false }: AboutProps) {
  return (
    <section className="px-8 py-32 md:px-16 md:py-40" aria-labelledby="about-title">
      {showBackHome ? (
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <BackToHomeLink />
          </div>
        </FadeIn>
      ) : null}

      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <div>
          <FadeIn>
            <p className="mb-6 font-mono-label text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--text-muted)' }}>
              {aboutContent.eyebrow}
            </p>
          </FadeIn>

          <BlurReveal delay={0.1}>
            <h1
              id="about-title"
              className="font-editorial font-light leading-[0.98] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.4rem)', color: 'var(--text-primary)' }}
            >
              {aboutContent.title}
            </h1>
          </BlurReveal>
        </div>

        <div className="space-y-10">
          <BlurReveal delay={0.18}>
            <div className="space-y-6 pt-1">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="font-light leading-relaxed"
                  style={{ color: index === 0 ? 'var(--text-secondary)' : 'var(--text-muted)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </BlurReveal>

          <FadeIn delay={0.26}>
            <div className="glass rounded-[28px] p-6 md:p-8">
              <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                WHERE I AM MOST USEFUL
              </p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {aboutContent.focusAreas.map((item) => (
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
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

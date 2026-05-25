'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BlurReveal from '@/components/motion/BlurReveal'
import FadeIn from '@/components/motion/FadeIn'

const atelierGalleryImages = [
  { src: '/archive_a/1.png', alt: 'Atelier Elan campaign story frame one', width: 2048, height: 2048, type: 'square', column: 0 },
  { src: '/archive_a/2.png', alt: 'Atelier Elan launch visual with editorial fashion styling', width: 2048, height: 2048, type: 'square', column: 1 },
  { src: '/archive_a/3.png', alt: 'Atelier Elan digital asset composition for boutique campaign', width: 2048, height: 2048, type: 'square', column: 2 },
  { src: '/archive_a/4.png', alt: 'Atelier Elan mood-led social media post design', width: 2048, height: 2048, type: 'square', column: 0 },
  { src: '/archive_a/6.png', alt: 'Atelier Elan brand storytelling layout for slow luxury fashion', width: 928, height: 1152, type: 'portrait', column: 1 },
] as const

function GalleryCard({
  src,
  alt,
  width,
  height,
  type,
  delay,
  priority = false,
}: (typeof atelierGalleryImages)[number] & { delay: number; priority?: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="mb-8 break-inside-avoid"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduceMotion ? 0.35 : 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.figure
        className="group overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0b0b0b]"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          whileHover={reduceMotion ? undefined : { scale: 1.015 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015] ${
              type === 'portrait' ? 'bg-[rgba(255,255,255,0.01)]' : ''
            }`.trim()}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
      </motion.figure>
    </motion.div>
  )
}

export default function AtelierElanArchivePage() {
  return (
    <article className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:pt-32 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 md:gap-16">
        <FadeIn>
          <div>
            <Link
              href="/work/vertex"
              className="action-link group inline-flex items-center gap-2 border-b border-current/20 pb-0.5 tracking-[0.18em] transition-all duration-500 hover:border-current/45 hover:opacity-100"
            >
              <span className="inline-block transition-transform duration-500 group-hover:-translate-x-0.5" aria-hidden="true">
                ←
              </span>
              <span>Back</span>
            </Link>
          </div>
        </FadeIn>

        <section className="max-w-[920px]">
          <FadeIn delay={0.04}>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>
              FASHION BOUTIQUE KIT
            </p>
          </FadeIn>

          <BlurReveal delay={0.08}>
            <h1
              className="mt-5 font-editorial font-light leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', color: 'var(--text-primary)' }}
            >
              Atelier Élan
            </h1>
          </BlurReveal>

          <FadeIn delay={0.14}>
            <p className="mt-6 max-w-[860px] text-lg font-light leading-relaxed md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              A social media kit for a French fashion boutique that refuses to look like everyone else in the feed. Editorial. Unhurried. Built to stop the scroll without trying to.
            </p>
          </FadeIn>
        </section>

        <FadeIn delay={0.18}>
          <p className="max-w-[860px] text-sm font-light leading-relaxed md:text-base" style={{ color: 'var(--text-muted)' }}>
            Campaign posts, launch visuals, brand mood pieces, and digital assets designed for a slow luxury fashion presence.
          </p>
        </FadeIn>

        <section className="mt-24">
          <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
            {atelierGalleryImages.map((image, index) => (
              <GalleryCard key={image.src} {...image} delay={0.06 + index * 0.06} priority={index === 0} />
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}

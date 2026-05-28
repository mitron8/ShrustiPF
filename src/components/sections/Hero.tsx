'use client'

import { motion, useReducedMotion } from 'framer-motion'
import SplitText from '@/components/typography/SplitText'
import SlowType from '@/components/typography/SlowType'
import Link from 'next/link'
import { heroContent } from '@/data/site'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-8 pb-20 pt-28 md:px-16 md:pb-24 md:pt-20 lg:pt-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute"
          style={{
            width: '58vw',
            height: '58vw',
            top: '-16%',
            right: '-12%',
            background: 'radial-gradient(circle, rgba(107,107,74,0.05) 0%, transparent 72%)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '44vw',
            height: '44vw',
            bottom: '6%',
            left: '-7%',
            background: 'radial-gradient(circle, rgba(154,154,154,0.04) 0%, transparent 74%)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[42rem] md:-translate-y-[28px] lg:-translate-y-[32px]">
          <motion.div
            className="mb-3 font-mono-label text-[12px] uppercase tracking-[0.25em] md:mb-4"
            style={{ color: 'rgba(244, 241, 234, 0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 2.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SlowType
              text={heroContent.eyebrow}
              delay={shouldReduceMotion ? 0 : 2800}
              speed={shouldReduceMotion ? 8 : 38}
            />
          </motion.div>

          <div className="mb-12 -translate-x-[11px] md:mb-14">
            <h1
              className="whitespace-nowrap font-editorial font-light leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)' }}
            >
              <SplitText
                text={heroContent.title}
                className="whitespace-nowrap"
                delay={shouldReduceMotion ? 0 : 0.2}
                stagger={0.06}
              />
            </h1>
          </div>

          <div>
            <motion.p
              className="text-lg font-light leading-relaxed md:text-xl"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0.12 : 1.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {heroContent.lead}
            </motion.p>
          </div>
        </div>
        <div
          className="flex flex-col items-start gap-4 md:items-end"
          style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal', color: '#ffffff' }}
        >
          <motion.p
            className="w-full max-w-[36rem] text-left font-mono-label text-[12px] uppercase tracking-[0.2em] text-white lg:whitespace-nowrap md:text-right"
            style={{ color: '#ffffff', opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0.2 : 1.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Less Noise. More Presence. Better Systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0.24 : 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={heroContent.cta.href}
              className="action-link border-b pb-0.5 tracking-[0.2em] text-white transition-all duration-500"
              style={{ opacity: 1, filter: 'none', mixBlendMode: 'normal', borderColor: 'var(--text-muted)' }}
            >
              {heroContent.cta.label} ↓
            </Link>
          </motion.div>
          <motion.p
            className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-white"
            style={{ color: '#ffffff', opacity: 1, filter: 'none', mixBlendMode: 'normal' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0.28 : 2.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroContent.note}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-8 right-8 h-px md:left-16 md:right-16"
        style={{ background: 'var(--border-subtle)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: shouldReduceMotion ? 0.32 : 2.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  )
}

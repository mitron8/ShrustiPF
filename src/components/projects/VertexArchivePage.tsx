'use client'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import {
  useMemo,
  useState,
} from 'react'

import BackToHomeLink from '@/components/layout/BackToHomeLink'
import BlurReveal from '@/components/motion/BlurReveal'
import FadeIn from '@/components/motion/FadeIn'

import type { Project } from '@/data/projects'
import { templateCategories } from '@/data/templateCategories'

interface Props {
  project: Project
}

/* ================= VARIANTS ================= */

function getArchiveCardVariant(index: number) {
  const variants = [
    'featured',
    'compact',
    'medium',
    'medium',
    'tall',
    'compact',
  ] as const

  return variants[index % variants.length]
}

/* ================= FILTER BAR ================= */

function LuxuryFilterBar({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: string[]
  activeCategory: string
  setActiveCategory: (
    category: string
  ) => void
}) {
  return (
    <div className="relative flex flex-wrap gap-3">
      {categories.map((category, index) => {
        const active =
          activeCategory === category

        return (
          <motion.button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group relative overflow-hidden rounded-full border px-5 py-2"
            style={{
              borderColor: active
                ? 'rgba(244,241,234,0.18)'
                : 'var(--border-subtle)',

              background: active
                ? 'rgba(244,241,234,0.08)'
                : 'rgba(255,255,255,0.02)',

              backdropFilter: 'blur(20px)',
            }}
          >
            {/* glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              transition={{
                duration: 0.6,
              }}
              style={{
                background:
                  'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)',
              }}
            />

            <span
              className="relative z-10 font-mono-label text-[10px] uppercase tracking-[0.22em]"
              style={{
                color: active
                  ? 'var(--text-primary)'
                  : 'var(--text-muted)',
              }}
            >
              {category}
            </span>

            {active && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 26,
                }}
                style={{
                  border:
                    '1px solid rgba(255,255,255,0.08)',
                }}
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}

/* ================= CARD ================= */

function TemplateArchiveCard({
  slug,
  category,
  title,
  description,
  image,
  href,
  delay,
  variant,
}: Omit<
  (typeof templateCategories)[number],
  'aspect' | 'offset'
> & {
  delay: number
  variant: ReturnType<
    typeof getArchiveCardVariant
  >
}) {
  const reduceMotion = useReducedMotion()

  const isAtelierCard =
    slug === 'fashion-boutiques' ||
    title === 'Atelier Élan'

  const cardClassName = {
    featured:
      'min-h-[29rem] lg:row-span-2 lg:min-h-[40rem]',
    compact:
      'min-h-[23rem] lg:min-h-[22rem]',
    medium:
      'min-h-[25rem] lg:min-h-[29rem]',
    tall:
      'min-h-[28rem] lg:min-h-[35rem]',
  }[variant]

  const imageClassName = {
    featured: 'h-[58%]',
    compact: 'h-[54%]',
    medium: 'h-[60%]',
    tall: 'h-[62%]',
  }[variant]

  return (
    <motion.article
      layout
      className={`group relative flex h-full flex-col overflow-hidden rounded-[34px] border p-4 md:p-5 ${
        isAtelierCard
          ? 'lg:max-w-[580px] lg:p-6'
          : cardClassName
      }`.trim()}
      style={{
        borderColor: 'var(--border-subtle)',
        background:
          'rgba(255,255,255,0.015)',
        backdropFilter: 'blur(24px)',
      }}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 50,
              scale: 0.96,
              filter: 'blur(18px)',
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      exit={{
        opacity: 0,
        y: 20,
        scale: 0.96,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
            }
      }
    >
      {/* glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        transition={{
          duration: 0.8,
        }}
        style={{
          background:
            'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.06) 50%, transparent 80%)',
        }}
      />

      <Link
        href={href}
        className="relative z-10 flex h-full flex-col"
      >
        {/* IMAGE */}
        <div
          className={`relative overflow-hidden rounded-[26px] ${
            isAtelierCard
              ? 'aspect-[928/1152]'
              : imageClassName
          }`.trim()}
        >
          <motion.div
            className="absolute inset-0"
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.08,
                  }
            }
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 46vw"
            />
          </motion.div>

          {/* overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(8,8,8,0.04) 0%, rgba(8,8,8,0.12) 35%, rgba(8,8,8,0.76) 100%)',
            }}
          />

          {/* cinematic glow */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 35%)',
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          className={`flex flex-1 flex-col px-1 pb-1 ${
            isAtelierCard
              ? 'pt-6 md:pt-7'
              : 'pt-5 md:px-2 md:pt-6'
          }`.trim()}
        >
          <p
            className="font-mono-label text-[10px] uppercase tracking-[0.22em]"
            style={{
              color: 'var(--text-muted)',
            }}
          >
            {category}
          </p>

          <h3
            className="mt-3 max-w-[18rem] font-editorial text-[clamp(1.6rem,3vw,2.3rem)] font-light leading-[0.95] tracking-[-0.04em]"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </h3>

          <p
            className="mt-3 max-w-[26rem] text-sm font-light leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            {description}
          </p>

          <motion.span
            className="action-link mt-auto inline-flex items-center pt-6 tracking-[0.18em]"
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            View Archive ↗
          </motion.span>
        </div>
      </Link>
    </motion.article>
  )
}

/* ================= PAGE ================= */

export default function VertexArchivePage({
  project,
}: Props) {
  const [activeCategory, setActiveCategory] =
    useState('All')

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        templateCategories.map(
          (item) => item.category
        )
      )
    )

    return ['All', ...unique]
  }, [])

  const filteredTemplates =
    activeCategory === 'All'
      ? templateCategories
      : templateCategories.filter(
          (item) =>
            item.category === activeCategory
        )

  return (
    <article className="relative min-h-screen overflow-hidden px-6 pb-28 pt-28 md:px-10 lg:px-16 lg:pt-32">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute -left-24 top-0 h-[40vw] w-[40vw] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(244,241,234,0.08), transparent 70%)',
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute right-0 top-[30%] h-[32vw] w-[32vw] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col gap-16 md:gap-20">
        {/* BACK */}
        <FadeIn>
          <div>
            <BackToHomeLink />
          </div>
        </FadeIn>

        {/* HERO */}
        <section className="relative flex min-h-[58vh] items-center">
          <div className="max-w-[920px]">
            <BlurReveal delay={0.04}>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 80,
                  filter: 'blur(18px)',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-editorial font-light leading-[0.86] tracking-[-0.06em]"
                style={{
                  fontSize:
                    'clamp(3rem, 7vw, 6.6rem)',
                  color: 'var(--text-primary)',
                }}
              >
                {project.title}
              </motion.h1>
            </BlurReveal>

            <FadeIn delay={0.12}>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                }}
                className="mt-8 max-w-[860px] text-lg font-light leading-relaxed md:text-[1.28rem]"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                {project.shortDescription}
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p
                className="mt-6 max-w-[780px] text-sm font-light leading-relaxed md:text-base"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                {project.longDescription}
              </p>
            </FadeIn>

            {/* TAGS */}
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="rounded-full px-3 py-1.5 font-mono-label text-[9px] uppercase tracking-[0.16em]"
                    style={{
                      color: 'var(--text-muted)',
                      border:
                        '1px solid var(--border-subtle)',
                      background:
                        'rgba(255,255,255,0.025)',
                      backdropFilter:
                        'blur(20px)',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FILTER BAR */}
        <motion.section
          layout
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="sticky top-6 z-40"
        >
          <div
            className="inline-flex rounded-full border p-2"
            style={{
              borderColor:
                'rgba(255,255,255,0.06)',
              background:
                'rgba(10,10,10,0.45)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <LuxuryFilterBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={
                setActiveCategory
              }
            />
          </div>
        </motion.section>

        {/* GRID */}
        <motion.section
          layout
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:auto-rows-[minmax(19rem,auto)] lg:gap-8"
          >
            {filteredTemplates.map(
              (item, index) => (
                <motion.div
                  layout
                  key={item.slug}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={
                    item.slug ===
                      'fashion-boutiques'
                      ? 'lg:row-span-2'
                      : getArchiveCardVariant(
                            index
                          ) ===
                          'featured'
                        ? 'lg:row-span-2'
                        : ''
                  }
                >
                  <TemplateArchiveCard
                    slug={item.slug}
                    category={item.category}
                    title={item.title}
                    description={
                      item.description
                    }
                    image={item.image}
                    href={item.href}
                    delay={
                      0.08 + index * 0.04
                    }
                    variant={getArchiveCardVariant(
                      index
                    )}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.section>
      </div>
    </article>
  )
}
'use client'

import { motion } from 'framer-motion'

interface Props {
  categories: string[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function LuxuryFilterBar({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className="relative flex flex-wrap gap-3">
      {categories.map((category, index) => {
        const active = activeCategory === category

        return (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
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
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { menuLinks } from '@/data/site'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-8 md:py-6"
        style={{
          background: isScrolled || isOpen ? 'rgba(5, 5, 5, 0.62)' : 'transparent',
          backdropFilter: isScrolled || isOpen ? 'blur(16px)' : 'none',
          borderBottom: isScrolled || isOpen ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/"
          className="transition-opacity duration-500"
          aria-label="Srushti Lohiya home"
        >
          <Image
            src="/white.png"
            alt="Srushti Lohiya Logo"
            width={39}
            height={39}
            priority
            className="object-contain h-[35px] w-[35px] md:h-[39px] md:w-[39px]"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-mono-label text-[12px] tracking-[0.25em] uppercase transition-colors duration-500"
          style={{ color: 'rgba(244, 241, 234, 0.82)' }}
          aria-label="Toggle navigation"
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="site-navigation"
            className="fixed inset-0 z-40 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(18px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: 'rgba(0, 0, 0, 0.72)' }}
          >
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div
                className="absolute left-[-10%] top-[-12%] h-[42vw] w-[42vw] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(107, 107, 74, 0.08) 0%, transparent 72%)' }}
              />
              <div
                className="absolute bottom-[-18%] right-[-8%] h-[34vw] w-[34vw] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(154, 154, 154, 0.05) 0%, transparent 74%)' }}
              />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-5 md:px-8 md:py-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="transition-opacity duration-500"
                  aria-label="Srushti Lohiya home"
                >
                  <Image
                    src="/white.png"
                    alt="Srushti Lohiya Logo"
                    width={39}
                    height={39}
                    priority
                    className="object-contain h-[35px] w-[35px] md:h-[39px] md:w-[39px]"
                  />
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="font-mono-label text-[12px] tracking-[0.25em] uppercase transition-colors duration-500"
                  style={{ color: 'rgba(244, 241, 234, 0.82)' }}
                  aria-label="Close navigation"
                >
                  CLOSE
                </button>
              </div>

              <div className="grid flex-1 items-center gap-16 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.42fr)] lg:gap-20">
                <nav aria-label="Primary" className="w-full">
                  <ul className="flex flex-col items-start gap-5 sm:gap-6 md:gap-7">
                    {menuLinks.map((link, i) => {
                      const isActive = pathname === link.href

                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                          transition={{ delay: i * 0.12, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive ? 'page' : undefined}
                            className="group inline-flex flex-col items-start"
                          >
                            <span
                              className={`font-editorial font-light leading-[0.98] tracking-[-0.02em] transition-all duration-700 group-hover:translate-x-[6px] group-hover:opacity-100 ${
                                isActive ? 'opacity-100' : 'opacity-[0.58]'
                              }`}
                              style={{
                                fontSize: 'clamp(28px, 6vw, 72px)',
                                color: isActive ? 'var(--text-primary)' : 'rgba(244, 241, 234, 0.56)',
                                letterSpacing: isActive ? '-0.02em' : '-0.015em',
                              }}
                            >
                              {link.label}
                            </span>
                            <span
                              className="mt-2 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                              style={{
                                width: 'clamp(120px, 18vw, 220px)',
                                background: 'rgba(244, 241, 234, 0.32)',
                              }}
                            />
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>

                <div className="flex h-full flex-col justify-between gap-10 pt-2 lg:items-end lg:text-right" />
              </div>

              <div className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-4 md:flex-row md:items-end md:justify-between">
                <motion.span
                  className="max-w-md font-mono-label text-[12px] uppercase tracking-[0.22em] leading-relaxed text-white"
                  style={{ color: '#ffffff' }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ delay: 0.32, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  I BUILD · I RANK · I AUTOMATE
                </motion.span>
                <motion.span
                  className="font-mono-label text-[12px] uppercase tracking-[0.22em] text-white"
                  style={{ color: '#ffffff' }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ delay: 0.38, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  BASED IN INDIA · WORKING GLOBALLY
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

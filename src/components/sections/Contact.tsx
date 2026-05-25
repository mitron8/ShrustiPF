'use client'

import { useState } from 'react'
import BlurReveal from '@/components/motion/BlurReveal'
import FadeIn from '@/components/motion/FadeIn'
import BackToHomeLink from '@/components/layout/BackToHomeLink'
import { contactContent, site } from '@/data/site'

const initialForm = { name: '', email: '', projectType: '', message: '' }

interface ContactProps {
  showBackHome?: boolean
}

export default function Contact({ showBackHome = false }: ContactProps) {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        setError(body?.error ?? contactContent.failureMessage)
        return
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError(contactContent.failureMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen px-8 py-32 md:px-16 md:py-36" aria-labelledby="contact-title">
      {showBackHome ? (
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <BackToHomeLink />
          </div>
        </FadeIn>
      ) : null}

      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <FadeIn>
            <p className="mb-6 font-mono-label text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--text-muted)' }}>
              {contactContent.eyebrow}
            </p>
          </FadeIn>

          <BlurReveal delay={0.1}>
            <h1
              id="contact-title"
              className="font-editorial font-light leading-[0.96] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', color: 'var(--text-primary)' }}
            >
              {contactContent.title}
            </h1>
          </BlurReveal>

          <FadeIn delay={0.16}>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed md:text-lg" style={{ color: 'var(--text-secondary)' }}>
              {contactContent.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <a
              href="#contact-form"
              className="action-link mt-5 inline-block border-b pb-0.5 tracking-[0.2em] transition-all duration-500"
              style={{ borderColor: 'var(--text-muted)' }}
            >
              {contactContent.cta} ↓
            </a>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="glass mt-8 rounded-[28px] p-6 md:p-8">
              <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                {contactContent.availabilityLabel}
              </p>
              <ul className="mt-5 grid gap-3">
                {contactContent.availabilityItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-[18px] px-4 py-3 text-sm font-light leading-relaxed"
                    style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                {site.availability}
              </p>
            </div>
          </FadeIn>
        </div>

        {!submitted ? (
          <BlurReveal delay={0.18}>
            <form id="contact-form" onSubmit={handleSubmit} className="glass rounded-[32px] p-6 md:p-8 lg:p-10">
              <div className="space-y-8">
                {[
                  { name: 'name', label: contactContent.formLabels.name, type: 'text', autoComplete: 'name' },
                  { name: 'email', label: contactContent.formLabels.email, type: 'email', autoComplete: 'email' },
                  { name: 'projectType', label: contactContent.formLabels.projectType, type: 'text', autoComplete: 'off' },
                ].map((field) => (
                  <div key={field.name} className="relative pb-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block font-mono-label text-[9px] uppercase tracking-[0.2em]"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.name !== 'projectType'}
                      autoComplete={field.autoComplete}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-transparent text-base font-light outline-none"
                      style={{ color: 'var(--text-primary)' }}
                      placeholder="—"
                    />
                  </div>
                ))}

                <div className="relative pb-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono-label text-[9px] uppercase tracking-[0.2em]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {contactContent.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none bg-transparent text-base font-light outline-none"
                    style={{ color: 'var(--text-primary)' }}
                    placeholder="Scope, timing, and what currently feels unresolved."
                  />
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="action-link w-fit border-b pb-0.5 tracking-[0.2em] disabled:opacity-50"
                    style={{ borderColor: 'var(--text-muted)' }}
                  >
                    {isSubmitting ? 'Sending…' : contactContent.formLabels.submit}
                  </button>

                  <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                    Clear briefs create stronger work.
                  </p>
                </div>

                <div aria-live="polite">
                  {error ? (
                    <p role="alert" className="text-sm font-light" style={{ color: '#f0b9b9' }}>
                      {error}
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </BlurReveal>
        ) : (
          <BlurReveal>
            <div className="glass rounded-[32px] p-8 md:p-10">
              <p className="font-mono-label text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
                Message received
              </p>
              <p
                className="mt-5 font-editorial font-light italic leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 4.2rem)', color: 'var(--text-secondary)' }}
              >
                {contactContent.successMessage}
              </p>
            </div>
          </BlurReveal>
        )}
      </div>
    </section>
  )
}

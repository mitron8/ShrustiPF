import FadeIn from '@/components/motion/FadeIn'
import { footerLinks, site } from '@/data/site'

export default function Footer() {
  return (
    <footer
      className="px-6 py-10 md:px-12 lg:px-16"
      style={{
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
        {/* Left Content */}
        <div className="flex h-full flex-col justify-between gap-10">
          <FadeIn>
            <div className="space-y-5">
              <p
                className="font-mono-label text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                © 2026 {site.name}
              </p>

              <h3
                className="max-w-xl font-mono-label text-[2.4rem] font-light leading-[0.95] tracking-[-0.04em] md:text-[2rem]"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                Let&apos;s build something meaningful together.
              </h3>

              <p
                className="max-w-md text-sm leading-relaxed md:text-[15px]"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                {site.description}
              </p>
            </div>
          </FadeIn>

          {/* Footer Links */}
          <FadeIn delay={0.1}>
            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-5 md:gap-7"
            >
              {footerLinks.map((link) => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  className="action-link font-mono-label text-[10px] uppercase tracking-[0.18em] transition-all duration-500 hover:opacity-70"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>

        {/* Minimal Contact Form */}
        <FadeIn delay={0.15}>
          <div
            className="relative overflow-hidden  border p-5 md:p-5"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background:
                'linear-gradient(to bottom right, rgba(255,255,255,0.025), rgba(255,255,255,0.012))',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Soft Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.08), transparent 72%)',
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Heading */}
              <div className="mb-6">
                <p
                  className="mb-3 font-mono-label text-[9px] uppercase tracking-[0.24em]"
                  style={{
                    color: 'var(--text-muted)',
                  }}
                >
                  CONTACT
                </p>

                <h4
                  className="font-editorial text-[2rem] font-light leading-[0.95] tracking-[-0.04em]"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                >
                  Start a project
                </h4>
              </div>

              {/* Form */}
              <form
                className="space-y-4"
                action="/api/contact"
                method="POST"
              >
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono-label text-[9px] uppercase tracking-[0.18em]"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="h-11 w-full rounded-[18px] border px-4 text-[13px] outline-none transition-all duration-300 placeholder:opacity-40 focus:scale-[1.01]"
                    style={{
                      borderColor: 'rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.018)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono-label text-[9px] uppercase tracking-[0.18em]"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-[18px] border px-4 text-[13px] outline-none transition-all duration-300 placeholder:opacity-40 focus:scale-[1.01]"
                    style={{
                      borderColor: 'rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.018)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-mono-label text-[9px] uppercase tracking-[0.18em]"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-[18px] border px-4 py-3 text-[13px] outline-none transition-all duration-300 placeholder:opacity-40 focus:scale-[1.01]"
                    style={{
                      borderColor: 'rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.018)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-2 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-[18px] border font-mono-label text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:translate-y-[-1px]"
                  style={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Send Message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
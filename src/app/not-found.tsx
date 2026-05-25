import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-8 md:px-16"
      style={{ background: 'var(--bg-primary)' }}
    >
      <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase mb-8" style={{ color: 'var(--text-muted)' }}>
        404
      </p>
      <h1
        className="font-editorial font-light leading-tight mb-8"
        style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', color: 'var(--text-primary)' }}
      >
        Page not<br /><em>found.</em>
      </h1>
      <Link
        href="/"
        className="action-link border-b pb-0.5 tracking-[0.2em] transition-all duration-500 w-fit"
        style={{ borderColor: 'var(--text-muted)' }}
      >
        Return home →
      </Link>
    </section>
  )
}

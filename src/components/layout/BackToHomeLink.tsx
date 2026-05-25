import Link from 'next/link'

interface BackToHomeLinkProps {
  className?: string
}

export default function BackToHomeLink({ className = '' }: BackToHomeLinkProps) {
  return (
    <Link
      href="/"
      className={`action-link group inline-flex items-center gap-2 border-b border-current/20 pb-0.5 tracking-[0.18em] transition-all duration-500 hover:border-current/45 hover:opacity-100 ${className}`.trim()}
    >
      <span className="inline-block transition-transform duration-500 group-hover:-translate-x-0.5" aria-hidden="true">
        ←
      </span>
      <span>Back to Home</span>
    </Link>
  )
}

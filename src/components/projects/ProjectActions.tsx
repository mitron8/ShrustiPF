'use client'

import Link from 'next/link'

interface ProjectActionsProps {
  liveUrl: string
  caseStudyHref?: string
  showCaseStudy?: boolean
  showLiveSite?: boolean
  caseStudyLabel?: string
  className?: string
}

const actionClassName =
  'action-link inline-flex items-center pb-0.5 tracking-[0.18em] border-b border-current/20 transition-all duration-500 hover:border-current/45 hover:opacity-100'

export default function ProjectActions({
  liveUrl,
  caseStudyHref,
  showCaseStudy = true,
  showLiveSite = true,
  caseStudyLabel = 'CASE STUDY ↗',
  className = '',
}: ProjectActionsProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`.trim()}>
      {showLiveSite ? (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={actionClassName}>
          LIVE SITE ↗
        </a>
      ) : null}

      {showCaseStudy && caseStudyHref ? (
        <Link href={caseStudyHref} className={actionClassName}>
          {caseStudyLabel}
        </Link>
      ) : null}
    </div>
  )
}

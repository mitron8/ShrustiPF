import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/projects/ProjectDetail'
import DieCremeCaseStudy from '@/components/projects/DieCremeCaseStudy'
import VertexArchivePage from '@/components/projects/VertexArchivePage'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)
  if (!project) return {}
  if (project.slug === 'die-creme-berlin') {
    return {
      title: 'Die Creme, Berlin | Case Study | Srushti Lohiya',
      description:
        'A self-directed hospitality demo built to prove that café websites can feel premium, intentional, and conversion-aware without relying on templates.',
      alternates: {
        canonical: `/work/${project.slug}`,
      },
      openGraph: {
        title: 'Die Creme, Berlin | Case Study | Srushti Lohiya',
        description:
          'A self-directed hospitality demo built to prove that café websites can feel premium, intentional, and conversion-aware without relying on templates.',
        type: 'article',
        url: `/work/${project.slug}`,
      },
      twitter: {
        card: 'summary',
        title: 'Die Creme, Berlin | Case Study | Srushti Lohiya',
        description:
          'A self-directed hospitality demo built to prove that café websites can feel premium, intentional, and conversion-aware without relying on templates.',
      },
    } satisfies Metadata
  }
  return {
    title: `${project.title} | Srushti Lohiya`,
    description: project.shortDescription,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Srushti Lohiya`,
      description: project.shortDescription,
      type: 'article',
      url: `/work/${project.slug}`,
    },
    twitter: {
      card: 'summary',
      title: `${project.title} | Srushti Lohiya`,
      description: project.shortDescription,
    },
  } satisfies Metadata
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)
  if (!project) notFound()

  if (project.slug === 'die-creme-berlin') {
    return <DieCremeCaseStudy project={project} />
  }

  if (project.slug === 'vertex') {
    return <VertexArchivePage project={project} />
  }

  return <ProjectDetail project={project} />
}

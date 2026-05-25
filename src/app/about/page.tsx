import type { Metadata } from 'next'
import About from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About Srushti Lohiya | Full Stack Developer & Creative Technologist',
  description: 'Learn about Srushti Lohiya’s work across full stack development, automation, SEO architecture, premium frontend systems, and brand-sensitive digital experiences.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Srushti Lohiya | Full Stack Developer & Creative Technologist',
    description: 'Learn about Srushti Lohiya’s work across full stack development, automation, SEO architecture, premium frontend systems, and brand-sensitive digital experiences.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Srushti Lohiya | Full Stack Developer & Creative Technologist',
    description: 'Learn about Srushti Lohiya’s work across full stack development, automation, SEO architecture, premium frontend systems, and brand-sensitive digital experiences.',
  },
}

export default function AboutPage() {
  return <About showBackHome />
}

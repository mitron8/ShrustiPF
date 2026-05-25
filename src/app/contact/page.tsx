import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Srushti Lohiya | Website Development, SEO & Automation Projects',
  description: 'Start a conversation with Srushti Lohiya for premium website development, SEO-focused redesigns, automation workflows, backend systems, and brand-led digital experiences.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Srushti Lohiya | Website Development, SEO & Automation Projects',
    description: 'Start a conversation with Srushti Lohiya for premium website development, SEO-focused redesigns, automation workflows, backend systems, and brand-led digital experiences.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Srushti Lohiya | Website Development, SEO & Automation Projects',
    description: 'Start a conversation with Srushti Lohiya for premium website development, SEO-focused redesigns, automation workflows, backend systems, and brand-led digital experiences.',
  },
}

export default function ContactPage() {
  return <Contact showBackHome />
}

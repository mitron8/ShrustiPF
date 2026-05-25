import type { Metadata } from 'next'
import Work from '@/components/sections/Work'

export const metadata: Metadata = {
  title: 'Selected Work | Premium Websites, Automation Systems & SEO Projects',
  description: 'Selected work by Srushti Lohiya across premium website development, full stack systems, automation workflows, brand-led interfaces, and technical SEO refinement.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Selected Work | Premium Websites, Automation Systems & SEO Projects',
    description: 'Selected work by Srushti Lohiya across premium website development, full stack systems, automation workflows, brand-led interfaces, and technical SEO refinement.',
    url: '/work',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Selected Work | Premium Websites, Automation Systems & SEO Projects',
    description: 'Selected work by Srushti Lohiya across premium website development, full stack systems, automation workflows, brand-led interfaces, and technical SEO refinement.',
  },
}

export default function WorkPage() {
  return (
    <>
      <h1 className="sr-only">Selected Work</h1>
      <section className="pt-24 md:pt-28">
        <Work standalone showBackHome />
      </section>
    </>
  )
}

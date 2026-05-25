import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import CursorGlow from '@/components/effects/CursorGlow'
import ScrollProgress from '@/components/effects/ScrollProgress'
import { site } from '@/data/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://srushtilohiya.com'),
  title: 'Srushti Lohiya | Premium Website Developer, Full Stack Developer & Automation Engineer',
  description: 'Portfolio of Srushti Lohiya, a full stack developer and Python automation engineer building premium websites, SEO-focused digital systems, backend workflows, and brand-led web experiences.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'Srushti Lohiya',
    'Premium Website Developer India',
    'Full Stack Developer',
    'Python Automation Engineer',
    'Next.js Developer',
    'SEO Optimized Website Development',
    'Technical SEO Specialist',
    'Responsive Website Development',
    'Brand Focused Web Developer',
    'UI UX Developer',
  ],
  authors: [{ name: 'Srushti Lohiya' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Srushti Lohiya | Premium Website Developer, Full Stack Developer & Automation Engineer',
    description: 'Portfolio of Srushti Lohiya, a full stack developer and Python automation engineer building premium websites, SEO-focused digital systems, backend workflows, and brand-led web experiences.',
    url: '/',
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srushti Lohiya | Premium Website Developer, Full Stack Developer & Automation Engineer',
    description: 'Portfolio of Srushti Lohiya, a full stack developer and Python automation engineer building premium websites, SEO-focused digital systems, backend workflows, and brand-led web experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: [
      'Full Stack Developer',
      'Python Automation Engineer',
      'Creative Technologist',
      'SEO-focused Website Developer',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'SEO Optimization',
      'Automation',
      'Backend Development',
      'UI UX Design',
    ],
    url: 'https://srushtilohiya.com',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: 'https://srushtilohiya.com',
    description: site.description,
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${ibmMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:text-sm"
          style={{
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <SmoothScrollProvider>
          <ScrollProgress />
          <CursorGlow />
          <Navigation />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

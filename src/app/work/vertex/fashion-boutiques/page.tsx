import type { Metadata } from 'next'
import AtelierElanArchivePage from '@/components/projects/AtelierElanArchivePage'

export const metadata: Metadata = {
  title: 'Atelier Élan | Fashion Boutique Kit | Srushti Lohiya',
  description:
    'A premium editorial gallery for Atelier Élan, a French fashion boutique social media kit shaped for a slow luxury digital presence.',
  alternates: {
    canonical: '/work/vertex/fashion-boutiques',
  },
  openGraph: {
    title: 'Atelier Élan | Fashion Boutique Kit | Srushti Lohiya',
    description:
      'A premium editorial gallery for Atelier Élan, a French fashion boutique social media kit shaped for a slow luxury digital presence.',
    url: '/work/vertex/fashion-boutiques',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Atelier Élan | Fashion Boutique Kit | Srushti Lohiya',
    description:
      'A premium editorial gallery for Atelier Élan, a French fashion boutique social media kit shaped for a slow luxury digital presence.',
  },
}

export default function FashionBoutiquesPage() {
  return <AtelierElanArchivePage />
}

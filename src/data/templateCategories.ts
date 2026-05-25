export interface TemplateCategory {
  slug: string
  category: string
  title: string
  description: string
  image: string
  href: string
  aspect: 'portrait' | 'landscape'
  offset?: boolean
}

export const templateCategories: TemplateCategory[] = [
  {
    slug: 'fashion-boutiques',
    category: 'Fashion Boutique',
    title: 'Atelier Élan',
    description:
      'A social media kit for a French fashion boutique that refuses to look like everyone else in the feed. Editorial. Unhurried. Built to stop the scroll without trying to.',
    image: '/archive_a/5.png',
    href: '/work/vertex/fashion-boutiques',
    aspect: 'portrait',
  },
  {
    slug: 'wellness-brands',
    category: 'Wellness Brand',
    title: 'Serein Ritual Brand Library',
    description:
      'A calm editorial kit for wellness launches, founder storytelling, product education, and elevated digital brand consistency.',
    image: 'https://plus.unsplash.com/premium_photo-1661756453436-4f78b6380e0f?q=80&w=1200&auto=format&fit=crop',
    href: '/work/vertex/wellness-brands',
    aspect: 'portrait',
  },
  
]

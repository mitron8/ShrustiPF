import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: 'https://srushtilohiya.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://srushtilohiya.com/work', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://srushtilohiya.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://srushtilohiya.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://srushtilohiya.com/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...pages, ...projectPages]
}

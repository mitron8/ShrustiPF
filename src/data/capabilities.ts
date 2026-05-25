export interface Capability {
  index: string
  title: string
  description: string
  tags: string[]
}

export const capabilitiesSection = {
  label: 'CAPABILITIES',
  title: 'Technical depth with a more composed digital presence.',
  intro:
    'I work across interface, infrastructure, search foundations, and brand-sensitive experience design. The through-line is clarity, restraint, and systems that stay useful.',
}

export const capabilities: Capability[] = [
  {
    index: '01',
    title: 'Interfaces with intention.',
    description:
      'Premium websites, product surfaces, and responsive digital experiences designed to convert without feeling disposable.',
    tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'DESIGN SYSTEMS'],
  },
  {
    index: '02',
    title: 'Quiet systems. Strong outcomes.',
    description:
      'Automation workflows, backend systems, APIs, internal tools, and operational infrastructure that reduce friction and improve scalability.',
    tags: ['PYTHON', 'NODE.JS', 'POSTGRESQL', 'APIS'],
  },
  {
    index: '03',
    title: 'Built for visibility.',
    description:
      'Technical SEO, structured content architecture, performance optimization, and search-first foundations designed to improve discoverability organically.',
    tags: ['SEO', 'CORE WEB VITALS', 'SCHEMA', 'ANALYTICS'],
  },
  {
    index: '04',
    title: 'Presence that compounds.',
    description:
      'Brand-sensitive digital systems combining positioning, interface design, motion, and messaging into a more cohesive online presence.',
    tags: ['POSITIONING', 'UX DIRECTION', 'BRAND SYSTEMS', 'CONTENT STRATEGY'],
  },
]

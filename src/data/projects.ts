export interface ProjectMedia {
  src: string
  alt: string
  caption: string
}

export interface ProjectPaletteSwatch {
  name: string
  value: string
  note: string
}

export interface ProjectPageContent {
  overview: string
  challenge: string
  strategy: string
  process: string
  typography: string[]
  palette: ProjectPaletteSwatch[]
  showcases: ProjectMedia[]
  gallery: ProjectMedia[]
  outcomes: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  year: string
  shortDescription: string
  longDescription: string
  projectNotes: string
  focus: string
  scope: string
  result: string
  tags: string[]
  image: string
  imageAlt: string
  deliverables: string[]
  liveUrl: string
  showBackToWork?: boolean
  showLiveSite?: boolean
  page: ProjectPageContent
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'die-creme-berlin',
    title: 'Die Creme, Berlin',
    category: 'BRAND IDENTITY',
    year: '2025',
    shortDescription: 'Identity direction, launch narrative, and a landing experience for a premium wellness brand entering a crowded category.',
    longDescription:
      'A luxury wellness launch needed more than a logo. The work focused on creating a quieter but more distinctive visual system, then extending that system into launch pages and conversion points so the brand felt cohesive from first impression onward.',
    projectNotes: 'Designed to feel premium without competing in the category’s usual visual noise.',
    focus: 'Market distinction',
    scope: 'Identity + launch surface',
    result: 'Sharper first impression',
    tags: ['BRAND STRATEGY', 'IDENTITY', 'LAUNCH EXPERIENCE'],
    image: 'https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Minimal luxury product photography with soft light and neutral tones',
    deliverables: ['Visual system', 'Landing page direction', 'Messaging hierarchy'],
    liveUrl: 'https://die-creme-demo.vercel.app/',
    page: {
      overview:
        'Die Creme, Berlin is shaped as a café experience that feels editorial first and transactional second. The site combines an original brand direction with a full build so the first impression is calm, memorable, and usable.',
      challenge:
        'The challenge was to make a café website feel premium without falling into the usual hospitality template language or overdesigned menu-board aesthetics.',
      strategy:
        'The strategy centered on a tight hierarchy, restrained colors, and a clear booking path so the brand feels composed while still being practical for visitors on mobile.',
      process:
        'The process moved from visual identity and page sequencing into responsive builds, subtle motion, and a content structure that keeps the brand voice consistent across every section.',
      typography: ['Editorial serif headlines', 'Muted mono labels', 'Uppercase utility text'],
      palette: [
        { name: 'Ink', value: '#050505', note: 'Primary surface' },
        { name: 'Cream', value: '#F4F1EA', note: 'Text and contrast' },
        { name: 'Olive', value: '#6B6B4A', note: 'Quiet accent' },
      ],
      showcases: [
        {
          src: 'https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&w=2670&auto=format&fit=crop',
          alt: 'Premium café still life with soft shadow and natural texture',
          caption: 'Hero direction and first-screen tone',
        },
        {
          src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2670&auto=format&fit=crop',
          alt: 'Minimal café interior with warm light and timber seating',
          caption: 'Atmosphere and spatial pacing',
        },
      ],
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop',
          alt: 'Coffee service with small plate styling and premium plating',
          caption: 'Menu storytelling',
        },
        {
          src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2670&auto=format&fit=crop',
          alt: 'Café table with editorial styling and deep shadows',
          caption: 'Editorial detail surface',
        },
        {
          src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2670&auto=format&fit=crop',
          alt: 'Quiet café dining room with soft daylight and neutral palette',
          caption: 'Responsive ambiance',
        },
      ],
      outcomes: ['Clearer booking intent', 'Stronger brand recall', 'More distinct hospitality positioning'],
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'prism',
    title: 'FREA Bakery, Berlin',
    category: 'WEB DESIGN',
    year: '2025',
    shortDescription: 'A Berlin bakery demo - warm brand, full build, zero templates. Built to make you hungry before you read a single word.',
    longDescription:
      'The experience was shaped around calm pacing, tactile product storytelling, and a refined booking path. I focused on balancing editorial composition with clear utility so the bakery feels premium while still guiding visitors toward reservations and key offerings.',
    projectNotes: 'Built to make browsing feel editorial while keeping reservations and product discovery effortless.',
    focus: 'Editorial storytelling',
    scope: 'Frontend experience + booking flow',
    result: 'Stronger product focus and clearer reservation intent',
    tags: ['WEB DESIGN', 'NEXT.JS', 'UI DESIGN', 'PRO BONO'],
    image: 'https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg',
    imageAlt: 'Architectural interior with sharp lines and cool reflective surfaces',
    deliverables: ['Editorial landing page', 'Reservation flow', 'Product story sections'],
    liveUrl: 'https://frea-demo.vercel.app/',
    page: {
      overview:
        'FREA Bakery, Berlin is a premium bakery concept shaped around editorial pacing, tactile product storytelling, and a reservation flow that feels calm rather than transactional.',
      challenge:
        'The challenge was to present a bakery experience with enough restraint to feel premium while still making products and reservations immediately clear.',
      strategy:
        'The strategy paired spacious composition, warm contrast, and guided sequencing so the menu, story, and booking path feel aligned.',
      process:
        'The process moved through visual hierarchy, section pacing, component systems, and responsive refinement to keep the experience soft but efficient.',
      typography: ['Editorial headlines', 'Functional utility labels', 'Monospace metadata'],
      palette: [
        { name: 'Espresso', value: '#17120f', note: 'Primary shell' },
        { name: 'Cocoa', value: '#2a2018', note: 'Secondary surface' },
        { name: 'Stone', value: '#90806d', note: 'Muted contrast' },
        { name: 'Oat', value: '#d4c4ad', note: 'Warm neutral' },
        { name: 'Cream', value: '#f5eadc', note: 'Light contrast' },
      ],
      showcases: [
        {
          src: 'https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg',
          alt: 'Architectural interior with warm reflective geometry',
          caption: 'Hero framing',
        },
        {
          src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2670&auto=format&fit=crop',
          alt: 'Product workspace with warm screens and structured shadows',
          caption: 'Product storytelling',
        },
      ],
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop',
          alt: 'Warm bakery interior with precise lighting',
          caption: 'Bakery interior',
        },
        {
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop',
          alt: 'Refined product detail with clean interface surfaces',
          caption: 'Product detail',
        },
        {
          src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop',
          alt: 'Mobile reservation flow with ordered lines and light',
          caption: 'Reservation flow',
        },
      ],
      outcomes: ['Stronger product focus', 'Clearer reservation intent', 'A more premium brand feel'],
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'vertex',
    title: 'Editorial Brand Templates',
    category: '',
    year: '',
    shortDescription: 'This is what your brand could look like when the visuals actually do the work.',
    longDescription:
      'Every kit here is built from scratch for a concept brand to show you exactly what I can create for yours.',
    projectNotes: 'Search visibility improved without flattening the brand voice.',
    focus: 'Organic visibility',
    scope: 'SEO + content structure',
    result: 'Stronger search foundation',
    tags: ['BRAND DESIGN', 'SOCIAL MEDIA', 'DIGITAL ASSETS'],
    image: 'https://i.pinimg.com/736x/7c/15/39/7c1539cf7ff0207cb49ce0d338de1e5f.jpg',
    imageAlt: 'Abstract modern building facade with repeating geometric structure',
    deliverables: ['Technical SEO', 'Metadata structure', 'Content hierarchy'],
    liveUrl: 'https://vertex.vercel.app',
    showBackToWork: false,
    showLiveSite: false,
    page: {
      overview:
        'Vertex is a search-focused refinement project aimed at making discoverability feel intentional rather than mechanical.',
      challenge:
        'The challenge was to improve search performance and structural clarity without flattening tone or turning the site into a generic SEO checklist.',
      strategy:
        'The strategy used cleaner metadata, stronger hierarchy, and faster page structure to help search engines and visitors read the site in the same order.',
      process:
        'The process moved from audit work into structural cleanup, then into content sequencing, performance tuning, and surface polish.',
      typography: ['Strong editorial headings', 'Neutral body copy', 'Technical note styling'],
      palette: [
        { name: 'Graphite', value: '#101114', note: 'Primary field' },
        { name: 'Silver', value: '#9A9A9A', note: 'Soft contrast' },
        { name: 'Paper', value: '#F4F1EA', note: 'Light reference' },
      ],
      showcases: [
        {
          src: 'https://i.pinimg.com/736x/7c/15/39/7c1539cf7ff0207cb49ce0d338de1e5f.jpg',
          alt: 'Geometric facade with strong structural repetition',
          caption: 'Hierarchy and structure',
        },
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
          alt: 'Modern city architecture with layered depth and light',
          caption: 'Search-led storytelling',
        },
      ],
      gallery: [
        {
          src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop',
          alt: 'Glass facade with repeated geometric panels',
          caption: 'Information architecture',
        },
        {
          src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2670&auto=format&fit=crop',
          alt: 'Architectural detail with narrow rhythm and shadow',
          caption: 'Content rhythm',
        },
        {
          src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2670&auto=format&fit=crop',
          alt: 'Layered urban facade with clean repetition',
          caption: 'Responsive clarity',
        },
      ],
      outcomes: ['Stronger indexability', 'Clearer page hierarchy', 'Improved search confidence'],
    },
    featured: true,
  },
]

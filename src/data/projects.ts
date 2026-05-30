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

  decisions?: {
    title: string
    description: string
  }[]

  comparison?: {
    title: string

    left: {
      name: string
      style: string
    }

    right: {
      name: string
      style: string
    }

    conclusion: string
  }

  closing?: string
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
  {
    name: 'Deep Black',
    value: '#11110f',
    note: 'Primary background tone used for cinematic depth.',
  },

  {
    name: 'Dark Brown',
    value: '#17130f',
    note: 'Layered dark surface for cards and sections.',
  },

  {
    name: 'Forest Green',
    value: '#1e4a40',
    note: 'Premium accent used for highlights and identity.',
  },

  {
    name: 'Warm Gray',
    value: '#6f675d',
    note: 'Mid-tone balance for borders and overlays.',
  },

  {
    name: 'Stone',
    value: '#8b8175',
    note: 'Soft earthy neutral for layered contrast.',
  },

  {
    name: 'Taupe',
    value: '#a99982',
    note: 'Muted neutral tone for secondary UI elements.',
  },

  {
    name: 'Soft Sand',
    value: '#c8b79f',
    note: 'Warm elevated neutral for premium softness.',
  },

  {
    name: 'Beige',
    value: '#d8cbb6',
    note: 'Elegant light tone for balanced contrast.',
  },

  {
    name: 'Cream',
    value: '#f1e8d8',
    note: 'Primary typography and clean light surface.',
  },
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
  slug: 'mizu',
  title: 'Mizu Studio',
  category: 'CREATIVE DEVELOPMENT',
  year: '2026',

  shortDescription:
    'A cinematic creative studio experience blending motion, editorial layouts, and immersive interactions into a modern premium digital presence.',

  longDescription:
    'Mizu Studio was designed as a motion-first digital experience focused on emotional storytelling, minimal aesthetics, and cinematic pacing. The project explored how interaction, typography, and smooth transitions could shape a stronger sense of immersion while maintaining clarity and usability across the experience.',

  projectNotes:
    'Built around motion storytelling, premium typography, and smooth interaction systems that create a calm but immersive browsing experience.',

  focus: 'Motion-driven storytelling',

  scope:
    'Creative direction + frontend experience + interaction design',

  result:
    'A more immersive brand presence with stronger emotional engagement and refined visual identity.',

  tags: [
    'NEXT.JS',
    'FRAMER MOTION',
    'CREATIVE DEVELOPMENT',
    'UI DESIGN',
    'MOTION DESIGN',
  ],

  image:
    'https://plus.unsplash.com/premium_photo-1678937608953-f4821e42dcdb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  imageAlt:
    'Modern cinematic workspace with dark contrast and editorial lighting',

  deliverables: [
    'Motion-first landing page',
    'Interactive scroll storytelling',
    'Responsive navigation system',
    'Editorial interface design',
    'Animated component system',
  ],

  liveUrl: 'https://mizu-zeta.vercel.app/',

  page: {
    overview:
      'Mizu Studio is a cinematic creative agency concept focused on combining editorial composition, immersive motion, and modern interaction systems into a premium digital experience.',

    challenge:
      'The challenge was creating a highly interactive experience that still felt minimal, calm, and refined without overwhelming the visitor with excessive motion or visual noise.',

    strategy:
      'The strategy focused on balancing emotional storytelling with usability by combining cinematic scroll pacing, layered depth, restrained typography, and smooth transitions throughout the interface.',

    process:
      'The process involved building modular interaction systems, refining motion timing, experimenting with editorial layouts, and carefully shaping spacing and typography to maintain a premium visual rhythm across all sections.',

    typography: [
      'Editorial oversized headlines',
      'Minimal utility labels',
      'High-spacing uppercase metadata',
    ],

    palette: [
      {
        name: 'Ivory',
        value: '#f7f4ef',
        note: 'Primary background',
      },
      {
        name: 'Midnight',
        value: '#0f0f0f',
        note: 'Dark contrast surfaces',
      },
      {
        name: 'Graphite',
        value: '#1a1a1a',
        note: 'Secondary dark layers',
      },
      {
        name: 'Smoke',
        value: '#8b8b8b',
        note: 'Muted typography',
      },
      {
        name: 'Pure White',
        value: '#ffffff',
        note: 'Interactive highlights',
      },
    ],

    showcases: [
      {
        src:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Dark cinematic workspace with layered screens and premium lighting',

        caption: 'Motion-first hero experience',
      },

      {
        src:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Minimal editorial workspace with soft lighting and modern layout',

        caption: 'Editorial composition system',
      },
    ],

    gallery: [
      {
        src:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Creative team workspace with cinematic contrast and layered depth',

        caption: 'Studio atmosphere',
      },

      {
        src:
          'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Interactive digital interface with modern motion composition',

        caption: 'Interactive storytelling',
      },

      {
        src:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Minimal responsive interface with structured visual hierarchy',

        caption: 'Responsive interface system',
      },
    ],

    outcomes: [
      'More immersive storytelling',
      'Stronger premium perception',
      'Cleaner interaction flow',
      'Improved visual consistency',
    ],
  },

  featured: true,
},
{
  id: '3',

  slug: 'frea-bakery',

  title: 'FREA Bakery, Berlin',

  category: 'WEB DESIGN',

  year: '2025',

  shortDescription:
    'A Berlin bakery demo — warm brand, full build, zero templates. Built to make you hungry before you read a single word.',

  longDescription:
    'FREA Bakery was designed as a warm artisan bakery experience focused on appetite, trust, and effortless booking flow. The project explored how editorial composition, food-first storytelling, and softer visual pacing could create a premium bakery presence that feels human instead of overly corporate.',

  projectNotes:
    'Built around warmth, appetite-driven storytelling, and an editorial layout system that keeps reservations and product discovery effortless.',

  focus: 'Warm editorial storytelling',

  scope:
    'Brand direction + frontend experience + reservation flow',

  result:
    'Stronger emotional brand presence and clearer reservation intent.',

  tags: [
    'WEB DESIGN',
    'NEXT.JS',
    'TAILWIND CSS',
    'FRAMER MOTION',
    'PRO BONO',
  ],

  image:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2670&auto=format&fit=crop',

  imageAlt:
    'Warm artisan bakery interior with pastries and soft natural lighting',

  deliverables: [
    'Full bakery brand identity',
    'Editorial landing page',
    'Reservation flow',
    'Pre-order experience',
    'Coffee program section',
    'Responsive multi-page website',
  ],

  liveUrl: 'https://frea-demo.vercel.app/',

  page: {
    overview:
      'FREA Bakery, Berlin is a modern artisan bakery concept built around warmth, appetite-driven storytelling, and a calm reservation experience that feels inviting rather than transactional.',

    challenge:
      'The challenge was creating a bakery website that felt warm, human, and editorial while still keeping reservations, menu discovery, and navigation clear and effortless.',

    strategy:
      'The strategy focused on combining warm visual pacing, real food photography, editorial typography, and guided interaction patterns so visitors emotionally connect with the bakery before engaging with the booking experience.',

    process:
      'The process moved through brand exploration, typography refinement, food-first visual storytelling, responsive layout systems, and interaction polishing to ensure the experience felt soft, premium, and mobile-friendly across every section.',

    typography: [
      'Playfair Display — warm editorial serif',
      'Inter — clean readable sans-serif',
      'Minimal utility metadata',
    ],

    palette: [
      {
        name: 'Deep Brown',
        value: '#2B1D17',
        note: 'Primary shell',
      },

      {
        name: 'Burgundy',
        value: '#6E2C2C',
        note: 'Accent contrast',
      },

      {
        name: 'Cream',
        value: '#F6EBDD',
        note: 'Soft light base',
      },

      {
        name: 'Warm Beige',
        value: '#D9BEA0',
        note: 'Muted warmth',
      },

      {
        name: 'Wheat',
        value: '#C69C6D',
        note: 'Natural artisan tone',
      },
    ],

    showcases: [
      {
        src:
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Warm artisan bakery interior with pastries and soft lighting',

        caption: 'Warm editorial hero framing',
      },

      {
        src:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Coffee and bakery presentation with warm editorial composition',

        caption: 'Food-first storytelling',
      },
    ],

    gallery: [
      {
        src:
          'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Bakery counter with warm pastries and artisan atmosphere',

        caption: 'Bakery atmosphere',
      },

      {
        src:
          'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Editorial bakery menu and food presentation details',

        caption: 'House specials section',
      },

      {
        src:
          'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2670&auto=format&fit=crop',

        alt:
          'Mobile-friendly reservation and pre-order experience',

        caption: 'Reservation flow',
      },
    ],

    outcomes: [
      'Stronger appetite-driven storytelling',
      'Clearer reservation flow',
      'Warmer emotional brand presence',
      'Distinct visual identity within F&B space',
    ],

    decisions: [
      {
        title:
          'Crafted daily. Served with warmth.',

        description:
          'The hero copy was intentionally written to feel human and conversational — like the bakery itself was speaking rather than a marketing team.',
      },

      {
        title:
          'Food before atmosphere',

        description:
          'The House Specials section prioritised real food photography and appetite-driven presentation because bakery brands sell visually before anything else.',
      },

      {
        title:
          'Today’s Favourite floating card',

        description:
          'A small interactive detail added to the hero section to make the experience feel alive, dynamic, and less template-driven.',
      },
    ],

    comparison: {
      title:
        'Why show both FREA and Die Creme?',

      left: {
        name: 'Die Creme',
        style:
          'Dark · Cinematic · Minimal · Premium café energy',
      },

      right: {
        name: 'FREA Bakery',
        style:
          'Light · Warm · Editorial · Artisan bakery energy',
      },

      conclusion:
        'Same industry. Completely different aesthetic. This demonstrates creative range and the ability to adapt visual language depending on the brand personality.',
    },

    closing:
      'Two bakeries. Two completely different worlds. Both built from nothing — because that’s how I work.',
  },

  featured: true,
}

,
  {
    id: '4',
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

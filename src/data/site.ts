export interface NavigationLink {
  label: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CAPABILITIES', href: '/#capabilities' },
  { label: 'CONTACT', href: '/contact' },
]

export const menuLinks: NavigationLink[] = [
  { label: 'Selected Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'What I Build', href: '/#capabilities' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks: FooterLink[] = [
  { label: 'EMAIL', href: '#' }, // TODO: replace with the live email address.
  { label: 'LINKEDIN', href: '#' }, // TODO: replace with the live LinkedIn profile URL.
  { label: 'GITHUB', href: '#' }, // TODO: replace with the live GitHub profile URL.
  { label: 'RESUME', href: '#' }, // TODO: replace with the live resume URL.
]

export const site = {
  name: 'Srushti Lohiya',
  initials: 'SL',
  location: 'India',
  availability: 'Open for select 2026 collaborations',
  role: 'FULL STACK DEVELOPER · AUTOMATION ENGINEER · BRAND-LED INTERFACE BUILDER',
  description:
    'Digital systems for founders, studios, and brands that need technical depth, quiet confidence, and a sharper presence online.',
}

export const heroContent = {
  eyebrow: 'PORTFOLIO',
  title: 'Srushti Lohiya',
  lead: 'Most Websites Exist. I Build Ones That Earn.',
  supporting:
    'I design and build premium websites, scalable digital systems, SEO foundations, automation workflows, and interface experiences shaped to feel intentional from the very first interaction.',
  cta: {
    href: '/work',
    label: 'VIEW MY WORK',
  },
  note: 'Built with intention. Designed to last.',
}

export const aboutContent = {
  eyebrow: 'ABOUT',
  title: 'I build systems that work quietly and position brands with more authority.',
  paragraphs: [
    'I’m Srushti Lohiya — a developer and creative technologist working at the intersection of engineering, interface craft, automation, and digital positioning.',
    'My work spans full stack web applications, premium frontend systems, SEO architecture, backend workflows, and scalable digital experiences designed to feel intentional at every layer.',
    'I’m most useful when the brief is ambitious but still undefined — when a business needs stronger positioning, a calmer digital presence, cleaner systems behind the scenes, or an experience that feels more considered from first interaction to final conversion.',
  ],
  focusAreas: [
    'Premium websites and product surfaces',
    'Automation and internal system design',
    'Technical SEO and content architecture',
    'Brand-aware UX with engineering rigor',
    'Performance-focused frontend systems',
    'Interface systems with stronger narrative structure',
  ],
}

export const contactContent = {
  eyebrow: 'CONTACT',
  title: 'Let’s build something that feels more intentional.',
  description:
    'Whether it’s a premium website, a backend system, SEO infrastructure, automation workflow, or a complete digital refinement — I’m interested in projects that care about both execution and long-term clarity.',
  cta: 'Start a conversation',
  availabilityLabel: 'Currently available for:',
  availabilityItems: [
    'Premium website development',
    'SEO-focused redesigns',
    'Automation systems',
    'Brand-led digital experiences',
    'Long-term technical partnerships',
  ],
  formLabels: {
    name: 'Name',
    email: 'Email',
    projectType: 'Project or opportunity type',
    message: 'Message',
    submit: 'Send inquiry',
  },
  successMessage: 'Thank you. I’ll get back to you soon.',
  failureMessage: 'Something went wrong. Please try again or email me directly.',
}

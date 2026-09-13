export const siteConfig = {
  name: 'Saumya Mahajan',
  role: 'Software Engineer',
  targetRoles: 'SDE-2 Backend Engineer / AI Software Engineer',
  description:
    'Software Engineer building scalable backend systems, AI-powered applications, and developer tools with Java, Spring Boot, Python, and PostgreSQL.',
  url: 'https://saumyamahajan.dev',
  email: 'saumyamahajan06@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1nBi_KGot4GXwuIesDIvq9rysU2n-Su8k/view?usp=drive_link',
  social: {
    github: 'https://github.com/saumyamahajan',
    linkedin: 'https://www.linkedin.com/in/saumya-mahajan-8b102a202',
  },
} as const

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
]

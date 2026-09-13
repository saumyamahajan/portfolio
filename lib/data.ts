export type ExperienceRole = {
  role: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Experience = {
  company: string
  period: string
  location: string
  roles: ExperienceRole[]
}

export const experiences: Experience[] = [
  {
    company: 'JPMorgan Chase & CO',
    period: 'Jun 2023 — Present',
    location: '',
    roles: [
      {
        role: 'Software Development Engineer 1',
        period: 'Jul 2024 — Present',
        summary:
          'Building backend systems and developer automation while leading engineering execution across the team.',
        highlights: [
          'Led bi-weekly sprint cycles for a team of 8 engineers, coordinating planning, backlog refinement, dependencies, and delivery while maintaining 95%+ sprint velocity consistency.',
          'Architected a multi-agent developer automation framework using Java and Python across planning, design, implementation, testing, and code review, reducing story-to-PR cycle time from days to hours.',
          'Reduced boilerplate code generation effort by 70% and code review turnaround by 50%, delivering an overall 40–60% reduction in developer effort.',
          'Built automated cross-environment data validation using Java, reducing manual effort by 4 hours per week per team while maintaining deployment data integrity.',
          'Engineered GenAI-powered CI/CD documentation generation, improving consistency across pipeline configurations by 90%.',
          'Migrated legacy file-based feeds to an event-driven messaging architecture, reducing processing volume by 60% and improving system standardization.',
        ],
        stack: [
          'Java',
          'Python',
          'GenAI',
          'AI Agents',
          'IBM MQ',
          'CI/CD',
        ],
      },
      {
        role: 'Software Development Engineer Intern',
        period: 'Feb 2024 — Jul 2024',
        summary:
          'Modernized backend infrastructure through cloud migration, data model consolidation, and messaging automation.',
        highlights: [
          'Led an end-to-end database migration from on-premise infrastructure to Gaia Oracle Services (GOS), upgrading the stack from Java 11 to Java 21 with modernized Spring Boot, Hibernate, Jakarta EE, and OJDBC.',
          'Unified fragmented legacy models into a single Instrument model, eliminating data silos and simplifying downstream data flow across 5+ dependent systems.',
          'Automated scheduled jobs with AutoSys and integrated IBM MQ messaging with Java services, reducing manual job monitoring overhead by 15 hours per week.',
        ],
        stack: [
          'Java',
          'Spring Boot',
          'Hibernate',
          'Jakarta EE',
          'Oracle',
          'IBM MQ',
          'AutoSys',
        ],
      },
      {
        role: 'Summer Intern',
        period: 'Jun 2023 — Jul 2023',
        summary:
          'Worked on backend modernization, API development, and containerized deployment infrastructure.',
        highlights: [
          'Replaced MarkLogic with a JSON-backed Oracle database layer, improving query performance and reducing operational complexity.',
          'Built optimized RESTful APIs using SQL for data access.',
          'Containerized and deployed services on Kubernetes with SSL certificate management, enabling horizontal scalability and production-ready infrastructure.',
        ],
        stack: [
          'Java',
          'Oracle',
          'REST APIs',
          'SQL',
          'Kubernetes',
        ],
      },
    ],
  },
]

export type Project = {
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    title: 'Information Data Aggregation',
    description:
      'A real-time financial news aggregation system built around multiple RSS feeds.',
    problem:
      'Financial news from multiple sources needs to be collected and processed efficiently while keeping the aggregated data fresh.',
    solution:
      'Built a Spring Boot microservice for RSS feed processing, optimized database access with MySQL, and implemented automated cache invalidation for fresher data.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Recommendation Engine — GetRecs',
    description:
      'A recommendation system combining content-based and collaborative filtering.',
    problem:
      'Different recommendation approaches have different strengths, making it useful to combine them into a unified recommendation pipeline.',
    solution:
      'Implemented similarity metrics and ranking algorithms across content-based and collaborative filtering approaches, with a Streamlit interface for evaluating recommendations.',
    technologies: ['Python', 'Machine Learning', 'Streamlit'],
    githubUrl: 'https://github.com/saumyamahajan/GetRecs',
    liveUrl: 'https://getrecs.herokuapp.com/',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Backend & Frameworks',
    skills: ['Spring Boot', 'Hibernate', 'REST APIs'],
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'Machine Learning',
      'Generative AI',
      'LLM Applications',
      'AI Agents',
      'RAG',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'CI/CD',
      'Git',
      'Linux',
    ],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    category: 'Systems & Engineering',
    skills: [
      'System Design',
      'Distributed Systems',
      'Data Structures & Algorithms',
      'Object-Oriented Design',
      'Design Patterns',
    ],
  },
]

export type Certification = {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
]

export const learningNow: string[] = [
  'AI Agents',
  'LLM Applications',
  'RAG',
  'Generative AI',
  'Kubernetes',
  'System Design',
  'Distributed Systems',
]

export type Article = {
  title: string
  excerpt: string
  date: string
  readingTime: string
  tag: string
  href: string
}

export const articles: Article[] = [
  {
    title: 'Demystifying Digital Defense: Your First Steps in Networking and Protection',
    excerpt:
      'An introduction to cybersecurity and the fundamentals of staying safe in the digital world.',
    date: '2023',
    readingTime: '',
    tag: 'Cybersecurity',
    href: 'https://techfordev.hashnode.dev/demystifying-digital-defense-your-first-steps-in-networking-and-protection',
  },
  {
    title: 'You Got This',
    excerpt:
      'A collection of small observations, thoughts, and things worth pausing to think about.',
    date: '',
    readingTime: '',
    tag: 'Writing',
    href: 'https://substack.com/@realjane',
  },
]
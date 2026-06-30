export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyList {
  heading: string;
  items: string[];
}

export interface CaseStudySection {
  title: string;
  body?: string[];
  points?: string[];
  lists?: CaseStudyList[];
  problem?: string;
  solution?: string;
  resultsText?: string;
  images?: CaseStudyImage[];
  metrics?: CaseStudyMetric[];
  /** A celebratory closing: a line of text paired side-by-side with two images. */
  finale?: {
    text?: string;
    images: CaseStudyImage[];
  };
}

export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string[];
  summary: string;
  results?: string[];
  highlights?: string[];
  caseStudies?: CaseStudySection[];
  /** Render case studies as an immersive, scroll-revealed story. */
  storytelling?: boolean;
  /** Fire a celebratory confetti burst on the final image reveal. */
  confettiFinale?: boolean;
  /** Group under the "Side Projects" section instead of the main Projects grid. */
  sideProject?: boolean;
  /** External URL to a live, viewable version of the project. */
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '3shape-2024',
    title: 'Optimising retention and engagement in digital dentistry',
    company: '3Shape',
    role: 'Senior UX Designer / Team Lead',
    description: 'Revolutionising dentistry with market-leading intraoral scanners',
    summary: 'I worked with the marketing, self-service and after-sales teams to improve their sites — restructuring us into an internal agency model, scaling design operations, and launching web experiences that drove real KPI gains.',
    startDate: '2024-01',
    endDate: '2026-01',
    tags: ['Team management', 'UI Design', 'Product design', 'Business development', 'User research', 'Analytics'],
    storytelling: true,
    caseStudies: [
      {
        title: 'Launching a new after-sales experience',
        body: [
          'This site is home to everything from onboarding courses and account sign-ups to in-depth training, product guides, help articles and support cases.',
          'It needed a new information architecture, informed by card sorting and a content audit. I balanced findability — a search bar front and centre — with discoverability through three large tiles for the pillars: onboarding, training and support.',
        ],
        images: [
          {
            src: '/images/projects/3shape-2024/aftersales-homepage.png',
            alt: 'New design of the after-sales homepage',
            caption: 'New design of the after-sales homepage',
          },
        ],
        metrics: [
          { value: '115%', label: '1-day retention' },
          { value: '82.5%', label: '7-day retention' },
          { value: '41%', label: '30-day retention' },
        ],
      },
      {
        title: 'Increasing engagement on the marketing homepage',
        body: [
          'Through Amplitude and Google Analytics I saw a steep CTR drop on the 2nd, 3rd and 4th carousel images — people weren’t sticking around to watch it scroll.',
          'We challenged the long-standing promotions carousel, using data to win approval. My principle: never hide content. We surfaced the four key user goals as CTAs in the banner, and added variable-sized tiles in ‘The Latest from 3Shape’ for marketing to experiment with.',
          'We turned a full-page carousel delivering ~750 clicks/month into a layout of elements totalling over ~2500 clicks/month.',
        ],
        images: [
          {
            src: '/images/projects/3shape-2024/carousel-before.jpg',
            alt: 'The marketing homepage before the redesign',
            caption: 'Before — the carousel filled the space above the fold.',
          },
          {
            src: '/images/projects/3shape-2024/carousel-after.png',
            alt: 'The marketing homepage after the redesign',
            caption: 'After — above the fold users now see four CTAs and the start of the widgets, inviting them to scroll.',
          },
        ],
        metrics: [{ value: '+300%', label: 'Increased engagement' }],
      },
      {
        title: 'Building up our design operations',
        body: [
          'Beyond individual projects, I invested in the operations that let a small team ship consistently — the analytics, documentation and planning underneath the work.',
        ],
        images: [
          {
            src: '/images/projects/3shape-2024/design-ops-analytics.png',
            alt: 'Analytics dashboards for reviewing user behaviour',
            caption:
              'Established analytics tracking with the Data & Insights team, plus dashboards to review user behaviour and confirm we were hitting our goals.',
          },
          {
            src: '/images/projects/3shape-2024/design-documentation.png',
            alt: 'Shared design documentation library',
            caption:
              'Promoting consistency with a shared library of animations, component interactions and a record of design decisions for newcomers and context-switching.',
          },
          {
            src: '/images/projects/3shape-2024/design-roadmap.png',
            alt: 'Design roadmap aligned with development timelines',
            caption:
              'A design roadmap aligned with development timelines, encouraging good estimations and a predictable workload for a team of four designers.',
          },
        ],
      },
    ],
  },
  {
    id: 'skybox-2022',
    title: 'From concept to launch: An eSports SaaS platform from scratch',
    company: 'Skybox',
    role: 'Senior Product Designer / Team Lead',
    description: 'A cutting-edge CounterStrike analytics tool for professional eSports teams',
    summary: 'I joined Skybox as their first UX hire, initially auditing the live product for inconsistencies. As ambition grew, I moved into hiring the design team, establishing our ways of working, building a design system, improving design-to-development handovers, and launching a beautiful product.',
    startDate: '2022-02',
    endDate: '2023-07',
    tags: ['Design system', 'Team management', 'Hiring', 'UI Design', 'Product design'],
    storytelling: true,
    confettiFinale: true,
    results: [
      'Built an adaptable design system from scratch',
      'Built a strong design team culture',
      'Facilitated a fresh rebranding',
      'Launched a world-class product',
      'Established product analytics post-launch',
    ],
    caseStudies: [
      {
        title: 'My reflections',
        body: [
          'I’m very proud of my time at Skybox — from humble beginnings to managing a fun team and launching a great product.',
        ],
        lists: [
          {
            heading: 'What worked well?',
            items: [
              'The team culture I built was my favourite team in years.',
              'A strong, open culture kept productivity and morale up, even amid uncertainty.',
              'The product looked excellent by the end, after months on the design system, handovers and QA.',
            ],
          },
          {
            heading: 'What could be improved?',
            items: [
              'I could’ve engaged earlier in product-direction discussions, but found it hard to balance with hands-on design. Next time I’ll raise it sooner.',
            ],
          },
        ],
      },
      {
        title: 'A design system that grew with us',
        body: ['The design system adapted as the team and company grew:'],
        points: [
          'Create consistency across the existing product and identity',
          'Establish a baseline identity through a rebranding process',
          'Transition to the rebranded look and feel',
        ],
      },
      {
        title: 'Creating consistency',
        body: [
          'At first this was a solo project — I was the only designer.',
          'This ran for months, producing a more consistent product and a component list for the design system.',
        ],
        images: [
          {
            src: '/images/projects/skybox-2022/wireflow.png',
            alt: 'Comprehensive wireflow of the existing live product',
            caption: 'First I mapped the existing product end-to-end with a comprehensive wireflow.',
          },
          {
            src: '/images/projects/skybox-2022/component-audit.png',
            alt: 'Audit of component variations in the live product',
            caption: 'Then I categorised components and surfaced inconsistencies — many versions of each, plus stray colours and fonts.',
          },
          {
            src: '/images/projects/skybox-2022/live-changes.jpg',
            alt: 'Annotated screenshots used to brief frontend developers',
            caption: 'Using annotated screenshots, I worked with frontend developers to fix the live product quickly.',
          },
          {
            src: '/images/projects/skybox-2022/component-list.png',
            alt: 'List of components to build into the design system',
            caption: 'A list of components that needed to be built into the design system.',
          },
          {
            src: '/images/projects/skybox-2022/consistency-before.jpg',
            alt: 'The product before the consistency pass',
            caption: 'Before',
          },
          {
            src: '/images/projects/skybox-2022/consistency-after.jpg',
            alt: 'The product after the consistency pass',
            caption: 'After',
          },
        ],
      },
      {
        title: 'Establishing a baseline',
        body: [
          'I hired my first colleague, a design-systems specialist. Together we built a design system for v2.0 of the product, thinking through current and future needs.',
        ],
        images: [
          {
            src: '/images/projects/skybox-2022/design-system-structure.png',
            alt: 'Design system structure created in Figma',
            caption: 'We took my component list, researched great design systems and built our structure in Figma.',
          },
          {
            src: '/images/projects/skybox-2022/design-system-restrictions.png',
            alt: 'Design system retaining the existing product identity',
            caption: 'With a rebrand coming, we kept the existing colours, typography and key stylistic choices.',
          },
          {
            src: '/images/projects/skybox-2022/handover-workflow.png',
            alt: 'UX workflow for design-to-development handover',
            caption: 'We also established and iterated on handover processes, making handovers cleaner and clearly labelled.',
          },
          {
            src: '/images/projects/skybox-2022/handover-process.png',
            alt: 'Cleaner, labelled handover process',
            caption: 'Cleaner, labelled handovers for development teams.',
          },
        ],
      },
      {
        title: 'Transitioning to a rebranded look',
        body: [
          'By now we were a team of three, with a junior hire joining from university.',
          'We kicked off a rebrand with an external agency, joining every conceptual session and championing the brand internally.',
          'With the system and handovers in place, we reskinned with the new brand.',
        ],
        images: [
          {
            src: '/images/projects/skybox-2022/rebrand-iteration.jpg',
            alt: 'Early rebranding iteration based on agency sessions',
            caption: 'One of our first iterations from the agency sessions.',
          },
          {
            src: '/images/projects/skybox-2022/button-components.png',
            alt: 'Rebranded button components',
            caption: 'Button components, reskinned with the new brand.',
          },
        ],
        finale: {
          text: 'The result was fresh and gamer-focused — and the live product matched our mockups.',
          images: [
            {
              src: '/images/projects/skybox-2022/rebrand-mockup.jpg',
              alt: 'Rebranded product mockup',
              caption: 'Mockup',
            },
            {
              src: '/images/projects/skybox-2022/rebrand-live.png',
              alt: 'Rebranded live product',
              caption: 'Live product',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'cphux-2019',
    title: 'UX mentorship and community building',
    company: 'CPHUX',
    role: 'Cofounder and Product Lead',
    description: 'The largest UX community in Denmark focused on Copenhagen',
    summary: 'My work at CPHUX was extremely multi-faceted. Being a business owner is very different to being a UX Designer. There was a lot to learn about revenue, tax, finances, operations, business development, marketing and sales, just to name a few.',
    startDate: '2019-11',
    endDate: '2022-11',
    tags: ['Business development', 'User research', 'Project management'],
    storytelling: true,
    results: [
      'Grew community memberships from 12 to 100+ (recurring revenue baseline)',
      'Built job board from spreadsheet to primary revenue source in 6 months',
      'Generated 300,000kr in revenue from job board in first year',
      'Adapted to COVID-19, transitioned from physical to online-only events',
      'Mentored 50+ UX professionals with career advice',
    ],
    highlights: [
      'Developed open company culture with focus on reflection and work-life balance',
      'Built excellent documentation and organization systems',
      'Created job board that became primary revenue driver',
      'Successfully pivoted business model during pandemic',
    ],
  },
  {
    id: '3p-learning-2016',
    title: 'Teaching on tablet: Numeracy for early learners',
    company: '3P Learning',
    role: 'Digital Producer/Content Editor',
    description: 'An augmented reality app that guides early learners with adorable Numbeanies',
    summary: 'Launched an engaging educational app that not only met the needs of teachers and students but was delivered on time. Everyone on my team felt satisfied and focused throughout the project.',
    startDate: '2016-06',
    endDate: '2016-12',
    tags: ['Project management', 'Game design', 'Art direction'],
    storytelling: true,
    results: [
      'Planned, executed and released app on Apple Store in 6 months',
      'Kept project within expected deadlines',
      'Tested in classrooms to ensure teacher and student satisfaction',
      'Achieved bug-free launch',
    ],
    highlights: [
      'Excellent team culture that felt productive and sustainable',
      'Explored unique art style with talented contractors',
      'Balanced game design with educational rigor',
      'Conducted extensive user testing in real classrooms',
      'Managed production timeline and vendor negotiations',
    ],
  },
  {
    id: 'spark-2026',
    title: 'Spark: fast, simple polling with no hidden paywalls',
    company: 'Side project',
    role: 'Designer & builder',
    description: 'A real-time audience engagement platform born from a hackathon',
    summary: 'Spark began as a hackathon experiment and grew into an ongoing exploration — both of a product idea and of how quickly AI-assisted “vibe coding” can take something from prototype to polished platform.',
    startDate: '2026-05',
    endDate: '2026-06',
    tags: ['Side project', 'Vibe coding', 'Product design', 'Game design', 'Prototyping'],
    storytelling: true,
    sideProject: true,
    confettiFinale: true,
    liveUrl: 'https://hackathon30may.vercel.app',
    caseStudies: [
      {
        title: 'An hour-and-a-half hackathon prototype',
        body: [
          'Spark started as a hackathon on 30 May. Within about ninety minutes I had a working prototype of a polling platform up and running.',
          'That speed captivated me — watching an idea become something usable so fast was the spark that turned a one-off experiment into an ongoing project.',
        ],
        images: [
          {
            src: '/images/projects/spark-2026/session-builder.png',
            alt: 'The Spark session builder showing interaction types to choose from',
            caption: 'The build I had running within ninety minutes — pick an interaction type and you’re polling.',
          },
        ],
      },
      {
        title: 'The gap I wanted to fill',
        body: [
          'There aren’t many good QR-code tools that genuinely focus on audience engagement — most are quizzes built around multiple choice and little else.',
          'I wanted to draw on my game design experience to craft more engaging interactions between audience members, not just between the presenter and the crowd. Alongside the familiar quiz and poll, that means formats like predictions, emoji reactions, word clouds, Orbit and Tilt Ball.',
        ],
        images: [
          {
            src: '/images/projects/spark-2026/marketing-hero.png',
            alt: 'The Spark marketing homepage hero',
            caption: 'The positioning, distilled: fast, simple polling with no hidden paywalls.',
          },
        ],
      },
      {
        title: 'Turning it into a product',
        body: [
          'From the prototype I started building outward — a proper marketing page and a wider set of product features beyond a single poll.',
          'I also experimented with automating market research using the Strawberry browser, speeding up how I validate ideas and understand the space.',
        ],
      },
      {
        title: 'My reflections',
        body: [
          'This has been a fascinating process. It’s shown me just how quickly vibe coding can get ideas up and running — from concept to working prototype in an afternoon.',
          'It’s also taught me how to get more predictable results from these tools by being deliberate in how you set up and structure your projects.',
        ],
        images: [
          {
            src: '/images/projects/spark-2026/product-composition.png',
            alt: 'Spark shown across desktop and mobile',
            caption: 'Designed for the screen at the front and the phone in every hand.',
          },
        ],
      },
    ],
  },
];

export const sideProjects: Project[] = projects.filter((project) => project.sideProject);

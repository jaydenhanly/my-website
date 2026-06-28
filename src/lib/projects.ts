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
}

export const projects: Project[] = [
  {
    id: '3shape-2024',
    title: 'Optimising retention and engagement in digital dentistry',
    company: '3Shape',
    role: 'Senior UX Designer / Team Lead',
    description: 'Revolutionising digital dentistry with market leading intraoral scanners',
    summary: 'I worked closely with marketing, recurring revenue self-service and aftersales teams to improve their respective sites. Along the way restructuring how we work as a team into an internal agency model, building up our design operations, and launched some great web experiences that drove actual improved KPIs.',
    startDate: '2024-01',
    endDate: '2026-01',
    tags: ['Team management', 'UI Design', 'Product design', 'Business development', 'User research', 'Analytics'],
    storytelling: true,
    caseStudies: [
      {
        title: 'Launching a new after-sales experience',
        problem:
          'This site is the home of everything from onboarding courses and account sign ups, in-depth training and product guides to help articles and support cases.',
        solution:
          'It required a completely new information architecture informed by card sorting and a thorough content audit. My design idealogy was to focus on a mixture between findability and discoverability. The search bar is front and centre for findability, and the 3 large tiles for discoverability of the 3 pillars of content — onboarding, training and support.',
        images: [
          {
            src: '/images/projects/3shape-2024/aftersales-homepage.png',
            alt: 'New design of the after-sales homepage',
            caption: 'New design of the after-sales homepage',
          },
        ],
        metrics: [
          { value: '+32.5%', label: '7-day retention' },
          { value: '+9.5%', label: '30-day retention' },
        ],
      },
      {
        title: 'Increasing engagement on the marketing homepage',
        problem:
          'Through Amplitude and Google Analytics, I observed a massive drop in CTR for the 2nd, 3rd and 4th images in the carousel — people simply weren’t hanging around to watch the carousel scroll through the offers.',
        solution:
          'We challenged the marketing department about their carousel of promotions that had existed for years. Using analytics data to prove our case, we got the project approved. My design ideology was to never hide content. We chose the 4 key user goals as call-to-actions in the top banner. In addition, we designed multiple different sized tiles in ‘The Latest from 3Shape’ section allowing the marketing team to experiment with the value of different sizes of screen real estate.',
        resultsText:
          'We transformed a full-page carousel that delivered ~750 clicks/month into a page with multiple elements that added up to over ~2500 clicks/month.',
        images: [
          {
            src: '/images/projects/3shape-2024/carousel-before.jpg',
            alt: 'The marketing homepage before the redesign',
            caption: 'Before — The carousel occupied entirely above the fold. The first image in the carousel.',
          },
          {
            src: '/images/projects/3shape-2024/carousel-after.png',
            alt: 'The marketing homepage after the redesign',
            caption: 'After — Above the fold, the user can see 4 main CTAs, a latest of 3Shape headline and the top of the widgets, inviting them to scroll down.',
          },
        ],
        metrics: [{ value: '+300%', label: 'Increased engagement' }],
      },
      {
        title: 'Building up our design operations',
        images: [
          {
            src: '/images/projects/3shape-2024/design-ops-analytics.png',
            alt: 'Analytics dashboards for reviewing user behaviour',
            caption:
              'Established our analytics tracking practices by working closely with the Data & Insights Team, our handover format for development teams and most importantly setting up dashboards to review user behaviours and ensure we are seeing the success we were hoping for.',
          },
          {
            src: '/images/projects/3shape-2024/design-documentation.png',
            alt: 'Shared design documentation library',
            caption:
              'Promoting design consistency with a shared library of animation choices, shared component interactions and a history of design decisions to assist newcomers and ourselves when switching between projects.',
          },
          {
            src: '/images/projects/3shape-2024/design-roadmap.png',
            alt: 'Design roadmap aligned with development timelines',
            caption:
              'Built a robust design roadmap that is aligned with development timelines. Encouraging good design estimations and predictable workload for a team of 4 designers.',
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
    summary: 'I was brought onto Skybox as their first UX addition to their current team. In the beginning I was simply auditing their live product for design inconsistencies. As the product ambition and production started ramping up, I moved into hiring the design team, establishing our way of working, building a design system, improving our design to development handover workflows and finally launching a beautiful looking product.',
    startDate: '2022-02',
    endDate: '2023-07',
    tags: ['Design system', 'Team management', 'Hiring', 'UI Design', 'Product design'],
    storytelling: true,
    results: [
      'Built an adaptable design system from scratch',
      'Created a supportive and strong design team culture',
      'Contributed and facilitated a fresh and exciting rebranding',
      'Launched a world-class product',
      'Established product analytics post-launch',
    ],
    caseStudies: [
      {
        title: 'My reflections',
        body: [
          'I am very proud of my time at Skybox from humble beginnings, to managing a fun team of designers and launching an awesome product.',
        ],
        lists: [
          {
            heading: 'What worked well?',
            items: [
              'The team culture I put together was probably my favourite team I’ve worked in in years.',
              'Building a strong and open culture within your team can keep up productivity and morale even in the toughest of work environments with a lot of uncertainty.',
              'The product looked excellent by the end after the months of hard work with the design system, product handover processes and quality assurance.',
            ],
          },
          {
            heading: 'What could be improved?',
            items: [
              'I think I could’ve engaged earlier in high level discussions about product direction, but I found it tricky to balance this with the actual design work that needed to be done. In future, I will discuss this with my manager more.',
            ],
          },
        ],
      },
      {
        title: 'A design system that grew with us',
        body: ['The design system adapted to different needs as the design team and company grew:'],
        points: [
          'Create consistency across the existing product with its existing visual identity',
          'Establish a baseline new visual identity with a rebranding process',
          'Transition to a rebranded look and feel',
        ],
      },
      {
        title: 'Creating consistency',
        body: [
          'This was a solo project for me in the beginning while I was the only designer in the company.',
          'This process continued for a couple of months to get the live product looking more consistent, but also to establish a list of components that needed to start being built into a design system.',
        ],
        images: [
          {
            src: '/images/projects/skybox-2022/wireflow.png',
            alt: 'Comprehensive wireflow of the existing live product',
            caption: 'The first step was to understand all the ins and outs of the existing live product. I love doing this with a comprehensive wireflow.',
          },
          {
            src: '/images/projects/skybox-2022/component-audit.png',
            alt: 'Audit of component variations in the live product',
            caption: 'Then I needed to categorise the types of components being used and see there were inconsistencies. Needless to say, there were a lot of versions of each component and plenty of colours and fonts.',
          },
          {
            src: '/images/projects/skybox-2022/live-changes.jpg',
            alt: 'Annotated screenshots used to brief frontend developers',
            caption: 'Using pretty rudimentary screenshots with annotations, I worked closely with the frontend developers to start making changes to the live product quickly.',
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
          'During this time, I had hired my first design colleague specialised in design systems. The goal now was to build a design system for a version 2.0 of the live product, thinking through what is needed now and in the future.',
        ],
        images: [
          {
            src: '/images/projects/skybox-2022/design-system-structure.png',
            alt: 'Design system structure created in Figma',
            caption: 'Together we took my list of components and researched great design systems to create a design system structure in Figma.',
          },
          {
            src: '/images/projects/skybox-2022/design-system-restrictions.png',
            alt: 'Design system retaining the existing product identity',
            caption: 'Since we were told a full rebranding process would be coming down the line, we had some restrictions around changing the product identity too much. This meant we chose not to change colours, typography and some stylistic choices from the live product.',
          },
          {
            src: '/images/projects/skybox-2022/handover-workflow.png',
            alt: 'UX workflow for design-to-development handover',
            caption: 'We also started to establish and iterate on handover processes and improve our handovers to be labelled and cleaner.',
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
          'At this point, we were now a team of 3 designers, with the 3rd hire being a junior from university to come in as another design resource.',
          'Finally, steps were made towards a rebranding effort and an external agency was hired to assist with the creative process. This involved a lot of conceptual talks about the emotion and themes behind the brand. I was involved in all conceptual meetings and championed furthering the development of the brand internally.',
          'Now with our skeleton of a design system and handover processes in place, we just needed to ‘reskin’ our design system with the new brand. The end result was a very fresh and gamer-focused brand, but our handover process also proved itself, since the new live product looked just like our mockups.',
        ],
        images: [
          {
            src: '/images/projects/skybox-2022/rebrand-iteration.jpg',
            alt: 'Early rebranding iteration based on agency sessions',
            caption: 'One of the first iterations from our design based on the sessions with the agency.',
          },
          {
            src: '/images/projects/skybox-2022/button-components.png',
            alt: 'Rebranded button components',
            caption: 'Button components, re-skinned with the new brand.',
          },
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
];

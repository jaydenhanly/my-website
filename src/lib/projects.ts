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
    tags: ['Team management', 'UI Design', 'Product design', 'User research', 'Analytics'],
    results: [
      '+32.5% increase in 7-day retention',
      '+9.5% increase in 30-day retention',
      '+300% increased engagement on marketing homepage',
      'Established analytics tracking practices and dashboards',
    ],
    highlights: [
      'Launched new after-sales experience with improved information architecture',
      'Increased engagement on marketing homepage from ~750 clicks/month to ~2500 clicks/month',
      'Built up design operations with analytics tracking and design handover processes',
      'Promoted design consistency across the organization',
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
    results: [
      'Built an adaptable design system from scratch',
      'Created a supportive and strong design team culture',
      'Contributed and facilitated a fresh and exciting rebranding',
      'Launched a world-class product',
      'Established product analytics post-launch',
    ],
    highlights: [
      'Audited live product and established consistency baseline',
      'Hired and managed a team of 3 designers',
      'Built design system that adapted through rebranding process',
      'Established design-to-development handover processes',
      'Led rebranding effort with external agency collaboration',
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

export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '3shape-2024',
    title: 'Optimising retention and engagement in digital dentistry',
    company: '3Shape',
    role: 'Senior UX Designer / Team Lead',
    description: 'Revolutionising digital dentistry with market leading intraoral scanners',
    startDate: '2024-01',
    endDate: '2026-01',
    tags: ['Team management', 'UI Design', 'Product design', 'User research', 'Analytics'],
  },
  {
    id: 'skybox-2022',
    title: 'From concept to launch: An eSports SaaS platform from scratch',
    company: 'Skybox',
    role: 'Senior Product Designer / Team Lead',
    description: 'A cutting-edge CounterStrike analytics tool for professional eSports teams',
    startDate: '2022-02',
    endDate: '2023-07',
    tags: ['Design system', 'Team management', 'Hiring', 'UI Design', 'Product design'],
  },
  {
    id: 'cphux-2019',
    title: 'UX mentorship and community building',
    company: 'CPHUX',
    role: 'Cofounder and Product Lead',
    description: 'The largest UX community in Denmark focused on Copenhagen',
    startDate: '2019-11',
    endDate: '2022-11',
    tags: ['Business development', 'User research', 'Project management'],
  },
  {
    id: '3p-learning-2016',
    title: 'Teaching on tablet: Numeracy for early learners',
    company: '3P Learning',
    role: 'Digital Producer/Content Editor',
    description: 'An augmented reality app that guides early learners with adorable Numbeanies',
    startDate: '2016-06',
    endDate: '2016-12',
    tags: ['Project management', 'Game design', 'Art direction'],
  },
];

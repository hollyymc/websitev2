export interface Job {
  role: string;
  org: string;
  date: string;
  location: string;
  points: string[];
}

export const experience: Job[] = [
  {
    role: 'Working Student, Data Engineering',
    org: 'Rewire',
    date: 'Mar 2026 – now',
    location: 'Amsterdam, NL',
    points: [
      'Contributed to the AIRPro promotion optimisation platform: cloud infrastructure changes with Terraform and AWS networking while the platform was separated for different business entities.',
      'Implemented Okta authentication in Go and made infrastructure improvements across development, acceptance and production.',
      'Worked with GitLab CI/CD and collaborative Git workflows, with regular merge requests and code reviews.',
      "Co-taught a module of GAIN's Data & AI bootcamp and presented technical work at company-wide meetings.",
    ],
  },
  {
    role: 'Student Ambassador',
    org: 'Vrije Universiteit',
    date: 'Oct 2023 – now',
    location: 'Amsterdam, NL',
    points: [
      'Represented the AI BSc programme and the university at information fairs, open days and school visits.',
      'Presented the programme to prospective students and parents and led campus tours.',
    ],
  },
];

export const otherExperience: Job[] = [
  {
    role: 'Bar Manager & Bartender',
    org: 'Levenslang',
    date: 'Oct 2023 – Feb 2026',
    location: 'Amsterdam, NL',
    points: [
      'Progressed from bartender to bar manager, leading and coordinating a team during busy events.',
      'Built leadership, teamwork and decision-making skills in fast-paced environments.',
    ],
  },
  {
    role: 'Stage Hand',
    org: 'Crew Solutions',
    date: 'Jun 2024 – Oct 2025',
    location: 'Amsterdam, NL',
    points: [
      'Part of a technical crew setting up and dismantling stages and event equipment.',
      'Loaded and unloaded trucks efficiently while following safety procedures.',
    ],
  },
];

export interface Education {
  school: string;
  program: string;
  date: string;
  details: string[];
  courses?: string[];
}

export const education: Education[] = [
  {
    school: 'Universiteit Utrecht',
    program: 'Game & Media Technology',
    date: '2026 – now',
    details: [],
  },
  {
    school: 'Vrije Universiteit',
    program: 'Artificial Intelligence (BSc)',
    date: '2023 – 2026',
    details: ['7.6 GPA', 'Track: Intelligent Systems'],
    courses: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Logic & Sets',
      'Software Design',
      'Software Engineering Processes',
      'Text Mining',
      'Computational Intelligence',
      'Linear Algebra & Calculus',
      'Databases',
    ],
  },
];

export interface SkillGroup {
  title: string;
  hand: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    hand: 'I speak code',
    items: ['Python', 'C++', 'SQL', 'HTML/CSS', 'R', 'JavaScript'],
  },
  {
    title: 'Cloud & infra',
    hand: 'clouds, mostly',
    items: ['AWS', 'Terraform', 'GitLab CI/CD', 'VPC networking'],
  },
  {
    title: 'AI & ML',
    hand: 'teaching machines',
    items: ['Machine learning', 'Deep learning', 'NLP', 'Text classification', 'NER', 'Sentiment analysis'],
  },
  {
    title: 'Tools & libraries',
    hand: 'daily drivers',
    items: ['Git', 'PyTorch', 'Pandas', 'HuggingFace', 'NLTK', 'Jupyter', 'Matplotlib'],
  },
];

export const beyondCode = [
  {
    title: 'Competitive rowing',
    text: 'Five to eight sessions a week alongside studies and work. Mostly a lesson in discipline, teamwork and time management.',
  },
  {
    title: 'Teaching',
    text: "Co-taught a module of GAIN's Data & AI bootcamp. Explaining something is the fastest way to find out if you understand it.",
  },
  {
    title: 'Student ambassador',
    text: 'Campus tours, open days and school visits for the AI BSc at VU. Turns out I enjoy talking about AI to people who are just curious.',
  },
];

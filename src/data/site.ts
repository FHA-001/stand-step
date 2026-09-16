export type Pillar = {
  id: string;
  index: string;
  title: string;
  description: string;
  detail: string;
  accent: string;
};

export type Committee = {
  title: string;
  focus: string;
  pillar: string;
  color: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  pillar: string;
  specialisation: string;
};

export type Story = {
  type: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
};

export const pillars: Pillar[] = [
  {
    id: 'science',
    index: '01',
    title: 'Science',
    description: 'Knowledge that solves problems.',
    detail: 'Research, medicine, biotechnology, education and scientific innovation shaped around the questions that matter.',
    accent: '#8cae93',
  },
  {
    id: 'technology',
    index: '02',
    title: 'Technology',
    description: 'Technology that connects and accelerates.',
    detail: 'Artificial intelligence, computing, digital infrastructure, cybersecurity, communication and renewable technologies.',
    accent: '#5da889',
  },
  {
    id: 'engineering',
    index: '03',
    title: 'Engineering',
    description: 'Engineering that builds.',
    detail: 'Infrastructure, manufacturing, agriculture, water, energy, transport, minerals and natural-resource development.',
    accent: '#c89b3c',
  },
  {
    id: 'perspectives',
    index: '04',
    title: 'Perspectives',
    description: 'People, policy and society.',
    detail: 'Security, poverty, education, investment, human development, migration and inclusive economic growth.',
    accent: '#b58c75',
  },
];

export const committees: Committee[] = [
  { title: 'Science & Technology', focus: 'Scientific and technical capability', pillar: 'Science', color: '#8cae93' },
  { title: 'Science Education', focus: 'Science learning and opportunity', pillar: 'Science', color: '#8cae93' },
  { title: 'Medical & Health Services', focus: 'Medical systems and health services', pillar: 'Science', color: '#8cae93' },
  { title: 'Pharmaceuticals & Drug Abuse', focus: 'Pharmaceuticals and drug-abuse prevention', pillar: 'Science', color: '#8cae93' },
  { title: 'Computer Science & Artificial Intelligence', focus: 'Computing and responsible AI', pillar: 'Technology', color: '#5da889' },
  { title: 'Communication & Cybersecurity', focus: 'Communication systems and digital safety', pillar: 'Technology', color: '#5da889' },
  { title: 'Power Development & Renewable Energy', focus: 'Power systems and renewable energy', pillar: 'Technology', color: '#5da889' },
  { title: 'Infrastructure Development', focus: 'Infrastructure systems and delivery', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Manufacturing & Export', focus: 'Manufacturing capacity and export', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Minerals Development & Process Engineering', focus: 'Minerals and process engineering', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Integrated Water Resources, Water Supply, Sanitation & Environment', focus: 'Water, sanitation and environmental systems', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Hydropower & Inter-Basin Water Transfer Engineering', focus: 'Hydropower and water-transfer engineering', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Inland Basin Oil & Gas Exploration Engineering', focus: 'Inland basin exploration engineering', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Transportation Development', focus: 'Transportation systems and access', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Modern Agricultural Practices & Engineering', focus: 'Agriculture, practice and engineering', pillar: 'Engineering', color: '#c89b3c' },
  { title: 'Insecurity, Poverty & Human Development', focus: 'Security, poverty and human development', pillar: 'Perspectives', color: '#b58c75' },
  { title: 'Almajiri, Nomadic & Out-of-School Education + Skills Acquisition', focus: 'Inclusive education and skills acquisition', pillar: 'Perspectives', color: '#b58c75' },
  { title: 'Trade, Industry, Commerce & Investment', focus: 'Trade, commerce and investment', pillar: 'Perspectives', color: '#b58c75' },
  { title: "Technological & Vocational Education + Girls' Education", focus: 'Technical and girls’ education', pillar: 'Perspectives', color: '#b58c75' },
  { title: 'IDPs & Forced Migration Management', focus: 'Displacement and forced migration', pillar: 'Perspectives', color: '#b58c75' },
];

export const members: Member[] = [
  { id: 'demo-01', name: 'Demo member profile 01', role: 'Sample profile for illustration only', pillar: 'Science', specialisation: 'Research and evidence' },
  { id: 'demo-02', name: 'Demo member profile 02', role: 'Sample profile for illustration only', pillar: 'Technology', specialisation: 'Digital systems' },
  { id: 'demo-03', name: 'Demo member profile 03', role: 'Sample profile for illustration only', pillar: 'Engineering', specialisation: 'Infrastructure and delivery' },
  { id: 'demo-04', name: 'Demo member profile 04', role: 'Sample profile for illustration only', pillar: 'Perspectives', specialisation: 'Policy and human development' },
  { id: 'demo-05', name: 'Demo member profile 05', role: 'Sample profile for illustration only', pillar: 'Science', specialisation: 'Health and education' },
  { id: 'demo-06', name: 'Demo member profile 06', role: 'Sample profile for illustration only', pillar: 'Engineering', specialisation: 'Water and agriculture' },
];

export const stories: Story[] = [
  { type: 'Coming soon', date: 'TO BE PUBLISHED', title: 'Research papers & technical studies', excerpt: 'A future collection of evidence, studies and research opportunities from the STAND & STEP network.', tag: 'Research' },
  { type: 'Coming soon', date: 'TO BE PUBLISHED', title: 'Policy briefs & development frameworks', excerpt: 'A future home for concise, practical policy thinking shaped by evidence and professional perspectives.', tag: 'Policy' },
  { type: 'Coming soon', date: 'TO BE PUBLISHED', title: 'Data, reports & opportunities', excerpt: 'A future resource space for reports, development indicators, grants, fellowships and collaborations.', tag: 'Knowledge hub' },
];
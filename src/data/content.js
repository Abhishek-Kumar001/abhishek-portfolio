export const skills = {
  Languages: ['JavaScript', 'TypeScript', 'C/C++', 'Java', 'Python'],
  Frontend: ['React.js', 'Redux Toolkit', 'Zustand', 'React Hooks', 'Tailwind CSS', 'DaisyUI', 'MUI'],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Zod'],
  'AI Integration': ['Gemini AI API', 'LangChain', 'LangGraph', 'RAG', 'GenAI'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Socket.IO', 'Puppeteer', 'Postman', 'AWS S3'],
}

export const experience = [
  {
    company: 'Techpearl Software Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'May 2025 – Apr 2026',
    points: [
      'Architected an AI-powered interview prep platform integrating Gemini AI API to analyze resumes against JDs, generating custom interview questions and skill-gap analysis.',
      'Built React 18 / TypeScript + Redux Toolkit + React Query frontend for a multi-tenant HR onboarding SaaS — nested workflow engine, AI chat, AWS S3 uploads. Reduced API calls by 40% and page load to <2s, supporting 5000+ concurrent users.',
      'Implemented JWT-based auth flows, protected routing, session handling, and role-based access control across React apps.',
    ],
  },
  {
    company: 'Vaastaman Solutions Pvt. Ltd.',
    role: 'Full Stack Engineer',
    period: 'Nov 2024 – May 2025',
    points: [
      'Developed responsive user interfaces using React.js and Tailwind CSS.',
      'Followed secure coding practices including input validation and modular architecture',
      'Collaborated with senior developers using Git-based workflows and Agile development',
    ],
  },
  {
    company: 'Vaastaman Solutions Pvt. Ltd.',
    role: 'Full Stack Intern',
    period: 'Apr 2024 – Sep 2024',
    points: [
      'Built 15+ reusable React components, accelerating dev velocity by 40%; resolved 50+ bugs across React & Node.js.',
      'Enforced security best practices — encrypted data flow, input validation, and modular codebase architecture.',
    ],
  },
]

export const projects = [
  {
    name: 'ChatterFlow',
    date: 'Feb 2025',
    image: '/projects/chatter-flow.png',
    description:
      'Real-time full-stack chat app with Socket.IO, JWT authentication, end-to-end encryption, and a mobile-first design. Online/offline indicators and theme switching.',
    stack: ['React', 'Socket.IO', 'JWT', 'Node.js', 'MongoDB'],
    live: 'https://chatter-flow-app.vercel.app/',
    github: 'https://github.com/Abhishek-Kumar001',
  },
  {
    name: 'PrimeCart',
    date: 'Jan 2025',
    image: '/projects/prime-cart.png',
    description:
      'Full-stack e-commerce platform with Firebase Auth, multi-category filtering, real-time cart/wishlist via Redux Toolkit, and coupon discount logic. Reduced page load time by 30% via lazy loading.',
    stack: ['React', 'Redux Toolkit', 'Firebase', 'REST APIs'],
    live: 'https://prime-cart-abhi.netlify.app/',
    github: 'https://github.com/Abhishek-Kumar001',
  },
  {
    name: 'SparkMatcher',
    date: 'Oct 2024',
    image: '/projects/spark-matcher.png',
    description:
      'MERN-stack dating app with JWT auth, access-controlled routes, Socket.IO real-time chat, and swipe gestures. Cut unnecessary API calls by 40% with Redux Toolkit + Zustand.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
    live: 'https://spark-matcher.vercel.app/',
    github: 'https://github.com/Abhishek-Kumar001',
  },
]

export const education = [
  {
    school: 'National Business College',
    degree: 'Bachelor of Computer Applications — 80.17%',
    period: 'Sep 2020 – Mar 2024',
  },
  {
    school: 'MR Inter College',
    degree: '12th Board — 79.20%',
    period: 'Jun 2018 – Jun 2020',
  },
]

export const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '15+', label: 'Components Built' },
  { value: '5K+', label: 'Concurrent Users' },
  { value: '40%', label: 'API Calls Reduced' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Abhishek-Kumar001' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-kumar-6b3b53249' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Abhishek_Gupta1255/' },
]

export const contact = {
  email: 'abhigupta12558@gmail.com',
  phone: '+91 95253 03570',
  phoneHref: 'tel:+919525303570',
  location: 'Bangalore, India',
}

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

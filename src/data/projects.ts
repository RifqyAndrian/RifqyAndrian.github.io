export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  outcome: string;
  githubUrl: string;
  demoUrl?: string;
  gradient: string;
  icon: string;
  category: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'egrocery',
    title: 'eGrocery',
    subtitle: 'Online Grocery Shopping Platform',
    overview:
      'E-Grocery is a modern online grocery shopping platform built with Laravel and PHP, enabling customers to browse products, manage carts, and place grocery orders through a seamless digital experience.',
    challenge:
      'Traditional grocery shopping can be time-consuming and inconvenient. The objective was to create an efficient platform that simplifies product discovery, purchasing, and order management.',
    solution:
      'Developed a responsive e-commerce application with an intuitive interface, making grocery shopping faster and more accessible across devices.',
    technologies: ['PHP', 'Laravel', 'CSS', 'JavaScript'],
    features: [
      'Product catalog management',
      'Shopping cart functionality',
      'User authentication',
      'Order management system',
      'Responsive design',
      'Secure checkout workflow',
    ],
    outcome:
      'Delivered a user-friendly grocery e-commerce platform that streamlines online shopping and improves the overall purchasing experience.',
    githubUrl: 'https://github.com/RifqyAndrian/egrocery',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: '🛒',
    category: 'Fullstack',
    image: '/projects/egrocery.webp',
  },
  {
    id: 'justgo',
    title: 'JustGo',
    subtitle: 'Travel Planning Platform',
    overview:
      'JustGo is a travel planning platform built with HTML, CSS, and JavaScript that helps users organize trips through travel guides, itinerary planning tools, and packing lists.',
    challenge:
      'Travelers often rely on multiple platforms to plan trips, resulting in a fragmented and inefficient experience.',
    solution:
      'Created a responsive web application that centralizes travel resources and planning tools in a single platform.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Travel destination guides',
      'Interactive itinerary planner',
      'Packing checklist',
      'Responsive design',
      'User-friendly interface',
    ],
    outcome:
      'Delivered a practical travel planning solution that simplifies trip organization and enhances travel preparation.',
    githubUrl: 'https://github.com/RifqyAndrian/JustGo',
    gradient: 'from-orange-500 via-rose-500 to-pink-500',
    icon: '✈️',
    category: 'Frontend',
    image: '/projects/justgo.webp',
  },
  {
    id: 'mailboutique',
    title: 'MaiBoutique',
    subtitle: 'PHP E-Commerce Platform',
    overview:
      'MaiBoutique is an e-commerce fashion platform developed with Laravel and PHP, offering a diverse collection of clothing for various styles, occasions, and budgets.',
    challenge:
      'Customers often struggle to find quality clothing that matches their preferences and budget among countless online fashion stores.',
    solution:
      'Built a responsive web application that enables users to browse, explore, and purchase clothing easily through intuitive navigation and a seamless shopping experience.',
    technologies: ['PHP', 'Laravel'],
    features: [
      'Extensive fashion product catalog',
      'Category-based browsing',
      'Responsive design',
      'User-friendly shopping experience',
      'Secure purchasing workflow',
    ],
    outcome:
      'Delivered a scalable fashion e-commerce platform that helps users discover and purchase apparel more efficiently.',
    githubUrl: 'https://github.com/RifqyAndrian/Mailboutique',
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    icon: '📧',
    category: 'Backend',
    image: '/projects/maiboutique.webp',
  },
];

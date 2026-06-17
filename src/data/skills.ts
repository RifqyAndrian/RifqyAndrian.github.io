import {
  SiPhp, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb,
  SiBootstrap, SiTailwindcss, SiGit, SiPostman, SiSelenium,
  SiCypress,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi, TbDatabase } from 'react-icons/tb';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  tooltip: string;
  experience: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    description: 'Server-side technologies & API development',
    skills: [
      {
        name: 'PHP',
        icon: SiPhp,
        color: '#777BB4',
        tooltip: 'Server-side scripting & MVC frameworks',
        experience: '2+ years',
      },
      {
        name: 'Java',
        icon: FaJava,
        color: '#ED8B00',
        tooltip: 'OOP, desktop apps & backend services',
        experience: '2+ years',
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
        tooltip: 'Server-side JavaScript runtime',
        experience: '1+ year',
      },
      {
        name: 'REST API',
        icon: TbApi,
        color: '#38BDF8',
        tooltip: 'RESTful API design & integration',
        experience: '2+ years',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        color: '#FF6C37',
        tooltip: 'API testing & documentation',
        experience: '2+ years',
      },
    ],
  },
  {
    title: 'Database',
    description: 'Data storage, modeling & query optimization',
    skills: [
      {
        name: 'MySQL',
        icon: SiMysql,
        color: '#4479A1',
        tooltip: 'Relational database management',
        experience: '2+ years',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169E1',
        tooltip: 'Advanced relational databases',
        experience: '1+ year',
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
        tooltip: 'NoSQL document database',
        experience: '1+ year',
      },
      {
        name: 'Database Design',
        icon: TbDatabase,
        color: '#8B5CF6',
        tooltip: 'Schema design & normalization',
        experience: '2+ years',
      },
    ],
  },
  {
    title: 'Frontend',
    description: 'UI development, testing & quality assurance',
    skills: [
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',
        tooltip: 'ES6+, DOM manipulation, async patterns',
        experience: '2+ years',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178C6',
        tooltip: 'Type-safe JavaScript development',
        experience: '1+ year',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
        tooltip: 'Component-based UI development',
        experience: '1+ year',
      },
      {
        name: 'HTML5',
        icon: SiHtml5,
        color: '#E34F26',
        tooltip: 'Semantic markup & accessibility',
        experience: '3+ years',
      },
      {
        name: 'CSS3',
        icon: SiCss,
        color: '#1572B6',
        tooltip: 'Responsive design & animations',
        experience: '3+ years',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
        tooltip: 'Utility-first CSS framework',
        experience: '1+ year',
      },
      {
        name: 'Bootstrap',
        icon: SiBootstrap,
        color: '#7952B3',
        tooltip: 'Responsive UI components',
        experience: '2+ years',
      },
      {
        name: 'Selenium',
        icon: SiSelenium,
        color: '#43B02A',
        tooltip: 'Automated browser testing',
        experience: '1+ year',
      },
      {
        name: 'Cypress',
        icon: SiCypress,
        color: '#69D3A7',
        tooltip: 'E2E testing framework',
        experience: '1+ year',
      },
      {
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
        tooltip: 'Version control & collaboration',
        experience: '2+ years',
      },
    ],
  },
];

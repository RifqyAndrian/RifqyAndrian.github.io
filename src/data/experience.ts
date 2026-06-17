export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  logo: {
    text: string;
    bgColor: string;
    textColor: string;
  };
}

export const experiences: WorkExperience[] = [
  {
    id: 'transsion',
    role: 'Third Party Application Tester',
    company: 'Transsion Indonesia',
    type: 'Contract',
    startDate: 'Aug 2025',
    endDate: 'Oct 2025',
    bullets: [
      'Conduct Android app testing to ensure performance, functionality, and compatibility across Transsion devices.',
      'Develop and execute test cases through all development stages, including Alpha, Beta, and Regression testing.',
      'Identify, track, and resolve software issues using JIRA collaborating closely with software engineers to improve quality and user experience.',
      'Support application updates and version control to maintain system stability and reliability.',
      'Create and submit detailed user scenarios to support comprehensive testing coverage.',
    ],
    logo: {
      text: 'Transsion\nIndonesia',
      bgColor: '#2E3138',
      textColor: '#9CA3AF',
    },
  },
  {
    id: 'arranet',
    role: 'Software Quality Assurance',
    company: 'PT Arranet Indonesia Sejahtera',
    type: 'Internship',
    startDate: 'Oct 2023',
    endDate: 'Aug 2024',
    bullets: [
      'Created and executed test plans and test cases, covering positive and negative scenarios, to validate software functionality across platforms.',
      'Assisted software engineers in API, UI, and functional testing by reporting and documenting bugs.',
      'Conducted manual testing for web and mobile applications.',
      'Executed test cases during UAT phases, gathering stakeholder feedback.',
      'Monitored project progress on Trello, ensuring timely updates.',
      'Collaborated with software engineers and internal teams to resolve issues and improve software quality.',
      'Prepared bug reports and verified defect resolutions.',
    ],
    logo: {
      text: 'aranet',
      bgColor: '#0066FF',
      textColor: '#FFFFFF',
    },
  },
];

export type Experience = {
  date: string;
  company: string;
  companyUrl: string;
  role: string;
  about: string;
  stack: string[];
};

const data: Experience[] = [
  {
    date: 'April 2022 — Present',
    company: 'Geodeip IP',
    companyUrl: 'https://www.geodeip.com',
    role: 'Sr. Frontend Developer',
    about: `Collaborating with teams, including engineers,
          clients, and stakeholders, I built maintainable components to
        accommodate rapid requirement changes and support customer acquisitions.
        Working closely with a UI/UX designer, I contributed to designing the
        app theme, repository architecture, and domain design. Additionally, I
        played a role in solidifying the direction of product features.`,
    stack: [
      'Typescrict',
      'Javascript',
      'React',
      'Apollo GraphQl',
      'Emotion JS',
      'Material UI V5',
    ],
  },
  {
    date: '2023',
    company: 'Quantum IR',
    companyUrl: 'https://www.quantumir.com',
    role: 'Project Lead (Contractor)',
    about: `Converted old jQuery code base to a React / Electron desktop application, and simplified the 
            data fetching layer with abstractions and patterns for better maintainability. Project lead for a three 
            person dev team building a new cloud based analytics application hosted with AWS infrastructure.`,
    stack: [
      'Typescrict',
      'Javascript',
      'React',
      'Apollo GraphQl',
      'Emotion JS',
      'Material UI V5',
      'AWS Amplify',
      'AWS Real Time DB',
      'AWS Lambda / App Sync',
    ],
  },
  {
    date: 'Aug 2021 - April 2022',
    company: 'Evolve MEP',
    companyUrl: 'https://www.evolvemep.com',
    role: 'Sr. Frontend Developer',
    about: `led multiple module designs and teams, established GitHub test workflows, 
          developed a Graphql data API, collaborated with product teams, aligned product 
          goals with company objectives, and conducted code reviews to ensure quality and best practices.`,
    stack: [
      'Javascript',
      'React',
      'Apollo GraphQl',
      'Material UI V4',
      'AWS App Sync',
    ],
  },
  {
    date: 'Jun 2019 - Aug 2021',
    company: 'Storage Craft (now arcserve)',
    companyUrl: 'https://www.arcserve.com',
    role: 'Frontend Developer',
    about: `Fixed critical bugs in our support app wich allowed for more customer 
        support throughput, converted Sencha JS app to React, 
        implemented OAuth, developed a GraphQL server stack, and 
        wrote unit tests for code quality.`,
    stack: [
      'Javascript',
      'React',
      'Apollo GraphQl',
      'Express',
      'Material UI V4',
      'Firebase',
      'Sencha JS',
    ],
  },
  {
    date: 'Jun 2018 - April 1019',
    company: 'Exact Sciences',
    companyUrl: 'https://www.exactsciences.com',
    role: 'Intern',
    about: `This is where my career began. I wrote a ton java and got my feet wet in 
          the industry writting software. I learned about systems, unit testing, team collaboration and 
          other software basics.`,
    stack: ['Javascript', 'Java', 'Postgress DB'],
  },
];

export default data;

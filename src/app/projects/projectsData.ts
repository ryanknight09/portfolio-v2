import bitcoin from '../../assets/images/projects/btc.png';
import portfolioV1 from '../../assets/images/projects/portfolio.png';
import spotify from '../../assets/images/projects/spotify/spot1.png';

export type Project = {
  name: string;
  description?: string;
  stack: string[];
  githubUrl: string;
  hostedUrl?: string;
  img: string;
};

const data: Project[] = [
  {
    name: 'Spotify Clone',
    description:
      '* Unable to host due to spotify attribution. Code is availbe on my github, Id love to show it off in a meetup!',
    stack: [
      'React',
      'React Query',
      'Spotify API',
      'MUI-V5',
      'Typescript',
      'Nx Dev',
      'Firebase',
    ],
    githubUrl: 'https://github.com/ryanknight09/spotify',
    img: spotify,
  },
  {
    name: 'Portfolio V1.0',
    stack: ['React', 'React-Router', ' HashLink', 'Styled-Components'],
    githubUrl: 'https://github.com/ryanknight09/portfolio',
    hostedUrl: 'https://ryan-knight.web.app',
    img: portfolioV1,
  },
  {
    name: 'Bitcoin Mining Game',
    stack: ['React', 'Javascript', 'JSS'],
    githubUrl: 'https://github.com/ryanknight09/bitcoin-miner',
    hostedUrl: 'https://bitcoin-miner-c247a.web.app/',
    img: bitcoin,
  },
];

export default data;

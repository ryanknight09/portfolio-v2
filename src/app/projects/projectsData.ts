import bitcoin from '../../assets/images/projects/btc.png';
import portfolioV1 from '../../assets/images/projects/portfolio.png';
import spotify from '../../assets/images/projects/spotify/spot1.png';

export type Project = {
  name: string;
  description: string;
  note?: string;
  stack: string[];
  githubUrl: string;
  hostedUrl?: string;
  img: string;
};

const data: Project[] = [
  {
    name: 'Spotify Clone',
    description:
      'A full clone of the Spotify application with Oauth. Wide open Api use is subject to Spotify approval.',
    note: '* Unable to host due to spotify attribution. Code is availbe on my github, I would love to show it off in a meetup!',
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
    description: 'My old and first portfolio app.',
    stack: ['React', 'React-Router', ' HashLink', 'Styled-Components'],
    githubUrl: 'https://github.com/ryanknight09/portfolio',
    hostedUrl: 'https://ryan-knight.web.app',
    img: portfolioV1,
  },
  {
    name: 'Bitcoin Mining Game',
    description: `A simple game that tracks the real time price of Bitcion via an api. 
      You are timed and the number of total coins you click equals to value of your Bitcoin.`,
    stack: ['React', 'Javascript', 'JSS'],
    githubUrl: 'https://github.com/ryanknight09/bitcoin-miner',
    hostedUrl: 'https://bitcoin-miner-c247a.web.app/',
    img: bitcoin,
  },
];

export default data;

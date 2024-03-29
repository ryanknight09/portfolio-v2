import bitcoin from '../../assets/images/projects/btc.png';
import dictionary from '../../assets/images/projects/dictionary.png';
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
    name: 'Dictionary',
    description:
      'A searchable dictionary. This showcases input debouncing, light/dark mode theming, dynamic font selection and responsivness.',
    stack: [
      'React',
      'vite',
      'React Query',
      'MUI-V5',
      'Typescript',
      'Nx Dev',
      'Firebase',
    ],
    githubUrl: 'https://github.com/ryanknight09/dictionary',
    hostedUrl: 'https://dictionary-client.web.app/',
    img: dictionary,
  },
  {
    name: 'Spotify Clone',
    description:
      'A full clone of the Spotify application with Oauth. Wide open Api use is subject to Spotify approval.',
    note: '* Unable to host due to spotify attribution. Code is availbe on my github, I would love to show it off in a meetup!',
    stack: [
      'React',
      'vite',
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

import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import { ReactComponent as GithubIcon } from '../assets/images/icon-github.svg';
import Project1 from '../assets/images/project-1.webp';

export const ProjectCard = () => (
  <Card sx={{ backgroundColor: (theme) => theme.palette.secondary.light }}>
    <CardMedia sx={{ height: '20rem' }} image={Project1} title="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        Design Portfolio
      </Typography>
      <Typography variant="body2" color="primary.main">
        html, css, typescript
      </Typography>
    </CardContent>
    <CardActions>
      <a
        href={'https://github.com/ryanknight09'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <GithubIcon />
        </IconButton>
      </a>
      <a
        href={'https://github.com/ryanknight09'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton color="primary">
          <LaunchRoundedIcon />
        </IconButton>
      </a>
    </CardActions>
  </Card>
);

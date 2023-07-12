import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { ReactComponent as GithubIcon } from '../../assets/images/icon-github.svg';
import type { Project } from './projectsData';

export const ProjectCard = ({
  name,
  description,
  stack,
  githubUrl,
  hostedUrl,
  img,
}: Project) => (
  <SxCard>
    <CardMedia sx={{ height: '16rem' }} image={img} title="green iguana" />
    <CardContent>
      <Stack gap=".5rem">
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <ChipContainer>
          {stack.map((item) => (
            <Chip
              variant="outlined"
              key={item}
              label={item}
              size="small"
              color="success"
            />
          ))}
        </ChipContainer>
        {description && (
          <Typography
            variant="body2"
            color="primary.main"
            sx={{ fontSize: '.875rem' }}
          >
            {description}
          </Typography>
        )}
      </Stack>
    </CardContent>
    <CardActions sx={{ marginTop: 'auto' }}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <IconButton>
          <GithubIcon />
        </IconButton>
      </a>
      {hostedUrl && (
        <a href={hostedUrl} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary">
            <LaunchRoundedIcon />
          </IconButton>
        </a>
      )}
    </CardActions>
  </SxCard>
);

const SxCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  boxShadow: `0px 0px 1px ${theme.palette.secondary.main}, 0px 2px 8px 0px black`,
  display: 'flex',
  flexDirection: 'column',
}));

const ChipContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
}));

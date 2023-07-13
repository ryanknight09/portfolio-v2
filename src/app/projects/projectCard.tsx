import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import {
  Box,
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
  note,
}: Project) => (
  <Grid>
    <Image src={img} />
    <Stack gap="1rem">
      <CompanyContainer>
        <Typography
          variant="body1"
          color="primary.light"
          sx={{ fontWeight: 700 }}
        >
          {name}
        </Typography>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <IconButton size="small">
            <GithubIcon fontSize="small" />
          </IconButton>
        </a>
        {hostedUrl && (
          <a href={hostedUrl} target="_blank" rel="noopener noreferrer">
            <IconButton color="primary" size="small">
              <LaunchRoundedIcon fontSize="small" />
            </IconButton>
          </a>
        )}
      </CompanyContainer>
      <Typography
        variant="body2"
        color="primary.main"
        sx={{ fontSize: '.875rem' }}
      >
        {description}
      </Typography>
      {note && (
        <Typography
          variant="body2"
          color="info.main"
          sx={{ fontSize: '.875rem' }}
        >
          {note}
        </Typography>
      )}
      <ChipContainer>
        {stack.map((item) => (
          <Chip
            variant="outlined"
            key={item}
            label={item}
            size="small"
            color="primary"
          />
        ))}
      </ChipContainer>
    </Stack>
  </Grid>
);

const Grid = styled(Box)(({ theme }) => ({
  maxWidth: '700px',
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  [theme.breakpoints.up(760)]: {
    gridTemplateColumns: '1fr 2.5fr',
    gridTemplateRows: 'unset',
  },
}));

const CompanyContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
}));

const Image = styled('img')(({ theme }) => ({
  gridRow: '-1/2',
  marginTop: '.25rem',
  objectFit: 'contain',
  width: '12rem',
  border: `2px solid ${theme.palette.secondary.light}`,
  borderRadius: '.5rem',
  boxShadow: `0px 0px 1px ${theme.palette.secondary.light}, 2px 2px 12px 0px black`,
}));

const ChipContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
}));

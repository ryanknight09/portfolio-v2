import { Box, Stack, Typography, styled } from '@mui/material';

import { ProjectCard } from './projectCard';
import data from './projectsData';

export const Projects = () => (
  <Stack gap="1.5rem">
    <Title>Projects</Title>
    <Grid>
      {data.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </Grid>
  </Stack>
);

const Grid = styled(Box)(() => ({
  width: '100%',
  display: 'grid',
  gap: '1.75rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr));',
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: '1.75rem',
  [theme.breakpoints.up(760)]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up(1440)]: {
    ...theme.typography.h2,
  },
}));

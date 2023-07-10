import { Box, Stack, Typography, styled } from '@mui/material';

import { ProjectCard } from './projectCard';
// import Project2 from '../assets/images/project-2.webp';
// import Project3 from '../assets/images/project-3.webp';
// import Project4 from '../assets/images/project-4.webp';
// import Project5 from '../assets/images/project-5.webp';
// import Project6 from '../assets/images/project-6.webp';

export const Projects = () => (
  <Stack gap="1.5rem">
    <Title>Projects</Title>
    <Grid>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Grid>
  </Stack>
);

const Grid = styled(Box)(() => ({
  width: '100%',
  display: 'grid',
  gap: '1rem',
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

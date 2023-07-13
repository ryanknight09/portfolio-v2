import { Stack, Typography, styled } from '@mui/material';

import { ProjectCard } from './ProjectCard';
import data from './projectsData';

export const Projects = () => (
  <Stack gap="1.5rem">
    <Title>Projects</Title>
    <ProjectsContainer>
      {data.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </ProjectsContainer>
  </Stack>
);

const ProjectsContainer = styled(Stack)(({ theme }) => ({
  gap: '3rem',
  width: '100%',
  [theme.breakpoints.up(760)]: {
    alignItems: 'flex-end',
  },
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

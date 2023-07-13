import { Stack, Typography, styled } from '@mui/material';

import workExperience from './exp';
import { ExperienceCard } from './experienceCard';

export const Experience = () => (
  <Stack gap="1.5rem">
    <Title>Experience</Title>
    <Stack gap="2rem" width="100%" alignItems={'flex-end'}>
      {workExperience.map((item) => (
        <ExperienceCard key={item.company} {...item} />
      ))}
    </Stack>
  </Stack>
);

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

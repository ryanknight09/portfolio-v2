import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import {
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import type { Experience } from './exp';

export const ExperienceCard = ({
  date,
  company,
  companyUrl,
  role,
  about,
  stack,
}: Experience) => (
  <Grid>
    <Typography variant="body2" color="primary.main" mt=".5rem">
      {date}
    </Typography>
    <Stack gap=".5rem">
      <CompanyContainer>
        <Typography
          variant="body1"
          color="primary.light"
          sx={{ fontWeight: 700 }}
        >
          {`${role} · ${company}`}
        </Typography>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary">
            <LaunchRoundedIcon fontSize="small" color="success" />
          </IconButton>
        </a>
      </CompanyContainer>
      <Typography
        variant="body2"
        color="primary.main"
        sx={{ fontSize: '.875rem' }}
      >
        {about}
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
    </Stack>
  </Grid>
);

const Grid = styled(Box)(({ theme }) => ({
  maxWidth: '700px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up(760)]: {
    gridTemplateColumns: '1fr 2fr',
  },
}));

const CompanyContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
}));

const ChipContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
}));

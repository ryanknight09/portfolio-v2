import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { Box, IconButton, Stack, Typography, styled } from '@mui/material';

type ExperienceCardProps = {
  date: string;
  company: string;
  role: string;
  about: string;
  stack: string[];
};

export const ExperienceCard = ({
  date,
  company,
  role,
  about,
  stack,
}: ExperienceCardProps) => (
  <Grid>
    <Typography variant="body2" color="primary.main">
      {date}
    </Typography>
    <Stack>
      <Box sx={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Typography
          variant="body1"
          color="primary.light"
          sx={{ fontWeight: 700 }}
        >
          {`${role} · ${company}`}
        </Typography>
        <IconButton color="primary">
          <LaunchRoundedIcon fontSize="small" color="success" />
        </IconButton>
      </Box>
      <Typography
        variant="body2"
        color="primary.main"
        sx={{ fontSize: '.875rem' }}
      >
        {about}
      </Typography>
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

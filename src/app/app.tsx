import { Button, Stack, Typography } from '@mui/material';

import Theme from './theme/theme';

export function App() {
  return (
    <Theme>
      <Stack
        sx={{
          gap: '1rem',
          alignItems: 'flex-start',
          height: '100vh',
          padding: '5rem',
          backgroundColor: (theme) => theme.palette.secondary.main,
        }}
      >
        <Typography variant="h1">Nice to meet you! (XL)</Typography>
        <Typography variant="h1">I'm Ryan Knight.</Typography>
        <Typography variant="h2">Heading (L)</Typography>
        <Typography variant="h3">Heading (M)</Typography>
        <Typography variant="body1">
          This is Body (L). Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat.
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat.
        </Typography>
        <Button variant="text">Contact Me</Button>
      </Stack>
    </Theme>
  );
}

export default App;

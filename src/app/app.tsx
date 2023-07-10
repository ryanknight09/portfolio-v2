import { Box, Container, Divider, Stack, styled } from '@mui/material';

import Hero from './hero';
import { Projects } from './projects';
import Theme from './theme/theme';

export function App() {
  return (
    <Theme>
      <AppWrapper>
        <SxContainer>
          <Stack gap="4.5rem">
            <Hero />
            <SxDivider />
            <Projects />
          </Stack>
        </SxContainer>
      </AppWrapper>
    </Theme>
  );
}

export default App;

const AppWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  backgroundColor: theme.palette.secondary.main,
}));

const SxContainer = styled(Container)(() => ({
  height: '100%',
  paddingBottom: '1.25rem',
  overflowY: 'scroll',
}));

const SxDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  height: '.1875rem',
}));

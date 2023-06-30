import { Box, Container, styled } from '@mui/material';

import Hero from './hero/hero';
import Theme from './theme/theme';

export function App() {
  return (
    <Theme>
      <AppWrapper>
        <SxContainer>
          <Hero />
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

const SxContainer = styled(Container)(({ theme }) => ({
  height: '100%',
}));

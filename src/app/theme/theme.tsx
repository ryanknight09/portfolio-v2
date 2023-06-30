import type { FC, PropsWithChildren } from 'react';

import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import SpaceGroteskVariableFont from './fonts/SpaceGrotesk-VariableFont_wght.ttf';
import globalStyles from './globalStyles';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette: palette,
  typography: typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Space Grotesk';
          src: url(${SpaceGroteskVariableFont}) format('truetype');
          font-weight: 100 1000;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        color: 'primary.light',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderBottom: '3px solid #4EE1A0',
        },
      },
    },
  },
});

export const Theme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;

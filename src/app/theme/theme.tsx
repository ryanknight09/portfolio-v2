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
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          borderRadius: 0,
          textTransform: 'none',
          borderBottom: `0.125rem solid ${palette.success.main}`,
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

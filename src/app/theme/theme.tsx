import type { FC, PropsWithChildren } from 'react';

import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import globalStyles from './globalStyles';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette: palette,
  typography: typography,
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'primary.light',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          borderRadius: 0,
          textTransform: 'none',
          borderBottom: `0.125rem solid #4EE1A0`,
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

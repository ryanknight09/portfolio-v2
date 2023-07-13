import { Box, IconButton, Stack, Typography, styled } from '@mui/material';

import { ReactComponent as GithubIcon } from '../assets/images/icon-github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/images/icon-linkedin.svg';

export const Footer = () => (
  <FooterWrapper>
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <a
        href={'https://www.linkedin.com/in/ryan-knight09'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </a>
      <a
        href={'https://github.com/ryanknight09'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <GithubIcon />
        </IconButton>
      </a>
    </Box>
    <Stack>
      <Typography color="primary" variant="body2">
        {`Designed in `}
        <Link
          href={'https://www.figma.com/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </Link>
        {`, made with `}
        <Link
          href={'https://react.dev/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </Link>
        {`,and `}
        <Link
          href={'https://mui.com/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Material UI
        </Link>
        .
      </Typography>
      <Typography color="primary" variant="body2">
        This is the end... Hopefully not, reach out on{' '}
        <Link
          href={'https://www.linkedin.com/in/ryan-knight09'}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>{' '}
        and lets chat!
      </Typography>
    </Stack>
  </FooterWrapper>
);

const Link = styled('a')(({ theme }) => ({
  color: theme.palette.info.main,
  textDecoration: 'none',
}));

const FooterWrapper = styled(Stack)(({ theme }) => ({
  margin: '6rem 0 5rem 0',
  gap: '1rem',
  [theme.breakpoints.up(760)]: {
    alignItems: 'flex-end',
  },
}));

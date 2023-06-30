import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { ReactComponent as GithubIcon } from '../../assets/images/icon-github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/icon-linkedin.svg';

const Hero = () => (
  <HeroWrapper>
    <SpaceBetween>
      <Caption>ryanknight</Caption>
      <Icons>
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary">
          <GithubIcon />
        </IconButton>
      </Icons>
    </SpaceBetween>
    <Typography variant="h1">Nice to meet you!</Typography>
    <Name>
      I'm <span>Ryan Knight</span>.
    </Name>
    <Typography variant="body1" mt="3rem" mb="4rem" maxWidth="27rem">
      Based in Spokane Washington, I’m a front-end developer passionate about
      building accessible web apps that users love.
    </Typography>
    <Button>Contact Me</Button>
  </HeroWrapper>
);

export default Hero;

const HeroWrapper = styled(Stack)(({ theme }) => ({
  paddingTop: '2.5rem',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
}));

const SpaceBetween = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8rem',
}));

const Caption = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  lineHeight: '2rem',
}));

const Name = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  span: {
    borderBottom: `.375rem solid ${theme.palette.success.main}`,
  },
}));

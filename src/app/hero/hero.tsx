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
import ProfileImage from '../../assets/images/image-profile-desktop.webp';

const Hero = () => (
  <HeroWrapper>
    <HeadingContent>
      <Caption>ryanknight</Caption>
      <Icons>
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary">
          <GithubIcon />
        </IconButton>
      </Icons>
    </HeadingContent>
    <Content>
      <Greeting>
        Nice to meet you! I'm <span>Ryan Knight</span>.
      </Greeting>
      <About>
        Based in Spokane Washington, I’m a front-end developer passionate about
        building accessible web apps that users love.
      </About>
      <Button sx={{ marginTop: '2.25rem' }}>Contact Me</Button>
    </Content>
    <ProfileImg src={ProfileImage} alt="profile-image" />
  </HeroWrapper>
);

export default Hero;

const overLapGrid = '1/2';

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  width: '100%',
  zIndex: 10,
}));

const HeadingContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gridRow: overLapGrid,
  gridColumn: '1/-1',
  zIndex: 10,
  paddingTop: '2.5rem',
}));

const Content = styled(Stack)(() => ({
  marginTop: '4rem',
  gap: '2.5rem',
  zIndex: 10,
  gridColumn: '1/7',
  gridRow: overLapGrid,
  alignSelf: 'center',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  marginRight: '1rem',
}));

const Caption = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  lineHeight: '2rem',
}));

const Greeting = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  span: {
    borderBottom: `.375rem solid ${theme.palette.success.main}`,
  },
}));

const About = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  width: '27rem',
}));

const ProfileImg = styled('img')(({ theme }) => ({
  marginLeft: 'auto',
  width: '27rem',
  gridColumn: '5/-1',
  gridRow: overLapGrid,
  zIndex: 1,
}));

import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { ReactComponent as GithubIcon } from '../assets/images/icon-github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/images/icon-linkedin.svg';
import ProfileImage from '../assets/images/image-profile-desktop.jpg';

const Hero = () => (
  <HeroWrapper>
    <HeadingContent>
      <Caption>ryanknight</Caption>
      <Icons>
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
      </Icons>
    </HeadingContent>
    <ImageWrapper>
      <Image src={ProfileImage} alt="profile" />
    </ImageWrapper>
    <Content>
      <Greeting>
        Nice to meet you! I'm <span>Ryan Knight</span>.
      </Greeting>
      <About>
        Based in Spokane Washington, I’m a front-end developer passionate about
        building accessible web apps that users love.
      </About>
    </Content>
    <ContactMe>Contact Me</ContactMe>
  </HeroWrapper>
);

export default Hero;

const overLapGrid = '1/2';

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  width: '100%',
}));

const HeadingContent = styled(Stack)(({ theme }) => ({
  zIndex: 10,
  alignItems: 'center',
  gap: '.5rem',
  gridRow: overLapGrid,
  gridColumn: '1/-1',
  paddingTop: '1.25rem',
  [theme.breakpoints.up(760)]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
}));

const Content = styled(Stack)(({ theme }) => ({
  height: '100%',
  zIndex: 10,
  gridColumn: '1/-1',
  marginTop: '2.5rem',
  [theme.breakpoints.up(760)]: {
    justifyContent: 'center',
    gridColumn: '1/6',
    gridRow: overLapGrid,
  },
  [theme.breakpoints.up(900)]: {
    justifyContent: 'center',
    gridColumn: '1/7',
    gridRow: overLapGrid,
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
}));

const Caption = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  lineHeight: '2rem',
}));

const Greeting = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: '2.5rem',
  textAlign: 'center',
  span: {
    borderBottom: `.25rem solid ${theme.palette.success.main}`,
  },
  [theme.breakpoints.up(760)]: {
    fontSize: '4rem',
    lineHeight: '4.5rem',
    textAlign: 'start',
    span: {
      borderBottom: `.375rem solid ${theme.palette.success.main}`,
    },
  },
  [theme.breakpoints.up(1440)]: {
    ...theme.typography.h1,
    textAlign: 'start',
    span: {
      borderBottom: `.375rem solid ${theme.palette.success.main}`,
    },
  },
}));

const About = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  marginTop: '1.25rem',
  textAlign: 'center',
  [theme.breakpoints.up(760)]: {
    ...theme.typography.body1,
    width: '27rem',
    marginTop: '3.75rem',
    textAlign: 'start',
    span: {
      borderBottom: `.375rem solid ${theme.palette.success.main}`,
    },
  },
}));

const ContactMe = styled(Button)(({ theme }) => ({
  zIndex: 10,
  gridColumn: '1/-1',
  margin: '1.5rem auto',
  [theme.breakpoints.up(760)]: {
    margin: 0,
  },
}));

const ImageWrapper = styled(Stack)(({ theme }) => ({
  gridColumn: '1/-1',
  gridRow: overLapGrid,
  margin: '0 auto',
  height: '24rem',
  justifyContent: 'flex-end',
  zIndex: 1,
  width: '11rem',
  [theme.breakpoints.up(760)]: {
    gridColumn: '5/-1',
    margin: '0 0 0 auto',
    width: '18rem',
    height: '34.5rem',
  },
  [theme.breakpoints.up(900)]: {
    gridColumn: '5/-1',
    margin: '0 0 0 auto',
    width: '20rem',
    height: '37.5rem',
  },
}));

const Image = styled('img')(({ theme }) => ({
  boxShadow: `0px 0px 1px ${theme.palette.secondary.main}, 0px 4px 16px 0px ${theme.palette.grey[600]}`,
  borderRadius: '.25rem',
}));

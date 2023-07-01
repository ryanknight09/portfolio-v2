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
    <ImageWrapper>
      <img src={ProfileImage} alt="profile" />
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
    gridColumn: '1/7',
    gridRow: overLapGrid,
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  [theme.breakpoints.up(760)]: {
    marginRight: '1rem',
  },
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
  backgroundColor: '#242424',
  gridColumn: '1/-1',
  gridRow: overLapGrid,
  margin: '0 auto',
  height: '24rem',
  justifyContent: 'flex-end',
  boxShadow: `0px 0px 1px ${theme.palette.grey[800]}, 0px 10px 22px 0px ${theme.palette.grey[800]}`,
  zIndex: 1,
  width: '12rem',
  [theme.breakpoints.up(500)]: {
    width: '15rem',
    height: '28rem',
  },
  [theme.breakpoints.up(760)]: {
    gridColumn: '5/-1',
    margin: '0 0 0 auto',
    width: '20rem',
    height: '37.5rem',
  },
}));

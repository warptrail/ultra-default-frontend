import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  PhotoBg,
  BackgroundOverlay,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowUp,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElement';
import backgroundImage from '../../images/neon-background.png';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <BackgroundOverlay />
        {/* <PhotoBg src={backgroundImage} /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Ultra Default</HeroH1>
        <HeroP>
          This is the default Warptrail web page and application template.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/app-gallery"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowUp /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

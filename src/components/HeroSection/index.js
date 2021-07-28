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
import backGround from '../../images/new-york-background.jpg';

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
        <PhotoBg src={backGround} />
      </HeroBg>
      <HeroContent>
        <HeroH1>New York TImes Best Sellers</HeroH1>
        <HeroP>
          This App will search and sort through a read-only json database to
          demonstrate how a client communicates with an API.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
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

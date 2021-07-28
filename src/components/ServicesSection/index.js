import React from 'react';
import Icon1 from '../../images/undraw-img-7.svg';
import Icon2 from '../../images/undraw-img-6.svg';
import Icon3 from '../../images/undraw-img-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Warped Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Widgets</ServicesH2>
          <ServicesP>Widgets are useful for tasks</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Trinkets</ServicesH2>
          <ServicesP>Trinkets increase production value</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Relics</ServicesH2>
          <ServicesP>Relics will boost absorption rates</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;

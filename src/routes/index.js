import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo } from '../Data';

const Home = () => {
  // Code to scroll to specific id when changing route
  // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname]); // do this on route change
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjThree} /> */}
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;

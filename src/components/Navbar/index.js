import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars, FaRoad } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoText,
  MobileIcon,
} from './NavbarElements';

import DynamicMenu from '../DynamicMenu';

const Navbar = ({ toggle }) => {
  const currentURL = useLocation();
  console.log(currentURL);
  const [scrollNav, setScrollNav] = useState(false);

  // when past a particular point, trigger the transparent nav background
  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav} isHomePage={currentURL.pathname === '/'}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavLogoText>warptrail</NavLogoText>
            <FaRoad />
          </NavLogo>
          <DynamicMenu urlPathname={currentURL.pathname} mobileView={false} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

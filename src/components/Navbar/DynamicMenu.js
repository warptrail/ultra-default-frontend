import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavSignupLink,
  NavLinkBackToHome,
} from './NavbarElements';

const DynamicMenu = ({ urlPathname }) => {
  const [pathnameState, setPathnameState] = useState(urlPathname);

  useEffect(() => {
    setPathnameState(urlPathname);
  }, [urlPathname]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const HomePageMenu = (
    <NavMenu>
      <NavItem>
        <NavLinks
          to="about"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={pathnameState === '/' ? true : false}
          exact="true"
          offset={-80}
        >
          About
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks
          to="discover"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={pathnameState === '/' ? true : false}
          exact="true"
          offset={-80}
        >
          Discover
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks
          to="services"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={pathnameState === '/' ? true : false}
          exact="true"
          offset={-80}
        >
          Services
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavSignupLink onClick={toggleHome} to="/signup">
          Sign Up
        </NavSignupLink>
      </NavItem>
      <NavBtn>
        <NavBtnLink onClick={toggleHome} to="/signin">
          Sign In
        </NavBtnLink>
      </NavBtn>
    </NavMenu>
  );

  const SignUpMenu = (
    <NavMenu>
      <NavItem darkBackground={true}>
        <NavSignupLink to="/signin">Sign In</NavSignupLink>
      </NavItem>
      <NavItem>
        <NavLinkBackToHome to="/#about">About</NavLinkBackToHome>
      </NavItem>
      <NavItem>
        <NavLinkBackToHome to="/#discover">Discover</NavLinkBackToHome>
      </NavItem>
      <NavItem>
        <NavLinkBackToHome to="/#services">Services</NavLinkBackToHome>
      </NavItem>
    </NavMenu>
  );

  const SignInMenu = (
    <NavMenu>
      <NavItem darkBackground={true}>
        <NavSignupLink to="/signup">Sign Up</NavSignupLink>
      </NavItem>
      <NavItem>
        <NavLinkBackToHome to="/#about">About</NavLinkBackToHome>
      </NavItem>
      <NavItem>
        <NavLinkBackToHome to="/#discover">Discover</NavLinkBackToHome>
      </NavItem>
      <NavItem>
        <NavLinkBackToHome to="/#services">Services</NavLinkBackToHome>
      </NavItem>
    </NavMenu>
  );

  const renderMenu = () => {
    if (pathnameState === '/') {
      return HomePageMenu;
    } else if (pathnameState === '/signup') {
      return SignUpMenu;
    } else if (pathnameState === '/signin') {
      return SignInMenu;
    }
  };

  console.log('the urls pathname is ' + pathnameState);
  return <>{renderMenu()}</>;
};

export default DynamicMenu;

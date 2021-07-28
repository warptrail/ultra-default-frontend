import React from 'react';
import {
  SidebarMenu,
  SidebarLink,
  SidebarLinkRouter,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const DynamicMenu = ({ toggle, urlPathname }) => {
  if (urlPathname === '/') {
    return (
      <>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} exact="true" offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle} exact="true" offset={-80}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle} exact="true" offset={-80}>
            Services
          </SidebarLink>
          <SidebarLinkRouter to="/signup" onClick={toggle}>
            Sign Up
          </SidebarLinkRouter>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </>
    );
  } else if (urlPathname === '/signup') {
    return (
      <>
        <SidebarMenu>
          <SidebarLinkRouter to="/#about" onClick={toggle}>
            About
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/#discover" onClick={toggle}>
            Discover
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/#services" onClick={toggle}>
            Services
          </SidebarLinkRouter>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </>
    );
  } else if (urlPathname == '/signin') {
    return (
      <>
        <SidebarMenu>
          <SidebarLinkRouter to="/#about" onClick={toggle}>
            About
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/#discover" onClick={toggle}>
            Discover
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/#services" onClick={toggle}>
            Services
          </SidebarLinkRouter>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signup">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </>
    );
  }
};

export default DynamicMenu;

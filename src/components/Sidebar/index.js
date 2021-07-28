import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarLinkRouter,
} from './SidebarElements';
import DynamicMenu from './DynamicMenu';

const Sidebar = ({ isNavOpen, toggle }) => {
  const currentURL = useLocation();
  return (
    <SidebarContainer isNavOpen={isNavOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <DynamicMenu
          toggle={toggle}
          urlPathname={currentURL.pathname}
        ></DynamicMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

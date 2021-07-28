import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: ${({ isHomePage }) => (isHomePage ? '-80px' : '0px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  position: sticky;
  top: 0rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: ${({ isHomePage }) => (isHomePage ? '0.8s all ease;' : 'none')};
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 12px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoText = styled.span`
  color: #fff;
  margin-right: 12px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -27px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  background-color: ${({ darkBackground }) =>
    darkBackground ? '#010101' : 'transparent'};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavLinkBackToHome = styled(LinkRouter)`
  color: #fff;
  font-size: 80%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSignupLink = styled(LinkRouter)`
  color: #31ec68;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 02s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 02s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

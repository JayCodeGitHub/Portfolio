import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { useHamburger } from '../../hooks/useHamburger/usehamburger';
import { useNavigationScroll } from '../../hooks/useNavigationScroll/useNavigationScroll';
import {
  OuterWrapper,
  NavigationItem,
  LogoWrapper,
  HamburgerWrapper,
  Hamburger,
  Wrapper,
  StyledNavigation,
  StyledMobileNavigation,
} from './Navigation.styles';
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems';

const Navigation = () => {
  const { isOpen, toggleNavigation, setIsOpenFalse } = useHamburger();
  const { isDown, navigation, toggleNavigationScroll } = useNavigationScroll();

  toggleNavigationScroll();

  return (
    <OuterWrapper ref={navigation} isDown={isDown}>
      <Wrapper>
        <LogoWrapper onClick={setIsOpenFalse}>
          <Link to="/" activeClassName="active">
            Jay<span>Code</span>
          </Link>
        </LogoWrapper>
        <StyledNavigation>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavigationItem to={item.href} activeClassName="active">
                {item.name}
              </NavigationItem>
            </li>
          ))}
        </StyledNavigation>
        <HamburgerWrapper onClick={toggleNavigation}>
          <Hamburger isOpen={isOpen} />
        </HamburgerWrapper>
      </Wrapper>
      <StyledMobileNavigation isOpen={isOpen}>
        <ul>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavigationItem
                to={item.href}
                activeClassName="active"
                onClick={setIsOpenFalse}
              >
                {item.name}
              </NavigationItem>
            </li>
          ))}
        </ul>
      </StyledMobileNavigation>
    </OuterWrapper>
  );
};

export default Navigation;

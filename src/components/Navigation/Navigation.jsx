import React, { useState } from 'react';
import { Link } from 'gatsby';
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OuterWrapper>
      <Wrapper>
        <LogoWrapper onClick={() => setIsOpen(false)}>
          <Link to="/" activeClassName="active">
            Jay<span>Code</span>
          </Link>
        </LogoWrapper>
        <StyledNavigation>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavigationItem
                to={item.href}
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavigationItem>
            </li>
          ))}
        </StyledNavigation>
        <HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
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
                onClick={() => setIsOpen(false)}
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

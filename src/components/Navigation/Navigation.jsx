import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  OuterWrapper,
  NavigationItem,
  LogoWrapper,
  BurgerWrapper,
  StyledBurger,
  Wrapper,
  StyledNavigation,
} from './Navigation.styles';
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OuterWrapper>
      <LogoWrapper isMobile onClick={() => setIsOpen(false)}>
        <Link to="/" activeClassName="active">
          Jay<span>Code</span>
        </Link>
      </LogoWrapper>
      <BurgerWrapper onClick={() => setIsOpen(!isOpen)}>
        <StyledBurger isOpen={isOpen} />
      </BurgerWrapper>
      <Wrapper isOpen={isOpen}>
        <LogoWrapper>
          <Link to="/" activeClassName="active">
            Jay<span>Code</span>
          </Link>
        </LogoWrapper>
        <StyledNavigation>
          {NavigationItems.map((item) => (
            <NavigationItem key={item.name}>
              <Link
                to={item.href}
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </NavigationItem>
          ))}
        </StyledNavigation>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHamburger } from '../../hooks/useHamburger/usehamburger';
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

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const { isOpen, toggleNavigation, setIsOpenFalse } = useHamburger();
  const [isDown, setIsDown] = useState(false);

  const navigation = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: navigation.current,
        start: '20% top',
        onLeave: () => setIsDown(true),
        onEnterBack: () => setIsDown(false),
      },
    });
  });
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

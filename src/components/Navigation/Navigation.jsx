import React from 'react';
import { Link } from 'gatsby';
import {
  NavigationWrapper,
  NavigationItem,
  LogoWrapper,
} from './Navigation.styles';
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <LogoWrapper>
        <Link to="/" activeClassName="active">
          Jay<span>Code</span>
        </Link>
      </LogoWrapper>
      <ul>
        {NavigationItems.map((item) => (
          <NavigationItem key={item.name}>
            <Link to={item.href} activeClassName="active">
              {item.name}
            </Link>
          </NavigationItem>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;

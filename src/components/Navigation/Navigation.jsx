import React from 'react';
import { Link } from 'gatsby';
import { NavigationWrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to="/">JayCode</Link>
      <Link to="/about">about</Link>
      <Link to="/experience">experiecne</Link>
      <Link to="/contact">contact</Link>
    </NavigationWrapper>
  );
};

export default Navigation;

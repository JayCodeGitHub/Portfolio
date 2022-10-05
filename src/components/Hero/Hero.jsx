import React from 'react';
import { Link } from 'gatsby';
import Particles from '../Particles/Particles';
import { Wrapper, Header } from './Hero.styles';
import { Button } from '../Button/Button.styles';

function Hero({
  secondary,
  title,
  description,
  firstButton,
  secondButton,
  firstButtonHref,
  secondButtonHref,
}) {
  return (
    <>
      <Wrapper secondary={secondary}>
        <Header secondary={secondary}>
          <h1>{title}</h1>
          {!secondary ? (
            <>
              <p>{description}</p>
              <div>
                <Link to={firstButtonHref}>
                  <Button>{firstButton}</Button>
                </Link>
                <Link to={secondButtonHref}>
                  <Button>{secondButton}</Button>
                </Link>
              </div>
            </>
          ) : null}
        </Header>
        <Particles secondary={secondary} />
      </Wrapper>
    </>
  );
}

export default Hero;

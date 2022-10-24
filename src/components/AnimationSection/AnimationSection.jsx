import React from 'react';
import { Wrapper, SvgWrapper } from './AnimationSection.styles';
import Scene from '../../assets/icons/scene.svg';

const AnimationSection = () => {
  return (
    <Wrapper>
      <SvgWrapper>
        <Scene />
      </SvgWrapper>
      <div>
        <h1>Meet like minded people who face similar challenges</h1>
        <p>Join the discord and get better at building software together.</p>
      </div>
    </Wrapper>
  );
};

export default AnimationSection;

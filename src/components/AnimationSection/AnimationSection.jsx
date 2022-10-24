import React from 'react';
import { Wrapper, SvgWrapper } from './AnimationSection.styles';
import Scene from '../../assets/icons/scene.svg';

const AnimationSection = () => {
  return (
    <Wrapper>
      <h1>Animation Section</h1>
      <SvgWrapper>
        <Scene />
      </SvgWrapper>
    </Wrapper>
  );
};

export default AnimationSection;

import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { Wrapper, Paragraph } from '../assets/styles/pages/about.styles';

const aboutPage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="about" />
      <Wrapper>
        <Paragraph>HIeworjbnrwob</Paragraph>
      </Wrapper>
    </MainTemplate>
  );
};

export default aboutPage;

export function Head() {
  return <title>About</title>;
}

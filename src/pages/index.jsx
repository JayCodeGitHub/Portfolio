import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../assets/styles/pages/homepage.styles';
import AboutSection from '../components/AboutSection/AboutSection';

function IndexPage() {
  return (
    <MainTemplate>
      <Hero
        title="JayCode"
        description="Frontend Developer"
        firstButton="Download my CV"
        firstButtonHref="/contacts"
        secondButton="Let's talk"
        secondButtonHref="/contacts"
      />
      <Wrapper>
        <AboutSection />
      </Wrapper>
    </MainTemplate>
  );
}

export default IndexPage;

export function Head() {
  return <title>JayCode Developer</title>;
}

import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';

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
    </MainTemplate>
  );
}

export default IndexPage;

export function Head() {
  return <title>JayCode Developer</title>;
}

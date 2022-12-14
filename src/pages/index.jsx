import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../assets/styles/pages/homepage.styles';
import AboutSection from '../components/AboutSection/AboutSection';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';
import AnimationSection from '../components/AnimationSection/AnimationSection';

function IndexPage() {
  return (
    <MainTemplate>
      <Hero
        title="JayCode"
        description="Frontend Developer"
        firstButton="Download my CV"
        firstButtonHref="/contact"
        secondButton="Let's talk"
        secondButtonHref="/contact"
      />
      <Wrapper>
        <AboutSection />
        <ProjectsSlider />
        <AnimationSection />
      </Wrapper>
    </MainTemplate>
  );
}

export default IndexPage;

export function Head() {
  return <title>JayCode Developer</title>;
}

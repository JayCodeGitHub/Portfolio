import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import {
  Wrapper,
  StyledSection,
  ImageWrapper,
  DescriptionWrapper,
  StyledImage,
  Title,
  Paragraph,
  StyledTechnologies,
  Technologie,
} from '../assets/styles/pages/about.styles';
import ProfileImage from '../assets/images/profile.jpeg';

const aboutPage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="about" />
      <Wrapper>
        <StyledSection>
          <DescriptionWrapper>
            <Title>About Me</Title>
            <Paragraph>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </Paragraph>
            <Paragraph>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </Paragraph>
            <Title>My Skills</Title>
            <StyledTechnologies>
              <Technologie>React</Technologie>
              <Technologie>JavaScript ES6+</Technologie>
              <Technologie>HTML 5</Technologie>
              <Technologie>CSS</Technologie>
              <Technologie>Tailwind CSS</Technologie>
              <Technologie>TypeSctipt</Technologie>
              <Technologie>Node.js</Technologie>
              <Technologie>GraphQL</Technologie>
              <Technologie>Webpack</Technologie>
              <Technologie>Docker</Technologie>
            </StyledTechnologies>
          </DescriptionWrapper>
          <ImageWrapper>
            <StyledImage src={ProfileImage} />
          </ImageWrapper>
        </StyledSection>
      </Wrapper>
    </MainTemplate>
  );
};

export default aboutPage;

export function Head() {
  return <title>About</title>;
}

import React from 'react';
import { graphql } from 'gatsby';
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

const aboutPage = ({ data }) => {
  const AboutPageItems = {
    title: ['About Me', 'My Skills'],
    paragraph: [
      `
          Hello! My name is Brittany and I enjoy creating things that live
          on the internet. My interest in web development started back in
          2012 when I decided to try editing custom Tumblr themes — turns
          out hacking together a custom reblog button taught me a lot about
          HTML & CSS!
      `,
      `
          Fast-forward to today, and I’ve had the privilege of working at an
           advertising agency, a start-up, a huge corporation, 
           and a student-led design studio. My main focus these days is 
           building accessible, inclusive products and digital experiences 
           at Upstatement for a variety of clients.`,
    ],
    technologies: [
      'React',
      'JavaScript ES6+',
      'HTML 5',
      'CSS',
      'Tailwind CSS',
      'TypeSctipt',
      'Node.js',
      'GraphQL',
      'Webpack',
      'Docker',
    ],
    image: data.file.childImageSharp.fluid,
    alt: 'Profile Image',
  };
  return (
    <MainTemplate>
      <Hero secondary title="about" />
      <Wrapper>
        <StyledSection>
          <DescriptionWrapper>
            <Title>{AboutPageItems.title[0]}</Title>
            <Paragraph>{AboutPageItems.paragraph[0]}</Paragraph>
            <Paragraph>{AboutPageItems.paragraph[1]}</Paragraph>
            <Title>{AboutPageItems.title[1]}</Title>
            <StyledTechnologies>
              {AboutPageItems.technologies.map((item, i) => (
                <Technologie key={i}>{item}</Technologie>
              ))}
            </StyledTechnologies>
          </DescriptionWrapper>
          <ImageWrapper>
            <StyledImage
              src={AboutPageItems.image.src}
              srcSet={AboutPageItems.image.srcSet}
              sizes={AboutPageItems.image.sizes}
              alt={AboutPageItems.alt}
            />
          </ImageWrapper>
        </StyledSection>
      </Wrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  {
    file(name: { eq: "profile" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1200) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`;

export default aboutPage;

export function Head() {
  return <title>About</title>;
}

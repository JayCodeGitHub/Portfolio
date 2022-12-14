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
import { AboutSectionItems } from '../assets/items/AboutPageItems/AboutPageItems';

const aboutPage = () => {
  console.log(AboutSectionItems.title[0]);
  return (
    <MainTemplate>
      <Hero secondary title="about" />
      <Wrapper>
        <StyledSection>
          <DescriptionWrapper>
            <Title>{AboutSectionItems.title[0]}</Title>
            <Paragraph>{AboutSectionItems.paragraph[0]}</Paragraph>
            <Paragraph>{AboutSectionItems.paragraph[1]}</Paragraph>
            <Title>{AboutSectionItems.title[1]}</Title>
            <StyledTechnologies>
              {AboutSectionItems.technologies.map((item, i) => (
                <Technologie key={i}>{item}</Technologie>
              ))}
            </StyledTechnologies>
          </DescriptionWrapper>
          <ImageWrapper>
            <StyledImage
              src={AboutSectionItems.image}
              alt={AboutSectionItems.alt}
            />
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

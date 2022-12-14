import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper } from './AboutSection.styles';
import { Button } from '../Button/Button.styles';

function AboutSection() {
  const data = useStaticQuery(graphql`
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
  `);
  const AboutSectionItems = {
    title:
      'Hi, Im Kent C. Dodds. I help people make the world better through quality software.',
    description: `I'm also a big extreme sports enthusiast. When I'm not hanging out with my family or at the computer you can find me cruising around on my onewheel or hitting the slopes on my snowboard when it's cold.`,
    image: data.file.childImageSharp.fluid,
    href: '/about',
    alt: 'Profile Image',
    button: 'See More',
  };
  return (
    <>
      <Wrapper>
        <div>
          <h1>{AboutSectionItems.title}</h1>
          <p>{AboutSectionItems.description}</p>
          <a href={AboutSectionItems.href}>
            <Button>{AboutSectionItems.button}</Button>
          </a>
        </div>
        <img
          src={AboutSectionItems.image.src}
          srcSet={AboutSectionItems.image.srcSet}
          sizes={AboutSectionItems.image.sizes}
          alt={AboutSectionItems.alt}
        />
      </Wrapper>
    </>
  );
}

export default AboutSection;

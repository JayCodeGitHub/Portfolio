import React from 'react';
import { graphql } from 'gatsby';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../assets/styles/pages/experience.styles';
import ProjectSection from '../components/ProjectSection/ProjectSection';

const experiencePage = ({ data }) => {
  const ProjectsItems = [
    {
      type: 'commercial',
      name: 'Karate-Team',
      href: 'https://karate-team.pl/',
      github: 'https://github.com/JayCodeGitHub/karate-team.pl',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book',
      technologies: [
        'React',
        'Gatsby',
        'Dato CMS',
        'styled-components',
        'GraphQL',
      ],
      image: data.karate.childImageSharp.fluid,
      alt: 'Screenshot from Karate Team desktop website',
    },
    {
      type: 'commercial',
      name: 'Champion-Academy',
      href: 'https://championacademy.pl/',
      github: 'https://github.com/JayCodeGitHub/Final-Champion-Academy',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book',
      technologies: ['React', 'Gatsby', 'Dato CMS', 'tailwind css', 'GraphQL'],
      image: data.champion.childImageSharp.fluid,
      alt: 'Screenshot from Champion Academy desktop website',
    },
    {
      type: 'Non-commercial',
      name: 'Happy-Notes',
      href: 'https://github.com/JayCodeGitHub/Happy-Notes',
      github: 'https://github.com/JayCodeGitHub/Happy-Notes',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book',
      technologies: [
        'React',
        'tailwind css',
        'Rest API',
        'Express JS',
        'Mongo DB',
      ],
      image: data.happy.childImageSharp.fluid,
      alt: 'Screenshot from Happy Notes desktop website',
    },
  ];
  return (
    <MainTemplate>
      <Hero secondary title="experience" />
      <Wrapper>
        {ProjectsItems.map((item, i) => (
          <ProjectSection
            key={i}
            i={i}
            src={item.image.src}
            srcSet={item.image.srcSet}
            sizes={item.image.sizes}
            alt={item.alt}
            type={item.type}
            name={item.name}
            description={item.description}
            technologies={item.technologies}
            href={item.href}
            github={item.github}
          />
        ))}
      </Wrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  {
    karate: file(name: { eq: "karate-team" }) {
      childImageSharp {
        fluid(maxWidth: 3360, maxHeight: 1837) {
          src
          srcSet
          sizes
        }
      }
    }
    champion: file(name: { eq: "champion-academy" }) {
      childImageSharp {
        fluid(maxWidth: 3360, maxHeight: 1837) {
          src
          srcSet
          sizes
        }
      }
    }
    happy: file(name: { eq: "happy-notes" }) {
      childImageSharp {
        fluid(maxWidth: 3354, maxHeight: 2296) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`;

export default experiencePage;

export function Head() {
  return <title>Experience</title>;
}

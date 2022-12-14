import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Wrapper,
  Header,
  ProjectsWrapper,
  Project,
  IconsWrapper,
} from './ProjectsSlider.styles';
import ArrowButton from '../ArrowButton/ArrowButton';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkIcon from '../../assets/icons/Link.svg';

const ProjectsSlider = () => {
  const data = useStaticQuery(graphql`
    {
      karate: file(name: { eq: "karate-team-mobile" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 2960) {
            src
            srcSet
            sizes
          }
        }
      }
      champion: file(name: { eq: "champion-academy-mobile" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 2960) {
            src
            srcSet
            sizes
          }
        }
      }
      happy: file(name: { eq: "happy-notes-mobile" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 2960) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  const ProjectsSliderItems = [
    {
      name: 'Karate Team',
      href: 'https://karate-team.pl/',
      github: 'https://github.com/JayCodeGitHub/karate-team.pl',
      image: data.karate.childImageSharp.fluid,
      alt: 'Screenshot from Karate Team mobile website',
    },
    {
      name: 'Champion Academy',
      href: 'https://championacademy.pl/',
      github: 'https://github.com/JayCodeGitHub/Final-Champion-Academy',
      image: data.champion.childImageSharp.fluid,
      alt: 'Screenshot from Champion Academy mobile website',
    },
    {
      name: 'Happy Notes',
      href: 'https://github.com/JayCodeGitHub/Happy-Notes',
      github: 'https://github.com/JayCodeGitHub/Happy-Notes',
      image: data.happy.childImageSharp.fluid,
      alt: 'Screenshot from Happy Notes mobile website',
    },
  ];
  return (
    <Wrapper>
      <Header>
        <h1>Some of my projects</h1>
        <ArrowButton to="/experience">See More</ArrowButton>
      </Header>
      <ProjectsWrapper>
        {ProjectsSliderItems.map((item, i) => (
          <Project key={i}>
            <img
              src={item.image.src}
              srcSet={item.image.srcSet}
              sizes={item.image.sizes}
              alt={item.alt}
            />
            <h2>{item.name}</h2>
            <IconsWrapper>
              <a target="_blank" aria-label="GitHub Source" href={item.github}>
                <GitHubIcon />
              </a>
              <a target="_blank" aria-label="Link to website" href={item.href}>
                <LinkIcon />
              </a>
            </IconsWrapper>
          </Project>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectsSlider;

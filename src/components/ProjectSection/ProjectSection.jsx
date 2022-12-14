import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  IconsWrapper,
} from './ProjectSection.styles';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkIcon from '../../assets/icons/Link.svg';

const ProjectSection = ({
  i,
  image,
  alt,
  type,
  name,
  description,
  technologies,
  href,
  github,
}) => {
  return (
    <>
      <Wrapper>
        <ImageWrapper order={i}>
          <img src={image} alt={alt} />
        </ImageWrapper>
        <ContentWrapper order={i}>
          <p>{type}</p>
          <h2>{name}</h2>
          <div>
            <p>{description}</p>
          </div>
          <ul>
            {technologies.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <IconsWrapper>
            <a target="_blank" aria-label="GitHub Source" href={github}>
              <GitHubIcon />
            </a>
            <a target="_blank" aria-label="Link to website" href={href}>
              <LinkIcon />
            </a>
          </IconsWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default ProjectSection;

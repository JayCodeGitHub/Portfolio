import React from 'react';
import { Wrapper } from './ProjectSection.styles';

const ProjectSection = ({
  type,
  name,
  href,
  github,
  description,
  technologies,
  image,
}) => {
  return (
    <>
      <Wrapper>
        <h1>{type}</h1>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={image} />
      </Wrapper>
    </>
  );
};

export default ProjectSection;
